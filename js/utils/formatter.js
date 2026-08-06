/**
 * Formatting Utilities: Rupiah, Numbers, Percentages, and Compact Formats
 */

export function formatRupiah(value) {
  if (value === null || value === undefined || isNaN(value)) return 'Rp 0';
  return 'Rp ' + Math.round(value).toLocaleString('id-ID');
}

export function formatRupiahCompact(value) {
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

export function formatNumber(value) {
  if (value === null || value === undefined || isNaN(value)) return '0';
  return Math.round(value).toLocaleString('id-ID');
}

export function formatPercent(value) {
  if (value === null || value === undefined || isNaN(value)) return '0,00%';
  return (value).toFixed(2).replace('.', ',') + '%';
}
