import json, re

# Load master 514
with open("js/data/master514.js", "r", encoding="utf-8") as f:
    text = f.read()
start = text.find("[")
end = text.rfind("]")
kab_list = json.loads(text[start:end+1])

# Load masterProvinces
with open("js/data/masterProvinces.js", "r", encoding="utf-8") as f:
    prov_text = f.read()
prov_clean = re.sub(r'//.*', '', prov_text)

prov_match = re.search(r"export const MASTER_PROVINCES = (\[.*?\]);", prov_clean, re.DOTALL)
prov_list = eval(re.sub(r'([a-zA-Z0-9_]+)\s*:', r'"\1":', prov_match.group(1)).replace("true", "True").replace("false", "False"))

sat_match = re.search(r"export const MASTER_SATKER = (\[.*?\]);", prov_clean, re.DOTALL)
satker_list = eval(re.sub(r'([a-zA-Z0-9_]+)\s*:', r'"\1":', sat_match.group(1)).replace("true", "True").replace("false", "False"))

# Allocate units to 370k
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

# Calculate Kab/Kota costs (using default params)
rateFisik = {'Mudah': 20000000, 'Sedang': 25000000, 'Sulit': 40000000}
sbmRembuk = 72000
sbmUangHarianLokal = 380000
sbmHotelLokal = 500000 # default
# Let's run exact calculation in Node.js / bundle.js to get exact numbers!
