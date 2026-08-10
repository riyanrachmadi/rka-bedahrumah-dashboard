/**
 * Master Data: 38 Provinsi Indonesia, Satker DIPA Mapping, Sebaran 56 PPK, Wilayah Kerja I/II/III, 7 Pulau, dan SBM Standard 2026/2027
 */

export const WILAYAH_KERJA_LIST = [
  { id: 'Wilayah I', name: 'Wilayah I (Sumatera & Kalimantan)', description: 'Seluruh Provinsi di Pulau Sumatera dan Kalimantan' },
  { id: 'Wilayah II', name: 'Wilayah II (Jawa, Bali, & Nusa Tenggara)', description: 'Seluruh Provinsi di Pulau Jawa, Bali, dan Nusa Tenggara' },
  { id: 'Wilayah III', name: 'Wilayah III (Sulawesi, Maluku, & Papua)', description: 'Seluruh Provinsi di Pulau Sulawesi, Maluku, dan Papua' }
];

export const PULAU_LIST = [
  { id: 'Sumatera', name: 'Pulau Sumatera', wilayahKerja: 'Wilayah I' },
  { id: 'Kalimantan', name: 'Pulau Kalimantan', wilayahKerja: 'Wilayah I' },
  { id: 'Jawa', name: 'Pulau Jawa', wilayahKerja: 'Wilayah II' },
  { id: 'Bali-Nusa Tenggara', name: 'Bali & Nusa Tenggara', wilayahKerja: 'Wilayah II' },
  { id: 'Sulawesi', name: 'Pulau Sulawesi', wilayahKerja: 'Wilayah III' },
  { id: 'Maluku', name: 'Kepulauan Maluku', wilayahKerja: 'Wilayah III' },
  { id: 'Papua', name: 'Pulau Papua', wilayahKerja: 'Wilayah III' }
];

