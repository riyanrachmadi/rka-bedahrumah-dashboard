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

print("NUMBER ANALYSIS:")
print("1. Anggaran Fisik (526312): Rp 8.087.010.000.000 (SAMA PERBAIKAN DI KEDUA TAMPILAN)")
print("2. Pendampingan di Footer Tabel 514 Kab/Kota: Rp 1.120.046.073.000")
print("3. Pendampingan di Executive Dashboard KPI : Rp 1.130.xxx.xxx.xxx (atau Rp 1,13 T)")
print("   -> Selisih: ~Rp 10 Miliar s/d Rp 13 Miliar merupakan Alokasi Komponen Kelembagaan Satker DIPA/Provinsi:")
print("      a. Komp 11: Koordinasi 34 Satker ke Pusat (Jakarta)")
print("      b. Komp 13: Dokumentasi Video Best Practice per 38 Provinsi")
print("      c. Komp 16A: Sewa Mobil Operasional Bulanan PPK Satker")
print("      d. Komp 7: Panitia Satker Pembekalan (5 Orang per Provinsi)")
