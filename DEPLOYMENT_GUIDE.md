# 🚀 Panduan Deployment: Supabase & Vercel

Panduan lengkap untuk memindahkan database RKA Bedah Rumah ke **Supabase (PostgreSQL)** dan mendeposisi aplikasi ke **Vercel** agar dapat diakses secara publik dan online.

---

## ⚡ LOKASI BERKAS PENTING

1. `supabase/schema.sql` — Naskah DDL Pembuatan Tabel, Indeks & Aturan RLS.
2. `supabase/seed.sql` — Naskah Data Master (514 Kab/Kota, 38 Provinsi, 34 Satker, SBM Rates).
3. `js/services/supabaseClient.js` — Modul Inisialisasi Klien Supabase JS SDK.
4. `vercel.json` — Berkas Konfigurasi Static Host Vercel.

---

## 🛠️ LANGKAH 1: Setup Database Supabase Gratis (3 Menit)

1. Buka [https://supabase.com](https://supabase.com) dan buat akun/login dengan GitHub.
2. Klik **New Project**, beri nama project (misal: `rka-bedah-rumah-db`) dan atur kata sandi database.
3. Setelah project siap, buka menu **SQL Editor** pada navigasi kiri Supabase.
4. Salin isi berkas [`supabase/schema.sql`](file:///Users/riyanr/.gemini/antigravity/scratch/rka-bedah-rumah-dashboard/supabase/schema.sql), tempel ke SQL Editor Supabase, lalu klik tombol **RUN**.
5. Buka tab SQL Editor baru, salin isi berkas [`supabase/seed.sql`](file:///Users/riyanr/.gemini/antigravity/scratch/rka-bedah-rumah-dashboard/supabase/seed.sql), tempel dan klik **RUN**.
6. Buka **Project Settings** → **API**. Salin kredensial berikut:
   - **Project URL** (contoh: `https://xyzcompany.supabase.co`)
   - **Project API Keys (anon / public)** (contoh: `eyJhbGciOi...`)

---

## 🌐 LANGKAH 2: Menghubungkan Kredensial Supabase ke Aplikasi

Buka `index.html` dan isi kredensial Supabase pada bagian skrip header:

```html
<script>
  window.ENV_SUPABASE_URL = "https://xyzcompany.supabase.co";
  window.ENV_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
</script>
```

---

## ☁️ LANGKAH 3: Deploy ke Vercel (2 Menit)

### Opsi A: Deploy via GitHub & Vercel Web Dashboard (Rekomendasi)
1. Push repositori project ini ke GitHub (`git init && git add . && git commit -m "Initial commit" && git push`).
2. Buka [https://vercel.com](https://vercel.com) dan login dengan GitHub.
3. Klik **Add New...** → **Project**, pilih repositori `rka-bedah-rumah-dashboard`.
4. Pada bagian **Environment Variables**, tambahkan:
   - `NEXT_PUBLIC_SUPABASE_URL` = URL Supabase Anda
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Key Anon Supabase Anda
5. Klik **Deploy**! Aplikasi Anda langsung aktif secara online dengan domain publik (contoh: `rka-bedah-rumah.vercel.app`).

### Opsi B: Deploy via Vercel CLI (Terminal)
Jalankan perintah berikut di terminal workspace:
```bash
npx vercel --prod
```
---

## 🔍 Pengujian & Akses Online

Setelah dideploy, aplikasi web akan memuat data 514 Kab/Kota secara *real-time* langsung dari PostgreSQL Supabase dan dapat diakses bersama oleh tim Anda di mana saja.
