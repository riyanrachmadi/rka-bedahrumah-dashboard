import urllib.request

for port in [8000, 8080]:
    try:
        with urllib.request.urlopen(f"http://127.0.0.1:{port}/index.html") as response:
            html = response.read().decode('utf-8')
            print(f"Port {port} Response Status: {response.status}")
            print(f"Content Length: {len(html)} bytes")
            print(f"Title: {html.split('<title>')[1].split('</title>')[0] if '<title>' in html else 'No title'}")
    except Exception as e:
        print(f"Port {port} Error: {e}")

