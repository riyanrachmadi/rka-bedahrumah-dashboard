import json

# Load master 514
with open("/Users/riyanr/.gemini/antigravity/scratch/rka-bedah-rumah-dashboard/js/data/master514.js", "r") as f:
    c = f.read()

# Extract json
import re
match = re.search(r'export const MASTER_514_KABKOTA = (\[.*?\]);', c, re.DOTALL)
kabkota = json.loads(match.group(1))

total_units = sum(k.get('indikasiAwal', 0) for k in kabkota)
print(f"Total units in master514: {total_units}")

# Check wilayah kerja counts
w1 = [k for k in kabkota if k.get('wilayahKerja') == 'Wilayah I']
w2 = [k for k in kabkota if k.get('wilayahKerja') == 'Wilayah II']
w3 = [k for k in kabkota if k.get('wilayahKerja') == 'Wilayah III']

print(f"Wilayah I (Sumatera & Kalimantan): {len(w1)} Kab/Kota, {sum(k['indikasiAwal'] for k in w1)} units")
print(f"Wilayah II (Jawa, Bali, NT): {len(w2)} Kab/Kota, {sum(k['indikasiAwal'] for k in w2)} units")
print(f"Wilayah III (Sulawesi, Maluku, Papua): {len(w3)} Kab/Kota, {sum(k['indikasiAwal'] for k in w3)} units")

# Check tiers
mudah = [k for k in kabkota if k.get('zone') == 'Mudah']
sedang = [k for k in kabkota if k.get('zone') == 'Sedang']
sulit = [k for k in kabkota if k.get('zone') == 'Sulit']

print(f"Tier 20 Jt (Mudah): {len(mudah)} Kab/Kota, {sum(k['indikasiAwal'] for k in mudah)} units")
print(f"Tier 25 Jt (Sedang): {len(sedang)} Kab/Kota, {sum(k['indikasiAwal'] for k in sedang)} units")
print(f"Tier 40 Jt (Sulit): {len(sulit)} Kab/Kota, {sum(k['indikasiAwal'] for k in sulit)} units")
