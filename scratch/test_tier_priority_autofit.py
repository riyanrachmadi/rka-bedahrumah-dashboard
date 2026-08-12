import json

def simulate_prioritized_autofit(target):
    # Tier 1 Priority Rules
    if target < 1850000:
        rasio_verif = 200     # 1 per 200 unit
        freq_rembuk = 1       # 1 kali
        hari_pembekalan = 2   # 2 hari
    elif target < 2050000:
        rasio_verif = 160     # 1 per 160 unit
        freq_rembuk = 2       # 2 kali
        hari_pembekalan = 3   # 3 hari
    elif target < 2250000:
        rasio_verif = 130     # 1 per 130 unit
        freq_rembuk = 3       # 3 kali (Ideal)
        hari_pembekalan = 4   # 4 hari
    else:
        rasio_verif = 100     # 1 per 100 unit (Ideal)
        freq_rembuk = 3       # 3 kali (Ideal)
        hari_pembekalan = 5   # 5 hari (Ideal)

    print(f"Target Rp {target:,} / Unit:")
    print(f"  [Prioritas 1] Rasio Verif/Wasdal: 1 Trip / {rasio_verif} Unit")
    print(f"  [Prioritas 2] Konsumsi Rembuk Warga: {freq_rembuk} Kali")
    print(f"  [Prioritas 3] Durasi Pembekalan: {hari_pembekalan} Hari")

print("Prioritized Auto-Fit Simulation Results:")
for t in [1750000, 1900000, 2100000, 2300000, 2500000]:
    simulate_prioritized_autofit(t)
    print("-" * 50)
