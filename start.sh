#!/usr/bin/env bash
# Script untuk menjalankan Web Dashboard Anggaran Bedah Rumah PKP secara lokal

echo "================================================================="
echo "   SISTEM DASHBOARD & SPREADSHEET ANGGARAN BEDAH RUMAH (PKP)    "
echo "   Target: 370.000 Unit | 38 Provinsi | 34 Satker | 56 PPK       "
echo "================================================================="
echo ""

PORT=8080

# Check if port 8080 is already in use, otherwise try 3000 or 8000
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo "⚠️  Port $PORT sedang aktif digunakan, beralih ke port alternatif..."
    PORT=3000
    if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1 ; then
        PORT=8000
    fi
fi

echo "🚀 Memulai server web lokal di port $PORT..."
echo "👉 Akses Dashboard melalui browser di: http://localhost:$PORT"
echo ""

# Auto open browser on macOS
if [[ "$OSTYPE" == "darwin"* ]]; then
    (sleep 1 && open "http://localhost:$PORT") &
fi

cd "$(dirname "$0")"
python3 -m http.server $PORT
