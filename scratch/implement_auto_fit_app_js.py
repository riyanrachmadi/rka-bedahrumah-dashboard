import re

with open("js/app.js", "r", encoding="utf-8") as f:
    code = f.read()

# 1. Add targetAvgPendampingan to state object
code = code.replace("  penjelasan: { search: \"\", category: \"all\" }", "  penjelasan: { search: \"\", category: \"all\" },\n  targetAvgPendampingan: 2000000")

# 2. Add Auto-Fit function to app.js
auto_fit_function = """
// ============================================================================
// AUTO-FIT TARGET RATA-RATA PENDAMPINGAN / UNIT
// ============================================================================
function applyTargetPendampinganAutoFit(targetVal) {
  const target = Math.max(500000, Math.min(6000000, Number(targetVal) || 2000000));
  state.targetAvgPendampingan = target;

  if (!currentCalculatedData) return;
  const summary = currentCalculatedData.summary || {};
  const totalUnits = summary.totalUnitNasional || 370000;
  const currentTotalPend = summary.grandTotalPendampingan || 1;
  const currentAvgPend = totalUnits > 0 ? (currentTotalPend / totalUnits) : 2012350;

  if (currentAvgPend <= 0) return;
  const scaleFactor = target / currentAvgPend;

  // Baseline defaults
  const def = DEFAULT_PARAMS;

  // Scale flexible unit-based parameters
  state.params.rateDigitalisasi = Math.max(10000, Math.round((def.rateDigitalisasi * scaleFactor) / 5000) * 5000);
  state.params.rateRAB = Math.max(25000, Math.round((def.rateRAB * scaleFactor) / 5000) * 5000);
  state.params.ratePeneng = Math.max(10000, Math.round((def.ratePeneng * scaleFactor) / 5000) * 5000);
  state.params.rateLaporanBulanan = Math.max(25000, Math.round((def.rateLaporanBulanan * scaleFactor) / 5000) * 5000);
  state.params.rateKitAtribut = Math.max(50000, Math.round((def.rateKitAtribut * scaleFactor) / 10000) * 10000);
  state.params.rateVideoProv = Math.max(5000000, Math.round((def.rateVideoProv * scaleFactor) / 1000000) * 1000000);

  if (scaleFactor >= 1.3) {
    state.params.frekuensiRembukWarga = 4;
  } else if (scaleFactor <= 0.75) {
    state.params.frekuensiRembukWarga = 2;
  } else {
    state.params.frekuensiRembukWarga = 3;
  }

  // Update DOM Input Controls
  const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
  setVal("num-rate-digitalisasi", state.params.rateDigitalisasi);
  setVal("num-rate-rab", state.params.rateRAB);
  setVal("num-rate-peneng", state.params.ratePeneng);
  setVal("num-rate-laporan", state.params.rateLaporanBulanan);
  setVal("num-rate-kit-atribut", state.params.rateKitAtribut);
  setVal("num-rate-video-prov", state.params.rateVideoProv);
  setVal("select-frekuensi-rembuk", state.params.frekuensiRembukWarga);

  recalculateAndRender();
}

function updateAutoFitDisplays(summary) {
  const totalUnits = summary.totalUnitNasional || 370000;
  const avgPend = totalUnits > 0 ? (summary.grandTotalPendampingan / totalUnits) : 0;
  const target = state.targetAvgPendampingan || 2000000;
  const scale = avgPend > 0 ? (target / avgPend) : 1;

  const avgEl = document.getElementById("live-avg-pendampingan-display");
  if (avgEl) avgEl.textContent = formatRupiah(avgPend) + " / Unit";

  const scaleEl = document.getElementById("live-auto-scale-display");
  if (scaleEl) scaleEl.textContent = `${scale.toFixed(2)}x (${Math.abs(avgPend - target) < 50000 ? 'Presisi' : 'Sesuai'})`;

  // Update slider/number inputs
  const slider = document.getElementById("slider-target-pendampingan");
  if (slider && Number(slider.value) !== target) slider.value = target;

  const numInp = document.getElementById("num-target-pendampingan");
  if (numInp && Number(numInp.value) !== target) numInp.value = target;
}
"""

# Insert auto_fit_function before recalculateAndRender
code = code.replace("function recalculateAndRender() {", auto_fit_function + "\nfunction recalculateAndRender() {")

# Update renderKPIs to call updateAutoFitDisplays
code = code.replace("renderKPIs(currentCalculatedData.summary);", "renderKPIs(currentCalculatedData.summary);\n  updateAutoFitDisplays(currentCalculatedData.summary);")

# 3. Add Event Listeners for Target Pendampingan Auto-Fit in initEventListeners
auto_fit_listeners = """
  // Target Pendampingan Auto-Fit Listeners
  const sliderTargetPend = document.getElementById("slider-target-pendampingan");
  const numTargetPend = document.getElementById("num-target-pendampingan");
  if (sliderTargetPend) {
    sliderTargetPend.addEventListener("input", e => {
      if (numTargetPend) numTargetPend.value = e.target.value;
      applyTargetPendampinganAutoFit(e.target.value);
    });
  }
  if (numTargetPend) {
    numTargetPend.addEventListener("change", e => {
      if (sliderTargetPend) sliderTargetPend.value = e.target.value;
      applyTargetPendampinganAutoFit(e.target.value);
    });
  }

  const pendPresets = [
    { id: "btn-target-pend-1800", val: 1800000 },
    { id: "btn-target-pend-2000", val: 2000000 },
    { id: "btn-target-pend-2250", val: 2250000 },
    { id: "btn-target-pend-2500", val: 2500000 }
  ];
  pendPresets.forEach(pObj => {
    const btn = document.getElementById(pObj.id);
    if (btn) {
      btn.addEventListener("click", () => {
        pendPresets.forEach(x => {
          const eb = document.getElementById(x.id);
          if (eb) eb.classList.remove("active");
        });
        btn.classList.add("active");
        if (sliderTargetPend) sliderTargetPend.value = pObj.val;
        if (numTargetPend) numTargetPend.value = pObj.val;
        applyTargetPendampinganAutoFit(pObj.val);
      });
    }
  });
"""

code = code.replace("  // 1. Tab Switching", auto_fit_listeners + "\n  // 1. Tab Switching")

with open("js/app.js", "w", encoding="utf-8") as f:
    f.write(code)

print("Successfully updated js/app.js with Target Pendampingan Auto-Fit feature!")
