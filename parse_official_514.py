# Python parser for 514 Kab/Kota
import json
import re

raw_ocr = """
1 Aceh 1171 Banda Aceh Kota Banda Aceh 88 2 Perkotaan
2 Aceh 1173 Langsa Kota Langsa 54 12 Perkotaan
3 Aceh 1174 Lhokseumawe Kota Lhokseumawe 51 17 Perkotaan
4 Sumatera Utara 1208 Asahan Kabupaten Asahan 108 96 Perkotaan
5 Sumatera Utara 1212 Deli Serdang Kabupaten Deli Serdang 240 154 Perkotaan
6 Sumatera Utara 1272 Tanjungbalai Kota Tanjungbalai 31 0 Perkotaan
7 Sumatera Utara 1273 Pematangsiantar Kota Pematangsiantar 47 6 Perkotaan
8 Sumatera Utara 1274 Tebing Tinggi Kota Tebing Tinggi 35 0 Perkotaan
9 Sumatera Utara 1275 Medan Kota Medan 151 0 Perkotaan
10 Sumatera Utara 1276 Binjai Kota Binjai 37 0 Perkotaan
11 Sumatera Utara 1277 Padangsidimpuan Kota Padangsidimpuan 44 35 Perkotaan
12 Sumatera Barat 1371 Padang Kota Padang 95 9 Perkotaan
13 Sumatera Barat 1372 Solok Kota Solok 13 0 Perkotaan
14 Sumatera Barat 1373 Sawahlunto Kota Sawahlunto 24 14 Perkotaan
15 Sumatera Barat 1374 Padang Panjang Kota Padang Panjang 16 0 Perkotaan
16 Sumatera Barat 1375 Bukittinggi Kota Bukittinggi 24 0 Perkotaan
17 Sumatera Barat 1376 Payakumbuh Kota Payakumbuh 45 2 Perkotaan
18 Sumatera Barat 1377 Pariaman Kota Pariaman 63 8 Perkotaan
19 Riau 1471 Pekanbaru Kota Pekanbaru 70 13 Perkotaan
20 Riau 1473 Dumai Kota Dumai 25 11 Perkotaan
21 Jambi 1571 Jambi Kota Jambi 68 0 Perkotaan
22 Jambi 1572 Sungai Penuh Kota Sungai Penuh 51 18 Perkotaan
23 Sumatera Selatan 1671 Palembang Kota Palembang 107 0 Perkotaan
24 Sumatera Selatan 1672 Prabumulih Kota Prabumulih 26 20 Perkotaan
25 Sumatera Selatan 1674 Lubuklinggau Kota Lubuklinggau 55 17 Perkotaan
26 Bengkulu 1771 Bengkulu Kota Bengkulu 66 1 Perkotaan
27 Lampung 1803 Lampung Selatan Kabupaten Lampung Selatan 150 110 Perkotaan
28 Lampung 1810 Pringsewu Kabupaten Pringsewu 73 58 Perkotaan
29 Lampung 1871 Bandar Lampung Kota Bandar Lampung 126 0 Perkotaan
30 Lampung 1872 Metro Kota Metro 22 0 Perkotaan
31 Kep. Bangka Belitung 1971 Pangkalpinang Kota Pangkalpinang 42 0 Perkotaan
32 DKI Jakarta 3171 Jakarta Selatan Kota Jakarta Selatan 65 0 Perkotaan
33 DKI Jakarta 3172 Jakarta Timur Kota Jakarta Timur 65 0 Perkotaan
34 DKI Jakarta 3173 Jakarta Pusat Kota Jakarta Pusat 44 0 Perkotaan
35 DKI Jakarta 3174 Jakarta Barat Kota Jakarta Barat 56 0 Perkotaan
36 DKI Jakarta 3175 Jakarta Utara Kota Jakarta Utara 31 0 Perkotaan
37 Jawa Barat 3201 Bogor Kabupaten Bogor 379 56 Perkotaan
38 Jawa Barat 3202 Sukabumi Kabupaten Sukabumi 201 185 Perkotaan
39 Jawa Barat 3203 Cianjur Kabupaten Cianjur 181 179 Perkotaan
40 Jawa Barat 3204 Bandung Kabupaten Bandung 259 21 Perkotaan
41 Jawa Barat 3205 Garut Kabupaten Garut 301 141 Perkotaan
42 Jawa Barat 3206 Tasikmalaya Kabupaten Tasikmalaya 195 156 Perkotaan
43 Jawa Barat 3207 Ciamis Kabupaten Ciamis 169 96 Perkotaan
44 Jawa Barat 3208 Kuningan Kabupaten Kuningan 246 130 Perkotaan
45 Jawa Barat 3209 Cirebon Kabupaten Cirebon 406 18 Perkotaan
46 Jawa Barat 3210 Majalengka Kabupaten Majalengka 227 116 Perkotaan
47 Jawa Barat 3211 Sumedang Kabupaten Sumedang 168 109 Perkotaan
48 Jawa Barat 3212 Indramayu Kabupaten Indramayu 201 116 Perkotaan
49 Jawa Barat 3213 Subang Kabupaten Subang 137 116 Perkotaan
50 Jawa Barat 3214 Purwakarta Kabupaten Purwakarta 149 43 Perkotaan
51 Jawa Barat 3215 Karawang Kabupaten Karawang 233 76 Perkotaan
52 Jawa Barat 3216 Bekasi Kabupaten Bekasi 157 30 Perkotaan
53 Jawa Barat 3217 Bandung Barat Kabupaten Bandung Barat 144 21 Perkotaan
54 Jawa Barat 3271 Bogor Kota Bogor 68 0 Perkotaan
55 Jawa Barat 3272 Sukabumi Kota Sukabumi 33 0 Perkotaan
56 Jawa Barat 3273 Bandung Kota Bandung 151 0 Perkotaan
57 Jawa Barat 3274 Cirebon Kota Cirebon 22 0 Perkotaan
58 Jawa Barat 3275 Bekasi Kota Bekasi 56 0 Perkotaan
59 Jawa Barat 3276 Depok Kota Depok 63 0 Perkotaan
60 Jawa Barat 3277 Cimahi Kota Cimahi 15 0 Perkotaan
61 Jawa Barat 3278 Tasikmalaya Kota Tasikmalaya 68 1 Perkotaan
62 Jawa Barat 3279 Banjar Kota Banjar 24 1 Perkotaan
63 Jawa Tengah 3301 Cilacap Kabupaten Cilacap 182 102 Perkotaan
64 Jawa Tengah 3302 Banyumas Kabupaten Banyumas 267 64 Perkotaan
65 Jawa Tengah 3303 Purbalingga Kabupaten Purbalingga 194 45 Perkotaan
66 Jawa Tengah 3305 Kebumen Kabupaten Kebumen 262 198 Perkotaan
67 Jawa Tengah 3308 Magelang Kabupaten Magelang 199 173 Perkotaan
68 Jawa Tengah 3309 Boyolali Kabupaten Boyolali 162 105 Perkotaan
69 Jawa Tengah 3310 Klaten Kabupaten Klaten 374 27 Perkotaan
70 Jawa Tengah 3311 Sukoharjo Kabupaten Sukoharjo 147 20 Perkotaan
71 Jawa Tengah 3313 Karanganyar Kabupaten Karanganyar 123 54 Perkotaan
72 Jawa Tengah 3314 Sragen Kabupaten Sragen 130 78 Perkotaan
73 Jawa Tengah 3318 Pati Kabupaten Pati 247 159 Perkotaan
74 Jawa Tengah 3319 Kudus Kabupaten Kudus 117 15 Perkotaan
75 Jawa Tengah 3320 Jepara Kabupaten Jepara 153 42 Perkotaan
76 Jawa Tengah 3321 Demak Kabupaten Demak 178 71 Perkotaan
77 Jawa Tengah 3322 Semarang Kabupaten Semarang 156 79 Perkotaan
78 Jawa Tengah 3323 Temanggung Kabupaten Temanggung 149 140 Perkotaan
79 Jawa Tengah 3324 Kendal Kabupaten Kendal 194 92 Perkotaan
80 Jawa Tengah 3325 Batang Kabupaten Batang 150 98 Perkotaan
81 Jawa Tengah 3326 Pekalongan Kabupaten Pekalongan 179 106 Perkotaan
82 Jawa Tengah 3327 Pemalang Kabupaten Pemalang 167 56 Perkotaan
83 Jawa Tengah 3328 Tegal Kabupaten Tegal 228 59 Perkotaan
84 Jawa Tengah 3329 Brebes Kabupaten Brebes 208 89 Perkotaan
85 Jawa Tengah 3371 Magelang Kota Magelang 17 0 Perkotaan
86 Jawa Tengah 3372 Surakarta Kota Surakarta 54 0 Perkotaan
87 Jawa Tengah 3373 Salatiga Kota Salatiga 23 0 Perkotaan
88 Jawa Tengah 3374 Semarang Kota Semarang 176 1 Perkotaan
89 Jawa Tengah 3375 Pekalongan Kota Pekalongan 27 0 Perkotaan
90 Jawa Tengah 3376 Tegal Kota Tegal 27 0 Perkotaan
91 DI Yogyakarta 3401 Kulon Progo Kabupaten Kulon Progo 63 25 Perkotaan
92 DI Yogyakarta 3402 Bantul Kabupaten Bantul 73 2 Perkotaan
93 DI Yogyakarta 3404 Sleman Kabupaten Sleman 80 6 Perkotaan
94 DI Yogyakarta 3471 Yogyakarta Kota Yogyakarta 45 0 Perkotaan
95 Jawa Timur 3502 Ponorogo Kabupaten Ponorogo 167 140 Perkotaan
96 Jawa Timur 3503 Trenggalek Kabupaten Trenggalek 84 73 Perkotaan
97 Jawa Timur 3504 Tulungagung Kabupaten Tulungagung 201 70 Perkotaan
98 Jawa Timur 3505 Blitar Kabupaten Blitar 147 101 Perkotaan
99 Jawa Timur 3506 Kediri Kabupaten Kediri 276 68 Perkotaan
100 Jawa Timur 3507 Malang Kabupaten Malang 249 141 Perkotaan
101 Jawa Timur 3509 Jember Kabupaten Jember 180 68 Perkotaan
102 Jawa Timur 3510 Banyuwangi Kabupaten Banyuwangi 165 52 Perkotaan
103 Jawa Timur 3512 Situbondo Kabupaten Situbondo 72 64 Perkotaan
104 Jawa Timur 3513 Probolinggo Kabupaten Probolinggo 181 149 Perkotaan
105 Jawa Timur 3514 Pasuruan Kabupaten Pasuruan 247 118 Perkotaan
106 Jawa Timur 3515 Sidoarjo Kabupaten Sidoarjo 340 6 Perkotaan
107 Jawa Timur 3516 Mojokerto Kabupaten Mojokerto 255 49 Perkotaan
108 Jawa Timur 3517 Jombang Kabupaten Jombang 245 61 Perkotaan
109 Jawa Timur 3518 Nganjuk Kabupaten Nganjuk 198 86 Perkotaan
110 Jawa Timur 3519 Madiun Kabupaten Madiun 148 58 Perkotaan
111 Jawa Timur 3520 Magetan Kabupaten Magetan 153 82 Perkotaan
112 Jawa Timur 3525 Gresik Kabupaten Gresik 255 101 Perkotaan
113 Jawa Timur 3528 Pamekasan Kabupaten Pamekasan 111 78 Perkotaan
114 Jawa Timur 3571 Kediri Kota Kediri 46 0 Perkotaan
115 Jawa Timur 3572 Blitar Kota Blitar 21 0 Perkotaan
116 Jawa Timur 3573 Malang Kota Malang 57 0 Perkotaan
117 Jawa Timur 3574 Probolinggo Kota Probolinggo 29 0 Perkotaan
118 Jawa Timur 3575 Pasuruan Kota Pasuruan 34 0 Perkotaan
119 Jawa Timur 3576 Mojokerto Kota Mojokerto 18 0 Perkotaan
120 Jawa Timur 3577 Madiun Kota Madiun 27 0 Perkotaan
121 Jawa Timur 3578 Surabaya Kota Surabaya 153 0 Perkotaan
122 Jawa Timur 3579 Batu Kota Batu 22 2 Perkotaan
123 Banten 3603 Tangerang Kabupaten Tangerang 263 11 Perkotaan
124 Banten 3604 Serang Kabupaten Serang 207 119 Perkotaan
125 Banten 3671 Tangerang Kota Tangerang 104 0 Perkotaan
126 Banten 3672 Cilegon Kota Cilegon 43 0 Perkotaan
127 Banten 3673 Serang Kota Serang 59 8 Perkotaan
128 Banten 3674 Tangerang Selatan Kota Tangerang Selatan 54 0 Perkotaan
129 Bali 5101 Jembrana Kabupaten Jembrana 31 20 Perkotaan
130 Bali 5103 Badung Kabupaten Badung 50 12 Perkotaan
131 Bali 5104 Gianyar Kabupaten Gianyar 54 16 Perkotaan
132 Bali 5105 Klungkung Kabupaten Klungkung 40 19 Perkotaan
133 Bali 5108 Buleleng Kabupaten Buleleng 90 58 Perkotaan
134 Bali 5171 Denpasar Kota Denpasar 43 0 Perkotaan
135 Nusa Tenggara Barat 5201 Lombok Barat Kabupaten Lombok Barat 98 24 Perkotaan
136 Nusa Tenggara Barat 5202 Lombok Tengah Kabupaten Lombok Tengah 116 52 Perkotaan
137 Nusa Tenggara Barat 5203 Lombok Timur Kabupaten Lombok Timur 194 60 Perkotaan
138 Nusa Tenggara Barat 5271 Mataram Kota Mataram 50 0 Perkotaan
139 Nusa Tenggara Barat 5272 Bima Kota Bima 33 8 Perkotaan
140 Nusa Tenggara Timur 5371 Kupang Kota Kupang 50 1 Perkotaan
141 Kalimantan Barat 6171 Pontianak Kota Pontianak 29 0 Perkotaan
142 Kalimantan Barat 6172 Singkawang Kota Singkawang 17 9 Perkotaan
143 Kalimantan Tengah 6271 Palangka Raya Kota Palangka Raya 16 14 Perkotaan
144 Kalimantan Selatan 6371 Banjarmasin Kota Banjarmasin 52 0 Perkotaan
145 Kalimantan Selatan 6372 Banjarbaru Kota Banjarbaru 20 0 Perkotaan
146 Kalimantan Timur 6471 Balikpapan Kota Balikpapan 34 0 Perkotaan
147 Kalimantan Timur 6472 Samarinda Kota Samarinda 57 2 Perkotaan
148 Sulawesi Utara 7171 Manado Kota Manado 80 7 Perkotaan
149 Sulawesi Utara 7173 Tomohon Kota Tomohon 36 8 Perkotaan
150 Sulawesi Utara 7174 Kotamobagu Kota Kotamobagu 26 7 Perkotaan
151 Sulawesi Tengah 7271 Palu Kota Palu 45 1 Perkotaan
152 Sulawesi Selatan 7371 Makassar Kota Makassar 152 1 Perkotaan
153 Sulawesi Selatan 7372 Parepare Kota Parepare 21 1 Perkotaan
154 Sulawesi Selatan 7373 Palopo Kota Palopo 34 14 Perkotaan
155 Sulawesi Tenggara 7471 Kendari Kota Kendari 56 9 Perkotaan
156 Sulawesi Tenggara 7472 Baubau Kota Baubau 28 15 Perkotaan
157 Gorontalo 7571 Gorontalo Kota Gorontalo 48 2 Perkotaan
158 Papua Barat Daya 9271 Sorong Kota Sorong 34 7 Perkotaan
159 Aceh 1102 Aceh Singkil Kabupaten Aceh Singkil 40 78 Perdesaan
160 Aceh 1103 Aceh Selatan Kabupaten Aceh Selatan 109 151 Perdesaan
161 Aceh 1104 Aceh Tenggara Kabupaten Aceh Tenggara 118 267 Perdesaan
162 Aceh 1105 Aceh Timur Kabupaten Aceh Timur 119 394 Perdesaan
163 Aceh 1106 Aceh Tengah Kabupaten Aceh Tengah 58 237 Perdesaan
164 Aceh 1107 Aceh Barat Kabupaten Aceh Barat 35 286 Perdesaan
165 Aceh 1108 Aceh Besar Kabupaten Aceh Besar 282 321 Perdesaan
166 Aceh 1109 Pidie Kabupaten Pidie 283 448 Perdesaan
167 Aceh 1110 Bireuen Kabupaten Bireuen 215 394 Perdesaan
168 Aceh 1111 Aceh Utara Kabupaten Aceh Utara 207 645 Perdesaan
169 Aceh 1112 Aceh Barat Daya Kabupaten Aceh Barat Daya 72 80 Perdesaan
170 Aceh 1113 Gayo Lues Kabupaten Gayo Lues 21 127 Perdesaan
171 Aceh 1114 Aceh Tamiang Kabupaten Aceh Tamiang 64 152 Perdesaan
172 Aceh 1115 Nagan Raya Kabupaten Nagan Raya 47 175 Perdesaan
173 Aceh 1116 Aceh Jaya Kabupaten Aceh Jaya 28 144 Perdesaan
174 Aceh 1117 Bener Meriah Kabupaten Bener Meriah 59 173 Perdesaan
175 Aceh 1118 Pidie Jaya Kabupaten Pidie Jaya 99 123 Perdesaan
176 Aceh 1175 Subulussalam Kota Subulussalam 18 64 Perdesaan
177 Sumatera Utara 1201 Nias Kabupaten Nias 1 169 Perdesaan
178 Sumatera Utara 1202 Mandailing Natal Kabupaten Mandailing Natal 54 353 Perdesaan
179 Sumatera Utara 1203 Tapanuli Selatan Kabupaten Tapanuli Selatan 22 226 Perdesaan
180 Sumatera Utara 1204 Tapanuli Tengah Kabupaten Tapanuli Tengah 47 168 Perdesaan
181 Sumatera Utara 1205 Tapanuli Utara Kabupaten Tapanuli Utara 31 221 Perdesaan
182 Sumatera Utara 1206 Toba Kabupaten Toba 47 197 Perdesaan
183 Sumatera Utara 1207 Labuhanbatu Kabupaten Labuhanbatu 47 51 Perdesaan
184 Sumatera Utara 1209 Simalungun Kabupaten Simalungun 106 307 Perdesaan
185 Sumatera Utara 1210 Dairi Kabupaten Dairi 17 152 Perdesaan
186 Sumatera Utara 1211 Karo Kabupaten Karo 28 241 Perdesaan
187 Sumatera Utara 1213 Langkat Kabupaten Langkat 111 166 Perdesaan
188 Sumatera Utara 1214 Nias Selatan Kabupaten Nias Selatan 26 435 Perdesaan
189 Sumatera Utara 1215 Humbang Hasundutan Kabupaten Humbang Hasundutan 9 145 Perdesaan
190 Sumatera Utara 1216 Pakpak Bharat Kabupaten Pakpak Bharat 4 48 Perdesaan
191 Sumatera Utara 1217 Samosir Kabupaten Samosir 17 117 Perdesaan
192 Sumatera Utara 1218 Serdang Bedagai Kabupaten Serdang Bedagai 101 142 Perdesaan
193 Sumatera Utara 1219 Batu Bara Kabupaten Batu Bara 60 91 Perdesaan
194 Sumatera Utara 1220 Padang Lawas Utara Kabupaten Padang Lawas Utara 17 371 Perdesaan
195 Sumatera Utara 1221 Padang Lawas Kabupaten Padang Lawas 45 259 Perdesaan
196 Sumatera Utara 1222 Labuhanbatu Selatan Kabupaten Labuhanbatu Selatan 14 40 Perdesaan
197 Sumatera Utara 1223 Labuhanbatu Utara Kabupaten Labuhanbatu Utara 28 62 Perdesaan
198 Sumatera Utara 1224 Nias Utara Kabupaten Nias Utara 5 108 Perdesaan
199 Sumatera Utara 1225 Nias Barat Kabupaten Nias Barat 0 105 Perdesaan
200 Sumatera Utara 1278 Gunungsitoli Kota Gunungsitoli 31 70 Perdesaan
201 Sumatera Barat 1302 Pesisir Selatan Kabupaten Pesisir Selatan 55 127 Perdesaan
202 Sumatera Barat 1303 Solok Kabupaten Solok 14 60 Perdesaan
203 Sumatera Barat 1304 Sijunjung Kabupaten Sijunjung 7 55 Perdesaan
204 Sumatera Barat 1305 Tanah Datar Kabupaten Tanah Datar 29 46 Perdesaan
205 Sumatera Barat 1306 Padang Pariaman Kabupaten Padang Pariaman 48 55 Perdesaan
206 Sumatera Barat 1307 Agam Kabupaten Agam 47 58 Perdesaan
207 Sumatera Barat 1308 Lima Puluh Kota Kabupaten Lima Puluh Kota 19 60 Perdesaan
208 Sumatera Barat 1309 Pasaman Kabupaten Pasaman 15 47 Perdesaan
209 Sumatera Barat 1310 Solok Selatan Kabupaten Solok Selatan 17 30 Perdesaan
210 Sumatera Barat 1311 Dharmasraya Kabupaten Dharmasraya 15 37 Perdesaan
211 Sumatera Barat 1312 Pasaman Barat Kabupaten Pasaman Barat 22 68 Perdesaan
212 Riau 1401 Kuantan Singingi Kabupaten Kuantan Singingi 38 191 Perdesaan
213 Riau 1402 Indragiri Hulu Kabupaten Indragiri Hulu 41 153 Perdesaan
214 Riau 1403 Indragiri Hilir Kabupaten Indragiri Hilir 22 214 Perdesaan
215 Riau 1404 Pelalawan Kabupaten Pelalawan 12 106 Perdesaan
216 Riau 1405 Siak Kabupaten Siak 36 100 Perdesaan
217 Riau 1406 Kampar Kabupaten Kampar 58 192 Perdesaan
218 Riau 1407 Rokan Hulu Kabupaten Rokan Hulu 31 114 Perdesaan
219 Riau 1408 Bengkalis Kabupaten Bengkalis 39 116 Perdesaan
220 Riau 1409 Rokan Hilir Kabupaten Rokan Hilir 45 142 Perdesaan
221 Jambi 1501 Kerinci Kabupaten Kerinci 115 172 Perdesaan
222 Jambi 1502 Merangin Kabupaten Merangin 27 188 Perdesaan
223 Jambi 1503 Sarolangun Kabupaten Sarolangun 21 138 Perdesaan
224 Jambi 1504 Batang Hari Kabupaten Batang Hari 16 108 Perdesaan
225 Jambi 1505 Muaro Jambi Kabupaten Muaro Jambi 31 124 Perdesaan
226 Jambi 1506 Tanjung Jabung Timur Kabupaten Tanjung Jabung Timur 10 83 Perdesaan
227 Jambi 1507 Tanjung Jabung Barat Kabupaten Tanjung Jabung Barat 21 113 Perdesaan
228 Jambi 1508 Tebo Kabupaten Tebo 21 108 Perdesaan
229 Jambi 1509 Bungo Kabupaten Bungo 40 113 Perdesaan
230 Sumatera Selatan 1601 Ogan Komering Ulu Kabupaten Ogan Komering Ulu 23 134 Perdesaan
231 Sumatera Selatan 1602 Ogan Komering Ilir Kabupaten Ogan Komering Ilir 47 280 Perdesaan
232 Sumatera Selatan 1603 Muara Enim Kabupaten Muara Enim 29 227 Perdesaan
233 Sumatera Selatan 1604 Lahat Kabupaten Lahat 45 332 Perdesaan
234 Sumatera Selatan 1605 Musi Rawas Kabupaten Musi Rawas 21 178 Perdesaan
235 Sumatera Selatan 1606 Musi Banyuasin Kabupaten Musi Banyuasin 15 227 Perdesaan
236 Sumatera Selatan 1607 Banyuasin Kabupaten Banyuasin 49 268 Perdesaan
237 Sumatera Selatan 1608 Ogan Komering Ulu Selatan Kabupaten Ogan Komering Ulu Selatan 19 240 Perdesaan
238 Sumatera Selatan 1609 Ogan Komering Ulu Timur Kabupaten Ogan Komering Ulu Timur 62 270 Perdesaan
239 Sumatera Selatan 1610 Ogan Ilir Kabupaten Ogan Ilir 61 180 Perdesaan
240 Sumatera Selatan 1611 Empat Lawang Kabupaten Empat Lawang 24 132 Perdesaan
241 Sumatera Selatan 1612 Penukal Abab Lematang Ilir Kabupaten Penukal Abab Lematang Ilir 17 56 Perdesaan
242 Sumatera Selatan 1613 Musi Rawas Utara Kabupaten Musi Rawas Utara 10 79 Perdesaan
243 Sumatera Selatan 1673 Pagar Alam Kota Pagar Alam 17 18 Perdesaan
244 Bengkulu 1701 Bengkulu Selatan Kabupaten Bengkulu Selatan 31 127 Perdesaan
245 Bengkulu 1702 Rejang Lebong Kabupaten Rejang Lebong 44 112 Perdesaan
246 Bengkulu 1703 Bengkulu Utara Kabupaten Bengkulu Utara 21 199 Perdesaan
247 Bengkulu 1704 Kaur Kabupaten Kaur 24 171 Perdesaan
248 Bengkulu 1705 Seluma Kabupaten Seluma 20 182 Perdesaan
249 Bengkulu 1706 Mukomuko Kabupaten Mukomuko 23 128 Perdesaan
250 Bengkulu 1707 Lebong Kabupaten Lebong 25 79 Perdesaan
251 Bengkulu 1708 Kepahiang Kabupaten Kepahiang 27 90 Perdesaan
252 Bengkulu 1709 Bengkulu Tengah Kabupaten Bengkulu Tengah 20 123 Perdesaan
253 Lampung 1801 Lampung Barat Kabupaten Lampung Barat 16 120 Perdesaan
254 Lampung 1802 Tanggamus Kabupaten Tanggamus 82 220 Perdesaan
255 Lampung 1804 Lampung Timur Kabupaten Lampung Timur 83 181 Perdesaan
256 Lampung 1805 Lampung Tengah Kabupaten Lampung Tengah 109 202 Perdesaan
257 Lampung 1806 Lampung Utara Kabupaten Lampung Utara 51 196 Perdesaan
258 Lampung 1807 Way Kanan Kabupaten Way Kanan 23 204 Perdesaan
259 Lampung 1808 Tulang Bawang Kabupaten Tulang Bawang 27 124 Perdesaan
260 Lampung 1809 Pesawaran Kabupaten Pesawaran 39 109 Perdesaan
261 Lampung 1811 Mesuji Kabupaten Mesuji 13 92 Perdesaan
262 Lampung 1812 Tulang Bawang Barat Kabupaten Tulang Bawang Barat 25 78 Perdesaan
263 Kep. Bangka Belitung 1901 Bangka Kabupaten Bangka 34 47 Perdesaan
264 Kep. Bangka Belitung 1904 Bangka Tengah Kabupaten Bangka Tengah 21 42 Perdesaan
265 Kep. Bangka Belitung 1905 Bangka Selatan Kabupaten Bangka Selatan 9 44 Perdesaan
266 Jawa Barat 3218 Pangandaran Kabupaten Pangandaran 42 51 Perdesaan
267 Jawa Tengah 3304 Banjarnegara Kabupaten Banjarnegara 126 152 Perdesaan
268 Jawa Tengah 3306 Purworejo Kabupaten Purworejo 160 334 Perdesaan
269 Jawa Tengah 3307 Wonosobo Kabupaten Wonosobo 127 138 Perdesaan
270 Jawa Tengah 3312 Wonogiri Kabupaten Wonogiri 108 186 Perdesaan
271 Jawa Tengah 3315 Grobogan Kabupaten Grobogan 127 153 Perdesaan
272 Jawa Tengah 3316 Blora Kabupaten Blora 90 205 Perdesaan
273 Jawa Tengah 3317 Rembang Kabupaten Rembang 99 195 Perdesaan
274 DI Yogyakarta 3403 Gunungkidul Kabupaten Gunungkidul 61 83 Perdesaan
275 Jawa Timur 3501 Pacitan Kabupaten Pacitan 60 112 Perdesaan
276 Jawa Timur 3508 Lumajang Kabupaten Lumajang 95 110 Perdesaan
277 Jawa Timur 3511 Bondowoso Kabupaten Bondowoso 99 120 Perdesaan
278 Jawa Timur 3521 Ngawi Kabupaten Ngawi 96 121 Perdesaan
279 Jawa Timur 3522 Bojonegoro Kabupaten Bojonegoro 172 258 Perdesaan
280 Jawa Timur 3523 Tuban Kabupaten Tuban 140 188 Perdesaan
281 Jawa Timur 3524 Lamongan Kabupaten Lamongan 218 256 Perdesaan
282 Jawa Timur 3526 Bangkalan Kabupaten Bangkalan 125 156 Perdesaan
283 Jawa Timur 3527 Sampang Kabupaten Sampang 76 110 Perdesaan
284 Jawa Timur 3529 Sumenep Kabupaten Sumenep 96 238 Perdesaan
285 Banten 3601 Pandeglang Kabupaten Pandeglang 146 193 Perdesaan
286 Banten 3602 Lebak Kabupaten Lebak 117 228 Perdesaan
287 Bali 5102 Tabanan Kabupaten Tabanan 41 92 Perdesaan
288 Bali 5106 Bangli Kabupaten Bangli 19 55 Perdesaan
289 Bali 5107 Karangasem Kabupaten Karangasem 38 40 Perdesaan
290 Nusa Tenggara Barat 5204 Sumbawa Kabupaten Sumbawa 31 134 Perdesaan
291 Nusa Tenggara Barat 5205 Dompu Kabupaten Dompu 15 66 Perdesaan
292 Nusa Tenggara Barat 5206 Bima Kabupaten Bima 36 155 Perdesaan
293 Nusa Tenggara Barat 5207 Sumbawa Barat Kabupaten Sumbawa Barat 15 50 Perdesaan
294 Nusa Tenggara Timur 5301 Sumba Barat Kabupaten Sumba Barat 10 64 Perdesaan
295 Nusa Tenggara Timur 5302 Sumba Timur Kabupaten Sumba Timur 7 193 Perdesaan
296 Nusa Tenggara Timur 5303 Kupang Kabupaten Kupang 8 169 Perdesaan
297 Nusa Tenggara Timur 5304 Timor Tengah Selatan Kabupaten Timor Tengah Selatan 16 262 Perdesaan
298 Nusa Tenggara Timur 5305 Timor Tengah Utara Kabupaten Timor Tengah Utara 7 186 Perdesaan
299 Nusa Tenggara Timur 5306 Belu Kabupaten Belu 14 67 Perdesaan
300 Nusa Tenggara Timur 5310 Sikka Kabupaten Sikka 14 180 Perdesaan
301 Nusa Tenggara Timur 5311 Ende Kabupaten Ende 22 256 Perdesaan
302 Nusa Tenggara Timur 5312 Ngada Kabupaten Ngada 12 194 Perdesaan
303 Nusa Tenggara Timur 5313 Manggarai Kabupaten Manggarai 20 203 Perdesaan
304 Nusa Tenggara Timur 5315 Manggarai Barat Kabupaten Manggarai Barat 6 163 Perdesaan
305 Nusa Tenggara Timur 5316 Sumba Tengah Kabupaten Sumba Tengah 0 65 Perdesaan
306 Nusa Tenggara Timur 5317 Sumba Barat Daya Kabupaten Sumba Barat Daya 3 172 Perdesaan
307 Nusa Tenggara Timur 5318 Nagekeo Kabupaten Nagekeo 2 111 Perdesaan
308 Nusa Tenggara Timur 5319 Manggarai Timur Kabupaten Manggarai Timur 3 173 Perdesaan
309 Nusa Tenggara Timur 5321 Malaka Kabupaten Malaka 6 121 Perdesaan
310 Kalimantan Barat 6101 Sambas Kabupaten Sambas 38 157 Perdesaan
311 Kalimantan Barat 6102 Bengkayang Kabupaten Bengkayang 4 120 Perdesaan
312 Kalimantan Barat 6103 Landak Kabupaten Landak 11 145 Perdesaan
313 Kalimantan Barat 6104 Mempawah Kabupaten Mempawah 29 38 Perdesaan
314 Kalimantan Barat 6105 Sanggau Kabupaten Sanggau 19 156 Perdesaan
315 Kalimantan Barat 6106 Ketapang Kabupaten Ketapang 43 219 Perdesaan
316 Kalimantan Barat 6107 Sintang Kabupaten Sintang 31 376 Perdesaan
317 Kalimantan Barat 6108 Kapuas Hulu Kabupaten Kapuas Hulu 55 227 Perdesaan
318 Kalimantan Barat 6109 Sekadau Kabupaten Sekadau 8 86 Perdesaan
319 Kalimantan Barat 6110 Melawi Kabupaten Melawi 9 160 Perdesaan
320 Kalimantan Barat 6111 Kayong Utara Kabupaten Kayong Utara 4 39 Perdesaan
321 Kalimantan Barat 6112 Kubu Raya Kabupaten Kubu Raya 26 102 Perdesaan
322 Kalimantan Tengah 6201 Kotawaringin Barat Kabupaten Kotawaringin Barat 27 70 Perdesaan
323 Kalimantan Tengah 6202 Kotawaringin Timur Kabupaten Kotawaringin Timur 37 148 Perdesaan
324 Kalimantan Tengah 6203 Kapuas Kabupaten Kapuas 27 204 Perdesaan
325 Kalimantan Tengah 6204 Barito Selatan Kabupaten Barito Selatan 11 82 Perdesaan
326 Kalimantan Tengah 6205 Barito Utara Kabupaten Barito Utara 10 93 Perdesaan
327 Kalimantan Tengah 6206 Sukamara Kabupaten Sukamara 4 28 Perdesaan
328 Kalimantan Tengah 6207 Lamandau Kabupaten Lamandau 5 85 Perdesaan
329 Kalimantan Tengah 6208 Seruyan Kabupaten Seruyan 16 84 Perdesaan
330 Kalimantan Tengah 6209 Katingan Kabupaten Katingan 13 148 Perdesaan
331 Kalimantan Tengah 6210 Pulang Pisau Kabupaten Pulang Pisau 13 86 Perdesaan
332 Kalimantan Tengah 6211 Gunung Mas Kabupaten Gunung Mas 18 110 Perdesaan
333 Kalimantan Tengah 6212 Barito Timur Kabupaten Barito Timur 7 96 Perdesaan
334 Kalimantan Tengah 6213 Murung Raya Kabupaten Murung Raya 13 112 Perdesaan
335 Kalimantan Selatan 6301 Tanah Laut Kabupaten Tanah Laut 31 104 Perdesaan
336 Kalimantan Selatan 6303 Banjar Kabupaten Banjar 67 223 Perdesaan
337 Kalimantan Selatan 6304 Barito Kuala Kabupaten Barito Kuala 21 180 Perdesaan
338 Kalimantan Selatan 6305 Tapin Kabupaten Tapin 12 123 Perdesaan
339 Kalimantan Selatan 6306 Hulu Sungai Selatan Kabupaten Hulu Sungai Selatan 55 93 Perdesaan
340 Kalimantan Selatan 6307 Hulu Sungai Tengah Kabupaten Hulu Sungai Tengah 37 132 Perdesaan
341 Kalimantan Selatan 6308 Hulu Sungai Utara Kabupaten Hulu Sungai Utara 87 132 Perdesaan
342 Kalimantan Selatan 6309 Tabalong Kabupaten Tabalong 24 107 Perdesaan
343 Kalimantan Selatan 6310 Tanah Bumbu Kabupaten Tanah Bumbu 66 91 Perdesaan
344 Kalimantan Selatan 6311 Balangan Kabupaten Balangan 9 147 Perdesaan
345 Kalimantan Timur 6401 Paser Kabupaten Paser 36 108 Perdesaan
346 Kalimantan Timur 6402 Kutai Barat Kabupaten Kutai Barat 27 167 Perdesaan
347 Kalimantan Timur 6403 Kutai Kartanegara Kabupaten Kutai Kartanegara 90 153 Perdesaan
348 Kalimantan Timur 6404 Kutai Timur Kabupaten Kutai Timur 34 118 Perdesaan
349 Kalimantan Timur 6405 Berau Kabupaten Berau 19 91 Perdesaan
350 Kalimantan Timur 6409 Penajam Paser Utara Kabupaten Penajam Paser Utara 22 32 Perdesaan
351 Kalimantan Timur 6411 Mahakam Ulu Kabupaten Mahakam Ulu 6 44 Perdesaan
352 Kalimantan Utara 6501 Malinau Kabupaten Malinau 10 99 Perdesaan
353 Kalimantan Utara 6502 Bulungan Kabupaten Bulungan 18 63 Perdesaan
354 Kalimantan Utara 6503 Tana Tidung Kabupaten Tana Tidung 9 23 Perdesaan
355 Kalimantan Utara 6504 Nunukan Kabupaten Nunukan 28 214 Perdesaan
356 Sulawesi Utara 7101 Bolaang Mongondow Kabupaten Bolaang Mongondow 54 148 Perdesaan
357 Sulawesi Utara 7102 Minahasa Kabupaten Minahasa 125 145 Perdesaan
358 Sulawesi Utara 7105 Minahasa Selatan Kabupaten Minahasa Selatan 39 139 Perdesaan
359 Sulawesi Utara 7106 Minahasa Utara Kabupaten Minahasa Utara 50 81 Perdesaan
360 Sulawesi Utara 7109 Minahasa Tenggara Kabupaten Minahasa Tenggara 47 97 Perdesaan
361 Sulawesi Utara 7111 Bolaang Mongondow Timur Kabupaten Bolaang Mongondow Timur 26 55 Perdesaan
362 Sulawesi Tengah 7204 Poso Kabupaten Poso 27 145 Perdesaan
363 Sulawesi Tengah 7210 Sigi Kabupaten Sigi 26 151 Perdesaan
364 Sulawesi Tengah 7212 Morowali Utara Kabupaten Morowali Utara 18 108 Perdesaan
365 Sulawesi Selatan 7302 Bulukumba Kabupaten Bulukumba 31 105 Perdesaan
366 Sulawesi Selatan 7303 Bantaeng Kabupaten Bantaeng 22 45 Perdesaan
367 Sulawesi Selatan 7304 Jeneponto Kabupaten Jeneponto 24 89 Perdesaan
368 Sulawesi Selatan 7305 Takalar Kabupaten Takalar 55 55 Perdesaan
369 Sulawesi Selatan 7306 Gowa Kabupaten Gowa 76 91 Perdesaan
370 Sulawesi Selatan 7307 Sinjai Kabupaten Sinjai 16 64 Perdesaan
371 Sulawesi Selatan 7308 Maros Kabupaten Maros 36 67 Perdesaan
372 Sulawesi Selatan 7309 Pangkajene Dan Kepulauan Kabupaten Pangkajene Dan Kepulauan 34 69 Perdesaan
373 Sulawesi Selatan 7311 Bone Kabupaten Bone 48 324 Perdesaan
374 Sulawesi Selatan 7312 Soppeng Kabupaten Soppeng 18 52 Perdesaan
375 Sulawesi Selatan 7313 Wajo Kabupaten Wajo 34 156 Perdesaan
376 Sulawesi Selatan 7314 Sidenreng Rappang Kabupaten Sidenreng Rappang 35 71 Perdesaan
377 Sulawesi Selatan 7315 Pinrang Kabupaten Pinrang 20 89 Perdesaan
378 Sulawesi Selatan 7316 Enrekang Kabupaten Enrekang 13 116 Perdesaan
379 Sulawesi Selatan 7317 Luwu Kabupaten Luwu 42 185 Perdesaan
380 Sulawesi Selatan 7318 Tana Toraja Kabupaten Tana Toraja 18 141 Perdesaan
381 Sulawesi Selatan 7322 Luwu Utara Kabupaten Luwu Utara 18 155 Perdesaan
382 Sulawesi Selatan 7325 Luwu Timur Kabupaten Luwu Timur 37 92 Perdesaan
383 Sulawesi Selatan 7326 Toraja Utara Kabupaten Toraja Utara 23 128 Perdesaan
384 Sulawesi Tenggara 7402 Muna Kabupaten Muna 33 117 Perdesaan
385 Sulawesi Tenggara 7403 Konawe Kabupaten Konawe 62 291 Perdesaan
386 Sulawesi Tenggara 7404 Kolaka Kabupaten Kolaka 29 106 Perdesaan
387 Sulawesi Tenggara 7405 Konawe Selatan Kabupaten Konawe Selatan 29 322 Perdesaan
388 Sulawesi Tenggara 7408 Kolaka Utara Kabupaten Kolaka Utara 7 126 Perdesaan
389 Sulawesi Tenggara 7410 Konawe Utara Kabupaten Konawe Utara 7 163 Perdesaan
390 Sulawesi Tenggara 7411 Kolaka Timur Kabupaten Kolaka Timur 6 127 Perdesaan
391 Sulawesi Tenggara 7413 Muna Barat Kabupaten Muna Barat 7 79 Perdesaan
392 Gorontalo 7501 Boalemo Kabupaten Boalemo 15 68 Perdesaan
393 Gorontalo 7502 Gorontalo Kabupaten Gorontalo 70 135 Perdesaan
394 Gorontalo 7503 Pohuwato Kabupaten Pohuwato 25 80 Perdesaan
395 Gorontalo 7504 Bone Bolango Kabupaten Bone Bolango 75 90 Perdesaan
396 Gorontalo 7505 Gorontalo Utara Kabupaten Gorontalo Utara 15 109 Perdesaan
397 Sulawesi Barat 7602 Polewali Mandar Kabupaten Polewali Mandar 43 124 Perdesaan
398 Sulawesi Barat 7603 Mamasa Kabupaten Mamasa 10 171 Perdesaan
399 Sulawesi Barat 7604 Mamuju Kabupaten Mamuju 9 92 Perdesaan
400 Sulawesi Barat 7605 Pasangkayu Kabupaten Pasangkayu 4 59 Perdesaan
401 Sulawesi Barat 7606 Mamuju Tengah Kabupaten Mamuju Tengah 2 54 Perdesaan
402 Papua Barat 9104 Teluk Bintuni Kabupaten Teluk Bintuni 20 242 Perdesaan
403 Papua Barat 9105 Manokwari Kabupaten Manokwari 14 159 Perdesaan
404 Papua Barat 9111 Manokwari Selatan Kabupaten Manokwari Selatan 2 55 Perdesaan
405 Papua Barat 9112 Pegunungan Arfak Kabupaten Pegunungan Arfak 1 165 Perdesaan
406 Papua Barat Daya 9202 Sorong Kabupaten Sorong 11 247 Perdesaan
407 Papua Barat Daya 9203 Sorong Selatan Kabupaten Sorong Selatan 17 142 Perdesaan
408 Papua Barat Daya 9204 Maybrat Kabupaten Maybrat 1 259 Perdesaan
409 Papua Barat Daya 9205 Tambrauw Kabupaten Tambrauw 3 213 Perdesaan
410 Papua 9403 Jayapura Kabupaten Jayapura 26 118 Perdesaan
411 Papua 9420 Keerom Kabupaten Keerom 6 85 Perdesaan
412 Papua 9426 Waropen Kabupaten Waropen 11 100 Perdesaan
413 Papua 9428 Mamberamo Raya Kabupaten Mamberamo Raya 4 30 Perdesaan
414 Papua Selatan 9501 Merauke Kabupaten Merauke 13 177 Perdesaan
415 Papua Selatan 9502 Boven Digoel Kabupaten Boven Digoel 2 110 Perdesaan
416 Papua Selatan 9503 Mappi Kabupaten Mappi 4 160 Perdesaan
417 Papua Selatan 9504 Asmat Kabupaten Asmat 5 219 Perdesaan
418 Papua Tengah 9601 Mimika Kabupaten Mimika 26 126 Perdesaan
419 Papua Tengah 9602 Dogiyai Kabupaten Dogiyai 0 67 Perdesaan
420 Papua Tengah 9603 Deiyai Kabupaten Deiyai 4 63 Perdesaan
421 Papua Tengah 9604 Nabire Kabupaten Nabire 14 66 Perdesaan
422 Papua Tengah 9605 Paniai Kabupaten Paniai 9 190 Perdesaan
423 Papua Tengah 9606 Intan Jaya Kabupaten Intan Jaya 0 97 Perdesaan
424 Papua Tengah 9607 Puncak Kabupaten Puncak 0 206 Perdesaan
425 Papua Tengah 9608 Puncak Jaya Kabupaten Puncak Jaya 7 295 Perdesaan
426 Papua Pegunungan 9701 Nduga Kabupaten Nduga 10 218 Perdesaan
427 Papua Pegunungan 9702 Jayawijaya Kabupaten Jayawijaya 14 298 Perdesaan
428 Papua Pegunungan 9703 Lanny Jaya Kabupaten Lanny Jaya 8 347 Perdesaan
429 Papua Pegunungan 9704 Tolikara Kabupaten Tolikara 14 531 Perdesaan
430 Papua Pegunungan 9705 Mamberamo Tengah Kabupaten Mamberamo Tengah 1 54 Perdesaan
431 Papua Pegunungan 9706 Yalimo Kabupaten Yalimo 13 261 Perdesaan
432 Papua Pegunungan 9707 Yahukimo Kabupaten Yahukimo 7 511 Perdesaan
433 Papua Pegunungan 9708 Pegunungan Bintang Kabupaten Pegunungan Bintang 4 254 Perdesaan
434 Aceh 1101 Simeulue Kabupaten Simeulue 117 21 Pesisir
435 Aceh 1172 Sabang Kota Sabang 16 2 Pesisir
436 Sumatera Utara 1271 Sibolga Kota Sibolga 10 7 Pesisir
437 Sumatera Barat 1301 Kepulauan Mentawai Kabupaten Kepulauan Mentawai 33 10 Pesisir
438 Riau 1410 Kepulauan Meranti Kabupaten Kepulauan Meranti 78 23 Pesisir
439 Lampung 1813 Pesisir Barat Kabupaten Pesisir Barat 88 33 Pesisir
440 Kep. Bangka Belitung 1902 Belitung Kabupaten Belitung 30 19 Pesisir
441 Kep. Bangka Belitung 1903 Bangka Barat Kabupaten Bangka Barat 35 31 Pesisir
442 Kep. Bangka Belitung 1906 Belitung Timur Kabupaten Belitung Timur 26 13 Pesisir
443 Kepulauan Riau 2101 Karimun Kabupaten Karimun 66 5 Pesisir
444 Kepulauan Riau 2102 Bintan Kabupaten Bintan 43 8 Pesisir
445 Kepulauan Riau 2103 Natuna Kabupaten Natuna 65 12 Pesisir
446 Kepulauan Riau 2104 Lingga Kabupaten Lingga 85 10 Pesisir
447 Kepulauan Riau 2105 Kepulauan Anambas Kabupaten Kepulauan Anambas 52 2 Pesisir
448 Kepulauan Riau 2171 Batam Kota Batam 45 19 Pesisir
449 Kepulauan Riau 2172 Tanjung Pinang Kota Tanjung Pinang 14 4 Pesisir
450 DKI Jakarta 3101 Kepulauan Seribu Kabupaten Kepulauan Seribu 6 0 Pesisir
451 Nusa Tenggara Barat 5208 Lombok Utara Kabupaten Lombok Utara 23 20 Pesisir
452 Nusa Tenggara Timur 5307 Alor Kabupaten Alor 112 63 Pesisir
453 Nusa Tenggara Timur 5308 Lembata Kabupaten Lembata 98 53 Pesisir
454 Nusa Tenggara Timur 5309 Flores Timur Kabupaten Flores Timur 155 95 Pesisir
455 Nusa Tenggara Timur 5314 Rote Ndao Kabupaten Rote Ndao 75 44 Pesisir
456 Nusa Tenggara Timur 5320 Sabu Raijua Kabupaten Sabu Raijua 35 28 Pesisir
457 Kalimantan Selatan 6302 Kotabaru Kabupaten Kotabaru 117 85 Pesisir
458 Kalimantan Timur 6474 Bontang Kota Bontang 11 4 Pesisir
459 Kalimantan Utara 6571 Tarakan Kota Tarakan 13 7 Pesisir
460 Sulawesi Utara 7103 Kepulauan Sangihe Kabupaten Kepulauan Sangihe 123 44 Pesisir
461 Sulawesi Utara 7104 Kepulauan Talaud Kabupaten Kepulauan Talaud 146 7 Pesisir
462 Sulawesi Utara 7107 Bolaang Mongondow Utara Kabupaten Bolaang Mongondow Utara 57 50 Pesisir
463 Sulawesi Utara 7108 Kepulauan Siau Tagulandang Biaro Kabupaten Kepulauan Siau Tagulandang Biaro 77 14 Pesisir
464 Sulawesi Utara 7110 Bolaang Mongondow Selatan Kabupaten Bolaang Mongondow Selatan 66 15 Pesisir
465 Sulawesi Utara 7172 Bitung Kota Bitung 42 27 Pesisir
466 Sulawesi Tengah 7201 Banggai Kepulauan Kabupaten Banggai Kepulauan 124 20 Pesisir
467 Sulawesi Tengah 7202 Banggai Kabupaten Banggai 176 161 Pesisir
468 Sulawesi Tengah 7203 Morowali Kabupaten Morowali 107 26 Pesisir
469 Sulawesi Tengah 7205 Donggala Kabupaten Donggala 91 76 Pesisir
470 Sulawesi Tengah 7206 Toli-Toli Kabupaten Toli-Toli 64 46 Pesisir
471 Sulawesi Tengah 7207 Buol Kabupaten Buol 58 57 Pesisir
472 Sulawesi Tengah 7208 Parigi Moutong Kabupaten Parigi Moutong 160 123 Pesisir
473 Sulawesi Tengah 7209 Tojo Una-Una Kabupaten Tojo Una-Una 104 42 Pesisir
474 Sulawesi Tengah 7211 Banggai Laut Kabupaten Banggai Laut 58 8 Pesisir
475 Sulawesi Selatan 7301 Kepulauan Selayar Kabupaten Kepulauan Selayar 78 10 Pesisir
476 Sulawesi Selatan 7310 Barru Kabupaten Barru 28 27 Pesisir
477 Sulawesi Tenggara 7401 Buton Kabupaten Buton 69 26 Pesisir
478 Sulawesi Tenggara 7406 Bombana Kabupaten Bombana 73 72 Pesisir
479 Sulawesi Tenggara 7407 Wakatobi Kabupaten Wakatobi 89 11 Pesisir
480 Sulawesi Tenggara 7409 Buton Utara Kabupaten Buton Utara 71 19 Pesisir
481 Sulawesi Tenggara 7412 Konawe Kepulauan Kabupaten Konawe Kepulauan 81 15 Pesisir
482 Sulawesi Tenggara 7414 Buton Tengah Kabupaten Buton Tengah 65 12 Pesisir
483 Sulawesi Tenggara 7415 Buton Selatan Kabupaten Buton Selatan 58 12 Pesisir
484 Sulawesi Barat 7601 Majene Kabupaten Majene 48 34 Pesisir
485 Maluku 8101 Kepulauan Tanimbar Kabupaten Kepulauan Tanimbar 88 1 Pesisir
486 Maluku 8102 Maluku Tenggara Kabupaten Maluku Tenggara 179 14 Pesisir
487 Maluku 8103 Maluku Tengah Kabupaten Maluku Tengah 143 53 Pesisir
488 Maluku 8104 Buru Kabupaten Buru 43 39 Pesisir
489 Maluku 8105 Kepulauan Aru Kabupaten Kepulauan Aru 117 2 Pesisir
490 Maluku 8106 Seram Bagian Barat Kabupaten Seram Bagian Barat 66 26 Pesisir
491 Maluku 8107 Seram Bagian Timur Kabupaten Seram Bagian Timur 180 18 Pesisir
492 Maluku 8108 Maluku Barat Daya Kabupaten Maluku Barat Daya 128 4 Pesisir
493 Maluku 8109 Buru Selatan Kabupaten Buru Selatan 64 17 Pesisir
494 Maluku 8171 Ambon Kota Ambon 37 13 Pesisir
495 Maluku 8172 Tual Kota Tual 29 1 Pesisir
496 Maluku Utara 8201 Halmahera Barat Kabupaten Halmahera Barat 91 82 Pesisir
497 Maluku Utara 8202 Halmahera Tengah Kabupaten Halmahera Tengah 62 10 Pesisir
498 Maluku Utara 8203 Kepulauan Sula Kabupaten Kepulauan Sula 78 2 Pesisir
499 Maluku Utara 8204 Halmahera Selatan Kabupaten Halmahera Selatan 237 19 Pesisir
500 Maluku Utara 8205 Halmahera Utara Kabupaten Halmahera Utara 124 74 Pesisir
501 Maluku Utara 8206 Halmahera Timur Kabupaten Halmahera Timur 90 14 Pesisir
502 Maluku Utara 8207 Pulau Morotai Kabupaten Pulau Morotai 80 8 Pesisir
503 Maluku Utara 8208 Pulau Taliabu Kabupaten Pulau Taliabu 62 9 Pesisir
504 Maluku Utara 8271 Ternate Kota Ternate 56 22 Pesisir
505 Maluku Utara 8272 Tidore Kepulauan Kota Tidore Kepulauan 66 23 Pesisir
506 Papua Barat 9101 Fakfak Kabupaten Fakfak 106 43 Pesisir
507 Papua Barat 9102 Kaimana Kabupaten Kaimana 60 26 Pesisir
508 Papua Barat 9103 Teluk Wondama Kabupaten Teluk Wondama 64 13 Pesisir
509 Papua Barat Daya 9201 Raja Ampat Kabupaten Raja Ampat 120 2 Pesisir
510 Papua 9408 Kepulauan Yapen Kabupaten Kepulauan Yapen 141 24 Pesisir
511 Papua 9409 Biak Numfor Kabupaten Biak Numfor 195 76 Pesisir
512 Papua 9419 Sarmi Kabupaten Sarmi 68 43 Pesisir
513 Papua 9427 Supiori Kabupaten Supiori 38 0 Pesisir
514 Papua 9471 Jayapura Kota Jayapura 23 16 Pesisir
"""

