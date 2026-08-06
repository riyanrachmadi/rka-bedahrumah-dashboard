import re
import json

def parse_csv(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = [line.strip() for line in f if line.strip()]

    headers = [h.strip() for h in lines[0].split(';')]
    records = []

    for i, line in enumerate(lines[1:], start=1):
        cols = [c.strip() for c in line.split(';')]
        if len(cols) < 6:
            continue
        
        raw_no = cols[0]
        prov_name = cols[1]
        full_name = cols[2]
        delineasi = cols[3]
        raw_indikasi = cols[4]
        raw_kode = cols[5]

        # 1. Primary Key: Kode Kabupaten/kota read as 4-digit String
        id_code = str(raw_kode).strip().zfill(4)

        # 2. Indikasi Alokasi read as Integer (strip dot separators)
        indikasi_awal = int(raw_indikasi.replace('.', '').replace(' ', ''))

        records.append({
            'no': int(raw_no),
            'id': id_code,
            'provName': prov_name,
            'fullName': full_name,
            'delineasi': delineasi,
            'indikasiAwal': indikasi_awal,
            'targetUnitFinal': indikasi_awal
        })

    return records

def validate(records, expected_total=400000):
    total_records = len(records)
    unique_codes = set(r['id'] for r in records)
    total_indikasi = sum(r['indikasiAwal'] for r in records)

    is_valid = (total_records == 514) and (len(unique_codes) == 514)

    print("================ INTEGRITY CHECK REPORT ================")
    print(f"- Status Validasi     : {'✓ PASSED (DATA UTUH & RELASIONAL)' if is_valid else '❌ FAILED'}")
    print(f"- Total Baris Record  : {total_records} / 514")
    print(f"- Total Kode Unik (PK): {len(unique_codes)} / 514")
    print(f"- Akumulasi Indikasi  : {total_indikasi:,} Unit")
    print(f"- Target Acuan        : {expected_total:,} Unit")
    print(f"- Status Match Target : {'✓ MATCH' if total_indikasi == expected_total else '⚠️ DIFF'}")
    print("========================================================")

    return is_valid

if __name__ == '__main__':
    recs = parse_csv('js/data/master514_raw.csv')
    valid = validate(recs, 400000)
    assert valid, "Validation failed!"
    print("\n✓ CSV INGESTION & VALIDATION SCRIPT EXECUTED SUCCESSFULLY!")
