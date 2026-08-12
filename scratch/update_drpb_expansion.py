import re

# 1. Update index.html
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = html.replace("Rencana Penanganan Bedah Rumah", "Daftar Rencana Pemanfaatan Bantuan")
html = html.replace("Dokumen DRPB / Unit (Komp 5)", "Dokumen DRPB (Daftar Rencana Pemanfaatan Bantuan) / Unit (Komp 5)")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("1. Updated index.html DRPB expansion!")

# 2. Update js/engine/calculator.js
with open("js/engine/calculator.js", "r", encoding="utf-8") as f:
    calc = f.read()

calc = calc.replace("Rencana Penanganan Bedah Rumah", "Daftar Rencana Pemanfaatan Bantuan")

with open("js/engine/calculator.js", "w", encoding="utf-8") as f:
    f.write(calc)

print("2. Updated js/engine/calculator.js DRPB expansion!")

# 3. Update js/app.js
with open("js/app.js", "r", encoding="utf-8") as f:
    app = f.read()

app = app.replace("Rencana Penanganan Bedah Rumah", "Daftar Rencana Pemanfaatan Bantuan")
app = app.replace("Dokumen DRPB (Daftar Rencana Pemanfaatan Bantuan) Rumah", "Dokumen DRPB (Daftar Rencana Pemanfaatan Bantuan)")

with open("js/app.js", "w", encoding="utf-8") as f:
    f.write(app)

print("3. Updated js/app.js DRPB expansion!")
