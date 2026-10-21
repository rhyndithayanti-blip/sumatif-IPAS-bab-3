/**
 * Aset Gambar Vektor SVG Edukatif untuk Soal Tes Sumatif IPAS Kelas 4
 * Materi: Peta dan Bentang Alam
 * Kurikulum Merdeka - SD Negeri 3 Loloan Timur
 */

// 1. Arah Mata Angin (Kompas 8 Arah)
export const SVG_ARAH_MATA_ANGIN = `<svg viewBox="0 0 400 240" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" class="max-w-md mx-auto drop-shadow-sm">
  <rect width="400" height="240" rx="16" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
  <circle cx="200" cy="120" r="85" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
  <circle cx="200" cy="120" r="75" fill="none" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="3,3"/>
  
  <!-- Jarum Utama (Utara - Selatan) -->
  <polygon points="200,42 208,120 200,112 192,120" fill="#EF4444"/>
  <polygon points="200,198 208,120 200,128 192,120" fill="#3B82F6"/>
  
  <!-- Jarum Barat - Timur -->
  <polygon points="122,120 200,112 192,120 200,128" fill="#64748B"/>
  <polygon points="278,120 200,112 208,120 200,128" fill="#64748B"/>
  
  <!-- Jarum Diagonal -->
  <line x1="145" y1="65" x2="255" y2="175" stroke="#94A3B8" stroke-width="1.5"/>
  <line x1="255" y1="65" x2="145" y2="175" stroke="#94A3B8" stroke-width="1.5"/>

  <!-- Lingkaran Tengah -->
  <circle cx="200" cy="120" r="8" fill="#1E293B" stroke="#FFFFFF" stroke-width="2"/>

  <!-- Huruf Arah -->
  <text x="200" y="32" text-anchor="middle" font-size="14" font-weight="900" fill="#DC2626">U (Utara)</text>
  <text x="200" y="222" text-anchor="middle" font-size="13" font-weight="800" fill="#1E40AF">S (Selatan)</text>
  <text x="315" y="125" text-anchor="start" font-size="13" font-weight="800" fill="#334155">T (Timur)</text>
  <text x="85" y="125" text-anchor="end" font-size="13" font-weight="800" fill="#334155">B (Barat)</text>
  
  <!-- Diagonal Labels -->
  <text x="265" y="60" font-size="11" font-weight="700" fill="#64748B">TL</text>
  <text x="265" y="185" font-size="11" font-weight="700" fill="#64748B">TG</text>
  <text x="125" y="185" font-size="11" font-weight="700" fill="#64748B">BD</text>
  <text x="125" y="60" font-size="11" font-weight="700" fill="#64748B">BL</text>
</svg>`;

