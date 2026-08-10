
const fs = require("fs");
const bundleCode = fs.readFileSync("js/bundle.js", "utf8");
eval(bundleCode);

const res = calculateAllRKA(distributeUnits(MASTER_514_KABKOTA, DEFAULT_TARGETS), DEFAULT_PARAMS, SBM_RATES);
console.log("Satker count:", res.breakdownSatker.length);
console.log("Satker 0 children count:", res.breakdownSatker[0].children ? res.breakdownSatker[0].children.length : 0);
if (res.breakdownSatker[0].children) {
  console.log("BAS 521211 children count:", res.breakdownSatker[0].children[1].children ? res.breakdownSatker[0].children[1].children.length : 0);
}
