/**
 * MULTI-SHEET EXCEL (XLSX) EXPORT ENGINE
 * Menghasilkan buku kerja Excel (.xlsx) resmi dengan 9 lembar kerja terstruktur
 * siap cetak/lapor untuk penyusunan DIPA RKA-K/L Kementerian PKP.
 */

export function exportToExcel(calculatedData, params, sbmRates) {
  if (typeof XLSX === 'undefined') {
    alert('Library SheetJS (XLSX) sedang dimuat, silakan coba beberapa saat lagi.');
    return;
  }

  const wb = XLSX.utils.book_new();

  // --- SHEET 1: REKAP BAS NASIONAL ---
  const basRows = [
    ['KEMENTERIAN PERUMAHAN DAN KAWASAN PERMUKIMAN (PKP)'],
    ['REKAPITULASI RKA-K/L PROGRAM BEDAH RUMAH TA 2027 BERDASARKAN BAGAN AKUN STANDAR (KEP-331/PB/2021)'],
    ['Target Nasional: ' + calculatedData.summary.totalUnitNasional.toLocaleString('id-ID') + ' Unit | 38 Provinsi | 34 Satker DIPA | 56 PPK'],
    [],
    ['No', 'Kode BAS', 'Uraian Akun Belanja', 'Postur Anggaran', 'Komponen Terkait', 'Total Anggaran (Rp)', 'Proporsi (%)']
  ];

  calculatedData.konsolidasiBAS.forEach((bas, idx) => {
    basRows.push([
      idx + 1,
      bas.code,
      bas.name,
      bas.postur,
      bas.components.join('; '),
      bas.total,
      Number(bas.percentage.toFixed(2))
    ]);
  });

  basRows.push([]);
  basRows.push(['', '', 'GRAND TOTAL RKA-K/L (FISIK + PENDAMPINGAN)', '', '', calculatedData.summary.grandTotalRKA, 100.0]);
  basRows.push(['', '', 'TOTAL BANTUAN FISIK (POSTUR 1)', '', '', calculatedData.summary.totalFisik_526312, Number(((calculatedData.summary.totalFisik_526312 / calculatedData.summary.grandTotalRKA) * 100).toFixed(2))]);
  basRows.push(['', '', 'TOTAL BIAYA PENDAMPINGAN (POSTUR 2)', '', '', calculatedData.summary.grandTotalPendampingan, Number(((calculatedData.summary.grandTotalPendampingan / calculatedData.summary.grandTotalRKA) * 100).toFixed(2))]);
  basRows.push(['', '', 'RATA-RATA PENDAMPINGAN PER UNIT', '', '', calculatedData.summary.rataPendampinganPerUnit, '']);

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

  calculatedData.breakdownSatker.forEach((s, idx) => {
    satkerRows.push([
      idx + 1,
      s.id,
      s.name,
      s.wilayahKerja || '',
      s.pulau || '',
      s.provinces.map(p => p.name).join(', '),
      s.unitDJKP,
      s.unitDJPKT,
      s.unitDJPDS,
      s.totalUnit,
      s.totalPPK,
      s.biayaFisik_526312,
      s.komp1_korkab,
      s.komp2_tpm,
      s.komp3_konsumsiRembuk,
      s.komp4_laporanBulanan,
      s.komp5_rabGambar,
      s.komp6_operasionalTPM,
      s.komp7_pembekalan,
      s.komp8_kitAtribut,
      s.komp9_verifikasi,
      s.komp10_wasdal,
      s.komp11_koordPusat,
      s.komp12_digitalisasi,
      s.komp13_videoBestPractice,
      s.komp14_aph,
      s.komp15_peneng,
      s.komp16a_sewaPPK,
      s.komp16b_sewaInsidental,
      s.totalPendampingan,
      s.grandTotal
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

  calculatedData.breakdownProvinsi.forEach((p, idx) => {
    provRows.push([
      idx + 1,
      p.id,
      p.name,
      p.satkerName,
      p.wilayahKerja || '',
      p.pulau || '',
      p.ikk,
      p.defaultZone,
      p.unitDJKP,
      p.unitDJPKT,
      p.unitDJPDS,
      p.totalUnit,
      p.ppkCount,
      p.biayaFisik_526312,
      p.komp1_korkab,
      p.komp2_tpm,
      p.komp3_konsumsiRembuk,
      p.komp4_laporanBulanan,
      p.komp5_rabGambar,
      p.komp6_operasionalTPM,
      p.komp7_pembekalan,
      p.komp8_kitAtribut,
      p.komp9_verifikasi,
      p.komp10_wasdal,
      p.komp12_digitalisasi,
      p.komp13_videoBestPractice,
      p.komp14_aph,
      p.komp15_peneng,
      p.komp16a_sewaPPK,
      p.komp16b_sewaInsidental,
      p.totalPendampingan,
      p.grandTotal
    ]);
  });

  const wsProv = XLSX.utils.aoa_to_sheet(provRows);
  XLSX.utils.book_append_sheet(wb, wsProv, 'Breakdown_38_Provinsi');

  // --- SHEET 4: SDM TPM & KORKAB ---
  const sdmRows = [
    ['REKAPITULASI TENAGA PENDAMPING (TPM) DAN KOORDINATOR KABUPATEN/KOTA (KORKAB)'],
    [],
    [
      'No', 'Provinsi / Satker', 'Wilayah Kerja', 'Pulau', 'Total Unit',
      'Jumlah Korkab (Org)', 'Korkab OB', 'Honor Korkab (Rp)',
      'Jumlah TPM (Org)', 'TPM OB', 'Honor TPM (Rp)', 'Support Ops TPM (Rp)',
      'Total Biaya SDM Lapangan (Rp)'
    ]
  ];

  calculatedData.breakdownProvinsi.forEach((p, idx) => {
    const sdmTotal = (p.komp1_korkab || 0) + (p.komp2_tpm || 0) + (p.komp6_operasionalTPM || 0);
    sdmRows.push([
      idx + 1,
      p.name,
      p.wilayahKerja || '',
      p.pulau || '',
      p.totalUnit,
      p.korkabCount || 0,
      p.korkabOB || 0,
      p.komp1_korkab || 0,
      p.tpmCount || 0,
      p.tpmOB || 0,
      p.komp2_tpm || 0,
      p.komp6_operasionalTPM || 0,
      sdmTotal
    ]);
  });

  const wsSDM = XLSX.utils.aoa_to_sheet(sdmRows);
  XLSX.utils.book_append_sheet(wb, wsSDM, 'SDM_TPM_Korkab');

  // --- SHEET 5: KOMPOSISI BANTUAN FISIK TIER ---
  const tierRows = [
    ['KOMPOSISI ALOKASI DAN ANGGARAN BANTUAN FISIK (TIER 20JT, 25JT, 40JT)'],
    [],
    [
      'No', 'Provinsi / Satker', 'Wilayah Kerja', 'Pulau', 'Total Unit',
      'Unit 20 Jt (Mudah)', 'Unit 25 Jt (Sedang)', 'Unit 40 Jt (Sulit)',
      'Fisik 20 Jt (Rp)', 'Fisik 25 Jt (Rp)', 'Fisik 40 Jt (Rp)',
      'Total Anggaran Fisik (526312)', 'Rata-rata Fisik / Unit'
    ]
  ];

  calculatedData.breakdownProvinsi.forEach((p, idx) => {
    const rata = p.totalUnit > 0 ? (p.biayaFisik_526312 / p.totalUnit) : 0;
    tierRows.push([
      idx + 1,
      p.name,
      p.wilayahKerja || '',
      p.pulau || '',
      p.totalUnit,
      p.unit20Jt || 0,
      p.unit25Jt || 0,
      p.unit40Jt || 0,
      p.fisik20Jt || 0,
      p.fisik25Jt || 0,
      p.fisik40Jt || 0,
      p.biayaFisik_526312,
      rata
    ]);
  });

  const wsTier = XLSX.utils.aoa_to_sheet(tierRows);
  XLSX.utils.book_append_sheet(wb, wsTier, 'Komposisi_Fisik_Tier');

  // --- SHEET 6: 16 KOMPONEN PENDAMPINGAN ---
  const kompRows = [
    ['RINCIAN 16 KOMPONEN ANGGARAN PENDAMPINGAN (NON-FISIK) MURNI'],
    [],
    ['No', 'Kode BAS', 'Uraian Komponen', 'Level Alokasi', 'Regulasi SBM / Non-SBM', 'Total Anggaran (Rp)', 'Proporsi (%)', 'Biaya / Unit']
  ];

  calculatedData.komposisi16Komponen.forEach((k) => {
    kompRows.push([
      k.no,
      k.bas,
      k.name,
      k.level,
      k.rule,
      k.total,
      Number(k.percentage.toFixed(2)),
      k.perUnit
    ]);
  });

  const wsKomp = XLSX.utils.aoa_to_sheet(kompRows);
  XLSX.utils.book_append_sheet(wb, wsKomp, 'Komposisi_16_NonFisik');

  // --- SHEET 7: KONSOLIDASI WILAYAH KERJA & PULAU ---
  const regRows = [
    ['KONSOLIDASI ANGGARAN BERDASARKAN WILAYAH KERJA & PULAU'],
    [],
    ['Wilayah Kerja / Regional', 'Jumlah Provinsi', 'Jumlah Kab/Kota', 'Total Unit', 'Bantuan Fisik (526312)', 'Pendampingan', 'Grand Total Anggaran', 'Proporsi (%)']
  ];

  calculatedData.breakdownWilayahKerja.forEach((w) => {
    regRows.push([
      w.name,
      w.provCount,
      w.kabKotaCount,
      w.totalUnit,
      w.biayaFisik_526312,
      w.totalPendampingan,
      w.grandTotal,
      Number(w.pctGrandTotal.toFixed(2))
    ]);
  });

  regRows.push([]);
  regRows.push(['BREAKDOWN 7 PULAU']);
  regRows.push(['Pulau', 'Jumlah Provinsi', 'Jumlah Kab/Kota', 'Total Unit', 'Bantuan Fisik (526312)', 'Pendampingan', 'Grand Total Anggaran', 'Proporsi (%)']);

  calculatedData.breakdownPulau.forEach((pl) => {
    regRows.push([
      pl.name,
      pl.provCount,
      pl.kabKotaCount,
      pl.totalUnit,
      pl.biayaFisik_526312,
      pl.totalPendampingan,
      pl.grandTotal,
      Number(pl.pctGrandTotal.toFixed(2))
    ]);
  });

  const wsReg = XLSX.utils.aoa_to_sheet(regRows);
  XLSX.utils.book_append_sheet(wb, wsReg, 'Komposisi_Wilayah_Kerja');

  // --- SHEET 8: DETAIL 514 KAB/KOTA ---
  const kabRows = [
    ['DETAIL ALOKASI & ANGGARAN 514 KABUPATEN/KOTA RESMI KEMENTERIAN PKP'],
    [],
    [
      'No', 'Kode Kemendagri', 'Kabupaten / Kota', 'Provinsi', 'Satker DIPA', 'Wilayah Kerja', 'Pulau',
      'Karakteristik', 'Desa Perkotaan', 'Desa Perdesaan', 'Total Desa/Kel',
      'Delineasi', 'Zona', 'Indikasi Awal', 'Target Unit Final',
      'Korkab (Org)', 'TPM (Org)',
      'IKK BPS 2025', 'Anggaran Fisik (526312)', 'Total Pendampingan', 'Grand Total'
    ]
  ];

  calculatedData.detailKabKota.forEach((k, idx) => {
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

  // --- SHEET 9: PARAMETER & ASUMSI ---
  const paramRows = [
    ['PARAMETER KONTROL & ASUMSI PERHITUNGAN RKA-K/L BEDAH RUMAH PKP'],
    [],
    ['Parameter', 'Nilai / Setting', 'Keterangan'],
    ['Target DJKP', params.targetDJKP || 50000, 'Unit Pesisir (Ditjen Kawasan Permukiman)'],
    ['Target DJPKT', params.targetDJPKT || 120000, 'Unit Perkotaan (Ditjen Perumahan Perkotaan)'],
    ['Target DJPDS', params.targetDJPDS || 200000, 'Unit Perdesaan (Ditjen Perumahan Perdesaan)'],
    ['Total Target Nasional', 370000, 'Unit Rumah'],
    ['Masa Penugasan TPM', params.masaTPM + ' Bulan', 'PAR_MASA_TPM'],
    ['Masa Penugasan Korkab', params.masaKorkab + ' Bulan', 'PAR_MASA_KORKAB'],
    ['Komposisi Rasio TPM', `2 TPM : ${params.rasioTPMUnit || 40} Unit`, 'Rasio Tenaga Pendamping Lapangan'],
    ['Metode Standar Gaji SDM', params.gajiMethod === 'manual' ? 'Opsi 2: Input Manual (Nominal Tetap)' : 'Opsi 1: Standar INKINDO (x 55% x IKK)', 'Metode Perhitungan Honor SDM'],
    ['Honor INKINDO Sub-Prof (Base)', params.rateInkindoSubProf, 'Faktor 55% x IKK (Korkab)'],
    ['Honor INKINDO Asisten (Base)', params.rateInkindoAsisten, 'Faktor 55% x IKK (TPM)'],
    ['Gaji Manual Korkab', params.gajiManualKorkab || 7000000, 'Rp per Bulan (Jika Opsi 2 Aktif)'],
    ['Gaji Manual TPM', params.gajiManualTPM || 6000000, 'Rp per Bulan (Jika Opsi 2 Aktif)'],
    ['Gaji Manual Gunakan IKK', params.gajiManualUseIKK ? 'Ya (x IKK/100)' : 'Tidak (Nominal Tetap/Flat)', 'Penyesuaian Kemahalan Wilayah'],
    ['Rate Fisik Base - Zona Mudah', params.rateFisikMatrix.Mudah, 'Rp 20.000.000 (No IKK)'],
    ['Rate Fisik Base - Zona Sedang', params.rateFisikMatrix.Sedang, 'Rp 25.000.000 (No IKK)'],
    ['Rate Fisik Base - Zona Sulit', params.rateFisikMatrix.Sulit, 'Rp 40.000.000 (No IKK)'],
    ['Support Cost TPM - Zona Mudah', params.supportTPMMatrix.Mudah, 'Rp per TPM/bln x IKK'],
    ['Support Cost TPM - Zona Sedang', params.supportTPMMatrix.Sedang, 'Rp per TPM/bln x IKK'],
    ['Support Cost TPM - Zona Sulit', params.supportTPMMatrix.Sulit, 'Rp per TPM/bln x IKK'],
    ['Rasio Verifikasi & Wasdal', '1 Perjalanan per ' + params.rasioVerifWasdalUnit + ' Unit', '1:100'],
    ['Rasio Pendampingan APH', '1 Trip per ' + params.rasioAPHPerWasdal + ' Trip Wasdal', '1:10'],
    ['Rate Digitalisasi Dokumen', params.rateDigitalisasi, 'Rp per unit x IKK'],
    ['Rate Media & Peneng Identitas', params.ratePeneng, 'Rp per unit x IKK'],
    ['Rate Video Best Practice', params.rateVideoProv, 'Rp per paket provinsi x IKK Prov'],
    ['SBM Sewa Kendaraan PPK', sbmRates.sewaMobilPPKBulanan, 'Rp per bulan (56 PPK)'],
    ['SBM Sewa Kendaraan Insidental', sbmRates.sewaMobilHarianInsidental, 'Rp per hari kegiatan']
  ];

  const wsParam = XLSX.utils.aoa_to_sheet(paramRows);
  XLSX.utils.book_append_sheet(wb, wsParam, 'Parameter_Asumsi');

  // Trigger Download
  const timestamp = new Date().toISOString().slice(0, 10);
  const fileName = `RKA_Bedah_Rumah_PKP_370k_Unit_${timestamp}.xlsx`;
  XLSX.writeFile(wb, fileName);
}
