import re

with open("js/app.js", "r", encoding="utf-8") as f:
    code = f.read()

# Implement 2-Pass iterative convergence loop in applyTargetPendampinganAutoFit
new_autofit = """function applyTargetPendampinganAutoFit(targetVal) {
  const target = Math.max(500000, Math.min(6000000, Number(targetVal) || 2000000));
  state.targetAvgPendampingan = target;

  // -------------------------------------------------------------------------
  // PASS 1: PENYESUAIAN STRUKTURAL TIER 1
  // -------------------------------------------------------------------------
  if (target < 1850000) {
    state.params.rasioTPMUnit = 60;          // 2 TPM : 60 Unit
    state.params.rasioTPM = 60;
    state.params.rasioVerifWasdalUnit = 200; // 1 trip per 200 unit
    state.params.frekuensiRembukWarga = 1;   // 1 kali konsumsi
    state.params.durasiHariPembekalan = 2;   // 2 hari pembekalan
  } else if (target < 2050000) {
    state.params.rasioTPMUnit = 50;          // 2 TPM : 50 Unit
    state.params.rasioTPM = 50;
    state.params.rasioVerifWasdalUnit = 160; // 1 trip per 160 unit
    state.params.frekuensiRembukWarga = 2;   // 2 kali konsumsi
    state.params.durasiHariPembekalan = 3;   // 3 hari pembekalan
  } else if (target < 2250000) {
    state.params.rasioTPMUnit = 40;          // 2 TPM : 40 Unit (Ideal)
    state.params.rasioTPM = 40;
    state.params.rasioVerifWasdalUnit = 130; // 1 trip per 130 unit
    state.params.frekuensiRembukWarga = 3;   // 3 kali konsumsi (Ideal)
    state.params.durasiHariPembekalan = 4;   // 4 hari pembekalan
  } else {
    state.params.rasioTPMUnit = 40;          // 2 TPM : 40 Unit (Ideal)
    state.params.rasioTPM = 40;
    state.params.rasioVerifWasdalUnit = 100; // 1 trip per 100 unit (Ideal)
    state.params.frekuensiRembukWarga = 3;   // 3 kali konsumsi (Ideal)
    state.params.durasiHariPembekalan = 5;   // 5 hari pembekalan (Ideal)
  }

  // -------------------------------------------------------------------------
  // PASS 2: CALCULATE INTERMEDIATE RESULT FOR PRECISE FINE-SCALING
  // -------------------------------------------------------------------------
  let allocatedKabKota = distributeUnits(state.kabKotaData, state.targets);
  let intermediateData = calculateAllRKA(allocatedKabKota, state.params, state.sbmRates);
  let interSummary = intermediateData.summary || {};
  let totalUnits = interSummary.totalUnitNasional || 370000;
  let interAvg = totalUnits > 0 ? (interSummary.grandTotalPendampingan / totalUnits) : 2000000;

  if (interAvg > 0) {
    const scaleFactor = target / interAvg;
    const def = DEFAULT_PARAMS;

    state.params.rateDigitalisasi = Math.max(10000, Math.round((def.rateDigitalisasi * scaleFactor) / 1000) * 1000);
    state.params.rateRAB = Math.max(15000, Math.round((def.rateRAB * scaleFactor) / 1000) * 1000);
    state.params.ratePeneng = Math.max(10000, Math.round((def.ratePeneng * scaleFactor) / 1000) * 1000);
    state.params.rateLaporanBulanan = Math.max(25000, Math.round((def.rateLaporanBulanan * scaleFactor) / 5000) * 5000);
    state.params.rateKitAtribut = Math.max(50000, Math.round((def.rateKitAtribut * scaleFactor) / 5000) * 5000);
    state.params.rateVideoProv = Math.max(5000000, Math.round((def.rateVideoProv * scaleFactor) / 500000) * 500000);
  }

  // Update DOM Controls
  const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
  setVal("num-rasio-tpm", state.params.rasioTPMUnit);
  setVal("slider-rasio-tpm", state.params.rasioTPMUnit);
  setVal("num-rasio-verif-wasdal", state.params.rasioVerifWasdalUnit);
  setVal("select-frekuensi-rembuk", state.params.frekuensiRembukWarga);
  setVal("select-durasi-pembekalan", state.params.durasiHariPembekalan);
  setVal("num-rate-digitalisasi", state.params.rateDigitalisasi);
  setVal("num-rate-rab", state.params.rateRAB);
  setVal("num-rate-peneng", state.params.ratePeneng);
  setVal("num-rate-laporan", state.params.rateLaporanBulanan);
  setVal("num-rate-kit-atribut", state.params.rateKitAtribut);
  setVal("num-rate-video-prov", state.params.rateVideoProv);

  // Update active ratio preset button
  [40, 50, 60].forEach(r => {
    const btn = document.getElementById(`btn-ratio-${r}`);
    if (btn) btn.classList.toggle("active", r === state.params.rasioTPMUnit);
  });

  recalculateAndRender();
}"""

code = re.sub(r"function applyTargetPendampinganAutoFit\(targetVal\) \{.*?\n\}", new_autofit, code, flags=re.DOTALL)

with open("js/app.js", "w", encoding="utf-8") as f:
    f.write(code)

print("Successfully implemented 2-pass iterative Auto-Fit in app.js!")
