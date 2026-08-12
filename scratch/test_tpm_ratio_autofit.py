import json

def calc_tpm_priority_autofit(target):
    if target < 1850000:
        rasio_verif = 200     # 1 per 200 unit
        freq_rembuk = 1       # 1 kali
        hari_pembekalan = 2   # 2 hari
        rasio_tpm = 60        # 2 TPM : 60 Unit (efisiensi tinggi)
    elif target < 2050000:
        rasio_verif = 160     # 1 per 160 unit
        freq_rembuk = 2       # 2 kali
        hari_pembekalan = 3   # 3 hari
        rasio_tpm = 50        # 2 TPM : 50 Unit
    elif target < 2250000:
        rasio_verif = 130     # 1 per 130 unit
        freq_rembuk = 3       # 3 kali (Ideal)
        hari_pembekalan = 4   # 4 hari
        rasio_tpm = 40        # 2 TPM : 40 Unit (Ideal)
    else:
        rasio_verif = 100     # 1 per 100 unit (Ideal)
        freq_rembuk = 3       # 3 kali (Ideal)
        hari_pembekalan = 5   # 5 hari (Ideal)
        rasio_tpm = 40        # 2 TPM : 40 Unit (Ideal)

    return {
        'target': target,
        'rasio_verif': rasio_verif,
        'freq_rembuk': freq_rembuk,
        'hari_pembekalan': hari_pembekalan,
        'rasio_tpm': rasio_tpm
    }

print("Testing Auto-Fit with Rasio TPM:")
for t in [1750000, 1900000, 2100000, 2300000, 2500000]:
    res = calc_tpm_priority_autofit(t)
    print(f"Target Rp {t:,} / Unit:")
    print(f"  - Rasio TPM: 2 TPM : {res['rasio_tpm']} Unit")
    print(f"  - Rasio Verif/Wasdal: 1 Trip / {res['rasio_verif']} Unit")
    print(f"  - Rembuk Warga: {res['freq_rembuk']} Kali")
    print(f"  - Durasi Pembekalan: {res['hari_pembekalan']} Hari")
    print("-" * 55)
