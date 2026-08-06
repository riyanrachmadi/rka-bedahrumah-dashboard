import json
import re

def parse_js_var(filepath, var_name):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    start_str = f"export const {var_name} ="
    start = content.find(start_str)
    if start == -1:
        raise ValueError(f"Var {var_name} not found in {filepath}")
    
    start += len(start_str)
    bracket_count = 0
    in_str = False
    str_char = None
    end = -1
    
    for i in range(start, len(content)):
        char = content[i]
        if in_str:
            if char == str_char and content[i-1] != '\\':
                in_str = False
        else:
            if char in ("'", '"', '`'):
                in_str = True
                str_char = char
            elif char in ('[', '{'):
                bracket_count += 1
            elif char in (']', '}'):
                bracket_count -= 1
                if bracket_count == 0:
                    end = i + 1
                    break
    
    js_obj_str = content[start:end].strip()
    js_obj_str = re.sub(r'//.*', '', js_obj_str)
    js_obj_str = re.sub(r'([{,]\s*)([a-zA-Z0-9_]+)\s*:', r'\1"\2":', js_obj_str)
    js_obj_str = js_obj_str.replace('true', 'True').replace('false', 'False')
    
    return eval(js_obj_str)

provinces = parse_js_var("js/data/masterProvinces.js", "MASTER_PROVINCES")
satker = parse_js_var("js/data/masterProvinces.js", "MASTER_SATKER")
sbm_rates = parse_js_var("js/data/masterProvinces.js", "SBM_RATES")
kabkota = parse_js_var("js/data/master514.js", "MASTER_514_KABKOTA")
default_params = parse_js_var("js/data/defaultParams.js", "DEFAULT_PARAMS")
default_targets = parse_js_var("js/data/defaultParams.js", "DEFAULT_TARGETS")

def q(val):
    if val is None:
        return "NULL"
    s = str(val).replace("'", "''")
    return f"'{s}'"

sql_lines = []
sql_lines.append("-- ============================================================================")
sql_lines.append("-- SUPABASE SEED DATA FOR RKA BEDAH RUMAH DASHBOARD PKP")
sql_lines.append("-- ============================================================================\n")
sql_lines.append("TRUNCATE TABLE public.kabkota, public.provinces, public.satker, public.app_settings CASCADE;\n")

sql_lines.append("-- 1. INSERT PROVINCES (38 Records)")
for p in provinces:
    pid = q(p["id"])
    name = q(p["name"])
    ikk = p["ikk"]
    satker_id = q(p.get("satkerId", ""))
    satker_name = q(p.get("satkerName", ""))
    ppk_count = p.get("ppkCount", 1)
    default_zone = q(p.get("defaultZone", "Sedang"))
    pulau = q(p["pulau"])
    wilayah = q(p["wilayahKerja"])
    sql_lines.append(f"INSERT INTO public.provinces (id, name, ikk, satker_id, satker_name, ppk_count, default_zone, pulau, wilayah_kerja) VALUES ({pid}, {name}, {ikk}, {satker_id}, {satker_name}, {ppk_count}, {default_zone}, {pulau}, {wilayah});")

sql_lines.append("\n-- 2. INSERT SATKER (34 Records)")
for s in satker:
    sid = q(s["id"])
    name = q(s["name"])
    prov_ids_list = [q(pid) for pid in s.get("provIds", [])]
    prov_ids = f"ARRAY[{', '.join(prov_ids_list)}]"
    ppk_count = s.get("ppkCount", 1)
    pulau = q(s["pulau"])
    wilayah = q(s["wilayahKerja"])
    sql_lines.append(f"INSERT INTO public.satker (id, name, prov_ids, ppk_count, pulau, wilayah_kerja) VALUES ({sid}, {name}, {prov_ids}, {ppk_count}, {pulau}, {wilayah});")

sql_lines.append("\n-- 3. INSERT KABKOTA (514 Master Records)")
for k in kabkota:
    kid = q(k["id"])
    no_idx = k["no"]
    name = q(k["name"])
    full_name = q(k.get("fullName", k["name"]))
    prov_id = q(k["provId"])
    prov_name = q(k["provName"])
    wilayah = q(k["wilayahKerja"])
    pulau = q(k["pulau"])
    del_code = q(k["delineasi"])
    zone = q(k["zone"])
    ikk = k["ikk"]
    ind_awal = k.get("indikasiAwal", 0)
    target_final = k.get("targetUnitFinal", 0)
    sid = q(k.get("satkerId", ""))
    sname = q(k.get("satkerName", ""))
    ppk_cnt = k.get("ppkCount", 1)
    sql_lines.append(f"INSERT INTO public.kabkota (id, no_index, name, full_name, prov_id, prov_name, wilayah_kerja, pulau, delineasi, zone, ikk, indikasi_awal, target_unit_final, satker_id, satker_name, ppk_count) VALUES ({kid}, {no_idx}, {name}, {full_name}, {prov_id}, {prov_name}, {wilayah}, {pulau}, {del_code}, {zone}, {ikk}, {ind_awal}, {target_final}, {sid}, {sname}, {ppk_cnt});")

sql_lines.append("\n-- 4. INSERT APP SETTINGS")
sbm_str = q(json.dumps(sbm_rates))
params_str = q(json.dumps(default_params))
targets_str = q(json.dumps(default_targets))

sql_lines.append(f"INSERT INTO public.app_settings (key, value) VALUES ('sbm_rates', {sbm_str}::jsonb) ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;")
sql_lines.append(f"INSERT INTO public.app_settings (key, value) VALUES ('default_params', {params_str}::jsonb) ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;")
sql_lines.append(f"INSERT INTO public.app_settings (key, value) VALUES ('default_targets', {targets_str}::jsonb) ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;")

seed_sql = "\n".join(sql_lines)
with open("supabase/seed.sql", "w", encoding="utf-8") as f:
    f.write(seed_sql)

print(f"Generated supabase/seed.sql successfully! ({len(seed_sql):,} bytes, {seed_sql.count(chr(10))} lines)")
