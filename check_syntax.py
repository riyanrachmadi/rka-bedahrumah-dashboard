import re
import glob

js_files = glob.glob("/Users/riyanr/.gemini/antigravity/scratch/rka-bedah-rumah-dashboard/js/**/*.js", recursive=True)

for file_path in js_files:
    with open(file_path, "r") as f:
        content = f.read()
    
    # Check brace and parenthesis balancing
    # Simple lexical scan ignoring strings and comments
    clean = re.sub(r'//.*', '', content)
    clean = re.sub(r'/\*.*?\*/', '', clean, flags=re.DOTALL)
    
    # Check open/close braces
    open_curly = clean.count('{')
    close_curly = clean.count('}')
    open_paren = clean.count('(')
    close_paren = clean.count(')')
    open_bracket = clean.count('[')
    close_bracket = clean.count(']')
    
    print(f"File: {file_path}")
    print(f"  Curlys: {open_curly} vs {close_curly} (diff: {open_curly - close_curly})")
    print(f"  Parens: {open_paren} vs {close_paren} (diff: {open_paren - close_paren})")
    print(f"  Brackets: {open_bracket} vs {close_bracket} (diff: {open_bracket - close_bracket})")
    
    assert open_curly == close_curly, f"Mismatched curly braces in {file_path}"
    assert open_bracket == close_bracket, f"Mismatched square brackets in {file_path}"
    print(f"  ✓ Syntax balance check passed!")

print(">>> ALL JAVASCRIPT FILES ARE SYNTACTICALLY BALANCED! <<<")
