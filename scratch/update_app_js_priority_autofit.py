import re

with open("js/app.js", "r", encoding="utf-8") as f:
    code = f.read()

# Replace applyTargetPendampinganAutoFit logic in app.js
new_autofit_fn = """function applyTargetPendampinganAutoFit(targetVal) {
  const target = Math.max(500000, Math.min(6000000, Number(targetVal) || 2000000));
  state.targetAvgPendampingan = target;

  // -------------------------------------------------------------------------
  // TIER 1: PRIORITAS PENYESUAIAN STRUKTURAL
  // Prioritas 1: Proporsi Verifikasi & Wasdal (1 per 100 s/d 1 per 200 unit)
  // Prioritas 2: Konsumsi Rembuk Warga (1 s/d 3 kali)
  // Prioritas 3: Jumlah Hari Pembekalan (2 s/d 5 hari)
  // -------------------------------------------------------------------------
  if (target < 1850000) {
    state.params.rasioVerifWasdalUnit = 200; // 1 trip per 200 unit
    state.params.frekuensiRembukWarga = 1;   # 1 kali konsumsi
    state.params.durasiHariPembekalan = 2;   # 2 hari pembekalan
  } else if (target < 2050000) {
    state.params.rasioVerifWasdalUnit = 160; // 1 trip per 160 unit
    state.params.frekuensiRembukWarga = 2;   # 2 kali konsumsi
    state.params.durasiHariPembekalan = 3;   # 3 hari pembekalan
  } else if (target < 2250000) {
    state.params.rasioVerifWasdalUnit = 130; // 1 trip per 130 unit
    state.params.frekuensiRembukWarga = 3;   # 3 kali konsumsi (Ideal)
    state.params.durasiHariPembekalan = 4;   # 4 hari pembekalan
  } else {
    state.params.rasioVerifWasdalUnit = 100; // 1 trip per 100 unit (Ideal)
    state.params.frekuensiRembukWarga = 3;   # 3 kali konsumsi (Ideal)
    state.params.durasiHariPembekalan = 5;   # 5 hari pembekalan (Ideal)
  }

  // -------------------------------------------------------------------------
  // TIER 2: FINE-TUNING TARIF HARGA SATUAN NON-FISIK
  // -------------------------------------------------------------------------
  if (currentCalculatedData) {
    const summary = currentCalculatedData.summary || {};
    const totalUnits = summary.totalUnitNasional || 370000;
    const currentTotalPend = summary.grandTotalPendampingan || 1;
    const currentAvgPend = totalUnits > 0 ? (currentTotalPend / totalUnits) : 2000000;

    if (currentAvgPend > 0) {
      const scaleFactor = target / currentAvgPend;
      const def = DEFAULT_PARAMS;

      state.params.rateDigitalisasi = Math.max(10000, Math.round((def.rateDigitalisasi * scaleFactor) / 5000) * 5000);
      state.params.rateRAB = Math.max(25000, Math.round((def.rateRAB * scaleFactor) / 5000) * 5000);
      state.params.ratePeneng = Math.max(10000, Math.round((def.ratePeneng * scaleFactor) / 5000) * 5000);
      state.params.rateLaporanBulanan = Math.max(25000, Math.round((def.rateLaporanBulanan * scaleFactor) / 5000) * 5000);
      state.params.rateKitAtribut = Math.max(50000, Math.round((def.rateKitAtribut * scaleFactor) / 10000) * 10000);
      state.params.rateVideoProv = Math.max(5000000, Math.round((def.rateVideoProv * scaleFactor) / 1000000) * 1000000);
    }
  }

  // Update DOM Controls
  const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
  setVal("num-rasio-verif-wasdal", state.params.rasioVerifWasdalUnit);
  setVal("select-frekuensi-rembuk", state.params.frekuensiRembukWarga);
  setVal("select-durasi-pembekalan", state.params.durasiHariPembekalan);
  setVal("num-rate-digitalisasi", state.params.rateDigitalisasi);
  setVal("num-rate-rab", state.params.rateRAB);
  setVal("num-rate-peneng", state.params.ratePeneng);
  setVal("num-rate-laporan", state.params.rateLaporanBulanan);
  setVal("num-rate-kit-atribut", state.params.rateKitAtribut);
  setVal("num-rate-video-prov", state.params.rateVideoProv);

  recalculateAndRender();
}"""

# Clean Python comments in JS code string
new_autofit_fn = new_autofit_fn.replace("# 1 kali", "// 1 kali").replace("# 2 hari", "// 2 hari").replace("# 2 kali", "// 2 kali").replace("# 3 hari", "// 3 hari").replace("# 3 kali", "// 3 kali").replace("# 4 hari", "// 4 hari").replace("# 5 hari", "// 5 hari")

# Find and replace old applyTargetPendampinganAutoFit function in app.js
old_fn_pattern = r"function applyTargetPendampinganAutoFit\(targetVal\) \{.*?\n\}"
code = re.sub(r"function applyTargetPendampinganAutoFit\(targetVal\) \{.*?\n\}", new_autofit_fn, code, flags=re.DOTALL)

# Add listeners for num-rasio-verif-wasdal and select-durasi-pembekalan in initEventListeners
listener_code = """  // Rasio Verif Wasdal & Durasi Pembekalan Listeners
  const numRasioVerifWasdal = document.getElementById("num-rasio-verif-wasdal");
  if (numRasioVerifWasdal) {
    numRasioVerifWasdal.addEventListener("change", e => {
      state.params.rasioVerifWasdalUnit = Math.max(50, Math.min(300, Number(e.target.value) || 100));
      recalculateAndRender();
    });
  }

  const selectDurasiPembekalan = document.getElementById("select-durasi-pembekalan");
  if (selectDurasiPembekalan) {
    selectDurasiPembekalan.addEventListener("change", e => {
      state.params.durasiHariPembekalan = Math.max(2, Math.min(5, Number(e.target.value) || 5));
      recalculateAndRender();
    });
  }
"""

code = code.replace("// Target Pendampingan Auto-Fit Listeners", listener_code + "\n  // Target Pendampingan Auto-Fit Listeners")

with open("js/app.js", "w", encoding="utf-8") as f:
    f.write(code)

print("Successfully updated app.js with prioritized multi-tier auto-fit logic!")
