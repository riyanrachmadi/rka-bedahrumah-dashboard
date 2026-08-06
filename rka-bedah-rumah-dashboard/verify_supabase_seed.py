import os
import sys

def verify_supabase_files():
    schema_path = "supabase/schema.sql"
    seed_path = "supabase/seed.sql"
    
    assert os.path.exists(schema_path), "schema.sql missing!"
    assert os.path.exists(seed_path), "seed.sql missing!"
    
    with open(schema_path, "r", encoding="utf-8") as f:
        schema = f.read()
    
    with open(seed_path, "r", encoding="utf-8") as f:
        seed = f.read()
    
    # Check tables in schema
    tables = ["provinces", "satker", "kabkota", "app_settings", "user_simulations"]
    for t in tables:
        assert f"CREATE TABLE IF NOT EXISTS public.{t}" in schema, f"Table {t} missing in schema!"
        assert f"CREATE POLICY" in schema, "RLS Policies missing in schema!"
    
    # Check seed inserts
    prov_inserts = seed.count("INSERT INTO public.provinces")
    satker_inserts = seed.count("INSERT INTO public.satker")
    kabkota_inserts = seed.count("INSERT INTO public.kabkota")
    settings_inserts = seed.count("INSERT INTO public.app_settings")
    
    assert prov_inserts == 38, f"Expected 38 province inserts, got {prov_inserts}"
    assert satker_inserts == 34, f"Expected 34 satker inserts, got {satker_inserts}"
    assert kabkota_inserts == 514, f"Expected 514 kabkota inserts, got {kabkota_inserts}"
    assert settings_inserts == 3, f"Expected 3 app_settings inserts, got {settings_inserts}"
    
    print(f"✓ Schema DDL Verified: All {len(tables)} tables & RLS policies defined.")
    print(f"✓ Seed Data Verified: {kabkota_inserts} Kab/Kota, {prov_inserts} Provinces, {satker_inserts} Satkers, {settings_inserts} App Settings.")
    print(">>> SUPABASE MIGRATION ASSETS 100% VERIFIED <<<")

if __name__ == "__main__":
    verify_supabase_files()