// 2. Komponen-Komponen Pada Lembar Peta
export const SVG_KOMPONEN_PETA = `<svg viewBox="0 0 540 280" width="100%" height="230" xmlns="http://www.w3.org/2000/svg" class="max-w-lg mx-auto drop-shadow-sm">
  <rect width="540" height="280" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
  
  <!-- Lembar Bingkai Peta -->
  <rect x="25" y="20" width="490" height="240" rx="6" fill="#FFFFFF" stroke="#334155" stroke-width="2"/>
  
  <!-- [1] Judul Peta -->
  <rect x="140" y="28" width="260" height="26" rx="4" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.2"/>
  <text x="270" y="45" text-anchor="middle" font-size="11" font-weight="800" fill="#1E3A8A">PETA PROVINSI BALI (Judul Peta)</text>
  
  <!-- Isi Pulau Bali Sederhana -->
  <path d="M120 145 C150 115, 230 110, 310 135 C340 145, 390 160, 360 190 C320 200, 240 195, 180 185 Z" fill="#BBF7D0" stroke="#16A34A" stroke-width="2"/>
  <circle cx="210" cy="150" r="4" fill="#DC2626"/>
  <text x="218" y="153" font-size="9" font-weight="bold" fill="#B91C1C">▲ G. Agung</text>

  <!-- [2] Penunjuk Arah Mata Angin -->
  <g transform="translate(60, 60)">
    <circle cx="20" cy="20" r="18" fill="#F1F5F9" stroke="#94A3B8"/>
    <polygon points="20,5 24,20 20,18 16,20" fill="#DC2626"/>
    <polygon points="20,35 24,20 20,22 16,20" fill="#3B82F6"/>
    <text x="20" y="0" text-anchor="middle" font-size="9" font-weight="900" fill="#DC2626">U</text>
    <text x="20" y="47" text-anchor="middle" font-size="8" font-weight="bold" fill="#475569">Orientasi / Arah</text>
  </g>

  <!-- [3] Inset Peta -->
  <g transform="translate(50, 160)">
    <rect width="80" height="60" fill="#F8FAFC" stroke="#64748B" stroke-width="1.2"/>
    <rect x="2" y="2" width="76" height="12" fill="#E2E8F0"/>
    <text x="40" y="11" text-anchor="middle" font-size="8" font-weight="bold" fill="#334155">INSET PETA</text>
    <path d="M10 35 L70 35" stroke="#94A3B8" stroke-dasharray="2,2"/>
    <rect x="36" y="28" width="10" height="8" fill="#FCA5A5" stroke="#DC2626"/>
    <text x="40" y="52" text-anchor="middle" font-size="7" fill="#64748B">Posisi thd Indonesia</text>
  </g>

  <!-- [4] Legenda Peta -->
  <g transform="translate(385, 80)">
    <rect width="115" height="135" rx="4" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1.2"/>
    <rect x="0" y="0" width="115" height="20" fill="#E2E8F0"/>
    <text x="57" y="14" text-anchor="middle" font-size="9" font-weight="bold" fill="#1E293B">LEGENDA</text>
    <g transform="translate(8, 30)">
      <polygon points="8,2 14,14 2,14" fill="#DC2626"/>
      <text x="22" y="11" font-size="8" fill="#334155">: Gunung Berapi</text>
    </g>
    <g transform="translate(8, 50)">
      <circle cx="8" cy="8" r="4" fill="#DC2626"/>
      <text x="22" y="11" font-size="8" fill="#334155">: Ibu Kota</text>
    </g>
    <g transform="translate(8, 70)">
      <line x1="2" y1="8" x2="16" y2="8" stroke="#0284C7" stroke-width="2.5"/>
      <text x="22" y="11" font-size="8" fill="#334155">: Sungai</text>
    </g>
    <g transform="translate(8, 90)">
      <rect x="2" y="2" width="14" height="12" fill="#86EFAC" stroke="#16A34A"/>
      <text x="22" y="11" font-size="8" fill="#334155">: Dataran Rendah</text>
    </g>
    <g transform="translate(8, 110)">
      <rect x="2" y="2" width="14" height="12" fill="#93C5FD" stroke="#2563EB"/>
      <text x="22" y="11" font-size="8" fill="#334155">: Laut / Danau</text>
    </g>
  </g>

  <!-- [5] Skala Batang & Angka -->
  <g transform="translate(180, 222)">
    <text x="75" y="10" text-anchor="middle" font-size="9" font-weight="bold" fill="#334155">Skala 1 : 500.000</text>
    <rect x="0" y="16" width="37.5" height="6" fill="#1E293B"/>
    <rect x="37.5" y="16" width="37.5" height="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="0.8"/>
    <rect x="75" y="16" width="37.5" height="6" fill="#1E293B"/>
    <rect x="112.5" y="16" width="37.5" height="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="0.8"/>
    <text x="0" y="32" font-size="7" fill="#64748B">0</text>
    <text x="75" y="32" font-size="7" fill="#64748B">10 km</text>
    <text x="150" y="32" font-size="7" fill="#64748B">20 km</text>
  </g>
</svg>`;

