import json

with open("js/app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

start = app_js.find("function renderTabKomposisiNonFisik")
end = app_js.find("function renderTabKomposisiCharts")
fn_code = app_js[start:end]

lines = fn_code.split('\n')
for i, line in enumerate(lines[60:150], start=61):
    print(f"{i:3d}: {line}")
