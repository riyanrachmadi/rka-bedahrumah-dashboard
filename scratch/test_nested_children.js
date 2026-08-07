
const { MASTER_514_KABKOTA } = require('./js/data/master514.js');
const { DEFAULT_PARAMS, DEFAULT_TARGETS } = require('./js/data/defaultParams.js');
const { SBM_RATES } = require('./js/data/masterProvinces.js');
const { distributeUnits } = require('./js/engine/allocator.js');
const { calculateAllRKA } = require('./js/engine/calculator.js');

const allocated = distributeUnits(MASTER_514_KABKOTA, DEFAULT_TARGETS);
const result = calculateAllRKA(allocated, DEFAULT_PARAMS, SBM_RATES);

console.log("Total Satkers in breakdownSatker:", result.breakdownSatker.length);
const firstSat = result.breakdownSatker[0];
console.log("First Satker:", firstSat.id, firstSat.name);
console.log("Children count (Akun BAS):", firstSat.children ? firstSat.children.length : 0);

if (firstSat.children && firstSat.children.length > 0) {
  const firstBas = firstSat.children[0];
  console.log("  First BAS Account:", firstBas.code, firstBas.name, "Pagu:", firstBas.pagu);
  console.log("  BAS Children count (Groups):", firstBas.children ? firstBas.children.length : 0);
  if (firstBas.children && firstBas.children.length > 0) {
    const firstGroup = firstBas.children[0];
    console.log("    First Group:", firstGroup.name);
    console.log("    Group Children count (Items):", firstGroup.children ? firstGroup.children.length : 0);
    if (firstGroup.children && firstGroup.children.length > 0) {
      const firstItem = firstGroup.children[0];
      console.log("      First Item:", firstItem.code, firstItem.name, "Target:", firstItem.target, "UnitPrice:", firstItem.unitPrice, "Pagu:", firstItem.pagu);
    }
  }
}
