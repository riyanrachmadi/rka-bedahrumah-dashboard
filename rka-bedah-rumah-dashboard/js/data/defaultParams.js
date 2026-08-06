/**
 * Dynamic Control Variables (Default Parameters)
 */

export const DEFAULT_TARGETS = {
  djkp: 50000,
  djpkt: 120000,
  djpds: 200000,
  total: 370000,      // Total terkunci (dipakai oleh Simulator)
  lockedTotal: 370000 // Angka acuan total yang dapat diubah (370k / 400k / custom)
};

export const DEFAULT_PARAMS = {
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
  rateKitAtribut: 250000,
  biayaRembukUnit: 100000,

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
