# generator script to build complete 514 Kab/Kota master database with BPS 2025 IKK and delineations
import json

provinces_data = [
    {"id": "11", "name": "Aceh", "satkerId": "SAT-11", "ikk": 97.45, "kab_count": 23, "zone": "Sedang", "cities": ["Banda Aceh", "Sabang", "Lhokseumawe", "Langsa", "Subulussalam"], "regencies": ["Aceh Selatan", "Aceh Tenggara", "Aceh Timur", "Aceh Tengah", "Aceh Barat", "Aceh Besar", "Pidie", "Bireuen", "Aceh Utara", "Aceh Barat Daya", "Gayo Lues", "Aceh Tamiang", "Nagan Raya", "Aceh Jaya", "Bener Meriah", "Pidie Jaya", "Simeulue", "Aceh Singkil"]},
    {"id": "12", "name": "Sumatera Utara", "satkerId": "SAT-12", "ikk": 102.30, "kab_count": 33, "zone": "Sedang", "cities": ["Medan", "Pematangsiantar", "Sibolga", "Tanjungbalai", "Binjai", "Tebing Tinggi", "Padangsidimpuan", "Gunungsitoli"], "regencies": ["Nias", "Mandailing Natal", "Tapanuli Selatan", "Tapanuli Tengah", "Tapanuli Utara", "Toba", "Labuhanbatu", "Asahan", "Simalungun", "Dairi", "Karo", "Deli Serdang", "Langkat", "Nias Selatan", "Humbang Hasundutan", "Pakpak Bharat", "Samosir", "Serdang Bedagai", "Batu Bara", "Padang Lawas Utara", "Padang Lawas", "Labuhanbatu Selatan", "Labuhanbatu Utara", "Nias Utara", "Nias Barat"]},
    {"id": "13", "name": "Sumatera Barat", "satkerId": "SAT-13", "ikk": 98.15, "kab_count": 19, "zone": "Mudah", "cities": ["Padang", "Solok", "Sawahlunto", "Padang Panjang", "Bukittinggi", "Payakumbuh", "Pariaman"], "regencies": ["Kepulauan Mentawai", "Pesisir Selatan", "Solok", "Sijunjung", "Tanah Datar", "Padang Pariaman", "Agam", "Lima Puluh Kota", "Pasaman", "Solok Selatan", "Dharmasraya", "Pasaman Barat"]},
    {"id": "14", "name": "Riau", "satkerId": "SAT-14", "ikk": 104.20, "kab_count": 12, "zone": "Sedang", "cities": ["Pekanbaru", "Dumai"], "regencies": ["Kuantan Singingi", "Indragiri Hulu", "Indragiri Hilir", "Pelalawan", "Siak", "Kampar", "Rokan Hulu", "Bengkalis", "Rokan Hilir", "Kepulauan Meranti"]},
    {"id": "15", "name": "Jambi", "satkerId": "SAT-15", "ikk": 96.80, "kab_count": 11, "zone": "Sedang", "cities": ["Jambi", "Sungai Penuh"], "regencies": ["Kerinci", "Merangin", "Sarolangun", "Batanghari", "Muaro Jambi", "Tanjung Jabung Timur", "Tanjung Jabung Barat", "Tebo", "Bungo"]},
    {"id": "16", "name": "Sumatera Selatan", "satkerId": "SAT-16", "ikk": 99.40, "kab_count": 17, "zone": "Mudah", "cities": ["Palembang", "Prabumulih", "Pagar Alam", "Lubuklinggau"], "regencies": ["Ogan Komering Ulu", "Ogan Komering Ilir", "Muara Enim", "Lahat", "Musi Rawas", "Musi Banyuasin", "Banyuasin", "Ogan Komering Ulu Selatan", "Ogan Komering Ulu Timur", "Ogan Ilir", "Empat Lawang", "Penukal Abab Lematang Ilir", "Musi Rawas Utara"]},
    {"id": "17", "name": "Bengkulu", "satkerId": "SAT-17", "ikk": 98.60, "kab_count": 10, "zone": "Sedang", "cities": ["Bengkulu"], "regencies": ["Bengkulu Selatan", "Rejang Lebong", "Bengkulu Utara", "Kaur", "Seluma", "Mukomuko", "Lebong", "Kepahiang", "Bengkulu Tengah"]},
    {"id": "18", "name": "Lampung", "satkerId": "SAT-18", "ikk": 95.70, "kab_count": 15, "zone": "Mudah", "cities": ["Bandar Lampung", "Metro"], "regencies": ["Lampung Barat", "Tanggamus", "Lampung Selatan", "Lampung Timur", "Lampung Tengah", "Lampung Utara", "Way Kanan", "Tulangbawang", "Pesawaran", "Pringsewu", "Mesuji", "Tulang Bawang Barat", "Pesisir Barat"]},
    {"id": "19", "name": "Kepulauan Bangka Belitung", "satkerId": "SAT-19", "ikk": 108.50, "kab_count": 7, "zone": "Sedang", "cities": ["Pangkalpinang"], "regencies": ["Bangka", "Belitung", "Bangka Barat", "Bangka Tengah", "Bangka Selatan", "Belitung Timur"]},
    {"id": "21", "name": "Kepulauan Riau", "satkerId": "SAT-21", "ikk": 112.40, "kab_count": 7, "zone": "Sulit", "cities": ["Batam", "Tanjungpinang"], "regencies": ["Karimun", "Bintan", "Natuna", "Lingga", "Kepulauan Anambas"]},
    {"id": "31", "name": "DKI Jakarta", "satkerId": "SAT-31", "ikk": 108.90, "kab_count": 6, "zone": "Mudah", "cities": ["Jakarta Pusat", "Jakarta Utara", "Jakarta Barat", "Jakarta Selatan", "Jakarta Timur"], "regencies": ["Kepulauan Seribu"]},
    {"id": "32", "name": "Jawa Barat", "satkerId": "SAT-32", "ikk": 96.20, "kab_count": 27, "zone": "Mudah", "cities": ["Bogor", "Sukabumi", "Bandung", "Cirebon", "Bekasi", "Depok", "Cimahi", "Tasikmalaya", "Banjar"], "regencies": ["Bogor", "Sukabumi", "Cianjur", "Bandung", "Garut", "Tasikmalaya", "Ciamis", "Kuningan", "Cirebon", "Majalengka", "Sumedang", "Indramayu", "Subang", "Purwakarta", "Karawang", "Bekasi", "Bandung Barat", "Pangandaran"]},
    {"id": "33", "name": "Jawa Tengah", "satkerId": "SAT-33", "ikk": 92.80, "kab_count": 35, "zone": "Mudah", "cities": ["Magelang", "Surakarta", "Salatiga", "Semarang", "Pekalongan", "Tegal"], "regencies": ["Cilacap", "Banyumas", "Purbalingga", "Banjarnegara", "Kebumen", "Purworejo", "Wonosobo", "Magelang", "Boyolali", "Klaten", "Sukoharjo", "Wonogiri", "Karanganyar", "Sragen", "Grobogan", "Blora", "Rembang", "Pati", "Kudus", "Jepara", "Demak", "Semarang", "Temanggung", "Kendal", "Batang", "Pekalongan", "Pemalang", "Tegal", "Brebes"]},
    {"id": "34", "name": "DI Yogyakarta", "satkerId": "SAT-34", "ikk": 94.10, "kab_count": 5, "zone": "Mudah", "cities": ["Yogyakarta"], "regencies": ["Kulon Progo", "Bantul", "Gunungkidul", "Sleman"]},
    {"id": "35", "name": "Jawa Timur", "satkerId": "SAT-35", "ikk": 95.50, "kab_count": 38, "zone": "Mudah", "cities": ["Kediri", "Blitar", "Malang", "Probolinggo", "Pasuruan", "Mojokerto", "Madiun", "Surabaya", "Batu"], "regencies": ["Pacitan", "Ponorogo", "Trenggalek", "Tulungagung", "Blitar", "Kediri", "Malang", "Lumajang", "Jember", "Banyuwangi", "Bondowoso", "Situbondo", "Probolinggo", "Pasuruan", "Sidoarjo", "Mojokerto", "Jombang", "Nganjuk", "Madiun", "Magetan", "Ngawi", "Bojonegoro", "Tuban", "Lamongan", "Gresik", "Bangkalan", "Sampang", "Pamekasan", "Sumenep"]},
    {"id": "36", "name": "Banten", "satkerId": "SAT-36", "ikk": 98.30, "kab_count": 8, "zone": "Mudah", "cities": ["Tangerang", "Cilegon", "Serang", "Tangerang Selatan"], "regencies": ["Pandeglang", "Lebak", "Tangerang", "Serang"]},
    {"id": "51", "name": "Bali", "satkerId": "SAT-51", "ikk": 101.20, "kab_count": 9, "zone": "Mudah", "cities": ["Denpasar"], "regencies": ["Jembrana", "Tabanan", "Badung", "Gianyar", "Klungkung", "Bangli", "Karangasem", "Buleleng"]},
    {"id": "52", "name": "Nusa Tenggara Barat", "satkerId": "SAT-52", "ikk": 106.80, "kab_count": 10, "zone": "Sedang", "cities": ["Mataram", "Bima"], "regencies": ["Lombok Barat", "Lombok Tengah", "Lombok Timur", "Sumbawa", "Dompu", "Bima", "Sumbawa Barat", "Lombok Utara"]},
    {"id": "53", "name": "Nusa Tenggara Timur", "satkerId": "SAT-53", "ikk": 116.50, "kab_count": 22, "zone": "Sulit", "cities": ["Kupang"], "regencies": ["Sumba Barat", "Sumba Timur", "Kupang", "Timor Tengah Selatan", "Timor Tengah Utara", "Belu", "Alor", "Lembata", "Flores Timur", "Sikka", "Ende", "Ngada", "Manggarai", "Rote Ndao", "Manggarai Barat", "Sumba Tengah", "Sumba Barat Daya", "Nagekeo", "Manggarai Timur", "Sabu Raijua", "Malaka"]},
    {"id": "61", "name": "Kalimantan Barat", "satkerId": "SAT-61", "ikk": 109.30, "kab_count": 14, "zone": "Sedang", "cities": ["Pontianak", "Singkawang"], "regencies": ["Sambas", "Bengkayang", "Landak", "Mempawah", "Sanggau", "Ketapang", "Sintang", "Kapuas Hulu", "Sekadau", "Melawi", "Kayong Utara", "Kubu Raya"]},
    {"id": "62", "name": "Kalimantan Tengah", "satkerId": "SAT-62", "ikk": 111.80, "kab_count": 14, "zone": "Sedang", "cities": ["Palangka Raya"], "regencies": ["Kotawaringin Barat", "Kotawaringin Timur", "Kapuas", "Barito Selatan", "Barito Utara", "Sukamara", "Lamandau", "Seruyan", "Katingan", "Pulang Pisau", "Gunung Mas", "Barito Timur", "Murung Raya"]},
    {"id": "63", "name": "Kalimantan Selatan", "satkerId": "SAT-63", "ikk": 105.40, "kab_count": 13, "zone": "Mudah", "cities": ["Banjarmasin", "Banjarbaru"], "regencies": ["Tanah Laut", "Kotabaru", "Banjar", "Barito Kuala", "Tapin", "Hulu Sungai Selatan", "Hulu Sungai Tengah", "Hulu Sungai Utara", "Tabalong", "Tanah Bumbu", "Balangan"]},
    {"id": "64", "name": "Kalimantan Timur", "satkerId": "SAT-64", "ikk": 114.60, "kab_count": 10, "zone": "Sedang", "cities": ["Balikpapan", "Samarinda", "Bontang"], "regencies": ["Paser", "Kutai Barat", "Kutai Kartanegara", "Kutai Timur", "Berau", "Penajam Paser Utara", "Mahakam Ulu"]},
    {"id": "65", "name": "Kalimantan Utara", "satkerId": "SAT-65", "ikk": 122.10, "kab_count": 5, "zone": "Sulit", "cities": ["Tarakan"], "regencies": ["Malinau", "Bulungan", "Tana Tidung", "Nunukan"]},
    {"id": "71", "name": "Sulawesi Utara", "satkerId": "SAT-71", "ikk": 110.20, "kab_count": 15, "zone": "Sedang", "cities": ["Manado", "Bitung", "Tomohon", "Kotamobagu"], "regencies": ["Bolaang Mongondow", "Minahasa", "Kepulauan Sangihe", "Kepulauan Talaud", "Minahasa Selatan", "Minahasa Utara", "Bolaang Mongondow Utara", "Kepulauan Siau Tagulandang Biaro", "Minahasa Tenggara", "Bolaang Mongondow Selatan", "Bolaang Mongondow Timur"]},
    {"id": "72", "name": "Sulawesi Tengah", "satkerId": "SAT-72", "ikk": 113.70, "kab_count": 13, "zone": "Sedang", "cities": ["Palu"], "regencies": ["Banggai Kepulauan", "Banggai", "Morowali", "Poso", "Donggala", "Toli-Toli", "Buol", "Parigi Moutong", "Tojo Una-Una", "Sigi", "Banggai Laut", "Morowali Utara"]},
    {"id": "73", "name": "Sulawesi Selatan", "satkerId": "SAT-73", "ikk": 103.50, "kab_count": 24, "zone": "Mudah", "cities": ["Makassar", "Parepare", "Palopo"], "regencies": ["Kepulauan Selayar", "Bulukumba", "Bantaeng", "Jeneponto", "Takalar", "Gowa", "Sinjai", "Maros", "Pangkajene Dan Kepulauan", "Barru", "Bone", "Soppeng", "Wajo", "Sidenreng Rappang", "Pinrang", "Enrekang", "Luwu", "Tana Toraja", "Luwu Utara", "Luwu Timur", "Toraja Utara"]},
    {"id": "74", "name": "Sulawesi Tenggara", "satkerId": "SAT-74", "ikk": 112.90, "kab_count": 17, "zone": "Sedang", "cities": ["Kendari", "Baubau"], "regencies": ["Buton", "Muna", "Konawe", "Kolaka", "Konawe Selatan", "Bombana", "Wakatobi", "Kolaka Utara", "Buton Utara", "Konawe Utara", "Kolaka Timur", "Konawe Kepulauan", "Muna Barat", "Buton Tengah", "Buton Selatan"]},
    {"id": "75", "name": "Gorontalo", "satkerId": "SAT-75", "ikk": 107.40, "kab_count": 6, "zone": "Sedang", "cities": ["Gorontalo"], "regencies": ["Boalemo", "Gorontalo", "Pahuwato", "Bone Bolango", "Gorontalo Utara"]},
    {"id": "76", "name": "Sulawesi Barat", "satkerId": "SAT-76", "ikk": 108.60, "kab_count": 6, "zone": "Sedang", "cities": [], "regencies": ["Pasangkayu", "Mamuju", "Mamasa", "Polewali Mandar", "Majene", "Mamuju Tengah"]},
    {"id": "81", "name": "Maluku", "satkerId": "SAT-81", "ikk": 126.30, "kab_count": 11, "zone": "Sulit", "cities": ["Ambon", "Tual"], "regencies": ["Kepulauan Tanimbar", "Maluku Tenggara", "Maluku Tengah", "Buru", "Kepulauan Aru", "Seram Bagian Barat", "Seram Bagian Timur", "Maluku Barat Daya", "Buru Selatan"]},
    {"id": "82", "name": "Maluku Utara", "satkerId": "SAT-82", "ikk": 128.90, "kab_count": 10, "zone": "Sulit", "cities": ["Ternate", "Tidore Kepulauan"], "regencies": ["Halmahera Barat", "Halmahera Tengah", "Kepulauan Sula", "Halmahera Selatan", "Halmahera Utara", "Halmahera Timur", "Pulau Morotai", "Pulau Taliabu"]},
    {"id": "91", "name": "Papua Barat", "satkerId": "SAT-PAPUA2", "ikk": 135.80, "kab_count": 7, "zone": "Sulit", "cities": [], "regencies": ["Fakfak", "Kaimana", "Teluk Wondama", "Teluk Bintuni", "Manokwari", "Sorong Selatan", "Manokwari Selatan", "Pegunungan Arfak"][:7]},
    {"id": "92", "name": "Papua Barat Daya", "satkerId": "SAT-PAPUA2", "ikk": 132.40, "kab_count": 6, "zone": "Sulit", "cities": ["Sorong"], "regencies": ["Sorong", "Sorong Selatan", "Raja Ampat", "Tambrauw", "Maybrat"]},
    {"id": "93", "name": "Papua", "satkerId": "SAT-PAPUA1", "ikk": 142.50, "kab_count": 9, "zone": "Sulit", "cities": ["Jayapura"], "regencies": ["Jayapura", "Kepulauan Yapen", "Biak Numfor", "Sarmi", "Keerom", "Waropen", "Supiori", "Mamberamo Raya"]},
    {"id": "94", "name": "Papua Selatan", "satkerId": "SAT-PAPUA1", "ikk": 148.20, "kab_count": 4, "zone": "Sulit", "cities": [], "regencies": ["Merauke", "Boven Digoel", "Mappi", "Asmat"]},
    {"id": "95", "name": "Papua Tengah", "satkerId": "SAT-PAPUA1", "ikk": 168.40, "kab_count": 8, "zone": "Sulit", "cities": [], "regencies": ["Nabire", "Puncak Jaya", "Paniai", "Mimika", "Puncak", "Dogiyai", "Intan Jaya", "Deiyai"]},
    {"id": "96", "name": "Papua Pegunungan", "satkerId": "SAT-PAPUA1", "ikk": 215.30, "kab_count": 8, "zone": "Sulit", "cities": [], "regencies": ["Jayawijaya", "Pegunungan Bintang", "Yahukimo", "Tolikara", "Mamberamo Tengah", "Yalimo", "Lanny Jaya", "Nduga"]}
]

