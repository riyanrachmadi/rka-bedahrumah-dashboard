const fs = require('fs');

// Read bundle.js and execute in a simulated environment
const bundleText = fs.readFileSync('js/bundle.js', 'utf8');

// Execute script in mock DOM
const { JSDOM } = require('jsdom');
const dom = new JSDOM(`<!DOCTYPE html><html><body>
  <div id="nonfisik-total-anggaran"></div>
  <div id="nonfisik-total-tpm"></div>
  <div id="nonfisik-total-korkab"></div>
  <select id="filter-nonfisik-satker"><option value=""></option></select>
  <thead id="thead-16-komponen"></thead>
  <tbody id="tbody-16-komponen"></tbody>
  <tfoot id="tfoot-16-komponen"></tfoot>
  <div id="tree-expand-controls"></div>
</body></html>`);

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

eval(bundleText);

// Run calculateAllRKA
const allocated = distributeUnits(MASTER_514_KABKOTA, DEFAULT_TARGETS);
const calcData = calculateAllRKA(allocated, DEFAULT_PARAMS, SBM_RATES);

console.log("Calculated summary:", calcData.summary.totalUnitNasional);
console.log("Breakdown Satker Count:", calcData.breakdownSatker.length);

renderTabKomposisiNonFisik(calcData);

const tbody = document.getElementById("tbody-16-komponen");
console.log("Tbody HTML length:", tbody.innerHTML.length);
console.log("Tbody Children count:", tbody.children.length);
if (tbody.children.length === 0) {
  console.log("TBODY IS EMPTY! HTML is:", tbody.innerHTML);
} else {
  console.log("First 3 rows of tbody:");
  for (let i = 0; i < Math.min(3, tbody.children.length); i++) {
    console.log(`Row ${i + 1}:`, tbody.children[i].outerHTML);
  }
}
