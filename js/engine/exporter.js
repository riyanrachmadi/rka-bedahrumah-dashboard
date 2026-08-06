/**
 * MULTI-SHEET EXCEL (XLSX) EXPORT ENGINE
 * Menghasilkan buku kerja Excel (.xlsx) resmi dengan 9 lembar kerja terstruktur
 * siap cetak/lapor untuk penyusunan DIPA RKA-K/L Kementerian PKP.
 */

export function exportToExcel(calculatedData, params = {}, sbmRates = {}) {
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