export const MASTER_PROVINCES = [
  // WILAYAH I - SUMATERA (10 Provinsi)
  { id: '11', name: 'Aceh', ikk: 97.45, satkerId: 'SAT-11', satkerName: 'Satker PKP Sumatera I (Aceh)', ppkCount: 2, defaultZone: 'Mudah', pulau: 'Sumatera', wilayahKerja: 'Wilayah I', sewaMinibusBulanan: 6922000, sewaMobilHarian: 962000, sbmMakanRapat: 51000, sbmKudapanRapat: 21000, sbmTiketPP: 4807000 },
  { id: '12', name: 'Sumatera Utara', ikk: 102.30, satkerId: 'SAT-12', satkerName: 'Satker PKP Sumatera II (Sumut)', ppkCount: 2, defaultZone: 'Mudah', pulau: 'Sumatera', wilayahKerja: 'Wilayah I', sewaMinibusBulanan: 6445000, sewaMobilHarian: 1220000, sbmMakanRapat: 47000, sbmKudapanRapat: 17000, sbmTiketPP: 4054000 },
  { id: '13', name: 'Sumatera Barat', ikk: 98.15, satkerId: 'SAT-13', satkerName: 'Satker PKP Sumatera III (Sumbar)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Sumatera', wilayahKerja: 'Wilayah I', sewaMinibusBulanan: 6519000, sewaMobilHarian: 922000, sbmMakanRapat: 45000, sbmKudapanRapat: 19000, sbmTiketPP: 3159000 },
  { id: '14', name: 'Riau', ikk: 104.20, satkerId: 'SAT-14', satkerName: 'Satker PKP Sumatera III (Riau)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Sumatera', wilayahKerja: 'Wilayah I', sewaMinibusBulanan: 6000000, sewaMobilHarian: 978000, sbmMakanRapat: 52000, sbmKudapanRapat: 18000, sbmTiketPP: 3016000 },
  { id: '15', name: 'Jambi', ikk: 96.80, satkerId: 'SAT-15', satkerName: 'Satker PKP Sumatera IV (Jambi)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Sumatera', wilayahKerja: 'Wilayah I', sewaMinibusBulanan: 6286000, sewaMobilHarian: 1152000, sbmMakanRapat: 54000, sbmKudapanRapat: 19000, sbmTiketPP: 2584000 },
  { id: '16', name: 'Sumatera Selatan', ikk: 99.40, satkerId: 'SAT-16', satkerName: 'Satker PKP Sumatera V (Sumsel)', ppkCount: 2, defaultZone: 'Mudah', pulau: 'Sumatera', wilayahKerja: 'Wilayah I', sewaMinibusBulanan: 6201000, sewaMobilHarian: 1507000, sbmMakanRapat: 61000, sbmKudapanRapat: 19000, sbmTiketPP: 2268000 },
  { id: '17', name: 'Bengkulu', ikk: 98.60, satkerId: 'SAT-17', satkerName: 'Satker PKP Sumatera IV (Bengkulu)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Sumatera', wilayahKerja: 'Wilayah I', sewaMinibusBulanan: 5930000, sewaMobilHarian: 985000, sbmMakanRapat: 48000, sbmKudapanRapat: 16000, sbmTiketPP: 2770000 },
  { id: '18', name: 'Lampung', ikk: 95.70, satkerId: 'SAT-18', satkerName: 'Satker PKP Sumatera V (Lampung)', ppkCount: 2, defaultZone: 'Mudah', pulau: 'Sumatera', wilayahKerja: 'Wilayah I', sewaMinibusBulanan: 6201000, sewaMobilHarian: 897000, sbmMakanRapat: 43000, sbmKudapanRapat: 21000, sbmTiketPP: 1583000 },
  { id: '19', name: 'Kepulauan Bangka Belitung', ikk: 108.50, satkerId: 'SAT-19', satkerName: 'Satker PKP Sumatera V (Babel)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Sumatera', wilayahKerja: 'Wilayah I', sewaMinibusBulanan: 6763000, sewaMobilHarian: 1258000, sbmMakanRapat: 48000, sbmKudapanRapat: 19000, sbmTiketPP: 2139000 },
  { id: '21', name: 'Kepulauan Riau', ikk: 112.40, satkerId: 'SAT-21', satkerName: 'Satker PKP Sumatera III (Kepri)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Sumatera', wilayahKerja: 'Wilayah I', sewaMinibusBulanan: 7791000, sewaMobilHarian: 1049000, sbmMakanRapat: 44000, sbmKudapanRapat: 25000, sbmTiketPP: 3091000 },

  // WILAYAH I - KALIMANTAN (5 Provinsi)
  { id: '61', name: 'Kalimantan Barat', ikk: 109.30, satkerId: 'SAT-61', satkerName: 'Satker PKP Kalimantan I (Kalbar)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Kalimantan', wilayahKerja: 'Wilayah I', sewaMinibusBulanan: 6922000, sewaMobilHarian: 921000, sbmMakanRapat: 51000, sbmKudapanRapat: 17000, sbmTiketPP: 2781000 },
  { id: '62', name: 'Kalimantan Tengah', ikk: 111.80, satkerId: 'SAT-62', satkerName: 'Satker PKP Kalimantan I (Kalteng)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Kalimantan', wilayahKerja: 'Wilayah I', sewaMinibusBulanan: 6680000, sewaMobilHarian: 1177000, sbmMakanRapat: 42000, sbmKudapanRapat: 16000, sbmTiketPP: 2984000 },
  { id: '63', name: 'Kalimantan Selatan', ikk: 105.40, satkerId: 'SAT-63', satkerName: 'Satker PKP Kalimantan II (Kalsel)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Kalimantan', wilayahKerja: 'Wilayah I', sewaMinibusBulanan: 6530000, sewaMobilHarian: 921000, sbmMakanRapat: 51000, sbmKudapanRapat: 18000, sbmTiketPP: 3205000 },
  { id: '64', name: 'Kalimantan Timur', ikk: 114.60, satkerId: 'SAT-64', satkerName: 'Satker PKP Kalimantan II (Kaltim)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Kalimantan', wilayahKerja: 'Wilayah I', sewaMinibusBulanan: 7632000, sewaMobilHarian: 1100000, sbmMakanRapat: 48000, sbmKudapanRapat: 27000, sbmTiketPP: 3797000 },
  { id: '65', name: 'Kalimantan Utara', ikk: 122.10, satkerId: 'SAT-65', satkerName: 'Satker PKP Kalimantan II (Kaltara)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Kalimantan', wilayahKerja: 'Wilayah I', sewaMinibusBulanan: 7632000, sewaMobilHarian: 1188000, sbmMakanRapat: 53000, sbmKudapanRapat: 22000, sbmTiketPP: 4341000 },

  // WILAYAH II - JAWA (6 Provinsi)
  { id: '31', name: 'DKI Jakarta', ikk: 108.90, satkerId: 'SAT-31', satkerName: 'Satker PKP Jawa I (DKI Jakarta)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Jawa', wilayahKerja: 'Wilayah II', sewaMinibusBulanan: 6690000, sewaMobilHarian: 1305000, sbmMakanRapat: 57000, sbmKudapanRapat: 24000, sbmTiketPP: 0 },
  { id: '32', name: 'Jawa Barat', ikk: 96.20, satkerId: 'SAT-32', satkerName: 'Satker PKP Jawa II (Jawa Barat)', ppkCount: 4, defaultZone: 'Mudah', pulau: 'Jawa', wilayahKerja: 'Wilayah II', sewaMinibusBulanan: 5670000, sewaMobilHarian: 988000, sbmMakanRapat: 54000, sbmKudapanRapat: 22000, sbmTiketPP: 0 },
  { id: '33', name: 'Jawa Tengah', ikk: 92.80, satkerId: 'SAT-33', satkerName: 'Satker PKP Jawa III (Jawa Tengah)', ppkCount: 4, defaultZone: 'Mudah', pulau: 'Jawa', wilayahKerja: 'Wilayah II', sewaMinibusBulanan: 6201000, sewaMobilHarian: 1347000, sbmMakanRapat: 57000, sbmKudapanRapat: 17000, sbmTiketPP: 2182000 },
  { id: '34', name: 'DI Yogyakarta', ikk: 94.10, satkerId: 'SAT-34', satkerName: 'Satker PKP Jawa III (DI Yogyakarta)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Jawa', wilayahKerja: 'Wilayah II', sewaMinibusBulanan: 6201000, sewaMobilHarian: 978000, sbmMakanRapat: 57000, sbmKudapanRapat: 17000, sbmTiketPP: 2268000 },
  { id: '35', name: 'Jawa Timur', ikk: 95.50, satkerId: 'SAT-35', satkerName: 'Satker PKP Jawa IV (Jawa Timur)', ppkCount: 4, defaultZone: 'Mudah', pulau: 'Jawa', wilayahKerja: 'Wilayah II', sewaMinibusBulanan: 6201000, sewaMobilHarian: 1212000, sbmMakanRapat: 49000, sbmKudapanRapat: 23000, sbmTiketPP: 2674000 },
  { id: '36', name: 'Banten', ikk: 98.30, satkerId: 'SAT-36', satkerName: 'Satker PKP Jawa I (Banten)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Jawa', wilayahKerja: 'Wilayah II', sewaMinibusBulanan: 6011000, sewaMobilHarian: 1017000, sbmMakanRapat: 54000, sbmKudapanRapat: 21000, sbmTiketPP: 0 },

  // WILAYAH II - BALI & NUSA TENGGARA (3 Provinsi)
  { id: '51', name: 'Bali', ikk: 101.20, satkerId: 'SAT-51', satkerName: 'Satker PKP Jawa IV (Bali)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Bali-Nusa Tenggara', wilayahKerja: 'Wilayah II', sewaMinibusBulanan: 6360000, sewaMobilHarian: 1275000, sbmMakanRapat: 52000, sbmKudapanRapat: 22000, sbmTiketPP: 3262000 },
  { id: '52', name: 'Nusa Tenggara Barat', ikk: 106.80, satkerId: 'SAT-52', satkerName: 'Satker PKP Nusa Tenggara I (NTB)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Bali-Nusa Tenggara', wilayahKerja: 'Wilayah II', sewaMinibusBulanan: 6604000, sewaMobilHarian: 1103000, sbmMakanRapat: 51000, sbmKudapanRapat: 19000, sbmTiketPP: 3230000 },
  { id: '53', name: 'Nusa Tenggara Timur', ikk: 116.50, satkerId: 'SAT-53', satkerName: 'Satker PKP Nusa Tenggara II (NTT)', ppkCount: 3, defaultZone: 'Mudah', pulau: 'Bali-Nusa Tenggara', wilayahKerja: 'Wilayah II', sewaMinibusBulanan: 7791000, sewaMobilHarian: 926000, sbmMakanRapat: 52000, sbmKudapanRapat: 22000, sbmTiketPP: 5081000 },

  // WILAYAH III - SULAWESI (6 Provinsi)
  { id: '71', name: 'Sulawesi Utara', ikk: 110.20, satkerId: 'SAT-71', satkerName: 'Satker PKP Sulawesi I (Sulut)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Sulawesi', wilayahKerja: 'Wilayah III', sewaMinibusBulanan: 7500000, sewaMobilHarian: 1195000, sbmMakanRapat: 59000, sbmKudapanRapat: 27000, sbmTiketPP: 5460000 },
  { id: '72', name: 'Sulawesi Tengah', ikk: 113.70, satkerId: 'SAT-72', satkerName: 'Satker PKP Sulawesi II (Sulteng)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Sulawesi', wilayahKerja: 'Wilayah III', sewaMinibusBulanan: 6980000, sewaMobilHarian: 824000, sbmMakanRapat: 48000, sbmKudapanRapat: 19000, sbmTiketPP: 5113000 },
  { id: '73', name: 'Sulawesi Selatan', ikk: 103.50, satkerId: 'SAT-73', satkerName: 'Satker PKP Sulawesi III (Sulsel)', ppkCount: 2, defaultZone: 'Mudah', pulau: 'Sulawesi', wilayahKerja: 'Wilayah III', sewaMinibusBulanan: 6244000, sewaMobilHarian: 938000, sbmMakanRapat: 59000, sbmKudapanRapat: 26000, sbmTiketPP: 3829000 },
  { id: '74', name: 'Sulawesi Tenggara', ikk: 112.90, satkerId: 'SAT-74', satkerName: 'Satker PKP Sulawesi III (Sultra)', ppkCount: 2, defaultZone: 'Mudah', pulau: 'Sulawesi', wilayahKerja: 'Wilayah III', sewaMinibusBulanan: 6763000, sewaMobilHarian: 945000, sbmMakanRapat: 49000, sbmKudapanRapat: 22000, sbmTiketPP: 4265000 },
  { id: '75', name: 'Gorontalo', ikk: 107.40, satkerId: 'SAT-75', satkerName: 'Satker PKP Sulawesi I (Gorontalo)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Sulawesi', wilayahKerja: 'Wilayah III', sewaMinibusBulanan: 7430000, sewaMobilHarian: 908000, sbmMakanRapat: 45000, sbmKudapanRapat: 16000, sbmTiketPP: 5162000 },
  { id: '76', name: 'Sulawesi Barat', ikk: 108.60, satkerId: 'SAT-76', satkerName: 'Satker PKP Sulawesi III (Sulbar)', ppkCount: 1, defaultZone: 'Mudah', pulau: 'Sulawesi', wilayahKerja: 'Wilayah III', sewaMinibusBulanan: 6244000, sewaMobilHarian: 914000, sbmMakanRapat: 54000, sbmKudapanRapat: 22000, sbmTiketPP: 5208000 },

  // WILAYAH III - MALUKU (2 Provinsi)
  { id: '81', name: 'Maluku', ikk: 126.30, satkerId: 'SAT-81', satkerName: 'Satker PKP Maluku (Maluku)', ppkCount: 1, defaultZone: 'Sedang', pulau: 'Maluku', wilayahKerja: 'Wilayah III', sewaMinibusBulanan: 6830000, sewaMobilHarian: 1241000, sbmMakanRapat: 64000, sbmKudapanRapat: 25000, sbmTiketPP: 7081000 },
  { id: '82', name: 'Maluku Utara', ikk: 128.90, satkerId: 'SAT-82', satkerName: 'Satker PKP Maluku (Maluku Utara)', ppkCount: 1, defaultZone: 'Sedang', pulau: 'Maluku', wilayahKerja: 'Wilayah III', sewaMinibusBulanan: 7240000, sewaMobilHarian: 1095000, sbmMakanRapat: 63000, sbmKudapanRapat: 26000, sbmTiketPP: 6664000 },

  // WILAYAH III - PAPUA (6 Provinsi)
  { id: '91', name: 'Papua Barat', ikk: 135.80, satkerId: 'SAT-PAPUA2', satkerName: 'Satker Papua II (Papua Barat & Papua Barat Daya)', ppkCount: 1, defaultZone: 'Sedang', pulau: 'Papua', wilayahKerja: 'Wilayah III', sewaMinibusBulanan: 7558000, sewaMobilHarian: 1171000, sbmMakanRapat: 62000, sbmKudapanRapat: 28000, sbmTiketPP: 10824000 },
  { id: '92', name: 'Papua Barat Daya', ikk: 132.40, satkerId: 'SAT-PAPUA2', satkerName: 'Satker Papua II (Papua Barat & Papua Barat Daya)', ppkCount: 1, defaultZone: 'Sedang', pulau: 'Papua', wilayahKerja: 'Wilayah III', sewaMinibusBulanan: 7558000, sewaMobilHarian: 1171000, sbmMakanRapat: 62000, sbmKudapanRapat: 28000, sbmTiketPP: 10824000 },
  { id: '93', name: 'Papua', ikk: 142.50, satkerId: 'SAT-PAPUA1', satkerName: 'Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)', ppkCount: 2, defaultZone: 'Sulit', pulau: 'Papua', wilayahKerja: 'Wilayah III', sewaMinibusBulanan: 7632000, sewaMobilHarian: 1204000, sbmMakanRapat: 62000, sbmKudapanRapat: 33000, sbmTiketPP: 8767000 },
  { id: '94', name: 'Papua Selatan', ikk: 148.20, satkerId: 'SAT-PAPUA1', satkerName: 'Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)', ppkCount: 1, defaultZone: 'Sulit', pulau: 'Papua', wilayahKerja: 'Wilayah III', sewaMinibusBulanan: 7632000, sewaMobilHarian: 1638000, sbmMakanRapat: 92000, sbmKudapanRapat: 42000, sbmTiketPP: 10824000 },
  { id: '95', name: 'Papua Tengah', ikk: 168.40, satkerId: 'SAT-PAPUA1', satkerName: 'Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)', ppkCount: 1, defaultZone: 'Sulit', pulau: 'Papua', wilayahKerja: 'Wilayah III', sewaMinibusBulanan: 7632000, sewaMobilHarian: 1204000, sbmMakanRapat: 62000, sbmKudapanRapat: 33000, sbmTiketPP: 7902000 },
  { id: '96', name: 'Papua Pegunungan', ikk: 215.30, satkerId: 'SAT-PAPUA1', satkerName: 'Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)', ppkCount: 1, defaultZone: 'Sulit', pulau: 'Papua', wilayahKerja: 'Wilayah III', sewaMinibusBulanan: 7632000, sewaMobilHarian: 1649000, sbmMakanRapat: 93000, sbmKudapanRapat: 42000, sbmTiketPP: 10824000 },
];

