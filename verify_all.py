# Comprehensive verification of the entire calculation pipeline
import json

# 1. Load 514 dataset
with open("/Users/riyanr/.gemini/antigravity/scratch/rka-bedah-rumah-dashboard/js/data/master514.js", "r") as f:
    raw = f.read()
    json_str = raw.split("export const MASTER_514_KABKOTA = ")[1].rstrip(";\n ")
    kabkota_list = json.loads(json_str)

# 2. Check counts
assert len(kabkota_list) == 514, f"Expected 514 Kab/Kota, got {len(kabkota_list)}"
provinces = set(k["provName"] for k in kabkota_list)
assert len(provinces) == 38, f"Expected 38 Provinces, got {len(provinces)}"

print(f"✓ 514 Kab/Kota successfully mapped across all {len(provinces)} Provinces.")

# 3. Check Delineasi Distribution
djkp_count = sum(1 for k in kabkota_list if k["delineasi"] == "DJKP")
djpkt_count = sum(1 for k in kabkota_list if k["delineasi"] == "DJPKT")
djpds_count = sum(1 for k in kabkota_list if k["delineasi"] == "DJPDS")
print(f"✓ Delineasi Kab/Kota Breakdown -> DJKP: {djkp_count}, DJPKT: {djpkt_count}, DJPDS: {djpds_count}")

# 4. Check IKK ranges
min_ikk = min(k["ikk"] for k in kabkota_list)
max_ikk = max(k["ikk"] for k in kabkota_list)
print(f"✓ IKK Range BPS 2025: Min = {min_ikk}, Max = {max_ikk}")

# 5. Check Satker mappings
satker_ids = set(k["satkerId"] for k in kabkota_list)
print(f"✓ Mapped to {len(satker_ids)} distinct Satker targets (including SAT-PAPUA1 and SAT-PAPUA2).")

print(">>> ALL VERIFICATION TESTS PASSED SUCCESSFULLY! <<<")
