// Auto-generated production bundle for RKA Bedah Rumah Dashboard (Official PMK 32/2025 SBM Rates Integrated)


// ========================================================
// FILE: js/utils/formatter.js
// ========================================================
/**
 * Formatting Utilities: Rupiah, Numbers, Percentages, and Compact Formats
 */
function formatRupiah(value) {
  if (value === null || value === undefined || isNaN(value)) return 'Rp 0';
  return 'Rp ' + Math.round(value).toLocaleString('id-ID');
}
function formatRupiahCompact(value) {
  if (!value || isNaN(value)) return 'Rp 0';
  const absVal = Math.abs(value);
  if (absVal >= 1e12) {
    return 'Rp ' + (value / 1e12).toFixed(2).replace('.', ',') + ' T';
  }
  if (absVal >= 1e9) {
    return 'Rp ' + (value / 1e9).toFixed(2).replace('.', ',') + ' M';
  }
  if (absVal >= 1e6) {
    return 'Rp ' + (value / 1e6).toFixed(2).replace('.', ',') + ' Jt';
  }
  return formatRupiah(value);
}
function formatNumber(value) {
  if (value === null || value === undefined || isNaN(value)) return '0';
  return Math.round(value).toLocaleString('id-ID');
}
function formatPercent(value) {
  if (value === null || value === undefined || isNaN(value)) return '0,00%';
  return (value).toFixed(2).replace('.', ',') + '%';
}


// ========================================================
// FILE: js/data/masterProvinces.js
// ========================================================
/**
 * Master Data: 38 Provinsi Indonesia, Satker DIPA Mapping, Sebaran 56 PPK, Wilayah Kerja I/II/III, 7 Pulau, dan SBM Standard 2026/2027
 */
const WILAYAH_KERJA_LIST = [
  { id: 'Wilayah I', name: 'Wilayah I (Sumatera & Kalimantan)', description: 'Seluruh Provinsi di Pulau Sumatera dan Kalimantan' },
  { id: 'Wilayah II', name: 'Wilayah II (Jawa, Bali, & Nusa Tenggara)', description: 'Seluruh Provinsi di Pulau Jawa, Bali, dan Nusa Tenggara' },
  { id: 'Wilayah III', name: 'Wilayah III (Sulawesi, Maluku, & Papua)', description: 'Seluruh Provinsi di Pulau Sulawesi, Maluku, dan Papua' }
];
const PULAU_LIST = [
  { id: 'Sumatera', name: 'Pulau Sumatera', wilayahKerja: 'Wilayah I' },
  { id: 'Kalimantan', name: 'Pulau Kalimantan', wilayahKerja: 'Wilayah I' },
  { id: 'Jawa', name: 'Pulau Jawa', wilayahKerja: 'Wilayah II' },
  { id: 'Bali-Nusa Tenggara', name: 'Bali & Nusa Tenggara', wilayahKerja: 'Wilayah II' },
  { id: 'Sulawesi', name: 'Pulau Sulawesi', wilayahKerja: 'Wilayah III' },
  { id: 'Maluku', name: 'Kepulauan Maluku', wilayahKerja: 'Wilayah III' },
  { id: 'Papua', name: 'Pulau Papua', wilayahKerja: 'Wilayah III' }
];
const MASTER_PROVINCES = [
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
const MASTER_SATKER = [
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
const SBM_RATES = {
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


// ========================================================
// FILE: js/data/defaultParams.js
// ========================================================
/**
 * Dynamic Control Variables (Default Parameters)
 */
const DEFAULT_TARGETS = {
  djkp: 50000,
  djpkt: 120000,
  djpds: 200000,
  total: 370000,      // Total terkunci (dipakai oleh Simulator)
  lockedTotal: 370000 // Angka acuan total yang dapat diubah (370k / 400k / custom)
};
const DEFAULT_PARAMS = {
  // Masa Penugasan & Formasi SDM
  masaTPM: 5,        // PAR_MASA_TPM (Bulan)
  durasiBulanTPM: 5,
  masaKorkab: 10,    // PAR_MASA_KORKAB (Bulan)
  durasiBulanKorkab: 10,
  rasioTPMUnit: 40,  // Rasio Komposisi TPM: 40 (2:40), 50 (2:50), 60 (2:60) unit per 2 TPM
  rasioTPM: 40,

  // Metode & Standar Gaji SDM Pendamping
  gajiMethod: 'inkindo',         // 'inkindo' (Opsi 1: INKINDO x 55% x IKK) | 'manual' (Opsi 2: Input Manual)
  metodeGaji: 'inkindo',
  rateInkindoSubProf: 16500000,  // Honor Dasar Sub-Profesional (Korkab)
  rateInkindoAsisten: 11500000,  // Honor Dasar Asisten Profesional (TPM)
  inkindoFactor: 0.55,           // Faktor 55%
  faktorInkindo: 0.55,
  gajiManualKorkab: 7000000,     // Gaji Manual Korkab (e.g. Rp 7 Juta)
  manualGajiKorkab: 7000000,
  gajiManualTPM: 6000000,        // Gaji Manual TPM (e.g. Rp 6 Juta)
  manualGajiTPM: 6000000,
  gajiManualUseIKK: true,        // Dikalikan IKK Daerah (Default true)
  manualGajiGunakanIKK: true,

  // Operasional Rutin & Pembekalan
  opsTPMBulan: 1500000,
  opsKorkabBulan: 2000000,
  biayaPembekalanTPM: 5000000,
  biayaPembekalanKorkab: 7000000,
  biayaAtributPersonel: 250000,
  biayaRembukUnit: 100000,
  frekuensiRembukWarga: 3,   // Frekuensi Rembuk Warga (1, 2, 3 [Default], 4 kali)
  frekuensiRembuk: 3,

  // Postur 1: Bantuan Fisik Matrix (Base per Unit: 20Jt, 25Jt, 40Jt)
  rateFisikMatrix: {
    Mudah: 20000000,   // Rp 20 Juta (Zona Reguler / Mudah)
    Sedang: 25000000,  // Rp 25 Juta (Zona Sedang / Tertentu)
    Sulit: 40000000    // Rp 40 Juta (Zona Sulit / Papua & 3T)
  },

  // Komponen 6: Support Cost TPM (Operasional Rutin per TPM per Bulan)
  supportTPMMatrix: {
    Mudah: 500000,     // Rp 500k
    Sedang: 1000000,   // Rp 1 Juta
    Sulit: 1500000     // Rp 1.5 Juta
  },

  // Rasio & Frekuensi
  rasioVerifWasdalUnit: 100, // 1 Perjalanan per 100 Unit
  rasioAPHPerWasdal: 10,     // 1 Perjalanan APH per 10 Perjalanan Wasdal
  koordPusatPersonel: 5,     // 5 Orang per Satker
  koordPusatFrekuensi: 2,    // 2 Kali per Tahun
  panitiaSatkerPembekalan: 5,// 5 Panitia Satker

  // Satuan Biaya Non-SBM
  rateDigitalisasi: 25000,    // PAR_RATE_DIGITALISASI per unit
  ratePeneng: 50000,          // PAR_RATE_PENENG per unit
  rateVideoProv: 30000000,    // PAR_RATE_VIDEO per paket provinsi
  rateLaporanBulanan: 75000,  // per Orang-Bulan (OB)
  rateRAB: 25000              // per unit
};


// ========================================================
// FILE: js/data/master514.js
// ========================================================
/**
 * MASTER DATA 514 KABUPATEN/KOTA DI INDONESIA (RESMI KEMENTERIAN PKP)
 * Synchronized by Kode Kabupaten/kota (4-digit BPS Primary Key String)
 * Total Indikasi Awal = 400.000 Unit (100% Preserved from Official CSV)
 */
const MASTER_514_KABKOTA = [
  {
    "no": 1,
    "id": "1101",
    "name": "Simeulue",
    "fullName": "Kabupaten Simeulue",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 726,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 726
  },
  {
    "no": 2,
    "id": "1102",
    "name": "Aceh Singkil",
    "fullName": "Kabupaten Aceh Singkil",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 800,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 800
  },
  {
    "no": 3,
    "id": "1103",
    "name": "Aceh Selatan",
    "fullName": "Kabupaten Aceh Selatan",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 692,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 692
  },
  {
    "no": 4,
    "id": "1104",
    "name": "Aceh Tenggara",
    "fullName": "Kabupaten Aceh Tenggara",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 522,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 522
  },
  {
    "no": 5,
    "id": "1105",
    "name": "Aceh Timur",
    "fullName": "Kabupaten Aceh Timur",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 639,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 639
  },
  {
    "no": 6,
    "id": "1106",
    "name": "Aceh Tengah",
    "fullName": "Kabupaten Aceh Tengah",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 671,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 671
  },
  {
    "no": 7,
    "id": "1107",
    "name": "Aceh Barat",
    "fullName": "Kabupaten Aceh Barat",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 818,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 818
  },
  {
    "no": 8,
    "id": "1108",
    "name": "Aceh Besar",
    "fullName": "Kabupaten Aceh Besar",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 805,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 805
  },
  {
    "no": 9,
    "id": "1109",
    "name": "Pidie",
    "fullName": "Kabupaten Pidie",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 810,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 810
  },
  {
    "no": 10,
    "id": "1110",
    "name": "Bireuen",
    "fullName": "Kabupaten Bireuen",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 637,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 637
  },
  {
    "no": 11,
    "id": "1111",
    "name": "Aceh Utara",
    "fullName": "Kabupaten Aceh Utara",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 859,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 859
  },
  {
    "no": 12,
    "id": "1112",
    "name": "Aceh Barat Daya",
    "fullName": "Kabupaten Aceh Barat Daya",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 629,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 629
  },
  {
    "no": 13,
    "id": "1113",
    "name": "Gayo Lues",
    "fullName": "Kabupaten Gayo Lues",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 628,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 628
  },
  {
    "no": 14,
    "id": "1114",
    "name": "Aceh Tamiang",
    "fullName": "Kabupaten Aceh Tamiang",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 633,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 633
  },
  {
    "no": 15,
    "id": "1115",
    "name": "Nagan Raya",
    "fullName": "Kabupaten Nagan Raya",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 546,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 546
  },
  {
    "no": 16,
    "id": "1116",
    "name": "Aceh Jaya",
    "fullName": "Kabupaten Aceh Jaya",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 546,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 546
  },
  {
    "no": 17,
    "id": "1117",
    "name": "Bener Meriah",
    "fullName": "Kabupaten Bener Meriah",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 711,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 711
  },
  {
    "no": 18,
    "id": "1118",
    "name": "Pidie Jaya",
    "fullName": "Kabupaten Pidie Jaya",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 671,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 671
  },
  {
    "no": 19,
    "id": "1171",
    "name": "Banda Aceh",
    "fullName": "Kota Banda Aceh",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 516,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 516
  },
  {
    "no": 20,
    "id": "1172",
    "name": "Sabang",
    "fullName": "Kota Sabang",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 609,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 609
  },
  {
    "no": 21,
    "id": "1173",
    "name": "Langsa",
    "fullName": "Kota Langsa",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 594,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 594
  },
  {
    "no": 22,
    "id": "1174",
    "name": "Lhokseumawe",
    "fullName": "Kota Lhokseumawe",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 670,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 670
  },
  {
    "no": 23,
    "id": "1175",
    "name": "Subulussalam",
    "fullName": "Kota Subulussalam",
    "provId": "11",
    "provName": "Aceh",
    "satkerId": "SAT-11",
    "satkerName": "Satker PKP Sumatera I (Aceh)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 97.45,
    "indikasiAwal": 645,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 645
  },
  {
    "no": 24,
    "id": "1201",
    "name": "Nias",
    "fullName": "Kabupaten Nias",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 642,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 642
  },
  {
    "no": 25,
    "id": "1202",
    "name": "Mandailing Natal",
    "fullName": "Kabupaten Mandailing Natal",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 537,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 537
  },
  {
    "no": 26,
    "id": "1203",
    "name": "Tapanuli Selatan",
    "fullName": "Kabupaten Tapanuli Selatan",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 346,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 346
  },
  {
    "no": 27,
    "id": "1204",
    "name": "Tapanuli Tengah",
    "fullName": "Kabupaten Tapanuli Tengah",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 676,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 676
  },
  {
    "no": 28,
    "id": "1205",
    "name": "Tapanuli Utara",
    "fullName": "Kabupaten Tapanuli Utara",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 611,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 611
  },
  {
    "no": 29,
    "id": "1206",
    "name": "Toba",
    "fullName": "Kabupaten Toba",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 509,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 509
  },
  {
    "no": 30,
    "id": "1207",
    "name": "Labuhanbatu",
    "fullName": "Kabupaten Labuhanbatu",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 652,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 652
  },
  {
    "no": 31,
    "id": "1208",
    "name": "Asahan",
    "fullName": "Kabupaten Asahan",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 582,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 582
  },
  {
    "no": 32,
    "id": "1209",
    "name": "Simalungun",
    "fullName": "Kabupaten Simalungun",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 569,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 569
  },
  {
    "no": 33,
    "id": "1210",
    "name": "Dairi",
    "fullName": "Kabupaten Dairi",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 561,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 561
  },
  {
    "no": 34,
    "id": "1211",
    "name": "Karo",
    "fullName": "Kabupaten Karo",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 458,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 458
  },
  {
    "no": 35,
    "id": "1212",
    "name": "Deli Serdang",
    "fullName": "Kabupaten Deli Serdang",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 518,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 518
  },
  {
    "no": 36,
    "id": "1213",
    "name": "Langkat",
    "fullName": "Kabupaten Langkat",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 712,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 712
  },
  {
    "no": 37,
    "id": "1214",
    "name": "Nias Selatan",
    "fullName": "Kabupaten Nias Selatan",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 881,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 881
  },
  {
    "no": 38,
    "id": "1215",
    "name": "Humbang Hasundutan",
    "fullName": "Kabupaten Humbang Hasundutan",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 457,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 457
  },
  {
    "no": 39,
    "id": "1216",
    "name": "Pakpak Bharat",
    "fullName": "Kabupaten Pakpak Bharat",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 395,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 395
  },
  {
    "no": 40,
    "id": "1217",
    "name": "Samosir",
    "fullName": "Kabupaten Samosir",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 556,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 556
  },
  {
    "no": 41,
    "id": "1218",
    "name": "Serdang Bedagai",
    "fullName": "Kabupaten Serdang Bedagai",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 467,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 467
  },
  {
    "no": 42,
    "id": "1219",
    "name": "Batu Bara",
    "fullName": "Kabupaten Batu Bara",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 731,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 731
  },
  {
    "no": 43,
    "id": "1220",
    "name": "Padang Lawas Utara",
    "fullName": "Kabupaten Padang Lawas Utara",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 439,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 439
  },
  {
    "no": 44,
    "id": "1221",
    "name": "Padang Lawas",
    "fullName": "Kabupaten Padang Lawas",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 409,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 409
  },
  {
    "no": 45,
    "id": "1222",
    "name": "Labuhanbatu Selatan",
    "fullName": "Kabupaten Labuhanbatu Selatan",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 423,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 423
  },
  {
    "no": 46,
    "id": "1223",
    "name": "Labuhanbatu Utara",
    "fullName": "Kabupaten Labuhanbatu Utara",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 567,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 567
  },
  {
    "no": 47,
    "id": "1224",
    "name": "Nias Utara",
    "fullName": "Kabupaten Nias Utara",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 898,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 898
  },
  {
    "no": 48,
    "id": "1225",
    "name": "Nias Barat",
    "fullName": "Kabupaten Nias Barat",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 814,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 814
  },
  {
    "no": 49,
    "id": "1271",
    "name": "Sibolga",
    "fullName": "Kota Sibolga",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 811,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 811
  },
  {
    "no": 50,
    "id": "1272",
    "name": "Tanjungbalai",
    "fullName": "Kota Tanjungbalai",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 589,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 589
  },
  {
    "no": 51,
    "id": "1273",
    "name": "Pematangsiantar",
    "fullName": "Kota Pematangsiantar",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 517,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 517
  },
  {
    "no": 52,
    "id": "1274",
    "name": "Tebing Tinggi",
    "fullName": "Kota Tebing Tinggi",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 533,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 533
  },
  {
    "no": 53,
    "id": "1275",
    "name": "Medan",
    "fullName": "Kota Medan",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 1054,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 1054
  },
  {
    "no": 54,
    "id": "1276",
    "name": "Binjai",
    "fullName": "Kota Binjai",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 469,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 469
  },
  {
    "no": 55,
    "id": "1277",
    "name": "Padangsidimpuan",
    "fullName": "Kota Padangsidimpuan",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 470,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 470
  },
  {
    "no": 56,
    "id": "1278",
    "name": "Gunungsitoli",
    "fullName": "Kota Gunungsitoli",
    "provId": "12",
    "provName": "Sumatera Utara",
    "satkerId": "SAT-12",
    "satkerName": "Satker PKP Sumatera II (Sumut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 102.3,
    "indikasiAwal": 815,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 815
  },
  {
    "no": 57,
    "id": "1301",
    "name": "Kepulauan Mentawai",
    "fullName": "Kabupaten Kepulauan Mentawai",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 730,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 730
  },
  {
    "no": 58,
    "id": "1302",
    "name": "Pesisir Selatan",
    "fullName": "Kabupaten Pesisir Selatan",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 505,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 505
  },
  {
    "no": 59,
    "id": "1303",
    "name": "Solok",
    "fullName": "Kabupaten Solok",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 429,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 429
  },
  {
    "no": 60,
    "id": "1304",
    "name": "Sijunjung",
    "fullName": "Kabupaten Sijunjung",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 387,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 387
  },
  {
    "no": 61,
    "id": "1305",
    "name": "Tanah Datar",
    "fullName": "Kabupaten Tanah Datar",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 302,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 302
  },
  {
    "no": 62,
    "id": "1306",
    "name": "Padang Pariaman",
    "fullName": "Kabupaten Padang Pariaman",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 463,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 463
  },
  {
    "no": 63,
    "id": "1307",
    "name": "Agam",
    "fullName": "Kabupaten Agam",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 487,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 487
  },
  {
    "no": 64,
    "id": "1308",
    "name": "Lima Puluh Kota",
    "fullName": "Kabupaten Lima Puluh Kota",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 429,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 429
  },
  {
    "no": 65,
    "id": "1309",
    "name": "Pasaman",
    "fullName": "Kabupaten Pasaman",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 345,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 345
  },
  {
    "no": 66,
    "id": "1310",
    "name": "Solok Selatan",
    "fullName": "Kabupaten Solok Selatan",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 429,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 429
  },
  {
    "no": 67,
    "id": "1311",
    "name": "Dharmasraya",
    "fullName": "Kabupaten Dharmasraya",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 350,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 350
  },
  {
    "no": 68,
    "id": "1312",
    "name": "Pasaman Barat",
    "fullName": "Kabupaten Pasaman Barat",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 531,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 531
  },
  {
    "no": 69,
    "id": "1371",
    "name": "Padang",
    "fullName": "Kota Padang",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 581,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 581
  },
  {
    "no": 70,
    "id": "1372",
    "name": "Solok",
    "fullName": "Kota Solok",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 348,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 348
  },
  {
    "no": 71,
    "id": "1373",
    "name": "Sawahlunto",
    "fullName": "Kota Sawahlunto",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 240,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 240
  },
  {
    "no": 72,
    "id": "1374",
    "name": "Padang Panjang",
    "fullName": "Kota Padang Panjang",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 355,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 355
  },
  {
    "no": 73,
    "id": "1375",
    "name": "Bukittinggi",
    "fullName": "Kota Bukittinggi",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 323,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 323
  },
  {
    "no": 74,
    "id": "1376",
    "name": "Payakumbuh",
    "fullName": "Kota Payakumbuh",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 373,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 373
  },
  {
    "no": 75,
    "id": "1377",
    "name": "Pariaman",
    "fullName": "Kota Pariaman",
    "provId": "13",
    "provName": "Sumatera Barat",
    "satkerId": "SAT-13",
    "satkerName": "Satker PKP Sumatera III (Sumbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 98.15,
    "indikasiAwal": 381,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 381
  },
  {
    "no": 76,
    "id": "1401",
    "name": "Kuantan Singingi",
    "fullName": "Kabupaten Kuantan Singingi",
    "provId": "14",
    "provName": "Riau",
    "satkerId": "SAT-14",
    "satkerName": "Satker PKP Sumatera III (Riau)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 104.2,
    "indikasiAwal": 527,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 527
  },
  {
    "no": 77,
    "id": "1402",
    "name": "Indragiri Hulu",
    "fullName": "Kabupaten Indragiri Hulu",
    "provId": "14",
    "provName": "Riau",
    "satkerId": "SAT-14",
    "satkerName": "Satker PKP Sumatera III (Riau)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 104.2,
    "indikasiAwal": 429,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 429
  },
  {
    "no": 78,
    "id": "1403",
    "name": "Indragiri Hilir",
    "fullName": "Kabupaten Indragiri Hilir",
    "provId": "14",
    "provName": "Riau",
    "satkerId": "SAT-14",
    "satkerName": "Satker PKP Sumatera III (Riau)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 104.2,
    "indikasiAwal": 529,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 529
  },
  {
    "no": 79,
    "id": "1404",
    "name": "Pelalawan",
    "fullName": "Kabupaten Pelalawan",
    "provId": "14",
    "provName": "Riau",
    "satkerId": "SAT-14",
    "satkerName": "Satker PKP Sumatera III (Riau)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 104.2,
    "indikasiAwal": 630,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 630
  },
  {
    "no": 80,
    "id": "1405",
    "name": "Siak",
    "fullName": "Kabupaten Siak",
    "provId": "14",
    "provName": "Riau",
    "satkerId": "SAT-14",
    "satkerName": "Satker PKP Sumatera III (Riau)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 104.2,
    "indikasiAwal": 436,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 436
  },
  {
    "no": 81,
    "id": "1406",
    "name": "Kampar",
    "fullName": "Kabupaten Kampar",
    "provId": "14",
    "provName": "Riau",
    "satkerId": "SAT-14",
    "satkerName": "Satker PKP Sumatera III (Riau)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 104.2,
    "indikasiAwal": 554,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 554
  },
  {
    "no": 82,
    "id": "1407",
    "name": "Rokan Hulu",
    "fullName": "Kabupaten Rokan Hulu",
    "provId": "14",
    "provName": "Riau",
    "satkerId": "SAT-14",
    "satkerName": "Satker PKP Sumatera III (Riau)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 104.2,
    "indikasiAwal": 736,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 736
  },
  {
    "no": 83,
    "id": "1408",
    "name": "Bengkalis",
    "fullName": "Kabupaten Bengkalis",
    "provId": "14",
    "provName": "Riau",
    "satkerId": "SAT-14",
    "satkerName": "Satker PKP Sumatera III (Riau)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 104.2,
    "indikasiAwal": 498,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 498
  },
  {
    "no": 84,
    "id": "1409",
    "name": "Rokan Hilir",
    "fullName": "Kabupaten Rokan Hilir",
    "provId": "14",
    "provName": "Riau",
    "satkerId": "SAT-14",
    "satkerName": "Satker PKP Sumatera III (Riau)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 104.2,
    "indikasiAwal": 639,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 639
  },
  {
    "no": 85,
    "id": "1410",
    "name": "Kepulauan Meranti",
    "fullName": "Kabupaten Kepulauan Meranti",
    "provId": "14",
    "provName": "Riau",
    "satkerId": "SAT-14",
    "satkerName": "Satker PKP Sumatera III (Riau)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 104.2,
    "indikasiAwal": 991,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 991
  },
  {
    "no": 86,
    "id": "1471",
    "name": "Pekanbaru",
    "fullName": "Kota Pekanbaru",
    "provId": "14",
    "provName": "Riau",
    "satkerId": "SAT-14",
    "satkerName": "Satker PKP Sumatera III (Riau)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 104.2,
    "indikasiAwal": 606,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 606
  },
  {
    "no": 87,
    "id": "1473",
    "name": "Dumai",
    "fullName": "Kota Dumai",
    "provId": "14",
    "provName": "Riau",
    "satkerId": "SAT-14",
    "satkerName": "Satker PKP Sumatera III (Riau)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 104.2,
    "indikasiAwal": 411,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 411
  },
  {
    "no": 88,
    "id": "1501",
    "name": "Kerinci",
    "fullName": "Kabupaten Kerinci",
    "provId": "15",
    "provName": "Jambi",
    "satkerId": "SAT-15",
    "satkerName": "Satker PKP Sumatera IV (Jambi)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 96.8,
    "indikasiAwal": 512,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 512
  },
  {
    "no": 89,
    "id": "1502",
    "name": "Merangin",
    "fullName": "Kabupaten Merangin",
    "provId": "15",
    "provName": "Jambi",
    "satkerId": "SAT-15",
    "satkerName": "Satker PKP Sumatera IV (Jambi)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 96.8,
    "indikasiAwal": 613,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 613
  },
  {
    "no": 90,
    "id": "1503",
    "name": "Sarolangun",
    "fullName": "Kabupaten Sarolangun",
    "provId": "15",
    "provName": "Jambi",
    "satkerId": "SAT-15",
    "satkerName": "Satker PKP Sumatera IV (Jambi)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 96.8,
    "indikasiAwal": 571,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 571
  },
  {
    "no": 91,
    "id": "1504",
    "name": "Batang Hari",
    "fullName": "Kabupaten Batang Hari",
    "provId": "15",
    "provName": "Jambi",
    "satkerId": "SAT-15",
    "satkerName": "Satker PKP Sumatera IV (Jambi)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 96.8,
    "indikasiAwal": 635,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 635
  },
  {
    "no": 92,
    "id": "1505",
    "name": "Muaro Jambi",
    "fullName": "Kabupaten Muaro Jambi",
    "provId": "15",
    "provName": "Jambi",
    "satkerId": "SAT-15",
    "satkerName": "Satker PKP Sumatera IV (Jambi)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 96.8,
    "indikasiAwal": 410,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 410
  },
  {
    "no": 93,
    "id": "1506",
    "name": "Tanjung Jabung Timur",
    "fullName": "Kabupaten Tanjung Jabung Timur",
    "provId": "15",
    "provName": "Jambi",
    "satkerId": "SAT-15",
    "satkerName": "Satker PKP Sumatera IV (Jambi)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 96.8,
    "indikasiAwal": 556,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 556
  },
  {
    "no": 94,
    "id": "1507",
    "name": "Tanjung Jabung Barat",
    "fullName": "Kabupaten Tanjung Jabung Barat",
    "provId": "15",
    "provName": "Jambi",
    "satkerId": "SAT-15",
    "satkerName": "Satker PKP Sumatera IV (Jambi)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 96.8,
    "indikasiAwal": 650,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 650
  },
  {
    "no": 95,
    "id": "1508",
    "name": "Tebo",
    "fullName": "Kabupaten Tebo",
    "provId": "15",
    "provName": "Jambi",
    "satkerId": "SAT-15",
    "satkerName": "Satker PKP Sumatera IV (Jambi)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 96.8,
    "indikasiAwal": 420,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 420
  },
  {
    "no": 96,
    "id": "1509",
    "name": "Bungo",
    "fullName": "Kabupaten Bungo",
    "provId": "15",
    "provName": "Jambi",
    "satkerId": "SAT-15",
    "satkerName": "Satker PKP Sumatera IV (Jambi)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 96.8,
    "indikasiAwal": 484,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 484
  },
  {
    "no": 97,
    "id": "1571",
    "name": "Jambi",
    "fullName": "Kota Jambi",
    "provId": "15",
    "provName": "Jambi",
    "satkerId": "SAT-15",
    "satkerName": "Satker PKP Sumatera IV (Jambi)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.8,
    "indikasiAwal": 728,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 728
  },
  {
    "no": 98,
    "id": "1572",
    "name": "Sungai Penuh",
    "fullName": "Kota Sungai Penuh",
    "provId": "15",
    "provName": "Jambi",
    "satkerId": "SAT-15",
    "satkerName": "Satker PKP Sumatera IV (Jambi)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.8,
    "indikasiAwal": 375,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 375
  },
  {
    "no": 99,
    "id": "1601",
    "name": "Ogan Komering Ulu",
    "fullName": "Kabupaten Ogan Komering Ulu",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 699,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 699
  },
  {
    "no": 100,
    "id": "1602",
    "name": "Ogan Komering Ilir",
    "fullName": "Kabupaten Ogan Komering Ilir",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 928,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 928
  },
  {
    "no": 101,
    "id": "1603",
    "name": "Muara Enim",
    "fullName": "Kabupaten Muara Enim",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 712,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 712
  },
  {
    "no": 102,
    "id": "1604",
    "name": "Lahat",
    "fullName": "Kabupaten Lahat",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 805,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 805
  },
  {
    "no": 103,
    "id": "1605",
    "name": "Musi Rawas",
    "fullName": "Kabupaten Musi Rawas",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 693,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 693
  },
  {
    "no": 104,
    "id": "1606",
    "name": "Musi Banyuasin",
    "fullName": "Kabupaten Musi Banyuasin",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 725,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 725
  },
  {
    "no": 105,
    "id": "1607",
    "name": "Banyuasin",
    "fullName": "Kabupaten Banyuasin",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 771,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 771
  },
  {
    "no": 106,
    "id": "1608",
    "name": "Ogan Komering Ulu Selatan",
    "fullName": "Kabupaten Ogan Komering Ulu Selatan",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 672,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 672
  },
  {
    "no": 107,
    "id": "1609",
    "name": "Ogan Komering Ulu Timur",
    "fullName": "Kabupaten Ogan Komering Ulu Timur",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 639,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 639
  },
  {
    "no": 108,
    "id": "1610",
    "name": "Ogan Ilir",
    "fullName": "Kabupaten Ogan Ilir",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 692,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 692
  },
  {
    "no": 109,
    "id": "1611",
    "name": "Empat Lawang",
    "fullName": "Kabupaten Empat Lawang",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 658,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 658
  },
  {
    "no": 110,
    "id": "1612",
    "name": "Penukal Abab Lematang Ilir",
    "fullName": "Kabupaten Penukal Abab Lematang Ilir",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 505,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 505
  },
  {
    "no": 111,
    "id": "1613",
    "name": "Musi Rawas Utara",
    "fullName": "Kabupaten Musi Rawas Utara",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 671,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 671
  },
  {
    "no": 112,
    "id": "1671",
    "name": "Palembang",
    "fullName": "Kota Palembang",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 1252,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 1252
  },
  {
    "no": 113,
    "id": "1672",
    "name": "Prabumulih",
    "fullName": "Kota Prabumulih",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 680,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 680
  },
  {
    "no": 114,
    "id": "1673",
    "name": "Pagar Alam",
    "fullName": "Kota Pagar Alam",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 484,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 484
  },
  {
    "no": 115,
    "id": "1674",
    "name": "Lubuklinggau",
    "fullName": "Kota Lubuklinggau",
    "provId": "16",
    "provName": "Sumatera Selatan",
    "satkerId": "SAT-16",
    "satkerName": "Satker PKP Sumatera V (Sumsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 99.4,
    "indikasiAwal": 753,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 753
  },
  {
    "no": 116,
    "id": "1701",
    "name": "Bengkulu Selatan",
    "fullName": "Kabupaten Bengkulu Selatan",
    "provId": "17",
    "provName": "Bengkulu",
    "satkerId": "SAT-17",
    "satkerName": "Satker PKP Sumatera IV (Bengkulu)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.6,
    "indikasiAwal": 840,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 840
  },
  {
    "no": 117,
    "id": "1702",
    "name": "Rejang Lebong",
    "fullName": "Kabupaten Rejang Lebong",
    "provId": "17",
    "provName": "Bengkulu",
    "satkerId": "SAT-17",
    "satkerName": "Satker PKP Sumatera IV (Bengkulu)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.6,
    "indikasiAwal": 745,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 745
  },
  {
    "no": 118,
    "id": "1703",
    "name": "Bengkulu Utara",
    "fullName": "Kabupaten Bengkulu Utara",
    "provId": "17",
    "provName": "Bengkulu",
    "satkerId": "SAT-17",
    "satkerName": "Satker PKP Sumatera IV (Bengkulu)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.6,
    "indikasiAwal": 650,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 650
  },
  {
    "no": 119,
    "id": "1704",
    "name": "Kaur",
    "fullName": "Kabupaten Kaur",
    "provId": "17",
    "provName": "Bengkulu",
    "satkerId": "SAT-17",
    "satkerName": "Satker PKP Sumatera IV (Bengkulu)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.6,
    "indikasiAwal": 822,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 822
  },
  {
    "no": 120,
    "id": "1705",
    "name": "Seluma",
    "fullName": "Kabupaten Seluma",
    "provId": "17",
    "provName": "Bengkulu",
    "satkerId": "SAT-17",
    "satkerName": "Satker PKP Sumatera IV (Bengkulu)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.6,
    "indikasiAwal": 874,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 874
  },
  {
    "no": 121,
    "id": "1706",
    "name": "Mukomuko",
    "fullName": "Kabupaten Mukomuko",
    "provId": "17",
    "provName": "Bengkulu",
    "satkerId": "SAT-17",
    "satkerName": "Satker PKP Sumatera IV (Bengkulu)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.6,
    "indikasiAwal": 666,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 666
  },
  {
    "no": 122,
    "id": "1707",
    "name": "Lebong",
    "fullName": "Kabupaten Lebong",
    "provId": "17",
    "provName": "Bengkulu",
    "satkerId": "SAT-17",
    "satkerName": "Satker PKP Sumatera IV (Bengkulu)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.6,
    "indikasiAwal": 554,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 554
  },
  {
    "no": 123,
    "id": "1708",
    "name": "Kepahiang",
    "fullName": "Kabupaten Kepahiang",
    "provId": "17",
    "provName": "Bengkulu",
    "satkerId": "SAT-17",
    "satkerName": "Satker PKP Sumatera IV (Bengkulu)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.6,
    "indikasiAwal": 651,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 651
  },
  {
    "no": 124,
    "id": "1709",
    "name": "Bengkulu Tengah",
    "fullName": "Kabupaten Bengkulu Tengah",
    "provId": "17",
    "provName": "Bengkulu",
    "satkerId": "SAT-17",
    "satkerName": "Satker PKP Sumatera IV (Bengkulu)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.6,
    "indikasiAwal": 532,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 532
  },
  {
    "no": 125,
    "id": "1771",
    "name": "Bengkulu",
    "fullName": "Kota Bengkulu",
    "provId": "17",
    "provName": "Bengkulu",
    "satkerId": "SAT-17",
    "satkerName": "Satker PKP Sumatera IV (Bengkulu)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 98.6,
    "indikasiAwal": 1012,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 1012
  },
  {
    "no": 126,
    "id": "1801",
    "name": "Lampung Barat",
    "fullName": "Kabupaten Lampung Barat",
    "provId": "18",
    "provName": "Lampung",
    "satkerId": "SAT-18",
    "satkerName": "Satker PKP Sumatera V (Lampung)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.7,
    "indikasiAwal": 754,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 754
  },
  {
    "no": 127,
    "id": "1802",
    "name": "Tanggamus",
    "fullName": "Kabupaten Tanggamus",
    "provId": "18",
    "provName": "Lampung",
    "satkerId": "SAT-18",
    "satkerName": "Satker PKP Sumatera V (Lampung)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.7,
    "indikasiAwal": 861,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 861
  },
  {
    "no": 128,
    "id": "1803",
    "name": "Lampung Selatan",
    "fullName": "Kabupaten Lampung Selatan",
    "provId": "18",
    "provName": "Lampung",
    "satkerId": "SAT-18",
    "satkerName": "Satker PKP Sumatera V (Lampung)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.7,
    "indikasiAwal": 1023,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 1023
  },
  {
    "no": 129,
    "id": "1804",
    "name": "Lampung Timur",
    "fullName": "Kabupaten Lampung Timur",
    "provId": "18",
    "provName": "Lampung",
    "satkerId": "SAT-18",
    "satkerName": "Satker PKP Sumatera V (Lampung)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.7,
    "indikasiAwal": 971,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 971
  },
  {
    "no": 130,
    "id": "1805",
    "name": "Lampung Tengah",
    "fullName": "Kabupaten Lampung Tengah",
    "provId": "18",
    "provName": "Lampung",
    "satkerId": "SAT-18",
    "satkerName": "Satker PKP Sumatera V (Lampung)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.7,
    "indikasiAwal": 868,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 868
  },
  {
    "no": 131,
    "id": "1806",
    "name": "Lampung Utara",
    "fullName": "Kabupaten Lampung Utara",
    "provId": "18",
    "provName": "Lampung",
    "satkerId": "SAT-18",
    "satkerName": "Satker PKP Sumatera V (Lampung)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.7,
    "indikasiAwal": 1086,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 1086
  },
  {
    "no": 132,
    "id": "1807",
    "name": "Way Kanan",
    "fullName": "Kabupaten Way Kanan",
    "provId": "18",
    "provName": "Lampung",
    "satkerId": "SAT-18",
    "satkerName": "Satker PKP Sumatera V (Lampung)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.7,
    "indikasiAwal": 763,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 763
  },
  {
    "no": 133,
    "id": "1808",
    "name": "Tulang Bawang",
    "fullName": "Kabupaten Tulang Bawang",
    "provId": "18",
    "provName": "Lampung",
    "satkerId": "SAT-18",
    "satkerName": "Satker PKP Sumatera V (Lampung)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.7,
    "indikasiAwal": 577,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 577
  },
  {
    "no": 134,
    "id": "1809",
    "name": "Pesawaran",
    "fullName": "Kabupaten Pesawaran",
    "provId": "18",
    "provName": "Lampung",
    "satkerId": "SAT-18",
    "satkerName": "Satker PKP Sumatera V (Lampung)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.7,
    "indikasiAwal": 724,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 724
  },
  {
    "no": 135,
    "id": "1810",
    "name": "Pringsewu",
    "fullName": "Kabupaten Pringsewu",
    "provId": "18",
    "provName": "Lampung",
    "satkerId": "SAT-18",
    "satkerName": "Satker PKP Sumatera V (Lampung)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.7,
    "indikasiAwal": 578,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 578
  },
  {
    "no": 136,
    "id": "1811",
    "name": "Mesuji",
    "fullName": "Kabupaten Mesuji",
    "provId": "18",
    "provName": "Lampung",
    "satkerId": "SAT-18",
    "satkerName": "Satker PKP Sumatera V (Lampung)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.7,
    "indikasiAwal": 421,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 421
  },
  {
    "no": 137,
    "id": "1812",
    "name": "Tulang Bawang Barat",
    "fullName": "Kabupaten Tulang Bawang Barat",
    "provId": "18",
    "provName": "Lampung",
    "satkerId": "SAT-18",
    "satkerName": "Satker PKP Sumatera V (Lampung)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.7,
    "indikasiAwal": 434,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 434
  },
  {
    "no": 138,
    "id": "1813",
    "name": "Pesisir Barat",
    "fullName": "Kabupaten Pesisir Barat",
    "provId": "18",
    "provName": "Lampung",
    "satkerId": "SAT-18",
    "satkerName": "Satker PKP Sumatera V (Lampung)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 95.7,
    "indikasiAwal": 621,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 621
  },
  {
    "no": 139,
    "id": "1871",
    "name": "Bandar Lampung",
    "fullName": "Kota Bandar Lampung",
    "provId": "18",
    "provName": "Lampung",
    "satkerId": "SAT-18",
    "satkerName": "Satker PKP Sumatera V (Lampung)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.7,
    "indikasiAwal": 866,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 866
  },
  {
    "no": 140,
    "id": "1872",
    "name": "Metro",
    "fullName": "Kota Metro",
    "provId": "18",
    "provName": "Lampung",
    "satkerId": "SAT-18",
    "satkerName": "Satker PKP Sumatera V (Lampung)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.7,
    "indikasiAwal": 452,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 452
  },
  {
    "no": 141,
    "id": "1901",
    "name": "Bangka",
    "fullName": "Kabupaten Bangka",
    "provId": "19",
    "provName": "Kepulauan Bangka Belitung",
    "satkerId": "SAT-19",
    "satkerName": "Satker PKP Sumatera V (Babel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 108.5,
    "indikasiAwal": 395,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 395
  },
  {
    "no": 142,
    "id": "1902",
    "name": "Belitung",
    "fullName": "Kabupaten Belitung",
    "provId": "19",
    "provName": "Kepulauan Bangka Belitung",
    "satkerId": "SAT-19",
    "satkerName": "Satker PKP Sumatera V (Babel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 108.5,
    "indikasiAwal": 339,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 339
  },
  {
    "no": 143,
    "id": "1903",
    "name": "Bangka Barat",
    "fullName": "Kabupaten Bangka Barat",
    "provId": "19",
    "provName": "Kepulauan Bangka Belitung",
    "satkerId": "SAT-19",
    "satkerName": "Satker PKP Sumatera V (Babel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 108.5,
    "indikasiAwal": 195,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 195
  },
  {
    "no": 144,
    "id": "1904",
    "name": "Bangka Tengah",
    "fullName": "Kabupaten Bangka Tengah",
    "provId": "19",
    "provName": "Kepulauan Bangka Belitung",
    "satkerId": "SAT-19",
    "satkerName": "Satker PKP Sumatera V (Babel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 108.5,
    "indikasiAwal": 412,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 412
  },
  {
    "no": 145,
    "id": "1905",
    "name": "Bangka Selatan",
    "fullName": "Kabupaten Bangka Selatan",
    "provId": "19",
    "provName": "Kepulauan Bangka Belitung",
    "satkerId": "SAT-19",
    "satkerName": "Satker PKP Sumatera V (Babel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 108.5,
    "indikasiAwal": 316,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 316
  },
  {
    "no": 146,
    "id": "1906",
    "name": "Belitung Timur",
    "fullName": "Kabupaten Belitung Timur",
    "provId": "19",
    "provName": "Kepulauan Bangka Belitung",
    "satkerId": "SAT-19",
    "satkerName": "Satker PKP Sumatera V (Babel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 108.5,
    "indikasiAwal": 404,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 404
  },
  {
    "no": 147,
    "id": "1971",
    "name": "Pangkalpinang",
    "fullName": "Kota Pangkalpinang",
    "provId": "19",
    "provName": "Kepulauan Bangka Belitung",
    "satkerId": "SAT-19",
    "satkerName": "Satker PKP Sumatera V (Babel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 108.5,
    "indikasiAwal": 371,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 371
  },
  {
    "no": 148,
    "id": "2101",
    "name": "Karimun",
    "fullName": "Kabupaten Karimun",
    "provId": "21",
    "provName": "Kepulauan Riau",
    "satkerId": "SAT-21",
    "satkerName": "Satker PKP Sumatera III (Kepri)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 112.4,
    "indikasiAwal": 505,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 505
  },
  {
    "no": 149,
    "id": "2102",
    "name": "Bintan",
    "fullName": "Kabupaten Bintan",
    "provId": "21",
    "provName": "Kepulauan Riau",
    "satkerId": "SAT-21",
    "satkerName": "Satker PKP Sumatera III (Kepri)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 112.4,
    "indikasiAwal": 455,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 455
  },
  {
    "no": 150,
    "id": "2103",
    "name": "Natuna",
    "fullName": "Kabupaten Natuna",
    "provId": "21",
    "provName": "Kepulauan Riau",
    "satkerId": "SAT-21",
    "satkerName": "Satker PKP Sumatera III (Kepri)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 112.4,
    "indikasiAwal": 361,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 361
  },
  {
    "no": 151,
    "id": "2104",
    "name": "Lingga",
    "fullName": "Kabupaten Lingga",
    "provId": "21",
    "provName": "Kepulauan Riau",
    "satkerId": "SAT-21",
    "satkerName": "Satker PKP Sumatera III (Kepri)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 112.4,
    "indikasiAwal": 546,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 546
  },
  {
    "no": 152,
    "id": "2105",
    "name": "Kepulauan Anambas",
    "fullName": "Kabupaten Kepulauan Anambas",
    "provId": "21",
    "provName": "Kepulauan Riau",
    "satkerId": "SAT-21",
    "satkerName": "Satker PKP Sumatera III (Kepri)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 112.4,
    "indikasiAwal": 461,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 461
  },
  {
    "no": 153,
    "id": "2171",
    "name": "Batam",
    "fullName": "Kota Batam",
    "provId": "21",
    "provName": "Kepulauan Riau",
    "satkerId": "SAT-21",
    "satkerName": "Satker PKP Sumatera III (Kepri)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 112.4,
    "indikasiAwal": 832,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 832
  },
  {
    "no": 154,
    "id": "2172",
    "name": "Tanjung Pinang",
    "fullName": "Kota Tanjung Pinang",
    "provId": "21",
    "provName": "Kepulauan Riau",
    "satkerId": "SAT-21",
    "satkerName": "Satker PKP Sumatera III (Kepri)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 112.4,
    "indikasiAwal": 527,
    "pulau": "Sumatera",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 527
  },
  {
    "no": 155,
    "id": "3101",
    "name": "Kepulauan Seribu",
    "fullName": "Kabupaten Kepulauan Seribu",
    "provId": "31",
    "provName": "DKI Jakarta",
    "satkerId": "SAT-31",
    "satkerName": "Satker PKP Jawa I (DKI Jakarta)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 108.9,
    "indikasiAwal": 555,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 555
  },
  {
    "no": 156,
    "id": "3171",
    "name": "Jakarta Selatan",
    "fullName": "Kota Jakarta Selatan",
    "provId": "31",
    "provName": "DKI Jakarta",
    "satkerId": "SAT-31",
    "satkerName": "Satker PKP Jawa I (DKI Jakarta)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 108.9,
    "indikasiAwal": 910,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 910
  },
  {
    "no": 157,
    "id": "3172",
    "name": "Jakarta Timur",
    "fullName": "Kota Jakarta Timur",
    "provId": "31",
    "provName": "DKI Jakarta",
    "satkerId": "SAT-31",
    "satkerName": "Satker PKP Jawa I (DKI Jakarta)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 108.9,
    "indikasiAwal": 1059,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1059
  },
  {
    "no": 158,
    "id": "3173",
    "name": "Jakarta Pusat",
    "fullName": "Kota Jakarta Pusat",
    "provId": "31",
    "provName": "DKI Jakarta",
    "satkerId": "SAT-31",
    "satkerName": "Satker PKP Jawa I (DKI Jakarta)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 108.9,
    "indikasiAwal": 732,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 732
  },
  {
    "no": 159,
    "id": "3174",
    "name": "Jakarta Barat",
    "fullName": "Kota Jakarta Barat",
    "provId": "31",
    "provName": "DKI Jakarta",
    "satkerId": "SAT-31",
    "satkerName": "Satker PKP Jawa I (DKI Jakarta)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 108.9,
    "indikasiAwal": 980,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 980
  },
  {
    "no": 160,
    "id": "3175",
    "name": "Jakarta Utara",
    "fullName": "Kota Jakarta Utara",
    "provId": "31",
    "provName": "DKI Jakarta",
    "satkerId": "SAT-31",
    "satkerName": "Satker PKP Jawa I (DKI Jakarta)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 108.9,
    "indikasiAwal": 1284,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1284
  },
  {
    "no": 161,
    "id": "3201",
    "name": "Bogor",
    "fullName": "Kabupaten Bogor",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 2672,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 2672
  },
  {
    "no": 162,
    "id": "3202",
    "name": "Sukabumi",
    "fullName": "Kabupaten Sukabumi",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1579,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1579
  },
  {
    "no": 163,
    "id": "3203",
    "name": "Cianjur",
    "fullName": "Kabupaten Cianjur",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1997,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1997
  },
  {
    "no": 164,
    "id": "3204",
    "name": "Bandung",
    "fullName": "Kabupaten Bandung",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1836,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1836
  },
  {
    "no": 165,
    "id": "3205",
    "name": "Garut",
    "fullName": "Kabupaten Garut",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 2119,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 2119
  },
  {
    "no": 166,
    "id": "3206",
    "name": "Tasikmalaya",
    "fullName": "Kabupaten Tasikmalaya",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1735,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1735
  },
  {
    "no": 167,
    "id": "3207",
    "name": "Ciamis",
    "fullName": "Kabupaten Ciamis",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1046,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1046
  },
  {
    "no": 168,
    "id": "3208",
    "name": "Kuningan",
    "fullName": "Kabupaten Kuningan",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1065,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1065
  },
  {
    "no": 169,
    "id": "3209",
    "name": "Cirebon",
    "fullName": "Kabupaten Cirebon",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1505,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1505
  },
  {
    "no": 170,
    "id": "3210",
    "name": "Majalengka",
    "fullName": "Kabupaten Majalengka",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1233,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1233
  },
  {
    "no": 171,
    "id": "3211",
    "name": "Sumedang",
    "fullName": "Kabupaten Sumedang",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1137,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1137
  },
  {
    "no": 172,
    "id": "3212",
    "name": "Indramayu",
    "fullName": "Kabupaten Indramayu",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1449,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1449
  },
  {
    "no": 173,
    "id": "3213",
    "name": "Subang",
    "fullName": "Kabupaten Subang",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1207,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1207
  },
  {
    "no": 174,
    "id": "3214",
    "name": "Purwakarta",
    "fullName": "Kabupaten Purwakarta",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 979,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 979
  },
  {
    "no": 175,
    "id": "3215",
    "name": "Karawang",
    "fullName": "Kabupaten Karawang",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1282,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1282
  },
  {
    "no": 176,
    "id": "3216",
    "name": "Bekasi",
    "fullName": "Kabupaten Bekasi",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1381,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1381
  },
  {
    "no": 177,
    "id": "3217",
    "name": "Bandung Barat",
    "fullName": "Kabupaten Bandung Barat",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1477,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1477
  },
  {
    "no": 178,
    "id": "3218",
    "name": "Pangandaran",
    "fullName": "Kabupaten Pangandaran",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 703,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 703
  },
  {
    "no": 179,
    "id": "3271",
    "name": "Bogor",
    "fullName": "Kota Bogor",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 976,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 976
  },
  {
    "no": 180,
    "id": "3272",
    "name": "Sukabumi",
    "fullName": "Kota Sukabumi",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 677,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 677
  },
  {
    "no": 181,
    "id": "3273",
    "name": "Bandung",
    "fullName": "Kota Bandung",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 979,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 979
  },
  {
    "no": 182,
    "id": "3274",
    "name": "Cirebon",
    "fullName": "Kota Cirebon",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 771,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 771
  },
  {
    "no": 183,
    "id": "3275",
    "name": "Bekasi",
    "fullName": "Kota Bekasi",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1028,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1028
  },
  {
    "no": 184,
    "id": "3276",
    "name": "Depok",
    "fullName": "Kota Depok",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 875,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 875
  },
  {
    "no": 185,
    "id": "3277",
    "name": "Cimahi",
    "fullName": "Kota Cimahi",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 608,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 608
  },
  {
    "no": 186,
    "id": "3278",
    "name": "Tasikmalaya",
    "fullName": "Kota Tasikmalaya",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 1025,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1025
  },
  {
    "no": 187,
    "id": "3279",
    "name": "Banjar",
    "fullName": "Kota Banjar",
    "provId": "32",
    "provName": "Jawa Barat",
    "satkerId": "SAT-32",
    "satkerName": "Satker PKP Jawa II (Jawa Barat)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 96.2,
    "indikasiAwal": 479,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 479
  },
  {
    "no": 188,
    "id": "3301",
    "name": "Cilacap",
    "fullName": "Kabupaten Cilacap",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 1536,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1536
  },
  {
    "no": 189,
    "id": "3302",
    "name": "Banyumas",
    "fullName": "Kabupaten Banyumas",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 1583,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1583
  },
  {
    "no": 190,
    "id": "3303",
    "name": "Purbalingga",
    "fullName": "Kabupaten Purbalingga",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 1223,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1223
  },
  {
    "no": 191,
    "id": "3304",
    "name": "Banjarnegara",
    "fullName": "Kabupaten Banjarnegara",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 1313,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1313
  },
  {
    "no": 192,
    "id": "3305",
    "name": "Kebumen",
    "fullName": "Kabupaten Kebumen",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 1388,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1388
  },
  {
    "no": 193,
    "id": "3306",
    "name": "Purworejo",
    "fullName": "Kabupaten Purworejo",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 936,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 936
  },
  {
    "no": 194,
    "id": "3307",
    "name": "Wonosobo",
    "fullName": "Kabupaten Wonosobo",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 1289,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1289
  },
  {
    "no": 195,
    "id": "3308",
    "name": "Magelang",
    "fullName": "Kabupaten Magelang",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 1242,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1242
  },
  {
    "no": 196,
    "id": "3309",
    "name": "Boyolali",
    "fullName": "Kabupaten Boyolali",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 960,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 960
  },
  {
    "no": 197,
    "id": "3310",
    "name": "Klaten",
    "fullName": "Kabupaten Klaten",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 1099,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1099
  },
  {
    "no": 198,
    "id": "3311",
    "name": "Sukoharjo",
    "fullName": "Kabupaten Sukoharjo",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 791,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 791
  },
  {
    "no": 199,
    "id": "3312",
    "name": "Wonogiri",
    "fullName": "Kabupaten Wonogiri",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 922,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 922
  },
  {
    "no": 200,
    "id": "3313",
    "name": "Karanganyar",
    "fullName": "Kabupaten Karanganyar",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 821,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 821
  },
  {
    "no": 201,
    "id": "3314",
    "name": "Sragen",
    "fullName": "Kabupaten Sragen",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 1110,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1110
  },
  {
    "no": 202,
    "id": "3315",
    "name": "Grobogan",
    "fullName": "Kabupaten Grobogan",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 1439,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1439
  },
  {
    "no": 203,
    "id": "3316",
    "name": "Blora",
    "fullName": "Kabupaten Blora",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 1189,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1189
  },
  {
    "no": 204,
    "id": "3317",
    "name": "Rembang",
    "fullName": "Kabupaten Rembang",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 1119,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1119
  },
  {
    "no": 205,
    "id": "3318",
    "name": "Pati",
    "fullName": "Kabupaten Pati",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 999,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 999
  },
  {
    "no": 206,
    "id": "3319",
    "name": "Kudus",
    "fullName": "Kabupaten Kudus",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 688,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 688
  },
  {
    "no": 207,
    "id": "3320",
    "name": "Jepara",
    "fullName": "Kabupaten Jepara",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 803,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 803
  },
  {
    "no": 208,
    "id": "3321",
    "name": "Demak",
    "fullName": "Kabupaten Demak",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 1102,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1102
  },
  {
    "no": 209,
    "id": "3322",
    "name": "Semarang",
    "fullName": "Kabupaten Semarang",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 797,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 797
  },
  {
    "no": 210,
    "id": "3323",
    "name": "Temanggung",
    "fullName": "Kabupaten Temanggung",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 854,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 854
  },
  {
    "no": 211,
    "id": "3324",
    "name": "Kendal",
    "fullName": "Kabupaten Kendal",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 941,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 941
  },
  {
    "no": 212,
    "id": "3325",
    "name": "Batang",
    "fullName": "Kabupaten Batang",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 821,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 821
  },
  {
    "no": 213,
    "id": "3326",
    "name": "Pekalongan",
    "fullName": "Kabupaten Pekalongan",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 842,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 842
  },
  {
    "no": 214,
    "id": "3327",
    "name": "Pemalang",
    "fullName": "Kabupaten Pemalang",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 1438,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1438
  },
  {
    "no": 215,
    "id": "3328",
    "name": "Tegal",
    "fullName": "Kabupaten Tegal",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 907,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 907
  },
  {
    "no": 216,
    "id": "3329",
    "name": "Brebes",
    "fullName": "Kabupaten Brebes",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 1697,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1697
  },
  {
    "no": 217,
    "id": "3371",
    "name": "Magelang",
    "fullName": "Kota Magelang",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 653,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 653
  },
  {
    "no": 218,
    "id": "3372",
    "name": "Surakarta",
    "fullName": "Kota Surakarta",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 806,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 806
  },
  {
    "no": 219,
    "id": "3373",
    "name": "Salatiga",
    "fullName": "Kota Salatiga",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 591,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 591
  },
  {
    "no": 220,
    "id": "3374",
    "name": "Semarang",
    "fullName": "Kota Semarang",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 884,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 884
  },
  {
    "no": 221,
    "id": "3375",
    "name": "Pekalongan",
    "fullName": "Kota Pekalongan",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 540,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 540
  },
  {
    "no": 222,
    "id": "3376",
    "name": "Tegal",
    "fullName": "Kota Tegal",
    "provId": "33",
    "provName": "Jawa Tengah",
    "satkerId": "SAT-33",
    "satkerName": "Satker PKP Jawa III (Jawa Tengah)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 92.8,
    "indikasiAwal": 553,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 553
  },
  {
    "no": 223,
    "id": "3401",
    "name": "Kulon Progo",
    "fullName": "Kabupaten Kulon Progo",
    "provId": "34",
    "provName": "DI Yogyakarta",
    "satkerId": "SAT-34",
    "satkerName": "Satker PKP Jawa III (DI Yogyakarta)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 94.1,
    "indikasiAwal": 1015,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1015
  },
  {
    "no": 224,
    "id": "3402",
    "name": "Bantul",
    "fullName": "Kabupaten Bantul",
    "provId": "34",
    "provName": "DI Yogyakarta",
    "satkerId": "SAT-34",
    "satkerName": "Satker PKP Jawa III (DI Yogyakarta)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 94.1,
    "indikasiAwal": 1251,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1251
  },
  {
    "no": 225,
    "id": "3403",
    "name": "Gunungkidul",
    "fullName": "Kabupaten Gunungkidul",
    "provId": "34",
    "provName": "DI Yogyakarta",
    "satkerId": "SAT-34",
    "satkerName": "Satker PKP Jawa III (DI Yogyakarta)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 94.1,
    "indikasiAwal": 1143,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1143
  },
  {
    "no": 226,
    "id": "3404",
    "name": "Sleman",
    "fullName": "Kabupaten Sleman",
    "provId": "34",
    "provName": "DI Yogyakarta",
    "satkerId": "SAT-34",
    "satkerName": "Satker PKP Jawa III (DI Yogyakarta)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 94.1,
    "indikasiAwal": 975,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 975
  },
  {
    "no": 227,
    "id": "3471",
    "name": "Yogyakarta",
    "fullName": "Kota Yogyakarta",
    "provId": "34",
    "provName": "DI Yogyakarta",
    "satkerId": "SAT-34",
    "satkerName": "Satker PKP Jawa III (DI Yogyakarta)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 94.1,
    "indikasiAwal": 730,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 730
  },
  {
    "no": 228,
    "id": "3501",
    "name": "Pacitan",
    "fullName": "Kabupaten Pacitan",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1103,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1103
  },
  {
    "no": 229,
    "id": "3502",
    "name": "Ponorogo",
    "fullName": "Kabupaten Ponorogo",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 911,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 911
  },
  {
    "no": 230,
    "id": "3503",
    "name": "Trenggalek",
    "fullName": "Kabupaten Trenggalek",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1003,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1003
  },
  {
    "no": 231,
    "id": "3504",
    "name": "Tulungagung",
    "fullName": "Kabupaten Tulungagung",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 700,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 700
  },
  {
    "no": 232,
    "id": "3505",
    "name": "Blitar",
    "fullName": "Kabupaten Blitar",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 969,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 969
  },
  {
    "no": 233,
    "id": "3506",
    "name": "Kediri",
    "fullName": "Kabupaten Kediri",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1191,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1191
  },
  {
    "no": 234,
    "id": "3507",
    "name": "Malang",
    "fullName": "Kabupaten Malang",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1566,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1566
  },
  {
    "no": 235,
    "id": "3508",
    "name": "Lumajang",
    "fullName": "Kabupaten Lumajang",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 908,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 908
  },
  {
    "no": 236,
    "id": "3509",
    "name": "Jember",
    "fullName": "Kabupaten Jember",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1566,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1566
  },
  {
    "no": 237,
    "id": "3510",
    "name": "Banyuwangi",
    "fullName": "Kabupaten Banyuwangi",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 862,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 862
  },
  {
    "no": 238,
    "id": "3511",
    "name": "Bondowoso",
    "fullName": "Kabupaten Bondowoso",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1055,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1055
  },
  {
    "no": 239,
    "id": "3512",
    "name": "Situbondo",
    "fullName": "Kabupaten Situbondo",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1002,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1002
  },
  {
    "no": 240,
    "id": "3513",
    "name": "Probolinggo",
    "fullName": "Kabupaten Probolinggo",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1694,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1694
  },
  {
    "no": 241,
    "id": "3514",
    "name": "Pasuruan",
    "fullName": "Kabupaten Pasuruan",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1120,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1120
  },
  {
    "no": 242,
    "id": "3515",
    "name": "Sidoarjo",
    "fullName": "Kabupaten Sidoarjo",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 866,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 866
  },
  {
    "no": 243,
    "id": "3516",
    "name": "Mojokerto",
    "fullName": "Kabupaten Mojokerto",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 930,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 930
  },
  {
    "no": 244,
    "id": "3517",
    "name": "Jombang",
    "fullName": "Kabupaten Jombang",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 963,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 963
  },
  {
    "no": 245,
    "id": "3518",
    "name": "Nganjuk",
    "fullName": "Kabupaten Nganjuk",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1031,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1031
  },
  {
    "no": 246,
    "id": "3519",
    "name": "Madiun",
    "fullName": "Kabupaten Madiun",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 858,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 858
  },
  {
    "no": 247,
    "id": "3520",
    "name": "Magetan",
    "fullName": "Kabupaten Magetan",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 804,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 804
  },
  {
    "no": 248,
    "id": "3521",
    "name": "Ngawi",
    "fullName": "Kabupaten Ngawi",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1189,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1189
  },
  {
    "no": 249,
    "id": "3522",
    "name": "Bojonegoro",
    "fullName": "Kabupaten Bojonegoro",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1326,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1326
  },
  {
    "no": 250,
    "id": "3523",
    "name": "Tuban",
    "fullName": "Kabupaten Tuban",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1416,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1416
  },
  {
    "no": 251,
    "id": "3524",
    "name": "Lamongan",
    "fullName": "Kabupaten Lamongan",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1141,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1141
  },
  {
    "no": 252,
    "id": "3525",
    "name": "Gresik",
    "fullName": "Kabupaten Gresik",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1138,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1138
  },
  {
    "no": 253,
    "id": "3526",
    "name": "Bangkalan",
    "fullName": "Kabupaten Bangkalan",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1615,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1615
  },
  {
    "no": 254,
    "id": "3527",
    "name": "Sampang",
    "fullName": "Kabupaten Sampang",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1646,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1646
  },
  {
    "no": 255,
    "id": "3528",
    "name": "Pamekasan",
    "fullName": "Kabupaten Pamekasan",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1235,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1235
  },
  {
    "no": 256,
    "id": "3529",
    "name": "Sumenep",
    "fullName": "Kabupaten Sumenep",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1418,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1418
  },
  {
    "no": 257,
    "id": "3571",
    "name": "Kediri",
    "fullName": "Kota Kediri",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 558,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 558
  },
  {
    "no": 258,
    "id": "3572",
    "name": "Blitar",
    "fullName": "Kota Blitar",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 566,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 566
  },
  {
    "no": 259,
    "id": "3573",
    "name": "Malang",
    "fullName": "Kota Malang",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 658,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 658
  },
  {
    "no": 260,
    "id": "3574",
    "name": "Probolinggo",
    "fullName": "Kota Probolinggo",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 411,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 411
  },
  {
    "no": 261,
    "id": "3575",
    "name": "Pasuruan",
    "fullName": "Kota Pasuruan",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 564,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 564
  },
  {
    "no": 262,
    "id": "3576",
    "name": "Mojokerto",
    "fullName": "Kota Mojokerto",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 439,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 439
  },
  {
    "no": 263,
    "id": "3577",
    "name": "Madiun",
    "fullName": "Kota Madiun",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 539,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 539
  },
  {
    "no": 264,
    "id": "3578",
    "name": "Surabaya",
    "fullName": "Kota Surabaya",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 1020,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1020
  },
  {
    "no": 265,
    "id": "3579",
    "name": "Batu",
    "fullName": "Kota Batu",
    "provId": "35",
    "provName": "Jawa Timur",
    "satkerId": "SAT-35",
    "satkerName": "Satker PKP Jawa IV (Jawa Timur)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 95.5,
    "indikasiAwal": 448,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 448
  },
  {
    "no": 266,
    "id": "3601",
    "name": "Pandeglang",
    "fullName": "Kabupaten Pandeglang",
    "provId": "36",
    "provName": "Banten",
    "satkerId": "SAT-36",
    "satkerName": "Satker PKP Jawa I (Banten)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.3,
    "indikasiAwal": 1041,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1041
  },
  {
    "no": 267,
    "id": "3602",
    "name": "Lebak",
    "fullName": "Kabupaten Lebak",
    "provId": "36",
    "provName": "Banten",
    "satkerId": "SAT-36",
    "satkerName": "Satker PKP Jawa I (Banten)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 98.3,
    "indikasiAwal": 1010,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1010
  },
  {
    "no": 268,
    "id": "3603",
    "name": "Tangerang",
    "fullName": "Kabupaten Tangerang",
    "provId": "36",
    "provName": "Banten",
    "satkerId": "SAT-36",
    "satkerName": "Satker PKP Jawa I (Banten)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 98.3,
    "indikasiAwal": 1510,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1510
  },
  {
    "no": 269,
    "id": "3604",
    "name": "Serang",
    "fullName": "Kabupaten Serang",
    "provId": "36",
    "provName": "Banten",
    "satkerId": "SAT-36",
    "satkerName": "Satker PKP Jawa I (Banten)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 98.3,
    "indikasiAwal": 693,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 693
  },
  {
    "no": 270,
    "id": "3671",
    "name": "Tangerang",
    "fullName": "Kota Tangerang",
    "provId": "36",
    "provName": "Banten",
    "satkerId": "SAT-36",
    "satkerName": "Satker PKP Jawa I (Banten)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 98.3,
    "indikasiAwal": 906,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 906
  },
  {
    "no": 271,
    "id": "3672",
    "name": "Cilegon",
    "fullName": "Kota Cilegon",
    "provId": "36",
    "provName": "Banten",
    "satkerId": "SAT-36",
    "satkerName": "Satker PKP Jawa I (Banten)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 98.3,
    "indikasiAwal": 479,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 479
  },
  {
    "no": 272,
    "id": "3673",
    "name": "Serang",
    "fullName": "Kota Serang",
    "provId": "36",
    "provName": "Banten",
    "satkerId": "SAT-36",
    "satkerName": "Satker PKP Jawa I (Banten)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 98.3,
    "indikasiAwal": 659,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 659
  },
  {
    "no": 273,
    "id": "3674",
    "name": "Tangerang Selatan",
    "fullName": "Kota Tangerang Selatan",
    "provId": "36",
    "provName": "Banten",
    "satkerId": "SAT-36",
    "satkerName": "Satker PKP Jawa I (Banten)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 98.3,
    "indikasiAwal": 677,
    "pulau": "Jawa",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 677
  },
  {
    "no": 274,
    "id": "5101",
    "name": "Jembrana",
    "fullName": "Kabupaten Jembrana",
    "provId": "51",
    "provName": "Bali",
    "satkerId": "SAT-51",
    "satkerName": "Satker PKP Jawa IV (Bali)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 101.2,
    "indikasiAwal": 434,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 434
  },
  {
    "no": 275,
    "id": "5102",
    "name": "Tabanan",
    "fullName": "Kabupaten Tabanan",
    "provId": "51",
    "provName": "Bali",
    "satkerId": "SAT-51",
    "satkerName": "Satker PKP Jawa IV (Bali)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 101.2,
    "indikasiAwal": 417,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 417
  },
  {
    "no": 276,
    "id": "5103",
    "name": "Badung",
    "fullName": "Kabupaten Badung",
    "provId": "51",
    "provName": "Bali",
    "satkerId": "SAT-51",
    "satkerName": "Satker PKP Jawa IV (Bali)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 101.2,
    "indikasiAwal": 395,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 395
  },
  {
    "no": 277,
    "id": "5104",
    "name": "Gianyar",
    "fullName": "Kabupaten Gianyar",
    "provId": "51",
    "provName": "Bali",
    "satkerId": "SAT-51",
    "satkerName": "Satker PKP Jawa IV (Bali)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 101.2,
    "indikasiAwal": 412,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 412
  },
  {
    "no": 278,
    "id": "5105",
    "name": "Klungkung",
    "fullName": "Kabupaten Klungkung",
    "provId": "51",
    "provName": "Bali",
    "satkerId": "SAT-51",
    "satkerName": "Satker PKP Jawa IV (Bali)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 101.2,
    "indikasiAwal": 432,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 432
  },
  {
    "no": 279,
    "id": "5106",
    "name": "Bangli",
    "fullName": "Kabupaten Bangli",
    "provId": "51",
    "provName": "Bali",
    "satkerId": "SAT-51",
    "satkerName": "Satker PKP Jawa IV (Bali)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 101.2,
    "indikasiAwal": 404,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 404
  },
  {
    "no": 280,
    "id": "5107",
    "name": "Karangasem",
    "fullName": "Kabupaten Karangasem",
    "provId": "51",
    "provName": "Bali",
    "satkerId": "SAT-51",
    "satkerName": "Satker PKP Jawa IV (Bali)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 101.2,
    "indikasiAwal": 553,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 553
  },
  {
    "no": 281,
    "id": "5108",
    "name": "Buleleng",
    "fullName": "Kabupaten Buleleng",
    "provId": "51",
    "provName": "Bali",
    "satkerId": "SAT-51",
    "satkerName": "Satker PKP Jawa IV (Bali)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 101.2,
    "indikasiAwal": 584,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 584
  },
  {
    "no": 282,
    "id": "5171",
    "name": "Denpasar",
    "fullName": "Kota Denpasar",
    "provId": "51",
    "provName": "Bali",
    "satkerId": "SAT-51",
    "satkerName": "Satker PKP Jawa IV (Bali)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 101.2,
    "indikasiAwal": 416,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 416
  },
  {
    "no": 283,
    "id": "5201",
    "name": "Lombok Barat",
    "fullName": "Kabupaten Lombok Barat",
    "provId": "52",
    "provName": "Nusa Tenggara Barat",
    "satkerId": "SAT-52",
    "satkerName": "Satker PKP Nusa Tenggara I (NTB)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 106.8,
    "indikasiAwal": 1089,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1089
  },
  {
    "no": 284,
    "id": "5202",
    "name": "Lombok Tengah",
    "fullName": "Kabupaten Lombok Tengah",
    "provId": "52",
    "provName": "Nusa Tenggara Barat",
    "satkerId": "SAT-52",
    "satkerName": "Satker PKP Nusa Tenggara I (NTB)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 106.8,
    "indikasiAwal": 1190,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1190
  },
  {
    "no": 285,
    "id": "5203",
    "name": "Lombok Timur",
    "fullName": "Kabupaten Lombok Timur",
    "provId": "52",
    "provName": "Nusa Tenggara Barat",
    "satkerId": "SAT-52",
    "satkerName": "Satker PKP Nusa Tenggara I (NTB)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 106.8,
    "indikasiAwal": 1490,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1490
  },
  {
    "no": 286,
    "id": "5204",
    "name": "Sumbawa",
    "fullName": "Kabupaten Sumbawa",
    "provId": "52",
    "provName": "Nusa Tenggara Barat",
    "satkerId": "SAT-52",
    "satkerName": "Satker PKP Nusa Tenggara I (NTB)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 106.8,
    "indikasiAwal": 1017,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1017
  },
  {
    "no": 287,
    "id": "5205",
    "name": "Dompu",
    "fullName": "Kabupaten Dompu",
    "provId": "52",
    "provName": "Nusa Tenggara Barat",
    "satkerId": "SAT-52",
    "satkerName": "Satker PKP Nusa Tenggara I (NTB)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 106.8,
    "indikasiAwal": 765,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 765
  },
  {
    "no": 288,
    "id": "5206",
    "name": "Bima",
    "fullName": "Kabupaten Bima",
    "provId": "52",
    "provName": "Nusa Tenggara Barat",
    "satkerId": "SAT-52",
    "satkerName": "Satker PKP Nusa Tenggara I (NTB)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 106.8,
    "indikasiAwal": 934,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 934
  },
  {
    "no": 289,
    "id": "5207",
    "name": "Sumbawa Barat",
    "fullName": "Kabupaten Sumbawa Barat",
    "provId": "52",
    "provName": "Nusa Tenggara Barat",
    "satkerId": "SAT-52",
    "satkerName": "Satker PKP Nusa Tenggara I (NTB)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 106.8,
    "indikasiAwal": 822,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 822
  },
  {
    "no": 290,
    "id": "5208",
    "name": "Lombok Utara",
    "fullName": "Kabupaten Lombok Utara",
    "provId": "52",
    "provName": "Nusa Tenggara Barat",
    "satkerId": "SAT-52",
    "satkerName": "Satker PKP Nusa Tenggara I (NTB)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 106.8,
    "indikasiAwal": 1045,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1045
  },
  {
    "no": 291,
    "id": "5271",
    "name": "Mataram",
    "fullName": "Kota Mataram",
    "provId": "52",
    "provName": "Nusa Tenggara Barat",
    "satkerId": "SAT-52",
    "satkerName": "Satker PKP Nusa Tenggara I (NTB)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 106.8,
    "indikasiAwal": 814,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 814
  },
  {
    "no": 292,
    "id": "5272",
    "name": "Bima",
    "fullName": "Kota Bima",
    "provId": "52",
    "provName": "Nusa Tenggara Barat",
    "satkerId": "SAT-52",
    "satkerName": "Satker PKP Nusa Tenggara I (NTB)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 106.8,
    "indikasiAwal": 637,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 637
  },
  {
    "no": 293,
    "id": "5301",
    "name": "Sumba Barat",
    "fullName": "Kabupaten Sumba Barat",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 1313,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1313
  },
  {
    "no": 294,
    "id": "5302",
    "name": "Sumba Timur",
    "fullName": "Kabupaten Sumba Timur",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 1552,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1552
  },
  {
    "no": 295,
    "id": "5303",
    "name": "Kupang",
    "fullName": "Kabupaten Kupang",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 1249,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1249
  },
  {
    "no": 296,
    "id": "5304",
    "name": "Timor Tengah Selatan",
    "fullName": "Kabupaten Timor Tengah Selatan",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 1414,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1414
  },
  {
    "no": 297,
    "id": "5305",
    "name": "Timor Tengah Utara",
    "fullName": "Kabupaten Timor Tengah Utara",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 1153,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1153
  },
  {
    "no": 298,
    "id": "5306",
    "name": "Belu",
    "fullName": "Kabupaten Belu",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 789,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 789
  },
  {
    "no": 299,
    "id": "5307",
    "name": "Alor",
    "fullName": "Kabupaten Alor",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 891,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 891
  },
  {
    "no": 300,
    "id": "5308",
    "name": "Lembata",
    "fullName": "Kabupaten Lembata",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 1183,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1183
  },
  {
    "no": 301,
    "id": "5309",
    "name": "Flores Timur",
    "fullName": "Kabupaten Flores Timur",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 668,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 668
  },
  {
    "no": 302,
    "id": "5310",
    "name": "Sikka",
    "fullName": "Kabupaten Sikka",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 799,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 799
  },
  {
    "no": 303,
    "id": "5311",
    "name": "Ende",
    "fullName": "Kabupaten Ende",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 1074,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1074
  },
  {
    "no": 304,
    "id": "5312",
    "name": "Ngada",
    "fullName": "Kabupaten Ngada",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 708,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 708
  },
  {
    "no": 305,
    "id": "5313",
    "name": "Manggarai",
    "fullName": "Kabupaten Manggarai",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 937,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 937
  },
  {
    "no": 306,
    "id": "5314",
    "name": "Rote Ndao",
    "fullName": "Kabupaten Rote Ndao",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 1202,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1202
  },
  {
    "no": 307,
    "id": "5315",
    "name": "Manggarai Barat",
    "fullName": "Kabupaten Manggarai Barat",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 993,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 993
  },
  {
    "no": 308,
    "id": "5316",
    "name": "Sumba Tengah",
    "fullName": "Kabupaten Sumba Tengah",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 1225,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1225
  },
  {
    "no": 309,
    "id": "5317",
    "name": "Sumba Barat Daya",
    "fullName": "Kabupaten Sumba Barat Daya",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 1417,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1417
  },
  {
    "no": 310,
    "id": "5318",
    "name": "Nagekeo",
    "fullName": "Kabupaten Nagekeo",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 765,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 765
  },
  {
    "no": 311,
    "id": "5319",
    "name": "Manggarai Timur",
    "fullName": "Kabupaten Manggarai Timur",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 1271,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1271
  },
  {
    "no": 312,
    "id": "5320",
    "name": "Sabu Raijua",
    "fullName": "Kabupaten Sabu Raijua",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 1238,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 1238
  },
  {
    "no": 313,
    "id": "5321",
    "name": "Malaka",
    "fullName": "Kabupaten Malaka",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 820,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 820
  },
  {
    "no": 314,
    "id": "5371",
    "name": "Kupang",
    "fullName": "Kota Kupang",
    "provId": "53",
    "provName": "Nusa Tenggara Timur",
    "satkerId": "SAT-53",
    "satkerName": "Satker PKP Nusa Tenggara II (NTT)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 116.5,
    "indikasiAwal": 630,
    "pulau": "Bali-Nusa Tenggara",
    "wilayahKerja": "Wilayah II",
    "targetUnitFinal": 630
  },
  {
    "no": 315,
    "id": "6101",
    "name": "Sambas",
    "fullName": "Kabupaten Sambas",
    "provId": "61",
    "provName": "Kalimantan Barat",
    "satkerId": "SAT-61",
    "satkerName": "Satker PKP Kalimantan I (Kalbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 109.3,
    "indikasiAwal": 581,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 581
  },
  {
    "no": 316,
    "id": "6102",
    "name": "Bengkayang",
    "fullName": "Kabupaten Bengkayang",
    "provId": "61",
    "provName": "Kalimantan Barat",
    "satkerId": "SAT-61",
    "satkerName": "Satker PKP Kalimantan I (Kalbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 109.3,
    "indikasiAwal": 429,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 429
  },
  {
    "no": 317,
    "id": "6103",
    "name": "Landak",
    "fullName": "Kabupaten Landak",
    "provId": "61",
    "provName": "Kalimantan Barat",
    "satkerId": "SAT-61",
    "satkerName": "Satker PKP Kalimantan I (Kalbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 109.3,
    "indikasiAwal": 577,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 577
  },
  {
    "no": 318,
    "id": "6104",
    "name": "Mempawah",
    "fullName": "Kabupaten Mempawah",
    "provId": "61",
    "provName": "Kalimantan Barat",
    "satkerId": "SAT-61",
    "satkerName": "Satker PKP Kalimantan I (Kalbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 109.3,
    "indikasiAwal": 442,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 442
  },
  {
    "no": 319,
    "id": "6105",
    "name": "Sanggau",
    "fullName": "Kabupaten Sanggau",
    "provId": "61",
    "provName": "Kalimantan Barat",
    "satkerId": "SAT-61",
    "satkerName": "Satker PKP Kalimantan I (Kalbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 109.3,
    "indikasiAwal": 491,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 491
  },
  {
    "no": 320,
    "id": "6106",
    "name": "Ketapang",
    "fullName": "Kabupaten Ketapang",
    "provId": "61",
    "provName": "Kalimantan Barat",
    "satkerId": "SAT-61",
    "satkerName": "Satker PKP Kalimantan I (Kalbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 109.3,
    "indikasiAwal": 622,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 622
  },
  {
    "no": 321,
    "id": "6107",
    "name": "Sintang",
    "fullName": "Kabupaten Sintang",
    "provId": "61",
    "provName": "Kalimantan Barat",
    "satkerId": "SAT-61",
    "satkerName": "Satker PKP Kalimantan I (Kalbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 109.3,
    "indikasiAwal": 590,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 590
  },
  {
    "no": 322,
    "id": "6108",
    "name": "Kapuas Hulu",
    "fullName": "Kabupaten Kapuas Hulu",
    "provId": "61",
    "provName": "Kalimantan Barat",
    "satkerId": "SAT-61",
    "satkerName": "Satker PKP Kalimantan I (Kalbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 109.3,
    "indikasiAwal": 537,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 537
  },
  {
    "no": 323,
    "id": "6109",
    "name": "Sekadau",
    "fullName": "Kabupaten Sekadau",
    "provId": "61",
    "provName": "Kalimantan Barat",
    "satkerId": "SAT-61",
    "satkerName": "Satker PKP Kalimantan I (Kalbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 109.3,
    "indikasiAwal": 409,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 409
  },
  {
    "no": 324,
    "id": "6110",
    "name": "Melawi",
    "fullName": "Kabupaten Melawi",
    "provId": "61",
    "provName": "Kalimantan Barat",
    "satkerId": "SAT-61",
    "satkerName": "Satker PKP Kalimantan I (Kalbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 109.3,
    "indikasiAwal": 675,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 675
  },
  {
    "no": 325,
    "id": "6111",
    "name": "Kayong Utara",
    "fullName": "Kabupaten Kayong Utara",
    "provId": "61",
    "provName": "Kalimantan Barat",
    "satkerId": "SAT-61",
    "satkerName": "Satker PKP Kalimantan I (Kalbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 109.3,
    "indikasiAwal": 552,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 552
  },
  {
    "no": 326,
    "id": "6112",
    "name": "Kubu Raya",
    "fullName": "Kabupaten Kubu Raya",
    "provId": "61",
    "provName": "Kalimantan Barat",
    "satkerId": "SAT-61",
    "satkerName": "Satker PKP Kalimantan I (Kalbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 109.3,
    "indikasiAwal": 497,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 497
  },
  {
    "no": 327,
    "id": "6171",
    "name": "Pontianak",
    "fullName": "Kota Pontianak",
    "provId": "61",
    "provName": "Kalimantan Barat",
    "satkerId": "SAT-61",
    "satkerName": "Satker PKP Kalimantan I (Kalbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 109.3,
    "indikasiAwal": 622,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 622
  },
  {
    "no": 328,
    "id": "6172",
    "name": "Singkawang",
    "fullName": "Kota Singkawang",
    "provId": "61",
    "provName": "Kalimantan Barat",
    "satkerId": "SAT-61",
    "satkerName": "Satker PKP Kalimantan I (Kalbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 109.3,
    "indikasiAwal": 496,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 496
  },
  {
    "no": 329,
    "id": "6201",
    "name": "Kotawaringin Barat",
    "fullName": "Kabupaten Kotawaringin Barat",
    "provId": "62",
    "provName": "Kalimantan Tengah",
    "satkerId": "SAT-62",
    "satkerName": "Satker PKP Kalimantan I (Kalteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 111.8,
    "indikasiAwal": 394,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 394
  },
  {
    "no": 330,
    "id": "6202",
    "name": "Kotawaringin Timur",
    "fullName": "Kabupaten Kotawaringin Timur",
    "provId": "62",
    "provName": "Kalimantan Tengah",
    "satkerId": "SAT-62",
    "satkerName": "Satker PKP Kalimantan I (Kalteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 111.8,
    "indikasiAwal": 511,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 511
  },
  {
    "no": 331,
    "id": "6203",
    "name": "Kapuas",
    "fullName": "Kabupaten Kapuas",
    "provId": "62",
    "provName": "Kalimantan Tengah",
    "satkerId": "SAT-62",
    "satkerName": "Satker PKP Kalimantan I (Kalteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 111.8,
    "indikasiAwal": 507,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 507
  },
  {
    "no": 332,
    "id": "6204",
    "name": "Barito Selatan",
    "fullName": "Kabupaten Barito Selatan",
    "provId": "62",
    "provName": "Kalimantan Tengah",
    "satkerId": "SAT-62",
    "satkerName": "Satker PKP Kalimantan I (Kalteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 111.8,
    "indikasiAwal": 363,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 363
  },
  {
    "no": 333,
    "id": "6205",
    "name": "Barito Utara",
    "fullName": "Kabupaten Barito Utara",
    "provId": "62",
    "provName": "Kalimantan Tengah",
    "satkerId": "SAT-62",
    "satkerName": "Satker PKP Kalimantan I (Kalteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 111.8,
    "indikasiAwal": 480,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 480
  },
  {
    "no": 334,
    "id": "6206",
    "name": "Sukamara",
    "fullName": "Kabupaten Sukamara",
    "provId": "62",
    "provName": "Kalimantan Tengah",
    "satkerId": "SAT-62",
    "satkerName": "Satker PKP Kalimantan I (Kalteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 111.8,
    "indikasiAwal": 317,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 317
  },
  {
    "no": 335,
    "id": "6207",
    "name": "Lamandau",
    "fullName": "Kabupaten Lamandau",
    "provId": "62",
    "provName": "Kalimantan Tengah",
    "satkerId": "SAT-62",
    "satkerName": "Satker PKP Kalimantan I (Kalteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 111.8,
    "indikasiAwal": 356,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 356
  },
  {
    "no": 336,
    "id": "6208",
    "name": "Seruyan",
    "fullName": "Kabupaten Seruyan",
    "provId": "62",
    "provName": "Kalimantan Tengah",
    "satkerId": "SAT-62",
    "satkerName": "Satker PKP Kalimantan I (Kalteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 111.8,
    "indikasiAwal": 381,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 381
  },
  {
    "no": 337,
    "id": "6209",
    "name": "Katingan",
    "fullName": "Kabupaten Katingan",
    "provId": "62",
    "provName": "Kalimantan Tengah",
    "satkerId": "SAT-62",
    "satkerName": "Satker PKP Kalimantan I (Kalteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 111.8,
    "indikasiAwal": 399,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 399
  },
  {
    "no": 338,
    "id": "6210",
    "name": "Pulang Pisau",
    "fullName": "Kabupaten Pulang Pisau",
    "provId": "62",
    "provName": "Kalimantan Tengah",
    "satkerId": "SAT-62",
    "satkerName": "Satker PKP Kalimantan I (Kalteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 111.8,
    "indikasiAwal": 407,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 407
  },
  {
    "no": 339,
    "id": "6211",
    "name": "Gunung Mas",
    "fullName": "Kabupaten Gunung Mas",
    "provId": "62",
    "provName": "Kalimantan Tengah",
    "satkerId": "SAT-62",
    "satkerName": "Satker PKP Kalimantan I (Kalteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 111.8,
    "indikasiAwal": 342,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 342
  },
  {
    "no": 340,
    "id": "6212",
    "name": "Barito Timur",
    "fullName": "Kabupaten Barito Timur",
    "provId": "62",
    "provName": "Kalimantan Tengah",
    "satkerId": "SAT-62",
    "satkerName": "Satker PKP Kalimantan I (Kalteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 111.8,
    "indikasiAwal": 520,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 520
  },
  {
    "no": 341,
    "id": "6213",
    "name": "Murung Raya",
    "fullName": "Kabupaten Murung Raya",
    "provId": "62",
    "provName": "Kalimantan Tengah",
    "satkerId": "SAT-62",
    "satkerName": "Satker PKP Kalimantan I (Kalteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 111.8,
    "indikasiAwal": 417,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 417
  },
  {
    "no": 342,
    "id": "6271",
    "name": "Palangka Raya",
    "fullName": "Kota Palangka Raya",
    "provId": "62",
    "provName": "Kalimantan Tengah",
    "satkerId": "SAT-62",
    "satkerName": "Satker PKP Kalimantan I (Kalteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 111.8,
    "indikasiAwal": 414,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 414
  },
  {
    "no": 343,
    "id": "6301",
    "name": "Tanah Laut",
    "fullName": "Kabupaten Tanah Laut",
    "provId": "63",
    "provName": "Kalimantan Selatan",
    "satkerId": "SAT-63",
    "satkerName": "Satker PKP Kalimantan II (Kalsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 105.4,
    "indikasiAwal": 300,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 300
  },
  {
    "no": 344,
    "id": "6302",
    "name": "Kotabaru",
    "fullName": "Kabupaten Kotabaru",
    "provId": "63",
    "provName": "Kalimantan Selatan",
    "satkerId": "SAT-63",
    "satkerName": "Satker PKP Kalimantan II (Kalsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 105.4,
    "indikasiAwal": 429,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 429
  },
  {
    "no": 345,
    "id": "6303",
    "name": "Banjar",
    "fullName": "Kabupaten Banjar",
    "provId": "63",
    "provName": "Kalimantan Selatan",
    "satkerId": "SAT-63",
    "satkerName": "Satker PKP Kalimantan II (Kalsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 105.4,
    "indikasiAwal": 407,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 407
  },
  {
    "no": 346,
    "id": "6304",
    "name": "Barito Kuala",
    "fullName": "Kabupaten Barito Kuala",
    "provId": "63",
    "provName": "Kalimantan Selatan",
    "satkerId": "SAT-63",
    "satkerName": "Satker PKP Kalimantan II (Kalsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 105.4,
    "indikasiAwal": 446,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 446
  },
  {
    "no": 347,
    "id": "6305",
    "name": "Tapin",
    "fullName": "Kabupaten Tapin",
    "provId": "63",
    "provName": "Kalimantan Selatan",
    "satkerId": "SAT-63",
    "satkerName": "Satker PKP Kalimantan II (Kalsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 105.4,
    "indikasiAwal": 272,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 272
  },
  {
    "no": 348,
    "id": "6306",
    "name": "Hulu Sungai Selatan",
    "fullName": "Kabupaten Hulu Sungai Selatan",
    "provId": "63",
    "provName": "Kalimantan Selatan",
    "satkerId": "SAT-63",
    "satkerName": "Satker PKP Kalimantan II (Kalsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 105.4,
    "indikasiAwal": 339,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 339
  },
  {
    "no": 349,
    "id": "6307",
    "name": "Hulu Sungai Tengah",
    "fullName": "Kabupaten Hulu Sungai Tengah",
    "provId": "63",
    "provName": "Kalimantan Selatan",
    "satkerId": "SAT-63",
    "satkerName": "Satker PKP Kalimantan II (Kalsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 105.4,
    "indikasiAwal": 331,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 331
  },
  {
    "no": 350,
    "id": "6308",
    "name": "Hulu Sungai Utara",
    "fullName": "Kabupaten Hulu Sungai Utara",
    "provId": "63",
    "provName": "Kalimantan Selatan",
    "satkerId": "SAT-63",
    "satkerName": "Satker PKP Kalimantan II (Kalsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 105.4,
    "indikasiAwal": 347,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 347
  },
  {
    "no": 351,
    "id": "6309",
    "name": "Tabalong",
    "fullName": "Kabupaten Tabalong",
    "provId": "63",
    "provName": "Kalimantan Selatan",
    "satkerId": "SAT-63",
    "satkerName": "Satker PKP Kalimantan II (Kalsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 105.4,
    "indikasiAwal": 459,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 459
  },
  {
    "no": 352,
    "id": "6310",
    "name": "Tanah Bumbu",
    "fullName": "Kabupaten Tanah Bumbu",
    "provId": "63",
    "provName": "Kalimantan Selatan",
    "satkerId": "SAT-63",
    "satkerName": "Satker PKP Kalimantan II (Kalsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 105.4,
    "indikasiAwal": 335,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 335
  },
  {
    "no": 353,
    "id": "6311",
    "name": "Balangan",
    "fullName": "Kabupaten Balangan",
    "provId": "63",
    "provName": "Kalimantan Selatan",
    "satkerId": "SAT-63",
    "satkerName": "Satker PKP Kalimantan II (Kalsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 105.4,
    "indikasiAwal": 385,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 385
  },
  {
    "no": 354,
    "id": "6371",
    "name": "Banjarmasin",
    "fullName": "Kota Banjarmasin",
    "provId": "63",
    "provName": "Kalimantan Selatan",
    "satkerId": "SAT-63",
    "satkerName": "Satker PKP Kalimantan II (Kalsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 105.4,
    "indikasiAwal": 552,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 552
  },
  {
    "no": 355,
    "id": "6372",
    "name": "Banjarbaru",
    "fullName": "Kota Banjarbaru",
    "provId": "63",
    "provName": "Kalimantan Selatan",
    "satkerId": "SAT-63",
    "satkerName": "Satker PKP Kalimantan II (Kalsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 105.4,
    "indikasiAwal": 408,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 408
  },
  {
    "no": 356,
    "id": "6401",
    "name": "Paser",
    "fullName": "Kabupaten Paser",
    "provId": "64",
    "provName": "Kalimantan Timur",
    "satkerId": "SAT-64",
    "satkerName": "Satker PKP Kalimantan II (Kaltim)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 114.6,
    "indikasiAwal": 560,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 560
  },
  {
    "no": 357,
    "id": "6402",
    "name": "Kutai Barat",
    "fullName": "Kabupaten Kutai Barat",
    "provId": "64",
    "provName": "Kalimantan Timur",
    "satkerId": "SAT-64",
    "satkerName": "Satker PKP Kalimantan II (Kaltim)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 114.6,
    "indikasiAwal": 545,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 545
  },
  {
    "no": 358,
    "id": "6403",
    "name": "Kutai Kartanegara",
    "fullName": "Kabupaten Kutai Kartanegara",
    "provId": "64",
    "provName": "Kalimantan Timur",
    "satkerId": "SAT-64",
    "satkerName": "Satker PKP Kalimantan II (Kaltim)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 114.6,
    "indikasiAwal": 571,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 571
  },
  {
    "no": 359,
    "id": "6404",
    "name": "Kutai Timur",
    "fullName": "Kabupaten Kutai Timur",
    "provId": "64",
    "provName": "Kalimantan Timur",
    "satkerId": "SAT-64",
    "satkerName": "Satker PKP Kalimantan II (Kaltim)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 114.6,
    "indikasiAwal": 600,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 600
  },
  {
    "no": 360,
    "id": "6405",
    "name": "Berau",
    "fullName": "Kabupaten Berau",
    "provId": "64",
    "provName": "Kalimantan Timur",
    "satkerId": "SAT-64",
    "satkerName": "Satker PKP Kalimantan II (Kaltim)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 114.6,
    "indikasiAwal": 430,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 430
  },
  {
    "no": 361,
    "id": "6409",
    "name": "Penajam Paser Utara",
    "fullName": "Kabupaten Penajam Paser Utara",
    "provId": "64",
    "provName": "Kalimantan Timur",
    "satkerId": "SAT-64",
    "satkerName": "Satker PKP Kalimantan II (Kaltim)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 114.6,
    "indikasiAwal": 504,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 504
  },
  {
    "no": 362,
    "id": "6411",
    "name": "Mahakam Ulu",
    "fullName": "Kabupaten Mahakam Ulu",
    "provId": "64",
    "provName": "Kalimantan Timur",
    "satkerId": "SAT-64",
    "satkerName": "Satker PKP Kalimantan II (Kaltim)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 114.6,
    "indikasiAwal": 528,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 528
  },
  {
    "no": 363,
    "id": "6471",
    "name": "Balikpapan",
    "fullName": "Kota Balikpapan",
    "provId": "64",
    "provName": "Kalimantan Timur",
    "satkerId": "SAT-64",
    "satkerName": "Satker PKP Kalimantan II (Kaltim)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 114.6,
    "indikasiAwal": 422,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 422
  },
  {
    "no": 364,
    "id": "6472",
    "name": "Samarinda",
    "fullName": "Kota Samarinda",
    "provId": "64",
    "provName": "Kalimantan Timur",
    "satkerId": "SAT-64",
    "satkerName": "Satker PKP Kalimantan II (Kaltim)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 114.6,
    "indikasiAwal": 513,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 513
  },
  {
    "no": 365,
    "id": "6474",
    "name": "Bontang",
    "fullName": "Kota Bontang",
    "provId": "64",
    "provName": "Kalimantan Timur",
    "satkerId": "SAT-64",
    "satkerName": "Satker PKP Kalimantan II (Kaltim)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 114.6,
    "indikasiAwal": 436,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 436
  },
  {
    "no": 366,
    "id": "6501",
    "name": "Malinau",
    "fullName": "Kabupaten Malinau",
    "provId": "65",
    "provName": "Kalimantan Utara",
    "satkerId": "SAT-65",
    "satkerName": "Satker PKP Kalimantan II (Kaltara)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 122.1,
    "indikasiAwal": 342,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 342
  },
  {
    "no": 367,
    "id": "6502",
    "name": "Bulungan",
    "fullName": "Kabupaten Bulungan",
    "provId": "65",
    "provName": "Kalimantan Utara",
    "satkerId": "SAT-65",
    "satkerName": "Satker PKP Kalimantan II (Kaltara)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 122.1,
    "indikasiAwal": 450,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 450
  },
  {
    "no": 368,
    "id": "6503",
    "name": "Tana Tidung",
    "fullName": "Kabupaten Tana Tidung",
    "provId": "65",
    "provName": "Kalimantan Utara",
    "satkerId": "SAT-65",
    "satkerName": "Satker PKP Kalimantan II (Kaltara)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 122.1,
    "indikasiAwal": 370,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 370
  },
  {
    "no": 369,
    "id": "6504",
    "name": "Nunukan",
    "fullName": "Kabupaten Nunukan",
    "provId": "65",
    "provName": "Kalimantan Utara",
    "satkerId": "SAT-65",
    "satkerName": "Satker PKP Kalimantan II (Kaltara)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 122.1,
    "indikasiAwal": 381,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 381
  },
  {
    "no": 370,
    "id": "6571",
    "name": "Tarakan",
    "fullName": "Kota Tarakan",
    "provId": "65",
    "provName": "Kalimantan Utara",
    "satkerId": "SAT-65",
    "satkerName": "Satker PKP Kalimantan II (Kaltara)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 122.1,
    "indikasiAwal": 350,
    "pulau": "Kalimantan",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 350
  },
  {
    "no": 371,
    "id": "7101",
    "name": "Bolaang Mongondow",
    "fullName": "Kabupaten Bolaang Mongondow",
    "provId": "71",
    "provName": "Sulawesi Utara",
    "satkerId": "SAT-71",
    "satkerName": "Satker PKP Sulawesi I (Sulut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 110.2,
    "indikasiAwal": 607,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 607
  },
  {
    "no": 372,
    "id": "7102",
    "name": "Minahasa",
    "fullName": "Kabupaten Minahasa",
    "provId": "71",
    "provName": "Sulawesi Utara",
    "satkerId": "SAT-71",
    "satkerName": "Satker PKP Sulawesi I (Sulut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 110.2,
    "indikasiAwal": 512,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 512
  },
  {
    "no": 373,
    "id": "7103",
    "name": "Kepulauan Sangihe",
    "fullName": "Kabupaten Kepulauan Sangihe",
    "provId": "71",
    "provName": "Sulawesi Utara",
    "satkerId": "SAT-71",
    "satkerName": "Satker PKP Sulawesi I (Sulut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 110.2,
    "indikasiAwal": 622,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 622
  },
  {
    "no": 374,
    "id": "7104",
    "name": "Kepulauan Talaud",
    "fullName": "Kabupaten Kepulauan Talaud",
    "provId": "71",
    "provName": "Sulawesi Utara",
    "satkerId": "SAT-71",
    "satkerName": "Satker PKP Sulawesi I (Sulut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 110.2,
    "indikasiAwal": 556,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 556
  },
  {
    "no": 375,
    "id": "7105",
    "name": "Minahasa Selatan",
    "fullName": "Kabupaten Minahasa Selatan",
    "provId": "71",
    "provName": "Sulawesi Utara",
    "satkerId": "SAT-71",
    "satkerName": "Satker PKP Sulawesi I (Sulut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 110.2,
    "indikasiAwal": 571,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 571
  },
  {
    "no": 376,
    "id": "7106",
    "name": "Minahasa Utara",
    "fullName": "Kabupaten Minahasa Utara",
    "provId": "71",
    "provName": "Sulawesi Utara",
    "satkerId": "SAT-71",
    "satkerName": "Satker PKP Sulawesi I (Sulut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 110.2,
    "indikasiAwal": 573,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 573
  },
  {
    "no": 377,
    "id": "7107",
    "name": "Bolaang Mongondow Utara",
    "fullName": "Kabupaten Bolaang Mongondow Utara",
    "provId": "71",
    "provName": "Sulawesi Utara",
    "satkerId": "SAT-71",
    "satkerName": "Satker PKP Sulawesi I (Sulut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 110.2,
    "indikasiAwal": 537,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 537
  },
  {
    "no": 378,
    "id": "7108",
    "name": "Kepulauan Siau Tagulandang Biaro",
    "fullName": "Kabupaten Kepulauan Siau Tagulandang Biaro",
    "provId": "71",
    "provName": "Sulawesi Utara",
    "satkerId": "SAT-71",
    "satkerName": "Satker PKP Sulawesi I (Sulut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 110.2,
    "indikasiAwal": 507,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 507
  },
  {
    "no": 379,
    "id": "7109",
    "name": "Minahasa Tenggara",
    "fullName": "Kabupaten Minahasa Tenggara",
    "provId": "71",
    "provName": "Sulawesi Utara",
    "satkerId": "SAT-71",
    "satkerName": "Satker PKP Sulawesi I (Sulut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 110.2,
    "indikasiAwal": 635,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 635
  },
  {
    "no": 380,
    "id": "7110",
    "name": "Bolaang Mongondow Selatan",
    "fullName": "Kabupaten Bolaang Mongondow Selatan",
    "provId": "71",
    "provName": "Sulawesi Utara",
    "satkerId": "SAT-71",
    "satkerName": "Satker PKP Sulawesi I (Sulut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 110.2,
    "indikasiAwal": 585,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 585
  },
  {
    "no": 381,
    "id": "7111",
    "name": "Bolaang Mongondow Timur",
    "fullName": "Kabupaten Bolaang Mongondow Timur",
    "provId": "71",
    "provName": "Sulawesi Utara",
    "satkerId": "SAT-71",
    "satkerName": "Satker PKP Sulawesi I (Sulut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 110.2,
    "indikasiAwal": 452,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 452
  },
  {
    "no": 382,
    "id": "7171",
    "name": "Manado",
    "fullName": "Kota Manado",
    "provId": "71",
    "provName": "Sulawesi Utara",
    "satkerId": "SAT-71",
    "satkerName": "Satker PKP Sulawesi I (Sulut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 110.2,
    "indikasiAwal": 554,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 554
  },
  {
    "no": 383,
    "id": "7172",
    "name": "Bitung",
    "fullName": "Kota Bitung",
    "provId": "71",
    "provName": "Sulawesi Utara",
    "satkerId": "SAT-71",
    "satkerName": "Satker PKP Sulawesi I (Sulut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 110.2,
    "indikasiAwal": 565,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 565
  },
  {
    "no": 384,
    "id": "7173",
    "name": "Tomohon",
    "fullName": "Kota Tomohon",
    "provId": "71",
    "provName": "Sulawesi Utara",
    "satkerId": "SAT-71",
    "satkerName": "Satker PKP Sulawesi I (Sulut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 110.2,
    "indikasiAwal": 504,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 504
  },
  {
    "no": 385,
    "id": "7174",
    "name": "Kotamobagu",
    "fullName": "Kota Kotamobagu",
    "provId": "71",
    "provName": "Sulawesi Utara",
    "satkerId": "SAT-71",
    "satkerName": "Satker PKP Sulawesi I (Sulut)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 110.2,
    "indikasiAwal": 418,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 418
  },
  {
    "no": 386,
    "id": "7201",
    "name": "Banggai Kepulauan",
    "fullName": "Kabupaten Banggai Kepulauan",
    "provId": "72",
    "provName": "Sulawesi Tengah",
    "satkerId": "SAT-72",
    "satkerName": "Satker PKP Sulawesi II (Sulteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 113.7,
    "indikasiAwal": 655,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 655
  },
  {
    "no": 387,
    "id": "7202",
    "name": "Banggai",
    "fullName": "Kabupaten Banggai",
    "provId": "72",
    "provName": "Sulawesi Tengah",
    "satkerId": "SAT-72",
    "satkerName": "Satker PKP Sulawesi II (Sulteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 113.7,
    "indikasiAwal": 462,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 462
  },
  {
    "no": 388,
    "id": "7203",
    "name": "Morowali",
    "fullName": "Kabupaten Morowali",
    "provId": "72",
    "provName": "Sulawesi Tengah",
    "satkerId": "SAT-72",
    "satkerName": "Satker PKP Sulawesi II (Sulteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 113.7,
    "indikasiAwal": 603,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 603
  },
  {
    "no": 389,
    "id": "7204",
    "name": "Poso",
    "fullName": "Kabupaten Poso",
    "provId": "72",
    "provName": "Sulawesi Tengah",
    "satkerId": "SAT-72",
    "satkerName": "Satker PKP Sulawesi II (Sulteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 113.7,
    "indikasiAwal": 720,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 720
  },
  {
    "no": 390,
    "id": "7205",
    "name": "Donggala",
    "fullName": "Kabupaten Donggala",
    "provId": "72",
    "provName": "Sulawesi Tengah",
    "satkerId": "SAT-72",
    "satkerName": "Satker PKP Sulawesi II (Sulteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 113.7,
    "indikasiAwal": 818,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 818
  },
  {
    "no": 391,
    "id": "7206",
    "name": "Toli-Toli",
    "fullName": "Kabupaten Toli-Toli",
    "provId": "72",
    "provName": "Sulawesi Tengah",
    "satkerId": "SAT-72",
    "satkerName": "Satker PKP Sulawesi II (Sulteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 113.7,
    "indikasiAwal": 679,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 679
  },
  {
    "no": 392,
    "id": "7207",
    "name": "Buol",
    "fullName": "Kabupaten Buol",
    "provId": "72",
    "provName": "Sulawesi Tengah",
    "satkerId": "SAT-72",
    "satkerName": "Satker PKP Sulawesi II (Sulteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 113.7,
    "indikasiAwal": 676,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 676
  },
  {
    "no": 393,
    "id": "7208",
    "name": "Parigi Moutong",
    "fullName": "Kabupaten Parigi Moutong",
    "provId": "72",
    "provName": "Sulawesi Tengah",
    "satkerId": "SAT-72",
    "satkerName": "Satker PKP Sulawesi II (Sulteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 113.7,
    "indikasiAwal": 912,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 912
  },
  {
    "no": 394,
    "id": "7209",
    "name": "Tojo Una-Una",
    "fullName": "Kabupaten Tojo Una-Una",
    "provId": "72",
    "provName": "Sulawesi Tengah",
    "satkerId": "SAT-72",
    "satkerName": "Satker PKP Sulawesi II (Sulteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 113.7,
    "indikasiAwal": 686,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 686
  },
  {
    "no": 395,
    "id": "7210",
    "name": "Sigi",
    "fullName": "Kabupaten Sigi",
    "provId": "72",
    "provName": "Sulawesi Tengah",
    "satkerId": "SAT-72",
    "satkerName": "Satker PKP Sulawesi II (Sulteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 113.7,
    "indikasiAwal": 626,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 626
  },
  {
    "no": 396,
    "id": "7211",
    "name": "Banggai Laut",
    "fullName": "Kabupaten Banggai Laut",
    "provId": "72",
    "provName": "Sulawesi Tengah",
    "satkerId": "SAT-72",
    "satkerName": "Satker PKP Sulawesi II (Sulteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 113.7,
    "indikasiAwal": 561,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 561
  },
  {
    "no": 397,
    "id": "7212",
    "name": "Morowali Utara",
    "fullName": "Kabupaten Morowali Utara",
    "provId": "72",
    "provName": "Sulawesi Tengah",
    "satkerId": "SAT-72",
    "satkerName": "Satker PKP Sulawesi II (Sulteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 113.7,
    "indikasiAwal": 485,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 485
  },
  {
    "no": 398,
    "id": "7271",
    "name": "Palu",
    "fullName": "Kota Palu",
    "provId": "72",
    "provName": "Sulawesi Tengah",
    "satkerId": "SAT-72",
    "satkerName": "Satker PKP Sulawesi II (Sulteng)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 113.7,
    "indikasiAwal": 503,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 503
  },
  {
    "no": 399,
    "id": "7301",
    "name": "Kepulauan Selayar",
    "fullName": "Kabupaten Kepulauan Selayar",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 651,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 651
  },
  {
    "no": 400,
    "id": "7302",
    "name": "Bulukumba",
    "fullName": "Kabupaten Bulukumba",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 572,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 572
  },
  {
    "no": 401,
    "id": "7303",
    "name": "Bantaeng",
    "fullName": "Kabupaten Bantaeng",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 502,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 502
  },
  {
    "no": 402,
    "id": "7304",
    "name": "Jeneponto",
    "fullName": "Kabupaten Jeneponto",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 805,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 805
  },
  {
    "no": 403,
    "id": "7305",
    "name": "Takalar",
    "fullName": "Kabupaten Takalar",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 631,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 631
  },
  {
    "no": 404,
    "id": "7306",
    "name": "Gowa",
    "fullName": "Kabupaten Gowa",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 706,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 706
  },
  {
    "no": 405,
    "id": "7307",
    "name": "Sinjai",
    "fullName": "Kabupaten Sinjai",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 594,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 594
  },
  {
    "no": 406,
    "id": "7308",
    "name": "Maros",
    "fullName": "Kabupaten Maros",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 743,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 743
  },
  {
    "no": 407,
    "id": "7309",
    "name": "Pangkajene Dan Kepulauan",
    "fullName": "Kabupaten Pangkajene Dan Kepulauan",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 713,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 713
  },
  {
    "no": 408,
    "id": "7310",
    "name": "Barru",
    "fullName": "Kabupaten Barru",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 687,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 687
  },
  {
    "no": 409,
    "id": "7311",
    "name": "Bone",
    "fullName": "Kabupaten Bone",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 871,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 871
  },
  {
    "no": 410,
    "id": "7312",
    "name": "Soppeng",
    "fullName": "Kabupaten Soppeng",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 565,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 565
  },
  {
    "no": 411,
    "id": "7313",
    "name": "Wajo",
    "fullName": "Kabupaten Wajo",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 611,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 611
  },
  {
    "no": 412,
    "id": "7314",
    "name": "Sidenreng Rappang",
    "fullName": "Kabupaten Sidenreng Rappang",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 495,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 495
  },
  {
    "no": 413,
    "id": "7315",
    "name": "Pinrang",
    "fullName": "Kabupaten Pinrang",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 690,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 690
  },
  {
    "no": 414,
    "id": "7316",
    "name": "Enrekang",
    "fullName": "Kabupaten Enrekang",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 748,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 748
  },
  {
    "no": 415,
    "id": "7317",
    "name": "Luwu",
    "fullName": "Kabupaten Luwu",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 799,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 799
  },
  {
    "no": 416,
    "id": "7318",
    "name": "Tana Toraja",
    "fullName": "Kabupaten Tana Toraja",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 710,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 710
  },
  {
    "no": 417,
    "id": "7322",
    "name": "Luwu Utara",
    "fullName": "Kabupaten Luwu Utara",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 761,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 761
  },
  {
    "no": 418,
    "id": "7325",
    "name": "Luwu Timur",
    "fullName": "Kabupaten Luwu Timur",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 620,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 620
  },
  {
    "no": 419,
    "id": "7326",
    "name": "Toraja Utara",
    "fullName": "Kabupaten Toraja Utara",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 641,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 641
  },
  {
    "no": 420,
    "id": "7371",
    "name": "Makassar",
    "fullName": "Kota Makassar",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 793,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 793
  },
  {
    "no": 421,
    "id": "7372",
    "name": "Parepare",
    "fullName": "Kota Parepare",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 470,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 470
  },
  {
    "no": 422,
    "id": "7373",
    "name": "Palopo",
    "fullName": "Kota Palopo",
    "provId": "73",
    "provName": "Sulawesi Selatan",
    "satkerId": "SAT-73",
    "satkerName": "Satker PKP Sulawesi III (Sulsel)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 103.5,
    "indikasiAwal": 570,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 570
  },
  {
    "no": 423,
    "id": "7401",
    "name": "Buton",
    "fullName": "Kabupaten Buton",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 784,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 784
  },
  {
    "no": 424,
    "id": "7402",
    "name": "Muna",
    "fullName": "Kabupaten Muna",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 861,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 861
  },
  {
    "no": 425,
    "id": "7403",
    "name": "Konawe",
    "fullName": "Kabupaten Konawe",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 732,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 732
  },
  {
    "no": 426,
    "id": "7404",
    "name": "Kolaka",
    "fullName": "Kabupaten Kolaka",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 630,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 630
  },
  {
    "no": 427,
    "id": "7405",
    "name": "Konawe Selatan",
    "fullName": "Kabupaten Konawe Selatan",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 770,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 770
  },
  {
    "no": 428,
    "id": "7406",
    "name": "Bombana",
    "fullName": "Kabupaten Bombana",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 708,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 708
  },
  {
    "no": 429,
    "id": "7407",
    "name": "Wakatobi",
    "fullName": "Kabupaten Wakatobi",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 741,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 741
  },
  {
    "no": 430,
    "id": "7408",
    "name": "Kolaka Utara",
    "fullName": "Kabupaten Kolaka Utara",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 771,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 771
  },
  {
    "no": 431,
    "id": "7409",
    "name": "Buton Utara",
    "fullName": "Kabupaten Buton Utara",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 681,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 681
  },
  {
    "no": 432,
    "id": "7410",
    "name": "Konawe Utara",
    "fullName": "Kabupaten Konawe Utara",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 838,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 838
  },
  {
    "no": 433,
    "id": "7411",
    "name": "Kolaka Timur",
    "fullName": "Kabupaten Kolaka Timur",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 779,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 779
  },
  {
    "no": 434,
    "id": "7412",
    "name": "Konawe Kepulauan",
    "fullName": "Kabupaten Konawe Kepulauan",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 711,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 711
  },
  {
    "no": 435,
    "id": "7413",
    "name": "Muna Barat",
    "fullName": "Kabupaten Muna Barat",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 657,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 657
  },
  {
    "no": 436,
    "id": "7414",
    "name": "Buton Tengah",
    "fullName": "Kabupaten Buton Tengah",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 701,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 701
  },
  {
    "no": 437,
    "id": "7415",
    "name": "Buton Selatan",
    "fullName": "Kabupaten Buton Selatan",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 664,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 664
  },
  {
    "no": 438,
    "id": "7471",
    "name": "Kendari",
    "fullName": "Kota Kendari",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 523,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 523
  },
  {
    "no": 439,
    "id": "7472",
    "name": "Baubau",
    "fullName": "Kota Baubau",
    "provId": "74",
    "provName": "Sulawesi Tenggara",
    "satkerId": "SAT-74",
    "satkerName": "Satker PKP Sulawesi III (Sultra)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 112.9,
    "indikasiAwal": 635,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 635
  },
  {
    "no": 440,
    "id": "7501",
    "name": "Boalemo",
    "fullName": "Kabupaten Boalemo",
    "provId": "75",
    "provName": "Gorontalo",
    "satkerId": "SAT-75",
    "satkerName": "Satker PKP Sulawesi I (Gorontalo)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 107.4,
    "indikasiAwal": 1019,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1019
  },
  {
    "no": 441,
    "id": "7502",
    "name": "Gorontalo",
    "fullName": "Kabupaten Gorontalo",
    "provId": "75",
    "provName": "Gorontalo",
    "satkerId": "SAT-75",
    "satkerName": "Satker PKP Sulawesi I (Gorontalo)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 107.4,
    "indikasiAwal": 950,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 950
  },
  {
    "no": 442,
    "id": "7503",
    "name": "Pohuwato",
    "fullName": "Kabupaten Pohuwato",
    "provId": "75",
    "provName": "Gorontalo",
    "satkerId": "SAT-75",
    "satkerName": "Satker PKP Sulawesi I (Gorontalo)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 107.4,
    "indikasiAwal": 898,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 898
  },
  {
    "no": 443,
    "id": "7504",
    "name": "Bone Bolango",
    "fullName": "Kabupaten Bone Bolango",
    "provId": "75",
    "provName": "Gorontalo",
    "satkerId": "SAT-75",
    "satkerName": "Satker PKP Sulawesi I (Gorontalo)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 107.4,
    "indikasiAwal": 861,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 861
  },
  {
    "no": 444,
    "id": "7505",
    "name": "Gorontalo Utara",
    "fullName": "Kabupaten Gorontalo Utara",
    "provId": "75",
    "provName": "Gorontalo",
    "satkerId": "SAT-75",
    "satkerName": "Satker PKP Sulawesi I (Gorontalo)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 107.4,
    "indikasiAwal": 969,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 969
  },
  {
    "no": 445,
    "id": "7571",
    "name": "Gorontalo",
    "fullName": "Kota Gorontalo",
    "provId": "75",
    "provName": "Gorontalo",
    "satkerId": "SAT-75",
    "satkerName": "Satker PKP Sulawesi I (Gorontalo)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Mudah",
    "ikk": 107.4,
    "indikasiAwal": 553,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 553
  },
  {
    "no": 446,
    "id": "7601",
    "name": "Majene",
    "fullName": "Kabupaten Majene",
    "provId": "76",
    "provName": "Sulawesi Barat",
    "satkerId": "SAT-76",
    "satkerName": "Satker PKP Sulawesi III (Sulbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Mudah",
    "ikk": 108.6,
    "indikasiAwal": 718,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 718
  },
  {
    "no": 447,
    "id": "7602",
    "name": "Polewali Mandar",
    "fullName": "Kabupaten Polewali Mandar",
    "provId": "76",
    "provName": "Sulawesi Barat",
    "satkerId": "SAT-76",
    "satkerName": "Satker PKP Sulawesi III (Sulbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 108.6,
    "indikasiAwal": 817,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 817
  },
  {
    "no": 448,
    "id": "7603",
    "name": "Mamasa",
    "fullName": "Kabupaten Mamasa",
    "provId": "76",
    "provName": "Sulawesi Barat",
    "satkerId": "SAT-76",
    "satkerName": "Satker PKP Sulawesi III (Sulbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 108.6,
    "indikasiAwal": 741,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 741
  },
  {
    "no": 449,
    "id": "7604",
    "name": "Mamuju",
    "fullName": "Kabupaten Mamuju",
    "provId": "76",
    "provName": "Sulawesi Barat",
    "satkerId": "SAT-76",
    "satkerName": "Satker PKP Sulawesi III (Sulbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 108.6,
    "indikasiAwal": 767,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 767
  },
  {
    "no": 450,
    "id": "7605",
    "name": "Pasangkayu",
    "fullName": "Kabupaten Pasangkayu",
    "provId": "76",
    "provName": "Sulawesi Barat",
    "satkerId": "SAT-76",
    "satkerName": "Satker PKP Sulawesi III (Sulbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 108.6,
    "indikasiAwal": 384,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 384
  },
  {
    "no": 451,
    "id": "7606",
    "name": "Mamuju Tengah",
    "fullName": "Kabupaten Mamuju Tengah",
    "provId": "76",
    "provName": "Sulawesi Barat",
    "satkerId": "SAT-76",
    "satkerName": "Satker PKP Sulawesi III (Sulbar)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Mudah",
    "ikk": 108.6,
    "indikasiAwal": 394,
    "pulau": "Sulawesi",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 394
  },
  {
    "no": 452,
    "id": "8101",
    "name": "Kepulauan Tanimbar",
    "fullName": "Kabupaten Kepulauan Tanimbar",
    "provId": "81",
    "provName": "Maluku",
    "satkerId": "SAT-81",
    "satkerName": "Satker PKP Maluku (Maluku)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 126.3,
    "indikasiAwal": 1026,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1026
  },
  {
    "no": 453,
    "id": "8102",
    "name": "Maluku Tenggara",
    "fullName": "Kabupaten Maluku Tenggara",
    "provId": "81",
    "provName": "Maluku",
    "satkerId": "SAT-81",
    "satkerName": "Satker PKP Maluku (Maluku)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 126.3,
    "indikasiAwal": 884,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 884
  },
  {
    "no": 454,
    "id": "8103",
    "name": "Maluku Tengah",
    "fullName": "Kabupaten Maluku Tengah",
    "provId": "81",
    "provName": "Maluku",
    "satkerId": "SAT-81",
    "satkerName": "Satker PKP Maluku (Maluku)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 126.3,
    "indikasiAwal": 875,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 875
  },
  {
    "no": 455,
    "id": "8104",
    "name": "Buru",
    "fullName": "Kabupaten Buru",
    "provId": "81",
    "provName": "Maluku",
    "satkerId": "SAT-81",
    "satkerName": "Satker PKP Maluku (Maluku)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 126.3,
    "indikasiAwal": 718,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 718
  },
  {
    "no": 456,
    "id": "8105",
    "name": "Kepulauan Aru",
    "fullName": "Kabupaten Kepulauan Aru",
    "provId": "81",
    "provName": "Maluku",
    "satkerId": "SAT-81",
    "satkerName": "Satker PKP Maluku (Maluku)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 126.3,
    "indikasiAwal": 1029,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1029
  },
  {
    "no": 457,
    "id": "8106",
    "name": "Seram Bagian Barat",
    "fullName": "Kabupaten Seram Bagian Barat",
    "provId": "81",
    "provName": "Maluku",
    "satkerId": "SAT-81",
    "satkerName": "Satker PKP Maluku (Maluku)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 126.3,
    "indikasiAwal": 988,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 988
  },
  {
    "no": 458,
    "id": "8107",
    "name": "Seram Bagian Timur",
    "fullName": "Kabupaten Seram Bagian Timur",
    "provId": "81",
    "provName": "Maluku",
    "satkerId": "SAT-81",
    "satkerName": "Satker PKP Maluku (Maluku)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 126.3,
    "indikasiAwal": 886,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 886
  },
  {
    "no": 459,
    "id": "8108",
    "name": "Maluku Barat Daya",
    "fullName": "Kabupaten Maluku Barat Daya",
    "provId": "81",
    "provName": "Maluku",
    "satkerId": "SAT-81",
    "satkerName": "Satker PKP Maluku (Maluku)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 126.3,
    "indikasiAwal": 973,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 973
  },
  {
    "no": 460,
    "id": "8109",
    "name": "Buru Selatan",
    "fullName": "Kabupaten Buru Selatan",
    "provId": "81",
    "provName": "Maluku",
    "satkerId": "SAT-81",
    "satkerName": "Satker PKP Maluku (Maluku)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 126.3,
    "indikasiAwal": 601,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 601
  },
  {
    "no": 461,
    "id": "8171",
    "name": "Ambon",
    "fullName": "Kota Ambon",
    "provId": "81",
    "provName": "Maluku",
    "satkerId": "SAT-81",
    "satkerName": "Satker PKP Maluku (Maluku)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 126.3,
    "indikasiAwal": 440,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 440
  },
  {
    "no": 462,
    "id": "8172",
    "name": "Tual",
    "fullName": "Kota Tual",
    "provId": "81",
    "provName": "Maluku",
    "satkerId": "SAT-81",
    "satkerName": "Satker PKP Maluku (Maluku)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 126.3,
    "indikasiAwal": 798,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 798
  },
  {
    "no": 463,
    "id": "8201",
    "name": "Halmahera Barat",
    "fullName": "Kabupaten Halmahera Barat",
    "provId": "82",
    "provName": "Maluku Utara",
    "satkerId": "SAT-82",
    "satkerName": "Satker PKP Maluku (Maluku Utara)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 128.9,
    "indikasiAwal": 400,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 400
  },
  {
    "no": 464,
    "id": "8202",
    "name": "Halmahera Tengah",
    "fullName": "Kabupaten Halmahera Tengah",
    "provId": "82",
    "provName": "Maluku Utara",
    "satkerId": "SAT-82",
    "satkerName": "Satker PKP Maluku (Maluku Utara)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 128.9,
    "indikasiAwal": 545,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 545
  },
  {
    "no": 465,
    "id": "8203",
    "name": "Kepulauan Sula",
    "fullName": "Kabupaten Kepulauan Sula",
    "provId": "82",
    "provName": "Maluku Utara",
    "satkerId": "SAT-82",
    "satkerName": "Satker PKP Maluku (Maluku Utara)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 128.9,
    "indikasiAwal": 379,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 379
  },
  {
    "no": 466,
    "id": "8204",
    "name": "Halmahera Selatan",
    "fullName": "Kabupaten Halmahera Selatan",
    "provId": "82",
    "provName": "Maluku Utara",
    "satkerId": "SAT-82",
    "satkerName": "Satker PKP Maluku (Maluku Utara)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 128.9,
    "indikasiAwal": 311,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 311
  },
  {
    "no": 467,
    "id": "8205",
    "name": "Halmahera Utara",
    "fullName": "Kabupaten Halmahera Utara",
    "provId": "82",
    "provName": "Maluku Utara",
    "satkerId": "SAT-82",
    "satkerName": "Satker PKP Maluku (Maluku Utara)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 128.9,
    "indikasiAwal": 310,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 310
  },
  {
    "no": 468,
    "id": "8206",
    "name": "Halmahera Timur",
    "fullName": "Kabupaten Halmahera Timur",
    "provId": "82",
    "provName": "Maluku Utara",
    "satkerId": "SAT-82",
    "satkerName": "Satker PKP Maluku (Maluku Utara)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 128.9,
    "indikasiAwal": 583,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 583
  },
  {
    "no": 469,
    "id": "8207",
    "name": "Pulau Morotai",
    "fullName": "Kabupaten Pulau Morotai",
    "provId": "82",
    "provName": "Maluku Utara",
    "satkerId": "SAT-82",
    "satkerName": "Satker PKP Maluku (Maluku Utara)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 128.9,
    "indikasiAwal": 314,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 314
  },
  {
    "no": 470,
    "id": "8208",
    "name": "Pulau Taliabu",
    "fullName": "Kabupaten Pulau Taliabu",
    "provId": "82",
    "provName": "Maluku Utara",
    "satkerId": "SAT-82",
    "satkerName": "Satker PKP Maluku (Maluku Utara)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 128.9,
    "indikasiAwal": 301,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 301
  },
  {
    "no": 471,
    "id": "8271",
    "name": "Ternate",
    "fullName": "Kota Ternate",
    "provId": "82",
    "provName": "Maluku Utara",
    "satkerId": "SAT-82",
    "satkerName": "Satker PKP Maluku (Maluku Utara)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 128.9,
    "indikasiAwal": 376,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 376
  },
  {
    "no": 472,
    "id": "8272",
    "name": "Tidore Kepulauan",
    "fullName": "Kota Tidore Kepulauan",
    "provId": "82",
    "provName": "Maluku Utara",
    "satkerId": "SAT-82",
    "satkerName": "Satker PKP Maluku (Maluku Utara)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 128.9,
    "indikasiAwal": 423,
    "pulau": "Maluku",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 423
  },
  {
    "no": 473,
    "id": "9101",
    "name": "Fakfak",
    "fullName": "Kabupaten Fakfak",
    "provId": "91",
    "provName": "Papua Barat",
    "satkerId": "SAT-PAPUA2",
    "satkerName": "Satker Papua II (Papua Barat & Papua Barat Daya)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 135.8,
    "indikasiAwal": 930,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 930
  },
  {
    "no": 474,
    "id": "9102",
    "name": "Kaimana",
    "fullName": "Kabupaten Kaimana",
    "provId": "91",
    "provName": "Papua Barat",
    "satkerId": "SAT-PAPUA2",
    "satkerName": "Satker Papua II (Papua Barat & Papua Barat Daya)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 135.8,
    "indikasiAwal": 838,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 838
  },
  {
    "no": 475,
    "id": "9103",
    "name": "Teluk Wondama",
    "fullName": "Kabupaten Teluk Wondama",
    "provId": "91",
    "provName": "Papua Barat",
    "satkerId": "SAT-PAPUA2",
    "satkerName": "Satker Papua II (Papua Barat & Papua Barat Daya)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 135.8,
    "indikasiAwal": 1366,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1366
  },
  {
    "no": 476,
    "id": "9104",
    "name": "Teluk Bintuni",
    "fullName": "Kabupaten Teluk Bintuni",
    "provId": "91",
    "provName": "Papua Barat",
    "satkerId": "SAT-PAPUA2",
    "satkerName": "Satker Papua II (Papua Barat & Papua Barat Daya)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 135.8,
    "indikasiAwal": 1348,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1348
  },
  {
    "no": 477,
    "id": "9105",
    "name": "Manokwari",
    "fullName": "Kabupaten Manokwari",
    "provId": "91",
    "provName": "Papua Barat",
    "satkerId": "SAT-PAPUA2",
    "satkerName": "Satker Papua II (Papua Barat & Papua Barat Daya)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 135.8,
    "indikasiAwal": 995,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 995
  },
  {
    "no": 478,
    "id": "9111",
    "name": "Manokwari Selatan",
    "fullName": "Kabupaten Manokwari Selatan",
    "provId": "91",
    "provName": "Papua Barat",
    "satkerId": "SAT-PAPUA2",
    "satkerName": "Satker Papua II (Papua Barat & Papua Barat Daya)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 135.8,
    "indikasiAwal": 1207,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1207
  },
  {
    "no": 479,
    "id": "9112",
    "name": "Pegunungan Arfak",
    "fullName": "Kabupaten Pegunungan Arfak",
    "provId": "91",
    "provName": "Papua Barat",
    "satkerId": "SAT-PAPUA2",
    "satkerName": "Satker Papua II (Papua Barat & Papua Barat Daya)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 135.8,
    "indikasiAwal": 1199,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1199
  },
  {
    "no": 480,
    "id": "9201",
    "name": "Raja Ampat",
    "fullName": "Kabupaten Raja Ampat",
    "provId": "92",
    "provName": "Papua Barat Daya",
    "satkerId": "SAT-PAPUA2",
    "satkerName": "Satker Papua II (Papua Barat & Papua Barat Daya)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sedang",
    "ikk": 132.4,
    "indikasiAwal": 1036,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1036
  },
  {
    "no": 481,
    "id": "9202",
    "name": "Sorong",
    "fullName": "Kabupaten Sorong",
    "provId": "92",
    "provName": "Papua Barat Daya",
    "satkerId": "SAT-PAPUA2",
    "satkerName": "Satker Papua II (Papua Barat & Papua Barat Daya)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 132.4,
    "indikasiAwal": 1317,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1317
  },
  {
    "no": 482,
    "id": "9203",
    "name": "Sorong Selatan",
    "fullName": "Kabupaten Sorong Selatan",
    "provId": "92",
    "provName": "Papua Barat Daya",
    "satkerId": "SAT-PAPUA2",
    "satkerName": "Satker Papua II (Papua Barat & Papua Barat Daya)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 132.4,
    "indikasiAwal": 1232,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1232
  },
  {
    "no": 483,
    "id": "9204",
    "name": "Maybrat",
    "fullName": "Kabupaten Maybrat",
    "provId": "92",
    "provName": "Papua Barat Daya",
    "satkerId": "SAT-PAPUA2",
    "satkerName": "Satker Papua II (Papua Barat & Papua Barat Daya)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 132.4,
    "indikasiAwal": 1386,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1386
  },
  {
    "no": 484,
    "id": "9205",
    "name": "Tambrauw",
    "fullName": "Kabupaten Tambrauw",
    "provId": "92",
    "provName": "Papua Barat Daya",
    "satkerId": "SAT-PAPUA2",
    "satkerName": "Satker Papua II (Papua Barat & Papua Barat Daya)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 132.4,
    "indikasiAwal": 1378,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1378
  },
  {
    "no": 485,
    "id": "9271",
    "name": "Sorong",
    "fullName": "Kota Sorong",
    "provId": "92",
    "provName": "Papua Barat Daya",
    "satkerId": "SAT-PAPUA2",
    "satkerName": "Satker Papua II (Papua Barat & Papua Barat Daya)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perkotaan",
    "delineasi": "DJPKT",
    "zone": "Sedang",
    "ikk": 132.4,
    "indikasiAwal": 717,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 717
  },
  {
    "no": 486,
    "id": "9403",
    "name": "Jayapura",
    "fullName": "Kabupaten Jayapura",
    "provId": "94",
    "provName": "Papua Selatan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 148.2,
    "indikasiAwal": 858,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 858
  },
  {
    "no": 487,
    "id": "9408",
    "name": "Kepulauan Yapen",
    "fullName": "Kabupaten Kepulauan Yapen",
    "provId": "94",
    "provName": "Papua Selatan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sulit",
    "ikk": 148.2,
    "indikasiAwal": 1420,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1420
  },
  {
    "no": 488,
    "id": "9409",
    "name": "Biak Numfor",
    "fullName": "Kabupaten Biak Numfor",
    "provId": "94",
    "provName": "Papua Selatan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sulit",
    "ikk": 148.2,
    "indikasiAwal": 1360,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1360
  },
  {
    "no": 489,
    "id": "9419",
    "name": "Sarmi",
    "fullName": "Kabupaten Sarmi",
    "provId": "94",
    "provName": "Papua Selatan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sulit",
    "ikk": 148.2,
    "indikasiAwal": 959,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 959
  },
  {
    "no": 490,
    "id": "9420",
    "name": "Keerom",
    "fullName": "Kabupaten Keerom",
    "provId": "94",
    "provName": "Papua Selatan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 148.2,
    "indikasiAwal": 1245,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1245
  },
  {
    "no": 491,
    "id": "9426",
    "name": "Waropen",
    "fullName": "Kabupaten Waropen",
    "provId": "94",
    "provName": "Papua Selatan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 148.2,
    "indikasiAwal": 1631,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1631
  },
  {
    "no": 492,
    "id": "9427",
    "name": "Supiori",
    "fullName": "Kabupaten Supiori",
    "provId": "94",
    "provName": "Papua Selatan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sulit",
    "ikk": 148.2,
    "indikasiAwal": 2150,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 2150
  },
  {
    "no": 493,
    "id": "9428",
    "name": "Mamberamo Raya",
    "fullName": "Kabupaten Mamberamo Raya",
    "provId": "94",
    "provName": "Papua Selatan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 148.2,
    "indikasiAwal": 1644,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1644
  },
  {
    "no": 494,
    "id": "9471",
    "name": "Jayapura",
    "fullName": "Kota Jayapura",
    "provId": "94",
    "provName": "Papua Selatan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Pesisir",
    "delineasi": "DJKP",
    "zone": "Sulit",
    "ikk": 148.2,
    "indikasiAwal": 770,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 770
  },
  {
    "no": 495,
    "id": "9501",
    "name": "Merauke",
    "fullName": "Kabupaten Merauke",
    "provId": "95",
    "provName": "Papua Tengah",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 168.4,
    "indikasiAwal": 748,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 748
  },
  {
    "no": 496,
    "id": "9502",
    "name": "Boven Digoel",
    "fullName": "Kabupaten Boven Digoel",
    "provId": "95",
    "provName": "Papua Tengah",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 168.4,
    "indikasiAwal": 1121,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1121
  },
  {
    "no": 497,
    "id": "9503",
    "name": "Mappi",
    "fullName": "Kabupaten Mappi",
    "provId": "95",
    "provName": "Papua Tengah",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 168.4,
    "indikasiAwal": 1411,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1411
  },
  {
    "no": 498,
    "id": "9504",
    "name": "Asmat",
    "fullName": "Kabupaten Asmat",
    "provId": "95",
    "provName": "Papua Tengah",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 168.4,
    "indikasiAwal": 1411,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1411
  },
  {
    "no": 499,
    "id": "9601",
    "name": "Mimika",
    "fullName": "Kabupaten Mimika",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 215.3,
    "indikasiAwal": 738,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 738
  },
  {
    "no": 500,
    "id": "9602",
    "name": "Dogiyai",
    "fullName": "Kabupaten Dogiyai",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 215.3,
    "indikasiAwal": 1222,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1222
  },
  {
    "no": 501,
    "id": "9603",
    "name": "Deiyai",
    "fullName": "Kabupaten Deiyai",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 215.3,
    "indikasiAwal": 1313,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1313
  },
  {
    "no": 502,
    "id": "9604",
    "name": "Nabire",
    "fullName": "Kabupaten Nabire",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 215.3,
    "indikasiAwal": 1159,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1159
  },
  {
    "no": 503,
    "id": "9605",
    "name": "Paniai",
    "fullName": "Kabupaten Paniai",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 215.3,
    "indikasiAwal": 1572,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1572
  },
  {
    "no": 504,
    "id": "9606",
    "name": "Intan Jaya",
    "fullName": "Kabupaten Intan Jaya",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 215.3,
    "indikasiAwal": 1416,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1416
  },
  {
    "no": 505,
    "id": "9607",
    "name": "Puncak",
    "fullName": "Kabupaten Puncak",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 215.3,
    "indikasiAwal": 1287,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1287
  },
  {
    "no": 506,
    "id": "9608",
    "name": "Puncak Jaya",
    "fullName": "Kabupaten Puncak Jaya",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-PAPUA1",
    "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sulit",
    "ikk": 215.3,
    "indikasiAwal": 1531,
    "pulau": "Papua",
    "wilayahKerja": "Wilayah III",
    "targetUnitFinal": 1531
  },
  {
    "no": 507,
    "id": "9701",
    "name": "Nduga",
    "fullName": "Kabupaten Nduga",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-97",
    "satkerName": "Satker PKP PAPUA PEGUNUNGAN",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 100.0,
    "indikasiAwal": 1251,
    "pulau": "Lainnya",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 1251
  },
  {
    "no": 508,
    "id": "9702",
    "name": "Jayawijaya",
    "fullName": "Kabupaten Jayawijaya",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-97",
    "satkerName": "Satker PKP PAPUA PEGUNUNGAN",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 100.0,
    "indikasiAwal": 1591,
    "pulau": "Lainnya",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 1591
  },
  {
    "no": 509,
    "id": "9703",
    "name": "Lanny Jaya",
    "fullName": "Kabupaten Lanny Jaya",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-97",
    "satkerName": "Satker PKP PAPUA PEGUNUNGAN",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 100.0,
    "indikasiAwal": 1478,
    "pulau": "Lainnya",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 1478
  },
  {
    "no": 510,
    "id": "9704",
    "name": "Tolikara",
    "fullName": "Kabupaten Tolikara",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-97",
    "satkerName": "Satker PKP PAPUA PEGUNUNGAN",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 100.0,
    "indikasiAwal": 1009,
    "pulau": "Lainnya",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 1009
  },
  {
    "no": 511,
    "id": "9705",
    "name": "Mamberamo Tengah",
    "fullName": "Kabupaten Mamberamo Tengah",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-97",
    "satkerName": "Satker PKP PAPUA PEGUNUNGAN",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 100.0,
    "indikasiAwal": 1286,
    "pulau": "Lainnya",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 1286
  },
  {
    "no": 512,
    "id": "9706",
    "name": "Yalimo",
    "fullName": "Kabupaten Yalimo",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-97",
    "satkerName": "Satker PKP PAPUA PEGUNUNGAN",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 100.0,
    "indikasiAwal": 1151,
    "pulau": "Lainnya",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 1151
  },
  {
    "no": 513,
    "id": "9707",
    "name": "Yahukimo",
    "fullName": "Kabupaten Yahukimo",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-97",
    "satkerName": "Satker PKP PAPUA PEGUNUNGAN",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 100.0,
    "indikasiAwal": 1300,
    "pulau": "Lainnya",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 1300
  },
  {
    "no": 514,
    "id": "9708",
    "name": "Pegunungan Bintang",
    "fullName": "Kabupaten Pegunungan Bintang",
    "provId": "96",
    "provName": "Papua Pegunungan",
    "satkerId": "SAT-97",
    "satkerName": "Satker PKP PAPUA PEGUNUNGAN",
    "desaPerkotaan": 0,
    "desaPerdesaan": 0,
    "totalDesa": 0,
    "karakteristik": "Perdesaan",
    "delineasi": "DJPDS",
    "zone": "Sedang",
    "ikk": 100.0,
    "indikasiAwal": 1079,
    "pulau": "Lainnya",
    "wilayahKerja": "Wilayah I",
    "targetUnitFinal": 1079
  }
];


// ========================================================
// FILE: js/services/csvParser.js
// ========================================================
/**
 * CSV PARSER & DATA TRANSFORMER FOR MASTER 514 KABUPATEN/KOTA
 * Primary Key: 'Kode Kabupaten/kota' (4-digit BPS code string, e.g., "1101")
 */
function parseKabKotaCSV(csvText) {
  if (!csvText || typeof csvText !== 'string') {
    throw new Error("Input CSV harus berupa string.");
  }

  const lines = csvText.trim().split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length === 0) {
    throw new Error("CSV kosong atau tidak berisi data.");
  }

  // Detect delimiter (; or ,)
  const delimiter = lines[0].includes(';') ? ';' : ',';
  const headers = lines[0].split(delimiter).map(h => h.trim().replace(/^[\uFEFF]/, ''));

  // Map header indexes
  const colIndexMap = {
    no: headers.findIndex(h => /^no$/i.test(h.replace(/[^a-zA-Z]/g, ''))),
    provName: headers.findIndex(h => /provinsi/i.test(h)),
    name: headers.findIndex(h => /kabupaten.*kota/i.test(h)),
    delineasi: headers.findIndex(h => /delineasi/i.test(h)),
    indikasiAwal: headers.findIndex(h => /indikasi/i.test(h)),
    kodeKabKota: headers.findIndex(h => /kode/i.test(h))
  };

  const records = [];

  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(delimiter).map(c => c.trim());
    if (cols.length < 3) continue;

    const rawNo = cols[colIndexMap.no] || String(i);
    const rawProv = cols[colIndexMap.provName] || '';
    const rawFullName = cols[colIndexMap.name] || '';
    const rawDel = cols[colIndexMap.delineasi] || 'DJPDS';
    const rawIndikasi = cols[colIndexMap.indikasiAwal] || '0';
    const rawKode = cols[colIndexMap.kodeKabKota] || '';

    // 1. Primary Key: Kode Kabupaten/kota read as String (4-digit BPS format)
    const id = String(rawKode).trim().padStart(4, '0');

    // 2. Indikasi Alokasi read as Integer (strip dot/comma separators)
    const indikasiAwal = parseInt(String(rawIndikasi).replace(/[\.\s]/g, '').replace(/,/g, ''), 10) || 0;

    const name = rawFullName.replace(/^(Kabupaten|Kota)\s+/i, '');
    const provId = id.substring(0, 2);

    records.push({
      id,                 // Primary Key (4-digit string, e.g., "1101")
      no: parseInt(rawNo, 10) || i,
      provId,
      provName: rawProv,
      fullName: rawFullName,
      name,
      delineasi: rawDel,
      indikasiAwal,
      targetUnitFinal: indikasiAwal
    });
  }

  return records;
}


// ========================================================
// FILE: js/services/validator.js
// ========================================================
/**
 * AUTOMATED INTEGRITY CHECK FOR 514 KABUPATEN/KOTA DATASET
 * Primary Key Relational Validation: 'id' (Kode Kabupaten/kota BPS 4-digit string)
 */
function validateKabKotaData(records, expectedNationalTotal = 400000) {
  const errors = [];
  const warnings = [];

  // Check 1: Exact 514 record count check
  if (records.length !== 514) {
    errors.push(`[CRITICAL ERROR] Jumlah record adalah ${records.length}, seharusnya tepat 514 Kabupaten/Kota.`);
  }

  // Check 2: Duplicate Primary Key & Format Check
  const seenIds = new Set();
  const duplicateIds = new Set();
  const invalidCodeFormat = [];

  records.forEach((rec, idx) => {
    const code = rec.id;
    if (!code || typeof code !== 'string' || code.length !== 4 || !/^\d{4}$/.test(code)) {
      invalidCodeFormat.push(`Baris ${idx + 1}: Kode '${code}' bukan 4-digit string BPS yang valid.`);
    }

    if (seenIds.has(code)) {
      duplicateIds.add(code);
    } else {
      seenIds.add(code);
    }
  });

  if (duplicateIds.size > 0) {
    errors.push(`[CRITICAL ERROR] Ditemukan Kode Kabupaten/Kota duplikat: ${Array.from(duplicateIds).join(', ')}`);
  }

  if (invalidCodeFormat.length > 0) {
    errors.push(`[CRITICAL ERROR] Format kode tidak valid:\n` + invalidCodeFormat.join('\n'));
  }

  // Check 3: Indikasi Alokasi National Accumulation vs Target Check
  const totalIndikasi = records.reduce((sum, r) => sum + (r.indikasiAwal || 0), 0);
  const totalTargetFinal = records.reduce((sum, r) => sum + (r.targetUnitFinal || 0), 0);

  if (expectedNationalTotal !== null && totalTargetFinal !== expectedNationalTotal) {
    warnings.push(`[WARNING INTEGRITY] Total alokasi akumulasi 514 kab/kota (${totalTargetFinal.toLocaleString('id-ID')} unit) tidak sama dengan target acuan nasional (${expectedNationalTotal.toLocaleString('id-ID')} unit). Selisih: ${Math.abs(totalTargetFinal - expectedNationalTotal).toLocaleString('id-ID')} unit.`);
  }

  const isValid = errors.length === 0;

  return {
    isValid,
    totalRecords: records.length,
    uniqueRecordsCount: seenIds.size,
    totalIndikasi,
    totalTargetFinal,
    errors,
    warnings,
    summaryReport: `
================ INTEGRITY CHECK REPORT ================
- Status Validasi     : ${isValid ? '✓ PASSED (DATA UTUH & RELASIONAL)' : '❌ FAILED (TERDAPAT KESALAHAN INTEGRITAS)'}
- Total Baris Record  : ${records.length} / 514
- Total Kode Unik (PK): ${seenIds.size} / 514
- Akumulasi Indikasi  : ${totalIndikasi.toLocaleString('id-ID')} Unit
- Akumulasi Target    : ${totalTargetFinal.toLocaleString('id-ID')} Unit
- Status Match Target : ${expectedNationalTotal === null ? 'N/A' : (totalTargetFinal === expectedNationalTotal ? '✓ MATCH (' + expectedNationalTotal.toLocaleString('id-ID') + ')' : '⚠️ DIFF')}
${errors.length > 0 ? '\n❌ CRITICAL ERRORS:\n' + errors.map(e => '  - ' + e).join('\n') : ''}
${warnings.length > 0 ? '\n⚠️ WARNINGS:\n' + warnings.map(w => '  - ' + w).join('\n') : ''}
========================================================
    `.trim()
  };
}


// ========================================================
// FILE: js/services/seeder.js
// ========================================================
/**
 * DATABASE SEEDER & RELATIONAL DATA TRANSFORMER
 * Primary Key Relational Join using 'id' (Kode Kabupaten/kota BPS 4-digit string)
 * Preserves all metadata (IKK, Zone, Satker, Pulau, WilayahKerja) while updating alokasi & delineasi
 */
function seedAndMergeKabKotaData(importedRecords, baseMaster = MASTER_514_KABKOTA) {
  if (!Array.isArray(importedRecords) || importedRecords.length === 0) {
    throw new Error("Data impor kosong atau bukan array.");
  }

  // 1. Build Primary Key Map from Base Master (keyed by 4-digit String BPS Code)
  const masterMap = new Map();
  baseMaster.forEach(item => {
    const pk = String(item.id).trim().padStart(4, '0');
    masterMap.set(pk, item);
  });

  // 2. Relational Join / Merge by Primary Key (id)
  const seededRecords = importedRecords.map(imp => {
    const pk = String(imp.id).trim().padStart(4, '0');
    const existing = masterMap.get(pk);

    if (existing) {
      return {
        ...existing,
        // Override with CSV imported values
        name: imp.name || existing.name,
        fullName: imp.fullName || existing.fullName,
        provName: imp.provName || existing.provName,
        delineasi: imp.delineasi || existing.delineasi,
        indikasiAwal: imp.indikasiAwal !== undefined ? imp.indikasiAwal : existing.indikasiAwal,
        targetUnitFinal: imp.targetUnitFinal !== undefined ? imp.targetUnitFinal : (imp.indikasiAwal || existing.indikasiAwal)
      };
    } else {
      // Create new record with smart defaults for unmapped PK
      return {
        no: imp.no,
        id: pk,
        name: imp.name,
        fullName: imp.fullName || `Kabupaten ${imp.name}`,
        provId: imp.provId || pk.substring(0, 2),
        provName: imp.provName,
        satkerId: `SAT-${pk.substring(0, 2)}`,
        satkerName: `Satker PKP ${imp.provName}`,
        desaPerkotaan: 0,
        desaPerdesaan: 0,
        totalDesa: 0,
        karakteristik: imp.delineasi === 'DJKP' ? 'Pesisir' : (imp.delineasi === 'DJPKT' ? 'Perkotaan' : 'Perdesaan'),
        delineasi: imp.delineasi || 'DJPDS',
        zone: 'Sedang',
        ikk: 100,
        indikasiAwal: imp.indikasiAwal || 0,
        pulau: 'Lainnya',
        wilayahKerja: 'Wilayah I',
        targetUnitFinal: imp.indikasiAwal || 0
      };
    }
  });

  return seededRecords;
}


// ========================================================
// FILE: js/engine/allocator.js
// ========================================================
/**
 * CORE BACKEND LOGIC: DISTRIBUSI DELINEASI (FLOAT-TO-INTEGER)
 * Largest Remainder Method (Hare-Niemeyer Algorithm)
 * 
 * Membagikan target nasional (DJKP 50k, DJPKT 120k, DJPDS 200k = 370k)
 * ke seluruh 514 Kab/Kota menjadi bilangan bulat murni tanpa selisih.
 */
function distributeUnits(kabKotaList, targets) {
  const delineasiKeys = ['DJKP', 'DJPKT', 'DJPDS'];
  const targetMap = {
    DJKP: targets.djkp,
    DJPKT: targets.djpkt,
    DJPDS: targets.djpds
  };

  const resultMap = new Map();

  delineasiKeys.forEach(delKey => {
    const targetForDel = targetMap[delKey] || 0;
    const itemsForDel = kabKotaList.filter(item => item.delineasi === delKey);
    const sumIndikasiAwal = itemsForDel.reduce((acc, curr) => acc + (curr.indikasiAwal || 0), 0);

    if (sumIndikasiAwal === 0 || itemsForDel.length === 0) {
      itemsForDel.forEach(item => {
        resultMap.set(item.id, {
          targetUnit: 0,
          floatAlloc: 0,
          remainder: 0,
          integerPart: 0
        });
      });
      return;
    }

    // Step 2 & 3: Calculate float allocation, integer part, and remainder
    const evaluated = itemsForDel.map(item => {
      const floatAlloc = (item.indikasiAwal / sumIndikasiAwal) * targetForDel;
      const integerPart = Math.floor(floatAlloc);
      const remainder = floatAlloc - integerPart;
      return {
        id: item.id,
        floatAlloc,
        integerPart,
        remainder,
        targetUnit: integerPart
      };
    });

    // Step 4: Calculate difference (Selisih Kekurangan)
    const sumInteger = evaluated.reduce((acc, curr) => acc + curr.integerPart, 0);
    const difference = targetForDel - sumInteger;

    // Step 5: Sort descending by remainder
    evaluated.sort((a, b) => b.remainder - a.remainder);

    // Step 6: Add +1 to top N items
    for (let i = 0; i < difference; i++) {
      if (evaluated[i]) {
        evaluated[i].targetUnit += 1;
      }
    }

    // Store in result map
    evaluated.forEach(res => {
      resultMap.set(res.id, res);
    });
  });

  // Attach allocated units to all kabKota items
  return kabKotaList.map(item => {
    const alloc = resultMap.get(item.id) || { targetUnit: 0, floatAlloc: 0, remainder: 0 };
    return {
      ...item,
      targetUnitFinal: alloc.targetUnit,
      floatAlloc: alloc.floatAlloc,
      remainder: alloc.remainder
    };
  });
}


// ========================================================
// FILE: js/engine/calculator.js
// ========================================================
/**
 * CORE CALCULATION & AGGREGATION ENGINE (EXPANDED)
 * Menghitung Postur 1 (Fisik - 526312) dan Postur 2 (16 Komponen Pendampingan)
 * Menyediakan agregasi multi-dimensi: Wilayah Kerja I/II/III, 7 Pulau, Delineasi Ditjen,
 * Tier Bantuan Fisik (20Jt, 25Jt, 40Jt), dan Rekapitulasi SDM Pendamping (TPM & Korkab).
 */
function roundUpToThousand(val) {
  if (!val || isNaN(val) || val <= 0) return 0;
  return Math.ceil(val / 1000) * 1000;
}
function calculateAllRKA(allocatedKabKotaList, params, sbmRates = SBM_RATES) {
  // Standar Paket Pembekalan per Peserta (TPM + Korkab)
  const costPerPesertaPembekalan = sbmRates.paketFullboard5Hari + sbmRates.transportPembekalan + sbmRates.uangHarianPembekalan;
  // Biaya Standar 1 Trip Perjalanan Dinas Biasa (2 Orang x 2 Hari)
  const costPerTrip2Orang2Hari = 2 * ((2 * sbmRates.uangHarianLokal) + (2 * sbmRates.hotelLokal) + sbmRates.transportLokalPP);
  // Biaya Koordinasi Pusat ke Jakarta per Satker
  const costPerSatkerKoordPusat = params.koordPusatPersonel * params.koordPusatFrekuensi * (
    sbmRates.tiketPPJakarta + (3 * sbmRates.uangHarianJakarta) + (2 * sbmRates.hotelJakarta) + sbmRates.taksiJakartaPP
  );

  // 1. Hitung Detail per 514 Kab/Kota
  const rasioTPMUnit = Number(params.rasioTPMUnit || params.rasioTPM) || 40;
  const masaTPM = Number(params.masaTPM || params.durasiBulanTPM) || 5;
  const masaKorkab = Number(params.masaKorkab || params.durasiBulanKorkab) || 10;
  const isManualGaji = (params.gajiMethod === 'manual' || params.metodeGaji === 'manual');
  const gajiManualKorkab = Number(params.gajiManualKorkab || params.manualGajiKorkab) || 7000000;
  const gajiManualTPM = Number(params.gajiManualTPM || params.manualGajiTPM) || 6000000;
  const useIKKOnManual = params.gajiManualUseIKK !== undefined ? Boolean(params.gajiManualUseIKK) : (params.manualGajiGunakanIKK !== undefined ? Boolean(params.manualGajiGunakanIKK) : true);
  const inkindoFactor = Number(params.inkindoFactor || params.faktorInkindo) || 0.55;
  const rateKitAtribut = Number(params.rateKitAtribut || params.biayaAtributPersonel) || 250000;

  const detailKabKota = allocatedKabKotaList.map(item => {
    const units = item.targetUnitFinal || 0;
    const ikkCoeff = (item.ikk || 100) / 100;
    const zone = item.zone || 'Sedang';

    // Personel Korkab & TPM (Komposisi Dinamis 2 TPM : N Unit)
    const korkabCount = units > 0 ? Math.max(1, Math.ceil(units / 1000)) : 0;
    const tpmCount = units > 0 ? Math.ceil(units / rasioTPMUnit) * 2 : 0; // Dinamis (misal 2 TPM per 40, 50, atau 60 unit)
    const korkabOB = korkabCount * masaKorkab;
    const tpmOB = tpmCount * masaTPM;

    // Lookup SBM khusus provinsi dari MASTER_PROVINCES (PMK Kemenkeu No 32 Tahun 2025)
    const provObj = MASTER_PROVINCES.find(p => String(p.id).trim() === String(item.provId).trim());
    const sbmSewaMinibusProv = provObj?.sewaMinibusBulanan || sbmRates.sewaMobilPPKBulanan;
    const sbmSewaHarianProv = provObj?.sewaMobilHarian || sbmRates.sewaMobilHarianInsidental;
    const sbmMakanRembukProv = provObj ? (provObj.sbmMakanRapat + provObj.sbmKudapanRapat) : sbmRates.makanMinumRembuk;

    // --- POSTUR 1: ANGGARAN BANTUAN FISIK (BAS 526312 - Tanpa Pengali IKK) ---
    const baseRateFisik = params.rateFisikMatrix[zone] || params.rateFisikMatrix.Sedang;
    const tierFisik = zone === 'Mudah' ? '20 Juta' : (zone === 'Sulit' ? '40 Juta' : '25 Juta');
    const biayaFisik_526312 = Math.round(units * baseRateFisik);

    // --- POSTUR 2: 16 KOMPONEN PENDAMPINGAN (NON-FISIK - BULAT ATAS KE RIBUAN) ---

    // A. BAS 522191 (Belanja Jasa Lainnya)
    // Komp 1: Korkab/Korkot (Opsi 1: INKINDO x 55% x IKK | Opsi 2: Manual Flat / x IKK)
    const honorKorkabBulan = isManualGaji
      ? roundUpToThousand(useIKKOnManual ? gajiManualKorkab * ikkCoeff : gajiManualKorkab)
      : roundUpToThousand((Number(params.rateInkindoSubProf) || 16500000) * (Number(params.inkindoFactor) || 0.55) * ikkCoeff);
    const komp1_korkab = roundUpToThousand(korkabOB * honorKorkabBulan);

    // Komp 2: TPM (Opsi 1: INKINDO x 55% x IKK | Opsi 2: Manual Flat / x IKK)
    const honorTPMBulan = isManualGaji
      ? roundUpToThousand(useIKKOnManual ? gajiManualTPM * ikkCoeff : gajiManualTPM)
      : roundUpToThousand((Number(params.rateInkindoAsisten) || 11500000) * (Number(params.inkindoFactor) || 0.55) * ikkCoeff);
    const komp2_tpm = roundUpToThousand(tpmOB * honorTPMBulan);

    // Komp 6: Operasional Rutin TPM (Support Cost)
    const baseSupportTPM = params.supportTPMMatrix[zone] || params.supportTPMMatrix.Sedang;
    const komp6_operasionalTPM = roundUpToThousand(tpmOB * (baseSupportTPM * ikkCoeff));

    // Komp 12: Digitalisasi Dokumen
    const komp12_digitalisasi = roundUpToThousand(units * (params.rateDigitalisasi * ikkCoeff));

    // Komp 13: Share Video Best Practice (38 Provinsi x IKK)
    const totalVideoProvNasional = 38 * (params.rateVideoProv * ikkCoeff);
    const komp13_videoBestPractice = units > 0 ? roundUpToThousand(units * (totalVideoProvNasional / 370000)) : 0;

    // Total 522191 di level Kab/Kota
    const total_522191_kab = roundUpToThousand(komp1_korkab + komp2_tpm + komp6_operasionalTPM + komp12_digitalisasi + komp13_videoBestPractice);

    // B. BAS 521211 (Belanja Bahan)
    // Komp 3: Konsumsi Rembuk Warga (SBM PMK 32/2025 per Provinsi)
    const freqRembuk = Number(params.frekuensiRembukWarga || params.frekuensiRembuk) || 3;
    const komp3_konsumsiRembuk = roundUpToThousand(units * freqRembuk * sbmMakanRembukProv);

    // Komp 4: Laporan Bulanan TPM & Korkab (Non-SBM - IKK)
    const totalOB = tpmOB + korkabOB;
    const komp4_laporanBulanan = roundUpToThousand(totalOB * (params.rateLaporanBulanan * ikkCoeff));

    // Komp 5: Dokumen RAB & Gambar Teknis (Non-SBM - IKK)
    const komp5_rabGambar = roundUpToThousand(units * (params.rateRAB * ikkCoeff));

    // Komp 8: Kit Pembekalan & Atribut (Non-SBM - IKK)
    const komp8_kitAtribut = roundUpToThousand((tpmCount + korkabCount) * (params.rateKitAtribut * ikkCoeff));

    // Komp 15: Media Sosialisasi & Peneng Identitas (Non-SBM - IKK)
    const komp15_peneng = roundUpToThousand(units * (params.ratePeneng * ikkCoeff));

    const total_521211_kab = roundUpToThousand(komp3_konsumsiRembuk + komp4_laporanBulanan + komp5_rabGambar + komp8_kitAtribut + komp15_peneng);

    // C. BAS 524111 (Belanja Perjalanan Dinas Biasa) (SBM - No IKK)
    // Komp 9: Pendampingan Verifikasi Satker
    const tripVerif = units > 0 ? Math.ceil(units / params.rasioVerifWasdalUnit) : 0;
    const komp9_verifikasi = roundUpToThousand(tripVerif * costPerTrip2Orang2Hari);

    // Komp 10: Wasdal Lapangan
    const tripWasdal = units > 0 ? Math.ceil(units / params.rasioVerifWasdalUnit) : 0;
    const komp10_wasdal = roundUpToThousand(tripWasdal * costPerTrip2Orang2Hari);

    // Komp 11: Share Perjalanan Dinas Koordinasi Satker DIPA ke Pusat (34 Satker)
    const totalKoordPusatNasional = 34 * costPerSatkerKoordPusat;
    const komp11_koordPusat = units > 0 ? roundUpToThousand(units * (totalKoordPusatNasional / 370000)) : 0;

    // Komp 14: Pendampingan APH (1 trip APH per 10 trip Wasdal)
    const tripAPH = tripWasdal > 0 ? Math.ceil(tripWasdal / params.rasioAPHPerWasdal) : 0;
    const komp14_aph = roundUpToThousand(tripAPH * costPerTrip2Orang2Hari);

    const total_524111_kab = roundUpToThousand(komp9_verifikasi + komp10_wasdal + komp11_koordPusat + komp14_aph);

    // D. BAS 524119 (Belanja Perjalanan Dinas Paket Meeting Luar Kota) (SBM - No IKK)
    // Komp 7: Paket Rapat Pembekalan TPM & Korkab (termasuk Panitia Satker 38 Provinsi)
    const pesertaPembekalan = tpmCount + korkabCount;
    const totalPanitiaSatkerNasional = 38 * params.panitiaSatkerPembekalan * costPerPesertaPembekalan;
    const sharePanitiaSatker = units > 0 ? roundUpToThousand(units * (totalPanitiaSatkerNasional / 370000)) : 0;
    const komp7_pembekalan = roundUpToThousand((pesertaPembekalan * costPerPesertaPembekalan) + sharePanitiaSatker);
    const total_524119_kab = komp7_pembekalan;

    // E. BAS 522141 (Belanja Sewa) (SBM - No IKK)
    // Komp 16A: Share Sewa Mobil Bulanan PPK Satker (SBM Minibus Bulanan per Provinsi)
    const totalSewaPPKNasional = 56 * masaKorkab * sbmSewaMinibusProv;
    const komp16a_sewaPPK = units > 0 ? roundUpToThousand(units * (totalSewaPPKNasional / 370000)) : 0;

    // Komp 16B: Sewa Kendaraan Insidental (Total trip verif + wasdal + aph x 2 hari x SBM Sewa Harian Prov)
    const totalHariSewaInsidental = (tripVerif + tripWasdal + tripAPH) * 2;
    const komp16b_sewaInsidental = roundUpToThousand(totalHariSewaInsidental * sbmSewaHarianProv);
    const total_522141_kab = roundUpToThousand(komp16a_sewaPPK + komp16b_sewaInsidental);

    // Total Biaya SDM Khusus (Honor TPM + Korkab + Operasional TPM + Pembekalan + Kit)
    const totalBiayaSDM = roundUpToThousand(komp1_korkab + komp2_tpm + komp6_operasionalTPM + komp7_pembekalan + komp8_kitAtribut);

    // Total Pendampingan Kab/Kota
    const totalPendampingan_kab = roundUpToThousand(total_522191_kab + total_521211_kab + total_524111_kab + total_524119_kab + total_522141_kab);
    const grandTotal_kab = biayaFisik_526312 + totalPendampingan_kab;

    return {
      ...item,
      korkabCount,
      tpmCount,
      korkabOB,
      tpmOB,
      honorKorkabBulan,
      honorTPMBulan,
      totalBiayaSDM,
      tripVerif,
      tripWasdal,
      tripAPH,
      tierFisik,
      baseRateFisik,
      // Postur 1
      biayaFisik_526312,
      // 16 Komponen
      komp1_korkab,
      komp2_tpm,
      komp3_konsumsiRembuk,
      komp4_laporanBulanan,
      komp5_rabGambar,
      komp6_operasionalTPM,
      komp7_pembekalan,
      komp8_kitAtribut,
      komp9_verifikasi,
      komp10_wasdal,
      komp11_koordPusat,
      komp12_digitalisasi,
      komp13_videoBestPractice,
      komp14_aph,
      komp15_peneng,
      komp16a_sewaPPK,
      komp16b_sewaInsidental,
      // BAS Breakdown Kab
      bas_526312: biayaFisik_526312,
      bas_522191: total_522191_kab,
      bas_521211: total_521211_kab,
      bas_524111: total_524111_kab,
      bas_524119: total_524119_kab,
      bas_522141: total_522141_kab,
      totalPendampingan: totalPendampingan_kab,
      grandTotal: grandTotal_kab
    };
  });

  // 2. Agregasi ke 38 Provinsi
  const breakdownProvinsi = MASTER_PROVINCES.map(prov => {
    const kabKotaInProv = detailKabKota.filter(k => 
      String(k.provId).trim() === String(prov.id).trim() ||
      (k.provName && prov.name && k.provName.toLowerCase().trim() === prov.name.toLowerCase().trim())
    );
    const totalIndikasiAwal = kabKotaInProv.reduce((acc, k) => acc + (k.indikasiAwal || 0), 0);
    const totalUnit = kabKotaInProv.reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);
    const unitDJKP = kabKotaInProv.filter(k => k.delineasi === 'DJKP').reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);
    const unitDJPKT = kabKotaInProv.filter(k => k.delineasi === 'DJPKT').reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);
    const unitDJPDS = kabKotaInProv.filter(k => k.delineasi === 'DJPDS').reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);

    const unit20Jt = kabKotaInProv.filter(k => k.zone === 'Mudah').reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);
    const unit25Jt = kabKotaInProv.filter(k => k.zone === 'Sedang').reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);
    const unit40Jt = kabKotaInProv.filter(k => k.zone === 'Sulit').reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);

    const totalKorkab = kabKotaInProv.reduce((acc, k) => acc + k.korkabCount, 0);
    const totalTPM = kabKotaInProv.reduce((acc, k) => acc + k.tpmCount, 0);
    const totalKorkabOB = kabKotaInProv.reduce((acc, k) => acc + k.korkabOB, 0);
    const totalTPMOB = kabKotaInProv.reduce((acc, k) => acc + k.tpmOB, 0);
    const totalTripVerif = kabKotaInProv.reduce((acc, k) => acc + k.tripVerif, 0);
    const totalTripWasdal = kabKotaInProv.reduce((acc, k) => acc + k.tripWasdal, 0);
    const totalTripAPH = kabKotaInProv.reduce((acc, k) => acc + k.tripAPH, 0);

    // Sum Komponen Dasar dari Kab/Kota
    const biayaFisik_526312 = kabKotaInProv.reduce((acc, k) => acc + k.biayaFisik_526312, 0);
    const komp1_korkab = kabKotaInProv.reduce((acc, k) => acc + k.komp1_korkab, 0);
    const komp2_tpm = kabKotaInProv.reduce((acc, k) => acc + k.komp2_tpm, 0);
    const komp3_konsumsiRembuk = kabKotaInProv.reduce((acc, k) => acc + k.komp3_konsumsiRembuk, 0);
    const komp4_laporanBulanan = kabKotaInProv.reduce((acc, k) => acc + k.komp4_laporanBulanan, 0);
    const komp5_rabGambar = kabKotaInProv.reduce((acc, k) => acc + k.komp5_rabGambar, 0);
    const komp6_operasionalTPM = kabKotaInProv.reduce((acc, k) => acc + k.komp6_operasionalTPM, 0);
    
    // Komp 7: Tambah 5 Panitia Satker per Provinsi
    const biayaPanitiaSatker = roundUpToThousand(params.panitiaSatkerPembekalan * costPerPesertaPembekalan);
    const komp7_pembekalan = roundUpToThousand(kabKotaInProv.reduce((acc, k) => acc + k.komp7_pembekalan, 0) + biayaPanitiaSatker);

    const komp8_kitAtribut = kabKotaInProv.reduce((acc, k) => acc + k.komp8_kitAtribut, 0);
    const komp9_verifikasi = kabKotaInProv.reduce((acc, k) => acc + k.komp9_verifikasi, 0);
    const komp10_wasdal = kabKotaInProv.reduce((acc, k) => acc + k.komp10_wasdal, 0);
    const komp12_digitalisasi = kabKotaInProv.reduce((acc, k) => acc + k.komp12_digitalisasi, 0);
    
    // Komp 13: Video Best Practice (Dihitung 1 paket per 38 Provinsi dengan IKK Provinsi)
    const ikkProvCoeff = (prov.ikk || 100) / 100;
    const komp13_videoBestPractice = roundUpToThousand(params.rateVideoProv * ikkProvCoeff);

    const komp14_aph = kabKotaInProv.reduce((acc, k) => acc + k.komp14_aph, 0);
    const komp15_peneng = kabKotaInProv.reduce((acc, k) => acc + k.komp15_peneng, 0);

    // Komp 16A: Sewa Mobil Bulanan PPK (SBM Minibus Operasional per Provinsi)
    const rateSewaMinibusProv = prov.sewaMinibusBulanan || sbmRates.sewaMobilPPKBulanan;
    const komp16a_sewaPPK = roundUpToThousand(prov.ppkCount * params.masaKorkab * rateSewaMinibusProv);
    const komp16b_sewaInsidental = kabKotaInProv.reduce((acc, k) => acc + k.komp16b_sewaInsidental, 0);

    // Total Biaya SDM Provinsi
    const totalBiayaSDM = roundUpToThousand(komp1_korkab + komp2_tpm + komp6_operasionalTPM + komp7_pembekalan + komp8_kitAtribut);

    // Roll-up Akun BAS per Provinsi
    const bas_526312 = biayaFisik_526312;
    const bas_522191 = roundUpToThousand(komp1_korkab + komp2_tpm + komp6_operasionalTPM + komp12_digitalisasi + komp13_videoBestPractice);
    const bas_521211 = roundUpToThousand(komp3_konsumsiRembuk + komp4_laporanBulanan + komp5_rabGambar + komp8_kitAtribut + komp15_peneng);
    const bas_524111 = roundUpToThousand(komp9_verifikasi + komp10_wasdal + komp14_aph);
    const bas_524119 = komp7_pembekalan;
    const bas_522141 = roundUpToThousand(komp16a_sewaPPK + komp16b_sewaInsidental);

    const totalPendampingan = roundUpToThousand(bas_522191 + bas_521211 + bas_524111 + bas_524119 + bas_522141);
    const grandTotal = bas_526312 + totalPendampingan;
    const rataPendampinganPerUnit = totalUnit > 0 ? roundUpToThousand(totalPendampingan / totalUnit) : 0;
    const rataGrandTotalPerUnit = totalUnit > 0 ? Math.round(grandTotal / totalUnit) : 0;

    return {
      ...prov,
      kabKotaCount: kabKotaInProv.length,
      totalIndikasiAwal,
      totalUnit,
      unitDJKP,
      unitDJPKT,
      unitDJPDS,
      unit20Jt,
      unit25Jt,
      unit40Jt,
      fisik20Jt: unit20Jt * params.rateFisikMatrix.Mudah,
      fisik25Jt: unit25Jt * params.rateFisikMatrix.Sedang,
      fisik40Jt: unit40Jt * params.rateFisikMatrix.Sulit,
      korkabCount: totalKorkab,
      tpmCount: totalTPM,
      totalKorkab,
      totalTPM,
      korkabOB: totalKorkabOB,
      tpmOB: totalTPMOB,
      totalKorkabOB,
      totalTPMOB,
      totalTripVerif,
      totalTripWasdal,
      totalTripAPH,
      totalBiayaSDM,
      // Postur 1
      biayaFisik_526312,
      // 16 Komponen
      komp1_korkab,
      komp2_tpm,
      komp3_konsumsiRembuk,
      komp4_laporanBulanan,
      komp5_rabGambar,
      komp6_operasionalTPM,
      komp7_pembekalan,
      komp8_kitAtribut,
      komp9_verifikasi,
      komp10_wasdal,
      komp11_koordPusat: 0,
      komp12_digitalisasi,
      komp13_videoBestPractice,
      komp14_aph,
      komp15_peneng,
      komp16a_sewaPPK,
      komp16b_sewaInsidental,
      // BAS Totals
      bas_526312,
      bas_522191,
      bas_521211,
      bas_524111,
      bas_524119,
      bas_522141,
      totalPendampingan,
      grandTotal,
      rataPendampinganPerUnit,
      rataGrandTotalPerUnit,
      kabKotaList: kabKotaInProv
    };
  });

  // 3. Agregasi ke 34 Satker DIPA PKP
  const breakdownSatker = MASTER_SATKER.map(satker => {
    const provsInSatker = breakdownProvinsi.filter(p => satker.provIds.includes(p.id));
    const totalIndikasiAwal = provsInSatker.reduce((acc, p) => acc + (p.totalIndikasiAwal || 0), 0);
    const totalUnit = provsInSatker.reduce((acc, p) => acc + p.totalUnit, 0);
    const unitDJKP = provsInSatker.reduce((acc, p) => acc + p.unitDJKP, 0);
    const unitDJPKT = provsInSatker.reduce((acc, p) => acc + p.unitDJPKT, 0);
    const unitDJPDS = provsInSatker.reduce((acc, p) => acc + p.unitDJPDS, 0);
    const unit20Jt = provsInSatker.reduce((acc, p) => acc + p.unit20Jt, 0);
    const unit25Jt = provsInSatker.reduce((acc, p) => acc + p.unit25Jt, 0);
    const unit40Jt = provsInSatker.reduce((acc, p) => acc + p.unit40Jt, 0);

    const totalKorkab = provsInSatker.reduce((acc, p) => acc + p.totalKorkab, 0);
    const totalTPM = provsInSatker.reduce((acc, p) => acc + p.totalTPM, 0);
    const totalPPK = provsInSatker.reduce((acc, p) => acc + p.ppkCount, 0);
    const totalKorkabOB = provsInSatker.reduce((acc, p) => acc + p.totalKorkabOB, 0);
    const totalTPMOB = provsInSatker.reduce((acc, p) => acc + p.totalTPMOB, 0);

    // Sum Komponen
    const biayaFisik_526312 = provsInSatker.reduce((acc, p) => acc + p.biayaFisik_526312, 0);
    const komp1_korkab = provsInSatker.reduce((acc, p) => acc + p.komp1_korkab, 0);
    const komp2_tpm = provsInSatker.reduce((acc, p) => acc + p.komp2_tpm, 0);
    const komp3_konsumsiRembuk = provsInSatker.reduce((acc, p) => acc + p.komp3_konsumsiRembuk, 0);
    const komp4_laporanBulanan = provsInSatker.reduce((acc, p) => acc + p.komp4_laporanBulanan, 0);
    const komp5_rabGambar = provsInSatker.reduce((acc, p) => acc + p.komp5_rabGambar, 0);
    const komp6_operasionalTPM = provsInSatker.reduce((acc, p) => acc + p.komp6_operasionalTPM, 0);
    const komp7_pembekalan = provsInSatker.reduce((acc, p) => acc + p.komp7_pembekalan, 0);
    const komp8_kitAtribut = provsInSatker.reduce((acc, p) => acc + p.komp8_kitAtribut, 0);
    const komp9_verifikasi = provsInSatker.reduce((acc, p) => acc + p.komp9_verifikasi, 0);
    const komp10_wasdal = provsInSatker.reduce((acc, p) => acc + p.komp10_wasdal, 0);
    
    // Komp 11: Koordinasi Satker ke Pusat
    const komp11_koordPusat = roundUpToThousand(costPerSatkerKoordPusat);

    const komp12_digitalisasi = provsInSatker.reduce((acc, p) => acc + p.komp12_digitalisasi, 0);
    const komp13_videoBestPractice = provsInSatker.reduce((acc, p) => acc + p.komp13_videoBestPractice, 0);
    const komp14_aph = provsInSatker.reduce((acc, p) => acc + p.komp14_aph, 0);
    const komp15_peneng = provsInSatker.reduce((acc, p) => acc + p.komp15_peneng, 0);
    const komp16a_sewaPPK = provsInSatker.reduce((acc, p) => acc + p.komp16a_sewaPPK, 0);
    const komp16b_sewaInsidental = provsInSatker.reduce((acc, p) => acc + p.komp16b_sewaInsidental, 0);

    const totalBiayaSDM = roundUpToThousand(komp1_korkab + komp2_tpm + komp6_operasionalTPM + komp7_pembekalan + komp8_kitAtribut);

    // Roll-up Akun BAS Satker
    const bas_526312 = biayaFisik_526312;
    const bas_522191 = roundUpToThousand(komp1_korkab + komp2_tpm + komp6_operasionalTPM + komp12_digitalisasi + komp13_videoBestPractice);
    const bas_521211 = roundUpToThousand(komp3_konsumsiRembuk + komp4_laporanBulanan + komp5_rabGambar + komp8_kitAtribut + komp15_peneng);
    const bas_524111 = roundUpToThousand(komp9_verifikasi + komp10_wasdal + komp11_koordPusat + komp14_aph);
    const bas_524119 = komp7_pembekalan;
    const bas_522141 = roundUpToThousand(komp16a_sewaPPK + komp16b_sewaInsidental);

    const totalPendampingan = roundUpToThousand(bas_522191 + bas_521211 + bas_524111 + bas_524119 + bas_522141);
    const grandTotal = bas_526312 + totalPendampingan;
    const rataPendampinganPerUnit = totalUnit > 0 ? roundUpToThousand(totalPendampingan / totalUnit) : 0;
    const rataGrandTotalPerUnit = totalUnit > 0 ? Math.round(grandTotal / totalUnit) : 0;

    const freqRembuk = params?.frekuensiRembukWarga || 3;

    // Children array: Nested Tree structure for UI Expand/Collapse (Requirement #2)
    const children = [
      {
        id: `${satker.id}_522191`,
        code: "522191",
        name: "Belanja Jasa Lainnya (Pendampingan & Manajemen)",
        pagu: bas_522191,
        children: [
          {
            id: `${satker.id}_522191_GRP1`,
            name: "GAJI OPERASIONAL KORKAB & TPM",
            isGroup: true,
            children: [
              { id: `${satker.id}_000041`, code: "000041", name: "Gaji dan Operasional Korkab", target: `${totalKorkabOB} Ob`, volNum: totalKorkabOB, unitPrice: totalKorkabOB > 0 ? Math.ceil((komp1_korkab / totalKorkabOB) / 1000) * 1000 : 0, pagu: komp1_korkab, formula: "Non-SBM (Honorarium Inkindo Sub-Prof * Faktor Inkindo 55% * Indeks IKK)" },
              { id: `${satker.id}_000042`, code: "000042", name: "Gaji dan Operasional TPM", target: `${totalTPMOB} Ob`, volNum: totalTPMOB, unitPrice: totalTPMOB > 0 ? Math.ceil((komp2_tpm / totalTPMOB) / 1000) * 1000 : 0, pagu: komp2_tpm, formula: "Non-SBM (Honorarium Inkindo Asisten Ahli * Faktor Inkindo 55% * Indeks IKK)" },
              { id: `${satker.id}_000028`, code: "000028", name: "Operasional Rutin TPM (Support Cost)", target: `${totalTPMOB} Kl`, volNum: totalTPMOB, unitPrice: totalTPMOB > 0 ? Math.ceil((komp6_operasionalTPM / totalTPMOB) / 1000) * 1000 : 0, pagu: komp6_operasionalTPM, formula: "Non-SBM (Matriks Biaya Support Lapangan TPM * Indeks IKK)" }
            ]
          },
          {
            id: `${satker.id}_522191_GRP2`,
            name: "DIGITALISASI & DOKUMENTASI BEST PRACTICE",
            isGroup: true,
            children: [
              { id: `${satker.id}_000012`, code: "000012", name: "Digitalisasi & Pengarsipan Dokumen Penyaluran", target: `${totalUnit} Dok`, volNum: totalUnit, unitPrice: totalUnit > 0 ? Math.ceil((komp12_digitalisasi / totalUnit) / 1000) * 1000 : 0, pagu: komp12_digitalisasi, formula: "Non-SBM (Indeks Biaya Digitalisasi per Dokumen * Indeks IKK)" },
              { id: `${satker.id}_000013`, code: "000013", name: "Dokumentasi & Video Best Practice Penyaluran", target: "1 Paket", volNum: 1, unitPrice: komp13_videoBestPractice, pagu: komp13_videoBestPractice, formula: "Non-SBM (Harga Satuan Paket Video Best Practice * Indeks IKK)" }
            ]
          }
        ]
      },
      {
        id: `${satker.id}_521211`,
        code: "521211",
        name: "Belanja Bahan & Atribut Kegiatan",
        pagu: bas_521211,
        children: [
          {
            id: `${satker.id}_521211_GRP1`,
            name: "CONSUMABLE & DOKUMEN PERENCANAAN",
            isGroup: true,
            children: [
              { id: `${satker.id}_000031`, code: "000031", name: "Konsumsi Rapat Rembuk Warga", target: `${totalUnit * freqRembuk} Ok`, volNum: totalUnit * freqRembuk, unitPrice: (totalUnit * freqRembuk) > 0 ? Math.ceil((komp3_konsumsiRembuk / (totalUnit * freqRembuk)) / 1000) * 1000 : 0, pagu: komp3_konsumsiRembuk, formula: `Standar SBM (${freqRembuk} Kali Konsumsi * (SBM Makan Rapat Biasa + SBM Kudapan/Snack))` },
              { id: `${satker.id}_000026`, code: "000026", name: "Penggandaan Laporan Bulanan TPM & Korkab", target: `${totalUnit} Eks`, volNum: totalUnit, unitPrice: totalUnit > 0 ? Math.ceil((komp4_laporanBulanan / totalUnit) / 1000) * 1000 : 0, pagu: komp4_laporanBulanan, formula: "Non-SBM (Biaya Cetak & Penggandaan Laporan * Indeks IKK)" },
              { id: `${satker.id}_000027`, code: "000027", name: "Dokumen RAB & Gambar Rencana Teknis", target: `${totalUnit} Set`, volNum: totalUnit, unitPrice: totalUnit > 0 ? Math.ceil((komp5_rabGambar / totalUnit) / 1000) * 1000 : 0, pagu: komp5_rabGambar, formula: "Non-SBM (Biaya Penyusunan RAB & Gambar Teknis per Unit * Indeks IKK)" }
            ]
          },
          {
            id: `${satker.id}_521211_GRP2`,
            name: "ATRIBUT & MEDIA SOSIALISASI",
            isGroup: true,
            children: [
              { id: `${satker.id}_000024`, code: "000024", name: "Kit Pembekalan & Atribut Personel Lapangan", target: `${totalTPM + totalKorkab} Set`, volNum: totalTPM + totalKorkab, unitPrice: (totalTPM + totalKorkab) > 0 ? Math.ceil((komp8_kitAtribut / (totalTPM + totalKorkab)) / 1000) * 1000 : 0, pagu: komp8_kitAtribut, formula: "Non-SBM (Paket Rompi, Topi, ID Card & Kit Personel * Indeks IKK)" },
              { id: `${satker.id}_000022`, code: "000022", name: "Media Sosialisasi & Peneng Identitas Rumah", target: `${totalUnit} Pcs`, volNum: totalUnit, unitPrice: totalUnit > 0 ? Math.ceil((komp15_peneng / totalUnit) / 1000) * 1000 : 0, pagu: komp15_peneng, formula: "Non-SBM (Biaya Cetak Peneng Rumah Alumunium/Plat * Indeks IKK)" }
            ]
          }
        ]
      },
      {
        id: `${satker.id}_524111`,
        code: "524111",
        name: "Belanja Perjalanan Dinas Biasa (Verifikasi & Wasdal)",
        pagu: bas_524111,
        children: [
          {
            id: `${satker.id}_524111_GRP1`,
            name: "PENDAMPINGAN, WASDAL & KOORDINASI PUSAT",
            isGroup: true,
            children: [
              { id: `${satker.id}_000046`, code: "000046", name: "Perjalanan Dinas Verifikasi Penerima Bantuan", target: `${Math.ceil(totalUnit / 100)} Trip`, volNum: Math.ceil(totalUnit / 100), unitPrice: Math.ceil(totalUnit / 100) > 0 ? Math.ceil((komp9_verifikasi / Math.ceil(totalUnit / 100)) / 1000) * 1000 : 0, pagu: komp9_verifikasi, formula: "Standar SBM (2 Personel * (2 Hari*SBM Uang Harian + 2 Malam*SBM Hotel + SBM Transport PP))" },
              { id: `${satker.id}_000047`, code: "000047", name: "Perjalanan Dinas Pengawasan & Pengendalian (Wasdal)", target: `${Math.ceil(totalUnit / 100)} Trip`, volNum: Math.ceil(totalUnit / 100), unitPrice: Math.ceil(totalUnit / 100) > 0 ? Math.ceil((komp10_wasdal / Math.ceil(totalUnit / 100)) / 1000) * 1000 : 0, pagu: komp10_wasdal, formula: "Standar SBM (2 Personel * (2 Hari*SBM Uang Harian + 2 Malam*SBM Hotel + SBM Transport PP))" },
              { id: `${satker.id}_000048`, code: "000048", name: "Koordinasi Satker ke Tingkat Pusat (Jakarta)", target: "12 Trip", volNum: 12, unitPrice: Math.ceil((komp11_koordPusat / 12) / 1000) * 1000, pagu: komp11_koordPusat, formula: "Standar SBM (4 Personel * (Tiket PP + 3 Hari*SBM Uang Harian DKI + 2 Malam*SBM Hotel DKI + Taksi PP))" },
              { id: `${satker.id}_000014`, code: "000014", name: "Pendampingan Aparat Penegak Hukum (APH)", target: "2 Trip", volNum: 2, unitPrice: Math.ceil((komp14_aph / 2) / 1000) * 1000, pagu: komp14_aph, formula: "Standar SBM (2 Personel * (2 Hari*SBM Uang Harian + 2 Malam*SBM Hotel + SBM Transport PP))" }
            ]
          }
        ]
      },
      {
        id: `${satker.id}_524119`,
        code: "524119",
        name: "Belanja Perjalanan Dinas Paket Meeting Luar Kota",
        pagu: bas_524119,
        children: [
          {
            id: `${satker.id}_524119_GRP1`,
            name: "DALAM RANGKA KOORDINASI DAN PEMBEKALAN",
            isGroup: true,
            children: [
              { id: `${satker.id}_000030`, code: "000030", name: "Paket Rapat Pembekalan TPM & Korkab (Fullboard 5 Hari)", target: `${totalTPM + totalKorkab} Ok`, volNum: totalTPM + totalKorkab, unitPrice: (totalTPM + totalKorkab) > 0 ? Math.ceil((komp7_pembekalan / (totalTPM + totalKorkab)) / 1000) * 1000 : 0, pagu: komp7_pembekalan, formula: "Standar SBM (SBM Paket Fullboard 5 Hari + Transport PP Ibukota + Uang Saku Harian Meeting)" }
            ]
          }
        ]
      },
      {
        id: `${satker.id}_522141`,
        code: "522141",
        name: "Belanja Sewa (Sewa Kendaraan PPK & Insidental)",
        pagu: bas_522141,
        children: [
          {
            id: `${satker.id}_522141_GRP1`,
            name: "SEWA KENDARAAN OPERASIONAL RODA 4",
            isGroup: true,
            children: [
              { id: `${satker.id}_000035`, code: "000035", name: "Sewa Kendaraan Operasional Lapangan PPK (Bulanan)", target: `${totalPPK * 10} Ob`, volNum: totalPPK * 10, unitPrice: (totalPPK * 10) > 0 ? Math.ceil((komp16a_sewaPPK / (totalPPK * 10)) / 1000) * 1000 : 0, pagu: komp16a_sewaPPK, formula: "Standar SBM (SBM Sewa Roda 4 Operasional Lapangan Bulanan * 10 Bulan)" },
              { id: `${satker.id}_000036`, code: "000036", name: "Sewa Kendaraan Insidental Lapangan (Verifikasi & Wasdal)", target: `${(Math.ceil((totalUnit || 0) / 100) * 2) * 2} Oh`, volNum: (Math.ceil((totalUnit || 0) / 100) * 2) * 2, unitPrice: ((Math.ceil((totalUnit || 0) / 100) * 2) * 2) > 0 ? Math.ceil((komp16b_sewaInsidental / ((Math.ceil((totalUnit || 0) / 100) * 2) * 2)) / 1000) * 1000 : 0, pagu: komp16b_sewaInsidental, formula: "Standar SBM (2 Hari * (Trip Verifikasi + Trip Wasdal) * SBM Sewa Roda 4 Insidental Harian)" }
            ]
          }
        ]
      }
    ];

    return {
      ...satker,
      provinces: provsInSatker,
      totalIndikasiAwal,
      totalUnit,
      unitDJKP,
      unitDJPKT,
      unitDJPDS,
      unit20Jt,
      unit25Jt,
      unit40Jt,
      korkabCount: totalKorkab,
      tpmCount: totalTPM,
      totalKorkab,
      totalTPM,
      totalPPK,
      totalKorkabOB,
      totalTPMOB,
      totalBiayaSDM,
      biayaFisik_526312,
      komp1_korkab,
      komp2_tpm,
      komp3_konsumsiRembuk,
      komp4_laporanBulanan,
      komp5_rabGambar,
      komp6_operasionalTPM,
      komp7_pembekalan,
      komp8_kitAtribut,
      komp9_verifikasi,
      komp10_wasdal,
      komp11_koordPusat,
      komp12_digitalisasi,
      komp13_videoBestPractice,
      komp14_aph,
      komp15_peneng,
      komp16a_sewaPPK,
      komp16b_sewaInsidental,
      bas_526312,
      bas_522191,
      bas_521211,
      bas_524111,
      bas_524119,
      bas_522141,
      totalPendampingan,
      grandTotal,
      rataPendampinganPerUnit,
      rataGrandTotalPerUnit,
      children
    };
  });

  // 4. Konsolidasi 6 Akun BAS Nasional
  const totalFisik_526312 = breakdownSatker.reduce((acc, s) => acc + s.bas_526312, 0);
  const totalJasa_522191 = breakdownSatker.reduce((acc, s) => acc + s.bas_522191, 0);
  const totalBahan_521211 = breakdownSatker.reduce((acc, s) => acc + s.bas_521211, 0);
  const totalPerjalanan_524111 = breakdownSatker.reduce((acc, s) => acc + s.bas_524111, 0);
  const totalMeeting_524119 = breakdownSatker.reduce((acc, s) => acc + s.bas_524119, 0);
  const totalSewa_522141 = breakdownSatker.reduce((acc, s) => acc + s.bas_522141, 0);

  const grandTotalPendampingan = totalJasa_522191 + totalBahan_521211 + totalPerjalanan_524111 + totalMeeting_524119 + totalSewa_522141;
  const grandTotalRKA = totalFisik_526312 + grandTotalPendampingan;
  const totalUnitNasional = breakdownSatker.reduce((acc, s) => acc + s.totalUnit, 0);
  const rataPendampinganPerUnit = totalUnitNasional > 0 ? Math.round(grandTotalPendampingan / totalUnitNasional) : 0;
  const rataGrandTotalPerUnit = totalUnitNasional > 0 ? Math.round(grandTotalRKA / totalUnitNasional) : 0;

  // 5. Agregasi ke 3 Wilayah Kerja
  const breakdownWilayahKerja = WILAYAH_KERJA_LIST.map(w => {
    const provsInW = breakdownProvinsi.filter(p => p.wilayahKerja === w.id);
    const kabInW = detailKabKota.filter(k => k.wilayahKerja === w.id);

    const totalUnit = provsInW.reduce((acc, p) => acc + p.totalUnit, 0);
    const unitDJKP = provsInW.reduce((acc, p) => acc + p.unitDJKP, 0);
    const unitDJPKT = provsInW.reduce((acc, p) => acc + p.unitDJPKT, 0);
    const unitDJPDS = provsInW.reduce((acc, p) => acc + p.unitDJPDS, 0);

    const unit20Jt = provsInW.reduce((acc, p) => acc + p.unit20Jt, 0);
    const unit25Jt = provsInW.reduce((acc, p) => acc + p.unit25Jt, 0);
    const unit40Jt = provsInW.reduce((acc, p) => acc + p.unit40Jt, 0);

    const totalKorkab = provsInW.reduce((acc, p) => acc + p.totalKorkab, 0);
    const totalTPM = provsInW.reduce((acc, p) => acc + p.totalTPM, 0);
    const totalPPK = provsInW.reduce((acc, p) => acc + p.ppkCount, 0);
    const totalKorkabOB = provsInW.reduce((acc, p) => acc + p.totalKorkabOB, 0);
    const totalTPMOB = provsInW.reduce((acc, p) => acc + p.totalTPMOB, 0);

    const biayaFisik_526312 = provsInW.reduce((acc, p) => acc + p.biayaFisik_526312, 0);
    const totalPendampingan = provsInW.reduce((acc, p) => acc + p.totalPendampingan, 0);
    const grandTotal = biayaFisik_526312 + totalPendampingan;
    const rataPendampinganPerUnit = totalUnit > 0 ? Math.round(totalPendampingan / totalUnit) : 0;
    const rataGrandTotalPerUnit = totalUnit > 0 ? Math.round(grandTotal / totalUnit) : 0;

    return {
      ...w,
      provCount: provsInW.length,
      provincesCount: provsInW.length,
      kabKotaCount: kabInW.length,
      totalUnit,
      unitDJKP,
      unitDJPKT,
      unitDJPDS,
      unit20Jt,
      unit25Jt,
      unit40Jt,
      totalKorkab,
      totalTPM,
      totalPPK,
      totalKorkabOB,
      totalTPMOB,
      biayaFisik_526312,
      totalPendampingan,
      grandTotal,
      pctGrandTotal: grandTotalRKA > 0 ? (grandTotal / grandTotalRKA) * 100 : 0,
      rataPerUnit: rataGrandTotalPerUnit,
      rataPendampinganPerUnit,
      rataGrandTotalPerUnit,
      provinces: provsInW
    };
  });

  // 6. Agregasi ke 7 Pulau
  const breakdownPulau = PULAU_LIST.map(pulau => {
    const provsInP = breakdownProvinsi.filter(p => p.pulau === pulau.id);
    const kabInP = detailKabKota.filter(k => k.pulau === pulau.id);

    const totalUnit = provsInP.reduce((acc, p) => acc + p.totalUnit, 0);
    const unitDJKP = provsInP.reduce((acc, p) => acc + p.unitDJKP, 0);
    const unitDJPKT = provsInP.reduce((acc, p) => acc + p.unitDJPKT, 0);
    const unitDJPDS = provsInP.reduce((acc, p) => acc + p.unitDJPDS, 0);

    const unit20Jt = provsInP.reduce((acc, p) => acc + p.unit20Jt, 0);
    const unit25Jt = provsInP.reduce((acc, p) => acc + p.unit25Jt, 0);
    const unit40Jt = provsInP.reduce((acc, p) => acc + p.unit40Jt, 0);

    const totalKorkab = provsInP.reduce((acc, p) => acc + p.totalKorkab, 0);
    const totalTPM = provsInP.reduce((acc, p) => acc + p.totalTPM, 0);
    const totalPPK = provsInP.reduce((acc, p) => acc + p.ppkCount, 0);

    const biayaFisik_526312 = provsInP.reduce((acc, p) => acc + p.biayaFisik_526312, 0);
    const totalPendampingan = provsInP.reduce((acc, p) => acc + p.totalPendampingan, 0);
    const grandTotal = biayaFisik_526312 + totalPendampingan;

    return {
      ...pulau,
      provCount: provsInP.length,
      provincesCount: provsInP.length,
      kabKotaCount: kabInP.length,
      totalUnit,
      unitDJKP,
      unitDJPKT,
      unitDJPDS,
      unit20Jt,
      unit25Jt,
      unit40Jt,
      totalKorkab,
      totalTPM,
      totalPPK,
      biayaFisik_526312,
      totalPendampingan,
      grandTotal,
      pctGrandTotal: grandTotalRKA > 0 ? (grandTotal / grandTotalRKA) * 100 : 0,
      rataPendampinganPerUnit: totalUnit > 0 ? Math.round(totalPendampingan / totalUnit) : 0,
      rataGrandTotalPerUnit: totalUnit > 0 ? Math.round(grandTotal / totalUnit) : 0
    };
  });

  // 7. Agregasi ke 3 Delineasi / Ditjen (DJKP, DJPKT, DJPDS)
  const delineasiDefs = [
    { id: 'DJKP', code: 'DJKP', name: 'Wilayah Pesisir', namaDelineasi: 'Wilayah Pesisir', dirjen: 'Ditjen Kawasan Permukiman', ditjen: 'Ditjen Kawasan Permukiman', shortDirjen: 'Ditjen Permukiman', targetBase: 50000, icon: '🌊', color: '#0ea5e9' },
    { id: 'DJPKT', code: 'DJPKT', name: 'Wilayah Perkotaan', namaDelineasi: 'Wilayah Perkotaan', dirjen: 'Ditjen Perumahan Perkotaan', ditjen: 'Ditjen Perumahan Perkotaan', shortDirjen: 'Ditjen Perkotaan', targetBase: 120000, icon: '🏙️', color: '#10b981' },
    { id: 'DJPDS', code: 'DJPDS', name: 'Wilayah Perdesaan', namaDelineasi: 'Wilayah Perdesaan', dirjen: 'Ditjen Perumahan Perdesaan', ditjen: 'Ditjen Perumahan Perdesaan', shortDirjen: 'Ditjen Perdesaan', targetBase: 200000, icon: '🌾', color: '#f59e0b' }
  ];

  const breakdownDelineasi = delineasiDefs.map(del => {
    const kabInDel = detailKabKota.filter(k => k.delineasi === del.id);
    const totalUnit = kabInDel.reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);
    const unit20Jt = kabInDel.filter(k => k.zone === 'Mudah').reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);
    const unit25Jt = kabInDel.filter(k => k.zone === 'Sedang').reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);
    const unit40Jt = kabInDel.filter(k => k.zone === 'Sulit').reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);

    const fisik20Jt = unit20Jt * params.rateFisikMatrix.Mudah;
    const fisik25Jt = unit25Jt * params.rateFisikMatrix.Sedang;
    const fisik40Jt = unit40Jt * params.rateFisikMatrix.Sulit;

    const biayaFisik_526312 = kabInDel.reduce((acc, k) => acc + k.biayaFisik_526312, 0);
    const totalPendampingan = kabInDel.reduce((acc, k) => acc + k.totalPendampingan, 0);
    const grandTotal = biayaFisik_526312 + totalPendampingan;

    const totalTPM = kabInDel.reduce((acc, k) => acc + k.tpmCount, 0);
    const totalKorkab = kabInDel.reduce((acc, k) => acc + k.korkabCount, 0);

    return {
      ...del,
      code: del.code || del.id,
      namaDelineasi: del.namaDelineasi || del.name,
      ditjen: del.ditjen || del.dirjen,
      kabKotaCount: kabInDel.length,
      totalUnit,
      pctUnitNasional: totalUnitNasional > 0 ? (totalUnit / totalUnitNasional) * 100 : 0,
      pctUnitTerhadapNasional: totalUnitNasional > 0 ? (totalUnit / totalUnitNasional) * 100 : 0,
      unit20Jt,
      pctUnit20Jt: totalUnit > 0 ? (unit20Jt / totalUnit) * 100 : 0,
      fisik20Jt,
      unit25Jt,
      pctUnit25Jt: totalUnit > 0 ? (unit25Jt / totalUnit) * 100 : 0,
      fisik25Jt,
      unit40Jt,
      pctUnit40Jt: totalUnit > 0 ? (unit40Jt / totalUnit) * 100 : 0,
      fisik40Jt,
      biayaFisik_526312,
      pctFisikNasional: totalFisik_526312 > 0 ? (biayaFisik_526312 / totalFisik_526312) * 100 : 0,
      pctFisikTerhadapTotalFisik: totalFisik_526312 > 0 ? (biayaFisik_526312 / totalFisik_526312) * 100 : 0,
      pctFisikDariTotal: grandTotal > 0 ? (biayaFisik_526312 / grandTotal) * 100 : 0,
      pctFisikTerhadapTotalDel: grandTotal > 0 ? (biayaFisik_526312 / grandTotal) * 100 : 0,
      totalPendampingan,
      pctPendampinganNasional: grandTotalPendampingan > 0 ? (totalPendampingan / grandTotalPendampingan) * 100 : 0,
      pctPendampinganTerhadapTotalPendampingan: grandTotalPendampingan > 0 ? (totalPendampingan / grandTotalPendampingan) * 100 : 0,
      pctPendampinganDariTotal: grandTotal > 0 ? (totalPendampingan / grandTotal) * 100 : 0,
      pctPendampinganTerhadapTotalDel: grandTotal > 0 ? (totalPendampingan / grandTotal) * 100 : 0,
      grandTotal,
      pctGrandTotalNasional: grandTotalRKA > 0 ? (grandTotal / grandTotalRKA) * 100 : 0,
      pctGrandTotalTerhadapNasional: grandTotalRKA > 0 ? (grandTotal / grandTotalRKA) * 100 : 0,
      totalTPM,
      totalKorkab,
      totalPersonel: totalTPM + totalKorkab,
      rataPendampinganPerUnit: totalUnit > 0 ? Math.round(totalPendampingan / totalUnit) : 0,
      rataGrandTotalPerUnit: totalUnit > 0 ? Math.round(grandTotal / totalUnit) : 0
    };
  });

  // 8. Konsolidasi BAS Objects
  const konsolidasiBAS = [
    {
      code: '526312',
      name: 'Belanja Barang Karakteristik Bantuan Pemerintah (Bantuan Fisik)',
      postur: 'Postur 1 (Fisik)',
      components: ['Bantuan Fisik Bedah Rumah (Tier 20Jt, 25Jt, 40Jt)'],
      total: totalFisik_526312,
      percentage: grandTotalRKA > 0 ? (totalFisik_526312 / grandTotalRKA) * 100 : 0
    },
    {
      code: '522191',
      name: 'Belanja Jasa Lainnya (Pendampingan & Manajemen)',
      postur: 'Postur 2 (Non-Fisik)',
      components: ['Komp 1: Korkab/Korkot', 'Komp 2: TPM', 'Komp 6: Operasional TPM', 'Komp 12: Digitalisasi Dokumen', 'Komp 13: Video Best Practice'],
      total: totalJasa_522191,
      percentage: grandTotalRKA > 0 ? (totalJasa_522191 / grandTotalRKA) * 100 : 0
    },
    {
      code: '521211',
      name: 'Belanja Bahan & Atribut Kegiatan',
      postur: 'Postur 2 (Non-Fisik)',
      components: ['Komp 3: Konsumsi Rembuk Warga', 'Komp 4: Laporan Bulanan', 'Komp 5: Dokumen RAB & Gambar', 'Komp 8: Kit Pembekalan', 'Komp 15: Media Sosialisasi & Peneng'],
      total: totalBahan_521211,
      percentage: grandTotalRKA > 0 ? (totalBahan_521211 / grandTotalRKA) * 100 : 0
    },
    {
      code: '524111',
      name: 'Belanja Perjalanan Dinas Biasa (Verifikasi & Wasdal)',
      postur: 'Postur 2 (Non-Fisik)',
      components: ['Komp 9: Pendampingan Verifikasi', 'Komp 10: Wasdal Lapangan', 'Komp 11: Koordinasi Satker ke Pusat', 'Komp 14: Pendampingan APH'],
      total: totalPerjalanan_524111,
      percentage: grandTotalRKA > 0 ? (totalPerjalanan_524111 / grandTotalRKA) * 100 : 0
    },
    {
      code: '524119',
      name: 'Belanja Perjalanan Dinas Paket Meeting Luar Kota',
      postur: 'Postur 2 (Non-Fisik)',
      components: ['Komp 7: Paket Rapat Pembekalan TPM & Korkab (Fullboard 5 Hari)'],
      total: totalMeeting_524119,
      percentage: grandTotalRKA > 0 ? (totalMeeting_524119 / grandTotalRKA) * 100 : 0
    },
    {
      code: '522141',
      name: 'Belanja Sewa (Sewa Kendaraan PPK & Insidental)',
      postur: 'Postur 2 (Non-Fisik)',
      components: ['Komp 16A: Sewa Kendaraan Bulanan 56 PPK', 'Komp 16B: Sewa Kendaraan Insidental Lapangan'],
      total: totalSewa_522141,
      percentage: grandTotalRKA > 0 ? (totalSewa_522141 / grandTotalRKA) * 100 : 0
    }
  ];

  // 9. Komposisi Tier Bantuan Fisik (20 Jt, 25 Jt, 40 Jt)
  const unit20Jt_total = detailKabKota.filter(k => k.zone === 'Mudah').reduce((a, k) => a + (k.targetUnitFinal || 0), 0);
  const unit25Jt_total = detailKabKota.filter(k => k.zone === 'Sedang').reduce((a, k) => a + (k.targetUnitFinal || 0), 0);
  const unit40Jt_total = detailKabKota.filter(k => k.zone === 'Sulit').reduce((a, k) => a + (k.targetUnitFinal || 0), 0);

  const biaya20Jt_total = unit20Jt_total * params.rateFisikMatrix.Mudah;
  const biaya25Jt_total = unit25Jt_total * params.rateFisikMatrix.Sedang;
  const biaya40Jt_total = unit40Jt_total * params.rateFisikMatrix.Sulit;

  const komposisiFisikTier = {
    tier20Jt: {
      rate: params.rateFisikMatrix.Mudah,
      label: 'Rp 20 Juta (Zona Mudah / Reguler)',
      shortLabel: '20 Juta',
      zone: 'Mudah',
      unit: unit20Jt_total,
      unitPercent: totalUnitNasional > 0 ? (unit20Jt_total / totalUnitNasional) * 100 : 0,
      totalAnggaran: biaya20Jt_total,
      anggaranPercent: totalFisik_526312 > 0 ? (biaya20Jt_total / totalFisik_526312) * 100 : 0
    },
    tier25Jt: {
      rate: params.rateFisikMatrix.Sedang,
      label: 'Rp 25 Juta (Zona Sedang / Tertentu)',
      shortLabel: '25 Juta',
      zone: 'Sedang',
      unit: unit25Jt_total,
      unitPercent: totalUnitNasional > 0 ? (unit25Jt_total / totalUnitNasional) * 100 : 0,
      totalAnggaran: biaya25Jt_total,
      anggaranPercent: totalFisik_526312 > 0 ? (biaya25Jt_total / totalFisik_526312) * 100 : 0
    },
    tier40Jt: {
      rate: params.rateFisikMatrix.Sulit,
      label: 'Rp 40 Juta (Zona Sulit / Papua & 3T)',
      shortLabel: '40 Juta',
      zone: 'Sulit',
      unit: unit40Jt_total,
      unitPercent: totalUnitNasional > 0 ? (unit40Jt_total / totalUnitNasional) * 100 : 0,
      totalAnggaran: biaya40Jt_total,
      anggaranPercent: totalFisik_526312 > 0 ? (biaya40Jt_total / totalFisik_526312) * 100 : 0
    },
    totalUnit: totalUnitNasional,
    totalAnggaran: totalFisik_526312
  };

  const komposisiFisik = {
    tier20: {
      unit: unit20Jt_total,
      pctUnit: totalUnitNasional > 0 ? (unit20Jt_total / totalUnitNasional) * 100 : 0,
      biaya: biaya20Jt_total,
      pctBiaya: totalFisik_526312 > 0 ? (biaya20Jt_total / totalFisik_526312) * 100 : 0
    },
    tier25: {
      unit: unit25Jt_total,
      pctUnit: totalUnitNasional > 0 ? (unit25Jt_total / totalUnitNasional) * 100 : 0,
      biaya: biaya25Jt_total,
      pctBiaya: totalFisik_526312 > 0 ? (biaya25Jt_total / totalFisik_526312) * 100 : 0
    },
    tier40: {
      unit: unit40Jt_total,
      pctUnit: totalUnitNasional > 0 ? (unit40Jt_total / totalUnitNasional) * 100 : 0,
      biaya: biaya40Jt_total,
      pctBiaya: totalFisik_526312 > 0 ? (biaya40Jt_total / totalFisik_526312) * 100 : 0
    },
    totalUnit: totalUnitNasional,
    totalFisik: totalFisik_526312
  };

  // 10. Komposisi 16 Komponen Non-Fisik / Pendampingan Murni
  const sumKomp1 = breakdownSatker.reduce((a, s) => a + s.komp1_korkab, 0);
  const sumKomp2 = breakdownSatker.reduce((a, s) => a + s.komp2_tpm, 0);
  const sumKomp3 = breakdownSatker.reduce((a, s) => a + s.komp3_konsumsiRembuk, 0);
  const sumKomp4 = breakdownSatker.reduce((a, s) => a + s.komp4_laporanBulanan, 0);
  const sumKomp5 = breakdownSatker.reduce((a, s) => a + s.komp5_rabGambar, 0);
  const sumKomp6 = breakdownSatker.reduce((a, s) => a + s.komp6_operasionalTPM, 0);
  const sumKomp7 = breakdownSatker.reduce((a, s) => a + s.komp7_pembekalan, 0);
  const sumKomp8 = breakdownSatker.reduce((a, s) => a + s.komp8_kitAtribut, 0);
  const sumKomp9 = breakdownSatker.reduce((a, s) => a + s.komp9_verifikasi, 0);
  const sumKomp10 = breakdownSatker.reduce((a, s) => a + s.komp10_wasdal, 0);
  const sumKomp11 = breakdownSatker.reduce((a, s) => a + s.komp11_koordPusat, 0);
  const sumKomp12 = breakdownSatker.reduce((a, s) => a + s.komp12_digitalisasi, 0);
  const sumKomp13 = breakdownSatker.reduce((a, s) => a + s.komp13_videoBestPractice, 0);
  const sumKomp14 = breakdownSatker.reduce((a, s) => a + s.komp14_aph, 0);
  const sumKomp15 = breakdownSatker.reduce((a, s) => a + s.komp15_peneng, 0);
  const sumKomp16a = breakdownSatker.reduce((a, s) => a + s.komp16a_sewaPPK, 0);
  const sumKomp16b = breakdownSatker.reduce((a, s) => a + s.komp16b_sewaInsidental, 0);

  const komponen16List = [
    { no: 1, bas: '522191', name: 'Honorarium Tenaga Ahli Korkab/Korkot', total: sumKomp1, sbm: false, level: 'Kab/Kota' },
    { no: 2, bas: '522191', name: 'Honorarium Tenaga Pendamping Masyarakat (TPM)', total: sumKomp2, sbm: false, level: 'Kab/Kota' },
    { no: 3, bas: '521211', name: 'Konsumsi Rapat Rembuk Warga', total: sumKomp3, sbm: true, level: 'Kab/Kota' },
    { no: 4, bas: '521211', name: 'Penggandaan Laporan Bulanan TPM & Korkab', total: sumKomp4, sbm: false, level: 'Kab/Kota' },
    { no: 5, bas: '521211', name: 'Dokumen RAB & Gambar Rencana Teknis', total: sumKomp5, sbm: false, level: 'Kab/Kota' },
    { no: 6, bas: '522191', name: 'Operasional Rutin TPM (Support Cost)', total: sumKomp6, sbm: false, level: 'Kab/Kota' },
    { no: 7, bas: '524119', name: 'Paket Rapat Pembekalan TPM & Korkab (Fullboard 5 Hari)', total: sumKomp7, sbm: true, level: 'Provinsi' },
    { no: 8, bas: '521211', name: 'Kit Pembekalan & Atribut Personel Lapangan', total: sumKomp8, sbm: false, level: 'Kab/Kota' },
    { no: 9, bas: '524111', name: 'Perjalanan Dinas Verifikasi Penerima Bantuan Satker', total: sumKomp9, sbm: true, level: 'Kab/Kota' },
    { no: 10, bas: '524111', name: 'Perjalanan Dinas Pengawasan & Pengendalian (Wasdal)', total: sumKomp10, sbm: true, level: 'Kab/Kota' },
    { no: 11, bas: '524111', name: 'Koordinasi Satker ke Tingkat Pusat (Jakarta)', total: sumKomp11, sbm: true, level: 'Satker' },
    { no: 12, bas: '522191', name: 'Digitalisasi & Pengarsipan Dokumen Penyaluran', total: sumKomp12, sbm: false, level: 'Kab/Kota' },
    { no: 13, bas: '522191', name: 'Dokumentasi & Video Best Practice Penyaluran', total: sumKomp13, sbm: false, level: 'Provinsi' },
    { no: 14, bas: '524111', name: 'Pendampingan Aparat Penegak Hukum (APH)', total: sumKomp14, sbm: true, level: 'Kab/Kota' },
    { no: 15, bas: '521211', name: 'Media Sosialisasi & Peneng Identitas Rumah', total: sumKomp15, sbm: false, level: 'Kab/Kota' },
    { no: 16, bas: '522141', name: 'Sewa Kendaraan PPK (16A) & Insidental Lapangan (16B)', total: sumKomp16a + sumKomp16b, sbm: true, level: 'Provinsi & Kab' }
  ].map(k => ({
    ...k,
    rule: k.sbm ? 'Standar Biaya Masukan (SBM)' : 'Non-SBM (Indeks IKK)',
    percentage: grandTotalPendampingan > 0 ? (k.total / grandTotalPendampingan) * 100 : 0,
    perUnit: totalUnitNasional > 0 ? roundUpToThousand(k.total / totalUnitNasional) : 0,
    rataPerUnit: totalUnitNasional > 0 ? roundUpToThousand(k.total / totalUnitNasional) : 0
  }));

  const komposisi16Komponen = komponen16List;

  // 11. Rekapitulasi SDM Lapangan (Nasional)
  const totalKorkabNasional = breakdownSatker.reduce((a, s) => a + s.totalKorkab, 0);
  const totalTPMNasional = breakdownSatker.reduce((a, s) => a + s.totalTPM, 0);
  const totalPPKNasional = breakdownSatker.reduce((a, s) => a + s.totalPPK, 0);
  const totalKorkabOBNasional = breakdownSatker.reduce((a, s) => a + s.totalKorkabOB, 0);
  const totalTPMOBNasional = breakdownSatker.reduce((a, s) => a + s.totalTPMOB, 0);
  const totalBiayaSDMNasional = sumKomp1 + sumKomp2 + sumKomp6 + sumKomp7 + sumKomp8;

  const rekapitulasiSDM = {
    totalKorkab: totalKorkabNasional,
    totalTPM: totalTPMNasional,
    totalPPK: totalPPKNasional,
    totalPersonel: totalKorkabNasional + totalTPMNasional + totalPPKNasional,
    totalKorkabOB: totalKorkabOBNasional,
    totalTPMOB: totalTPMOBNasional,
    totalHonorKorkab: sumKomp1,
    totalHonorTPM: sumKomp2,
    totalOperasionalTPM: sumKomp6,
    totalPembekalan: sumKomp7,
    totalKitAtribut: sumKomp8,
    totalBiayaSDM: totalBiayaSDMNasional,
    persenSDMTerhadapPendampingan: grandTotalPendampingan > 0 ? (totalBiayaSDMNasional / grandTotalPendampingan) * 100 : 0
  };

  return {
    detailKabKota,
    breakdownProvinsi,
    rekapProvinsi: breakdownProvinsi,
    breakdownSatker,
    rekapSatker: breakdownSatker,
    breakdownWilayahKerja,
    rekapWilayahKerja: breakdownWilayahKerja,
    breakdownPulau,
    rekapPulau: breakdownPulau,
    breakdownDelineasi,
    rekapDelineasi: breakdownDelineasi,
    konsolidasiBAS,
    komposisiFisikTier,
    komposisiFisik,
    rekapTier: komposisiFisik,
    komponen16List,
    rekapKomponen: komponen16List,
    komposisi16Komponen,
    rekapitulasiSDM,
    summary: {
      totalIndikasiAwal: detailKabKota.reduce((acc, k) => acc + (k.indikasiAwal || 0), 0),
      totalUnitNasional,
      totalUnit: totalUnitNasional,
      unitDJKP: breakdownSatker.reduce((acc, s) => acc + s.unitDJKP, 0),
      unitDJPKT: breakdownSatker.reduce((acc, s) => acc + s.unitDJPKT, 0),
      unitDJPDS: breakdownSatker.reduce((acc, s) => acc + s.unitDJPDS, 0),
      totalPPK: totalPPKNasional,
      totalKorkab: totalKorkabNasional,
      totalTPM: totalTPMNasional,
      totalSDM: totalKorkabNasional + totalTPMNasional + totalPPKNasional,
      totalKorkab_OB: totalKorkabOBNasional,
      totalTPM_OB: totalTPMOBNasional,
      totalHonorKorkab: sumKomp1,
      totalHonorTPM: sumKomp2,
      totalOpsTPM: sumKomp6,
      totalPembekalan: sumKomp7,
      totalKitAtribut: sumKomp8,
      totalSDMBiaya: totalBiayaSDMNasional,
      totalFisik_526312,
      biayaFisik_526312: totalFisik_526312,
      grandTotalPendampingan,
      totalPendampingan: grandTotalPendampingan,
      grandTotalRKA,
      grandTotal: grandTotalRKA,
      rataPendampinganPerUnit,
      rataGrandTotalPerUnit
    }
  };
}


// ========================================================
// FILE: js/engine/exporter.js
// ========================================================
/**
 * MULTI-SHEET EXCEL (XLSX) EXPORT ENGINE
 * Menghasilkan buku kerja Excel (.xlsx) resmi dengan 9 lembar kerja terstruktur
 * siap cetak/lapor untuk penyusunan DIPA RKA-K/L Kementerian PKP.
 */
function exportToExcel(calculatedData, params = {}, sbmRates = {}) {
  if (typeof XLSX === 'undefined') {
    alert('Library SheetJS (XLSX) sedang dimuat, silakan coba beberapa saat lagi.');
    return;
  }

  if (!calculatedData || !calculatedData.summary) {
    alert('Data kalkulasi belum tersedia.');
    return;
  }

  const sbm = sbmRates || {};
  const par = params || {};
  const wb = XLSX.utils.book_new();

  // --- SHEET 1: REKAP BAS NASIONAL ---
  const basRows = [
    ['KEMENTERIAN PERUMAHAN DAN KAWASAN PERMUKIMAN (PKP)'],
    ['REKAPITULASI RKA-K/L PROGRAM BEDAH RUMAH TA 2027 BERDASARKAN BAGAN AKUN STANDAR (KEP-331/PB/2021)'],
    ['Target Nasional: ' + (calculatedData.summary.totalUnitNasional || 370000).toLocaleString('id-ID') + ' Unit | 38 Provinsi | 34 Satker DIPA | 56 PPK'],
    [],
    ['No', 'Kode BAS', 'Uraian Akun Belanja', 'Postur Anggaran', 'Komponen Terkait', 'Total Anggaran (Rp)', 'Proporsi (%)']
  ];

  (calculatedData.konsolidasiBAS || []).forEach((bas, idx) => {
    const code = bas.code || bas.kodeAkun || '';
    const name = bas.name || bas.namaAkun || '';
    const postur = bas.postur || 'Postur 2 (Non-Fisik)';
    const comps = Array.isArray(bas.components) ? bas.components.join('; ') : (bas.komponenTerkait || '-');
    const total = bas.total !== undefined ? bas.total : (bas.totalAnggaran || 0);
    const pct = bas.percentage !== undefined ? Number(bas.percentage.toFixed(2)) : 0;

    basRows.push([
      idx + 1,
      code,
      name,
      postur,
      comps,
      total,
      pct
    ]);
  });

  basRows.push([]);
  basRows.push(['', '', 'GRAND TOTAL RKA-K/L (FISIK + PENDAMPINGAN)', '', '', calculatedData.summary.grandTotalRKA || 0, 100.0]);
  basRows.push(['', '', 'TOTAL BANTUAN FISIK (POSTUR 1)', '', '', calculatedData.summary.totalFisik_526312 || 0, Number((((calculatedData.summary.totalFisik_526312 || 0) / (calculatedData.summary.grandTotalRKA || 1)) * 100).toFixed(2))]);
  basRows.push(['', '', 'TOTAL BIAYA PENDAMPINGAN (POSTUR 2)', '', '', calculatedData.summary.grandTotalPendampingan || 0, Number((((calculatedData.summary.grandTotalPendampingan || 0) / (calculatedData.summary.grandTotalRKA || 1)) * 100).toFixed(2))]);
  basRows.push(['', '', 'RATA-RATA PENDAMPINGAN PER UNIT', '', '', calculatedData.summary.rataPendampinganPerUnit || 0, '']);

  const wsBAS = XLSX.utils.aoa_to_sheet(basRows);
  XLSX.utils.book_append_sheet(wb, wsBAS, 'Rekap_BAS_Nasional');

  // --- SHEET 2: DIPA 34 SATKER ---
  const satkerRows = [
    ['RINCIAN RKA-K/L 34 SATKER DIPA PKP (TERKONSOLIDASI)'],
    ['Target Nasional: 370.000 Unit Rumah'],
    [],
    [
      'No', 'Kode Satker', 'Nama Satker DIPA', 'Wilayah Kerja', 'Pulau', 'Cakupan Provinsi',
      'DJKP (Pesisir)', 'DJPKT (Perkotaan)', 'DJPDS (Perdesaan)', 'Total Unit', 'PPK',
      'Fisik (526312)',
      '1. Korkab (522191)', '2. TPM (522191)', '3. Konsumsi Rembuk (521211)', '4. Lap Bulanan (521211)', '5. Dok RAB (521211)',
      '6. Operasional TPM (522191)', '7. Pembekalan (524119)', '8. Kit Atribut (521211)', '9. Verifikasi (524111)', '10. Wasdal (524111)',
      '11. Koord Pusat (524111)', '12. Digitalisasi (522191)', '13. Video (522191)', '14. APH (524111)', '15. Peneng (521211)',
      '16A. Sewa PPK (522141)', '16B. Sewa Insidental (522141)',
      'Total Pendampingan', 'Grand Total DIPA'
    ]
  ];

  (calculatedData.breakdownSatker || []).forEach((s, idx) => {
    const provStr = Array.isArray(s.provinces) ? s.provinces.map(p => p.name || p).join(', ') : '';
    satkerRows.push([
      idx + 1,
      s.id,
      s.name,
      s.wilayahKerja || '',
      s.pulau || '',
      provStr,
      s.unitDJKP || 0,
      s.unitDJPKT || 0,
      s.unitDJPDS || 0,
      s.totalUnit || 0,
      s.totalPPK || 0,
      s.biayaFisik_526312 || 0,
      s.komp1_korkab || 0,
      s.komp2_tpm || 0,
      s.komp3_konsumsiRembuk || 0,
      s.komp4_laporanBulanan || 0,
      s.komp5_rabGambar || 0,
      s.komp6_operasionalTPM || 0,
      s.komp7_pembekalan || 0,
      s.komp8_kitAtribut || 0,
      s.komp9_verifikasi || 0,
      s.komp10_wasdal || 0,
      s.komp11_koordPusat || 0,
      s.komp12_digitalisasi || 0,
      s.komp13_videoBestPractice || 0,
      s.komp14_aph || 0,
      s.komp15_peneng || 0,
      s.komp16a_sewaPPK || 0,
      s.komp16b_sewaInsidental || 0,
      s.totalPendampingan || 0,
      s.grandTotal || 0
    ]);
  });

  const wsSatker = XLSX.utils.aoa_to_sheet(satkerRows);
  XLSX.utils.book_append_sheet(wb, wsSatker, 'DIPA_34_Satker');

  // --- SHEET 3: BREAKDOWN 38 PROVINSI ---
  const provRows = [
    ['RINCIAN ALOKASI DAN ANGGARAN 38 PROVINSI ADMINISTRATIF'],
    [],
    [
      'No', 'ID Prov', 'Nama Provinsi', 'Satker Induk', 'Wilayah Kerja', 'Pulau', 'IKK Prov (BPS 2025)', 'Zona',
      'DJKP (Pesisir)', 'DJPKT (Perkotaan)', 'DJPDS (Perdesaan)', 'Total Unit', 'PPK',
      'Fisik (526312)',
      '1. Korkab', '2. TPM', '3. Konsumsi', '4. Lap Bulanan', '5. Dok RAB', '6. Support TPM', '7. Pembekalan', '8. Kit Atribut',
      '9. Verifikasi', '10. Wasdal', '12. Digitalisasi', '13. Video Prov', '14. APH', '15. Peneng', '16A. Sewa PPK', '16B. Sewa Insidental',
      'Total Pendampingan', 'Grand Total Provinsi'
    ]
  ];

  (calculatedData.breakdownProvinsi || []).forEach((p, idx) => {
    provRows.push([
      idx + 1,
      p.id,
      p.name,
      p.satkerName || p.satkerId || '',
      p.wilayahKerja || '',
      p.pulau || '',
      p.ikk || 100,
      p.defaultZone || 'Mudah',
      p.unitDJKP || 0,
      p.unitDJPKT || 0,
      p.unitDJPDS || 0,
      p.totalUnit || 0,
      p.ppkCount || 0,
      p.biayaFisik_526312 || 0,
      p.komp1_korkab || 0,
      p.komp2_tpm || 0,
      p.komp3_konsumsiRembuk || 0,
      p.komp4_laporanBulanan || 0,
      p.komp5_rabGambar || 0,
      p.komp6_operasionalTPM || 0,
      p.komp7_pembekalan || 0,
      p.komp8_kitAtribut || 0,
      p.komp9_verifikasi || 0,
      p.komp10_wasdal || 0,
      p.komp12_digitalisasi || 0,
      p.komp13_videoBestPractice || 0,
      p.komp14_aph || 0,
      p.komp15_peneng || 0,
      p.komp16a_sewaPPK || 0,
      p.komp16b_sewaInsidental || 0,
      p.totalPendampingan || 0,
      p.grandTotal || 0
    ]);
  });

  const wsProv = XLSX.utils.aoa_to_sheet(provRows);
  XLSX.utils.book_append_sheet(wb, wsProv, 'Rincian_38_Provinsi');

  // --- SHEET 4: DETAIL 514 KAB/KOTA ---
  const kabRows = [
    ['MASTER DATA KANVAS 514 KABUPATEN/KOTA TERKONSOLIDASI'],
    [],
    [
      'No', 'Kode Kemendagri', 'Kabupaten / Kota', 'Provinsi', 'Satker ID', 'Wilayah Kerja', 'Pulau',
      'Karakteristik', 'Jumlah Desa Perkotaan', 'Jumlah Desa Perdesaan', 'Total Desa',
      'Delineasi Ditjen', 'Zona Kemahalan', 'Indikasi Awal', 'Target Unit Final',
      'Jumlah Korkab', 'Jumlah TPM', 'IKK BPS 2025',
      'Anggaran Fisik (526312)', 'Total Pendampingan', 'Grand Total (Rp)'
    ]
  ];

  (calculatedData.detailKabKota || []).forEach((k, idx) => {
    kabRows.push([
      k.no || (idx + 1),
      k.id,
      k.fullName || k.name,
      k.provName,
      k.satkerId,
      k.wilayahKerja || '',
      k.pulau || '',
      k.karakteristik || 'Perdesaan',
      k.desaPerkotaan || 0,
      k.desaPerdesaan || 0,
      k.totalDesa || ((k.desaPerkotaan || 0) + (k.desaPerdesaan || 0)),
      k.delineasi,
      k.zone,
      k.indikasiAwal,
      k.targetUnitFinal,
      k.korkabCount || 0,
      k.tpmCount || 0,
      k.ikk,
      k.biayaFisik_526312,
      k.totalPendampingan,
      k.grandTotal
    ]);
  });

  const wsKab = XLSX.utils.aoa_to_sheet(kabRows);
  XLSX.utils.book_append_sheet(wb, wsKab, 'Detail_514_KabKota');

  // --- SHEET 5: PARAMETER & ASUMSI ---
  const paramRows = [
    ['PARAMETER KONTROL & ASUMSI PERHITUNGAN RKA-K/L BEDAH RUMAH PKP'],
    [],
    ['Parameter', 'Nilai / Setting', 'Keterangan'],
    ['Target DJKP', par.targetDJKP || 50000, 'Unit Pesisir (Ditjen Kawasan Permukiman)'],
    ['Target DJPKT', par.targetDJPKT || 120000, 'Unit Perkotaan (Ditjen Perumahan Perkotaan)'],
    ['Target DJPDS', par.targetDJPDS || 200000, 'Unit Perdesaan (Ditjen Perumahan Perdesaan)'],
    ['Total Target Nasional', 370000, 'Unit Rumah'],
    ['Masa Penugasan TPM', (par.masaTPM || 5) + ' Bulan', 'PAR_MASA_TPM'],
    ['Masa Penugasan Korkab', (par.masaKorkab || 10) + ' Bulan', 'PAR_MASA_KORKAB'],
    ['Komposisi Rasio TPM', `2 TPM : ${par.rasioTPMUnit || 40} Unit`, 'Rasio Tenaga Pendamping Lapangan'],
    ['Metode Standar Gaji SDM', par.gajiMethod === 'manual' ? 'Opsi 2: Input Manual (Nominal Tetap)' : 'Opsi 1: Standar INKINDO (x 55% x IKK)', 'Metode Perhitungan Honor SDM'],
    ['Honor INKINDO Sub-Prof (Base)', par.rateInkindoSubProf || 16500000, 'Faktor 55% x IKK (Korkab)'],
    ['Honor INKINDO Asisten (Base)', par.rateInkindoAsisten || 11500000, 'Faktor 55% x IKK (TPM)'],
    ['Gaji Manual Korkab', par.gajiManualKorkab || 7000000, 'Rp per Bulan (Jika Opsi 2 Aktif)'],
    ['Gaji Manual TPM', par.gajiManualTPM || 6000000, 'Rp per Bulan (Jika Opsi 2 Aktif)'],
    ['Gaji Manual Gunakan IKK', par.gajiManualUseIKK ? 'Ya (x IKK/100)' : 'Tidak (Nominal Tetap/Flat)', 'Penyesuaian Kemahalan Wilayah'],
    ['Rate Fisik Base - Zona Mudah', (par.rateFisikMatrix || {}).Mudah || 20000000, 'Rp 20.000.000 (No IKK)'],
    ['Rate Fisik Base - Zona Sedang', (par.rateFisikMatrix || {}).Sedang || 25000000, 'Rp 25.000.000 (No IKK)'],
    ['Rate Fisik Base - Zona Sulit', (par.rateFisikMatrix || {}).Sulit || 40000000, 'Rp 40.000.000 (No IKK)'],
    ['Support Cost TPM - Zona Mudah', (par.supportTPMMatrix || {}).Mudah || 500000, 'Rp per TPM/bln x IKK'],
    ['Support Cost TPM - Zona Sedang', (par.supportTPMMatrix || {}).Sedang || 1000000, 'Rp per TPM/bln x IKK'],
    ['Support Cost TPM - Zona Sulit', (par.supportTPMMatrix || {}).Sulit || 1500000, 'Rp per TPM/bln x IKK'],
    ['Rate Digitalisasi Dokumen', par.rateDigitalisasi || 25000, 'Rp per unit x IKK'],
    ['Rate Media & Peneng Identitas', par.ratePeneng || 50000, 'Rp per unit x IKK'],
    ['Rate Video Best Practice', par.rateVideoProv || 30000000, 'Rp per paket provinsi x IKK Prov'],
    ['SBM Sewa Kendaraan PPK', sbm.sewaMobilPPKBulanan || sbm.sewaMobilPPK || 9000000, 'Rp per bulan (56 PPK)'],
    ['SBM Sewa Kendaraan Insidental', sbm.sewaMobilHarianInsidental || sbm.sewaMobilInsidental || 850000, 'Rp per hari kegiatan']
  ];

  const wsParam = XLSX.utils.aoa_to_sheet(paramRows);
  XLSX.utils.book_append_sheet(wb, wsParam, 'Parameter_Asumsi');

  // Trigger Download
  const timestamp = new Date().toISOString().slice(0, 10);
  const fileName = `RKA_Bedah_Rumah_PKP_370k_Unit_${timestamp}.xlsx`;
  XLSX.writeFile(wb, fileName);
}


// ========================================================
// FILE: js/services/supabaseClient.js
// ========================================================
/**
 * Supabase Client Initialization & Data Provider
 * Supports real-time database sync with fallback to local JS datasets.
 */

// Reads Supabase config from window environment or localStorage
const SUPABASE_URL = (typeof window !== "undefined" && window.ENV_SUPABASE_URL)
  ? window.ENV_SUPABASE_URL
  : "https://your-project.supabase.co";
const SUPABASE_ANON_KEY = (typeof window !== "undefined" && window.ENV_SUPABASE_ANON_KEY)
  ? window.ENV_SUPABASE_ANON_KEY
  : "";

let supabaseInstance = null;
function getSupabase() {
  if (!supabaseInstance && typeof window !== "undefined" && window.supabase && SUPABASE_ANON_KEY && SUPABASE_ANON_KEY !== "") {
    try {
      supabaseInstance = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.log("✓ Supabase Client initialized successfully!");
    } catch (e) {
      console.warn("⚠️ Failed to initialize Supabase client:", e);
    }
  }
  return supabaseInstance;
}
async function fetchMasterDataFromSupabase() {
  const client = getSupabase();
  if (!client) {
    console.log("ℹ️ Supabase credentials not configured yet. Using local JS datasets.");
    return null;
  }

  try {
    const [resProvs, resSatker, resKabKota, resSettings] = await Promise.all([
      client.from("provinces").select("*").order("id"),
      client.from("satker").select("*").order("id"),
      client.from("kabkota").select("*").order("no_index"),
      client.from("app_settings").select("*")
    ]);

    if (resKabKota.error || resProvs.error) {
      console.warn("⚠️ Supabase query error, falling back to local JS:", resKabKota.error || resProvs.error);
      return null;
    }

    // Convert snake_case DB records back to camelCase App objects
    const kabKotaList = resKabKota.data.map(k => ({
      id: k.id,
      no: k.no_index,
      name: k.name,
      fullName: k.full_name,
      provId: k.prov_id,
      provName: k.prov_name,
      wilayahKerja: k.wilayah_kerja,
      pulau: k.pulau,
      delineasi: k.delineasi,
      zone: k.zone,
      ikk: parseFloat(k.ikk),
      indikasiAwal: k.indikasi_awal,
      targetUnitFinal: k.target_unit_final,
      satkerId: k.satker_id,
      satkerName: k.satker_name,
      ppkCount: k.ppk_count
    }));

    const settingsMap = {};
    (resSettings.data || []).forEach(s => {
      settingsMap[s.key] = s.value;
    });

    console.log(`✓ Loaded ${kabKotaList.length} Kab/Kota records live from Supabase PostgreSQL!`);
    return {
      kabKotaList,
      provinces: resProvs.data,
      satker: resSatker.data,
      sbmRates: settingsMap["sbm_rates"],
      defaultParams: settingsMap["default_params"],
      defaultTargets: settingsMap["default_targets"]
    };
  } catch (err) {
    console.warn("⚠️ Network/Supabase fetch exception, using local JS fallback:", err);
    return null;
  }
}


// ========================================================
// FILE: js/app.js
// ========================================================
/**
 * ============================================================================
 * MAIN APP CONTROLLER - RKA BEDAH RUMAH DASHBOARD (V3.3 CORRECTION)
 * Dynamic Sidebar Control Panel (Authentic Prompt Non-SBM Rates) & 9 Dynamic Charts
 * ============================================================================
 */







// Global Reactive State
const state = {
  params: JSON.parse(JSON.stringify(DEFAULT_PARAMS)),
  targets: JSON.parse(JSON.stringify(DEFAULT_TARGETS)),
  sbmRates: JSON.parse(JSON.stringify(SBM_RATES)),
  kabKotaData: JSON.parse(JSON.stringify(MASTER_514_KABKOTA)),
  customizedKabIds: new Set(),
  simCustomIndikasiMap: new Map(),
  expandedProvs: new Set(),
  expandAll: false,
  activeTab: "tab-kabkota",
  globalDelineasiFilter: "",
  kabkotaGroupMode: "flat",
  komposisiSubTab: "fisik",
  simMode: "agregat",
  rincianView: "provinsi",
  prov: { search: "", wilayah: "", pulau: "", zone: "", sortCol: "grandTotal", sortDir: "desc" },
  satker: { search: "", wilayah: "", pulau: "", sortCol: "grandTotal", sortDir: "desc" },
  sdm: { viewMode: "kabkota", search: "", wilayah: "", pulau: "", delineasi: "", sortCol: "totalTPM", sortDir: "desc" },
  tier: { search: "", tierSelect: "", wilayah: "", sortCol: "totalUnit", sortDir: "desc" },
  kabkota: { search: "", wilayah: "", pulau: "", delineasi: "", zone: "", sortCol: "no", sortDir: "asc" },
  nonfisik: {
    viewMode: "tree",
    search: "",
    satkerId: "",
    delineasi: "",
    defaultFullyExpanded: true,
    collapsedSatkers: new Set(),
    collapsedAccounts: new Set(),
    expandedSatkers: new Set(),
    expandedAccounts: new Set()
  },
  bas: { provId: "", satkerId: "" },
  charts: {
    pulauStacked: null,
    tierDoughnut: null,
    tierPie: null,
    tierBar: null,
    nonfisikKomp: null,
    makroPostur: null,
    makroWilayah: null,
    basPie: null,
    satkerBar: null
  }
};

let currentCalculatedData = null;

// ============================================================================
// INITIALIZATION
// ============================================================================
function initApp() {
  populateFilterDropdowns();
  syncSidebarInputsFromState();
  initEventListeners();
  initSortHeaders();
  recalculateAndRender();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// Synchronize Sidebar Input Controls with state.params
function syncSidebarInputsFromState() {
  const p = state.params;
  const setVal = (id, val) => { const el = document.getElementById(id); if (el && val !== undefined) el.value = val; };

  setVal("slider-rasio-tpm", p.rasioTPMUnit || p.rasioTPM || 40);
  setVal("num-rasio-tpm", p.rasioTPMUnit || p.rasioTPM || 40);
  setVal("slider-masa-tpm", p.masaTPM || p.durasiBulanTPM || 5);
  setVal("num-masa-tpm", p.masaTPM || p.durasiBulanTPM || 5);
  setVal("slider-masa-korkab", p.masaKorkab || p.durasiBulanKorkab || 10);
  setVal("num-masa-korkab", p.masaKorkab || p.durasiBulanKorkab || 10);

  setVal("slider-faktor-inkindo", Math.round((p.inkindoFactor || p.faktorInkindo || 0.55) * 100));
  setVal("num-faktor-inkindo", Math.round((p.inkindoFactor || p.faktorInkindo || 0.55) * 100));

  setVal("num-gaji-manual-tpm", p.gajiManualTPM || p.manualGajiTPM || 6000000);
  setVal("num-gaji-manual-korkab", p.gajiManualKorkab || p.manualGajiKorkab || 7000000);

  const chkIkk = document.getElementById("chk-gaji-manual-ikk");
  if (chkIkk) chkIkk.checked = p.gajiManualUseIKK !== undefined ? p.gajiManualUseIKK : true;

  // Rate Fisik Matrix
  if (p.rateFisikMatrix) {
    setVal("num-rate-fisik-mudah", p.rateFisikMatrix.Mudah || 20000000);
    setVal("num-rate-fisik-sedang", p.rateFisikMatrix.Sedang || 25000000);
    setVal("num-rate-fisik-sulit", p.rateFisikMatrix.Sulit || 40000000);
  }

  // Support Cost Matrix TPM
  if (p.supportTPMMatrix) {
    setVal("num-support-tpm-mudah", p.supportTPMMatrix.Mudah || 500000);
    setVal("num-support-tpm-sedang", p.supportTPMMatrix.Sedang || 1000000);
    setVal("num-support-tpm-sulit", p.supportTPMMatrix.Sulit || 1500000);
  }

  // Authentic Non-SBM Rates from Prompt
  setVal("num-rate-kit-atribut", p.rateKitAtribut || p.biayaAtributPersonel || 250000);
  setVal("num-rate-laporan", p.rateLaporanBulanan || 75000);
  setVal("num-rate-rab", p.rateRAB || 25000);
  setVal("num-rate-digitalisasi", p.rateDigitalisasi || 25000);
  setVal("num-rate-peneng", p.ratePeneng || 50000);
  setVal("num-rate-video-prov", p.rateVideoProv || 30000000);
  setVal("select-frekuensi-rembuk", p.frekuensiRembukWarga || p.frekuensiRembuk || 3);

  // Sync Ratio Preset Buttons
  const activeRatio = p.rasioTPMUnit || p.rasioTPM || 40;
  document.querySelectorAll(".ratio-preset-btn").forEach(b => {
    const r = parseInt(b.getAttribute("data-ratio"));
    b.classList.toggle("active", r === activeRatio);
  });
}

// ============================================================================
// POPULATE DROPDOWNS DYNAMICALLY
// ============================================================================
function populateFilterDropdowns() {
  const pulauSet = new Set(MASTER_PROVINCES.map(p => p.pulau));
  const pulauList = Array.from(pulauSet).sort();

  const populateSelect = (selectId, items, defaultLabel) => {
    const el = document.getElementById(selectId);
    if (!el) return;
    el.innerHTML = `<option value="">${defaultLabel}</option>` +
      items.map(item => `<option value="${item}">${item}</option>`).join("");
  };

  populateSelect("filter-pulau", pulauList, "Semua Pulau");
  populateSelect("filter-sdm-pulau", pulauList, "Semua Pulau");
  populateSelect("filter-rincian-pulau", pulauList, "Semua Pulau");

  const wilayahList = ["Wilayah I", "Wilayah II", "Wilayah III"];
  populateSelect("filter-sdm-wilayah", wilayahList, "Semua Wilayah");
  populateSelect("filter-rincian-wilayah", wilayahList, "Semua Wilayah");

  const zoneList = ["Mudah", "Sedang", "Sulit"];
  populateSelect("filter-rincian-zone", zoneList, "Semua Zona");

  // BAS Tab Dropdowns
  const basProvSelect = document.getElementById("filter-bas-provinsi");
  if (basProvSelect) {
    const provsSorted = [...MASTER_PROVINCES].sort((a, b) => a.name.localeCompare(b.name, "id"));
    basProvSelect.innerHTML = `<option value="">Semua Provinsi (Nasional)</option>` +
      provsSorted.map(p => `<option value="${p.id}">${p.name}</option>`).join("");
  }

  const basSatkerSelect = document.getElementById("filter-bas-satker");
  if (basSatkerSelect) {
    const satkerSorted = [...MASTER_SATKER].sort((a, b) => a.name.localeCompare(b.name, "id"));
    basSatkerSelect.innerHTML = `<option value="">Semua Satker</option>` +
      satkerSorted.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
  }
}

// ============================================================================
// CORE RECALCULATION & RENDER PIPELINE
// ============================================================================
function recalculateAndRender() {
  // 1. Mode Simulator Indikasi Handling
  let kabDataForCalc = state.simCustomIndikasiMap.size > 0
    ? state.kabKotaData.map(k => state.simCustomIndikasiMap.has(k.id) ? { ...k, indikasiAwal: state.simCustomIndikasiMap.get(k.id) } : k)
    : state.kabKotaData;

  // 2. Distribute Units with Hare-Niemeyer Algorithm
  let allocatedKabKota = distributeUnits(kabDataForCalc, state.targets);

  // 3. Mode Master 514 Direct Target Override Handling (Floating Sum)
  if (state.customizedKabIds.size > 0) {
    allocatedKabKota = allocatedKabKota.map(k => {
      const orig = state.kabKotaData.find(o => o.id === k.id);
      if (orig && orig._targetFinalOverride !== undefined) {
        return { ...k, targetUnitFinal: orig._targetFinalOverride };
      }
      return k;
    });
  }

  // 4. Calculate Complete RKA (Fisik, 16 Komponen, BAS, Aggregations)
  currentCalculatedData = calculateAllRKA(allocatedKabKota, state.params, state.sbmRates);

  // 5. Render All Components
  renderKPIs(currentCalculatedData.summary);
  renderDelineasiShortcuts(currentCalculatedData);
  renderDashboardCharts(currentCalculatedData);
  renderSDMPulauCards(currentCalculatedData);
  renderTabKabKota(currentCalculatedData.detailKabKota);
  renderTabKomposisi(currentCalculatedData);
  renderTabBAS(currentCalculatedData.konsolidasiBAS, currentCalculatedData.summary);
  renderTabSimulator(currentCalculatedData);
  renderTabSDM(currentCalculatedData);
  renderTabRincian(currentCalculatedData);
  updateSimTotalDisplay();
}

// ============================================================================
// UTILITIES
// ============================================================================
function sortData(list, sortCol, sortDir) {
  if (!sortCol) return list;
  return [...list].sort((a, b) => {
    let valA = a[sortCol] !== undefined ? a[sortCol] : "";
    let valB = b[sortCol] !== undefined ? b[sortCol] : "";
    if (typeof valA === "string") return sortDir === "asc" ? valA.localeCompare(valB, "id") : valB.localeCompare(valA, "id");
    return sortDir === "asc" ? (valA - valB) : (valB - valA);
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast-notif");
  const text = document.getElementById("toast-text");
  if (!toast || !text) return;
  text.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

function updateSimTotalDisplay() {
  const display = document.getElementById("sim-total-display");
  const locked = document.getElementById("sim-total-locked");
  const sidebarUnit = document.getElementById("sidebar-total-unit");
  const totalStr = formatNumber(state.targets.total) + " Unit";
  if (display) display.textContent = formatNumber(state.targets.total);
  if (locked) locked.textContent = totalStr;
  if (sidebarUnit) {
    const actualSum = currentCalculatedData ? currentCalculatedData.summary.totalUnit : state.targets.total;
    sidebarUnit.textContent = formatNumber(actualSum) + " Unit" + (state.customizedKabIds.size > 0 ? " (Custom)" : "");
  }
}

function renderFilterSummaryBanner(elementId, filteredCount, totalCount, totals) {
  const container = document.getElementById(elementId);
  if (!container) return;
  const isFiltered = filteredCount < totalCount;
  let html = `<div class="filter-summary-left">`;
  html += `<span class="filter-stat-pill" style="${isFiltered ? "border-color:#38bdf8;background:rgba(14,165,233,0.15);" : ""}">${isFiltered ? `<b>${filteredCount}</b> dari ${totalCount}` : `Semua <b>${totalCount}</b>`}</span>`;
  if (totals.indikasiAwal !== undefined) {
    html += `<span class="filter-stat-pill" style="color:#94a3b8;">Indikasi Awal: <strong>${formatNumber(totals.indikasiAwal)}</strong></span>`;
  }
  html += `<span class="filter-stat-pill">Target Final: <strong style="color:#38bdf8;">${formatNumber(totals.totalUnit || 0)}</strong></span>`;
  html += `<span class="filter-stat-pill">Fisik: <strong>${formatRupiahCompact(totals.biayaFisik || totals.biayaFisik_526312 || 0)}</strong></span>`;
  html += `<span class="filter-stat-pill">Pendampingan: <strong>${formatRupiahCompact(totals.totalPendampingan || totals.grandTotalPendampingan || 0)}</strong></span>`;
  html += `<span class="filter-stat-pill" style="border-color:#10b981;">Grand Total: <strong style="color:#34d399;">${formatRupiahCompact(totals.grandTotal || totals.grandTotalRKA || 0)}</strong></span>`;
  html += `</div>`;
  container.innerHTML = html;
}

// ============================================================================
// EXECUTIVE DASHBOARD: SLICER & KPIS
// ============================================================================
function renderKPIs(summary) {
  const kpiGrandTotal = document.getElementById("kpi-grand-total");
  const kpiFisikTotal = document.getElementById("kpi-fisik-total");
  const kpiFisikPct = document.getElementById("kpi-fisik-pct");
  const kpiPendampinganTotal = document.getElementById("kpi-pendampingan-total");
  const kpiPendampinganPct = document.getElementById("kpi-pendampingan-pct");
  const kpiPersonelTotal = document.getElementById("kpi-personel-total");
  const kpiPersonelDetail = document.getElementById("kpi-personel-detail");
  const kpiPerUnit = document.getElementById("kpi-per-unit");

  let grandTotal, totalFisik, totalPend, totalUnit, totalKorkab, totalTPM, totalPPK;

  const activeDel = state.globalDelineasiFilter;
  if (activeDel && currentCalculatedData && currentCalculatedData.detailKabKota) {
    const list = currentCalculatedData.detailKabKota.filter(k => k.delineasi === activeDel);
    totalUnit = list.reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);
    totalFisik = list.reduce((acc, k) => acc + (k.biayaFisik_526312 || 0), 0);
    totalPend = list.reduce((acc, k) => acc + (k.totalPendampingan || 0), 0);
    grandTotal = totalFisik + totalPend;
    totalKorkab = list.reduce((acc, k) => acc + (k.korkabCount || 0), 0);
    totalTPM = list.reduce((acc, k) => acc + (k.tpmCount || 0), 0);
    const provSet = new Set(list.map(k => k.provId));
    totalPPK = Math.round(56 * (provSet.size / 38));
  } else {
    grandTotal = summary.grandTotalRKA || summary.grandTotal || 0;
    totalFisik = summary.totalFisik_526312 || summary.biayaFisik_526312 || 0;
    totalPend = summary.grandTotalPendampingan || summary.totalPendampingan || 0;
    totalUnit = summary.totalUnitNasional || summary.totalUnit || 370000;
    totalKorkab = summary.totalKorkab || 0;
    totalTPM = summary.totalTPM || 0;
    totalPPK = summary.totalPPK || 56;
  }

  const totalPersonel = totalKorkab + totalTPM + totalPPK;

  if (kpiGrandTotal) kpiGrandTotal.textContent = formatRupiahCompact(grandTotal);
  if (kpiFisikTotal) kpiFisikTotal.textContent = formatRupiahCompact(totalFisik);
  if (kpiFisikPct) kpiFisikPct.textContent = formatPercent(grandTotal > 0 ? (totalFisik / grandTotal) * 100 : 0) + " dari " + (activeDel ? activeDel : "Grand Total");
  if (kpiPendampinganTotal) kpiPendampinganTotal.textContent = formatRupiahCompact(totalPend);
  if (kpiPendampinganPct) kpiPendampinganPct.textContent = formatPercent(grandTotal > 0 ? (totalPend / grandTotal) * 100 : 0) + " dari " + (activeDel ? activeDel : "Grand Total");
  if (kpiPersonelTotal) kpiPersonelTotal.textContent = formatNumber(totalPersonel) + " Org";
  if (kpiPersonelDetail) kpiPersonelDetail.textContent = `${formatNumber(totalKorkab)} Korkab | ${formatNumber(totalTPM)} TPM | ${totalPPK} PPK`;
  if (kpiPerUnit) {
    const avgPend = totalUnit > 0 ? (totalPend / totalUnit) : 0;
    kpiPerUnit.textContent = `Rata-rata Pendampingan/Unit: ${formatRupiah(avgPend)}`;
  }
}

function renderDelineasiShortcuts(data) {
  const container = document.getElementById("del-cards-grid");
  if (!container) return;

  const cardsData = [
    { key: "DJKP", name: "🌊 DJKP (Pesisir)", colorClass: "badge-djkp" },
    { key: "DJPKT", name: "🏙️ DJPKT (Perkotaan)", colorClass: "badge-djpkt" },
    { key: "DJPDS", name: "🌾 DJPDS (Perdesaan)", colorClass: "badge-djpds" }
  ];

  let html = "";
  cardsData.forEach(c => {
    const list = data.detailKabKota.filter(k => k.delineasi === c.key);
    const count = list.length;
    const indikasi = list.reduce((acc, k) => acc + (k.indikasiAwal || 0), 0);
    const unit = list.reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);
    const fisik = list.reduce((acc, k) => acc + (k.biayaFisik_526312 || 0), 0);
    const pendampingan = list.reduce((acc, k) => acc + (k.totalPendampingan || 0), 0);
    const tpm = list.reduce((acc, k) => acc + (k.tpmCount || 0), 0);
    const korkab = list.reduce((acc, k) => acc + (k.korkabCount || 0), 0);

    html += `
      <div class="del-card ${c.colorClass} ${state.globalDelineasiFilter === c.key ? 'active' : ''}">
        <div class="del-card-title">${c.name}</div>
        <div class="del-card-val">${formatNumber(unit)} Unit</div>
        <div class="del-card-sub">${count} Kab/Kota | Indikasi: ${formatNumber(indikasi)}</div>
        <div class="del-card-pagu">Fisik: <strong>${formatRupiahCompact(fisik)}</strong> | Pendampingan: <strong>${formatRupiahCompact(pendampingan)}</strong></div>
        <div class="del-card-sdm">SDM: <strong>${formatNumber(korkab)}</strong> Korkab &bull; <strong>${formatNumber(tpm)}</strong> TPM</div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ============================================================================
// EXECUTIVE DASHBOARD: CHARTS & SDM CARDS
// ============================================================================
function renderDashboardCharts(data) {
  if (typeof Chart === "undefined" || !data || !data.detailKabKota) return;

  const activeDel = state.globalDelineasiFilter;
  const filteredKab = activeDel
    ? data.detailKabKota.filter(k => k.delineasi === activeDel)
    : data.detailKabKota;

  // 1. Stacked Compound Bar Chart per Pulau
  const ctxPulau = document.getElementById("chart-pulau-stacked");
  if (ctxPulau) {
    const islandKeys = ["Sumatera", "Kalimantan", "Jawa", "Bali-Nusa Tenggara", "Sulawesi", "Maluku", "Papua"];
    const islandLabels = ["Sumatera", "Kalimantan", "Jawa", "Bali - Nusa Tenggara", "Sulawesi", "Maluku", "Papua"];
    
    const dataFisik = islandKeys.map(isl => {
      return filteredKab.filter(k => k.pulau === isl).reduce((sum, k) => sum + (k.biayaFisik_526312 || 0) / 1e9, 0);
    });

    const dataPendampingan = islandKeys.map(isl => {
      return filteredKab.filter(k => k.pulau === isl).reduce((sum, k) => sum + (k.totalPendampingan || 0) / 1e9, 0);
    });

    if (state.charts.pulauStacked) state.charts.pulauStacked.destroy();

    state.charts.pulauStacked = new Chart(ctxPulau, {
      type: "bar",
      data: {
        labels: islandLabels,
        datasets: [
          {
            label: "Biaya Fisik (Miliar Rp)",
            data: dataFisik,
            backgroundColor: "#0ea5e9",
            borderRadius: 4
          },
          {
            label: "Biaya Pendampingan (Miliar Rp)",
            data: dataPendampingan,
            backgroundColor: "#f59e0b",
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { stacked: true, grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#94a3b8", font: { size: 10 } } },
          y: { stacked: true, grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#94a3b8", font: { size: 10 } } }
        },
        plugins: {
          legend: { labels: { color: "#f8fafc", font: { size: 11, weight: "bold" } } },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.dataset.label}: Rp ${formatNumber(Math.round(ctx.raw))} Miliar`
            }
          }
        }
      }
    });
  }

  // 2. Pie / Doughnut Chart: Tier 20Jt, 25Jt, 40Jt
  const ctxTier = document.getElementById("chart-tier-doughnut");
  if (ctxTier) {
    const tier20 = filteredKab.filter(k => k.zone === "Mudah").reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);
    const tier25 = filteredKab.filter(k => k.zone === "Sedang").reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);
    const tier40 = filteredKab.filter(k => k.zone === "Sulit").reduce((acc, k) => acc + (k.targetUnitFinal || 0), 0);
    const totalTierUnit = tier20 + tier25 + tier40;

    if (state.charts.tierDoughnut) state.charts.tierDoughnut.destroy();

    state.charts.tierDoughnut = new Chart(ctxTier, {
      type: "doughnut",
      data: {
        labels: ["Rp 20 Jt (Mudah)", "Rp 25 Jt (Sedang)", "Rp 40 Jt (Sulit)"],
        datasets: [{
          data: [tier20, tier25, tier40],
          backgroundColor: ["#0ea5e9", "#f59e0b", "#ef4444"],
          borderWidth: 2,
          borderColor: "#131e36"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom", labels: { color: "#f8fafc", font: { size: 10 } } },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${formatNumber(ctx.raw)} Unit (${formatPercent(totalTierUnit > 0 ? ctx.raw / totalTierUnit : 0)})`
            }
          }
        }
      }
    });
  }
}

function renderSDMPulauCards(data) {
  const container = document.getElementById("sdm-pulau-grid");
  if (!container) return;

  const islands = [
    { name: "Sumatera", key: "Sumatera" },
    { name: "Kalimantan", key: "Kalimantan" },
    { name: "Jawa", key: "Jawa" },
    { name: "Bali & NT", key: "Bali-Nusa Tenggara" },
    { name: "Sulawesi", key: "Sulawesi" },
    { name: "Maluku", key: "Maluku" },
    { name: "Papua", key: "Papua" }
  ];

  const activeDel = state.globalDelineasiFilter;
  const filteredKab = activeDel
    ? data.detailKabKota.filter(k => k.delineasi === activeDel)
    : data.detailKabKota;

  let html = "";
  islands.forEach(isl => {
    const list = filteredKab.filter(k => k.pulau === isl.key);
    const korkab = list.reduce((acc, k) => acc + (k.korkabCount || 0), 0);
    const tpm = list.reduce((acc, k) => acc + (k.tpmCount || 0), 0);
    const totalSDM = korkab + tpm;

    html += `
      <div class="sdm-island-card">
        <div class="sdm-island-name">${isl.name}</div>
        <div class="sdm-island-val">${formatNumber(totalSDM)}</div>
        <div class="sdm-island-sub">${formatNumber(korkab)} Korkab | ${formatNumber(tpm)} TPM</div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ============================================================================
// TAB 1: MASTER 514 KAB/KOTA (FLAT, PROVINSI, SATKER GROUPING & DIRECT OVERRIDE)
// ============================================================================
function renderTabKabKota(list) {
  const tbody = document.getElementById("tbody-kabkota");
  const tfoot = document.getElementById("tfoot-kabkota");
  if (!tbody || !tfoot) return;

  const searchVal = (state.kabkota.search || "").toLowerCase();
  const wilVal = state.kabkota.wilayah;
  const pulauVal = state.kabkota.pulau;
  const delVal = state.globalDelineasiFilter || state.kabkota.delineasi;
  const zoneVal = state.kabkota.zone;

  const filtered = list.filter(k => {
    if (searchVal && !k.name.toLowerCase().includes(searchVal) && !k.provName.toLowerCase().includes(searchVal) && !k.id.includes(searchVal)) return false;
    if (wilVal && k.wilayahKerja !== wilVal) return false;
    if (pulauVal && k.pulau !== pulauVal) return false;
    if (delVal && k.delineasi !== delVal) return false;
    if (zoneVal && k.zone !== zoneVal) return false;
    return true;
  });

  const totals = filtered.reduce((acc, k) => {
    acc.indikasiAwal += (k.indikasiAwal || 0);
    acc.totalUnit += (k.targetUnitFinal || 0);
    acc.biayaFisik += (k.biayaFisik_526312 || 0);
    acc.totalPendampingan += (k.totalPendampingan || 0);
    acc.grandTotal += (k.grandTotal || 0);
    acc.korkab += (k.korkabCount || 0);
    acc.tpm += (k.tpmCount || 0);
    return acc;
  }, { indikasiAwal: 0, totalUnit: 0, biayaFisik: 0, totalPendampingan: 0, grandTotal: 0, korkab: 0, tpm: 0 });

  renderFilterSummaryBanner("summary-banner-kabkota", filtered.length, list.length, totals);

  const groupMode = state.kabkotaGroupMode;
  let rowsHtml = "";

  if (groupMode === "flat") {
    const sorted = sortData(filtered, state.kabkota.sortCol, state.kabkota.sortDir);
    rowsHtml = sorted.map((k, idx) => `
      <tr>
        <td style="text-align:center;color:var(--text-subtle);">${idx + 1}</td>
        <td style="font-family:var(--font-mono);font-size:0.75rem;">${k.id}</td>
        <td class="freeze-col" style="font-weight:700;">${k.name}</td>
        <td>${k.provName}</td>
        <td>${k.wilayahKerja}</td>
        <td>${k.pulau}</td>
        <td><span class="badge badge-${k.delineasi.toLowerCase()}">${k.delineasi}</span></td>
        <td>${k.zone}</td>
        <td style="text-align:right;color:#94a3b8;font-family:var(--font-mono);">${formatNumber(k.indikasiAwal || 0)}</td>
        <td style="text-align:right;">
          <input type="number" class="editable-target-input input-target-kab" data-kabid="${k.id}" value="${k.targetUnitFinal || 0}" min="0" max="50000" step="10">
        </td>
        <td style="text-align:right;">${formatNumber(k.korkabCount)}</td>
        <td style="text-align:right;">${formatNumber(k.tpmCount)}</td>
        <td style="text-align:right;font-family:var(--font-mono);">${k.ikk.toFixed(3)}</td>
        <td style="text-align:right;">${formatRupiah(k.biayaFisik_526312)}</td>
        <td style="text-align:right;">${formatRupiah(k.totalPendampingan)}</td>
        <td style="text-align:right;" class="grand-money">${formatRupiah(k.grandTotal)}</td>
      </tr>
    `).join("");
  } else if (groupMode === "provinsi") {
    const groups = {};
    filtered.forEach(k => {
      if (!groups[k.provName]) groups[k.provName] = { provId: k.provId, provName: k.provName, items: [] };
      groups[k.provName].items.push(k);
    });

    let gIdx = 0;
    for (const provName in groups) {
      const g = groups[provName];
      const gIndikasi = g.items.reduce((s, k) => s + (k.indikasiAwal || 0), 0);
      const gUnit = g.items.reduce((s, k) => s + (k.targetUnitFinal || 0), 0);
      const gFisik = g.items.reduce((s, k) => s + (k.biayaFisik_526312 || 0), 0);
      const gPend = g.items.reduce((s, k) => s + (k.totalPendampingan || 0), 0);
      const gGrand = g.items.reduce((s, k) => s + (k.grandTotal || 0), 0);
      const gKorkab = g.items.reduce((s, k) => s + (k.korkabCount || 0), 0);
      const gTpm = g.items.reduce((s, k) => s + (k.tpmCount || 0), 0);

      rowsHtml += `
        <tr class="row-group-header">
          <td colspan="8" style="padding:0.65rem 0.85rem;">
            📍 <strong>${provName}</strong> <span style="font-weight:normal;color:var(--text-muted);">(${g.items.length} Kab/Kota)</span>
          </td>
          <td style="text-align:right;color:#94a3b8;font-family:var(--font-mono);">${formatNumber(gIndikasi)}</td>
          <td style="text-align:right;color:#38bdf8;font-family:var(--font-mono);font-weight:800;">${formatNumber(gUnit)}</td>
          <td style="text-align:right;">${formatNumber(gKorkab)}</td>
          <td style="text-align:right;">${formatNumber(gTpm)}</td>
          <td></td>
          <td style="text-align:right;color:#38bdf8;">${formatRupiah(gFisik)}</td>
          <td style="text-align:right;color:#f59e0b;">${formatRupiah(gPend)}</td>
          <td style="text-align:right;" class="grand-money">${formatRupiah(gGrand)}</td>
        </tr>
      `;

      g.items.forEach((k, idx) => {
        rowsHtml += `
          <tr>
            <td style="text-align:center;color:var(--text-subtle);">${idx + 1}</td>
            <td style="font-family:var(--font-mono);font-size:0.75rem;">${k.id}</td>
            <td class="freeze-col" style="padding-left:1.5rem;">${k.name}</td>
            <td>${k.provName}</td>
            <td>${k.wilayahKerja}</td>
            <td>${k.pulau}</td>
            <td><span class="badge badge-${k.delineasi.toLowerCase()}">${k.delineasi}</span></td>
            <td>${k.zone}</td>
            <td style="text-align:right;color:#94a3b8;font-family:var(--font-mono);">${formatNumber(k.indikasiAwal || 0)}</td>
            <td style="text-align:right;">
              <input type="number" class="editable-target-input input-target-kab" data-kabid="${k.id}" value="${k.targetUnitFinal || 0}" min="0" max="50000" step="10">
            </td>
            <td style="text-align:right;">${formatNumber(k.korkabCount)}</td>
            <td style="text-align:right;">${formatNumber(k.tpmCount)}</td>
            <td style="text-align:right;font-family:var(--font-mono);">${k.ikk.toFixed(3)}</td>
            <td style="text-align:right;">${formatRupiah(k.biayaFisik_526312)}</td>
            <td style="text-align:right;">${formatRupiah(k.totalPendampingan)}</td>
            <td style="text-align:right;" class="grand-money">${formatRupiah(k.grandTotal)}</td>
          </tr>
        `;
      });
      gIdx++;
    }
  } else if (groupMode === "satker") {
    const groups = {};
    filtered.forEach(k => {
      const sKey = k.satkerId || "Satker Lainnya";
      if (!groups[sKey]) groups[sKey] = { satkerId: sKey, items: [] };
      groups[sKey].items.push(k);
    });

    for (const sKey in groups) {
      const g = groups[sKey];
      const gIndikasi = g.items.reduce((s, k) => s + (k.indikasiAwal || 0), 0);
      const gUnit = g.items.reduce((s, k) => s + (k.targetUnitFinal || 0), 0);
      const gFisik = g.items.reduce((s, k) => s + (k.biayaFisik_526312 || 0), 0);
      const gPend = g.items.reduce((s, k) => s + (k.totalPendampingan || 0), 0);
      const gGrand = g.items.reduce((s, k) => s + (k.grandTotal || 0), 0);
      const gKorkab = g.items.reduce((s, k) => s + (k.korkabCount || 0), 0);
      const gTpm = g.items.reduce((s, k) => s + (k.tpmCount || 0), 0);

      rowsHtml += `
        <tr class="row-group-header">
          <td colspan="8" style="padding:0.65rem 0.85rem;">
            🏢 <strong>${sKey}</strong> <span style="font-weight:normal;color:var(--text-muted);">(${g.items.length} Kab/Kota)</span>
          </td>
          <td style="text-align:right;color:#94a3b8;font-family:var(--font-mono);">${formatNumber(gIndikasi)}</td>
          <td style="text-align:right;color:#38bdf8;font-family:var(--font-mono);font-weight:800;">${formatNumber(gUnit)}</td>
          <td style="text-align:right;">${formatNumber(gKorkab)}</td>
          <td style="text-align:right;">${formatNumber(gTpm)}</td>
          <td></td>
          <td style="text-align:right;color:#38bdf8;">${formatRupiah(gFisik)}</td>
          <td style="text-align:right;color:#f59e0b;">${formatRupiah(gPend)}</td>
          <td style="text-align:right;" class="grand-money">${formatRupiah(gGrand)}</td>
        </tr>
      `;

      g.items.forEach((k, idx) => {
        rowsHtml += `
          <tr>
            <td style="text-align:center;color:var(--text-subtle);">${idx + 1}</td>
            <td style="font-family:var(--font-mono);font-size:0.75rem;">${k.id}</td>
            <td class="freeze-col" style="padding-left:1.5rem;">${k.name}</td>
            <td>${k.provName}</td>
            <td>${k.wilayahKerja}</td>
            <td>${k.pulau}</td>
            <td><span class="badge badge-${k.delineasi.toLowerCase()}">${k.delineasi}</span></td>
            <td>${k.zone}</td>
            <td style="text-align:right;color:#94a3b8;font-family:var(--font-mono);">${formatNumber(k.indikasiAwal || 0)}</td>
            <td style="text-align:right;">
              <input type="number" class="editable-target-input input-target-kab" data-kabid="${k.id}" value="${k.targetUnitFinal || 0}" min="0" max="50000" step="10">
            </td>
            <td style="text-align:right;">${formatNumber(k.korkabCount)}</td>
            <td style="text-align:right;">${formatNumber(k.tpmCount)}</td>
            <td style="text-align:right;font-family:var(--font-mono);">${k.ikk.toFixed(3)}</td>
            <td style="text-align:right;">${formatRupiah(k.biayaFisik_526312)}</td>
            <td style="text-align:right;">${formatRupiah(k.totalPendampingan)}</td>
            <td style="text-align:right;" class="grand-money">${formatRupiah(k.grandTotal)}</td>
          </tr>
        `;
      });
    }
  }

  tbody.innerHTML = rowsHtml;

  tfoot.innerHTML = `
    <tr>
      <td colspan="8" style="text-align:right;font-weight:800;">TOTAL (${filtered.length} KAB/KOTA):</td>
      <td style="text-align:right;font-family:var(--font-mono);color:#94a3b8;font-size:0.88rem;">${formatNumber(totals.indikasiAwal)}</td>
      <td style="text-align:right;font-family:var(--font-mono);color:#38bdf8;font-size:0.88rem;">${formatNumber(totals.totalUnit)}</td>
      <td style="text-align:right;">${formatNumber(totals.korkab)}</td>
      <td style="text-align:right;">${formatNumber(totals.tpm)}</td>
      <td></td>
      <td style="text-align:right;color:#38bdf8;">${formatRupiah(totals.biayaFisik)}</td>
      <td style="text-align:right;color:#f59e0b;">${formatRupiah(totals.totalPendampingan)}</td>
      <td style="text-align:right;" class="grand-money">${formatRupiah(totals.grandTotal)}</td>
    </tr>
  `;

  // Attach Direct Override event listeners
  tbody.querySelectorAll(".input-target-kab").forEach(inp => {
    inp.addEventListener("change", (e) => {
      const kabId = e.target.getAttribute("data-kabid");
      const val = parseInt(e.target.value) || 0;
      const targetKab = state.kabKotaData.find(k => k.id === kabId);
      if (targetKab) {
        targetKab._targetFinalOverride = val;
        state.customizedKabIds.add(kabId);
        showToast(`Target final ${targetKab.name} diubah menjadi ${formatNumber(val)} unit`);
        recalculateAndRender();
      }
    });
  });
}

// ============================================================================
// TAB 2: KOMPOSISI ANGGARAN TERPADU (FISIK, NON-FISIK, MAKRO + ALL CHARTS)
// ============================================================================
function renderTabKomposisi(data) {
  const summary = data.summary;
  const rekap = data.komposisiFisik || data.rekapTier;

  // 1. Panel Fisik Top Cards
  if (rekap) {
    const updateTierCard = (prefix, tierObj) => {
      const uEl = document.getElementById(`${prefix}-unit`);
      const bEl = document.getElementById(`${prefix}-biaya`);
      const puEl = document.getElementById(`${prefix}-pct-unit`);
      const pbEl = document.getElementById(`${prefix}-pct-biaya`);
      if (uEl) uEl.textContent = formatNumber(tierObj.unit) + " Unit";
      if (bEl) bEl.textContent = formatRupiahCompact(tierObj.biaya);
      if (puEl) puEl.textContent = formatPercent(tierObj.pctUnit || (tierObj.unit / (summary.totalUnit || 1) * 100));
      if (pbEl) pbEl.textContent = formatPercent(tierObj.pctBiaya || (tierObj.biaya / (summary.totalFisik_526312 || 1) * 100));
    };

    if (rekap.tier20) updateTierCard("tier20", rekap.tier20);
    if (rekap.tier25) updateTierCard("tier25", rekap.tier25);
    if (rekap.tier40) updateTierCard("tier40", rekap.tier40);
  }

  // Panel Fisik Table
  const tbodyFisik = document.getElementById("tbody-fisik-tier");
  const tfootFisik = document.getElementById("tfoot-fisik-tier");
  const provList = data.breakdownProvinsi || data.rekapProvinsi || [];

  if (tbodyFisik && tfootFisik && provList.length > 0) {
    const provRows = provList.map((p, idx) => {
      const kabProv = data.detailKabKota.filter(k => k.provId === p.id);
      const u20 = kabProv.filter(k => k.zone === "Mudah").reduce((s, k) => s + (k.targetUnitFinal || 0), 0);
      const b20 = u20 * 20000000;
      const u25 = kabProv.filter(k => k.zone === "Sedang").reduce((s, k) => s + (k.targetUnitFinal || 0), 0);
      const b25 = u25 * 25000000;
      const u40 = kabProv.filter(k => k.zone === "Sulit").reduce((s, k) => s + (k.targetUnitFinal || 0), 0);
      const b40 = u40 * 40000000;

      return `
        <tr>
          <td style="text-align:center;color:var(--text-subtle);">${idx + 1}</td>
          <td class="freeze-col" style="font-weight:700;">${p.name}</td>
          <td>${p.wilayahKerja}</td>
          <td style="text-align:right;">${formatNumber(u20)}</td>
          <td style="text-align:right;">${formatRupiah(b20)}</td>
          <td style="text-align:right;">${formatNumber(u25)}</td>
          <td style="text-align:right;">${formatRupiah(b25)}</td>
          <td style="text-align:right;">${formatNumber(u40)}</td>
          <td style="text-align:right;">${formatRupiah(b40)}</td>
          <td style="text-align:right;color:#38bdf8;font-weight:800;">${formatNumber(p.totalUnit)}</td>
          <td style="text-align:right;" class="grand-money">${formatRupiah(p.biayaFisik_526312)}</td>
        </tr>
      `;
    }).join("");

    tbodyFisik.innerHTML = provRows;
    tfootFisik.innerHTML = `
      <tr>
        <td colspan="3" style="text-align:right;font-weight:800;">TOTAL NASIONAL:</td>
        <td style="text-align:right;">${formatNumber(rekap.tier20.unit)}</td>
        <td style="text-align:right;">${formatRupiah(rekap.tier20.biaya)}</td>
        <td style="text-align:right;">${formatNumber(rekap.tier25.unit)}</td>
        <td style="text-align:right;">${formatRupiah(rekap.tier25.biaya)}</td>
        <td style="text-align:right;">${formatNumber(rekap.tier40.unit)}</td>
        <td style="text-align:right;">${formatRupiah(rekap.tier40.biaya)}</td>
        <td style="text-align:right;color:#38bdf8;font-weight:800;">${formatNumber(summary.totalUnitNasional || summary.totalUnit)}</td>
        <td style="text-align:right;" class="grand-money">${formatRupiah(summary.totalFisik_526312 || summary.biayaFisik_526312)}</td>
      </tr>
    `;
  }

  // 2. Panel Non-Fisik KPIs & Table 16 Komponen (Hierarchical Expand/Collapse Tree View)
  renderTabKomposisiNonFisik(data);

  // 3. Panel Makro Table
  const tbodyMakro = document.getElementById("tbody-makro-wilayah");
  const tfootMakro = document.getElementById("tfoot-makro-wilayah");
  if (tbodyMakro && tfootMakro) {
    const wilList = ["Wilayah I", "Wilayah II", "Wilayah III"];
    const totalUnitAll = summary.totalUnitNasional || summary.totalUnit || 370000;
    const grandPend = summary.grandTotalPendampingan || summary.totalPendampingan || 0;
    const grandRkaAll = summary.grandTotalRKA || summary.grandTotal || 1;

    const wilRows = wilList.map(wil => {
      const kabWil = data.detailKabKota.filter(k => k.wilayahKerja === wil);
      const provCount = new Set(kabWil.map(k => k.provId)).size;
      const unit = kabWil.reduce((s, k) => s + (k.targetUnitFinal || 0), 0);
      const fisik = kabWil.reduce((s, k) => s + (k.biayaFisik_526312 || 0), 0);
      const pend = kabWil.reduce((s, k) => s + (k.totalPendampingan || 0), 0);
      const grand = kabWil.reduce((s, k) => s + (k.grandTotal || 0), 0);

      return `
        <tr>
          <td style="font-weight:700;color:var(--primary);">${wil}</td>
          <td style="text-align:right;">${provCount} Prov</td>
          <td style="text-align:right;">${kabWil.length} Kab/Kota</td>
          <td style="text-align:right;font-weight:700;">${formatNumber(unit)} Unit</td>
          <td style="text-align:right;font-family:var(--font-mono);">${formatPercent(totalUnitAll > 0 ? (unit / totalUnitAll) * 100 : 0)}</td>
          <td style="text-align:right;">${formatRupiah(fisik)}</td>
          <td style="text-align:right;">${formatRupiah(pend)}</td>
          <td style="text-align:right;font-weight:800;color:#34d399;">${formatRupiah(grand)}</td>
          <td style="text-align:right;font-family:var(--font-mono);">${formatPercent(grandRkaAll > 0 ? (grand / grandRkaAll) * 100 : 0)}</td>
        </tr>
      `;
    }).join("");

    tbodyMakro.innerHTML = wilRows;
    tfootMakro.innerHTML = `
      <tr>
        <td colspan="3" style="text-align:right;font-weight:800;">TOTAL NASIONAL:</td>
        <td style="text-align:right;font-weight:800;color:#38bdf8;">${formatNumber(totalUnitAll)} Unit</td>
        <td style="text-align:right;font-family:var(--font-mono);">100.0%</td>
        <td style="text-align:right;color:#38bdf8;">${formatRupiah(summary.totalFisik_526312 || summary.biayaFisik_526312)}</td>
        <td style="text-align:right;color:#f59e0b;">${formatRupiah(grandPend)}</td>
        <td style="text-align:right;" class="grand-money">${formatRupiah(grandRkaAll)}</td>
        <td style="text-align:right;font-family:var(--font-mono);">100.0%</td>
      </tr>
    `;
  }

  // Render Charts for Tab Komposisi
  renderTabKomposisiCharts(data);
}

function renderTabKomposisiNonFisik(data) {
  const summary = data.summary;
  const delFilter = state.nonfisik.delineasi || "";
  const filteredKab = delFilter ? data.detailKabKota.filter(k => k.delineasi === delFilter) : data.detailKabKota;

  const grandPend = filteredKab.reduce((a, k) => a + (k.totalPendampingan || 0), 0);
  const totalTPM = filteredKab.reduce((a, k) => a + (k.tpmCount || 0), 0);
  const totalKorkab = filteredKab.reduce((a, k) => a + (k.korkabCount || 0), 0);

  const nonTotalAnggaran = document.getElementById("nonfisik-total-anggaran");
  const nonTotalTpm = document.getElementById("nonfisik-total-tpm");
  const nonTotalKorkab = document.getElementById("nonfisik-total-korkab");

  if (nonTotalAnggaran) nonTotalAnggaran.textContent = formatRupiahCompact(grandPend);
  if (nonTotalTpm) nonTotalTpm.textContent = formatNumber(totalTPM) + " Personel";
  if (nonTotalKorkab) nonTotalKorkab.textContent = formatNumber(totalKorkab) + " Personel";

  // Populate Satker Filter Dropdown if empty
  const satSelect = document.getElementById("filter-nonfisik-satker");
  if (satSelect && satSelect.options.length <= 1 && data.breakdownSatker) {
    let opts = '<option value="">🏢 Semua Satker DIPA (34 Satker)</option>';
    data.breakdownSatker.forEach(s => {
      opts += `<option value="${s.id}">${s.name}</option>`;
    });
    satSelect.innerHTML = opts;
    satSelect.value = state.nonfisik.satkerId || "";
  }

  const thead = document.getElementById("thead-16-komponen");
  const tbody = document.getElementById("tbody-16-komponen");
  const tfoot = document.getElementById("tfoot-16-komponen");
  if (!tbody || !tfoot || !thead) return;

  const mode = state.nonfisik.viewMode || "tree";
  const searchQ = (state.nonfisik.search || "").toLowerCase();
  const satkerFilter = state.nonfisik.satkerId;

  const expandCtrl = document.getElementById("tree-expand-controls");
  if (expandCtrl) expandCtrl.style.display = mode === "tree" ? "flex" : "none";

  if (mode === "flat") {
    // FLAT MODE: Ringkasan 16 Komponen (Filtered by Ditjen if active)
    thead.innerHTML = `
      <tr>
        <th style="width:50px;text-align:center;">No</th>
        <th style="width:90px;">Kode</th>
        <th class="freeze-col" style="min-width:300px;">Uraian Komponen Pendampingan</th>
        <th>Kode Akun BAS</th>
        <th>Regulasi / Indeks</th>
        <th>Level Alokasi</th>
        <th style="text-align:right;">Pagu Anggaran (Rp)</th>
        <th style="text-align:right;">Proporsi (%)</th>
      </tr>
    `;

    const freqRembukCurrent = Number(state.params.frekuensiRembukWarga || state.params.frekuensiRembuk) || 3;
    const kompList = [
      { no: "1", name: "Gaji dan Operasional Korkab", bas: "522191", rule: "INLAND / Non-SBM (55% IKK)", level: "Kab/Kota", total: filteredKab.reduce((a, k) => a + (k.komp1_korkab || 0), 0) },
      { no: "2", name: "Gaji dan Operasional TPM", bas: "522191", rule: "INLAND / Non-SBM (55% IKK)", level: "Kab/Kota", total: filteredKab.reduce((a, k) => a + (k.komp2_tpm || 0), 0) },
      { no: "3", name: "Konsumsi Rapat Rembuk Warga", bas: "521211", rule: `SBM (${freqRembukCurrent}x Makan + Snack)`, level: "Kab/Kota", total: filteredKab.reduce((a, k) => a + (k.komp3_konsumsiRembuk || 0), 0) },
      { no: "4", name: "Penggandaan Laporan Bulanan", bas: "521211", rule: "Non-SBM (IKK)", level: "Kab/Kota", total: filteredKab.reduce((a, k) => a + (k.komp4_laporanBulanan || 0), 0) },
      { no: "5", name: "Dokumen RAB & Gambar Teknis", bas: "521211", rule: "Non-SBM (IKK)", level: "Kab/Kota", total: filteredKab.reduce((a, k) => a + (k.komp5_rabGambar || 0), 0) },
      { no: "6", name: "Operasional Rutin TPM (Support Cost)", bas: "522191", rule: "Non-SBM (IKK)", level: "Kab/Kota", total: filteredKab.reduce((a, k) => a + (k.komp6_operasionalTPM || 0), 0) },
      { no: "7", name: "Paket Rapat Pembekalan (Fullboard 5 Hari)", bas: "524119", rule: "SBM (Fullboard 5 Hari)", level: "Satker", total: filteredKab.reduce((a, k) => a + (k.komp7_pembekalan || 0), 0) },
      { no: "8", name: "Kit Pembekalan & Atribut Personel Lapangan", bas: "521211", rule: "Non-SBM (IKK)", level: "Kab/Kota", total: filteredKab.reduce((a, k) => a + (k.komp8_kitAtribut || 0), 0) },
      { no: "9", name: "Perjalanan Dinas Verifikasi Penerima Bantuan", bas: "524111", rule: "SBM (2 Personel 2 Hari)", level: "Kab/Kota", total: filteredKab.reduce((a, k) => a + (k.komp9_verifikasi || 0), 0) },
      { no: "10", name: "Perjalanan Dinas Wasdal Lapangan", bas: "524111", rule: "SBM (2 Personel 2 Hari)", level: "Kab/Kota", total: filteredKab.reduce((a, k) => a + (k.komp10_wasdal || 0), 0) },
      { no: "11", name: "Koordinasi Satker ke Tingkat Pusat (DKI)", bas: "524111", rule: "SBM (4 Personel DKI)", level: "Satker", total: filteredKab.reduce((a, k) => a + (k.komp11_koordPusat || 0), 0) },
      { no: "12", name: "Digitalisasi & Pengarsipan Dokumen", bas: "522191", rule: "Non-SBM (IKK)", level: "Kab/Kota", total: filteredKab.reduce((a, k) => a + (k.komp12_digitalisasi || 0), 0) },
      { no: "13", name: "Dokumentasi & Video Best Practice", bas: "522191", rule: "Non-SBM (IKK)", level: "Provinsi", total: filteredKab.reduce((a, k) => a + (k.komp13_videoBestPractice || 0), 0) },
      { no: "14", name: "Pendampingan Aparat Penegak Hukum (APH)", bas: "524111", rule: "SBM (2 Personel 2 Hari)", level: "Kab/Kota", total: filteredKab.reduce((a, k) => a + (k.komp14_aph || 0), 0) },
      { no: "15", name: "Media Sosialisasi & Peneng Identitas Rumah", bas: "521211", rule: "Non-SBM (IKK)", level: "Kab/Kota", total: filteredKab.reduce((a, k) => a + (k.komp15_peneng || 0), 0) },
      { no: "16", name: "Sewa Kendaraan Operasional PPK & Insidental", bas: "522141", rule: "SBM (Roda 4 Bulanan/Harian)", level: "Satker", total: filteredKab.reduce((a, k) => a + ((k.komp16a_sewaPPK || 0) + (k.komp16b_sewaInsidental || 0)), 0) }
    ];

    const filteredKomp = kompList.filter(k => {
      if (!searchQ) return true;
      return (k.name || "").toLowerCase().includes(searchQ) || (k.bas || "").includes(searchQ);
    });

    tbody.innerHTML = filteredKomp.map((k, idx) => `
      <tr>
        <td style="text-align:center;color:var(--text-subtle);">${idx + 1}</td>
        <td style="font-family:var(--font-mono);font-size:0.75rem;color:var(--primary);font-weight:700;">Komp ${k.no}</td>
        <td class="freeze-col" style="font-weight:600;">${k.name}</td>
        <td style="font-family:var(--font-mono);font-size:0.75rem;">${k.bas}</td>
        <td>${k.rule || "-"}</td>
        <td><span class="badge">${k.level || "Kab/Kota"}</span></td>
        <td style="text-align:right;font-weight:700;">${formatRupiah(k.total)}</td>
        <td style="text-align:right;font-family:var(--font-mono);color:#f59e0b;">${formatPercent(grandPend > 0 ? (k.total / grandPend) * 100 : 0)}</td>
      </tr>
    `).join("");

    tfoot.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:right;font-weight:800;">TOTAL 16 KOMPONEN PENDAMPINGAN ${delFilter ? `(${delFilter})` : ""}:</td>
        <td style="text-align:right;font-family:var(--font-mono);color:#f59e0b;font-weight:800;font-size:0.88rem;">${formatRupiah(grandPend)}</td>
        <td style="text-align:right;font-family:var(--font-mono);font-weight:800;">100.0%</td>
      </tr>
    `;
    return;
  }

  // TREE MODE: Hierarki Satker -> Akun BAS -> Group -> Detail Item
  thead.innerHTML = `
    <tr>
      <th class="freeze-col" style="background:var(--bg-card); min-width:340px;">SATKER / AKUN BAS / ITEM KOMPONEN</th>
      <th style="text-align:right; width:110px;">TARGET / VOL</th>
      <th style="text-align:right; width:140px;">HARGA SATUAN (RP)</th>
      <th style="text-align:right; width:170px;" class="grand-money">PAGU ANGGARAN (RP)</th>
      <th style="text-align:left; min-width:320px;">PEMBENTUK HARGA SATUAN</th>
    </tr>
  `;

  // Dynamically calculate satker list from filteredKab if delineasi filter is active
  let satkerList = (data.breakdownSatker || []).map(s => {
    if (!delFilter) return s;
    const kabInSat = filteredKab.filter(k => k.satkerId === s.id);
    const totalUnit = kabInSat.reduce((a, k) => a + (k.targetUnitFinal || 0), 0);
    const totalPendampingan = kabInSat.reduce((a, k) => a + (k.totalPendampingan || 0), 0);
    const korkabOB = kabInSat.reduce((a, k) => a + (k.korkabOB || 0), 0);
    const tpmOB = kabInSat.reduce((a, k) => a + (k.tpmOB || 0), 0);
    const korkabCount = kabInSat.reduce((a, k) => a + (k.korkabCount || 0), 0);
    const tpmCount = kabInSat.reduce((a, k) => a + (k.tpmCount || 0), 0);
    const totalPPK = totalUnit > 0 ? s.ppkCount : 0;

    return {
      ...s,
      totalUnit,
      totalPendampingan,
      totalKorkabOB: korkabOB,
      totalTPMOB: tpmOB,
      totalKorkab: korkabCount,
      totalTPM: tpmCount,
      totalPPK,
      komp1_korkab: kabInSat.reduce((a, k) => a + (k.komp1_korkab || 0), 0),
      komp2_tpm: kabInSat.reduce((a, k) => a + (k.komp2_tpm || 0), 0),
      komp3_konsumsiRembuk: kabInSat.reduce((a, k) => a + (k.komp3_konsumsiRembuk || 0), 0),
      komp4_laporanBulanan: kabInSat.reduce((a, k) => a + (k.komp4_laporanBulanan || 0), 0),
      komp5_rabGambar: kabInSat.reduce((a, k) => a + (k.komp5_rabGambar || 0), 0),
      komp6_operasionalTPM: kabInSat.reduce((a, k) => a + (k.komp6_operasionalTPM || 0), 0),
      komp7_pembekalan: kabInSat.reduce((a, k) => a + (k.komp7_pembekalan || 0), 0),
      komp8_kitAtribut: kabInSat.reduce((a, k) => a + (k.komp8_kitAtribut || 0), 0),
      komp9_verifikasi: kabInSat.reduce((a, k) => a + (k.komp9_verifikasi || 0), 0),
      komp10_wasdal: kabInSat.reduce((a, k) => a + (k.komp10_wasdal || 0), 0),
      komp11_koordPusat: kabInSat.reduce((a, k) => a + (k.komp11_koordPusat || 0), 0),
      totalPendampingan
    };
  }).filter(s => delFilter ? (s.totalUnit || 0) > 0 : true);

  if (satkerFilter) satkerList = satkerList.filter(s => s.id === satkerFilter);
  if (searchQ) {
    satkerList = satkerList.filter(s => s.name.toLowerCase().includes(searchQ) || s.id.toLowerCase().includes(searchQ));
  }

  let html = "";
  let grandUnitTotal = 0;
  let grandPaguTotal = 0;

  satkerList.forEach(s => {
    grandUnitTotal += (s.totalUnit || 0);
    grandPaguTotal += (s.totalPendampingan || 0);

    const satTargetClass = `child-sat-${s.id}`;

    // Level 1: Satker Row (Always Visible by default, Icon ▶)
    html += `
      <tr class="tree-row-satker toggle-trigger-satker" data-target="${satTargetClass}">
        <td class="freeze-col"><span class="tree-toggle">▶</span> 🏛️ ${s.name}</td>
        <td style="text-align:right;font-family:var(--font-mono);font-weight:700;">${formatNumber(s.totalUnit)} unit</td>
        <td style="text-align:right;">-</td>
        <td style="text-align:right;" class="grand-money">${formatRupiah(s.totalPendampingan)}</td>
        <td style="text-align:left;font-size:0.75rem;color:var(--text-muted);">-</td>
      </tr>
    `;

    // Level 1.5: Program Activity Sub-Header Row (Default Hidden: display: none;)
    html += `
      <tr class="tree-row-program child-row ${satTargetClass}" style="display: none;">
        <td class="freeze-col"><span class="tree-indent"></span> 📌 Stimulan Peningkatan Kualitas Rumah Swadaya di Kawasan Permukiman (BSPS)</td>
        <td style="text-align:right;font-family:var(--font-mono);color:#38bdf8;">${formatNumber(s.totalUnit)} unit</td>
        <td style="text-align:right;">-</td>
        <td style="text-align:right;font-weight:700;">${formatRupiah(s.totalPendampingan)}</td>
        <td style="text-align:left;font-size:0.75rem;color:var(--text-muted);">-</td>
      </tr>
    `;

    // SAFEGUARD MAPPING & NULL CHECK
    if (!s.children?.length) {
      html += `<tr class="child-row ${satTargetClass}" style="display: none;"><td colspan="5" style="text-align:center;padding:0.75rem;color:var(--text-muted);font-style:italic;">Memuat data rincian Satker...</td></tr>`;
      return;
    }

    // Level 2: Akun BAS Mapping (Default Hidden: display: none;, Icon ▶)
    s.children.forEach(b => {
      const basKey = b.id || `${s.id}_${b.code}`;
      const basTargetClass = `child-bas-${basKey}`;

      html += `
        <tr class="tree-row-bas toggle-trigger-bas child-row ${satTargetClass}" data-target="${basTargetClass}" style="display: none;">
          <td class="freeze-col"><span class="tree-indent"></span> <span class="tree-toggle">▶</span> 📁 ${b.name} (${b.code})</td>
          <td style="text-align:right;">-</td>
          <td style="text-align:right;">-</td>
          <td style="text-align:right;font-weight:700;color:var(--primary);">${formatRupiah(b.pagu || b.total)}</td>
          <td style="text-align:left;font-size:0.75rem;color:var(--text-muted);">-</td>
        </tr>
      `;

      if (!b.children?.length) return;

      // Level 3: Group Activity Mapping (Default Hidden: display: none;)
      b.children.forEach(g => {
        html += `
          <tr class="tree-row-group child-row ${satTargetClass} ${basTargetClass}" style="display: none;">
            <td class="freeze-col"><span class="tree-indent-2"></span> &gt; ${g.name}</td>
            <td style="text-align:right;">-</td>
            <td style="text-align:right;">-</td>
            <td style="text-align:right;">-</td>
            <td style="text-align:left;font-size:0.75rem;color:var(--text-muted);">-</td>
          </tr>
        `;

        if (!g.children?.length) return;

        // Level 4: Item Component Detail Mapping (Default Hidden: display: none;)
        g.children.forEach(it => {
          const unitPrice = it.unitPrice !== undefined ? it.unitPrice : (it.volNum && it.volNum > 0 ? Math.ceil((it.pagu / it.volNum) / 1000) * 1000 : 0);
          html += `
            <tr class="tree-row-item child-row ${satTargetClass} ${basTargetClass}" style="display: none;">
              <td class="freeze-col"><span class="tree-indent-3"></span> ${it.code}. ${it.name}</td>
              <td style="text-align:right;font-family:var(--font-mono);">${it.target}</td>
              <td style="text-align:right;font-family:var(--font-mono);color:#38bdf8;">${formatRupiah(unitPrice)}</td>
              <td style="text-align:right;font-weight:600;">${formatRupiah(it.pagu)}</td>
              <td style="text-align:left;font-size:0.72rem;color:#f59e0b;font-style:italic;">${it.formula}</td>
            </tr>
          `;
        });
      });
    });
  });

  tbody.innerHTML = html || '<tr><td colspan="5" style="text-align:center;padding:2rem;color:var(--text-muted);">Tidak ada data yang cocok dengan filter pencarian.</td></tr>';

  tfoot.innerHTML = `
    <tr>
      <th class="freeze-col" style="text-align:right;font-weight:800;">TOTAL ALOKASI & PENDAMPINGAN (${satkerList.length} SATKER):</th>
      <th style="text-align:right;font-family:var(--font-mono);font-weight:800;color:#38bdf8;">${formatNumber(grandUnitTotal)} unit</th>
      <th style="text-align:right;">-</th>
      <th style="text-align:right;" class="grand-money">${formatRupiah(grandPaguTotal)}</th>
      <th style="text-align:left;">-</th>
    </tr>
  `;

  // PURE CSS-BASED DOM TOGGLING EVENT LISTENER (DEFAULT COLLAPSED BERSARANG)
  tbody.onclick = (e) => {
    // 1. Toggle Satker Level (Level 1)
    const satkerTrigger = e.target.closest(".toggle-trigger-satker");
    if (satkerTrigger) {
      const targetClass = satkerTrigger.getAttribute("data-target");
      const icon = satkerTrigger.querySelector(".tree-toggle");
      const isCurrentlyClosed = icon ? icon.textContent.includes("▶") : true;

      if (isCurrentlyClosed) {
        // Open Level 1.5 (Program) and Level 2 (Akun BAS) under this Satker
        const directChildren = tbody.querySelectorAll(`.tree-row-program.${targetClass}, .tree-row-bas.${targetClass}`);
        directChildren.forEach(child => {
          child.style.display = "";
        });
        if (icon) icon.textContent = "▼";
      } else {
        // Close ALL children & grandchildren under this Satker
        const allChildren = tbody.querySelectorAll(`.${targetClass}`);
        allChildren.forEach(child => {
          child.style.display = "none";
          const innerIcon = child.querySelector(".tree-toggle");
          if (innerIcon) innerIcon.textContent = "▶";
        });
        if (icon) icon.textContent = "▶";
      }
      return;
    }

    // 2. Toggle Akun BAS Level (Level 2)
    const basTrigger = e.target.closest(".toggle-trigger-bas");
    if (basTrigger) {
      const targetClass = basTrigger.getAttribute("data-target");
      const icon = basTrigger.querySelector(".tree-toggle");
      const isCurrentlyClosed = icon ? icon.textContent.includes("▶") : true;

      if (isCurrentlyClosed) {
        // Open Level 3 (Group) and Level 4 (Item) under this Akun BAS
        const basChildren = tbody.querySelectorAll(`.${targetClass}`);
        basChildren.forEach(child => {
          child.style.display = "";
        });
        if (icon) icon.textContent = "▼";
      } else {
        // Close all Group & Item rows under this Akun BAS
        const basChildren = tbody.querySelectorAll(`.${targetClass}`);
        basChildren.forEach(child => {
          child.style.display = "none";
        });
        if (icon) icon.textContent = "▶";
      }
      return;
    }
  };
}

function renderTabKomposisiCharts(data) {
  if (typeof Chart === "undefined" || !data) return;

  const rekap = data.komposisiFisik || data.rekapTier;
  const summary = data.summary;

  // Chart 3: chart-tier-pie
  const ctxTierPie = document.getElementById("chart-tier-pie");
  if (ctxTierPie && rekap) {
    if (state.charts.tierPie) state.charts.tierPie.destroy();
    state.charts.tierPie = new Chart(ctxTierPie, {
      type: "pie",
      data: {
        labels: ["Rp 20 Jt (Mudah)", "Rp 25 Jt (Sedang)", "Rp 40 Jt (Sulit)"],
        datasets: [{
          data: [rekap.tier20.unit, rekap.tier25.unit, rekap.tier40.unit],
          backgroundColor: ["#0ea5e9", "#f59e0b", "#ef4444"]
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: "bottom", labels: { color: "#94a3b8", font: { size: 10 } } } }
      }
    });
  }

  // Chart 4: chart-tier-bar
  const ctxTierBar = document.getElementById("chart-tier-bar");
  if (ctxTierBar && rekap) {
    if (state.charts.tierBar) state.charts.tierBar.destroy();
    state.charts.tierBar = new Chart(ctxTierBar, {
      type: "bar",
      data: {
        labels: ["Tier 20 Jt", "Tier 25 Jt", "Tier 40 Jt"],
        datasets: [{
          label: "Biaya Fisik (Miliar Rp)",
          data: [rekap.tier20.biaya / 1e9, rekap.tier25.biaya / 1e9, rekap.tier40.biaya / 1e9],
          backgroundColor: ["#0ea5e9", "#f59e0b", "#ef4444"],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        scales: {
          x: { ticks: { color: "#94a3b8" } },
          y: { ticks: { color: "#94a3b8", callback: v => "Rp " + v + "B" } }
        },
        plugins: { legend: { display: false } }
      }
    });
  }

  // Chart 5: chart-nonfisik-komponen (16 Komponen Horizontal Bar)
  const ctxNonFisik = document.getElementById("chart-nonfisik-komponen");
  const delFilterNonFisik = state.nonfisik.delineasi || "";
  const filteredKabChart = delFilterNonFisik ? data.detailKabKota.filter(k => k.delineasi === delFilterNonFisik) : data.detailKabKota;
  
  const kompList = [
    { no: "1", name: "Gaji & Ops Korkab", total: filteredKabChart.reduce((a, k) => a + (k.komp1_korkab || 0), 0) },
    { no: "2", name: "Gaji & Ops TPM", total: filteredKabChart.reduce((a, k) => a + (k.komp2_tpm || 0), 0) },
    { no: "3", name: "Konsumsi Rembuk Warga", total: filteredKabChart.reduce((a, k) => a + (k.komp3_konsumsiRembuk || 0), 0) },
    { no: "4", name: "Penggandaan Laporan", total: filteredKabChart.reduce((a, k) => a + (k.komp4_laporanBulanan || 0), 0) },
    { no: "5", name: "RAB & Gambar Teknis", total: filteredKabChart.reduce((a, k) => a + (k.komp5_rabGambar || 0), 0) },
    { no: "6", name: "Ops Rutin TPM (Support)", total: filteredKabChart.reduce((a, k) => a + (k.komp6_operasionalTPM || 0), 0) },
    { no: "7", name: "Paket Pembekalan Fullboard", total: filteredKabChart.reduce((a, k) => a + (k.komp7_pembekalan || 0), 0) },
    { no: "8", name: "Kit & Atribut Personel", total: filteredKabChart.reduce((a, k) => a + (k.komp8_kitAtribut || 0), 0) },
    { no: "9", name: "Perdin Verifikasi Satker", total: filteredKabChart.reduce((a, k) => a + (k.komp9_verifikasi || 0), 0) },
    { no: "10", name: "Perdin Wasdal Lapangan", total: filteredKabChart.reduce((a, k) => a + (k.komp10_wasdal || 0), 0) },
    { no: "11", name: "Koordinasi Satker ke Pusat", total: filteredKabChart.reduce((a, k) => a + (k.komp11_koordPusat || 0), 0) },
    { no: "12", name: "Digitalisasi Dokumen", total: filteredKabChart.reduce((a, k) => a + (k.komp12_digitalisasi || 0), 0) },
    { no: "13", name: "Video Best Practice", total: filteredKabChart.reduce((a, k) => a + (k.komp13_videoBestPractice || 0), 0) },
    { no: "14", name: "Pendampingan APH", total: filteredKabChart.reduce((a, k) => a + (k.komp14_aph || 0), 0) },
    { no: "15", name: "Sosialisasi & Peneng", total: filteredKabChart.reduce((a, k) => a + (k.komp15_peneng || 0), 0) },
    { no: "16", name: "Sewa Mobil PPK & Insidental", total: filteredKabChart.reduce((a, k) => a + ((k.komp16a_sewaPPK || 0) + (k.komp16b_sewaInsidental || 0)), 0) }
  ];

  if (ctxNonFisik && kompList.length > 0) {
    if (state.charts.nonfisikKomp) state.charts.nonfisikKomp.destroy();
    state.charts.nonfisikKomp = new Chart(ctxNonFisik, {
      type: "bar",
      data: {
        labels: kompList.map(k => "Komp " + k.no + ": " + k.name),
        datasets: [{
          label: "Anggaran (Miliar Rp)",
          data: kompList.map(k => (k.total || 0) / 1e9),
          backgroundColor: "#f59e0b",
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true, maintainAspectRatio: false,
        scales: {
          x: { ticks: { color: "#94a3b8" } },
          y: { ticks: { color: "#94a3b8", font: { size: 9 } } }
        },
        plugins: { legend: { display: false } }
      }
    });
  }

  // Chart 6: chart-makro-postur (Fisik vs Pendampingan Pie)
  const ctxMakroPostur = document.getElementById("chart-makro-postur");
  if (ctxMakroPostur && summary) {
    const totalFisik = summary.totalFisik_526312 || summary.biayaFisik_526312 || 0;
    const totalPend = summary.grandTotalPendampingan || summary.totalPendampingan || 0;
    if (state.charts.makroPostur) state.charts.makroPostur.destroy();
    state.charts.makroPostur = new Chart(ctxMakroPostur, {
      type: "pie",
      data: {
        labels: ["Bantuan Fisik (BAS 526312)", "Pendampingan (16 Komponen)"],
        datasets: [{
          data: [totalFisik, totalPend],
          backgroundColor: ["#0ea5e9", "#f59e0b"]
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: "bottom", labels: { color: "#94a3b8", font: { size: 10 } } } }
      }
    });
  }

  // Chart 7: chart-makro-wilayah (Wilayah I, II, III Stacked Bar)
  const ctxMakroWil = document.getElementById("chart-makro-wilayah");
  if (ctxMakroWil) {
    const wList = ["Wilayah I", "Wilayah II", "Wilayah III"];
    const wFisik = wList.map(w => data.detailKabKota.filter(k => k.wilayahKerja === w).reduce((s, k) => s + (k.biayaFisik_526312 || 0) / 1e9, 0));
    const wPend = wList.map(w => data.detailKabKota.filter(k => k.wilayahKerja === w).reduce((s, k) => s + (k.totalPendampingan || 0) / 1e9, 0));

    if (state.charts.makroWilayah) state.charts.makroWilayah.destroy();

    state.charts.makroWilayah = new Chart(ctxMakroWil, {
      type: "bar",
      data: {
        labels: wList,
        datasets: [
          { label: "Fisik (Miliar Rp)", data: wFisik, backgroundColor: "#0ea5e9" },
          { label: "Pendampingan (Miliar Rp)", data: wPend, backgroundColor: "#f59e0b" }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        scales: {
          x: { stacked: true, ticks: { color: "#94a3b8" } },
          y: { stacked: true, ticks: { color: "#94a3b8" } }
        },
        plugins: { legend: { position: "bottom", labels: { color: "#94a3b8", font: { size: 10 } } } }
      }
    });
  }
}

// ============================================================================
// TAB 3: KONSOLIDASI BAS (WITH PROVINSI & SATKER FILTERS + ALL CHARTS)
// ============================================================================
function renderTabBAS(basList, summary) {
  const tbody = document.getElementById("tbody-bas");
  const tfoot = document.getElementById("tfoot-bas");
  if (!tbody || !tfoot) return;

  const provFilter = state.bas.provId;
  const satkerFilter = state.bas.satkerId;

  let effectiveBasList = (basList || []).map(b => ({
    code: b.code || b.kodeAkun || "",
    name: b.name || b.namaAkun || "",
    postur: b.postur || "Belanja Barang",
    components: Array.isArray(b.components) ? b.components.join(", ") : (b.komponenTerkait || "-"),
    total: b.total !== undefined ? b.total : (b.totalAnggaran || 0)
  }));
  let effectiveTotal = summary.grandTotalRKA || summary.grandTotal || 0;

  if (provFilter || satkerFilter) {
    const filteredKab = currentCalculatedData.detailKabKota.filter(k => {
      if (provFilter && k.provId !== provFilter) return false;
      if (satkerFilter && k.satkerId !== satkerFilter) return false;
      return true;
    });

    const fFisik = filteredKab.reduce((s, k) => s + (k.biayaFisik_526312 || 0), 0);
    const fPend = filteredKab.reduce((s, k) => s + (k.totalPendampingan || 0), 0);
    effectiveTotal = fFisik + fPend;

    effectiveBasList = effectiveBasList.map(b => {
      if (b.code === "526312") {
        return { ...b, total: fFisik };
      } else {
        const ratio = (summary.grandTotalPendampingan || summary.totalPendampingan || 1) > 0
          ? (fPend / (summary.grandTotalPendampingan || summary.totalPendampingan || 1))
          : 0;
        return { ...b, total: b.total * ratio };
      }
    });
  }

  const rowsHtml = effectiveBasList.map((b, idx) => `
    <tr>
      <td style="text-align:center;color:var(--text-subtle);">${idx + 1}</td>
      <td style="font-family:var(--font-mono);font-size:0.75rem;font-weight:700;color:var(--primary);">${b.code}</td>
      <td class="freeze-col" style="font-weight:600;">${b.name}</td>
      <td><span class="badge" style="background:rgba(255,255,255,0.05);">${b.postur}</span></td>
      <td style="font-size:0.72rem;color:var(--text-muted);">${b.components}</td>
      <td style="text-align:right;font-weight:700;">${formatRupiah(b.total)}</td>
      <td style="text-align:right;font-family:var(--font-mono);color:#34d399;">${formatPercent(effectiveTotal > 0 ? (b.total / effectiveTotal) * 100 : 0)}</td>
    </tr>
  `).join("");

  tbody.innerHTML = rowsHtml;
  tfoot.innerHTML = `
    <tr>
      <td colspan="5" style="text-align:right;font-weight:800;">TOTAL BELANJA RKA BAS:</td>
      <td style="text-align:right;" class="grand-money">${formatRupiah(effectiveTotal)}</td>
      <td style="text-align:right;font-family:var(--font-mono);font-weight:800;">100.0%</td>
    </tr>
  `;

  renderTabBASCharts(effectiveBasList, effectiveTotal);
}

function renderTabBASCharts(effectiveBasList, effectiveTotal) {
  if (typeof Chart === "undefined" || !effectiveBasList) return;

  // Chart 8: chart-bas-pie
  const ctxBas = document.getElementById("chart-bas-pie");
  if (ctxBas) {
    if (state.charts.basPie) state.charts.basPie.destroy();
    const topBas = effectiveBasList.filter(b => b.total > 0);

    state.charts.basPie = new Chart(ctxBas, {
      type: "doughnut",
      data: {
        labels: topBas.map(b => b.code + " - " + b.name.substring(0, 18) + "..."),
        datasets: [{
          data: topBas.map(b => b.total),
          backgroundColor: ["#0ea5e9", "#10b981", "#f59e0b", "#a855f7", "#ec4899", "#6366f1", "#14b8a6", "#f97316"]
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom", labels: { color: "#94a3b8", font: { size: 9 } } },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.label}: Rp ${formatRupiahCompact(ctx.raw)} (${formatPercent(effectiveTotal > 0 ? (ctx.raw / effectiveTotal) * 100 : 0)})`
            }
          }
        }
      }
    });
  }

  // Chart 9: chart-satker-bar (Top 10 Satker Budget Bar Chart)
  const ctxSatkerBar = document.getElementById("chart-satker-bar");
  const satkerList = currentCalculatedData ? (currentCalculatedData.breakdownSatker || currentCalculatedData.rekapSatker || []) : [];
  if (ctxSatkerBar && satkerList.length > 0) {
    if (state.charts.satkerBar) state.charts.satkerBar.destroy();
    const sortedSatker = [...satkerList].sort((a, b) => (b.grandTotal || 0) - (a.grandTotal || 0)).slice(0, 10);

    state.charts.satkerBar = new Chart(ctxSatkerBar, {
      type: "bar",
      data: {
        labels: sortedSatker.map(s => s.name.substring(0, 15) + "..."),
        datasets: [{
          label: "Grand Total (Miliar Rp)",
          data: sortedSatker.map(s => (s.grandTotal || 0) / 1e9),
          backgroundColor: "#38bdf8",
          borderRadius: 4
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        scales: {
          x: { ticks: { color: "#94a3b8", font: { size: 9 } } },
          y: { ticks: { color: "#94a3b8" } }
        },
        plugins: { legend: { display: false } }
      }
    });
  }
}

// ============================================================================
// TAB 4: SIMULATOR TARGET (MANUAL INPUT & LOCKED TOTAL REDISTRIBUTION)
// ============================================================================
function renderTabSimulator(data) {
  // Panel 2: Simulasi Per Provinsi
  const tbodyProv = document.getElementById("tbody-sim-provinsi");
  const tfootProv = document.getElementById("tfoot-sim-provinsi");
  const provList = data.breakdownProvinsi || data.rekapProvinsi || [];

  if (tbodyProv && tfootProv && provList.length > 0) {
    let totIndikasi = 0, totSim = 0, totFinal = 0, totFisik = 0, totPend = 0, totGrand = 0;

    const provRows = provList.map((p, idx) => {
      const kabProv = data.detailKabKota.filter(k => k.provId === p.id);
      const indAwal = kabProv.reduce((s, k) => s + (k.indikasiAwal || 0), 0);
      const indSim = kabProv.reduce((s, k) => s + (state.simCustomIndikasiMap.get(k.id) || k.indikasiAwal || 0), 0);

      totIndikasi += indAwal;
      totSim += indSim;
      totFinal += p.totalUnit;
      totFisik += p.biayaFisik_526312;
      totPend += p.totalPendampingan;
      totGrand += p.grandTotal;

      return `
        <tr>
          <td style="text-align:center;color:var(--text-subtle);">${idx + 1}</td>
          <td class="freeze-col" style="font-weight:700;">${p.name}</td>
          <td>${p.wilayahKerja}</td>
          <td style="text-align:right;">${p.kabKotaCount || kabProv.length}</td>
          <td style="text-align:right;color:#94a3b8;font-family:var(--font-mono);">${formatNumber(indAwal)}</td>
          <td style="text-align:right;">
            <input type="number" class="editable-target-input input-sim-prov" data-provid="${p.id}" value="${indSim}" min="0" max="100000" step="50">
          </td>
          <td style="text-align:right;color:#38bdf8;font-weight:800;">${formatNumber(p.totalUnit)}</td>
          <td style="text-align:right;">${formatRupiahCompact(p.biayaFisik_526312)}</td>
          <td style="text-align:right;">${formatRupiahCompact(p.totalPendampingan)}</td>
          <td style="text-align:right;" class="grand-money">${formatRupiahCompact(p.grandTotal)}</td>
        </tr>
      `;
    }).join("");

    tbodyProv.innerHTML = provRows;
    tfootProv.innerHTML = `
      <tr>
        <td colspan="4" style="text-align:right;font-weight:800;">TOTAL NASIONAL:</td>
        <td style="text-align:right;color:#94a3b8;font-family:var(--font-mono);">${formatNumber(totIndikasi)}</td>
        <td style="text-align:right;color:#38bdf8;font-weight:800;">${formatNumber(totSim)}</td>
        <td style="text-align:right;color:#38bdf8;font-weight:800;">${formatNumber(totFinal)}</td>
        <td style="text-align:right;">${formatRupiahCompact(totFisik)}</td>
        <td style="text-align:right;">${formatRupiahCompact(totPend)}</td>
        <td style="text-align:right;" class="grand-money">${formatRupiahCompact(totGrand)}</td>
      </tr>
    `;

    tbodyProv.querySelectorAll(".input-sim-prov").forEach(inp => {
      inp.addEventListener("change", (e) => {
        const provId = e.target.getAttribute("data-provid");
        const val = parseInt(e.target.value) || 0;
        const kabInProv = state.kabKotaData.filter(k => k.provId === provId);
        if (kabInProv.length > 0) {
          const oldSum = kabInProv.reduce((s, k) => s + (k.indikasiAwal || 1), 0);
          kabInProv.forEach(k => {
            const ratio = (k.indikasiAwal || 1) / (oldSum || 1);
            state.simCustomIndikasiMap.set(k.id, Math.round(val * ratio));
          });
          showToast(`Indikasi simulasi Provinsi diperbarui (${formatNumber(val)} unit)`);
          recalculateAndRender();
        }
      });
    });
  }

  // Panel 3: Simulasi Per Kab/Kota
  const tbodyKab = document.getElementById("tbody-sim-kabkota");
  const tfootKab = document.getElementById("tfoot-sim-kabkota");
  if (tbodyKab && tfootKab) {
    const searchVal = (document.getElementById("search-sim-kabkota")?.value || "").toLowerCase();
    const delFilter = document.getElementById("filter-sim-delineasi")?.value || "";

    const filtered = data.detailKabKota.filter(k => {
      if (searchVal && !k.name.toLowerCase().includes(searchVal) && !k.provName.toLowerCase().includes(searchVal)) return false;
      if (delFilter && k.delineasi !== delFilter) return false;
      return true;
    });

    const kabRows = filtered.map((k, idx) => {
      const indSim = state.simCustomIndikasiMap.get(k.id) || k.indikasiAwal || 0;
      return `
        <tr>
          <td style="text-align:center;color:var(--text-subtle);">${idx + 1}</td>
          <td style="font-family:var(--font-mono);font-size:0.75rem;">${k.id}</td>
          <td class="freeze-col" style="font-weight:700;">${k.name}</td>
          <td>${k.provName}</td>
          <td><span class="badge badge-${k.delineasi.toLowerCase()}">${k.delineasi}</span></td>
          <td>${k.zone}</td>
          <td style="text-align:right;font-family:var(--font-mono);">${k.ikk.toFixed(3)}</td>
          <td style="text-align:right;color:#94a3b8;font-family:var(--font-mono);">${formatNumber(k.indikasiAwal)}</td>
          <td style="text-align:right;">
            <input type="number" class="editable-target-input input-sim-kab" data-kabid="${k.id}" value="${indSim}" min="0" max="30000" step="10">
          </td>
          <td style="text-align:right;color:#38bdf8;font-weight:800;">${formatNumber(k.targetUnitFinal)}</td>
        </tr>
      `;
    }).join("");

    tbodyKab.innerHTML = kabRows;
    tfootKab.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:right;font-weight:800;">TOTAL TERSARING:</td>
        <td style="text-align:right;color:#94a3b8;font-family:var(--font-mono);">${formatNumber(filtered.reduce((s, k) => s + (k.indikasiAwal || 0), 0))}</td>
        <td style="text-align:right;color:#38bdf8;font-weight:800;">${formatNumber(filtered.reduce((s, k) => s + (state.simCustomIndikasiMap.get(k.id) || k.indikasiAwal || 0), 0))}</td>
        <td style="text-align:right;color:#38bdf8;font-weight:800;">${formatNumber(filtered.reduce((s, k) => s + (k.targetUnitFinal || 0), 0))}</td>
      </tr>
    `;

    tbodyKab.querySelectorAll(".input-sim-kab").forEach(inp => {
      inp.addEventListener("change", (e) => {
        const kabId = e.target.getAttribute("data-kabid");
        const val = parseInt(e.target.value) || 0;
        state.simCustomIndikasiMap.set(kabId, val);
        showToast(`Indikasi simulasi Kab/Kota diperbarui`);
        recalculateAndRender();
      });
    });
  }
}

// ============================================================================
// TAB 5: SDM PENDAMPING
// ============================================================================
function renderTabSDM(data) {
  const tbody = document.getElementById("tbody-sdm");
  const tfoot = document.getElementById("tfoot-sdm");
  if (!tbody || !tfoot) return;

  const searchVal = (state.sdm.search || "").toLowerCase();
  const wilVal = state.sdm.wilayah;
  const pulauVal = state.sdm.pulau;
  const delVal = state.sdm.delineasi;
  const viewMode = state.sdm.viewMode;

  const provList = data.breakdownProvinsi || data.rekapProvinsi || [];
  const satkerList = data.breakdownSatker || data.rekapSatker || [];

  let rows = [];
  if (viewMode === "kabkota") {
    rows = data.detailKabKota.filter(k => {
      if (searchVal && !k.name.toLowerCase().includes(searchVal) && !k.provName.toLowerCase().includes(searchVal)) return false;
      if (wilVal && k.wilayahKerja !== wilVal) return false;
      if (pulauVal && k.pulau !== pulauVal) return false;
      if (delVal && k.delineasi !== delVal) return false;
      return true;
    }).map(k => {
      const hKor = k.komp1_korkab || 0;
      const hTpm = k.komp2_tpm || 0;
      const ops = k.komp6_operasionalTPM || 0;
      const pemb = k.komp7_pembekalan || 0;
      const atri = k.komp8_kitAtribut || 0;
      return {
        name: `${k.name} (${k.provName})`,
        targetUnit: k.targetUnitFinal,
        korkabCount: k.korkabCount,
        tpmCount: k.tpmCount,
        totalSDM: k.korkabCount + k.tpmCount,
        honorKorkab: hKor,
        honorTPM: hTpm,
        opsSDM: ops,
        pembekalanSDM: pemb,
        atributSDM: atri,
        totalBiayaSDM: hKor + hTpm + ops + pemb + atri
      };
    });
  } else if (viewMode === "provinsi") {
    rows = provList.filter(p => {
      if (searchVal && !p.name.toLowerCase().includes(searchVal)) return false;
      if (wilVal && p.wilayahKerja !== wilVal) return false;
      if (pulauVal && p.pulau !== pulauVal) return false;
      return true;
    }).map(p => {
      const kabInProv = data.detailKabKota.filter(k => k.provId === p.id);
      const hKor = kabInProv.reduce((s, k) => s + (k.komp1_korkab || 0), 0);
      const hTpm = kabInProv.reduce((s, k) => s + (k.komp2_tpm || 0), 0);
      const ops = kabInProv.reduce((s, k) => s + (k.komp6_operasionalTPM || 0), 0);
      const pemb = kabInProv.reduce((s, k) => s + (k.komp7_pembekalan || 0), 0);
      const atri = kabInProv.reduce((s, k) => s + (k.komp8_kitAtribut || 0), 0);
      return {
        name: p.name,
        targetUnit: p.totalUnit,
        korkabCount: p.korkabCount,
        tpmCount: p.tpmCount,
        totalSDM: p.korkabCount + p.tpmCount,
        honorKorkab: hKor,
        honorTPM: hTpm,
        opsSDM: ops,
        pembekalanSDM: pemb,
        atributSDM: atri,
        totalBiayaSDM: hKor + hTpm + ops + pemb + atri
      };
    });
  } else if (viewMode === "satker") {
    rows = satkerList.filter(s => {
      if (searchVal && !s.name.toLowerCase().includes(searchVal)) return false;
      return true;
    }).map(s => {
      const kabInSatker = data.detailKabKota.filter(k => k.satkerId === s.id);
      const hKor = kabInSatker.reduce((s, k) => s + (k.komp1_korkab || 0), 0);
      const hTpm = kabInSatker.reduce((s, k) => s + (k.komp2_tpm || 0), 0);
      const ops = kabInSatker.reduce((s, k) => s + (k.komp6_operasionalTPM || 0), 0);
      const pemb = kabInSatker.reduce((s, k) => s + (k.komp7_pembekalan || 0), 0);
      const atri = kabInSatker.reduce((s, k) => s + (k.komp8_kitAtribut || 0), 0);
      return {
        name: s.name,
        targetUnit: s.totalUnit,
        korkabCount: s.korkabCount,
        tpmCount: s.tpmCount,
        totalSDM: s.korkabCount + s.tpmCount,
        honorKorkab: hKor,
        honorTPM: hTpm,
        opsSDM: ops,
        pembekalanSDM: pemb,
        atributSDM: atri,
        totalBiayaSDM: hKor + hTpm + ops + pemb + atri
      };
    });
  }

  const sorted = sortData(rows, state.sdm.sortCol, state.sdm.sortDir);

  const rowsHtml = sorted.map((r, idx) => `
    <tr>
      <td style="text-align:center;color:var(--text-subtle);">${idx + 1}</td>
      <td class="freeze-col" style="font-weight:700;">${r.name}</td>
      <td style="text-align:right;">${formatNumber(r.targetUnit)}</td>
      <td style="text-align:right;">${formatNumber(r.korkabCount)}</td>
      <td style="text-align:right;">${formatNumber(r.tpmCount)}</td>
      <td style="text-align:right;color:#38bdf8;font-weight:800;">${formatNumber(r.totalSDM)}</td>
      <td style="text-align:right;">${formatRupiah(r.honorKorkab)}</td>
      <td style="text-align:right;">${formatRupiah(r.honorTPM)}</td>
      <td style="text-align:right;">${formatRupiah(r.opsSDM)}</td>
      <td style="text-align:right;">${formatRupiah(r.pembekalanSDM)}</td>
      <td style="text-align:right;">${formatRupiah(r.atributSDM)}</td>
      <td style="text-align:right;" class="grand-money">${formatRupiah(r.totalBiayaSDM)}</td>
    </tr>
  `).join("");

  tbody.innerHTML = rowsHtml;

  const totUnit = rows.reduce((s, r) => s + r.targetUnit, 0);
  const totKor = rows.reduce((s, r) => s + r.korkabCount, 0);
  const totTpm = rows.reduce((s, r) => s + r.tpmCount, 0);
  const totSDM = totKor + totTpm;
  const totBiaya = rows.reduce((s, r) => s + r.totalBiayaSDM, 0);

  tfoot.innerHTML = `
    <tr>
      <td colspan="2" style="text-align:right;font-weight:800;">TOTAL SDM:</td>
      <td style="text-align:right;color:#38bdf8;">${formatNumber(totUnit)}</td>
      <td style="text-align:right;">${formatNumber(totKor)}</td>
      <td style="text-align:right;">${formatNumber(totTpm)}</td>
      <td style="text-align:right;color:#38bdf8;font-weight:800;">${formatNumber(totSDM)}</td>
      <td colspan="5"></td>
      <td style="text-align:right;" class="grand-money">${formatRupiah(totBiaya)}</td>
    </tr>
  `;
}

// ============================================================================
// TAB 6: RINCIAN PROVINSI & SATKER (WITH HIERARCHICAL EXPAND)
// ============================================================================
function renderTabRincian(data) {
  const isProv = state.rincianView === "provinsi";
  const searchVal = (state.prov.search || "").toLowerCase();
  const wilVal = state.prov.wilayah;
  const pulauVal = state.prov.pulau;

  const provList = data.breakdownProvinsi || data.rekapProvinsi || [];
  const satkerList = data.breakdownSatker || data.rekapSatker || [];

  if (isProv) {
    const tbody = document.getElementById("tbody-provinsi");
    const tfoot = document.getElementById("tfoot-provinsi");
    if (!tbody || !tfoot) return;

    const filtered = provList.filter(p => {
      if (searchVal && !p.name.toLowerCase().includes(searchVal)) return false;
      if (wilVal && p.wilayahKerja !== wilVal) return false;
      if (pulauVal && p.pulau !== pulauVal) return false;
      return true;
    });

    const sorted = sortData(filtered, state.prov.sortCol, state.prov.sortDir);

    let rowsHtml = "";
    sorted.forEach((p) => {
      const isExpanded = state.expandAll || state.expandedProvs.has(p.id);
      rowsHtml += `
        <tr class="prov-row" data-provid="${p.id}" style="cursor:pointer;">
          <td style="text-align:center;font-size:0.9rem;user-select:none;">${isExpanded ? "▼" : "▶"}</td>
          <td class="freeze-col" style="font-weight:800;color:var(--text-bright);">${p.name}</td>
          <td>${p.wilayahKerja}</td>
          <td>${p.pulau}</td>
          <td style="text-align:right;font-family:var(--font-mono);">${p.ikk.toFixed(3)}</td>
          <td>${p.zone}</td>
          <td style="text-align:right;">${formatNumber(p.unitDJKP || p.targetDJKP || 0)}</td>
          <td style="text-align:right;">${formatNumber(p.unitDJPKT || p.targetDJPKT || 0)}</td>
          <td style="text-align:right;">${formatNumber(p.unitDJPDS || p.targetDJPDS || 0)}</td>
          <td style="text-align:right;color:#94a3b8;font-family:var(--font-mono);">${formatNumber(p.totalIndikasiAwal || 0)}</td>
          <td style="text-align:right;color:#38bdf8;font-weight:800;">${formatNumber(p.totalUnit)}</td>
          <td style="text-align:right;">${formatRupiah(p.biayaFisik_526312)}</td>
          <td style="text-align:right;">${formatRupiah(p.totalPendampingan)}</td>
          <td style="text-align:right;" class="grand-money">${formatRupiah(p.grandTotal)}</td>
        </tr>
      `;

      if (isExpanded) {
        const kabInProv = data.detailKabKota.filter(k => k.provId === p.id);
        kabInProv.forEach(k => {
          rowsHtml += `
            <tr style="background:rgba(15,23,42,0.6);font-size:0.75rem;">
              <td></td>
              <td class="freeze-col" style="padding-left:2rem;color:var(--text-muted);">↳ ${k.name}</td>
              <td style="color:var(--text-subtle);">${k.wilayahKerja}</td>
              <td style="color:var(--text-subtle);">${k.pulau}</td>
              <td style="text-align:right;font-family:var(--font-mono);color:var(--text-subtle);">${k.ikk.toFixed(3)}</td>
              <td><span class="badge badge-${k.delineasi.toLowerCase()}">${k.delineasi}</span></td>
              <td colspan="3" style="text-align:center;color:var(--text-subtle);">${k.zone}</td>
              <td style="text-align:right;color:#94a3b8;font-family:var(--font-mono);">${formatNumber(k.indikasiAwal || 0)}</td>
              <td style="text-align:right;font-weight:700;color:#38bdf8;">${formatNumber(k.targetUnitFinal)}</td>
              <td style="text-align:right;color:var(--text-muted);">${formatRupiah(k.biayaFisik_526312)}</td>
              <td style="text-align:right;color:var(--text-muted);">${formatRupiah(k.totalPendampingan)}</td>
              <td style="text-align:right;color:#34d399;">${formatRupiah(k.grandTotal)}</td>
            </tr>
          `;
        });
      }
    });

    tbody.innerHTML = rowsHtml;

    const totals = filtered.reduce((acc, p) => {
      acc.indikasi += (p.totalIndikasiAwal || 0);
      acc.unit += p.totalUnit;
      acc.fisik += p.biayaFisik_526312;
      acc.pend += p.totalPendampingan;
      acc.grand += p.grandTotal;
      return acc;
    }, { indikasi: 0, unit: 0, fisik: 0, pend: 0, grand: 0 });

    tfoot.innerHTML = `
      <tr>
        <td colspan="9" style="text-align:right;font-weight:800;">TOTAL (${filtered.length} PROVINSI):</td>
        <td style="text-align:right;color:#94a3b8;font-family:var(--font-mono);">${formatNumber(totals.indikasi)}</td>
        <td style="text-align:right;color:#38bdf8;font-weight:800;">${formatNumber(totals.unit)}</td>
        <td style="text-align:right;color:#38bdf8;">${formatRupiah(totals.fisik)}</td>
        <td style="text-align:right;color:#f59e0b;">${formatRupiah(totals.pend)}</td>
        <td style="text-align:right;" class="grand-money">${formatRupiah(totals.grand)}</td>
      </tr>
    `;

    tbody.querySelectorAll(".prov-row").forEach(tr => {
      tr.addEventListener("click", () => {
        const provId = tr.getAttribute("data-provid");
        if (state.expandedProvs.has(provId)) state.expandedProvs.delete(provId);
        else state.expandedProvs.add(provId);
        renderTabRincian(currentCalculatedData);
      });
    });
  } else {
    // Rincian per Satker
    const tbodySat = document.getElementById("tbody-satker");
    const tfootSat = document.getElementById("tfoot-satker");
    if (!tbodySat || !tfootSat) return;

    const sorted = sortData(satkerList, state.satker.sortCol, state.satker.sortDir);
    const rowsHtml = sorted.map((s, idx) => `
      <tr>
        <td style="font-family:var(--font-mono);font-size:0.75rem;color:var(--primary);">${s.id}</td>
        <td class="freeze-col" style="font-weight:700;">${s.name}</td>
        <td>${s.wilayahKerja}</td>
        <td style="text-align:right;color:#94a3b8;font-family:var(--font-mono);">${formatNumber(s.totalIndikasiAwal || 0)}</td>
        <td style="text-align:right;color:#38bdf8;font-weight:800;">${formatNumber(s.totalUnit)}</td>
        <td style="text-align:right;">${formatNumber(s.korkabCount)}</td>
        <td style="text-align:right;">${formatNumber(s.tpmCount)}</td>
        <td style="text-align:right;">${formatRupiah(s.biayaFisik_526312)}</td>
        <td style="text-align:right;">${formatRupiah(s.totalPendampingan)}</td>
        <td style="text-align:right;" class="grand-money">${formatRupiah(s.grandTotal)}</td>
      </tr>
    `).join("");

    tbodySat.innerHTML = rowsHtml;

    const totals = satkerList.reduce((acc, s) => {
      acc.indikasi += (s.totalIndikasiAwal || 0);
      acc.unit += s.totalUnit;
      acc.fisik += s.biayaFisik_526312;
      acc.pend += s.totalPendampingan;
      acc.grand += s.grandTotal;
      acc.kor += s.korkabCount;
      acc.tpm += s.tpmCount;
      return acc;
    }, { indikasi: 0, unit: 0, fisik: 0, pend: 0, grand: 0, kor: 0, tpm: 0 });

    tfootSat.innerHTML = `
      <tr>
        <td colspan="3" style="text-align:right;font-weight:800;">TOTAL NASIONAL (${satkerList.length} SATKER):</td>
        <td style="text-align:right;color:#94a3b8;font-family:var(--font-mono);">${formatNumber(totals.indikasi)}</td>
        <td style="text-align:right;color:#38bdf8;font-weight:800;">${formatNumber(totals.unit)}</td>
        <td style="text-align:right;">${formatNumber(totals.kor)}</td>
        <td style="text-align:right;">${formatNumber(totals.tpm)}</td>
        <td style="text-align:right;color:#38bdf8;">${formatRupiah(totals.fisik)}</td>
        <td style="text-align:right;color:#f59e0b;">${formatRupiah(totals.pend)}</td>
        <td style="text-align:right;" class="grand-money">${formatRupiah(totals.grand)}</td>
      </tr>
    `;
  }
}

// ============================================================================
// EVENT LISTENERS & CONTROLS BINDING
// ============================================================================
function initEventListeners() {
  // 1. Tab Switching (6 Tabs)
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      const panel = document.getElementById(targetId);
      if (panel) panel.classList.add("active");
      state.activeTab = targetId;

      // Trigger chart refresh on tab switch for visible canvases
      setTimeout(() => {
        if (targetId === "tab-komposisi" && currentCalculatedData) {
          renderTabKomposisiCharts(currentCalculatedData);
        } else if (targetId === "tab-bas" && currentCalculatedData) {
          renderTabBAS(currentCalculatedData.konsolidasiBAS, currentCalculatedData.summary);
        }
      }, 50);
    });
  });

  // 2. Executive Slicer (Ditjen)
  const delBtns = [
    { id: "btn-del-all", val: "" },
    { id: "btn-del-djkp", val: "DJKP" },
    { id: "btn-del-djpkt", val: "DJPKT" },
    { id: "btn-del-djpds", val: "DJPDS" }
  ];

  delBtns.forEach(item => {
    const btn = document.getElementById(item.id);
    if (btn) {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".del-filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.globalDelineasiFilter = item.val;
        const delSelect = document.getElementById("filter-delineasi");
        if (delSelect) delSelect.value = item.val;
        state.kabkota.delineasi = item.val;
        recalculateAndRender();
      });
    }
  });

  // 3. Base Target Adjuster
  const inputTotal = document.getElementById("input-total-target");
  const applyBaseTarget = (newTotal) => {
    if (newTotal < 1000) return;
    state.targets.total = newTotal;
    state.targets.djkp = Math.round(newTotal * (50000 / 370000));
    state.targets.djpkt = Math.round(newTotal * (120000 / 370000));
    state.targets.djpds = newTotal - state.targets.djkp - state.targets.djpkt;

    // Sync simulator inputs
    const sDjkp = document.getElementById("sim-num-djkp");
    const sDjpkt = document.getElementById("sim-num-djpkt");
    const sDjpds = document.getElementById("sim-num-djpds");
    if (sDjkp) sDjkp.value = state.targets.djkp;
    if (sDjpkt) sDjpkt.value = state.targets.djpkt;
    if (sDjpds) sDjpds.value = state.targets.djpds;

    showToast(`Base target nasional diubah ke ${formatNumber(newTotal)} unit`);
    recalculateAndRender();
  };

  if (inputTotal) {
    inputTotal.addEventListener("change", (e) => applyBaseTarget(parseInt(e.target.value) || 370000));
  }

  const btn370 = document.getElementById("btn-set-target-370");
  if (btn370) {
    btn370.addEventListener("click", () => {
      if (inputTotal) inputTotal.value = 370000;
      applyBaseTarget(370000);
    });
  }

  const btn400 = document.getElementById("btn-set-target-400");
  if (btn400) {
    btn400.addEventListener("click", () => {
      if (inputTotal) inputTotal.value = 400000;
      applyBaseTarget(400000);
    });
  }

  // 4. Tab Master 514 Grouping Mode
  const groupBtns = [
    { id: "btn-group-flat", val: "flat" },
    { id: "btn-group-prov", val: "provinsi" },
    { id: "btn-group-satker", val: "satker" }
  ];

  groupBtns.forEach(item => {
    const btn = document.getElementById(item.id);
    if (btn) {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".group-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.kabkotaGroupMode = item.val;
        renderTabKabKota(currentCalculatedData.detailKabKota);
      });
    }
  });

  const btnResetKabIndikasi = document.getElementById("btn-reset-kab-indikasi");
  if (btnResetKabIndikasi) {
    btnResetKabIndikasi.addEventListener("click", () => {
      state.customizedKabIds.clear();
      state.kabKotaData.forEach(k => delete k._targetFinalOverride);
      showToast("Seluruh modifikasi target final berhasil direset ke default alokasi");
      recalculateAndRender();
    });
  }

  // Filters Tab Master 514
  const bindFilter = (id, prop) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", (e) => {
        state.kabkota[prop] = e.target.value;
        renderTabKabKota(currentCalculatedData.detailKabKota);
      });
    }
  };
  bindFilter("search-kabkota", "search");
  bindFilter("filter-wilayah", "wilayah");
  bindFilter("filter-pulau", "pulau");
  bindFilter("filter-delineasi", "delineasi");
  bindFilter("filter-zone", "zone");

  // 5. Tab Komposisi Anggaran Sub-Tabs
  const subTabBtns = [
    { id: "btn-sub-fisik", panelId: "sub-panel-fisik", val: "fisik" },
    { id: "btn-sub-nonfisik", panelId: "sub-panel-nonfisik", val: "nonfisik" },
    { id: "btn-sub-makro", panelId: "sub-panel-makro", val: "makro" }
  ];

  subTabBtns.forEach(item => {
    const btn = document.getElementById(item.id);
    if (btn) {
      btn.addEventListener("click", () => {
        subTabBtns.forEach(b => {
          const bEl = document.getElementById(b.id);
          const pEl = document.getElementById(b.panelId);
          if (bEl) bEl.classList.remove("active");
          if (pEl) {
            pEl.classList.remove("active");
            pEl.style.display = "none";
          }
        });

        btn.classList.add("active");
        const panel = document.getElementById(item.panelId);
        if (panel) {
          panel.classList.add("active");
          panel.style.display = "flex";
        }
        state.komposisiSubTab = item.val;

        // Render data and charts for active subtab
        if (currentCalculatedData) {
          renderTabKomposisi(currentCalculatedData);
          renderTabKomposisiCharts(currentCalculatedData);
        }
      });
    }
  });

  // Ditjen Delineasi Slicer for Sub-panel Non-Fisik
  document.querySelectorAll("#slicer-nonfisik-del-group .mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#slicer-nonfisik-del-group .mode-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const delVal = btn.getAttribute("data-del") || "";
      state.nonfisik.delineasi = delVal;
      if (currentCalculatedData) {
        renderTabKomposisiNonFisik(currentCalculatedData);
        renderTabKomposisiCharts(currentCalculatedData);
      }
      showToast(delVal ? `Filter Sub-tab Non-Fisik: Ditjen ${delVal}` : "Filter Sub-tab Non-Fisik: Semua Ditjen");
    });
  });

  // Toolbar controls for Komposisi Non-Fisik Tree View
  const searchNonFisik = document.getElementById("search-nonfisik");
  const filterNonFisikSatker = document.getElementById("filter-nonfisik-satker");
  const btnNonFisikTree = document.getElementById("btn-nonfisik-tree");
  const btnNonFisikFlat = document.getElementById("btn-nonfisik-flat");
  const btnNonFisikExpand = document.getElementById("btn-nonfisik-expand-all");
  const btnNonFisikCollapse = document.getElementById("btn-nonfisik-collapse-all");

  if (searchNonFisik) {
    searchNonFisik.addEventListener("input", (e) => {
      state.nonfisik.search = e.target.value;
      if (currentCalculatedData) renderTabKomposisiNonFisik(currentCalculatedData);
    });
  }

  if (filterNonFisikSatker) {
    filterNonFisikSatker.addEventListener("change", (e) => {
      state.nonfisik.satkerId = e.target.value;
      if (currentCalculatedData) renderTabKomposisiNonFisik(currentCalculatedData);
    });
  }

  if (btnNonFisikTree) {
    btnNonFisikTree.addEventListener("click", () => {
      btnNonFisikTree.classList.add("active");
      if (btnNonFisikFlat) btnNonFisikFlat.classList.remove("active");
      state.nonfisik.viewMode = "tree";
      if (currentCalculatedData) renderTabKomposisiNonFisik(currentCalculatedData);
    });
  }

  if (btnNonFisikFlat) {
    btnNonFisikFlat.addEventListener("click", () => {
      btnNonFisikFlat.classList.add("active");
      if (btnNonFisikTree) btnNonFisikTree.classList.remove("active");
      state.nonfisik.viewMode = "flat";
      if (currentCalculatedData) renderTabKomposisiNonFisik(currentCalculatedData);
    });
  }

  if (btnNonFisikExpand) {
    btnNonFisikExpand.addEventListener("click", () => {
      if (!currentCalculatedData || !currentCalculatedData.breakdownSatker) return;
      currentCalculatedData.breakdownSatker.forEach(s => {
        state.nonfisik.expandedSatkers.add(s.id);
        ["522191", "521211", "524111", "524119", "522141"].forEach(code => {
          state.nonfisik.expandedAccounts.add(`${s.id}_${code}`);
        });
      });
      renderTabKomposisiNonFisik(currentCalculatedData);
    });
  }

  if (btnNonFisikCollapse) {
    btnNonFisikCollapse.addEventListener("click", () => {
      state.nonfisik.expandedSatkers.clear();
      state.nonfisik.expandedAccounts.clear();
      renderTabKomposisiNonFisik(currentCalculatedData);
    });
  }

  // 6. Tab BAS Filters
  const basProv = document.getElementById("filter-bas-provinsi");
  const basSat = document.getElementById("filter-bas-satker");
  if (basProv) {
    basProv.addEventListener("change", (e) => {
      state.bas.provId = e.target.value;
      renderTabBAS(currentCalculatedData.konsolidasiBAS, currentCalculatedData.summary);
    });
  }
  if (basSat) {
    basSat.addEventListener("change", (e) => {
      state.bas.satkerId = e.target.value;
      renderTabBAS(currentCalculatedData.konsolidasiBAS, currentCalculatedData.summary);
    });
  }

  // 7. Tab Simulator Sub-Modes
  const simModeBtns = [
    { id: "btn-sim-agregat", panelId: "panel-sim-agregat", val: "agregat" },
    { id: "btn-sim-provinsi", panelId: "panel-sim-provinsi", val: "provinsi" },
    { id: "btn-sim-kabkota", panelId: "panel-sim-kabkota", val: "kabkota" }
  ];

  simModeBtns.forEach(item => {
    const btn = document.getElementById(item.id);
    if (btn) {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".sim-mode-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".sim-sub-panel").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        const panel = document.getElementById(item.panelId);
        if (panel) panel.classList.add("active");
        state.simMode = item.val;
      });
    }
  });

  // Simulator Agregat Sliders & Sync
  const bindSyncInput = (sliderId, numId) => {
    const s = document.getElementById(sliderId);
    const n = document.getElementById(numId);
    if (s && n) {
      s.addEventListener("input", () => { n.value = s.value; });
      n.addEventListener("input", () => { s.value = n.value; });
    }
  };
  bindSyncInput("sim-slider-djkp", "sim-num-djkp");
  bindSyncInput("sim-slider-djpkt", "sim-num-djpkt");
  bindSyncInput("sim-slider-djpds", "sim-num-djpds");

  const btnApplySim = document.getElementById("btn-apply-sim");
  if (btnApplySim) {
    btnApplySim.addEventListener("click", () => {
      const djkp = parseInt(document.getElementById("sim-num-djkp")?.value) || 50000;
      const djpkt = parseInt(document.getElementById("sim-num-djpkt")?.value) || 120000;
      const djpds = parseInt(document.getElementById("sim-num-djpds")?.value) || 200000;
      state.targets.djkp = djkp;
      state.targets.djpkt = djpkt;
      state.targets.djpds = djpds;
      state.targets.total = djkp + djpkt + djpds;
      showToast(`Simulasi agregat diterapkan: Total ${formatNumber(state.targets.total)} Unit`);
      recalculateAndRender();
    });
  }

  const btnResetSim = document.getElementById("btn-reset-sim");
  if (btnResetSim) {
    btnResetSim.addEventListener("click", () => {
      state.targets = JSON.parse(JSON.stringify(DEFAULT_TARGETS));
      document.getElementById("sim-num-djkp").value = 50000;
      document.getElementById("sim-slider-djkp").value = 50000;
      document.getElementById("sim-num-djpkt").value = 120000;
      document.getElementById("sim-slider-djpkt").value = 120000;
      document.getElementById("sim-num-djpds").value = 200000;
      document.getElementById("sim-slider-djpds").value = 200000;
      state.simCustomIndikasiMap.clear();
      showToast("Simulasi target berhasil direset");
      recalculateAndRender();
    });
  }

  // 8. Tab SDM View Mode Buttons
  document.querySelectorAll("[data-sdm-view]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-sdm-view]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.sdm.viewMode = btn.getAttribute("data-sdm-view");
      renderTabSDM(currentCalculatedData);
    });
  });

  // 9. Tab Rincian Toggle Buttons
  const btnRincProv = document.getElementById("btn-rincian-prov");
  const btnRincSat = document.getElementById("btn-rincian-satker");
  const panRincProv = document.getElementById("panel-rincian-prov");
  const panRincSat = document.getElementById("panel-rincian-satker");

  if (btnRincProv && btnRincSat && panRincProv && panRincSat) {
    btnRincProv.addEventListener("click", () => {
      btnRincProv.classList.add("active");
      btnRincSat.classList.remove("active");
      panRincProv.classList.add("active");
      panRincSat.classList.remove("active");
      state.rincianView = "provinsi";
      renderTabRincian(currentCalculatedData);
    });

    btnRincSat.addEventListener("click", () => {
      btnRincSat.classList.add("active");
      btnRincProv.classList.remove("active");
      panRincSat.classList.add("active");
      panRincProv.classList.remove("active");
      state.rincianView = "satker";
      renderTabRincian(currentCalculatedData);
    });
  }

  const btnToggleExpand = document.getElementById("btn-toggle-expand-all");
  if (btnToggleExpand) {
    btnToggleExpand.addEventListener("click", () => {
      state.expandAll = !state.expandAll;
      btnToggleExpand.textContent = state.expandAll ? "Tutup Semua" : "Buka Semua";
      renderTabRincian(currentCalculatedData);
    });
  }

  // 10. Sidebar Controls (Masa Tugas, Rasio TPM, Gaji Inkindo vs Manual)
  bindSyncInput("slider-rasio-tpm", "num-rasio-tpm");
  bindSyncInput("slider-masa-tpm", "num-masa-tpm");
  bindSyncInput("slider-masa-korkab", "num-masa-korkab");
  bindSyncInput("slider-faktor-inkindo", "num-faktor-inkindo");

  // Rasio Presets
  document.querySelectorAll(".ratio-preset-btn").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".ratio-preset-btn").forEach(btn => btn.classList.remove("active"));
      b.classList.add("active");
      const val = parseInt(b.getAttribute("data-ratio"));
      document.getElementById("slider-rasio-tpm").value = val;
      document.getElementById("num-rasio-tpm").value = val;
      state.params.rasioTPMUnit = val;
      state.params.rasioTPM = val;
      recalculateAndRender();
    });
  });

  const bindParamChange = (id, callback) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", (e) => {
        callback(e.target.value);
        recalculateAndRender();
      });
    }
  };

  bindParamChange("num-rasio-tpm", v => { const val = parseInt(v) || 40; state.params.rasioTPMUnit = val; state.params.rasioTPM = val; });
  bindParamChange("num-masa-tpm", v => { const val = parseInt(v) || 5; state.params.masaTPM = val; state.params.durasiBulanTPM = val; });
  bindParamChange("num-masa-korkab", v => { const val = parseInt(v) || 10; state.params.masaKorkab = val; state.params.durasiBulanKorkab = val; });
  bindParamChange("num-faktor-inkindo", v => { const val = (parseInt(v) || 55) / 100; state.params.inkindoFactor = val; state.params.faktorInkindo = val; });
  bindParamChange("num-gaji-manual-tpm", v => { const val = parseInt(v) || 6000000; state.params.gajiManualTPM = val; state.params.manualGajiTPM = val; });
  bindParamChange("num-gaji-manual-korkab", v => { const val = parseInt(v) || 7000000; state.params.gajiManualKorkab = val; state.params.manualGajiKorkab = val; });

  // Rate Fisik Matrix (Bantuan Fisik)
  bindParamChange("num-rate-fisik-mudah", v => { if (!state.params.rateFisikMatrix) state.params.rateFisikMatrix = {}; state.params.rateFisikMatrix.Mudah = parseInt(v) || 20000000; });
  bindParamChange("num-rate-fisik-sedang", v => { if (!state.params.rateFisikMatrix) state.params.rateFisikMatrix = {}; state.params.rateFisikMatrix.Sedang = parseInt(v) || 25000000; });
  bindParamChange("num-rate-fisik-sulit", v => { if (!state.params.rateFisikMatrix) state.params.rateFisikMatrix = {}; state.params.rateFisikMatrix.Sulit = parseInt(v) || 40000000; });

  // Support Cost Matrix TPM
  bindParamChange("num-support-tpm-mudah", v => { if (!state.params.supportTPMMatrix) state.params.supportTPMMatrix = {}; state.params.supportTPMMatrix.Mudah = parseInt(v) || 500000; });
  bindParamChange("num-support-tpm-sedang", v => { if (!state.params.supportTPMMatrix) state.params.supportTPMMatrix = {}; state.params.supportTPMMatrix.Sedang = parseInt(v) || 1000000; });
  bindParamChange("num-support-tpm-sulit", v => { if (!state.params.supportTPMMatrix) state.params.supportTPMMatrix = {}; state.params.supportTPMMatrix.Sulit = parseInt(v) || 1500000; });

  // Authentic Non-SBM Rates from Prompt
  bindParamChange("num-rate-kit-atribut", v => { const val = parseInt(v) || 250000; state.params.rateKitAtribut = val; state.params.biayaAtributPersonel = val; });
  bindParamChange("num-rate-laporan", v => { state.params.rateLaporanBulanan = parseInt(v) || 75000; });
  bindParamChange("num-rate-rab", v => { state.params.rateRAB = parseInt(v) || 25000; });
  bindParamChange("num-rate-digitalisasi", v => { state.params.rateDigitalisasi = parseInt(v) || 25000; });
  bindParamChange("num-rate-peneng", v => { state.params.ratePeneng = parseInt(v) || 50000; });
  bindParamChange("num-rate-video-prov", v => { state.params.rateVideoProv = parseInt(v) || 30000000; });

  const selRembuk = document.getElementById("select-frekuensi-rembuk");
  if (selRembuk) {
    selRembuk.addEventListener("change", (e) => {
      const val = parseInt(e.target.value, 10) || 3;
      state.params.frekuensiRembukWarga = val;
      state.params.frekuensiRembuk = val;
      showToast(`Frekuensi Rembuk Warga diubah ke ${val}x per unit`);
      recalculateAndRender();
    });
  }

  const chkIkk = document.getElementById("chk-gaji-manual-ikk");
  if (chkIkk) {
    chkIkk.addEventListener("change", (e) => {
      state.params.gajiManualUseIKK = e.target.checked;
      state.params.manualGajiGunakanIKK = e.target.checked;
      recalculateAndRender();
    });
  }

  // Method Switcher Inkindo vs Manual
  const btnInkindo = document.getElementById("btn-method-inkindo");
  const btnManual = document.getElementById("btn-method-manual");
  const panInkindo = document.getElementById("panel-salary-inkindo");
  const panManual = document.getElementById("panel-salary-manual");

  if (btnInkindo && btnManual && panInkindo && panManual) {
    btnInkindo.addEventListener("click", () => {
      btnInkindo.classList.add("active");
      btnManual.classList.remove("active");
      panInkindo.style.display = "block";
      panManual.style.display = "none";
      state.params.gajiMethod = "inkindo";
      state.params.metodeGaji = "inkindo";
      recalculateAndRender();
    });

    btnManual.addEventListener("click", () => {
      btnManual.classList.add("active");
      btnInkindo.classList.remove("active");
      panManual.style.display = "block";
      panInkindo.style.display = "none";
      state.params.gajiMethod = "manual";
      state.params.metodeGaji = "manual";
      recalculateAndRender();
    });
  }

  // Sidebar Reset Parameters Button
  const btnResetParams = document.getElementById("btn-reset-params");
  if (btnResetParams) {
    btnResetParams.addEventListener("click", () => {
      state.params = JSON.parse(JSON.stringify(DEFAULT_PARAMS));
      syncSidebarInputsFromState();
      showToast("Seluruh parameter dinamis berhasil direset ke standar dokumen resmi");
      recalculateAndRender();
    });
  }

  // SBM Modal
  const btnOpenSbm = document.getElementById("btn-open-sbm");
  const btnCloseSbm = document.getElementById("btn-close-sbm");
  const modalSbm = document.getElementById("modal-sbm");
  const btnSaveSbm = document.getElementById("btn-save-sbm");

  if (btnOpenSbm && modalSbm) {
    btnOpenSbm.addEventListener("click", () => modalSbm.classList.add("show"));
  }
  if (btnCloseSbm && modalSbm) {
    btnCloseSbm.addEventListener("click", () => modalSbm.classList.remove("show"));
  }
  if (btnSaveSbm && modalSbm) {
    btnSaveSbm.addEventListener("click", () => {
      state.sbmRates.makanRapat = parseInt(document.getElementById("sbm-makan")?.value) || 48000;
      state.sbmRates.uangHarianLokal = parseInt(document.getElementById("sbm-uh-lokal")?.value) || 150000;
      state.sbmRates.hotelLokal = parseInt(document.getElementById("sbm-hotel-lokal")?.value) || 550000;
      state.sbmRates.transportLokal = parseInt(document.getElementById("sbm-transport-lokal")?.value) || 250000;
      state.sbmRates.tiketPesawatJKT = parseInt(document.getElementById("sbm-tiket-jkt")?.value) || 3500000;
      state.sbmRates.uangHarianJKT = parseInt(document.getElementById("sbm-uh-jkt")?.value) || 530000;
      state.sbmRates.sewaMobilPPK = parseInt(document.getElementById("sbm-sewa-ppk")?.value) || 9000000;
      state.sbmRates.sewaMobilHarian = parseInt(document.getElementById("sbm-sewa-insidental")?.value) || 850000;
      modalSbm.classList.remove("show");
      showToast("Standar SBM berhasil diperbarui");
      recalculateAndRender();
    });
  }

  // Export Excel
  const btnExport = document.getElementById("btn-export-excel");
  if (btnExport) {
    btnExport.addEventListener("click", () => {
      if (currentCalculatedData) {
        showToast("Menyiapkan berkas Excel...");
        exportToExcel(currentCalculatedData, state.params, state.sbmRates);
      }
    });
  }
}

// Sort Headers Binding
function initSortHeaders() {
  document.querySelectorAll(".sortable-header").forEach(th => {
    th.addEventListener("click", () => {
      const col = th.getAttribute("data-sort");
      if (!col) return;
      const table = th.closest("table");
      if (!table) return;

      let targetState = state.kabkota;
      if (table.id === "table-provinsi") targetState = state.prov;
      else if (table.id === "table-satker") targetState = state.satker;
      else if (table.id === "table-sdm") targetState = state.sdm;

      if (targetState.sortCol === col) {
        targetState.sortDir = targetState.sortDir === "asc" ? "desc" : "asc";
      } else {
        targetState.sortCol = col;
        targetState.sortDir = "desc";
      }

      if (table.id === "table-kabkota") renderTabKabKota(currentCalculatedData.detailKabKota);
      else if (table.id === "table-provinsi" || table.id === "table-satker") renderTabRincian(currentCalculatedData);
      else if (table.id === "table-sdm") renderTabSDM(currentCalculatedData);
    });
  });
}