export const MASTER_SATKER = [
  // SUMATERA & KALIMANTAN (WILAYAH I)
  { id: 'SAT-11', name: 'Satker PKP Sumatera I (Aceh)', provIds: ['11'], ppkCount: 2, pulau: 'Sumatera', wilayahKerja: 'Wilayah I' },
  { id: 'SAT-12', name: 'Satker PKP Sumatera II (Sumut)', provIds: ['12'], ppkCount: 2, pulau: 'Sumatera', wilayahKerja: 'Wilayah I' },
  { id: 'SAT-13', name: 'Satker PKP Sumatera III (Sumbar)', provIds: ['13'], ppkCount: 1, pulau: 'Sumatera', wilayahKerja: 'Wilayah I' },
  { id: 'SAT-14', name: 'Satker PKP Sumatera III (Riau)', provIds: ['14'], ppkCount: 1, pulau: 'Sumatera', wilayahKerja: 'Wilayah I' },
  { id: 'SAT-15', name: 'Satker PKP Sumatera IV (Jambi)', provIds: ['15'], ppkCount: 1, pulau: 'Sumatera', wilayahKerja: 'Wilayah I' },
  { id: 'SAT-16', name: 'Satker PKP Sumatera V (Sumsel)', provIds: ['16'], ppkCount: 2, pulau: 'Sumatera', wilayahKerja: 'Wilayah I' },
  { id: 'SAT-17', name: 'Satker PKP Sumatera IV (Bengkulu)', provIds: ['17'], ppkCount: 1, pulau: 'Sumatera', wilayahKerja: 'Wilayah I' },
  { id: 'SAT-18', name: 'Satker PKP Sumatera V (Lampung)', provIds: ['18'], ppkCount: 2, pulau: 'Sumatera', wilayahKerja: 'Wilayah I' },
  { id: 'SAT-19', name: 'Satker PKP Sumatera V (Babel)', provIds: ['19'], ppkCount: 1, pulau: 'Sumatera', wilayahKerja: 'Wilayah I' },
  { id: 'SAT-21', name: 'Satker PKP Sumatera III (Kepri)', provIds: ['21'], ppkCount: 1, pulau: 'Sumatera', wilayahKerja: 'Wilayah I' },
  { id: 'SAT-61', name: 'Satker PKP Kalimantan I (Kalbar)', provIds: ['61'], ppkCount: 1, pulau: 'Kalimantan', wilayahKerja: 'Wilayah I' },
  { id: 'SAT-62', name: 'Satker PKP Kalimantan I (Kalteng)', provIds: ['62'], ppkCount: 1, pulau: 'Kalimantan', wilayahKerja: 'Wilayah I' },
  { id: 'SAT-63', name: 'Satker PKP Kalimantan II (Kalsel)', provIds: ['63'], ppkCount: 1, pulau: 'Kalimantan', wilayahKerja: 'Wilayah I' },
  { id: 'SAT-64', name: 'Satker PKP Kalimantan II (Kaltim)', provIds: ['64'], ppkCount: 1, pulau: 'Kalimantan', wilayahKerja: 'Wilayah I' },
  { id: 'SAT-65', name: 'Satker PKP Kalimantan II (Kaltara)', provIds: ['65'], ppkCount: 1, pulau: 'Kalimantan', wilayahKerja: 'Wilayah I' },

  // JAWA, BALI & NUSA TENGGARA (WILAYAH II)
  { id: 'SAT-31', name: 'Satker PKP Jawa I (DKI Jakarta)', provIds: ['31'], ppkCount: 1, pulau: 'Jawa', wilayahKerja: 'Wilayah II' },
  { id: 'SAT-32', name: 'Satker PKP Jawa II (Jawa Barat)', provIds: ['32'], ppkCount: 4, pulau: 'Jawa', wilayahKerja: 'Wilayah II' },
  { id: 'SAT-33', name: 'Satker PKP Jawa III (Jawa Tengah)', provIds: ['33'], ppkCount: 4, pulau: 'Jawa', wilayahKerja: 'Wilayah II' },
  { id: 'SAT-34', name: 'Satker PKP Jawa III (DI Yogyakarta)', provIds: ['34'], ppkCount: 1, pulau: 'Jawa', wilayahKerja: 'Wilayah II' },
  { id: 'SAT-35', name: 'Satker PKP Jawa IV (Jawa Timur)', provIds: ['35'], ppkCount: 4, pulau: 'Jawa', wilayahKerja: 'Wilayah II' },
  { id: 'SAT-36', name: 'Satker PKP Jawa I (Banten)', provIds: ['36'], ppkCount: 1, pulau: 'Jawa', wilayahKerja: 'Wilayah II' },
  { id: 'SAT-51', name: 'Satker PKP Jawa IV (Bali)', provIds: ['51'], ppkCount: 1, pulau: 'Bali-Nusa Tenggara', wilayahKerja: 'Wilayah II' },
  { id: 'SAT-52', name: 'Satker PKP Nusa Tenggara I (NTB)', provIds: ['52'], ppkCount: 1, pulau: 'Bali-Nusa Tenggara', wilayahKerja: 'Wilayah II' },
  { id: 'SAT-53', name: 'Satker PKP Nusa Tenggara II (NTT)', provIds: ['53'], ppkCount: 3, pulau: 'Bali-Nusa Tenggara', wilayahKerja: 'Wilayah II' },

  // SULAWESI, MALUKU & PAPUA (WILAYAH III)
  { id: 'SAT-71', name: 'Satker PKP Sulawesi I (Sulut)', provIds: ['71'], ppkCount: 1, pulau: 'Sulawesi', wilayahKerja: 'Wilayah III' },
  { id: 'SAT-72', name: 'Satker PKP Sulawesi II (Sulteng)', provIds: ['72'], ppkCount: 1, pulau: 'Sulawesi', wilayahKerja: 'Wilayah III' },
  { id: 'SAT-73', name: 'Satker PKP Sulawesi III (Sulsel)', provIds: ['73'], ppkCount: 2, pulau: 'Sulawesi', wilayahKerja: 'Wilayah III' },
  { id: 'SAT-74', name: 'Satker PKP Sulawesi III (Sultra)', provIds: ['74'], ppkCount: 2, pulau: 'Sulawesi', wilayahKerja: 'Wilayah III' },
  { id: 'SAT-75', name: 'Satker PKP Sulawesi I (Gorontalo)', provIds: ['75'], ppkCount: 1, pulau: 'Sulawesi', wilayahKerja: 'Wilayah III' },
  { id: 'SAT-76', name: 'Satker PKP Sulawesi III (Sulbar)', provIds: ['76'], ppkCount: 1, pulau: 'Sulawesi', wilayahKerja: 'Wilayah III' },
  { id: 'SAT-81', name: 'Satker PKP Maluku (Maluku)', provIds: ['81'], ppkCount: 1, pulau: 'Maluku', wilayahKerja: 'Wilayah III' },
  { id: 'SAT-82', name: 'Satker PKP Maluku (Maluku Utara)', provIds: ['82'], ppkCount: 1, pulau: 'Maluku', wilayahKerja: 'Wilayah III' },
  { id: 'SAT-PAPUA2', name: 'Satker Papua II (Papua Barat & Papua Barat Daya)', provIds: ['91', '92'], ppkCount: 2, pulau: 'Papua', wilayahKerja: 'Wilayah III' },
  { id: 'SAT-PAPUA1', name: 'Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)', provIds: ['93', '94', '95', '96', '97'], ppkCount: 5, pulau: 'Papua', wilayahKerja: 'Wilayah III' }
];

