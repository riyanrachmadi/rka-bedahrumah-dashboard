/**
 * AUTOMATED INTEGRITY CHECK FOR 514 KABUPATEN/KOTA DATASET
 * Primary Key Relational Validation: 'id' (Kode Kabupaten/kota BPS 4-digit string)
 */

export function validateKabKotaData(records, expectedNationalTotal = 400000) {
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
