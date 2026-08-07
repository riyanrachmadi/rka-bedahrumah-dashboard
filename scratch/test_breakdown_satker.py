import json

# Let's inspect what breakdownSatker outputs when we run calculateAllRKA
with open('js/data/master514.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract JSON array from master514.js
start_idx = text.find('[')
end_idx = text.rfind(']') + 1
master_514 = json.loads(text[start_idx:end_idx])

total_units = sum(k['targetUnitFinal'] for k in master_514)
print(f"Total Master 514 Units: {total_units:,}")

# Let's check provId in master514
prov_counts = {}
for k in master_514:
    p = k['provId']
    prov_counts[p] = prov_counts.get(p, 0) + k['targetUnitFinal']

print(f"Total Provinces with >0 units: {len(prov_counts)}")
for p, u in sorted(prov_counts.items()):
    print(f"  Prov {p}: {u} units")
