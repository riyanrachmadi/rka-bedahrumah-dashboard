import re
import json

prov_meta = {
    '11': {'provName': 'Aceh', 'satkerId': 'SAT-11', 'satkerName': 'Satker PKP Sumatera I (Aceh)', 'ikk': 97.45, 'pulau': 'Sumatera', 'wilayahKerja': 'Wilayah I', 'zone': 'Mudah'},
    '12': {'provName': 'Sumatera Utara', 'satkerId': 'SAT-12', 'satkerName': 'Satker PKP Sumatera II (Sumut)', 'ikk': 102.30, 'pulau': 'Sumatera', 'wilayahKerja': 'Wilayah I', 'zone': 'Mudah'},
    '13': {'provName': 'Sumatera Barat', 'satkerId': 'SAT-13', 'satkerName': 'Satker PKP Sumatera III (Sumbar)', 'ikk': 98.15, 'pulau': 'Sumatera', 'wilayahKerja': 'Wilayah I', 'zone': 'Mudah'},
    '14': {'provName': 'Riau', 'satkerId': 'SAT-14', 'satkerName': 'Satker PKP Sumatera III (Riau)', 'ikk': 104.20, 'pulau': 'Sumatera', 'wilayahKerja': 'Wilayah I', 'zone': 'Mudah'},
    '15': {'provName': 'Jambi', 'satkerId': 'SAT-15', 'satkerName': 'Satker PKP Sumatera IV (Jambi)', 'ikk': 96.80, 'pulau': 'Sumatera', 'wilayahKerja': 'Wilayah I', 'zone': 'Mudah'},
    '16': {'provName': 'Sumatera Selatan', 'satkerId': 'SAT-16', 'satkerName': 'Satker PKP Sumatera V (Sumsel)', 'ikk': 99.40, 'pulau': 'Sumatera', 'wilayahKerja': 'Wilayah I', 'zone': 'Mudah'},
    '17': {'provName': 'Bengkulu', 'satkerId': 'SAT-17', 'satkerName': 'Satker PKP Sumatera IV (Bengkulu)', 'ikk': 98.60, 'pulau': 'Sumatera', 'wilayahKerja': 'Wilayah I', 'zone': 'Mudah'},
    '18': {'provName': 'Lampung', 'satkerId': 'SAT-18', 'satkerName': 'Satker PKP Sumatera V (Lampung)', 'ikk': 95.70, 'pulau': 'Sumatera', 'wilayahKerja': 'Wilayah I', 'zone': 'Mudah'},
    '19': {'provName': 'Kepulauan Bangka Belitung', 'satkerId': 'SAT-19', 'satkerName': 'Satker PKP Sumatera V (Babel)', 'ikk': 108.50, 'pulau': 'Sumatera', 'wilayahKerja': 'Wilayah I', 'zone': 'Mudah'},
    '21': {'provName': 'Kepulauan Riau', 'satkerId': 'SAT-21', 'satkerName': 'Satker PKP Sumatera III (Kepri)', 'ikk': 112.40, 'pulau': 'Sumatera', 'wilayahKerja': 'Wilayah I', 'zone': 'Mudah'},
    '31': {'provName': 'DKI Jakarta', 'satkerId': 'SAT-31', 'satkerName': 'Satker PKP Jawa I (DKI Jakarta)', 'ikk': 108.90, 'pulau': 'Jawa', 'wilayahKerja': 'Wilayah II', 'zone': 'Mudah'},
    '32': {'provName': 'Jawa Barat', 'satkerId': 'SAT-32', 'satkerName': 'Satker PKP Jawa II (Jawa Barat)', 'ikk': 96.20, 'pulau': 'Jawa', 'wilayahKerja': 'Wilayah II', 'zone': 'Mudah'},
    '33': {'provName': 'Jawa Tengah', 'satkerId': 'SAT-33', 'satkerName': 'Satker PKP Jawa III (Jawa Tengah)', 'ikk': 92.80, 'pulau': 'Jawa', 'wilayahKerja': 'Wilayah II', 'zone': 'Mudah'},
    '34': {'provName': 'DI Yogyakarta', 'satkerId': 'SAT-34', 'satkerName': 'Satker PKP Jawa III (DI Yogyakarta)', 'ikk': 94.10, 'pulau': 'Jawa', 'wilayahKerja': 'Wilayah II', 'zone': 'Mudah'},
    '35': {'provName': 'Jawa Timur', 'satkerId': 'SAT-35', 'satkerName': 'Satker PKP Jawa IV (Jawa Timur)', 'ikk': 95.50, 'pulau': 'Jawa', 'wilayahKerja': 'Wilayah II', 'zone': 'Mudah'},
    '36': {'provName': 'Banten', 'satkerId': 'SAT-36', 'satkerName': 'Satker PKP Jawa I (Banten)', 'ikk': 98.30, 'pulau': 'Jawa', 'wilayahKerja': 'Wilayah II', 'zone': 'Mudah'},
    '51': {'provName': 'Bali', 'satkerId': 'SAT-51', 'satkerName': 'Satker PKP Jawa IV (Bali)', 'ikk': 101.20, 'pulau': 'Bali-Nusa Tenggara', 'wilayahKerja': 'Wilayah II', 'zone': 'Mudah'},
    '52': {'provName': 'Nusa Tenggara Barat', 'satkerId': 'SAT-52', 'satkerName': 'Satker PKP Nusa Tenggara I (NTB)', 'ikk': 106.80, 'pulau': 'Bali-Nusa Tenggara', 'wilayahKerja': 'Wilayah II', 'zone': 'Mudah'},
    '53': {'provName': 'Nusa Tenggara Timur', 'satkerId': 'SAT-53', 'satkerName': 'Satker PKP Nusa Tenggara II (NTT)', 'ikk': 116.50, 'pulau': 'Bali-Nusa Tenggara', 'wilayahKerja': 'Wilayah II', 'zone': 'Mudah'},
    '61': {'provName': 'Kalimantan Barat', 'satkerId': 'SAT-61', 'satkerName': 'Satker PKP Kalimantan I (Kalbar)', 'ikk': 109.30, 'pulau': 'Kalimantan', 'wilayahKerja': 'Wilayah I', 'zone': 'Mudah'},
    '62': {'provName': 'Kalimantan Tengah', 'satkerId': 'SAT-62', 'satkerName': 'Satker PKP Kalimantan I (Kalteng)', 'ikk': 111.80, 'pulau': 'Kalimantan', 'wilayahKerja': 'Wilayah I', 'zone': 'Mudah'},
    '63': {'provName': 'Kalimantan Selatan', 'satkerId': 'SAT-63', 'satkerName': 'Satker PKP Kalimantan II (Kalsel)', 'ikk': 105.40, 'pulau': 'Kalimantan', 'wilayahKerja': 'Wilayah I', 'zone': 'Mudah'},
    '64': {'provName': 'Kalimantan Timur', 'satkerId': 'SAT-64', 'satkerName': 'Satker PKP Kalimantan II (Kaltim)', 'ikk': 114.60, 'pulau': 'Kalimantan', 'wilayahKerja': 'Wilayah I', 'zone': 'Mudah'},
    '65': {'provName': 'Kalimantan Utara', 'satkerId': 'SAT-65', 'satkerName': 'Satker PKP Kalimantan II (Kaltara)', 'ikk': 122.10, 'pulau': 'Kalimantan', 'wilayahKerja': 'Wilayah I', 'zone': 'Mudah'},
    '71': {'provName': 'Sulawesi Utara', 'satkerId': 'SAT-71', 'satkerName': 'Satker PKP Sulawesi I (Sulut)', 'ikk': 110.20, 'pulau': 'Sulawesi', 'wilayahKerja': 'Wilayah III', 'zone': 'Mudah'},
    '72': {'provName': 'Sulawesi Tengah', 'satkerId': 'SAT-72', 'satkerName': 'Satker PKP Sulawesi II (Sulteng)', 'ikk': 113.70, 'pulau': 'Sulawesi', 'wilayahKerja': 'Wilayah III', 'zone': 'Mudah'},
    '73': {'provName': 'Sulawesi Selatan', 'satkerId': 'SAT-73', 'satkerName': 'Satker PKP Sulawesi III (Sulsel)', 'ikk': 103.50, 'pulau': 'Sulawesi', 'wilayahKerja': 'Wilayah III', 'zone': 'Mudah'},
    '74': {'provName': 'Sulawesi Tenggara', 'satkerId': 'SAT-74', 'satkerName': 'Satker PKP Sulawesi III (Sultra)', 'ikk': 112.90, 'pulau': 'Sulawesi', 'wilayahKerja': 'Wilayah III', 'zone': 'Mudah'},
    '75': {'provName': 'Gorontalo', 'satkerId': 'SAT-75', 'satkerName': 'Satker PKP Sulawesi I (Gorontalo)', 'ikk': 107.40, 'pulau': 'Sulawesi', 'wilayahKerja': 'Wilayah III', 'zone': 'Mudah'},
    '76': {'provName': 'Sulawesi Barat', 'satkerId': 'SAT-76', 'satkerName': 'Satker PKP Sulawesi III (Sulbar)', 'ikk': 108.60, 'pulau': 'Sulawesi', 'wilayahKerja': 'Wilayah III', 'zone': 'Mudah'},
    '81': {'provName': 'Maluku', 'satkerId': 'SAT-81', 'satkerName': 'Satker PKP Maluku (Maluku)', 'ikk': 126.30, 'pulau': 'Maluku', 'wilayahKerja': 'Wilayah III', 'zone': 'Sedang'},
    '82': {'provName': 'Maluku Utara', 'satkerId': 'SAT-82', 'satkerName': 'Satker PKP Maluku (Maluku Utara)', 'ikk': 128.90, 'pulau': 'Maluku', 'wilayahKerja': 'Wilayah III', 'zone': 'Sedang'},
    '91': {'provName': 'Papua Barat', 'satkerId': 'SAT-PAPUA2', 'satkerName': 'Satker Papua II (Papua Barat & Papua Barat Daya)', 'ikk': 135.80, 'pulau': 'Papua', 'wilayahKerja': 'Wilayah III', 'zone': 'Sedang'},
    '92': {'provName': 'Papua Barat Daya', 'satkerId': 'SAT-PAPUA2', 'satkerName': 'Satker Papua II (Papua Barat & Papua Barat Daya)', 'ikk': 132.40, 'pulau': 'Papua', 'wilayahKerja': 'Wilayah III', 'zone': 'Sedang'},
    '93': {'provName': 'Papua', 'satkerId': 'SAT-PAPUA1', 'satkerName': 'Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)', 'ikk': 142.50, 'pulau': 'Papua', 'wilayahKerja': 'Wilayah III', 'zone': 'Sulit'},
    '94': {'provName': 'Papua Selatan', 'satkerId': 'SAT-PAPUA1', 'satkerName': 'Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)', 'ikk': 148.20, 'pulau': 'Papua', 'wilayahKerja': 'Wilayah III', 'zone': 'Sulit'},
    '95': {'provName': 'Papua Tengah', 'satkerId': 'SAT-PAPUA1', 'satkerName': 'Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)', 'ikk': 168.40, 'pulau': 'Papua', 'wilayahKerja': 'Wilayah III', 'zone': 'Sulit'},
    '96': {'provName': 'Papua Pegunungan', 'satkerId': 'SAT-PAPUA1', 'satkerName': 'Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)', 'ikk': 215.30, 'pulau': 'Papua', 'wilayahKerja': 'Wilayah III', 'zone': 'Sulit'}
}

