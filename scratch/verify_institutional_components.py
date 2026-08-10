import json, re

# Calculate exact numbers for Kab/Kota sum vs Satker/Prov Rollup sum
with open("js/data/master514.js", "r", encoding="utf-8") as f:
    text = f.read()
start = text.find("[")
end = text.rfind("]")
kab_list = json.loads(text[start:end+1])

# Run Node script to get exact numbers from calculator engine
node_script = """
const fs = require('fs');
const bundleCode = fs.readFileSync('js/bundle.js', 'utf8');
eval(bundleCode);

const calc370k = calculateAllRKA(distributeUnits(MASTER_514_KABKOTA, DEFAULT_TARGETS), DEFAULT_PARAMS, SBM_RATES);

const kabSumFisik = calc370k.detailKabKota.reduce((a, k) => a + k.biayaFisik_526312, 0);
const kabSumPend = calc370k.detailKabKota.reduce((a, k) => a + k.totalPendampingan, 0);
const kabSumGrand = calc370k.detailKabKota.reduce((a, k) => a + k.grandTotal, 0);

console.log("=== FLAT 514 KAB/KOTA TABLE FOOTER TOTALS ===");
console.log("Kab/Kota Sum Fisik        : Rp", kabSumFisik.toLocaleString('id-ID'));
console.log("Kab/Kota Sum Pendampingan : Rp", kabSumPend.toLocaleString('id-ID'));
console.log("Kab/Kota Sum Grand Total  : Rp", kabSumGrand.toLocaleString('id-ID'));

console.log("\\n=== EXECUTIVE DASHBOARD / SATKER CONSOLIDATED TOTALS ===");
console.log("Satker Total Fisik        : Rp", calc370k.summary.totalFisik_526312.toLocaleString('id-ID'));
console.log("Satker Total Pendampingan : Rp", calc370k.summary.grandTotalPendampingan.toLocaleString('id-ID'));
console.log("Satker Grand Total RKA    : Rp", calc370k.summary.grandTotalRKA.toLocaleString('id-ID'), "-> Formatted:", formatRupiahCompact(calc370k.summary.grandTotalRKA));

console.log("\\n=== SELISIH KOMPONEN KELEMBAGAAN SATKER & PROVINSI ===");
const diffPend = calc370k.summary.grandTotalPendampingan - kabSumPend;
console.log("Selisih Pendampingan      : Rp", diffPend.toLocaleString('id-ID'));
"""
with open("scratch/run_node_check.js", "w", encoding="utf-8") as f:
    f.write(node_script)

print("Saved run_node_check.js")