// 3. Simbol Warna Pada Peta (Ketinggian & Kedalaman)
export const SVG_SIMBOL_WARNA_PETA = `<svg viewBox="0 0 500 200" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" class="max-w-md mx-auto drop-shadow-sm">
  <rect width="500" height="200" rx="14" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
  <text x="250" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#1E293B">Arti Simbol Warna Pada Peta</text>
  
  <!-- Kolom Daratan -->
  <g transform="translate(30, 45)">
    <text x="100" y="0" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">Wilayah Daratan</text>
    <!-- Hijau -->
    <rect x="10" y="15" width="35" height="22" rx="4" fill="#22C55E"/>
    <text x="55" y="30" font-size="10" font-weight="bold" fill="#1E293B">Hijau: <tspan font-weight="normal" fill="#475569">Dataran Rendah (0 - 200 m)</tspan></text>
    <!-- Kuning -->
    <rect x="10" y="45" width="35" height="22" rx="4" fill="#FACC15"/>
    <text x="55" y="60" font-size="10" font-weight="bold" fill="#1E293B">Kuning: <tspan font-weight="normal" fill="#475569">Dataran Tinggi (200 - 500 m)</tspan></text>
    <!-- Cokelat -->
    <rect x="10" y="75" width="35" height="22" rx="4" fill="#92400E"/>
    <text x="55" y="90" font-size="10" font-weight="bold" fill="#1E293B">Cokelat: <tspan font-weight="normal" fill="#475569">Pegunungan (> 1000 m)</tspan></text>
    <!-- Putih / Abu -->
    <rect x="10" y="105" width="35" height="22" rx="4" fill="#F1F5F9" stroke="#94A3B8"/>
    <text x="55" y="120" font-size="10" font-weight="bold" fill="#1E293B">Putih: <tspan font-weight="normal" fill="#475569">Puncak Salju / Es Abadi</tspan></text>
  </g>

  <line x1="260" y1="45" x2="260" y2="185" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3,3"/>

  <!-- Kolom Perairan -->
  <g transform="translate(280, 45)">
    <text x="95" y="0" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369A1">Wilayah Perairan</text>
    <!-- Biru Muda -->
    <rect x="10" y="15" width="35" height="22" rx="4" fill="#7DD3FC"/>
    <text x="55" y="30" font-size="10" font-weight="bold" fill="#1E293B">Biru Muda: <tspan font-weight="normal" fill="#475569">Laut Dangkal (0 - 200 m)</tspan></text>
    <!-- Biru Sedang -->
    <rect x="10" y="45" width="35" height="22" rx="4" fill="#0284C7"/>
    <text x="55" y="60" font-size="10" font-weight="bold" fill="#1E293B">Biru: <tspan font-weight="normal" fill="#475569">Laut Dalam (200 - 1000 m)</tspan></text>
    <!-- Biru Tua -->
    <rect x="10" y="75" width="35" height="22" rx="4" fill="#1E3A8A"/>
    <text x="55" y="90" font-size="10" font-weight="bold" fill="#1E293B">Biru Tua: <tspan font-weight="normal" fill="#475569">Palung Laut (> 1000 m)</tspan></text>
  </g>
</svg>`;

// 4. Profil Penampang Melintang Bentang Alam (Gunung, Dataran Tinggi, Lembah, Dataran Rendah, Laut)
export const SVG_PROFIL_BENTANG_ALAM = `<svg viewBox="0 0 560 230" width="100%" height="210" xmlns="http://www.w3.org/2000/svg" class="max-w-lg mx-auto drop-shadow-sm">
  <defs>
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#E0F2FE"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
    <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>
  <rect width="560" height="230" rx="14" fill="url(#skyGrad)" stroke="#CBD5E1" stroke-width="1.5"/>

  <!-- Matahari & Awan -->
  <circle cx="80" cy="45" r="16" fill="#FBBF24"/>
  <ellipse cx="440" cy="40" rx="25" ry="12" fill="#FFFFFF" opacity="0.8"/>
  <ellipse cx="460" cy="38" rx="20" ry="10" fill="#FFFFFF" opacity="0.8"/>

  <!-- Kontur Daratan -->
  <path d="M 0 170 
           C 60 170, 90 140, 130 115 
           C 160 95, 175 75, 205 75 
           C 225 75, 240 120, 260 135 
           C 280 150, 310 110, 350 45 
           C 370 75, 390 150, 420 170 
           L 460 175 
           L 560 175 
           L 560 230 
           L 0 230 Z" 
        fill="#86EFAC" stroke="#16A34A" stroke-width="2"/>

  <!-- Lapisan Gunung Cokelat -->
  <polygon points="350,45 315,115 390,135" fill="#B45309" opacity="0.6"/>
  <!-- Asap / Puncak Salju -->
  <polygon points="350,45 338,70 362,70" fill="#FFFFFF"/>

  <!-- Air Laut -->
  <path d="M 460 175 C 480 175, 520 180, 560 180 L 560 230 L 460 230 Z" fill="url(#seaGrad)"/>
  <line x1="460" y1="175" x2="560" y2="175" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="4,2"/>

  <!-- Label Anotasi Bentang Alam -->
  <!-- 1. Dataran Rendah -->
  <rect x="25" y="185" width="95" height="22" rx="4" fill="#FFFFFF" stroke="#16A34A" stroke-width="1"/>
  <text x="72" y="199" text-anchor="middle" font-size="9" font-weight="bold" fill="#166534">Dataran Rendah</text>

  <!-- 2. Dataran Tinggi / Plato -->
  <rect x="155" y="50" width="85" height="20" rx="4" fill="#FFFFFF" stroke="#D97706" stroke-width="1"/>
  <text x="197" y="64" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#B45309">Dataran Tinggi</text>

  <!-- 3. Lembah / Ngarai -->
  <rect x="235" y="145" width="55" height="18" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/>
  <text x="262" y="157" text-anchor="middle" font-size="8" font-weight="bold" fill="#334155">Lembah</text>

  <!-- 4. Gunung -->
  <rect x="325" y="22" width="50" height="18" rx="4" fill="#FFFFFF" stroke="#DC2626" stroke-width="1"/>
  <text x="350" y="34" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#B91C1C">Gunung</text>

  <!-- 5. Pantai & Laut -->
  <rect x="420" y="192" width="55" height="18" rx="4" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
  <text x="447" y="204" text-anchor="middle" font-size="8" font-weight="bold" fill="#0369A1">Pantai</text>

  <text x="510" y="205" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">Laut</text>
</svg>`;

