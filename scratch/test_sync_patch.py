import json, re

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

# Let's write node code to test
node_code = """
const fs = require('fs');
const bundleCode = fs.readFileSync('js/bundle.js', 'utf8');
eval(bundleCode);

// Test calculateAllRKA
const res = calculateAllRKA(distributeUnits(MASTER_514_KABKOTA, DEFAULT_TARGETS), DEFAULT_PARAMS, SBM_RATES);

console.log("Summary Grand Total RKA  :", res.summary.grandTotalRKA.toLocaleString('id-ID'));
console.log("Summary Pendampingan Total:", res.summary.grandTotalPendampingan.toLocaleString('id-ID'));

// Check sum of detailKabKota
const sumFisik = res.detailKabKota.reduce((a, k) => a + (k.biayaFisik_526312 || 0), 0);
const sumPend = res.detailKabKota.reduce((a, k) => a + (k.totalPendampingan || 0), 0);
const sumGrand = res.detailKabKota.reduce((a, k) => a + (k.grandTotal || 0), 0);

console.log("Detail KabKota Fisik Sum   :", sumFisik.toLocaleString('id-ID'));
console.log("Detail KabKota Pend Sum    :", sumPend.toLocaleString('id-ID'));
console.log("Detail KabKota Grand Sum   :", sumGrand.toLocaleString('id-ID'));
"""

with open("scratch/run_patch_test.js", "w", encoding="utf-8") as f:
    f.write(node_code)

print("Saved run_patch_test.js")