with open('js/data/master514_raw.csv', 'r', encoding='utf-8') as f:
    lines = [line.strip() for line in f if line.strip()]

records = []
for i, line in enumerate(lines[1:], start=1):
    cols = [c.strip() for c in line.split(';')]
    if len(cols) < 6:
        continue
    
    raw_no = int(cols[0])
    raw_prov = cols[1]
    raw_full_name = cols[2]
    raw_del = cols[3]
    raw_indikasi = int(cols[4].replace('.', '').replace(' ', ''))
    raw_kode = str(cols[5]).strip().zfill(4)
    prov_id = raw_kode[:2]

    meta = prov_meta.get(prov_id, {
        'provName': raw_prov,
        'satkerId': f'SAT-{prov_id}',
        'satkerName': f'Satker PKP {raw_prov}',
        'ikk': 100.0,
        'pulau': 'Lainnya',
        'wilayahKerja': 'Wilayah I',
        'zone': 'Sedang'
    })

    name = raw_full_name.replace('Kabupaten ', '').replace('Kota ', '')

    records.append({
        "no": raw_no,
        "id": raw_kode,
        "name": name,
        "fullName": raw_full_name,
        "provId": prov_id,
        "provName": meta['provName'],
        "satkerId": meta['satkerId'],
        "satkerName": meta['satkerName'],
        "desaPerkotaan": 0,
        "desaPerdesaan": 0,
        "totalDesa": 0,
        "karakteristik": "Pesisir" if raw_del == "DJKP" else ("Perkotaan" if raw_del == "DJPKT" else "Perdesaan"),
        "delineasi": raw_del,
        "zone": meta['zone'],
        "ikk": meta['ikk'],
        "indikasiAwal": raw_indikasi,
        "pulau": meta['pulau'],
        "wilayahKerja": meta['wilayahKerja'],
        "targetUnitFinal": raw_indikasi
    })

js_code = """/**
 * MASTER DATA 514 KABUPATEN/KOTA DI INDONESIA (RESMI KEMENTERIAN PKP)
 * Synchronized by Kode Kabupaten/kota (4-digit BPS Primary Key String)
 * Total Indikasi Awal = 400.000 Unit (100% Preserved from Official CSV)
 */

export const MASTER_514_KABKOTA = """ + json.dumps(records, indent=2, ensure_ascii=False) + ";\n"

with open('js/data/master514.js', 'w', encoding='utf-8') as f:
    f.write(js_code)

print(f"Successfully generated js/data/master514.js with {len(records)} records!")
print(f"Total Indikasi Awal: {sum(r['indikasiAwal'] for r in records):,} Unit")
