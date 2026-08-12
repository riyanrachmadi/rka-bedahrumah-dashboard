import re

with open("js/app.js", "r", encoding="utf-8") as f:
    code = f.read()

# 1. Add penjelasan property to state object
state_replacement = """  nonfisik: {
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
  penjelasan: { search: "", category: "all" },"""

code = code.replace("""  nonfisik: {
    viewMode: "tree",
    search: "",
    satkerId: "",
    delineasi: "",
    defaultFullyExpanded: true,
    collapsedSatkers: new Set(),
    collapsedAccounts: new Set(),
    expandedSatkers: new Set(),
    expandedAccounts: new Set()
  },""", state_replacement)

# 2. Add renderTabPenjelasan to recalculateAndRender
recalc_replacement = """  renderTabRincian(currentCalculatedData);
  renderTabPenjelasan(currentCalculatedData);
  updateCustomIndicator();"""

code = code.replace("""  renderTabRincian(currentCalculatedData);
  updateCustomIndicator();""", recalc_replacement)

# 3. Create renderTabPenjelasan code block
penjelasan_code = """
// ============================================================================
// TAB 7: PENJELASAN KOMPONEN & FORMULA ANGGARAN (REAL-TIME)
// ============================================================================
function renderTabPenjelasan(calcData) {
  if (!calcData) return;
  const summary = calcData.summary || {};
  const params = state.params || {};
  const targets = state.targets || {};

  // A. RENDER PARAMETER DINAMIS REAL-TIME (SECTION 1)
  const paramGrid = document.getElementById("panel-penjelasan-params");
  if (paramGrid) {
    const isManualGaji = (params.gajiMethod === 'manual' || params.metodeGaji === 'manual');
    const gajiKorkabText = isManualGaji
      ? `Manual Rp ${formatNumber(params.gajiManualKorkab || 7000000)}/Bln`
      : `INKINDO Sub-Prof (16,5M x ${(Number(params.inkindoFactor) * 100).toFixed(0)}% x IKK)`;
    const gajiTPMText = isManualGaji
      ? `Manual Rp ${formatNumber(params.gajiManualTPM || 6000000)}/Bln`
      : `INKINDO Asisten (11,5M x ${(Number(params.inkindoFactor) * 100).toFixed(0)}% x IKK)`;

    paramGrid.innerHTML = `
      <div class="penjelasan-param-card">
        <span class="penjelasan-param-label">👥 Rasio TPM & Ob</span>
        <span class="penjelasan-param-val">2 TPM : ${params.rasioTPMUnit || 40} Unit</span>
        <span class="penjelasan-param-sub">Masa TPM: ${params.masaTPM || 5} Bln &bull; Masa Korkab: ${params.masaKorkab || 10} Bln</span>
      </div>
      <div class="penjelasan-param-card">
        <span class="penjelasan-param-label">💼 Standar Gaji SDM</span>
        <span class="penjelasan-param-val">${isManualGaji ? 'Opsi 2: Manual' : 'Opsi 1: INKINDO (' + (Number(params.inkindoFactor) * 100).toFixed(0) + '%)'}</span>
        <span class="penjelasan-param-sub">Korkab: ${gajiKorkabText}</span>
        <span class="penjelasan-param-sub">TPM: ${gajiTPMText}</span>
      </div>
      <div class="penjelasan-param-card">
        <span class="penjelasan-param-label">🏗️ Matrix Bantuan Fisik</span>
        <span class="penjelasan-param-val">Mudah: 20Jt | Sedang: 25Jt | Sulit: 40Jt</span>
        <span class="penjelasan-param-sub">Flat 100% tanpa Pengali IKK (Bantuan Langsung)</span>
      </div>
      <div class="penjelasan-param-card">
        <span class="penjelasan-param-label">🚗 Rasio Wasdal & Rembuk</span>
        <span class="penjelasan-param-val">Verif/Wasdal: 1 Trip / ${params.rasioVerifWasdalUnit || 200} Unit</span>
        <span class="penjelasan-param-sub">APH: 1 Trip / 10 Wasdal &bull; Rembuk: ${params.frekuensiRembukWarga || 3}x / Unit</span>
      </div>
      <div class="penjelasan-param-card">
        <span class="penjelasan-param-label">📑 Unit Rates Dokumen</span>
        <span class="penjelasan-param-val">Digitalisasi: Rp ${formatNumber(params.rateDigitalisasi || 75000)}</span>
        <span class="penjelasan-param-sub">RAB: Rp ${formatNumber(params.rateRAB || 200000)} &bull; Peneng: Rp ${formatNumber(params.ratePeneng || 50000)} / Unit</span>
      </div>
      <div class="penjelasan-param-card">
        <span class="penjelasan-param-label">📦 Unit Rates Operasional</span>
        <span class="penjelasan-param-val">Kit Atribut: Rp ${formatNumber(params.rateKitAtribut || 250000)}</span>
        <span class="penjelasan-param-sub">Laporan: Rp ${formatNumber(params.rateLaporanBulanan || 150000)} &bull; Video: Rp ${formatNumber(params.rateVideoProv || 15000000)}</span>
      </div>
    `;
  }

  // B. RENDER SUMMARY BANNER (SECTION 2)
  const compList = getComponentPenjelasanData(calcData);
  const q = state.penjelasan.search.toLowerCase().trim();
  const cat = state.penjelasan.category;

  let filtered = compList.filter(c => {
    const matchSearch = !q || c.code.toLowerCase().includes(q) || c.title.toLowerCase().includes(q) || c.bas.toLowerCase().includes(q) || c.formula.toLowerCase().includes(q);
    const matchCat = cat === 'all' || c.bas === cat || (cat === '526312' && c.code === 'POSTUR-1');
    return matchSearch && matchCat;
  });

  const totalFilteredPagu = filtered.reduce((a, c) => a + c.pagu, 0);
  renderFilterSummaryBanner('summary-banner-penjelasan', filtered.length, compList.length, {
    totalUnit: summary.totalUnitNasional,
    biayaFisik: summary.totalFisik_526312,
    totalPendampingan: summary.grandTotalPendampingan,
    grandTotal: summary.grandTotalRKA
  });

  // C. RENDER 17 COMPONENT CARDS (SECTION 3)
  const container = document.getElementById("penjelasan-cards-container");
  if (!container) return;

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">Tidak ditemukan komponen yang sesuai pencarian / filter.</div>`;
    return;
  }

  let html = "";
  filtered.forEach(c => {
    const grandTotalNas = summary.grandTotalRKA || 1;
    const pctGrand = ((c.pagu / grandTotalNas) * 100).toFixed(2);
    
    html += `
      <div class="penjelasan-card">
        <div class="penjelasan-card-header">
          <div>
            <div class="penjelasan-card-badges">
              <span class="badge-code">${c.code}</span>
              <span class="badge-bas">BAS ${c.bas}</span>
              <span class="badge-level">${c.level}</span>
            </div>
            <div class="penjelasan-card-title">${c.title}</div>
          </div>
        </div>

        <div class="penjelasan-card-money-box">
          <div>
            <div class="penjelasan-money-label">Total Pagu Real-Time:</div>
            <div class="penjelasan-money-val">${formatRupiahCompact(c.pagu)}</div>
          </div>
          <div style="text-align: right;">
            <div class="penjelasan-money-pct">${pctGrand}%</div>
            <div class="penjelasan-money-label">terhadap Grand Total</div>
          </div>
        </div>

        <div class="penjelasan-formula-box">
          <div class="penjelasan-formula-title">📐 Formula & Matematika Pembentuk:</div>
          <div>${c.formulaHtml}</div>
        </div>

        <div class="penjelasan-var-list">
          <div class="penjelasan-formula-title">🔍 Harga Satuan & Variabel Real-Time:</div>
          ${c.vars.map(v => `
            <div class="penjelasan-var-item">
              <span class="penjelasan-var-name">${v.name}</span>
              <span class="penjelasan-var-val">${v.val}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// HELPER DATA BUILDER UNTUK 17 KOMPONEN
function getComponentPenjelasanData(calcData) {
  const s = calcData.summary || {};
  const detail = calcData.detailKabKota || [];
  const provs = calcData.breakdownProvinsi || [];
  const params = state.params || {};

  const totalUnits = s.totalUnitNasional || 370000;
  const sumComp = (key) => detail.reduce((acc, k) => acc + (k[key] || 0), 0);

  return [
    {
      code: "POSTUR-1",
      bas: "526312",
      level: "514 Kab/Kota",
      title: "Anggaran Bantuan Fisik Penanganan Rumah Swadaya",
      pagu: s.totalFisik_526312 || 0,
      formula: "Total Fisik = Sum(TargetUnit * RateFisik(Zone))",
      formulaHtml: "<strong>Total Fisik</strong> = &sum; [ TargetUnit &times; RateFisik(Zona) ]<br><span style='color:#38bdf8;'>Tanpa Pengali IKK (Bantuan Langsung Penerima Manfaat)</span>",
      vars: [
        { name: "Harga Satuan Tier 20 Jt (Mudah)", val: "Rp 20.000.000 / Unit" },
        { name: "Harga Satuan Tier 25 Jt (Sedang)", val: "Rp 25.000.000 / Unit" },
        { name: "Harga Satuan Tier 40 Jt (Sulit)", val: "Rp 40.000.000 / Unit" },
        { name: "Rata-rata Fisik Nasional Real-Time", val: formatRupiah(totalUnits > 0 ? s.totalFisik_526312 / totalUnits : 0) + " / Unit" }
      ]
    },
    {
      code: "KOMP-1",
      bas: "522191",
      level: "514 Kab/Kota",
      title: "Honorarium & Gaji Korkab / Korkot",
      pagu: sumComp("komp1_korkab"),
      formula: "Komp 1 = Sum(Korkab_OB * HonorBulanKorkab)",
      formulaHtml: "<strong>Pagu Komp 1</strong> = &sum; [ Korkab_OB &times; HonorBulanKorkab ]<br><strong>HonorBulan</strong> = InkindoSubProf &times; FaktorInkindo &times; (IKK/100)",
      vars: [
        { name: "Total Volume Real-Time", val: formatNumber(s.totalKorkab * params.masaKorkab) + " OB (" + formatNumber(s.totalKorkab) + " Org x " + params.masaKorkab + " Bln)" },
        { name: "Rasio Korkab / Unit", val: "1 Korkab per ~1.000 Unit (Min. 1/KabKota)" },
        { name: "Faktor INKINDO / Standar", val: (Number(params.inkindoFactor) * 100).toFixed(0) + "% (Opsi " + (params.gajiMethod === 'manual' ? 'Manual' : 'INKINDO') + ")" },
        { name: "Rata-rata Honor Korkab Real-Time", val: formatRupiah(s.totalKorkab * params.masaKorkab > 0 ? sumComp("komp1_korkab") / (s.totalKorkab * params.masaKorkab) : 0) + " / OB" }
      ]
    },
    {
      code: "KOMP-2",
      bas: "522191",
      level: "514 Kab/Kota",
      title: "Honorarium & Gaji TPM (Tenaga Pendamping Masyarakat)",
      pagu: sumComp("komp2_tpm"),
      formula: "Komp 2 = Sum(TPM_OB * HonorBulanTPM)",
      formulaHtml: "<strong>Pagu Komp 2</strong> = &sum; [ TPM_OB &times; HonorBulanTPM ]<br><strong>HonorBulan</strong> = InkindoAsisten &times; FaktorInkindo &times; (IKK/100)",
      vars: [
        { name: "Total Volume Real-Time", val: formatNumber(s.totalTPM * params.masaTPM) + " OB (" + formatNumber(s.totalTPM) + " Org x " + params.masaTPM + " Bln)" },
        { name: "Rasio Personel Real-Time", val: "2 TPM per " + (params.rasioTPMUnit || 40) + " Unit" },
        { name: "Rata-rata Honor TPM Real-Time", val: formatRupiah(s.totalTPM * params.masaTPM > 0 ? sumComp("komp2_tpm") / (s.totalTPM * params.masaTPM) : 0) + " / OB" }
      ]
    },
    {
      code: "KOMP-3",
      bas: "521211",
      level: "514 Kab/Kota",
      title: "Konsumsi Rembuk Warga & Sosialisasi Desa",
      pagu: sumComp("komp3_konsumsiRembuk"),
      formula: "Komp 3 = Sum(TargetUnit * FreqRembuk * SBM_MakanKudapan)",
      formulaHtml: "<strong>Pagu Komp 3</strong> = &sum; [ TargetUnit &times; FrekuensiRembuk &times; SBM_MakanKudapan ]<br><span style='color:#38bdf8;'>Berubah otomatis sesuai PMK 32/2025 per Provinsi</span>",
      vars: [
        { name: "Frekuensi Rembuk Warga", val: (params.frekuensiRembukWarga || 3) + " Kali per Unit" },
        { name: "Total Frekuensi Kegiatan", val: formatNumber(totalUnits * (params.frekuensiRembukWarga || 3)) + " Kali-Unit" },
        { name: "Rentang SBM Makan + Kudapan", val: "Rp 64.000 s/d Rp 135.000 / Org" }
      ]
    },
    {
      code: "KOMP-4",
      bas: "521211",
      level: "514 Kab/Kota",
      title: "Pelaporan Bulanan TPM & Korkab",
      pagu: sumComp("komp4_laporanBulanan"),
      formula: "Komp 4 = Sum((TPM_OB + Korkab_OB) * RateLaporan * (IKK/100))",
      formulaHtml: "<strong>Pagu Komp 4</strong> = &sum; [ (TPM_OB + Korkab_OB) &times; RateLaporan &times; (IKK/100) ]",
      vars: [
        { name: "Rate Base Pelaporan", val: "Rp " + formatNumber(params.rateLaporanBulanan || 150000) + " / OB (x IKK)" },
        { name: "Total Volume OB Lapangan", val: formatNumber((s.totalTPM * params.masaTPM) + (s.totalKorkab * params.masaKorkab)) + " OB" }
      ]
    },
    {
      code: "KOMP-5",
      bas: "521211",
      level: "514 Kab/Kota",
      title: "Dokumen RAB & Gambar Teknis Rumah",
      pagu: sumComp("komp5_rabGambar"),
      formula: "Komp 5 = Sum(TargetUnit * RateRAB * (IKK/100))",
      formulaHtml: "<strong>Pagu Komp 5</strong> = &sum; [ TargetUnit &times; RateRAB &times; (IKK/100) ]",
      vars: [
        { name: "Rate Base Dokumen RAB", val: "Rp " + formatNumber(params.rateRAB || 200000) + " / Unit (x IKK)" },
        { name: "Total Target Unit", val: formatNumber(totalUnits) + " Unit" }
      ]
    },
    {
      code: "KOMP-6",
      bas: "522191",
      level: "514 Kab/Kota",
      title: "Operasional Rutin TPM (Support Cost Lapangan)",
      pagu: sumComp("komp6_operasionalTPM"),
      formula: "Komp 6 = Sum(TPM_OB * SupportCost(Zone) * (IKK/100))",
      formulaHtml: "<strong>Pagu Komp 6</strong> = &sum; [ TPM_OB &times; SupportCost(Zona) &times; (IKK/100) ]",
      vars: [
        { name: "Rate Support Mudah", val: "Rp 500.000 / OB (x IKK)" },
        { name: "Rate Support Sedang", val: "Rp 750.000 / OB (x IKK)" },
        { name: "Rate Support Sulit", val: "Rp 1.250.000 / OB (x IKK)" }
      ]
    },
    {
      code: "KOMP-7",
      bas: "524119",
      level: "38 Provinsi / KabKota",
      title: "Rapat Pembekalan TPM & Korkab (Fullboard Rapat)",
      pagu: sumComp("komp7_pembekalan"),
      formula: "Komp 7 = (Personel * FullboardSBM) + SharePanitiaSatker",
      formulaHtml: "<strong>Pagu Komp 7</strong> = [ TotalPersonel &times; CostFullboard5Hari ] + SharePanitiaSatker<br><strong>Share Panitia</strong> = 38 Prov &times; 5 Org &times; CostFullboard",
      vars: [
        { name: "Total Peserta Pembekalan", val: formatNumber(s.totalTPM + s.totalKorkab) + " Orang (TPM + Korkab)" },
        { name: "Total Panitia Satker 38 Prov", val: "190 Orang (5 Panitia x 38 Provinsi)" },
        { name: "Durasi Rapat Pembekalan", val: "5 Hari Paket Meeting Fullboard SBM" }
      ]
    },
    {
      code: "KOMP-8",
      bas: "521211",
      level: "514 Kab/Kota",
      title: "Kit Pembekalan & Atribut Personel Lapangan",
      pagu: sumComp("komp8_kitAtribut"),
      formula: "Komp 8 = Sum((JumlahTPM + JumlahKorkab) * RateKit * (IKK/100))",
      formulaHtml: "<strong>Pagu Komp 8</strong> = &sum; [ (JumlahTPM + JumlahKorkab) &times; RateKit &times; (IKK/100) ]",
      vars: [
        { name: "Rate Base Kit Atribut", val: "Rp " + formatNumber(params.rateKitAtribut || 250000) + " / Personel (x IKK)" },
        { name: "Atribut Termasuk", val: "Rompi, Topi, ID Card, Tas & ATK Lapangan" }
      ]
    },
    {
      code: "KOMP-9",
      bas: "524111",
      level: "34 Satker / KabKota",
      title: "Pendampingan Verifikasi Satker",
      pagu: sumComp("komp9_verifikasi"),
      formula: "Komp 9 = TripVerif * CostPerTrip2Orang2Hari",
      formulaHtml: "<strong>Pagu Komp 9</strong> = TripVerif &times; [ 2 Org &times; 2 Hari &times; SBM Perjadin ]<br><strong>TripVerif</strong> = Ceil(TargetUnit / RasioVerifUnit)",
      vars: [
        { name: "Rasio Verifikasi", val: "1 Trip / " + (params.rasioVerifWasdalUnit || 200) + " Unit" },
        { name: "Tim Verifikasi", val: "2 Orang per Trip x 2 Hari Kegiatan" }
      ]
    },
    {
      code: "KOMP-10",
      bas: "524111",
      level: "34 Satker / KabKota",
      title: "Pengawasan & Pengendalian Lapangan (Wasdal)",
      pagu: sumComp("komp10_wasdal"),
      formula: "Komp 10 = TripWasdal * CostPerTrip2Orang2Hari",
      formulaHtml: "<strong>Pagu Komp 10</strong> = TripWasdal &times; [ 2 Org &times; 2 Hari &times; SBM Perjadin ]",
      vars: [
        { name: "Rasio Wasdal", val: "1 Trip / " + (params.rasioVerifWasdalUnit || 200) + " Unit" },
        { name: "Tim Wasdal", val: "2 Orang per Trip x 2 Hari Kegiatan" }
      ]
    },
    {
      code: "KOMP-11",
      bas: "524111",
      level: "34 Satker ke Pusat",
      title: "Perjalanan Dinas Koordinasi Satker DIPA ke Pusat",
      pagu: sumComp("komp11_koordPusat"),
      formula: "Komp 11 = 34 Satker * Frekuensi * Personel * PerjadinJakarta",
      formulaHtml: "<strong>Pagu Komp 11</strong> = 34 Satker &times; Frekuensi &times; Personel &times; CostPerjadinJakarta<br><span style='color:#38bdf8;'>Diagregasikan proporsional ke 514 Kab/Kota</span>",
      vars: [
        { name: "Jumlah Satker DIPA", val: "34 Satker DIPA Provinsi" },
        { name: "Frekuensi Rapat Pusat", val: (params.koordPusatFrekuensi || 4) + " Kali per Tahun" },
        { name: "Komponen Perjadin", val: "Tiket PP + Uang Harian + Hotel + Taksi PP Jakarta SBM" }
      ]
    },
    {
      code: "KOMP-12",
      bas: "522191",
      level: "514 Kab/Kota",
      title: "Digitalisasi Dokumen & Upload SIMPERUM",
      pagu: sumComp("komp12_digitalisasi"),
      formula: "Komp 12 = Sum(TargetUnit * RateDigitalisasi * (IKK/100))",
      formulaHtml: "<strong>Pagu Komp 12</strong> = &sum; [ TargetUnit &times; RateDigitalisasi &times; (IKK/100) ]",
      vars: [
        { name: "Rate Base Digitalisasi", val: "Rp " + formatNumber(params.rateDigitalisasi || 75000) + " / Unit (x IKK)" },
        { name: "Cakupan Berkas", val: "Scan Proposal, Dokumen Verifikasi, BA Rembuk, RAB & Foto 0/50/100%" }
      ]
    },
    {
      code: "KOMP-13",
      bas: "522191",
      level: "38 Provinsi / KabKota",
      title: "Dokumentasi Video Best Practice Provinsi",
      pagu: sumComp("komp13_videoBestPractice"),
      formula: "Komp 13 = Sum(RateVideoProv * (IKK/100))",
      formulaHtml: "<strong>Pagu Komp 13</strong> = &sum; [ RateVideoProv &times; (IKK/100) ]<br>Allocated across 38 Provinsi",
      vars: [
        { name: "Rate Base Video Prov", val: "Rp " + formatNumber(params.rateVideoProv || 15000000) + " / Provinsi (x IKK)" },
        { name: "Total Provinsi Ditargetkan", val: "38 Provinsi" }
      ]
    },
    {
      code: "KOMP-14",
      bas: "524111",
      level: "34 Satker / KabKota",
      title: "Pendampingan Aparat Penegak Hukum (APH)",
      pagu: sumComp("komp14_aph"),
      formula: "Komp 14 = TripAPH * CostPerTrip2Orang2Hari",
      formulaHtml: "<strong>Pagu Komp 14</strong> = TripAPH &times; [ 2 Org &times; 2 Hari &times; SBM Perjadin ]<br><strong>TripAPH</strong> = Ceil(TripWasdal / 10)",
      vars: [
        { name: "Rasio APH", val: "1 Trip APH per 10 Trip Wasdal" },
        { name: "Mitra APH", val: "Kejaksaan / Kepolisian / Pengawas Daerah" }
      ]
    },
    {
      code: "KOMP-15",
      bas: "521211",
      level: "514 Kab/Kota",
      title: "Media Sosialisasi & Peneng Identitas Penerima Manfaat",
      pagu: sumComp("komp15_peneng"),
      formula: "Komp 15 = Sum(TargetUnit * RatePeneng * (IKK/100))",
      formulaHtml: "<strong>Pagu Komp 15</strong> = &sum; [ TargetUnit &times; RatePeneng &times; (IKK/100) ]",
      vars: [
        { name: "Rate Base Peneng Identitas", val: "Rp " + formatNumber(params.ratePeneng || 50000) + " / Unit (x IKK)" },
        { name: "Spesifikasi Peneng", val: "Plat Aluminium Emboss + QR Code SIMPERUM" }
      ]
    },
    {
      code: "KOMP-16A",
      bas: "522141",
      level: "38 Provinsi / PPK",
      title: "Sewa Kendaraan Operasional Lapangan PPK (Bulanan)",
      pagu: sumComp("komp16a_sewaPPK"),
      formula: "Komp 16A = Sum(PPKCount * 10Bln * SBM_MinibusBulanan)",
      formulaHtml: "<strong>Pagu Komp 16A</strong> = &sum; [ PPKCount &times; 10 Bulan &times; SBM_MinibusBulanan ]<br><span style='color:#38bdf8;'>Berubah otomatis sesuai PMK 32/2025 per Provinsi</span>",
      vars: [
        { name: "Total PPK Lapangan", val: "56 PPK (Tersebar di 38 Provinsi)" },
        { name: "Durasi Sewa Mobil", val: "10 Bulan (Selama Masa Konstruksi & Pendampingan)" },
        { name: "Rentang SBM Minibus Bulanan", val: "Rp 5.670.000 s/d Rp 7.791.000 / Bulan" }
      ]
    },
    {
      code: "KOMP-16B",
      bas: "522141",
      level: "514 Kab/Kota",
      title: "Sewa Kendaraan Insidental Lapangan (Harian)",
      pagu: sumComp("komp16b_sewaInsidental"),
      formula: "Komp 16B = TotalHariSewa * SBM_SewaHarian",
      formulaHtml: "<strong>Pagu Komp 16B</strong> = TotalHariSewa &times; SBM_SewaHarianProv<br><strong>TotalHariSewa</strong> = (TripVerif + TripWasdal + TripAPH) &times; 2 Hari",
      vars: [
        { name: "Rentang SBM Sewa Harian", val: "Rp 824.000 s/d Rp 1.649.000 / Hari" },
        { name: "Perhitungan Hari", val: "2 Hari per Trip Perjalanan Dinas Lapangan" }
      ]
    }
  ];
}
"""

