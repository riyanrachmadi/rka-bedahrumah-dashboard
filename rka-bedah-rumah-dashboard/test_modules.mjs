// Test all JS module imports and integrity
import { MASTER_PROVINCES, SATKER_DIPA_LIST, MASTER_SBM_2025 } from './js/data/masterProvinces.js';
import { MASTER_514_KABKOTA } from './js/data/master514.js';
import { DEFAULT_TARGETS, DEFAULT_PARAMS } from './js/data/defaultParams.js';
import { allocateUnits } from './js/engine/allocator.js';
import { calculateRKAPostur } from './js/engine/calculator.js';

console.log("Loading modules...");
console.log(`Provinces: ${MASTER_PROVINCES.length}`);
console.log(`Satker: ${SATKER_DIPA_LIST.length}`);
console.log(`514 Kab/Kota: ${MASTER_514_KABKOTA.length}`);

// Test calculation
const res = calculateRKAPostur(DEFAULT_PARAMS, MASTER_514_KABKOTA, MASTER_SBM_2025, DEFAULT_TARGETS);
console.log("Summary:", res.summary);
console.log("BAS Konsolidasi:", res.konsolidasiBAS.length);
console.log("Breakdown Provinsi:", res.breakdownProvinsi.length);
console.log("Breakdown Satker:", res.breakdownSatker.length);
console.log("Detail Kab/Kota:", res.detailKabKota.length);
console.log(">>> JS ENGINE CHECK PASSED! <<<");
