import json, re

# Load master 514
with open("js/data/master514.js", "r", encoding="utf-8") as f:
    text = f.read()
start = text.find("[")
end = text.rfind("]")
kab_list = json.loads(text[start:end+1])

for k in kab_list:
    if str(k['provId']) == '97':
        k['provId'] = '96'

with open("js/data/masterProvinces.js", "r", encoding="utf-8") as f:
    prov_text = f.read()
cleaned_prov = re.sub(r'//.*', '', prov_text)

def parse_js_lit(raw_str):
    s = re.sub(r'([a-zA-Z0-9_]+)\s*:', r'"\1":', raw_str)
    s = s.replace("true", "True").replace("false", "False")
    return eval(s)

prov_match = re.search(r"export const MASTER_PROVINCES = (\[.*?\]);", cleaned_prov, re.DOTALL)
prov_list = parse_js_lit(prov_match.group(1))

sat_match = re.search(r"export const MASTER_SATKER = (\[.*?\]);", cleaned_prov, re.DOTALL)
satker_list = parse_js_lit(sat_match.group(1))

# Write node script to simulate distribution and check if totals match 100%
node_script = """
const fs = require('fs');
const bundleCode = fs.readFileSync('js/bundle.js', 'utf8');
eval(bundleCode);

// Modify calculateAllRKA logic to distribute institutional costs to detailKabKota
function calculateAllRKASynced(allocatedKabKotaList, params, sbmRates = SBM_RATES) {
  const baseResult = calculateAllRKA(allocatedKabKotaList, params, sbmRates);
  const provMap = new Map(baseResult.breakdownProvinsi.map(p => [String(p.id).trim(), p]));
  const satkerMap = new Map(baseResult.breakdownSatker.map(s => [s.id, s]));

  const costPerPesertaPembekalan = sbmRates.paketFullboard5Hari + sbmRates.transportPembekalan + sbmRates.uangHarianPembekalan;
  const costPerSatkerKoordPusat = params.koordPusatPersonel * params.koordPusatFrekuensi * (
    sbmRates.tiketPPJakarta + (3 * sbmRates.uangHarianJakarta) + (2 * sbmRates.hotelJakarta) + sbmRates.taksiJakartaPP
  );
  const biayaPanitiaSatkerProv = roundUpToThousand(params.panitiaSatkerPembekalan * costPerPesertaPembekalan);

  const syncedKabKota = baseResult.detailKabKota.map(k => {
    const pId = String(k.provId).trim();
    const prov = provMap.get(pId);
    const provUnits = prov ? (prov.totalUnit || 1) : 1;
    const ikkProvCoeff = prov ? ((prov.ikk || 100) / 100) : 1;

    const sSatker = baseResult.breakdownSatker.find(s => (s.provIds || []).includes(pId)) || {};
    const satkerUnits = sSatker.totalUnit || 1;

    const units = k.targetUnitFinal || 0;
    const ratioProv = units > 0 ? (units / provUnits) : 0;
    const ratioSatker = units > 0 ? (units / satkerUnits) : 0;

    const sharePanitia = Math.round(ratioProv * biayaPanitiaSatkerProv);
    const shareVideo = Math.round(ratioProv * (params.rateVideoProv * ikkProvCoeff));
    const shareSewaPPK = Math.round(ratioProv * ((prov ? prov.ppkCount : 1) * params.masaKorkab * sbmRates.sewaMobilPPKBulanan));
    const shareKoordPusat = Math.round(ratioSatker * costPerSatkerKoordPusat);

    const komp7_pembekalan = k.komp7_pembekalan + sharePanitia;
    const komp11_koordPusat = shareKoordPusat;
    const komp13_videoBestPractice = shareVideo;
    const komp16a_sewaPPK = shareSewaPPK;

    const bas_522191 = k.bas_522191 + shareVideo;
    const bas_524111 = k.bas_524111 + shareKoordPusat;
    const bas_524119 = k.bas_524119 + sharePanitia;
    const bas_522141 = k.bas_522141 + shareSewaPPK;

    const totalPendampingan = bas_522191 + k.bas_521211 + bas_524111 + bas_524119 + bas_522141;
    const grandTotal = k.biayaFisik_526312 + totalPendampingan;

    return {
      ...k,
      komp7_pembekalan,
      komp11_koordPusat,
      komp13_videoBestPractice,
      komp16a_sewaPPK,
      bas_522191,
      bas_524111,
      bas_524119,
      bas_522141,
      totalPendampingan,
      grandTotal
    };
  });

  const sumGrand = syncedKabKota.reduce((a, k) => a + k.grandTotal, 0);
  const sumPend = syncedKabKota.reduce((a, k) => a + k.totalPendampingan, 0);
  const sumFisik = syncedKabKota.reduce((a, k) => a + k.biayaFisik_526312, 0);

  console.log("=== SYNCED NUMBERS RESULT ===");
  console.log("Executive Dashboard Grand Total RKA : Rp", baseResult.summary.grandTotalRKA.toLocaleString('id-ID'), "->", formatRupiahCompact(baseResult.summary.grandTotalRKA));
  console.log("Tab 514 Kab/Kota Sum Grand Total   : Rp", sumGrand.toLocaleString('id-ID'), "->", formatRupiahCompact(sumGrand));
  console.log("Tab 514 Kab/Kota Sum Pendampingan  : Rp", sumPend.toLocaleString('id-ID'), "->", formatRupiahCompact(sumPend));
  console.log("Tab 514 Kab/Kota Sum Fisik         : Rp", sumFisik.toLocaleString('id-ID'), "->", formatRupiahCompact(sumFisik));
  console.log("Exact Difference Grand Total       : Rp", Math.abs(baseResult.summary.grandTotalRKA - sumGrand).toLocaleString('id-ID'));
}

calculateAllRKASynced(distributeUnits(MASTER_514_KABKOTA, DEFAULT_TARGETS), DEFAULT_PARAMS, SBM_RATES);
"""

with open("scratch/run_sync_sim.js", "w", encoding="utf-8") as f:
    f.write(node_script)

print("Saved run_sync_sim.js")
