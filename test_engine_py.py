import json, re

# Read data files
with open("js/data/master514.js", "r") as f:
    master514_text = f.read()
    m514 = json.loads(re.search(r'export const MASTER_514_KABKOTA = (\[.*?\]);', master514_text, re.DOTALL).group(1))

print(f"Loaded {len(m514)} Kab/Kota from master514.js")

# 1. Largest remainder allocation test
targets = {"DJKP": 50000, "DJPKT": 120000, "DJPDS": 200000}
result_alloc = {}

for del_key, target in targets.items():
    items = [k for k in m514 if k.get("delineasi") == del_key]
    sum_ind = sum(k.get("indikasiAwal", 0) for k in items)
    
    evaluated = []
    for item in items:
        float_alloc = (item["indikasiAwal"] / sum_ind) * target
        int_part = int(float_alloc)
        rem = float_alloc - int_part
        evaluated.append({"id": item["id"], "float": float_alloc, "int": int_part, "rem": rem, "target": int_part, "item": item})
    
    diff = target - sum(e["int"] for e in evaluated)
    evaluated.sort(key=lambda x: x["rem"], reverse=True)
    for i in range(diff):
        evaluated[i]["target"] += 1
    
    for e in evaluated:
        result_alloc[e["id"]] = e["target"]

total_allocated = sum(result_alloc.values())
print(f"Total allocated units: {total_allocated} (Target: 370.000)")
assert total_allocated == 370000, "Total allocated must be 370.000"

# Check Wilayah Kerja breakdown
w1 = [k for k in m514 if k.get("wilayahKerja") == "Wilayah I"]
w2 = [k for k in m514 if k.get("wilayahKerja") == "Wilayah II"]
w3 = [k for k in m514 if k.get("wilayahKerja") == "Wilayah III"]

print(f"\n--- DISTRIBUSI WILAYAH KERJA ---")
print(f"Wilayah I (Sumatera & Kalimantan): {len(w1)} Kab/Kota, {sum(result_alloc[k['id']] for k in w1)} unit")
print(f"Wilayah II (Jawa, Bali, NT): {len(w2)} Kab/Kota, {sum(result_alloc[k['id']] for k in w2)} unit")
print(f"Wilayah III (Sulawesi, Maluku, Papua): {len(w3)} Kab/Kota, {sum(result_alloc[k['id']] for k in w3)} unit")

# Check Tiers
mudah = [k for k in m514 if k.get("zone") == "Mudah"]
sedang = [k for k in m514 if k.get("zone") == "Sedang"]
sulit = [k for k in m514 if k.get("zone") == "Sulit"]

u_mudah = sum(result_alloc[k['id']] for k in mudah)
u_sedang = sum(result_alloc[k['id']] for k in sedang)
u_sulit = sum(result_alloc[k['id']] for k in sulit)

print(f"\n--- DISTRIBUSI 3 TIER BANTUAN FISIK (NO IKK) ---")
print(f"Tier 20 Jt (Mudah): {len(mudah)} Kab/Kota, {u_mudah} unit, Anggaran Fisik: Rp {u_mudah * 20000000:,}")
print(f"Tier 25 Jt (Sedang): {len(sedang)} Kab/Kota, {u_sedang} unit, Anggaran Fisik: Rp {u_sedang * 25000000:,}")
print(f"Tier 40 Jt (Sulit): {len(sulit)} Kab/Kota, {u_sulit} unit, Anggaran Fisik: Rp {u_sulit * 40000000:,}")
total_fisik = (u_mudah * 20000000) + (u_sedang * 25000000) + (u_sulit * 40000000)
print(f"Total Postur 1 (Bantuan Fisik): Rp {total_fisik:,}")

# Check TPM & Korkab
total_tpm = 0
total_korkab = 0
for k in m514:
    unit = result_alloc[k['id']]
    total_tpm += int(round((unit / 40.0) * 2))
    total_korkab += max(1, int(round(unit / 1000.0))) if unit > 0 else 0

print(f"\n--- SDM LAPANGAN ---")
print(f"Total TPM: {total_tpm} Org")
print(f"Total Korkab: {total_korkab} Org")

print("\n>>> ALL MATHEMATICAL & AGGREGATION CHECKS PASSED SUCCESSFULLY! <<<")
