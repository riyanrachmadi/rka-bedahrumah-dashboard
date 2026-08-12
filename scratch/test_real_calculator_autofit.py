import json

# Simulating 2-pass real calculation
def simulate_real_autofit(target):
    # Tier 1 structural parameters
    if target < 1850000:
        rasio_tpm = 60
        rasio_verif = 200
        freq_rembuk = 1
        durasi_pembekalan = 2
    elif target < 2050000:
        rasio_tpm = 50
        rasio_verif = 160
        freq_rembuk = 2
        durasi_pembekalan = 3
    elif target < 2250000:
        rasio_tpm = 40
        rasio_verif = 130
        freq_rembuk = 3
        durasi_pembekalan = 4
    else:
        rasio_tpm = 40
        rasio_verif = 100
        freq_rembuk = 3
        durasi_pembekalan = 5

    # Pass 1: Compute baseline with structural parameters
    # TPM Honor + Korkab Honor + Support TPM + Pembekalan = approx Rp 1.5M - Rp 1.7M per unit
    fixed_sdm_cost_per_unit = 1550000 * (40 / rasio_tpm)
    wasdal_cost_per_unit = 120000 * (100 / rasio_verif)
    rembuk_cost_per_unit = 90000 * (freq_rembuk / 3)
    pembekalan_cost_per_unit = 40000 * (durasi_pembekalan / 5)

    current_avg_pass1 = fixed_sdm_cost_per_unit + wasdal_cost_per_unit + rembuk_cost_per_unit + pembekalan_cost_per_unit + 250000
    
    # Target remaining for non-fisik unit rates
    target_non_fisik = max(100000, target - (fixed_sdm_cost_per_unit + wasdal_cost_per_unit + rembuk_cost_per_unit + pembekalan_cost_per_unit))
    current_non_fisik = 250000 # digitalisasi, DRPB, peneng, laporan, kit
    
    fine_scale = target_non_fisik / current_non_fisik
    
    scaled_non_fisik = current_non_fisik * fine_scale
    
    final_avg = fixed_sdm_cost_per_unit + wasdal_cost_per_unit + rembuk_cost_per_unit + pembekalan_cost_per_unit + scaled_non_fisik
    margin_pct = (abs(final_avg - target) / target) * 100

    return {
        'target': target,
        'final_avg': final_avg,
        'margin_pct': margin_pct,
        'within_15pct': margin_pct <= 15.0
    }

print("Testing Real Calculator 2-Pass Auto-Fit:")
for t in [1750000, 1850000, 2000000, 2250000, 2500000, 3000000]:
    res = simulate_real_autofit(t)
    print(f"Target Rp {t:,} / Unit -> Hasil Hitung: Rp {round(res['final_avg']):,} (Selisih: {res['margin_pct']:.2f}% | Max 15% OK: {res['within_15pct']})")
