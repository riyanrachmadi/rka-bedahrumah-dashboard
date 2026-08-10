import json, re

with open("js/data/master514.js", "r", encoding="utf-8") as f:
    text = f.read()
start = text.find("[")
end = text.rfind("]")
kab_list = json.loads(text[start:end+1])

for k in kab_list:
    if str(k['provId']) == '97':
        k['provId'] = '96'

with open("js/data/masterProvinces.js", "r", encoding="utf-8") as f:
    prov_text = f.read()
cleaned_prov = re.sub(r'//.*', '', prov_text)

def parse_js_lit(raw_str):
    s = re.sub(r'([a-zA-Z0-9_]+)\s*:', r'"\1":', raw_str)
    s = s.replace("true", "True").replace("false", "False")
    return eval(s)

prov_match = re.search(r"export const MASTER_PROVINCES = (\[.*?\]);", cleaned_prov, re.DOTALL)
prov_list = parse_js_lit(prov_match.group(1))

sat_match = re.search(r"export const MASTER_SATKER = (\[.*?\]);", cleaned_prov, re.DOTALL)
satker_list = parse_js_lit(sat_match.group(1))

print("Pre-checks OK")
