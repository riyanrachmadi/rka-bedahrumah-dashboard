import json, re

# Define SBM Minibus rates per province (PMK SBM Kemenkeu)
sbm_minibus = {
    '11': 12500000, # Aceh
    '12': 13200000, # Sumut
    '13': 12800000, # Sumbar
    '14': 13500000, # Riau
    '15': 12000000, # Jambi
    '16': 13000000, # Sumsel
    '17': 12200000, # Bengkulu
    '18': 12000000, # Lampung
    '19': 14000000, # Babel
    '21': 14500000, # Kepri
    '61': 14000000, # Kalbar
    '62': 14200000, # Kalteng
    '63': 13800000, # Kalsel
    '64': 15000000, # Kaltim
    '65': 15500000, # Kaltara
    '31': 14000000, # DKI Jakarta
    '32': 13000000, # Jabar
    '33': 12500000, # Jateng
    '34': 12500000, # DIY
    '35': 13000000, # Jatim
    '36': 13200000, # Banten
    '51': 13500000, # Bali
    '52': 13800000, # NTB
    '53': 15000000, # NTT
    '71': 14200000, # Sulut
    '72': 14500000, # Sulteng
    '73': 13500000, # Sulsel
    '74': 14200000, # Sultra
    '75': 13800000, # Gorontalo
    '76': 14000000, # Sulbar
    '81': 16000000, # Maluku
    '82': 16500000, # Malut
    '91': 17500000, # Papua Barat
    '92': 17000000, # PBD
    '93': 18500000, # Papua
    '94': 19000000, # Papua Selatan
    '95': 21000000, # Papua Tengah
    '96': 25000000, # Papua Pegunungan
}

print(f"Total provinces mapped: {len(sbm_minibus)}")
for id_prov, rate in list(sbm_minibus.items())[:5]:
    print(f"  Prov {id_prov}: Rp {rate:,}")
