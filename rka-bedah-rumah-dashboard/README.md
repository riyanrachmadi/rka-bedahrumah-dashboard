# Sistem Dashboard & Spreadsheet Anggaran Bedah Rumah (Kementerian PKP)

Aplikasi Web Dashboard dan Spreadsheet Engine terintegrasi untuk menyusun dan menghitung **Rencana Kerja dan Anggaran (RKA-K/L)** Program Bedah Rumah di Kementerian Perumahan dan Kawasan Permukiman (PKP).

---

## 🎯 Target Nasional & Lingkup
- **Target Unit:** Tepat **370.000 Unit Rumah** (Dapat disimulasikan secara dinamis)
  - **DJKP (Perkotaan):** 50.000 Unit
  - **DJPKT (Perumahan Kota):** 120.000 Unit
  - **DJPDS (Perumahan Desa):** 200.000 Unit
- **Wilayah Administrasi:** 514 Kabupaten/Kota di 38 Provinsi (Indikasi awal setiap Kab/Kota dapat diedit/disesuaikan langsung)
- **Satuan Kerja DIPA:** 34 Satker PKP (Agregasi Satker Papua I & Satker Papua II)
- **Pejabat Pembuat Komitmen (PPK):** 56 PPK Lapangan
- **Koefisien Wilayah:** Indeks Kemahalan Konstruksi (IKK) BPS 2025 (khusus komponen pendampingan Non-SBM)

---

## 🏗️ Postur Anggaran & Bagan Akun Standar (KEP-331/PB/2021)

### Postur 1: Bantuan Fisik (Murni - Tanpa Pengali IKK)
- **BAS `526312` (Belanja Barang Bantuan Pemerintah):** 
  $$\text{Anggaran Fisik} = \text{Target Unit Final} \times \text{Base Rate Fisik}(\text{Zona})$$
  *(Tidak dikalikan koefisien IKK)*

### Postur 2: 16 Komponen Pendampingan (Non-Fisik)
- **BAS `522191` (Belanja Jasa Lainnya - Dikalikan IKK):**
  - Komp 1: Honor Korkab / Korkot (`INKINDO Sub-Prof * 55% * (IKK/100) * 10 Bulan`)
  - Komp 2: Honor TPM (`INKINDO Asisten * 55% * (IKK/100) * 5 Bulan`)
  - Komp 6: Operasional Rutin TPM Support Cost (`TPM * 5 Bulan * Support_Matrix(Zona) * (IKK/100)`)
  - Komp 12: Digitalisasi Dokumen (`Unit * Rp 25.000 * (IKK/100)`)
  - Komp 13: Dokumentasi & Video Best Practice (`38 Prov * Rp 30.000.000 * (IKK_Prov/100)`)
- **BAS `521211` (Belanja Bahan):**
  - Komp 3: Konsumsi Rembuk Warga (`Unit * 2 * SBM_Makan_Minum`) — *SBM Murni*
  - Komp 4: Laporan Bulanan TPM & Korkab (`Total OB * Rp 75.000 * (IKK/100)`)
  - Komp 5: Dokumen RAB & Gambar Teknis (`Unit * Rp 25.000 * (IKK/100)`)
  - Komp 8: Kit Pembekalan & Atribut (`(TPM + Korkab) * Rp 250.000 * (IKK/100)`)
  - Komp 15: Media Sosialisasi & Peneng Identitas (`Unit * Rp 50.000 * (IKK/100)`)
- **BAS `524111` (Belanja Perjalanan Dinas Biasa - SBM Murni):**
  - Komp 9: Pendampingan Verifikasi Satker (`Trip Verif * 2 Org * 2 Hari * SBM`)
  - Komp 10: Pengawasan & Pengendalian / Wasdal (`Trip Wasdal * 2 Org * 2 Hari * SBM`)
  - Komp 11: Koordinasi ke Pusat Jakarta (`34 Satker * 5 Org * 2 Kali * SBM Jakarta`)
  - Komp 14: Pendampingan APH (`Trip APH * 2 Org * 2 Hari * SBM`)
- **BAS `524119` (Belanja Paket Meeting Luar Kota - SBM Murni):**
  - Komp 7: Paket Rapat Pembekalan (`(TPM + Korkab + Panitia) * SBM Fullboard 5 Hari`)
- **BAS `522141` (Belanja Sewa - SBM Murni):**
  - Komp 16A: Sewa Kendaraan Bulanan PPK (`56 PPK * 10 Bulan * Rp 9.000.000`)
  - Komp 16B: Sewa Kendaraan Insidental Lapangan (`Total Hari Trip * Rp 850.000`)

---

## ⚡ Pembaruan Fitur Terbaru:
1. **Kontrol Ganda (Dual Control):** Setiap parameter dinamis (masa penugasan, honor INKINDO, base rate fisik, support cost, rasio wasdal, dsb.) dapat diubah menggunakan **slider geser** maupun **mengetik angka langsung** dengan sinkronisasi otomatis dua arah.
2. **Nilai Bantuan Fisik Murni:** Nilai bantuan fisik (`526312`) dihitung berdasarkan perkalian unit dan tarif dasar zona tanpa dikalikan faktor IKK.
3. **Kustomisasi Indikasi Alokasi 514 Kab/Kota:** Pengguna dapat mengubah angka indikasi awal pada masing-masing Kabupaten/Kota langsung pada tabel (Tab 4 Master Kab/Kota). Sistem otomatis menghitung ulang alokasi unit secara presisi menggunakan algoritma *Largest Remainder*. Terdapat tombol *Reset Indikasi* untuk mengembalikan ke baseline sewaktu-waktu.

---

## 🚀 Cara Menjalankan Aplikasi
Buka Terminal di direktori project ini dan jalankan:
```bash
./start.sh
```
Atau:
```bash
python3 -m http.server 8080
```
Lalu buka browser Anda di: `http://localhost:8080`
