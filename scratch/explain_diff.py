import json, re

# Load master 514
with open("js/data/master514.js", "r", encoding="utf-8") as f:
    text = f.read()
start = text.find("[")
end = text.rfind("]")
kab_list = json.loads(text[start:end+1])

print("Total Indikasi Awal (CSV Raw Master):", sum(k['indikasiAwal'] for k in kab_list), "Unit")

# Calculate physically:
# Mudah: 20 Jt, Sedang: 25 Jt, Sulit: 40 Jt
unit20 = sum(k['indikasiAwal'] for k in kab_list if k['zone'] == 'Mudah')
unit25 = sum(k['indikasiAwal'] for k in kab_list if k['zone'] == 'Sedang')
unit40 = sum(k['indikasiAwal'] for k in kab_list if k['zone'] == 'Sulit')

fisik_400k = unit20 * 20000000 + unit25 * 25000000 + unit40 * 40000000
print("Bantuan Fisik 400.000 Unit (Raw CSV): Rp", f"{fisik_400k:,}".replace(',', '.'))

# Now let's calculate Allocated (370,000 units target: DJKP 50k, DJPKT 120k, DJPDS 200k)
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

tot_370k_units = sum(k['targetUnitFinal'] for k in kab_allocated)
unit20_370k = sum(k['targetUnitFinal'] for k in kab_allocated if k['zone'] == 'Mudah')
unit25_370k = sum(k['targetUnitFinal'] for k in kab_allocated if k['zone'] == 'Sedang')
unit40_370k = sum(k['targetUnitFinal'] for k in kab_allocated if k['zone'] == 'Sulit')

fisik_370k = unit20_370k * 20000000 + unit25_370k * 25000000 + unit40_370k * 40000000
print("Bantuan Fisik 370.000 Unit (Target Delineasi): Rp", f"{fisik_370k:,}".replace(',', '.'))

# Check table rendering total in app.js for Tab Master 514 Kab/Kota vs KPI Cards
