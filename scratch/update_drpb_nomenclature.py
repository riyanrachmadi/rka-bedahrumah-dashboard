import re

# 1. Update index.html
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = html.replace("Dokumen RAB & Gambar / Unit (Komp 5)", "Dokumen DRPB / Unit (Komp 5)")
html = html.replace("Dokumen RAB & Gambar Teknis", "Dokumen DRPB")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("1. Updated index.html nomenclature to DRPB!")

# 2. Update js/engine/calculator.js
with open("js/engine/calculator.js", "r", encoding="utf-8") as f:
    calc = f.read()

calc = calc.replace("Komp 5: Dokumen RAB & Gambar Teknis", "Komp 5: Dokumen DRPB (Rencana Penanganan Bedah Rumah)")
calc = calc.replace("Dokumen RAB & Gambar Rencana Teknis", "Dokumen DRPB (Rencana Penanganan Bedah Rumah)")
calc = calc.replace("Dokumen RAB & Gambar", "Dokumen DRPB")
calc = calc.replace("Biaya Penyusunan RAB & Gambar Teknis", "Biaya Penyusunan DRPB")

with open("js/engine/calculator.js", "w", encoding="utf-8") as f:
    f.write(calc)

print("2. Updated js/engine/calculator.js nomenclature to DRPB!")

# 3. Update js/engine/exporter.js
with open("js/engine/exporter.js", "r", encoding="utf-8") as f:
    exp = f.read()

exp = exp.replace("'5. Dok RAB (521211)'", "'5. Dok DRPB (521211)'")
exp = exp.replace("'5. Dok RAB'", "'5. Dok DRPB'")

with open("js/engine/exporter.js", "w", encoding="utf-8") as f:
    f.write(exp)

print("3. Updated js/engine/exporter.js nomenclature to DRPB!")

# 4. Update js/app.js
with open("js/app.js", "r", encoding="utf-8") as f:
    app = f.read()

app = app.replace("Dokumen RAB & Gambar Teknis", "Dokumen DRPB (Rencana Penanganan Bedah Rumah)")
app = app.replace("Dokumen RAB & Gambar", "Dokumen DRPB")
app = app.replace("RAB & Gambar Teknis", "Dokumen DRPB")
app = app.replace("Rate Base Dokumen RAB", "Rate Base Dokumen DRPB")
app = app.replace("Penggandaan RAB & Gambar Teknis", "Penggandaan Dokumen DRPB")
app = app.replace("RAB: Rp", "DRPB: Rp")

with open("js/app.js", "w", encoding="utf-8") as f:
    f.write(app)

print("4. Updated js/app.js nomenclature to DRPB!")
