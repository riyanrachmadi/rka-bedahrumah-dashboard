import json, math

# Default parameters
default_params = {
    'rateDigitalisasi': 75000,
    'rateRAB': 200000,
    'ratePeneng': 50000,
    'rateLaporanBulanan': 150000,
    'rateKitAtribut': 250000,
    'rateVideoProv': 15000000,
    'frekuensiRembukWarga': 3
}

# Current average pendampingan per unit
current_avg_pend = 2012350 # approx Rp 2.012 M per unit

def compute_scaled_params(target_avg_pend, current_avg_pend):
    scale = target_avg_pend / current_avg_pend
    
    # Scale unit rates
    digitalisasi = max(10000, round(default_params['rateDigitalisasi'] * scale / 5000) * 5000)
    rab = max(50000, round(default_params['rateRAB'] * scale / 5000) * 5000)
    peneng = max(10000, round(default_params['ratePeneng'] * scale / 5000) * 5000)
    laporan = max(25000, round(default_params['rateLaporanBulanan'] * scale / 5000) * 5000)
    kit = max(50000, round(default_params['rateKitAtribut'] * scale / 10000) * 10000)
    video = max(5000000, round(default_params['rateVideoProv'] * scale / 1000000) * 1000000)
    
    freq_rembuk = 3
    if scale >= 1.3:
        freq_rembuk = 4
    elif scale <= 0.75:
        freq_rembuk = 2
        
    return {
        'scale': scale,
        'rateDigitalisasi': digitalisasi,
        'rateRAB': rab,
        'ratePeneng': peneng,
        'rateLaporanBulanan': laporan,
        'rateKitAtribut': kit,
        'rateVideoProv': video,
        'frekuensiRembukWarga': freq_rembuk
    }

print("Testing Target Pendampingan Auto-Fit:")
targets = [1800000, 2000000, 2250000, 2500000, 3000000]
for t in targets:
    res = compute_scaled_params(t, current_avg_pend)
    print(f"\nTarget Rp {t:,} / Unit (Scale: {res['scale']:.2f}x):")
    print(f"  Digitalisasi: Rp {res['rateDigitalisasi']:,}")
    print(f"  RAB & Gambar: Rp {res['rateRAB']:,}")
    print(f"  Peneng: Rp {res['ratePeneng']:,}")
    print(f"  Laporan: Rp {res['rateLaporanBulanan']:,}")
    print(f"  Kit Atribut: Rp {res['rateKitAtribut']:,}")
    print(f"  Freq Rembuk: {res['frekuensiRembukWarga']}x")
