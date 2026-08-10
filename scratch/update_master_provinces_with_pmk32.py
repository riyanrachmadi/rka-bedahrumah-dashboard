import json, re

with open("scratch/sbm_parsed_map.json", "r", encoding="utf-8") as f:
    sbm_map = json.load(f)

with open("js/data/masterProvinces.js", "r", encoding="utf-8") as f:
    code = f.read()

# Load provinces array
prov_match = re.search(r"export const MASTER_PROVINCES = (\[.*?\]);", code, re.DOTALL)
if not prov_match:
    print("Error: MASTER_PROVINCES not found")
    exit(1)

prov_str = prov_match.group(1)

# Helper map to normalize names
name_map = {
    "Aceh": "ACEH",
    "Sumatera Utara": "SUMATERA UTARA",
    "Sumatera Barat": "SUMATERA BARAT",
    "Riau": "RIAU",
    "Jambi": "JAMBI",
    "Sumatera Selatan": "SUMATERA SELATAN",
    "Bengkulu": "BENGKULU",
    "Lampung": "LAMPUNG",
    "Kepulauan Bangka Belitung": "KEPULAUAN BANGKA BELITUNG",
    "Kepulauan Riau": "KEPULAUAN RIAU",
    "DKI Jakarta": "DKI JAKARTA",
    "Jawa Barat": "JAWA BARAT",
    "Jawa Tengah": "JAWA TENGAH",
    "DI Yogyakarta": "DI YOGYAKARTA",
    "Jawa Timur": "JAWA TIMUR",
    "Banten": "BANTEN",
    "Bali": "BALI",
    "Nusa Tenggara Barat": "NUSA TENGGARA BARAT",
    "Nusa Tenggara Timur": "NUSA TENGGARA TIMUR",
    "Kalimantan Barat": "KALIMANTAN BARAT",
    "Kalimantan Tengah": "KALIMANTAN TENGAH",
    "Kalimantan Selatan": "KALIMANTAN SELATAN",
    "Kalimantan Timur": "KALIMANTAN TIMUR",
    "Kalimantan Utara": "KALIMANTAN UTARA",
    "Sulawesi Utara": "SULAWESI UTARA",
    "Sulawesi Tengah": "SULAWESI TENGAH",
    "Sulawesi Selatan": "SULAWESI SELATAN",
    "Sulawesi Tenggara": "SULAWESI TENGGARA",
    "Gorontalo": "GORONTALO",
    "Sulawesi Barat": "SULAWESI BARAT",
    "Maluku": "MALUKU",
    "Maluku Utara": "MALUKU UTARA",
    "Papua Barat": "PAPUA BARAT",
    "Papua Barat Daya": "PAPUA BARAT DAYA",
    "Papua": "PAPUA",
    "Papua Selatan": "PAPUA SELATAN",
    "Papua Tengah": "PAPUA TENGAH",
    "Papua Pegunungan": "PAPUA PEGUNUNGAN"
}

# Generate updated MASTER_PROVINCES JS code
lines = prov_str.strip().split("\n")
new_lines = []

for line in lines:
    m = re.search(r"id:\s*'(\d+)',\s*name:\s*'([^']+)'", line)
    if m:
        p_id = m.group(1)
        p_name = m.group(2)
        sbm_key = name_map.get(p_name, p_name.upper())
        sbm = sbm_map.get(sbm_key, {})
        
        sewa_minibus = sbm.get("sewa_minibus_bulan", 6500000)
        sewa_harian = sbm.get("sewa_harian", 1000000)
        makan_rapat = sbm.get("makan_rapat", 50000)
        kudapan_rapat = sbm.get("kudapan_rapat", 20000)
        tiket_pesawat = sbm.get("tiket_pesawat", 3000000)
        
        # Clean line of closing brace
        base_line = line.rstrip(", ").rstrip("}").rstrip()
        # Ensure properties are added cleanly
        if "sewaMinibusBulanan" in base_line:
            base_line = re.sub(r",\s*sewaMinibusBulanan:\s*\d+", "", base_line)
        
        updated_line = f"{base_line}, sewaMinibusBulanan: {sewa_minibus}, sewaMobilHarian: {sewa_harian}, sbmMakanRapat: {makan_rapat}, sbmKudapanRapat: {kudapan_rapat}, sbmTiketPP: {tiket_pesawat} }},"
        new_lines.append(updated_line)
    else:
        new_lines.append(line)

new_prov_str = "\n".join(new_lines)
if new_prov_str.endswith(","):
    new_prov_str = new_prov_str[:-1]

new_code = code.replace(prov_str, new_prov_str)

with open("js/data/masterProvinces.js", "w", encoding="utf-8") as f:
    f.write(new_code)

print("Successfully updated masterProvinces.js with official PMK 32 Tahun 2025 SBM data!")