// 5. Tanjung dan Teluk (Perbedaan Bentuk Pesisir)
export const SVG_TANJUNG_DAN_TELUK = `<svg viewBox="0 0 500 220" width="100%" height="190" xmlns="http://www.w3.org/2000/svg" class="max-w-md mx-auto drop-shadow-sm">
  <rect width="500" height="220" rx="14" fill="#38BDF8" stroke="#0284C7" stroke-width="1.5"/>

  <!-- Wilayah Daratan Hijau -->
  <path d="M 0 0 
           L 180 0 
           C 200 40, 240 70, 240 100 
           C 240 130, 160 140, 160 170 
           C 160 200, 220 220, 260 220 
           L 0 220 Z" 
        fill="#86EFAC" stroke="#16A34A" stroke-width="2.5"/>

  <!-- Label Daratan -->
  <text x="70" y="115" text-anchor="middle" font-size="13" font-weight="900" fill="#166534">DARATAN</text>

  <!-- Label Lautan -->
  <text x="390" y="115" text-anchor="middle" font-size="13" font-weight="900" fill="#0369A1">LAUTAN</text>

  <!-- Bagian A: Tanjung (Daratan menjorok ke arah laut) -->
  <g transform="translate(230, 85)">
    <circle cx="10" cy="15" r="5" fill="#DC2626"/>
    <line x1="20" y1="15" x2="65" y2="15" stroke="#DC2626" stroke-width="2"/>
    <rect x="70" y="0" width="135" height="32" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.2"/>
    <text x="137" y="15" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#991B1B">TANJUNG (Ujung)</text>
    <text x="137" y="27" text-anchor="middle" font-size="8" fill="#B91C1C">Daratan menjorok ke laut</text>
  </g>

  <!-- Bagian B: Teluk (Lautan menjorok ke arah daratan) -->
  <g transform="translate(140, 130)">
    <circle cx="45" cy="25" r="5" fill="#2563EB"/>
    <line x1="55" y1="25" x2="110" y2="45" stroke="#2563EB" stroke-width="2"/>
    <rect x="115" y="32" width="135" height="32" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.2"/>
    <text x="182" y="47" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1E40AF">TELUK</text>
    <text x="182" y="59" text-anchor="middle" font-size="8" fill="#1D4ED8">Lautan menjorok ke daratan</text>
  </g>
</svg>`;

// 6. Aliran Sungai dari Hulu ke Hilir / Muara
export const SVG_ALIRAN_SUNGAI = `<svg viewBox="0 0 520 220" width="100%" height="190" xmlns="http://www.w3.org/2000/svg" class="max-w-md mx-auto drop-shadow-sm">
  <rect width="520" height="220" rx="14" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Wilayah Pegunungan Kiri -->
  <polygon points="20,180 80,40 140,180" fill="#92400E" opacity="0.8"/>
  <polygon points="90,180 145,65 195,180" fill="#B45309" opacity="0.7"/>

  <!-- Garis Aliran Sungai -->
  <path d="M 110 90 
           Q 150 110, 180 130 
           T 260 120 
           T 340 145 
           T 420 135 
           L 490 140" 
        fill="none" stroke="#0284C7" stroke-width="10" stroke-linecap="round"/>
  <path d="M 110 90 Q 150 110, 180 130 T 260 120 T 340 145 T 420 135 L 490 140" 
        fill="none" stroke="#7DD3FC" stroke-width="4" stroke-linecap="round"/>

  <!-- Muara Laut Kanan -->
  <path d="M 480 50 C 470 100, 470 150, 480 200 L 520 200 L 520 50 Z" fill="#0284C7"/>
  <text x="500" y="125" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF" transform="rotate(90, 500, 125)">LAUT</text>

  <!-- Label Hulu -->
  <rect x="25" y="15" width="110" height="24" rx="4" fill="#FEF3C7" stroke="#D97706"/>
  <text x="80" y="31" text-anchor="middle" font-size="9" font-weight="bold" fill="#92400E">HULU (Pegunungan)</text>

  <!-- Label Hilir / Muara -->
  <rect x="360" y="165" width="110" height="34" rx="4" fill="#E0F2FE" stroke="#0284C7"/>
  <text x="415" y="180" text-anchor="middle" font-size="9" font-weight="bold" fill="#0369A1">HILIR / MUARA</text>
  <text x="415" y="193" text-anchor="middle" font-size="7.5" fill="#0284C7">Pertemuan Sungai & Laut</text>
</svg>`;

