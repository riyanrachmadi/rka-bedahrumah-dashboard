import json, re

# New official IKK per province
ikk_map_by_id = {
    '11': 96.88,  # Aceh
    '12': 95.87,  # Sumut
    '13': 93.56,  # Sumbar
    '14': 94.28,  # Riau
    '15': 94.04,  # Jambi
    '16': 90.84,  # Sumsel
    '17': 95.70,  # Bengkulu
    '18': 88.32,  # Lampung
    '19': 104.95, # Babel
    '21': 110.52, # Kepri
    '31': 114.50, # DKI Jakarta
    '32': 105.19, # Jabar
    '33': 100.54, # Jateng
    '34': 105.60, # DIY
    '35': 94.56,  # Jatim
    '36': 92.46,  # Banten
    '51': 110.04, # Bali
    '52': 99.43,  # NTB
    '53': 90.58,  # NTT
    '61': 106.10, # Kalbar
    '62': 105.53, # Kalteng
    '63': 101.88, # Kalsel
    '64': 120.28, # Kaltim
    '65': 105.76, # Kaltara
    '71': 101.25, # Sulut
    '72': 91.67,  # Sulteng
    '73': 96.37,  # Sulsel
    '74': 91.99,  # Sultra
    '75': 92.53,  # Gorontalo
    '76': 89.85,  # Sulbar
    '81': 100.77, # Maluku
    '82': 113.29, # Maluku Utara
    '91': 122.82, # Papua Barat
    '92': 118.31, # Papua Barat Daya
    '93': 136.79, # Papua
    '94': 146.30, # Papua Selatan
    '95': 203.60, # Papua Tengah
    '96': 241.52  # Papua Pegunungan
}

# 1. Update masterProvinces.js
with open("js/data/masterProvinces.js", "r", encoding="utf-8") as f:
    prov_code = f.read()

lines = prov_code.split("\n")
new_lines = []
for l in lines:
    m = re.search(r"id:\s*'(\d+)'", l)
    if m:
        p_id = m.group(1)
        if p_id in ikk_map_by_id:
            new_ikk = ikk_map_by_id[p_id]
            l = re.sub(r"ikk:\s*[\d\.]+", f"ikk: {new_ikk}", l)
        new_lines.append(l)
    else:
        new_lines.append(l)

new_prov_code = "\n".join(new_lines)
with open("js/data/masterProvinces.js", "w", encoding="utf-8") as f:
    f.write(new_prov_code)

print("1. Updated masterProvinces.js with new IKK values!")

# 2. Update master514.js (update IKK for each Kab/Kota object)
with open("js/data/master514.js", "r", encoding="utf-8") as f:
    master514_code = f.read()

# Load JS array as json by stripping export
arr_match = re.search(r"export const MASTER_514_KABKOTA = (\[.*?\]);", master514_code, re.DOTALL)
if not arr_match:
    print("Error: MASTER_514_KABKOTA array not found")
    exit(1)

kab_list = json.loads(arr_match.group(1))

updated_kab_count = 0
for item in kab_list:
    prov_id = str(item.get("provId", "")).strip()
    if prov_id in ikk_map_by_id:
        item["ikk"] = ikk_map_by_id[prov_id]
        updated_kab_count += 1

formatted_json = json.dumps(kab_list, indent=2)
new_master514_code = master514_code.replace(arr_match.group(1), formatted_json)

with open("js/data/master514.js", "w", encoding="utf-8") as f:
    f.write(new_master514_code)

print(f"2. Updated master514.js for all {updated_kab_count} Kab/Kota with new IKK values!")