# Manual mapping dictionary for the 38 provinces in masterProvinces.js
PROV_METADATA = {
  "Aceh": {"id": "11", "satkerId": "SAT-11", "satkerName": "Satker BP2P Sumatera I (Aceh)", "ikk": 97.45, "defaultZone": "Sedang"},
  "Sumatera Utara": {"id": "12", "satkerId": "SAT-12", "satkerName": "Satker BP2P Sumatera II (Sumut)", "ikk": 102.30, "defaultZone": "Sedang"},
  "Sumatera Barat": {"id": "13", "satkerId": "SAT-13", "satkerName": "Satker BP2P Sumatera III (Sumbar)", "ikk": 98.15, "defaultZone": "Mudah"},
  "Riau": {"id": "14", "satkerId": "SAT-14", "satkerName": "Satker BP2P Sumatera III (Riau)", "ikk": 104.20, "defaultZone": "Sedang"},
  "Jambi": {"id": "15", "satkerId": "SAT-15", "satkerName": "Satker BP2P Sumatera IV (Jambi)", "ikk": 96.80, "defaultZone": "Sedang"},
  "Sumatera Selatan": {"id": "16", "satkerId": "SAT-16", "satkerName": "Satker BP2P Sumatera V (Sumsel)", "ikk": 99.40, "defaultZone": "Mudah"},
  "Bengkulu": {"id": "17", "satkerId": "SAT-17", "satkerName": "Satker BP2P Sumatera IV (Bengkulu)", "ikk": 98.60, "defaultZone": "Sedang"},
  "Lampung": {"id": "18", "satkerId": "SAT-18", "satkerName": "Satker BP2P Sumatera V (Lampung)", "ikk": 95.70, "defaultZone": "Mudah"},
  "Kep. Bangka Belitung": {"id": "19", "satkerId": "SAT-19", "satkerName": "Satker BP2P Sumatera V (Babel)", "ikk": 108.50, "defaultZone": "Sedang"},
  "Kepulauan Bangka Belitung": {"id": "19", "satkerId": "SAT-19", "satkerName": "Satker BP2P Sumatera V (Babel)", "ikk": 108.50, "defaultZone": "Sedang"},
  "Kepulauan Riau": {"id": "21", "satkerId": "SAT-21", "satkerName": "Satker BP2P Sumatera III (Kepri)", "ikk": 112.40, "defaultZone": "Sulit"},
  "DKI Jakarta": {"id": "31", "satkerId": "SAT-31", "satkerName": "Satker BP2P Jawa I (DKI Jakarta)", "ikk": 108.90, "defaultZone": "Mudah"},
  "Jawa Barat": {"id": "32", "satkerId": "SAT-32", "satkerName": "Satker BP2P Jawa II (Jawa Barat)", "ikk": 96.20, "defaultZone": "Mudah"},
  "Jawa Tengah": {"id": "33", "satkerId": "SAT-33", "satkerName": "Satker BP2P Jawa III (Jawa Tengah)", "ikk": 92.80, "defaultZone": "Mudah"},
  "DI Yogyakarta": {"id": "34", "satkerId": "SAT-34", "satkerName": "Satker BP2P Jawa III (DI Yogyakarta)", "ikk": 94.10, "defaultZone": "Mudah"},
  "Jawa Timur": {"id": "35", "satkerId": "SAT-35", "satkerName": "Satker BP2P Jawa IV (Jawa Timur)", "ikk": 95.50, "defaultZone": "Mudah"},
  "Banten": {"id": "36", "satkerId": "SAT-36", "satkerName": "Satker BP2P Jawa I (Banten)", "ikk": 98.30, "defaultZone": "Mudah"},
  "Bali": {"id": "51", "satkerId": "SAT-51", "satkerName": "Satker BP2P Jawa IV (Bali)", "ikk": 101.20, "defaultZone": "Mudah"},
  "Nusa Tenggara Barat": {"id": "52", "satkerId": "SAT-52", "satkerName": "Satker BP2P Nusa Tenggara I (NTB)", "ikk": 106.80, "defaultZone": "Sedang"},
  "Nusa Tenggara Timur": {"id": "53", "satkerId": "SAT-53", "satkerName": "Satker BP2P Nusa Tenggara II (NTT)", "ikk": 116.50, "defaultZone": "Sulit"},
  "Kalimantan Barat": {"id": "61", "satkerId": "SAT-61", "satkerName": "Satker BP2P Kalimantan I (Kalbar)", "ikk": 109.30, "defaultZone": "Sedang"},
  "Kalimantan Tengah": {"id": "62", "satkerId": "SAT-62", "satkerName": "Satker BP2P Kalimantan I (Kalteng)", "ikk": 111.80, "defaultZone": "Sedang"},
  "Kalimantan Selatan": {"id": "63", "satkerId": "SAT-63", "satkerName": "Satker BP2P Kalimantan II (Kalsel)", "ikk": 105.40, "defaultZone": "Mudah"},
  "Kalimantan Timur": {"id": "64", "satkerId": "SAT-64", "satkerName": "Satker BP2P Kalimantan II (Kaltim)", "ikk": 114.60, "defaultZone": "Sedang"},
  "Kalimantan Utara": {"id": "65", "satkerId": "SAT-65", "satkerName": "Satker BP2P Kalimantan II (Kaltara)", "ikk": 122.10, "defaultZone": "Sulit"},
  "Sulawesi Utara": {"id": "71", "satkerId": "SAT-71", "satkerName": "Satker BP2P Sulawesi I (Sulut)", "ikk": 110.20, "defaultZone": "Sedang"},
  "Sulawesi Tengah": {"id": "72", "satkerId": "SAT-72", "satkerName": "Satker BP2P Sulawesi II (Sulteng)", "ikk": 113.70, "defaultZone": "Sedang"},
  "Sulawesi Selatan": {"id": "73", "satkerId": "SAT-73", "satkerName": "Satker BP2P Sulawesi III (Sulsel)", "ikk": 103.50, "defaultZone": "Mudah"},
  "Sulawesi Tenggara": {"id": "74", "satkerId": "SAT-74", "satkerName": "Satker BP2P Sulawesi III (Sultra)", "ikk": 112.90, "defaultZone": "Sedang"},
  "Gorontalo": {"id": "75", "satkerId": "SAT-75", "satkerName": "Satker BP2P Sulawesi I (Gorontalo)", "ikk": 107.40, "defaultZone": "Sedang"},
  "Sulawesi Barat": {"id": "76", "satkerId": "SAT-76", "satkerName": "Satker BP2P Sulawesi III (Sulbar)", "ikk": 108.60, "defaultZone": "Sedang"},
  "Maluku": {"id": "81", "satkerId": "SAT-81", "satkerName": "Satker BP2P Maluku (Maluku)", "ikk": 126.30, "defaultZone": "Sulit"},
  "Maluku Utara": {"id": "82", "satkerId": "SAT-82", "satkerName": "Satker BP2P Maluku (Maluku Utara)", "ikk": 128.90, "defaultZone": "Sulit"},
  "Papua Barat": {"id": "91", "satkerId": "SAT-PAPUA2", "satkerName": "Satker Papua II (Papua Barat & Papua Barat Daya)", "ikk": 135.80, "defaultZone": "Sulit"},
  "Papua Barat Daya": {"id": "92", "satkerId": "SAT-PAPUA2", "satkerName": "Satker Papua II (Papua Barat & Papua Barat Daya)", "ikk": 132.40, "defaultZone": "Sulit"},
  "Papua": {"id": "93", "satkerId": "SAT-PAPUA1", "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)", "ikk": 142.50, "defaultZone": "Sulit"},
  "Papua Selatan": {"id": "94", "satkerId": "SAT-PAPUA1", "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)", "ikk": 148.20, "defaultZone": "Sulit"},
  "Papua Tengah": {"id": "95", "satkerId": "SAT-PAPUA1", "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)", "ikk": 168.40, "defaultZone": "Sulit"},
  "Papua Pegunungan": {"id": "96", "satkerId": "SAT-PAPUA1", "satkerName": "Satker Papua I (Papua, Papua Tengah, Selatan, Pegunungan)", "ikk": 215.30, "defaultZone": "Sulit"}
}

