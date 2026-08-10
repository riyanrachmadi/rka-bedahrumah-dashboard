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

# Check exact formula for institutional components per unit:
# Total National Units = 370,000
# Total PPK = 56
# Masa Korkab = 10
# Sewa PPK Bulanan = 17,500,000
# Total Sewa PPK = 56 * 10 * 17,500,000 = 9,800,000,000
sewa_ppk_per_unit = 9800000000 / 370000 # ~ 26,486.48 per unit

# Koord Pusat = 34 Satker * (koordPusatPersonel * koordPusatFrekuensi * (tiket + 3*uangHarian + 2*hotel + taksi))
# 2 Personel * 2 Freq * (3,500,000 + 1,590,000 + 1,920,000 + 400,000) = 4 * 7,410,000 = 29,640,000 per Satker
# Total 34 Satker = 34 * 29,640,000 = 1,007,760,000
koord_pusat_per_unit = 1007760000 / 370000 # ~ 2,723.67 per unit

# Panitia Satker Pembekalan = 5 orang * 38 prov * costPerPeserta (paketFullboard 5,500,000 + transport 600,000 + uangHarian 750,000 = 6,850,000)
# Total Panitia Satker = 190 orang * 6,850,000 = 1,301,500,000
panitia_per_unit = 1301500000 / 370000 # ~ 3,517.56 per unit

# Video Best Practice = 15,000,000 * (IKK/100) per prov
# Total Video ~ 38 * 15,000,000 = 570,000,000
video_per_unit = 570000000 / 370000 # ~ 1,540.54 per unit

print("Per unit institutional cost addition: ~", sewa_ppk_per_unit + koord_pusat_per_unit + panitia_per_unit + video_per_unit, "Rp/unit")
