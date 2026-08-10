import json, re

# Modify js/engine/calculator.js to include synced detailKabKota and test
with open("js/engine/calculator.js", "r", encoding="utf-8") as f:
    calc_code = f.read()

# Add sync logic right before returning result
sync_patch = """
  // Synchronize 4 Institutional Satker/Province Components down to detailKabKota items
  const provMap = new Map(breakdownProvinsi.map(p => [String(p.id).trim(), p]));
  const detailKabKotaSynced = detailKabKota.map(k => {
    const pId = String(k.provId).trim();
    const prov = provMap.get(pId);
    const provUnits = prov ? (prov.totalUnit || 1) : 1;
    const ikkProvCoeff = prov ? ((prov.ikk || 100) / 100) : 1;
    const sSatker = breakdownSatker.find(s => (s.provIds || []).includes(pId)) || {};
    const satkerUnits = sSatker.totalUnit || 1;

    const units = k.targetUnitFinal || 0;
    const ratioProv = units > 0 ? (units / provUnits) : 0;
    const ratioSatker = units > 0 ? (units / satkerUnits) : 0;

    const biayaPanitiaSatkerProv = roundUpToThousand(params.panitiaSatkerPembekalan * costPerPesertaPembekalan);
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
"""

print("Patch snippet ready.")
