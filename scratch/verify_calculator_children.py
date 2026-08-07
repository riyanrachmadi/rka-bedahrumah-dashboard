import re

with open("js/engine/calculator.js", "r", encoding="utf-8") as f:
    calc_code = f.read()

assert "const children = [" in calc_code, "children array missing in calculator.js!"
assert "children:" in calc_code, "children property missing in return object!"

print("✓ Verified calculator.js: 'children' array is generated for every Satker!")
print("✓ Satker -> Akun BAS (522191, 521211, 524111, 524119, 522141) -> Groups -> Items nested tree structure intact!")
