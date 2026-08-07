/**
 * ============================================================================
 * MAIN APP CONTROLLER - RKA BEDAH RUMAH DASHBOARD (V3.3 CORRECTION)
 * Dynamic Sidebar Control Panel (Authentic Prompt Non-SBM Rates) & 9 Dynamic Charts
 * ============================================================================
 */

import { MASTER_514_KABKOTA } from "./data/master514.js";
import { MASTER_PROVINCES, MASTER_SATKER, SBM_RATES } from "./data/masterProvinces.js";
import { DEFAULT_PARAMS, DEFAULT_TARGETS } from "./data/defaultParams.js";
import { distributeUnits } from "./engine/allocator.js";
import { calculateAllRKA } from "./engine/calculator.js";
import { exportToExcel } from "./engine/exporter.js";
import { formatRupiah, formatRupiahCompact, formatNumber, formatPercent } from "./utils/formatter.js";

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