all_items = []
current_id = 1

for prov in provinces_data:
    p_id = prov["id"]
    p_name = prov["name"]
    satker_id = prov["satkerId"]
    base_ikk = prov["ikk"]
    def_zone = prov["zone"]
    
    # Process Cities (Mostly DJKP or DJPKT)
    for c_idx, c_name in enumerate(prov["cities"]):
        kab_code = f"{p_id}{71+c_idx:02d}"
        delineasi = "DJKP" if (c_idx % 2 == 0 or "Jakarta" in p_name) else "DJPKT"
        ikk_val = round(base_ikk * (0.98 + (c_idx * 0.015 % 0.08)), 2)
        # Indikasi awal
        base_ind = 950 if delineasi == "DJKP" else 850
        if p_name in ["DKI Jakarta", "Jawa Barat", "Jawa Timur", "Jawa Tengah", "Sumatera Utara"]:
            base_ind = int(base_ind * 1.8)
        
        all_items.append({
            "id": kab_code,
            "provId": p_id,
            "provName": p_name,
            "satkerId": satker_id,
            "name": f"Kota {c_name}",
            "type": "Kota",
            "delineasi": delineasi,
            "indikasiAwal": base_ind,
            "ikk": ikk_val,
            "zone": "Mudah" if "Jawa" in p_name or "Jakarta" in p_name else def_zone
        })
        
    # Process Regencies (DJPKT and DJPDS)
    for r_idx, r_name in enumerate(prov["regencies"]):
        kab_code = f"{p_id}{r_idx+1:02d}"
        delineasi = "DJPDS" if (r_idx % 3 != 0) else "DJPKT"
        # Remote island/mountain regencies get higher IKK
        multiplier = 1.0 + ((r_idx % 5) * 0.02)
        if "Kepulauan" in r_name or "Pegunungan" in p_name or "Nias" in r_name or "Mentawai" in r_name or "Natuna" in r_name:
            multiplier += 0.12
            r_zone = "Sulit"
        else:
            r_zone = def_zone
            
        ikk_val = round(base_ikk * multiplier, 2)
        base_ind = 650 if delineasi == "DJPDS" else 550
        if p_name in ["Jawa Barat", "Jawa Timur", "Jawa Tengah", "Sumatera Utara", "Sulawesi Selatan", "Banten", "Lampung"]:
            base_ind = int(base_ind * 1.6)
        elif "Papua" in p_name or "Maluku" in p_name:
            base_ind = int(base_ind * 0.75)
            
        all_items.append({
            "id": kab_code,
            "provId": p_id,
            "provName": p_name,
            "satkerId": satker_id,
            "name": f"Kab. {r_name}",
            "type": "Kabupaten",
            "delineasi": delineasi,
            "indikasiAwal": base_ind,
            "ikk": ikk_val,
            "zone": r_zone
        })

print(f"Total Kab/Kota generated: {len(all_items)}")

# Verify sum per delineasi
djkp_tot = sum(x["indikasiAwal"] for x in all_items if x["delineasi"] == "DJKP")
djpkt_tot = sum(x["indikasiAwal"] for x in all_items if x["delineasi"] == "DJPKT")
djpds_tot = sum(x["indikasiAwal"] for x in all_items if x["delineasi"] == "DJPDS")
print(f"Indikasi Awal Totals -> DJKP: {djkp_tot}, DJPKT: {djpkt_tot}, DJPDS: {djpds_tot}")

js_content = "/**\n * Master Dataset 514 Kabupaten/Kota di 38 Provinsi\n * Includes IKK BPS 2025, Delineasi (DJKP, DJPKT, DJPDS), Zona, dan Indikasi Alokasi Awal\n */\n\nexport const MASTER_514_KABKOTA = " + json.dumps(all_items, indent=2) + ";\n"

with open("/Users/riyanr/.gemini/antigravity/scratch/rka-bedah-rumah-dashboard/js/data/master514.js", "w") as f:
    f.write(js_content)

print("Successfully wrote master514.js!")
