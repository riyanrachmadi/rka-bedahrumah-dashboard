import re

with open('/Users/riyanr/.gemini/antigravity/scratch/rka-bedah-rumah-dashboard/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

head_match = re.search(r'(<!DOCTYPE html>.*?<div class="app-layout">)', content, re.DOTALL)
head = head_match.group(1) if head_match else ""

sidebar_match = re.search(r'(<aside class="sidebar">.*?</aside>)', content, re.DOTALL)
sidebar = sidebar_match.group(1) if sidebar_match else ""

tab_sdm_match = re.search(r'(<section id="tab-sdm" class="tab-panel">.*?</section>)', content, re.DOTALL)
tab_sdm = tab_sdm_match.group(1) if tab_sdm_match else ""

footer_match = re.search(r'(<!-- MODAL: STANDAR BIAYA MASUKAN.*?</html>)', content, re.DOTALL)
footer = footer_match.group(1) if footer_match else ""

new_main_content = f"""
    <!-- MAIN CONTENT -->
    <main class="main-content">
      
      <!-- TOP HEADER -->
      <header class="top-header">
        <div class="nav-status">
          <div class="status-badge">
            <div class="status-dot"></div>
            <span>LIVE SYNC</span>
          </div>
        </div>

        <div class="header-actions">
          <button id="btn-open-sbm" class="btn btn-secondary">
            ⚙️ Standar SBM
          </button>
          <button id="btn-export-excel" class="btn btn-emerald">
            📥 Unduh Excel
          </button>
        </div>
      </header>

      <!-- DASHBOARD UTAMA (selalu terlihat di atas tab) -->
      <div class="dashboard-container">
        
        <!-- A. SLICER DITJEN -->
        <section class="delineasi-shortcut-section" id="delineasi-shortcut-container" style="margin-bottom: 1rem;">
          <div class="shortcut-header">
            <div class="shortcut-title-wrap">
              <span class="shortcut-title">🏢 Ringkasan Eksekutif Alokasi & Komposisi per Ditjen / Delineasi</span>
            </div>
            <div class="shortcut-actions">
              <button class="del-filter-btn active" id="btn-del-all" data-delineasi="">
                🌐 Semua (370k)
              </button>
              <button class="del-filter-btn" id="btn-del-djkp" data-delineasi="DJKP">
                🌊 DJKP Pesisir (50k)
              </button>
              <button class="del-filter-btn" id="btn-del-djpkt" data-delineasi="DJPKT">
                🏙️ DJPKT Perkotaan (120k)
              </button>
              <button class="del-filter-btn" id="btn-del-djpds" data-delineasi="DJPDS">
                🌾 DJPDS Perdesaan (200k)
              </button>
            </div>
            <div class="target-actions" style="display: flex; gap: 0.5rem; align-items: center; margin-left: auto;">
              <input type="number" id="input-total-target" class="control-number-box" style="width: 100px;" value="370000">
              <button id="btn-set-target-370" class="btn btn-secondary">370k</button>
              <button id="btn-set-target-400" class="btn btn-secondary">400k</button>
            </div>
          </div>
        </section>

        <!-- B. KPI CARDS ROW -->
        <section class="kpi-grid">
          <div class="kpi-card" style="--kpi-accent: #10b981;">
            <div class="kpi-title">
              <span>Grand Total RKA-K/L</span>
              <div class="kpi-icon">💰</div>
            </div>
            <div class="kpi-value" id="kpi-grand-total">Rp 0</div>
          </div>
          <div class="kpi-card" style="--kpi-accent: #0ea5e9;">
            <div class="kpi-title">
              <span>Bantuan Fisik</span>
              <div class="kpi-icon">🏗️</div>
            </div>
            <div class="kpi-value" id="kpi-fisik-total">Rp 0</div>
          </div>
          <div class="kpi-card" style="--kpi-accent: #8b5cf6;">
            <div class="kpi-title">
              <span>Pendampingan</span>
              <div class="kpi-icon">👥</div>
            </div>
            <div class="kpi-value" id="kpi-pendampingan-total">Rp 0</div>
          </div>
          <div class="kpi-card" style="--kpi-accent: #f59e0b;">
            <div class="kpi-title">
              <span>Tenaga Pendamping</span>
              <div class="kpi-icon">👷</div>
            </div>
            <div class="kpi-value" id="kpi-personel-total">0 Org</div>
          </div>
        </section>

        <!-- C. CHARTS ROW -->
        <div class="charts-grid" style="grid-template-columns: 2fr 1fr;">
          <div class="chart-card">
            <div class="chart-header">
              <div class="chart-title">Stacked Bar Chart per Pulau</div>
            </div>
            <div class="chart-wrap">
              <canvas id="chart-pulau-stacked"></canvas>
            </div>
          </div>
          <div class="chart-card">
            <div class="chart-header">
              <div class="chart-title">Doughnut Chart Komposisi Tier</div>
            </div>
            <div class="chart-wrap">
              <canvas id="chart-tier-doughnut"></canvas>
            </div>
          </div>
        </div>

        <!-- D. SDM MINI CARDS -->
        <div id="sdm-pulau-grid" style="display: flex; gap: 1rem; overflow-x: auto; padding-top: 1rem; padding-bottom: 1rem;">
          <!-- diisi JavaScript -->
        </div>

        <!-- TAB NAVIGATION (7 tab) -->
        <nav class="tabs-header">
          <button class="tab-btn active" data-tab="tab-kabkota">🗺️ Master 514 Kab/Kota</button>
          <button class="tab-btn" data-tab="tab-komposisi">📊 Komposisi Anggaran</button>
          <button class="tab-btn" data-tab="tab-bas">📑 Konsolidasi BAS</button>
          <button class="tab-btn" data-tab="tab-simulator">🎯 Simulator Target</button>
          <button class="tab-btn" data-tab="tab-sdm">👷 SDM Pendamping</button>
          <button class="tab-btn" data-tab="tab-rincian">📍 Rincian Provinsi & Satker</button>
        </nav>

        <!-- TAB PANELS -->

        <!-- TAB tab-kabkota -->
        <section id="tab-kabkota" class="tab-panel active">
          <div class="table-toolbar">
            <div class="search-input-wrap">
              <span class="search-icon">🔍</span>
              <input type="text" id="search-kabkota" class="search-input" placeholder="Cari...">
            </div>
            <div class="filter-group">
              <select id="filter-kabkota-wilayah" class="select-filter"><option value="">Semua Wilayah</option></select>
              <select id="filter-kabkota-pulau" class="select-filter"><option value="">Semua Pulau</option></select>
              <select id="filter-kabkota-delineasi" class="select-filter"><option value="">Semua Delineasi</option></select>
              <select id="filter-kabkota-zone" class="select-filter"><option value="">Semua Zona</option></select>
            </div>
            <div class="grouping-mode-group">
              <button id="btn-group-flat" class="btn btn-secondary active">Flat 514</button>
              <button id="btn-group-prov" class="btn btn-secondary">Per Provinsi</button>
              <button id="btn-group-satker" class="btn btn-secondary">Per Satker</button>
            </div>
            <button id="btn-reset-kab-indikasi" class="btn btn-secondary">🔄 Reset</button>
          </div>
          <div style="background: rgba(14, 165, 233, 0.08); border: 1px solid rgba(14, 165, 233, 0.2); border-radius: 8px; padding: 0.65rem 1rem; font-size: 0.8rem; margin-bottom: 1rem;">
            Info: Tab ini mengubah target final langsung (total berubah sesuai input).
          </div>
          <div class="filter-summary-banner" id="summary-banner-kabkota"></div>
          <div class="table-card">
            <div class="table-responsive">
              <table class="datagrid-table" id="table-kabkota">
                <thead>
                  <tr>
                    <th>No</th><th>Kode</th><th>Kab/Kota</th><th>Provinsi</th><th>Wilayah</th><th>Pulau</th><th>Delineasi</th><th>Zona</th><th>Target Final ✏️</th><th>Korkab</th><th>TPM</th><th>IKK</th><th>Anggaran Fisik</th><th>Pendampingan</th><th>Grand Total</th>
                  </tr>
                </thead>
                <tbody id="tbody-kabkota"></tbody>
                <tfoot id="tfoot-kabkota"></tfoot>
              </table>
            </div>
          </div>
        </section>

        <!-- TAB tab-komposisi -->
        <section id="tab-komposisi" class="tab-panel">
          <div class="sub-nav" style="display: flex; gap: 1rem; margin-bottom: 1rem;">
            <button id="btn-sub-fisik" class="btn btn-primary">Komposisi Fisik</button>
            <button id="btn-sub-nonfisik" class="btn btn-secondary">Non-Fisik</button>
            <button id="btn-sub-makro" class="btn btn-secondary">Total/Makro</button>
          </div>
          
          <div id="sub-panel-fisik">
            <div class="tier-cards-grid">
              <div class="tier-card tier-20"><div class="tier-header"><span class="tier-title">Tier Rp 20.000.000 / Unit</span></div></div>
              <div class="tier-card tier-25"><div class="tier-header"><span class="tier-title">Tier Rp 25.000.000 / Unit</span></div></div>
              <div class="tier-card tier-40"><div class="tier-header"><span class="tier-title">Tier Rp 40.000.000 / Unit</span></div></div>
            </div>
            <div class="charts-grid">
              <div class="chart-card"><div class="chart-wrap"><canvas id="chart-tier-pie"></canvas></div></div>
              <div class="chart-card"><div class="chart-wrap"><canvas id="chart-tier-bar"></canvas></div></div>
            </div>
            <div class="table-card">
              <table class="datagrid-table" id="table-fisik-tier">
                <thead><tr><th>Data</th></tr></thead>
                <tbody id="tbody-fisik-tier"></tbody>
                <tfoot id="tfoot-fisik-tier"></tfoot>
              </table>
            </div>
          </div>

          <div id="sub-panel-nonfisik" style="display:none;">
            <div class="kpi-grid"></div>
            <div class="chart-card"><div class="chart-wrap"><canvas id="chart-nonfisik-komponen"></canvas></div></div>
            <div class="table-card">
              <table class="datagrid-table" id="table-16-komponen">
                <thead><tr><th>Data</th></tr></thead>
                <tbody id="tbody-16-komponen"></tbody>
                <tfoot id="tfoot-16-komponen"></tfoot>
              </table>
            </div>
          </div>

          <div id="sub-panel-makro" style="display:none;">
            <div class="charts-grid">
              <div class="chart-card"><div class="chart-wrap"><canvas id="chart-makro-postur"></canvas></div></div>
              <div class="chart-card"><div class="chart-wrap"><canvas id="chart-makro-wilayah"></canvas></div></div>
            </div>
            <div class="table-card">
              <table class="datagrid-table" id="table-makro-wilayah">
                <thead><tr><th>Data</th></tr></thead>
                <tbody id="tbody-makro-wilayah"></tbody>
                <tfoot id="tfoot-makro-wilayah"></tfoot>
              </table>
            </div>
          </div>
        </section>

        <!-- TAB tab-bas -->
        <section id="tab-bas" class="tab-panel">
          <div class="table-toolbar">
            <select id="filter-bas-provinsi" class="select-filter"><option value="">Semua Provinsi</option></select>
            <select id="filter-bas-satker" class="select-filter"><option value="">Semua Satker</option></select>
          </div>
          <div class="charts-grid">
            <div class="chart-card"><div class="chart-wrap"><canvas id="chart-bas-pie"></canvas></div></div>
            <div class="chart-card"><div class="chart-wrap"><canvas id="chart-satker-bar"></canvas></div></div>
          </div>
          <div class="table-card">
            <div class="table-responsive">
              <table class="datagrid-table" id="table-bas">
                <thead>
                  <tr><th>No</th><th>Kode BAS</th><th>Uraian</th><th>Postur</th><th>Komponen Terkait</th><th>Total (Rp)</th><th>Proporsi</th><th>Aksi</th></tr>
                </thead>
                <tbody id="tbody-bas"></tbody>
                <tfoot id="tfoot-bas"></tfoot>
              </table>
            </div>
          </div>
        </section>

        <!-- TAB tab-simulator -->
        <section id="tab-simulator" class="tab-panel">
          <div style="background: rgba(14, 165, 233, 0.08); border: 1px solid rgba(14, 165, 233, 0.2); border-radius: 8px; padding: 0.65rem 1rem; font-size: 0.8rem; margin-bottom: 1rem;">
            Info: Tab ini mengubah indikasi alokasi (total terkunci, sistem redistribute).
            Total target terkunci: <span id="sim-total-locked">370,000</span> (<span id="sim-total-display">370,000</span> dialokasikan).
          </div>
          <div class="method-switch-group">
            <button id="btn-sim-agregat" class="method-switch-btn active">Agregat/Delineasi</button>
            <button id="btn-sim-provinsi" class="method-switch-btn">Per Provinsi</button>
            <button id="btn-sim-kabkota" class="method-switch-btn">Per Kab/Kota</button>
          </div>
          
          <div id="panel-sim-agregat">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem;">
              <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.25rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; align-items: center;">
                  <span style="font-weight: 700; color: #38bdf8;">DJKP</span>
                  <input type="number" id="sim-num-djkp" class="control-number-box" style="width: 120px;">
                </div>
                <input type="range" id="sim-slider-djkp" class="range-slider">
              </div>
              <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.25rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; align-items: center;">
                  <span style="font-weight: 700; color: #c084fc;">DJPKT</span>
                  <input type="number" id="sim-num-djpkt" class="control-number-box" style="width: 120px;">
                </div>
                <input type="range" id="sim-slider-djpkt" class="range-slider">
              </div>
              <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.25rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; align-items: center;">
                  <span style="font-weight: 700; color: #34d399;">DJPDS</span>
                  <input type="number" id="sim-num-djpds" class="control-number-box" style="width: 120px;">
                </div>
                <input type="range" id="sim-slider-djpds" class="range-slider">
              </div>
            </div>
            <button id="btn-apply-sim-agregat" class="btn btn-primary">Apply</button>
            <button id="btn-reset-sim-agregat" class="btn btn-secondary">Reset</button>
          </div>

          <div id="panel-sim-provinsi" style="display:none;">
            <table class="datagrid-table" id="table-sim-provinsi">
              <thead><tr><th>Provinsi</th></tr></thead><tbody id="tbody-sim-provinsi"></tbody>
            </table>
            <button id="btn-apply-sim-provinsi" class="btn btn-primary" style="margin-top: 1rem;">Apply Sim Prov</button>
            <button id="btn-reset-sim-provinsi" class="btn btn-secondary" style="margin-top: 1rem;">Reset</button>
          </div>

          <div id="panel-sim-kabkota" style="display:none;">
            <div class="table-toolbar">
              <input type="text" id="search-sim-kabkota" class="search-input" placeholder="Search...">
              <select id="filter-sim-kabkota" class="select-filter"><option value="">Filter</option></select>
            </div>
            <table class="datagrid-table" id="table-sim-kabkota">
              <thead><tr><th>Kab/Kota</th></tr></thead><tbody id="tbody-sim-kabkota"></tbody>
            </table>
            <button id="btn-apply-sim-kabkota" class="btn btn-primary" style="margin-top: 1rem;">Apply Sim Kab</button>
            <button id="btn-reset-sim-kabkota" class="btn btn-secondary" style="margin-top: 1rem;">Reset</button>
          </div>
        </section>

        <!-- TAB tab-sdm (PERTahankan Asli) -->
{tab_sdm}

        <!-- TAB tab-rincian -->
        <section id="tab-rincian" class="tab-panel">
          <div class="table-toolbar">
            <div class="grouping-mode-group">
              <button id="btn-rincian-prov" class="btn btn-secondary active">Per Provinsi</button>
              <button id="btn-rincian-satker" class="btn btn-secondary">Per Satker</button>
            </div>
            <div class="search-input-wrap">
              <span class="search-icon">🔍</span>
              <input type="text" id="search-rincian" class="search-input" placeholder="Cari...">
            </div>
            <div class="filter-group">
              <select id="filter-rincian-wilayah" class="select-filter"><option value="">Semua Wilayah</option></select>
              <select id="filter-rincian-pulau" class="select-filter"><option value="">Semua Pulau</option></select>
              <select id="filter-rincian-zone" class="select-filter"><option value="">Semua Zona</option></select>
            </div>
          </div>
          <div class="filter-summary-banner" id="summary-banner-rincian"></div>
          
          <div id="panel-rincian-prov">
            <div class="table-responsive">
              <table class="datagrid-table" id="table-provinsi">
                <thead>
                  <tr>
                    <th>Provinsi/Satker</th><th>Wilayah</th><th>Pulau</th><th>IKK</th><th>Zona</th><th>DJKP</th><th>DJPKT</th><th>DJPDS</th><th>Total Unit</th><th>PPK</th><th>Fisik</th><th>Komp1-16</th><th>Total Pendampingan</th><th>Grand Total</th>
                  </tr>
                </thead>
                <tbody id="tbody-provinsi"></tbody>
                <tfoot id="tfoot-provinsi"></tfoot>
              </table>
            </div>
          </div>
          
          <div id="panel-rincian-satker" style="display:none;">
            <div class="table-responsive">
              <table class="datagrid-table" id="table-satker">
                <thead>
                  <tr>
                    <th>Nama Satker DIPA</th><th>Wilayah</th><th>Pulau</th><th>Total Unit</th><th>PPK</th><th>Korkab</th><th>TPM</th><th>Fisik</th><th>Komp1-16</th><th>Total Pendampingan</th><th>Grand Total</th>
                  </tr>
                </thead>
                <tbody id="tbody-satker"></tbody>
                <tfoot id="tfoot-satker"></tfoot>
              </table>
            </div>
          </div>
        </section>

      </div>
    </main>
"""

full_content = head + "\n" + sidebar + "\n" + new_main_content + "\n  </div>\n" + footer

with open('/Users/riyanr/.gemini/antigravity/scratch/rka-bedah-rumah-dashboard/index.html', 'w', encoding='utf-8') as f:
    f.write(full_content)

print(f"Total lines written: {len(full_content.splitlines())}")
