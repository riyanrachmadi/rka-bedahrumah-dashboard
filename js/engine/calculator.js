/**
 * CORE CALCULATION & AGGREGATION ENGINE (EXPANDED)
 * Menghitung Postur 1 (Fisik - 526312) dan Postur 2 (16 Komponen Pendampingan)
 * Menyediakan agregasi multi-dimensi: Wilayah Kerja I/II/III, 7 Pulau, Delineasi Ditjen,
 * Tier Bantuan Fisik (20Jt, 25Jt, 40Jt), dan Rekapitulasi SDM Pendamping (TPM & Korkab).
 */

import { MASTER_PROVINCES, MASTER_SATKER, WILAYAH_KERJA_LIST, PULAU_LIST, SBM_RATES } from '../data/masterProvinces.js';

export function roundUpToThousand(val) {
  if (!val || isNaN(val) || val <= 0) return 0;
  return Math.ceil(val / 1000) * 1000;
}

export function calculateAllRKA(allocatedKabKotaList, params, sbmRates = SBM_RATES) {
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

    // Total 522191 di level Kab/Kota (Komp 13 video dihitung di level provinsi)
    const total_522191_kab = roundUpToThousand(komp1_korkab + komp2_tpm + komp6_operasionalTPM + komp12_digitalisasi);

    // B. BAS 521211 (Belanja Bahan)
    // Komp 3: Konsumsi Rembuk Warga (SBM - No IKK - Dinamis 1/2/3/4 Kali per Unit)
    const freqRembuk = Number(params.frekuensiRembukWarga || params.frekuensiRembuk) || 3;
    const komp3_konsumsiRembuk = roundUpToThousand(units * freqRembuk * sbmRates.makanMinumRembuk);

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

    // Komp 14: Pendampingan APH (1 trip APH per 10 trip Wasdal)
    const tripAPH = tripWasdal > 0 ? Math.ceil(tripWasdal / params.rasioAPHPerWasdal) : 0;
    const komp14_aph = roundUpToThousand(tripAPH * costPerTrip2Orang2Hari);

    const total_524111_kab = roundUpToThousand(komp9_verifikasi + komp10_wasdal + komp14_aph);

    // D. BAS 524119 (Belanja Perjalanan Dinas Paket Meeting Luar Kota) (SBM - No IKK)
    // Komp 7: Paket Rapat Pembekalan TPM & Korkab
    const pesertaPembekalan = tpmCount + korkabCount;
    const komp7_pembekalan = roundUpToThousand(pesertaPembekalan * costPerPesertaPembekalan);
    const total_524119_kab = komp7_pembekalan;

    // E. BAS 522141 (Belanja Sewa) (SBM - No IKK)
    // Komp 16B: Sewa Kendaraan Insidental (Total trip verif + wasdal + aph x 2 hari)
    const totalHariSewaInsidental = (tripVerif + tripWasdal + tripAPH) * 2;
    const komp16b_sewaInsidental = roundUpToThousand(totalHariSewaInsidental * sbmRates.sewaMobilHarianInsidental);
    const total_522141_kab = komp16b_sewaInsidental;

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
      komp11_koordPusat: 0,
      komp12_digitalisasi,
      komp13_videoBestPractice: 0,
      komp14_aph,
      komp15_peneng,
      komp16a_sewaPPK: 0,
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
    const kabKotaInProv = detailKabKota.filter(k => k.provId === prov.id);
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

    // Komp 16A: Sewa Mobil Bulanan PPK (SBM - No IKK)
    const komp16a_sewaPPK = roundUpToThousand(prov.ppkCount * params.masaKorkab * sbmRates.sewaMobilPPKBulanan);
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
      rataGrandTotalPerUnit
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
