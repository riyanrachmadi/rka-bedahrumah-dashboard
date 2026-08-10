const fs = require('fs');

// Read bundle.js and execute in node context
const bundleCode = fs.readFileSync('js/bundle.js', 'utf8');
eval(bundleCode);

console.log("=== EXECUTING CALCULATOR IN NODE.JS ===");

const rawKabKota = MASTER_514_KABKOTA;
const params = DEFAULT_PARAMS;
const sbm = SBM_RATES;
const targets = DEFAULT_TARGETS;

// 1. Calculation WITH Allocator (370,000 units target)
const allocated370k = distributeUnits(rawKabKota, targets);
const rka370k = calculateAllRKA(allocated370k, params, sbm);

// 2. Calculation WITHOUT Allocator (Raw 400,000 units from CSV)
const raw400k = rawKabKota.map(k => ({ ...k, targetUnitFinal: k.indikasiAwal }));
const rka400k = calculateAllRKA(raw400k, params, sbm);

console.log("\n--- OPTION A: Target Delineasi (370,000 Unit) ---");
console.log("Total Unit Nasional     :", rka370k.summary.totalUnitNasional.toLocaleString('id-ID'));
console.log("Total Bantuan Fisik     : Rp", rka370k.summary.totalFisik_526312.toLocaleString('id-ID'));
console.log("Total Pendampingan      : Rp", rka370k.summary.grandTotalPendampingan.toLocaleString('id-ID'));
console.log("Grand Total RKA (KPI)   : Rp", rka370k.summary.grandTotalRKA.toLocaleString('id-ID'), `(${formatRupiahCompact(rka370k.summary.grandTotalRKA)})`);

console.log("\n--- OPTION B: Raw Master CSV (400,000 Unit Indikasi Awal) ---");
console.log("Total Unit Nasional     :", rka400k.summary.totalUnitNasional.toLocaleString('id-ID'));
console.log("Total Bantuan Fisik     : Rp", rka400k.summary.totalFisik_526312.toLocaleString('id-ID'));
console.log("Total Pendampingan      : Rp", rka400k.summary.grandTotalPendampingan.toLocaleString('id-ID'));
console.log("Grand Total RKA         : Rp", rka400k.summary.grandTotalRKA.toLocaleString('id-ID'), `(${formatRupiahCompact(rka400k.summary.grandTotalRKA)})`);

// Sum of detailKabKota in 400k vs 370k
const sumKab370k = rka370k.detailKabKota.reduce((a, k) => a + (k.grandTotal || 0), 0);
const sumKab400k = rka400k.detailKabKota.reduce((a, k) => a + (k.grandTotal || 0), 0);
console.log("\n--- SUM OF 514 KAB/KOTA DETAIL ROWS ---");
console.log("Sum detailKabKota 370k : Rp", sumKab370k.toLocaleString('id-ID'));
console.log("Sum detailKabKota 400k : Rp", sumKab400k.toLocaleString('id-ID'));
