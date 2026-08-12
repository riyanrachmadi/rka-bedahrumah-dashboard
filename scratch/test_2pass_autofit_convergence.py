import json

def simulate_2pass_autofit(target_avg_pend):
    # Tier 1 Structural Rules
    if target_avg_pend < 1850000:
        rasio_tpm = 60
        rasio_verif = 200
        freq_rembuk = 1
        durasi_pembekalan = 2
    elif target_avg_pend < 2050000:
        rasio_tpm = 50
        rasio_verif = 160
        freq_rembuk = 2
        durasi_pembekalan = 3
    elif target_avg_pend < 2250000:
        rasio_tpm = 40
        rasio_verif = 130
        freq_rembuk = 3
        durasi_pembekalan = 4
    else:
        rasio_tpm = 40
        rasio_verif = 100
        freq_rembuk = 3
        durasi_pembekalan = 5

    # Simulated intermediate calculation (Pass 1)
    # Approx baseline avg with structural rules
    base_sdm_cost = (200000000000 / 370000) * (40 / rasio_tpm)
    base_wasdal_cost = (60000000000 / 370000) * (100 / rasio_verif)
    base_rembuk_cost = (80000000000 / 370000) * (freq_rembuk / 3)
    base_pembekalan_cost = (50000000000 / 370000) * (durasi_pembekalan / 5)
    base_other_cost = 500000
    
    inter_avg = base_sdm_cost + base_wasdal_cost + base_rembuk_cost + base_pembekalan_cost + base_other_cost
    
    # Pass 2: Fine scaling factor
    scale = target_avg_pend / inter_avg
    
    # Scale non-fisik unit rates
    rate_digitalisasi = round(75000 * scale / 1000) * 1000
    rate_drpb = round(200000 * scale / 1000) * 1000
    rate_peneng = round(50000 * scale / 1000) * 1000
    rate_laporan = round(150000 * scale / 1000) * 1000
    rate_kit = round(250000 * scale / 1000) * 1000
    
    # Final resulting average
    final_avg = base_sdm_cost + base_wasdal_cost + base_rembuk_cost + base_pembekalan_cost + (rate_digitalisasi + rate_drpb + rate_peneng + rate_laporan*0.5 + rate_kit*0.05)
    margin_pct = (abs(final_avg - target_avg_pend) / target_avg_pend) * 100

    return {
        'target': target_avg_pend,
        'final_avg': final_avg,
        'margin_pct': margin_pct,
        'is_within_15pct': margin_pct <= 15.0
    }

print("Testing 2-Pass Convergence Iteration:")
test_targets = [1500000, 1800000, 2000000, 2250000, 2500000, 3000000, 3500000]
for t in test_targets:
    res = simulate_2pass_autofit(t)
    print(f"Target Rp {t:,} / Unit -> Hasil Hitung: Rp {round(res['final_avg']):,} (Selisih: {res['margin_pct']:.2f}% | Max 15% OK: {res['is_within_15pct']})")
