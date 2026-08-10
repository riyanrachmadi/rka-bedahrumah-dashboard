import json, re

with open("js/data/master514.js", "r", encoding="utf-8") as f:
    text = f.read()
start = text.find("[")
end = text.rfind("]")
kab_list = json.loads(text[start:end+1])

# Fix provId 97 -> 96
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

# Write node test script to verify exact distribution matching
node_test = """
const fs = require('fs');
const bundleCode = fs.readFileSync('js/bundle.js', 'utf8');
eval(bundleCode);

const allocData = distributeUnits(MASTER_514_KABKOTA, DEFAULT_TARGETS);
const initialCalc = calculateAllRKA(allocData, DEFAULT_PARAMS, SBM_RATES);

console.log("Original Satker Grand Total RKA  : Rp", initialCalc.summary.grandTotalRKA.toLocaleString('id-ID'));
console.log("Original Satker Pendampingan Total: Rp", initialCalc.summary.grandTotalPendampingan.toLocaleString('id-ID'));
console.log("Original Kab/Kota Grand Total Sum : Rp", initialCalc.detailKabKota.reduce((a,k)=>a+k.grandTotal,0).toLocaleString('id-ID'));
console.log("Original Kab/Kota Pendampingan Sum: Rp", initialCalc.detailKabKota.reduce((a,k)=>a+k.totalPendampingan,0).toLocaleString('id-ID'));

"""

with open("scratch/run_sync_math.js", "w", encoding="utf-8") as f:
    f.write(node_test)

print("Saved run_sync_math.js")