export const SBM_RATES = {
  // Standar Biaya Masukan (SBM Kemenkeu 2026/2027)
  makanMinumRembuk: 72000,        // SBM Konsumsi Makan/Kudapan Rembuk (SBM Makan Berat Rp 51k + Kudapan Rp 21k)
  uangHarianLokal: 380000,        // SBM Uang Harian Dalam Provinsi (2 hari trip)
  hotelLokal: 650000,             // SBM Hotel Golongan III per malam (2 malam)
  transportLokalPP: 800000,       // SBM Transport Darat / PP Lapangan
  tiketPPJakarta: 4200000,        // Rata-rata Tiket Pesawat PP Satker ke Jakarta
  uangHarianJakarta: 530000,      // SBM Uang Harian DKI Jakarta
  hotelJakarta: 900000,           // SBM Hotel Bintang 3/4 Jakarta
  taksiJakartaPP: 350000,         // SBM Transport Taksi Bandara PP
  paketFullboard5Hari: 5500000,   // SBM Paket Meeting Fullboard 5 Hari (Hotel + Makan + Ruang Rapat)
  transportPembekalan: 600000,    // Transport PP Peserta TPM & Korkab ke Ibukota Prov
  uangHarianPembekalan: 1200000,  // Uang Saku/Harian Paket Meeting (5 Hari x Rp 240k)
  sewaMobilPPKBulanan: 17500000,  // SBM Sewa Mobil R4 Operasional Lapangan PPK per Bulan (Rp 17,5 Jt/Bln SBM Kemenkeu)
  sewaMobilHarianInsidental: 850000 // SBM Sewa R4 Harian untuk Verifikasi/Wasdal/APH
};
