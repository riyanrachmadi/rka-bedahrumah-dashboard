import json, re

inkindo_indexes = {
    '11': 0.963, # Aceh
    '12': 0.976, # Sumut
    '13': 0.947, # Sumbar
    '14': 1.08,  # Riau
    '21': 1.101, # Kepri
    '15': 0.908, # Jambi
    '16': 0.929, # Sumsel
    '19': 0.91,  # Babel
    '17': 0.889, # Bengkulu
    '18': 0.899, # Lampung
    '36': 0.95,  # Banten
    '31': 1.0,   # DKI
    '32': 0.847, # Jabar
    '33': 0.823, # Jateng
    '34': 0.838, # DIY
    '35': 0.979, # Jatim
    '51': 0.958, # Bali
    '52': 0.877, # NTB
    '53': 0.841, # NTT
    '61': 0.937, # Kalbar
    '62': 0.925, # Kalteng
    '63': 0.918, # Kalsel
    '64': 1.03,  # Kaltim
    '65': 1.086, # Kaltara
    '71': 0.944, # Sulut
    '72': 0.908, # Sulteng
    '74': 0.947, # Sultra
    '73': 0.97,  # Sulsel
    '76': 0.909, # Sulbar
    '75': 0.924, # Gorontalo
    '81': 0.934, # Maluku
    '82': 0.94,  # Malut
    '93': 1.113, # Papua
    '91': 1.202, # Papua Barat
    '94': 1.114, # Papua Selatan
    '95': 1.13,  # Papua Tengah
    '96': 1.153, # Papua Pegunungan
    '92': 1.194  # PBD
}

# 1. Update masterProvinces.js
with open("js/data/masterProvinces.js", "r", encoding="utf-8") as f:
    prov_code = f.read()

lines = prov_code.split("\n")
new_lines = []
for l in lines:
    m = re.search(r"id:\s*'(\d+)'", l)
    if m:
        p_id = m.group(1)
        idx = inkindo_indexes.get(p_id, 1.0)
        # Remove existing indeksInkindo if present
        clean_l = re.sub(r",\s*indeksInkindo:\s*[\d\.]+", "", l.rstrip(", ").rstrip("}").rstrip())
        new_l = f"{clean_l}, indeksInkindo: {idx} }},"
        new_lines.append(new_l)
    else:
        new_lines.append(l)

new_prov_code = "\n".join(new_lines)
with open("js/data/masterProvinces.js", "w", encoding="utf-8") as f:
    f.write(new_prov_code)

print("1. Updated masterProvinces.js with indeksInkindo values!")

# 2. Update defaultParams.js
with open("js/data/defaultParams.js", "r", encoding="utf-8") as f:
    def_params_code = f.read()

def_params_code = def_params_code.replace("rateInkindoSubProf: 16500000", "rateInkindoSubProf: 17600000")
def_params_code = def_params_code.replace("rateInkindoAsisten: 11500000", "rateInkindoAsisten: 14600000")

with open("js/data/defaultParams.js", "w", encoding="utf-8") as f:
    f.write(def_params_code)

print("2. Updated defaultParams.js (17.600.000 Korkab & 14.600.000 TPM)!")

# 3. Update calculator.js
with open("js/engine/calculator.js", "r", encoding="utf-8") as f:
    calc_code = f.read()

# Replace honorKorkabBulan and honorTPMBulan formulas
calc_code = calc_code.replace(
    ": roundUpToThousand((Number(params.rateInkindoSubProf) || 16500000) * (Number(params.inkindoFactor) || 0.55) * ikkCoeff);",
    ": roundUpToThousand((Number(params.rateInkindoSubProf) || 17600000) * (Number(params.inkindoFactor) || 0.55) * (provObj?.indeksInkindo ?? ikkCoeff));"
)

calc_code = calc_code.replace(
    ": roundUpToThousand((Number(params.rateInkindoAsisten) || 11500000) * (Number(params.inkindoFactor) || 0.55) * ikkCoeff);",
    ": roundUpToThousand((Number(params.rateInkindoAsisten) || 14600000) * (Number(params.inkindoFactor) || 0.55) * (provObj?.indeksInkindo ?? ikkCoeff));"
)

with open("js/engine/calculator.js", "w", encoding="utf-8") as f:
    f.write(calc_code)

print("3. Updated calculator.js to use INKINDO Indeks Standar Remunerasi Per Provinsi!")

# 4. Update app.js
with open("js/app.js", "r", encoding="utf-8") as f:
    app_code = f.read()

app_code = app_code.replace("16,5M", "17,6M").replace("11,5M", "14,6M").replace("16.5M", "17.6M").replace("11.5M", "14.6M")
app_code = app_code.replace("(IKK/100)", "(Indeks INKINDO)")

with open("js/app.js", "w", encoding="utf-8") as f:
    f.write(app_code)

print("4. Updated app.js Tab 7 texts to reflect INKINDO Remunerasi 17,6M & 14,6M!")