lines = [l.strip() for l in raw_ocr.strip().split("\n") if l.strip()]
print(f"Total lines: {len(lines)}")

parsed_items = []

for line in lines:
    tokens = line.split()
    no = int(tokens[0])
    karakteristik = tokens[-1]
    desa_perdesaan = int(tokens[-2])
    desa_perkotaan = int(tokens[-3])
    
    # 4-digit numeric token
    code_idx = [i for i, t in enumerate(tokens[1:-3], 1) if re.match(r'^\d{4}$', t)][0]
    kode = tokens[code_idx]
    prov_name = " ".join(tokens[1:code_idx])
    
    remainder = tokens[code_idx+1:-3]
    # find where Kabupaten or Kota starts
    full_start_indices = [i for i, t in enumerate(remainder) if t in ("Kota", "Kabupaten")]
    if not full_start_indices:
        print(f"Error finding Kota/Kabupaten: {line}")
        continue
    full_start_idx = full_start_indices[0]
    short_name = " ".join(remainder[:full_start_idx])
    full_name = " ".join(remainder[full_start_idx:])
    
    p_meta = PROV_METADATA.get(prov_name)
    if not p_meta:
        print(f"MISSING PROV META: '{prov_name}'")
        continue

    # Delineasi assignment
    # DJKP: Perkotaan Kota (50k target)
    # DJPKT: Perumahan Kota (120k target) -> Kabupaten berkarakteristik Perkotaan & Kota Pesisir
    # DJPDS: Perumahan Pedesaan (200k target) -> Daerah berkarakteristik Perdesaan & Pesisir Rural
    if full_name.startswith("Kota ") and karakteristik == "Perkotaan":
        delineasi = "DJKP"
    elif karakteristik == "Perkotaan":
        delineasi = "DJPKT"
    elif karakteristik == "Pesisir" and (full_name.startswith("Kota ") or desa_perkotaan > desa_perdesaan):
        delineasi = "DJPKT"
    else:
        delineasi = "DJPDS"

    # Zone calculation
    zone = p_meta["defaultZone"]
    if karakteristik == "Pesisir" and ("Kepulauan" in full_name or "Pulau" in full_name) and zone == "Mudah":
        zone = "Sedang"
    if "Papua" in prov_name:
        zone = "Sulit"

    # Proportional initial indication based on village counts
    if delineasi == "DJKP":
        ind_base = max(100, int(desa_perkotaan * 12 + 150))
    elif delineasi == "DJPKT":
        ind_base = max(150, int(desa_perkotaan * 6 + desa_perdesaan * 3 + 200))
    else: # DJPDS
        ind_base = max(200, int(desa_perdesaan * 4 + desa_perkotaan * 2 + 150))

    item = {
        "no": no,
        "id": kode,
        "name": short_name,
        "fullName": full_name,
        "provId": p_meta["id"],
        "provName": prov_name,
        "satkerId": p_meta["satkerId"],
        "satkerName": p_meta["satkerName"],
        "desaPerkotaan": desa_perkotaan,
        "desaPerdesaan": desa_perdesaan,
        "totalDesa": desa_perkotaan + desa_perdesaan,
        "karakteristik": karakteristik,
        "delineasi": delineasi,
        "zone": zone,
        "ikk": p_meta["ikk"],
        "indikasiAwal": ind_base
    }
    parsed_items.append(item)

