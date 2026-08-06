-- ============================================================================
-- SUPABASE POSTGRESQL SCHEMA FOR RKA BEDAH RUMAH DASHBOARD PKP
-- ============================================================================

-- Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. TABLE PROVINCES (38 Provinsi Indonesia)
CREATE TABLE IF NOT EXISTS public.provinces (
    id VARCHAR(5) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    ikk NUMERIC(6, 2) NOT NULL,
    satker_id VARCHAR(20),
    satker_name TEXT,
    ppk_count INTEGER DEFAULT 1,
    default_zone VARCHAR(20) DEFAULT 'Sedang',
    pulau VARCHAR(50) NOT NULL,
    wilayah_kerja VARCHAR(20) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. TABLE SATKER (34 Satker BP2P DIPA)
CREATE TABLE IF NOT EXISTS public.satker (
    id VARCHAR(20) PRIMARY KEY,
    name TEXT NOT NULL,
    prov_ids TEXT[] NOT NULL,
    ppk_count INTEGER DEFAULT 1,
    pulau VARCHAR(50) NOT NULL,
    wilayah_kerja VARCHAR(20) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. TABLE KABKOTA (514 Kabupaten / Kota Master Data BPS)
CREATE TABLE IF NOT EXISTS public.kabkota (
    id VARCHAR(10) PRIMARY KEY,
    no_index INTEGER NOT NULL,
    name VARCHAR(100) NOT NULL,
    full_name VARCHAR(120) NOT NULL,
    prov_id VARCHAR(5) REFERENCES public.provinces(id) ON DELETE CASCADE,
    prov_name VARCHAR(100) NOT NULL,
    wilayah_kerja VARCHAR(20) NOT NULL,
    pulau VARCHAR(50) NOT NULL,
    delineasi VARCHAR(10) NOT NULL,
    zone VARCHAR(10) NOT NULL,
    ikk NUMERIC(6, 3) NOT NULL,
    indikasi_awal INTEGER NOT NULL DEFAULT 0,
    target_unit_final INTEGER NOT NULL DEFAULT 0,
    satker_id VARCHAR(20) REFERENCES public.satker(id) ON DELETE SET NULL,
    satker_name TEXT,
    ppk_count INTEGER DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. TABLE APP_SETTINGS (Dynamic Parameters, Standar SBM, Target Base)
CREATE TABLE IF NOT EXISTS public.app_settings (
    key VARCHAR(50) PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. TABLE USER_SIMULATIONS (Penyimpanan Skenario Simulasi Multi-User)
CREATE TABLE IF NOT EXISTS public.user_simulations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(150) NOT NULL,
    description TEXT,
    custom_target_overrides JSONB,
    custom_indikasi_overrides JSONB,
    custom_params JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Performance Indices
CREATE INDEX IF NOT EXISTS idx_kabkota_prov_id ON public.kabkota(prov_id);
CREATE INDEX IF NOT EXISTS idx_kabkota_satker_id ON public.kabkota(satker_id);
CREATE INDEX IF NOT EXISTS idx_kabkota_pulau ON public.kabkota(pulau);
CREATE INDEX IF NOT EXISTS idx_kabkota_delineasi ON public.kabkota(delineasi);
CREATE INDEX IF NOT EXISTS idx_kabkota_zone ON public.kabkota(zone);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES FOR ANONYMOUS PUBLIC READ ACCESS
-- ============================================================================

ALTER TABLE public.provinces ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.satker ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.kabkota ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_simulations ENABLE ROW LEVEL SECURITY;

-- Grant Select Permissions to anon and authenticated roles
DROP POLICY IF EXISTS "Public Read Access for Provinces" ON public.provinces;
CREATE POLICY "Public Read Access for Provinces" ON public.provinces FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Access for Satker" ON public.satker;
CREATE POLICY "Public Read Access for Satker" ON public.satker FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Access for Kabkota" ON public.kabkota;
CREATE POLICY "Public Read Access for Kabkota" ON public.kabkota FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Access for App Settings" ON public.app_settings;
CREATE POLICY "Public Read Access for App Settings" ON public.app_settings FOR SELECT USING (true);

-- Allow Public Insert / Select for User Simulations
DROP POLICY IF EXISTS "Public Read Access for Simulations" ON public.user_simulations;
CREATE POLICY "Public Read Access for Simulations" ON public.user_simulations FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Insert Access for Simulations" ON public.user_simulations;
CREATE POLICY "Public Insert Access for Simulations" ON public.user_simulations FOR INSERT WITH CHECK (true);
