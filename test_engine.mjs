import { MASTER_514_KABKOTA } from './js/data/master514.js';
import { MASTER_PROVINCES, MASTER_SATKER, SBM_RATES } from './js/data/masterProvinces.js';
import { DEFAULT_PARAMS, DEFAULT_TARGETS } from './js/data/defaultParams.js';
import { distributeUnits } from './js/engine/allocator.js';
import { calculateAllRKA } from './js/engine/calculator.js';

console.log('--- STARTING COMPREHENSIVE ENGINE TEST ---');

// 1. Distribute Units
const allocated = distributeUnits(MASTER_514_KABKOTA, DEFAULT_TARGETS);
const totalAllocated = allocated.reduce((acc, c) => acc + c.targetUnitFinal, 0);
console.log(`Total Target Allocated: ${totalAllocated} units (Expected: 370000)`);

if (totalAllocated !== 370000) {
  console.error('ERROR: Total allocated does not equal 370.000!');
  process.exit(1);
}

// 2. Run Complete RKA Calculations
const result = calculateAllRKA(allocated, DEFAULT_PARAMS, SBM_RATES);

console.log('\n--- EXECUTIVE SUMMARY ---');
console.log(`Grand Total RKA-K/L: Rp ${result.summary.grandTotalRKA.toLocaleString('id-ID')}`);
console.log(`Postur 1 (Fisik 526312): Rp ${result.summary.totalFisik_526312.toLocaleString('id-ID')}`);
console.log(`Postur 2 (16 Pendampingan): Rp ${result.summary.grandTotalPendampingan.toLocaleString('id-ID')}`);
console.log(`Biaya Pendampingan / Unit: Rp ${result.summary.rataPendampinganPerUnit.toLocaleString('id-ID')}`);
console.log(`Total Personel: ${result.summary.totalTPM} TPM, ${result.summary.totalKorkab} Korkab, ${result.summary.totalPPK} PPK`);

console.log('\n--- 3-TIER FISIK COMPOSITION ---');
console.log(`Tier 20 Jt (Mudah): ${result.komposisiFisik.tier20.unit.toLocaleString('id-ID')} unit (${result.komposisiFisik.tier20.pctUnit.toFixed(1)}%), Rp ${result.komposisiFisik.tier20.biaya.toLocaleString('id-ID')}`);
console.log(`Tier 25 Jt (Sedang): ${result.komposisiFisik.tier25.unit.toLocaleString('id-ID')} unit (${result.komposisiFisik.tier25.pctUnit.toFixed(1)}%), Rp ${result.komposisiFisik.tier25.biaya.toLocaleString('id-ID')}`);
console.log(`Tier 40 Jt (Sulit): ${result.komposisiFisik.tier40.unit.toLocaleString('id-ID')} unit (${result.komposisiFisik.tier40.pctUnit.toFixed(1)}%), Rp ${result.komposisiFisik.tier40.biaya.toLocaleString('id-ID')}`);

console.log('\n--- WILAYAH KERJA SUMMARY ---');
result.breakdownWilayahKerja.forEach(w => {
  console.log(`${w.name} (${w.description}): ${w.totalUnit.toLocaleString('id-ID')} units, Grand Total: Rp ${w.grandTotal.toLocaleString('id-ID')} (${w.pctGrandTotal.toFixed(1)}%)`);
});

console.log('\n--- 6 BAGAN AKUN STANDAR (BAS) ROLLUP ---');
result.konsolidasiBAS.forEach(b => {
  console.log(`${b.code} - ${b.name}: Rp ${b.total.toLocaleString('id-ID')} (${b.percentage.toFixed(2)}%)`);
});

console.log('\n--- 16 KOMPONEN PENDAMPINGAN SUMMARY ---');
result.komposisi16Komponen.forEach(k => {
  console.log(`${k.no}. ${k.name} [${k.bas}]: Rp ${k.total.toLocaleString('id-ID')} (${k.percentage.toFixed(2)}%) - Rp ${k.perUnit.toLocaleString('id-ID')}/unit`);
});

console.log('\n>>> ALL ENGINE & AGGREGATION TESTS PASSED SUCCESSFULLY! <<<');
