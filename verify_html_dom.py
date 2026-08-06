import re

with open("/Users/riyanr/.gemini/antigravity/scratch/rka-bedah-rumah-dashboard/index.html", "r") as f:
    html_content = f.read()

with open("/Users/riyanr/.gemini/antigravity/scratch/rka-bedah-rumah-dashboard/js/app.js", "r") as f:
    app_js = f.read()

html_ids = set(re.findall(r'id=["\']([^"\']+)["\']', html_content))
js_ids = set(re.findall(r'getElementById\(["\']([^"\']+)["\']\)', app_js))

missing_in_html = js_ids - html_ids
print(f"Total HTML IDs: {len(html_ids)}")
print(f"Total JS DOM Lookups: {len(js_ids)}")
print(f"Missing IDs in HTML: {missing_in_html}")

assert len(missing_in_html) == 0, f"Found missing HTML IDs: {missing_in_html}"
print(">>> ALL DOM IDs MATCH PERFECTLY BETWEEN HTML AND JAVASCRIPT! <<<")