// 7. Selat Bali (Hubungan Pulau Jawa & Pulau Bali)
export const SVG_SELAT_BALI = `<svg viewBox="0 0 520 220" width="100%" height="190" xmlns="http://www.w3.org/2000/svg" class="max-w-md mx-auto drop-shadow-sm">
  <rect width="520" height="220" rx="14" fill="#0284C7" stroke="#0369A1" stroke-width="1.5"/>

  <!-- Pulau Jawa Bagian Timur -->
  <path d="M 0 0 L 160 0 C 150 70, 140 130, 170 220 L 0 220 Z" fill="#86EFAC" stroke="#16A34A" stroke-width="2"/>
  <text x="70" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#166534">PULAU JAWA</text>
  <circle cx="150" cy="110" r="3.5" fill="#DC2626"/>
  <text x="115" y="130" font-size="8.5" font-weight="bold" fill="#334155">Ketapang</text>

  <!-- Pulau Bali Bagian Barat (Jembrana / Gilimanuk) -->
  <path d="M 330 0 C 310 80, 310 140, 340 220 L 520 220 L 520 0 Z" fill="#BBF7D0" stroke="#16A34A" stroke-width="2"/>
  <text x="430" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#166534">PULAU BALI</text>
  <circle cx="325" cy="110" r="3.5" fill="#DC2626"/>
  <text x="335" y="130" font-size="8.5" font-weight="bold" fill="#334155">Gilimanuk (Jembrana)</text>

  <!-- Selat Bali di Tengah -->
  <g transform="translate(240, 60)">
    <rect x="-65" y="0" width="130" height="45" rx="6" fill="#FFFFFF" opacity="0.9" stroke="#1E293B" stroke-width="1.2"/>
    <text x="0" y="20" text-anchor="middle" font-size="12" font-weight="900" fill="#1E3A8A">SELAT BALI</text>
    <text x="0" y="34" text-anchor="middle" font-size="8" fill="#475569">Laut sempit pemisah 2 pulau</text>
  </g>

  <!-- Kapal Ferry Penyeberangan -->
  <g transform="translate(225, 130)">
    <polygon points="0,10 30,10 25,20 5,20" fill="#FFFFFF" stroke="#334155"/>
    <rect x="8" y="2" width="14" height="8" fill="#EF4444"/>
    <text x="15" y="32" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#FFFFFF">Kapal Feri</text>
  </g>
</svg>`;

// 8. Terasering / Sengkedan Pencegah Longsor
export const SVG_TERASERING_SAWAH = `<svg viewBox="0 0 500 210" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" class="max-w-md mx-auto drop-shadow-sm">
  <rect width="500" height="210" rx="14" fill="#F0FDF4" stroke="#DCFCE7" stroke-width="1.5"/>

  <!-- Tangga Bertingkat / Terasering Sawah -->
  <path d="M 50 180 
           L 110 180 L 110 150 
           L 180 150 L 180 120 
           L 260 120 L 260 90 
           L 350 90 L 350 60 
           L 440 60 L 440 30 L 480 30 L 480 200 L 50 200 Z" 
        fill="#86EFAC" stroke="#15803D" stroke-width="2.5"/>

  <!-- Padi di Tiap Tingkat -->
  <line x1="120" y1="145" x2="170" y2="145" stroke="#16A34A" stroke-width="3" stroke-dasharray="2,3"/>
  <line x1="190" y1="115" x2="250" y2="115" stroke="#16A34A" stroke-width="3" stroke-dasharray="2,3"/>
  <line x1="270" y1="85" x2="340" y2="85" stroke="#16A34A" stroke-width="3" stroke-dasharray="2,3"/>
  <line x1="360" y1="55" x2="430" y2="55" stroke="#16A34A" stroke-width="3" stroke-dasharray="2,3"/>

  <!-- Kotak Keterangan -->
  <rect x="30" y="25" width="220" height="48" rx="8" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.5"/>
  <text x="140" y="45" text-anchor="middle" font-size="11" font-weight="900" fill="#166534">Sistem Terasering (Sengkedan)</text>
  <text x="140" y="60" text-anchor="middle" font-size="8.5" fill="#475569">Mencegah erosi & tanah longsor di perbukitan</text>
</svg>`;
