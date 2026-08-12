import json, math

def calc_prioritized_autofit(target_avg_pend):
    # Baseline defaults
    rasio_verif = 100 # Ideal 100 unit/trip
    freq_rembuk = 3   # Ideal 3 kali
    hari_pembekalan = 5 # Ideal 5 hari
    
    # Priority adjustment based on target
    if target_avg_pend < 1850000:
        rasio_verif = 200     # Adjust to 200 unit/trip (min cost)
        freq_rembuk = 1       # Adjust to 1 kali
        hari_pembekalan = 2   # Adjust to 2 hari
    elif target_avg_pend < 2000000:
        rasio_verif = 175
        freq_rembuk = 2
        hari_pembekalan = 3
    elif target_avg_pend < 2200000:
        rasio_verif = 150
        freq_rembuk = 3
        hari_pembekalan = 4
    elif target_avg_pend < 2400000:
        rasio_verif = 120
        freq_rembuk = 3
        hari_pembekalan = 5
    else:
        rasio_verif = 100     # Ideal 100 unit/trip
        freq_rembuk = 3       # Ideal 3 kali (atau 4 kali if high)
        hari_pembekalan = 5   # Ideal 5 hari

    return {
        'target': target_avg_pend,
        'rasio_verif': rasio_verif,
        'freq_rembuk': freq_rembuk,
        'hari_pembekalan': hari_pembekalan
    }

print("Testing Prioritized Multi-Tier Auto-Fit Algorithm:")
test_targets = [1700000, 1850000, 2000000, 2250000, 2500000, 3000000]
for t in test_targets:
    res = calc_prioritized_autofit(t)
    print(f"Target Rp {t:,} / Unit:")
    print(f"  1. Rasio Verif/Wasdal: 1 Trip / {res['rasio_verif']} Unit")
    print(f"  2. Freq Rembuk Warga: {res['freq_rembuk']} Kali")
    print(f"  3. Hari Pembekalan: {res['hari_pembekalan']} Hari")
