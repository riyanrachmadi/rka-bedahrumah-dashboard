raw_csv = """No.;Provinsi;Ibu Kota;Biaya Sewa Kendaraan (Roda 4/Per hari);Biaya Taksi Bandara Jakarta;Uang Perjadin Harian (Luar Kota);Biaya Penginapan Es 3/ Gol 4;Biaya Penginapan Es 4/ Gol 3;Halfday (Eselon 3/Gol. 4 ke bawah);Uang Harian Perjalanan Dinas Dalam Negeri;Fullboard (Eselon 3/Gol. 4 ke bawah);Fullday (Eselon 3/Gol. 4 ke bawah);Uang Harian Fullboard (Nasional);Transportasi Lokal PP (Nasional);Uang Harian Perjadin Dalam Kota;Rata-rata transportasi dari Kabupaten/Kota ke masing-masing Ibu Kota Provinsi OneWay;Uang Taksi Bandara/Terminal;Uang Taksi;Tiket Pesawat PP;Sewa Kendaraan minibus per bulan;Uang Makan (Rapat Biasa);Uang Kudapan (Rapat Biasa); Penggandaan Bahan, Goodie Bag (Berdasarkan 2025)
1;ACEH;Banda Aceh;Rp962.000 ;Rp250.000 ;Rp360.000 ;Rp1.578.000 ;Rp770.000 ;Rp338.000 ;Rp360.000 ;Rp992.000 ;Rp425.000 ;Rp130.000 ;Rp170.000 ;Rp140.000 ;Rp293.000 ;Rp123.000 ;Rp123.000 ;Rp4.807.000 ;Rp6.922.000 ;Rp51.000 ;Rp21.000 ; 200.000
2;SUMATERA UTARA;Medan;Rp1.220.000 ;Rp250.000 ;Rp370.000 ;Rp1.188.000 ;Rp699.000 ;Rp279.000 ;Rp370.000 ;Rp826.000 ;Rp462.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp288.000 ;Rp278.000 ;Rp278.000 ;Rp4.054.000 ;Rp6.445.000 ;Rp47.000 ;Rp17.000 ; 200.000
3;SUMATERA BARAT;Padang;Rp922.000 ;Rp250.000 ;Rp380.000 ;Rp1.353.000 ;Rp701.000 ;Rp195.000 ;Rp380.000 ;Rp789.000 ;Rp252.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp223.000 ;Rp171.000 ;Rp171.000 ;Rp3.159.000 ;Rp6.519.000 ;Rp45.000 ;Rp19.000 ; 150.000
4;RIAU;Pekanbaru;Rp978.000 ;Rp250.000 ;Rp370.000 ;Rp1.650.000 ;Rp852.000 ;Rp219.000 ;Rp370.000 ;Rp888.000 ;Rp397.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp316.000 ;Rp99.000 ;Rp99.000 ;Rp3.016.000 ;Rp6.000.000 ;Rp52.000 ;Rp18.000 ; 200.000
5;JAMBI;Jambi;Rp1.152.000 ;Rp250.000 ;Rp370.000 ;Rp1.252.000 ;Rp580.000 ;Rp288.000 ;Rp370.000 ;Rp1.110.000 ;Rp393.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp242.000 ;Rp133.000 ;Rp133.000 ;Rp2.584.000 ;Rp6.286.000 ;Rp54.000 ;Rp19.000 ; 150.000
6;SUMATERA SELATAN;Palembang;Rp1.507.000 ;Rp250.000 ;Rp380.000 ;Rp1.966.000 ;Rp861.000 ;Rp290.000 ;Rp380.000 ;Rp806.000 ;Rp455.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp255.000 ;Rp162.000 ;Rp162.000 ;Rp2.268.000 ;Rp6.201.000 ;Rp61.000 ;Rp19.000 ; 170.000
7;BENGKULU;Bengkulu;Rp985.000 ;Rp250.000 ;Rp380.000 ;Rp1.546.000 ;Rp692.000 ;Rp290.000 ;Rp380.000 ;Rp1.067.000 ;Rp416.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp330.000 ;Rp106.000 ;Rp106.000 ;Rp2.770.000 ;Rp5.930.000 ;Rp48.000 ;Rp16.000 ; 200.000
8;LAMPUNG;Bandar Lampung;Rp897.000 ;Rp250.000 ;Rp380.000 ;Rp1.539.000 ;Rp621.000 ;Rp255.000 ;Rp380.000 ;Rp1.008.000 ;Rp336.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp250.000 ;Rp162.000 ;Rp162.000 ;Rp1.583.000 ;Rp6.201.000 ;Rp43.000 ;Rp21.000 ; 200.000
9;KEPULAUAN BANGKA BELITUNG;Pangkal Pinang;Rp1.258.000 ;Rp250.000 ;Rp410.000 ;Rp1.957.000 ;Rp724.000 ;Rp343.000 ;Rp410.000 ;Rp977.000 ;Rp440.000 ;Rp130.000 ;Rp170.000 ;Rp160.000 ;Rp263.000 ;Rp94.000 ;Rp94.000 ;Rp2.139.000 ;Rp6.763.000 ;Rp48.000 ;Rp19.000 ; 200.000
10;KEPULAUAN RIAU;Tanjung Pinang;Rp1.049.000 ;Rp250.000 ;Rp370.000 ;Rp1.388.000 ;Rp792.000 ;Rp261.000 ;Rp370.000 ;Rp807.000 ;Rp321.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp185.000 ;Rp159.000 ;Rp159.000 ;Rp3.091.000 ;Rp7.791.000 ;Rp44.000 ;Rp25.000 ; 200.000
11;DKI JAKARTA;Jakarta;Rp1.305.000 ;Rp250.000 ;Rp530.000 ;Rp1.062.000 ;Rp730.000 ;Rp361.000 ;Rp530.000 ;Rp1.197.000 ;Rp455.000 ;Rp130.000 ;Rp170.000 ;Rp210.000 ;Rp276.000 ;Rp250.000 ;Rp250.000 ;0;Rp6.690.000 ;Rp57.000 ;Rp24.000 ; 200.000
12;JAWA BARAT;Bandung;Rp988.000 ;Rp250.000 ;Rp430.000 ;Rp1.366.000 ;Rp735.000 ;Rp414.000 ;Rp430.000 ;Rp1.006.000 ;Rp498.000 ;Rp130.000 ;Rp170.000 ;Rp170.000 ;Rp249.000 ;Rp180.000 ;Rp180.000 ;0;Rp5.670.000 ;Rp54.000 ;Rp22.000 ; 150.000
13;JAWA TENGAH;Semarang;Rp1.347.000 ;Rp250.000 ;Rp370.000 ;Rp1.286.000 ;Rp810.000 ;Rp255.000 ;Rp370.000 ;Rp770.000 ;Rp319.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp250.000 ;Rp105.000 ;Rp105.000 ;Rp2.182.000 ;Rp6.201.000 ;Rp57.000 ;Rp17.000 ; 200.000
14;DI YOGYAKARTA;Yogyakarta;Rp978.000 ;Rp250.000 ;Rp420.000 ;Rp1.600.000 ;Rp845.000 ;Rp303.000 ;Rp420.000 ;Rp867.000 ;Rp407.000 ;Rp130.000 ;Rp170.000 ;Rp170.000 ;Rp288.000 ;Rp258.000 ;Rp258.000 ;Rp2.268.000 ;Rp6.201.000 ;Rp57.000 ;Rp17.000 ; 150.000
15;JAWA TIMUR;Surabaya;Rp1.212.000 ;Rp250.000 ;Rp410.000 ;Rp1.234.000 ;Rp814.000 ;Rp338.000 ;Rp410.000 ;Rp1.381.000 ;Rp408.000 ;Rp130.000 ;Rp170.000 ;Rp160.000 ;Rp242.000 ;Rp225.000 ;Rp225.000 ;Rp2.674.000 ;Rp6.201.000 ;Rp49.000 ;Rp23.000 ; 180.000
16;BANTEN;Serang;Rp1.017.000 ;Rp250.000 ;Rp370.000 ;Rp1.301.000 ;Rp775.000 ;Rp368.000 ;Rp370.000 ;Rp1.051.000 ;Rp459.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp226.000 ;Rp300.000 ;Rp300.000 ;0;Rp6.011.000 ;Rp54.000 ;Rp21.000 ; 150.000
17;BALI;Denpasar;Rp1.275.000 ;Rp250.000 ;Rp480.000 ;Rp1.754.000 ;Rp1.138.000 ;Rp388.000 ;Rp480.000 ;Rp1.419.000 ;Rp472.000 ;Rp130.000 ;Rp170.000 ;Rp190.000 ;Rp238.000 ;Rp219.000 ;Rp219.000 ;Rp3.262.000 ;Rp6.360.000 ;Rp52.000 ;Rp22.000 ; 200.000
18;NUSA TENGGARA BARAT;Mataram;Rp1.103.000 ;Rp250.000 ;Rp440.000 ;Rp1.418.000 ;Rp907.000 ;Rp397.000 ;Rp440.000 ;Rp820.000 ;Rp436.000 ;Rp130.000 ;Rp170.000 ;Rp180.000 ;Rp375.000 ;Rp224.000 ;Rp224.000 ;Rp3.230.000 ;Rp6.604.000 ;Rp51.000 ;Rp19.000 ; 200.000
19;NUSA TENGGARA TIMUR;Kupang;Rp926.000 ;Rp250.000 ;Rp430.000 ;Rp1.450.000 ;Rp737.000 ;Rp339.000 ;Rp430.000 ;Rp1.115.000 ;Rp498.000 ;Rp130.000 ;Rp170.000 ;Rp170.000 ;Rp249.000 ;Rp105.000 ;Rp105.000 ;Rp5.081.000 ;Rp7.791.000 ;Rp52.000 ;Rp22.000 ; 150.000
20;KALIMANTAN BARAT;Pontianak;Rp921.000 ;Rp250.000 ;Rp380.000 ;Rp1.125.000 ;Rp576.000 ;Rp300.000 ;Rp380.000 ;Rp836.000 ;Rp418.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp357.000 ;Rp165.000 ;Rp165.000 ;Rp2.781.000 ;Rp6.922.000 ;Rp51.000 ;Rp17.000 ; 200.000
21;KALIMANTAN TENGAH;Palangkaraya;Rp1.177.000 ;Rp250.000 ;Rp360.000 ;Rp1.189.000 ;Rp706.000 ;Rp309.000 ;Rp360.000 ;Rp1.362.000 ;Rp391.000 ;Rp130.000 ;Rp170.000 ;Rp140.000 ;Rp360.000 ;Rp130.000 ;Rp130.000 ;Rp2.984.000 ;Rp6.680.000 ;Rp42.000 ;Rp16.000 ; 150.000
22;KALIMANTAN SELATAN;Banjarmasin;Rp921.000 ;Rp250.000 ;Rp380.000 ;Rp1.500.000 ;Rp746.000 ;Rp250.000 ;Rp380.000 ;Rp874.000 ;Rp366.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp223.000 ;Rp174.000 ;Rp174.000 ;Rp3.205.000 ;Rp6.530.000 ;Rp51.000 ;Rp18.000 ; 200.000
23;KALIMANTAN TIMUR;Samarinda;Rp1.100.000 ;Rp250.000 ;Rp430.000 ;Rp1.507.000 ;Rp804.000 ;Rp258.000 ;Rp430.000 ;Rp963.000 ;Rp392.000 ;Rp130.000 ;Rp170.000 ;Rp170.000 ;Rp972.000 ;Rp300.000 ;Rp300.000 ;Rp3.797.000 ;Rp7.632.000 ;Rp48.000 ;Rp27.000 ; 200.000
24;KALIMANTAN UTARA;Tanjung Selor;Rp1.188.000 ;Rp250.000 ;Rp430.000 ;Rp1.507.000 ;Rp904.000 ;Rp289.000 ;Rp430.000 ;Rp936.000 ;Rp355.000 ;Rp130.000 ;Rp170.000 ;Rp170.000 ;Rp972.000 ;Rp211.000 ;Rp211.000 ;Rp4.341.000 ;Rp7.632.000 ;Rp53.000 ;Rp22.000 ; 150.000
25;SULAWESI UTARA;Manado;Rp1.195.000 ;Rp250.000 ;Rp370.000 ;Rp1.270.000 ;Rp978.000 ;Rp269.000 ;Rp370.000 ;Rp987.000 ;Rp362.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp219.000 ;Rp134.000 ;Rp134.000 ;Rp5.460.000 ;Rp7.500.000 ;Rp59.000 ;Rp27.000 ; 150.000
26;SULAWESI TENGAH;Palu;Rp824.000 ;Rp250.000 ;Rp370.000 ;Rp1.679.000 ;Rp951.000 ;Rp303.000 ;Rp370.000 ;Rp1.241.000 ;Rp422.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp332.000 ;Rp149.000 ;Rp149.000 ;Rp5.113.000 ;Rp6.980.000 ;Rp48.000 ;Rp19.000 ; 200.000
27;SULAWESI SELATAN;Makassar;Rp938.000 ;Rp250.000 ;Rp430.000 ;Rp1.423.000 ;Rp745.000 ;Rp280.000 ;Rp430.000 ;Rp1.307.000 ;Rp397.000 ;Rp130.000 ;Rp170.000 ;Rp170.000 ;Rp270.000 ;Rp181.000 ;Rp181.000 ;Rp3.829.000 ;Rp6.244.000 ;Rp59.000 ;Rp26.000 ; 150.000
28;SULAWESI TENGGARA;Kendari;Rp945.000 ;Rp250.000 ;Rp380.000 ;Rp1.297.000 ;Rp786.000 ;Rp317.000 ;Rp380.000 ;Rp930.000 ;Rp395.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp337.000 ;Rp154.000 ;Rp154.000 ;Rp4.265.000 ;Rp6.763.000 ;Rp49.000 ;Rp22.000 ; 150.000
29;GORONTALO;Gorontalo;Rp908.000 ;Rp250.000 ;Rp370.000 ;Rp1.606.000 ;Rp955.000 ;Rp241.000 ;Rp370.000 ;Rp1.299.000 ;Rp310.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp425.000 ;Rp256.000 ;Rp256.000 ;Rp5.162.000 ;Rp7.430.000 ;Rp45.000 ;Rp16.000 ; 200.000
30;SULAWESI BARAT;Mamuju;Rp914.000 ;Rp250.000 ;Rp410.000 ;Rp1.344.000 ;Rp704.000 ;Rp269.000 ;Rp410.000 ;Rp1.116.000 ;Rp404.000 ;Rp130.000 ;Rp170.000 ;Rp160.000 ;Rp266.000 ;Rp283.000 ;Rp283.000 ;Rp5.208.000 ;Rp6.244.000 ;Rp54.000 ;Rp22.000 ; 180.000
31;MALUKU;Ambon;Rp1.241.000 ;Rp250.000 ;Rp380.000 ;Rp1.059.000 ;Rp667.000 ;Rp295.000 ;Rp380.000 ;Rp999.000 ;Rp401.000 ;Rp130.000 ;Rp170.000 ;Rp150.000 ;Rp1.000.000 ;Rp279.000 ;Rp279.000 ;Rp7.081.000 ;Rp6.830.000 ;Rp64.000 ;Rp25.000 ; 200.000
32;MALUKU UTARA;Ternate;Rp1.095.000 ;Rp250.000 ;Rp430.000 ;Rp1.160.000 ;Rp654.000 ;Rp295.000 ;Rp430.000 ;Rp929.000 ;Rp477.000 ;Rp130.000 ;Rp170.000 ;Rp170.000 ;Rp1.000.000 ;Rp208.000 ;Rp208.000 ;Rp6.664.000 ;Rp7.240.000 ;Rp63.000 ;Rp26.000 ; 200.000
33;PAPUA;Jayapura;Rp1.204.000 ;Rp250.000 ;Rp580.000 ;Rp2.521.000 ;Rp1.038.000 ;Rp351.000 ;Rp580.000 ;Rp1.224.000 ;Rp478.000 ;Rp130.000 ;Rp170.000 ;Rp230.000 ;Rp1.400.000 ;Rp462.000 ;Rp462.000 ;Rp8.767.000 ;Rp7.632.000 ;Rp62.000 ;Rp33.000 ; 250.000
34;PAPUA BARAT;Manokwari;Rp1.171.000 ;Rp250.000 ;Rp480.000 ;Rp2.056.000 ;Rp967.000 ;Rp310.000 ;Rp480.000 ;Rp1.120.000 ;Rp421.000 ;Rp130.000 ;Rp170.000 ;Rp190.000 ;Rp1.435.000 ;Rp228.000 ;Rp228.000 ;Rp10.824.000 ;Rp7.558.000 ;Rp62.000 ;Rp28.000 ; 200.000
35;PAPUA SELATAN;Marauke;Rp1.638.000 ;Rp250.000 ;Rp580.000 ;Rp3.706.000 ;Rp1.526.000 ;Rp472.000 ;Rp580.000 ;Rp1.738.000 ;Rp703.000 ;Rp130.000 ;Rp170.000 ;Rp230.000 ;Rp1.435.000 ;Rp462.000 ;Rp462.000 ;Rp10.824.000 ;Rp7.632.000 ;Rp92.000 ;Rp42.000 ; 250.000
36;PAPUA TENGAH;Nabire;Rp1.204.000 ;Rp250.000 ;Rp580.000 ;Rp2.521.000 ;Rp1.038.000 ;Rp344.000 ;Rp580.000 ;Rp1.193.000 ;Rp478.000 ;Rp130.000 ;Rp170.000 ;Rp230.000 ;Rp1.435.000 ;Rp462.000 ;Rp462.000 ;Rp7.902.000 ;Rp7.632.000 ;Rp62.000 ;Rp33.000 ; 250.000
37;PAPUA PEGUNUNGAN;Wamena;Rp1.649.000 ;Rp250.000 ;Rp580.000 ;Rp3.731.000 ;Rp1.536.000 ;Rp472.000 ;Rp580.000 ;Rp1.738.000 ;Rp703.000 ;Rp130.000 ;Rp170.000 ;Rp230.000 ;Rp1.435.000 ;Rp462.000 ;Rp462.000 ;Rp10.824.000 ;Rp7.632.000 ;Rp93.000 ;Rp42.000 ; 250.000
38;PAPUA BARAT DAYA;Sorong;Rp1.171.000 ;Rp250.000 ;Rp480.000 ;Rp2.056.000 ;Rp967.000 ;Rp310.000 ;Rp480.000 ;Rp1.120.000 ;Rp421.000 ;Rp130.000 ;Rp170.000 ;Rp190.000 ;Rp1.435.000 ;Rp228.000 ;Rp228.000 ;Rp10.824.000 ;Rp7.558.000 ;Rp62.000 ;Rp28.000 ; 200.000
"""

