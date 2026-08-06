import json
import re

with open("/Users/riyanr/.gemini/antigravity/scratch/rka-bedah-rumah-dashboard/js/data/master514.js", "r") as f:
    content = f.read()

# Extract the JSON array
match = re.search(r'export const MASTER_514_KABKOTA = (\[.*?\]);', content, re.DOTALL)
if not match:
    raise Exception("Could not find MASTER_514_KABKOTA")

data = json.loads(match.group(1))

# Prov to Pulau & Wilayah Kerja mapping
prov_map = {
    # Wilayah I - Sumatera
    '11': ('Sumatera', 'Wilayah I'),
    '12': ('Sumatera', 'Wilayah I'),
    '13': ('Sumatera', 'Wilayah I'),
    '14': ('Sumatera', 'Wilayah I'),
    '15': ('Sumatera', 'Wilayah I'),
    '16': ('Sumatera', 'Wilayah I'),
    '17': ('Sumatera', 'Wilayah I'),
    '18': ('Sumatera', 'Wilayah I'),
    '19': ('Sumatera', 'Wilayah I'),
    '21': ('Sumatera', 'Wilayah I'),
    # Wilayah I - Kalimantan
    '61': ('Kalimantan', 'Wilayah I'),
    '62': ('Kalimantan', 'Wilayah I'),
    '63': ('Kalimantan', 'Wilayah I'),
    '64': ('Kalimantan', 'Wilayah I'),
    '65': ('Kalimantan', 'Wilayah I'),
    # Wilayah II - Jawa
    '31': ('Jawa', 'Wilayah II'),
    '32': ('Jawa', 'Wilayah II'),
    '33': ('Jawa', 'Wilayah II'),
    '34': ('Jawa', 'Wilayah II'),
    '35': ('Jawa', 'Wilayah II'),
    '36': ('Jawa', 'Wilayah II'),
    # Wilayah II - Bali & NT
    '51': ('Bali-Nusa Tenggara', 'Wilayah II'),
    '52': ('Bali-Nusa Tenggara', 'Wilayah II'),
    '53': ('Bali-Nusa Tenggara', 'Wilayah II'),
    # Wilayah III - Sulawesi
    '71': ('Sulawesi', 'Wilayah III'),
    '72': ('Sulawesi', 'Wilayah III'),
    '73': ('Sulawesi', 'Wilayah III'),
    '74': ('Sulawesi', 'Wilayah III'),
    '75': ('Sulawesi', 'Wilayah III'),
    '76': ('Sulawesi', 'Wilayah III'),
    # Wilayah III - Maluku
    '81': ('Maluku', 'Wilayah III'),
    '82': ('Maluku', 'Wilayah III'),
    # Wilayah III - Papua
    '91': ('Papua', 'Wilayah III'),
    '92': ('Papua', 'Wilayah III'),
    '93': ('Papua', 'Wilayah III'),
    '94': ('Papua', 'Wilayah III'),
    '95': ('Papua', 'Wilayah III'),
    '96': ('Papua', 'Wilayah III'),
}

for item in data:
    prov_id = str(item.get('provId', ''))
    pulau, wilayah = prov_map.get(prov_id, ('Lainnya', 'Wilayah I'))
    item['pulau'] = pulau
    item['wilayahKerja'] = wilayah

new_js = f"""/**
 * MASTER DATA 514 KABUPATEN/KOTA DI INDONESIA (RESMI KEMENTERIAN PKP)
 * Delineasi Ditjen: DJKP (50k), DJPKT (120k), DJPDS (200k)
 * Wilayah Kerja: Wilayah I, Wilayah II, Wilayah III
 * Pulau: Sumatera, Jawa, Bali-Nusa Tenggara, Kalimantan, Sulawesi, Maluku, Papua
 */

export const MASTER_514_KABKOTA = {json.dumps(data, indent=2, ensure_ascii=False)};
"""

with open("/Users/riyanr/.gemini/antigravity/scratch/rka-bedah-rumah-dashboard/js/data/master514.js", "w") as f:
    f.write(new_js)

print(f"Successfully enriched {len(data)} Kab/Kota with pulau & wilayahKerja!")
