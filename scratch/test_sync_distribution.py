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

# Allocator
targets = {'DJKP': 50000, 'DJPKT': 120000, 'DJPDS': 200000}
kab_allocated = []

for del_key in ['DJKP', 'DJPKT', 'DJPDS']:
    target_for_del = targets[del_key]
    items_for_del = [k for k in kab_list if k['delineasi'] == del_key]
    sum_ind = sum(k['indikasiAwal'] for k in items_for_del)
    evaluated = []
    for item in items_for_del:
        float_alloc = (item['indikasiAwal'] / sum_ind) * target_for_del
        int_part = int(float_alloc)
        rem = float_alloc - int_part
        evaluated.append({'item': item, 'remainder': rem, 'targetUnitFinal': int_part})
    diff = target_for_del - sum(e['targetUnitFinal'] for e in evaluated)
    evaluated.sort(key=lambda x: x['remainder'], reverse=True)
    for i in range(diff):
        evaluated[i]['targetUnitFinal'] += 1
    for e in evaluated:
        item = e['item'].copy()
        item['targetUnitFinal'] = e['targetUnitFinal']
        kab_allocated.append(item)

print(f"Total Allocated 514 Kab/Kota Units: {sum(k['targetUnitFinal'] for k in kab_allocated):,}")