def parse_num(val_str):
    clean = val_str.replace("Rp", "").replace(".", "").replace(" ", "").strip()
    if not clean: return 0
    return int(clean)

lines = [l.strip() for l in raw_csv.strip().split("\n") if l.strip()]
header = lines[1].split(";")

rows = []
for l in lines[2:]:
    parts = [p.strip() for p in l.split(";")]
    if len(parts) < 23: continue
    no = parts[0]
    prov_name = parts[1]
    ibu_kota = parts[2]
    sewa_harian = parse_num(parts[3])
    taksi_jkt = parse_num(parts[4])
    uang_perjadin = parse_num(parts[5])
    penginapan_es3 = parse_num(parts[6])
    penginapan_es4 = parse_num(parts[7])
    halfday = parse_num(parts[8])
    uang_harian_dn = parse_num(parts[9])
    fullboard_hotel = parse_num(parts[10])
    fullday = parse_num(parts[11])
    uang_harian_fb = parse_num(parts[12])
    transport_pp = parse_num(parts[13])
    uang_harian_dk = parse_num(parts[14])
    trans_kab_ibukota = parse_num(parts[15])
    taksi_bandara = parse_num(parts[16])
    taksi = parse_num(parts[17])
    tiket_pesawat = parse_num(parts[18])
    sewa_minibus_bulan = parse_num(parts[19])
    makan_rapat = parse_num(parts[20])
    kudapan_rapat = parse_num(parts[21])
    goodie_bag = parse_num(parts[22])
    
    rows.append({
        "no": no,
        "prov": prov_name,
        "ibu_kota": ibu_kota,
        "sewa_harian": sewa_harian,
        "taksi_jkt": taksi_jkt,
        "uang_perjadin": uang_perjadin,
        "penginapan_es4": penginapan_es4,
        "fullboard_hotel": fullboard_hotel,
        "tiket_pesawat": tiket_pesawat,
        "sewa_minibus_bulan": sewa_minibus_bulan,
        "makan_rapat": makan_rapat,
        "kudapan_rapat": kudapan_rapat
    })

print(f"Successfully parsed {len(rows)} provinces from PMK Kemenkeu No 32 Tahun 2025 SBM CSV!")

# Create a mapping dict by Province Name
sbm_dict = {}
for r in rows:
    sbm_dict[r["prov"]] = r

# Print python code for update
print("Sample parsed row:")
print(rows[0])
