raw_inkindo = """
NO,PROVINSI,INDEKS
1,Nanggroe Aceh Darussalam,0.963
2,Sumatera Utara,0.976
3,Sumatera Barat,0.947
4,Riau,1.08
5,Kepulauan Riau,1.101
6,Jambi,0.908
7,Sumatera Selatan,0.929
8,Kepulauan Bangka Belitung,0.91
9,Bengkulu,0.889
10,Lampung,0.899
11,Banten,0.95
12,DKI Jakarta (Benchmarking),1.0
13,Jawa Barat,0.847
14,Jawa Tengah,0.823
15,DI Yogyakarta,0.838
16,Jawa Timur,0.979
17,Bali,0.958
18,Nusa Tenggara Barat,0.877
19,Nusa Tenggara Timur,0.841
20,Kalimantan Barat,0.937
21,Kalimantan Tengah,0.925
22,Kalimantan Selatan,0.918
23,Kalimantan Timur,1.03
24,Kalimantan Utara,1.086
25,Sulawesi Utara,0.944
26,Sulawesi Tengah,0.908
27,Sulawesi Tenggara,0.947
28,Sulawesi Selatan,0.97
29,Sulawesi Barat,0.909
30,Gorontalo,0.924
31,Maluku,0.934
32,Maluku Utara,0.94
33,Papua,1.113
34,Papua Barat,1.202
35,Papua Selatan,1.114
36,Papua Tengah,1.13
37,Papua Pegunungan,1.153
38,Papua Barat Daya,1.194
"""

lines = [l.strip() for l in raw_inkindo.strip().split("\n") if l.strip()]

inkindo_map = {}
for l in lines[1:]:
    parts = l.split(",")
    if len(parts) < 3: continue
    prov_name = parts[1].strip()
    idx = float(parts[2].strip())
    inkindo_map[prov_name] = idx

# Mapping to masterProvinces IDs
prov_id_map = {
    '11': ('Aceh', inkindo_map['Nanggroe Aceh Darussalam']),
    '12': ('Sumatera Utara', inkindo_map['Sumatera Utara']),
    '13': ('Sumatera Barat', inkindo_map['Sumatera Barat']),
    '14': ('Riau', inkindo_map['Riau']),
    '15': ('Jambi', inkindo_map['Jambi']),
    '16': ('Sumatera Selatan', inkindo_map['Sumatera Selatan']),
    '17': ('Bengkulu', inkindo_map['Bengkulu']),
    '18': ('Lampung', inkindo_map['Lampung']),
    '19': ('Kepulauan Bangka Belitung', inkindo_map['Kepulauan Bangka Belitung']),
    '21': ('Kepulauan Riau', inkindo_map['Kepulauan Riau']),
    '31': ('DKI Jakarta', inkindo_map['DKI Jakarta (Benchmarking)']),
    '32': ('Jawa Barat', inkindo_map['Jawa Barat']),
    '33': ('Jawa Tengah', inkindo_map['Jawa Tengah']),
    '34': ('DI Yogyakarta', inkindo_map['DI Yogyakarta']),
    '35': ('Jawa Timur', inkindo_map['Jawa Timur']),
    '36': ('Banten', inkindo_map['Banten']),
    '51': ('Bali', inkindo_map['Bali']),
    '52': ('Nusa Tenggara Barat', inkindo_map['Nusa Tenggara Barat']),
    '53': ('Nusa Tenggara Timur', inkindo_map['Nusa Tenggara Timur']),
    '61': ('Kalimantan Barat', inkindo_map['Kalimantan Barat']),
    '62': ('Kalimantan Tengah', inkindo_map['Kalimantan Tengah']),
    '63': ('Kalimantan Selatan', inkindo_map['Kalimantan Selatan']),
    '64': ('Kalimantan Timur', inkindo_map['Kalimantan Timur']),
    '65': ('Kalimantan Utara', inkindo_map['Kalimantan Utara']),
    '71': ('Sulawesi Utara', inkindo_map['Sulawesi Utara']),
    '72': ('Sulawesi Tengah', inkindo_map['Sulawesi Tengah']),
    '73': ('Sulawesi Selatan', inkindo_map['Sulawesi Selatan']),
    '74': ('Sulawesi Tenggara', inkindo_map['Sulawesi Tenggara']),
    '75': ('Gorontalo', inkindo_map['Gorontalo']),
    '76': ('Sulawesi Barat', inkindo_map['Sulawesi Barat']),
    '81': ('Maluku', inkindo_map['Maluku']),
    '82': ('Maluku Utara', inkindo_map['Maluku Utara']),
    '91': ('Papua Barat', inkindo_map['Papua Barat']),
    '92': ('Papua Barat Daya', inkindo_map['Papua Barat Daya']),
    '93': ('Papua', inkindo_map['Papua']),
    '94': ('Papua Selatan', inkindo_map['Papua Selatan']),
    '95': ('Papua Tengah', inkindo_map['Papua Tengah']),
    '96': ('Papua Pegunungan', inkindo_map['Papua Pegunungan']),
}

print(f"Total mapped provinces: {len(prov_id_map)}")
for pid, (pname, idx) in list(prov_id_map.items())[:5]:
    korkab_gaji = round(17600000 * 0.55 * idx)
    tpm_gaji = round(14600000 * 0.55 * idx)
    print(f"  Prov {pid} - {pname}: Indeks={idx} | Korkab=Rp {korkab_gaji:,} | TPM=Rp {tpm_gaji:,}")
