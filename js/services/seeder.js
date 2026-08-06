/**
 * DATABASE SEEDER & RELATIONAL DATA TRANSFORMER
 * Primary Key Relational Join using 'id' (Kode Kabupaten/kota BPS 4-digit string)
 * Preserves all metadata (IKK, Zone, Satker, Pulau, WilayahKerja) while updating alokasi & delineasi
 */

import { MASTER_514_KABKOTA } from '../data/master514.js';

export function seedAndMergeKabKotaData(importedRecords, baseMaster = MASTER_514_KABKOTA) {
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
