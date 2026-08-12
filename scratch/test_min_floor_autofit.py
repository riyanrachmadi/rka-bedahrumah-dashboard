import json

def simulate_autofit_with_floors(target, scale):
    def_digitalisasi = 75000
    def_drpb = 200000
    def_peneng = 50000
    def_laporan = 150000
    def_video = 30000000

    rate_digitalisasi = max(25000, round((def_digitalisasi * scale) / 1000) * 1000)
    rate_drpb = max(25000, round((def_drpb * scale) / 1000) * 1000)
    rate_peneng = max(40000, round((def_peneng * scale) / 1000) * 1000)
    rate_laporan = max(50000, round((def_laporan * scale) / 5000) * 5000)
    rate_video = max(15000000, round((def_video * scale) / 500000) * 500000)

    return {
        'target': target,
        'digitalisasi': rate_digitalisasi,
        'drpb': rate_drpb,
        'peneng': rate_peneng,
        'laporan': rate_laporan,
        'video': rate_video
    }

print("Testing Minimum Floor Constraints:")
for scale_val in [0.1, 0.2, 0.5, 1.0, 1.5]:
    res = simulate_autofit_with_floors(1500000, scale_val)
    print(f"Scale {scale_val}x:")
    print(f"  - DRPB: Rp {res['drpb']:,} (Min Rp 25.000)")
    print(f"  - Penggandaan Laporan: Rp {res['laporan']:,} (Min Rp 50.000)")
    print(f"  - Digitalisasi: Rp {res['digitalisasi']:,} (Min Rp 25.000)")
    print(f"  - Media & Peneng: Rp {res['peneng']:,} (Min Rp 40.000)")
    print(f"  - Dokumentasi & Video: Rp {res['video']:,} (Min Rp 15.000.000)")
    print("-" * 55)