# Insert renderTabPenjelasan into code before initEventListeners
code = code.replace("function initEventListeners() {", penjelasan_code + "\nfunction initEventListeners() {")

# 4. Add Tab 7 Event Listeners in initEventListeners
listener_replacement = """  // 1. Tab Switching (7 Tabs)
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      const panel = document.getElementById(targetId);
      if (panel) panel.classList.add("active");
      state.activeTab = targetId;

      // Trigger chart / panel refresh on tab switch
      setTimeout(() => {
        if (targetId === "tab-komposisi" && currentCalculatedData) {
          renderTabKomposisiCharts(currentCalculatedData);
        } else if (targetId === "tab-bas" && currentCalculatedData) {
          renderTabBAS(currentCalculatedData.konsolidasiBAS, currentCalculatedData.summary);
        } else if (targetId === "tab-penjelasan" && currentCalculatedData) {
          renderTabPenjelasan(currentCalculatedData);
        }
      }, 50);
    });
  });

  // Tab 7 Search & Category Filter Listeners
  const searchPenjelasanInp = document.getElementById("search-penjelasan");
  if (searchPenjelasanInp) {
    searchPenjelasanInp.addEventListener("input", e => {
      state.penjelasan.search = e.target.value;
      if (currentCalculatedData) renderTabPenjelasan(currentCalculatedData);
    });
  }

  const catBtns = [
    { id: "btn-penjelasan-cat-all", cat: "all" },
    { id: "btn-penjelasan-cat-fisik", cat: "526312" },
    { id: "btn-penjelasan-cat-522191", cat: "522191" },
    { id: "btn-penjelasan-cat-521211", cat: "521211" },
    { id: "btn-penjelasan-cat-524111", cat: "524111" },
    { id: "btn-penjelasan-cat-524119", cat: "524119" },
    { id: "btn-penjelasan-cat-522141", cat: "522141" }
  ];

  catBtns.forEach(bObj => {
    const btn = document.getElementById(bObj.id);
    if (btn) {
      btn.addEventListener("click", () => {
        catBtns.forEach(x => {
          const eb = document.getElementById(x.id);
          if (eb) eb.classList.remove("active");
        });
        btn.classList.add("active");
        state.penjelasan.category = bObj.cat;
        if (currentCalculatedData) renderTabPenjelasan(currentCalculatedData);
      });
    }
  });"""

# Find exact listener block to replace
old_listener_block = """  // 1. Tab Switching (6 Tabs)
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
  });"""

code = code.replace(old_listener_block, listener_replacement)

with open("js/app.js", "w", encoding="utf-8") as f:
    f.write(code)

print("Successfully updated js/app.js with Tab 7 logic!")
