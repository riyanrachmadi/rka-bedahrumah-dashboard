/**
 * CSV PARSER & DATA TRANSFORMER FOR MASTER 514 KABUPATEN/KOTA
 * Primary Key: 'Kode Kabupaten/kota' (4-digit BPS code string, e.g., "1101")
 */

export function parseKabKotaCSV(csvText) {
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
