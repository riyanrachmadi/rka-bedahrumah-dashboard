import re

with open("js/app.js", "r", encoding="utf-8") as f:
    code = f.read()

# Add summary table rendering inside renderTabPenjelasan
summary_table_code = """  // A2. RENDER TABEL RINGKASAN 12 PARAMETER UTAMA REAL-TIME (SECTION 1B)
  const tbodySummary = document.getElementById("tbody-penjelasan-summary");
  if (tbodySummary) {
    const detail = calcData.detailKabKota || [];
    const sumComp = (key) => detail.reduce((acc, k) => acc + (k[key] || 0), 0);

    const isManual = (params.gajiMethod === 'manual' || params.metodeGaji === 'manual');
    const totalKorkabOB = (summary.totalKorkab || 0) * (params.masaKorkab || 10);
    const totalTPMOB = (summary.totalTPM || 0) * (params.masaTPM || 5);

    const paguKorkab = sumComp("komp1_korkab");
    const paguTPM = sumComp("komp2_tpm");

    const avgKorkabHonor = totalKorkabOB > 0 ? Math.round(paguKorkab / totalKorkabOB) : 0;
    const avgTPMHonor = totalTPMOB > 0 ? Math.round(paguTPM / totalTPMOB) : 0;

    const summaryRows = [
      {
        no: 1,
        name: "Proporsi Verifikasi / Wasdal",
        bas: "524111",
        val: `1 Trip / ${params.rasioVerifWasdalUnit || 100} Unit`,
        unit: "Trip / Unit",
        pagu: sumComp("komp9_verifikasi") + sumComp("komp10_wasdal"),
        rule: "SBM Perjadin Biasa (2 Orang x 2 Hari x SBM Perjadin)"
      },
      {
        no: 2,
        name: "Jumlah Konsumsi Rembuk per Unit",
        bas: "521211",
        val: `${params.frekuensiRembukWarga || 3} Kali / Unit`,
        unit: "Kali / Unit",
        pagu: sumComp("komp3_konsumsiRembuk"),
        rule: "SBM Makan Rapat & Kudapan PMK 32/2025 per Provinsi"
      },
      {
        no: 3,
        name: "Jumlah Hari Pembekalan",
        bas: "524119",
        val: `${params.durasiHariPembekalan || 5} Hari Meeting`,
        unit: "Hari",
        pagu: sumComp("komp7_pembekalan"),
        rule: "SBM Paket Fullboard Meeting (56 PPK & 38 Provinsi)"
      },
      {
        no: 4,
        name: "Proporsi TPM",
        bas: "522191",
        val: `2 TPM : ${params.rasioTPMUnit || 40} Unit`,
        unit: "Personel / Unit",
        pagu: sumComp("komp2_tpm"),
        rule: "Formasi SDM Pendamping Lapangan (Masa Tugas 5 Bulan)"
      },
      {
        no: 5,
        name: "Gaji Korkab",
        bas: "522191",
        val: `Rp ${formatNumber(avgKorkabHonor)} / OB`,
        unit: "Rp / OB",
        pagu: paguKorkab,
        rule: isManual ? "Opsi 2: Manual Flat (x IKK)" : "INKINDO Sub-Prof (Rp 17,6M x 55% x Indeks Remunerasi)"
      },
      {
        no: 6,
        name: "Gaji TPM",
        bas: "522191",
        val: `Rp ${formatNumber(avgTPMHonor)} / OB`,
        unit: "Rp / OB",
        pagu: paguTPM,
        rule: isManual ? "Opsi 2: Manual Flat (x IKK)" : "INKINDO Asisten (Rp 14,6M x 55% x Indeks Remunerasi)"
      },
      {
        no: 7,
        name: "Harga Satuan Kit Pembekalan & Atribut Personel",
        bas: "521211",
        val: `Rp ${formatNumber(params.rateKitAtribut || 250000)} / Personel`,
        unit: "Rp / Set",
        pagu: sumComp("komp8_kitAtribut"),
        rule: "Non-SBM Kit Lapangan (Rompi, Topi, ATK) x IKK"
      },
      {
        no: 8,
        name: "Dokumen RAB & Gambar Teknis",
        bas: "521211",
        val: `Rp ${formatNumber(params.rateRAB || 200000)} / Unit`,
        unit: "Rp / Unit",
        pagu: sumComp("komp5_rabGambar"),
        rule: "Non-SBM Penggandaan RAB & Gambar Teknis x IKK"
      },
      {
        no: 9,
        name: "Penggandaan Laporan Bulanan",
        bas: "521211",
        val: `Rp ${formatNumber(params.rateLaporanBulanan || 150000)} / OB`,
        unit: "Rp / OB",
        pagu: sumComp("komp4_laporanBulanan"),
        rule: "Non-SBM Penggandaan Laporan Lapangan x IKK"
      },
      {
        no: 10,
        name: "Digitalisasi Dokumen",
        bas: "522191",
        val: `Rp ${formatNumber(params.rateDigitalisasi || 75000)} / Unit`,
        unit: "Rp / Unit",
        pagu: sumComp("komp12_digitalisasi"),
        rule: "Non-SBM Scan Berkas & SIMPERUM Upload x IKK"
      },
      {
        no: 11,
        name: "Media & Peneng Identitas",
        bas: "521211",
        val: `Rp ${formatNumber(params.ratePeneng || 50000)} / Unit`,
        unit: "Rp / Unit",
        pagu: sumComp("komp15_peneng"),
        rule: "Non-SBM Plat Peneng Aluminium & QR Code x IKK"
      },
      {
        no: 12,
        name: "Dokumentasi & Video Best Practice",
        bas: "522191",
        val: `Rp ${formatNumber(params.rateVideoProv || 15000000)} / Prov`,
        unit: "Rp / Paket Prov",
        pagu: sumComp("komp13_videoBestPractice"),
        rule: "Non-SBM Video Best Practice 38 Provinsi x IKK"
      }
    ];

    tbodySummary.innerHTML = summaryRows.map(r => `
      <tr>
        <td style="text-align: center; font-weight: 700; color: var(--text-muted);">${r.no}</td>
        <td style="font-weight: 700; color: #fff;">${r.name}</td>
        <td><span class="badge-bas">BAS ${r.bas}</span></td>
        <td><strong style="color: var(--accent-cyan); font-family: var(--font-mono);">${r.val}</strong></td>
        <td><span style="font-size: 0.8rem; color: var(--text-secondary);">${r.unit}</span></td>
        <td class="grand-money" style="font-weight: 700; color: #34d399;">${formatRupiahCompact(r.pagu)}</td>
        <td style="font-size: 0.78rem; color: var(--text-muted);">${r.rule}</td>
      </tr>
    `).join("");
  }"""

# Insert summary_table_code inside renderTabPenjelasan after A. RENDER PARAMETER DINAMIS REAL-TIME
code = code.replace("  // B. RENDER SUMMARY BANNER (SECTION 2)", summary_table_code + "\n\n  // B. RENDER SUMMARY BANNER (SECTION 2)")

with open("js/app.js", "w", encoding="utf-8") as f:
    f.write(code)

print("Successfully added 12-parameter real-time summary table rendering to app.js!")