print(f"Successfully processed {len(parsed_items)} of 514 Kab/Kota.")

# Check Delineasi distributions
cnt_djkp = sum(1 for x in parsed_items if x["delineasi"] == "DJKP")
cnt_djpkt = sum(1 for x in parsed_items if x["delineasi"] == "DJPKT")
cnt_djpds = sum(1 for x in parsed_items if x["delineasi"] == "DJPDS")
print(f"DJKP (Perkotaan): {cnt_djkp}, DJPKT (Perumahan Kota): {cnt_djpkt}, DJPDS (Perdesaan): {cnt_djpds}")

# Write to js/data/master514.js
js_content = "/**\n * MASTER DATA 514 KABUPATEN/KOTA DI INDONESIA (RESMI KEMENTERIAN PKP)\n * Berdasarkan Data Desa/Kel Perkotaan, Perdesaan, dan Karakteristik Wilayah\n */\n\n"
js_content += f"export const MASTER_514_KABKOTA = {json.dumps(parsed_items, indent=2, ensure_ascii=False)};\n"

with open("/Users/riyanr/.gemini/antigravity/scratch/rka-bedah-rumah-dashboard/js/data/master514.js", "w") as f:
    f.write(js_content)

print("Saved to /Users/riyanr/.gemini/antigravity/scratch/rka-bedah-rumah-dashboard/js/data/master514.js successfully!")
