import { Question } from '../types';
import {
  SVG_ARAH_MATA_ANGIN,
  SVG_KOMPONEN_PETA,
  SVG_SIMBOL_WARNA_PETA,
  SVG_PROFIL_BENTANG_ALAM,
  SVG_TANJUNG_DAN_TELUK,
  SVG_ALIRAN_SUNGAI,
  SVG_SELAT_BALI,
  SVG_TERASERING_SAWAH,
} from './questionSvgAssets';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (25 SOAL: ID 1 s.d. 25)
  // =========================================================================

  // Soal 1: Definisi Peta
  {
    id: 1,
    type: 'pg',
    topic: 'Pengertian Peta',
    difficulty: 'Mudah',
    text: 'Gambaran permukaan bumi pada suatu bidang datar dengan skala tertentu disebut...',
    options: [
      { id: 'A', text: 'Peta' },
      { id: 'B', text: 'Globe' },
      { id: 'C', text: 'Atlas' },
      { id: 'D', text: 'Lukisan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Peta adalah gambaran permukaan bumi pada suatu bidang datar (seperti kertas atau layar) dengan menggunakan skala tertentu. Globe adalah tiruan bola bumi tiruan 3 dimensi, sedangkan atlas adalah kumpulan peta dalam bentuk buku.',
  },

  // Soal 2: Komponen Judul Peta
  {
    id: 2,
    type: 'pg',
    topic: 'Komponen Peta',
    difficulty: 'Mudah',
    image: SVG_KOMPONEN_PETA,
    imageCaption: 'Gambar: Komponen-komponen penting yang terdapat pada lembar peta',
    text: 'Komponen peta yang berfungsi untuk mengetahui isi atau wilayah yang digambarkan pada peta adalah...',
    options: [
      { id: 'A', text: 'Judul peta' },
      { id: 'B', text: 'Legenda' },
      { id: 'C', text: 'Garis astronomis' },
      { id: 'D', text: 'Skala peta' },
    ],
    correctAnswer: 'A',
    explanation:
      'Judul peta mencerminkan isi dan wilayah yang digambarkan pada peta, misalnya "PETA PROVINSI BALI" atau "PETA KABUPATEN JEMBRANA".',
  },

  // Soal 3: Arah Mata Angin
  {
    id: 3,
    type: 'pg',
    topic: 'Komponen Peta',
    difficulty: 'Mudah',
    image: SVG_ARAH_MATA_ANGIN,
    imageCaption: 'Gambar: Kompas 8 penjuru arah mata angin',
    text: 'Pada sebuah peta yang standar, arah bagian atas selalu menunjukkan arah...',
    options: [
      { id: 'A', text: 'Utara' },
      { id: 'B', text: 'Selatan' },
      { id: 'C', text: 'Timur' },
      { id: 'D', text: 'Barat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sesuai kaidah perpetaan internasional dan nasional, penunjuk arah mata angin pada bagian atas peta selalu mengarah ke arah Utara (U).',
  },

  // Soal 4: Arah Mata Angin Antara Timur dan Selatan
  {
    id: 4,
    type: 'pg',
    topic: 'Arah Mata Angin',
    difficulty: 'Sedang',
    image: SVG_ARAH_MATA_ANGIN,
    imageCaption: 'Gambar: Penunjuk arah mata angin',
    text: 'Arah mata angin yang berada di antara arah Timur dan arah Selatan adalah...',
    options: [
      { id: 'A', text: 'Tenggara' },
      { id: 'B', text: 'Timur Laut' },
      { id: 'C', text: 'Barat Daya' },
      { id: 'D', text: 'Barat Laut' },
    ],
    correctAnswer: 'A',
    explanation:
      'Urutan arah mata angin searah jarum jam: Utara -> Timur Laut -> Timur -> Tenggara -> Selatan -> Barat Daya -> Barat -> Barat Laut. Arah di antara Timur dan Selatan adalah Tenggara.',
  },

  // Soal 5: Skala Peta
  {
    id: 5,
    type: 'pg',
    topic: 'Komponen Peta',
    difficulty: 'Sedang',
    text: 'Komponen pada peta yang menunjukkan perbandingan antara jarak pada peta dengan jarak sebenarnya di permukaan bumi dinamakan...',
    options: [
      { id: 'A', text: 'Skala peta' },
      { id: 'B', text: 'Legenda' },
      { id: 'C', text: 'Inset' },
      { id: 'D', text: 'Simbol' },
    ],
    correctAnswer: 'A',
    explanation:
      'Skala peta adalah angka perbandingan jarak pada peta dengan jarak sesungguhnya di lapangan, misalnya skala 1 : 100.000 artinya 1 cm pada peta mewakili 100.000 cm (1 km) jarak sebenarnya.',
  },

  // Soal 6: Fungsi Legenda
  {
    id: 6,
    type: 'pg',
    topic: 'Komponen Peta',
    difficulty: 'Mudah',
    text: 'Bagian pada peta yang memuat keterangan penjelasan dari simbol-simbol yang digunakan pada peta disebut...',
    options: [
      { id: 'A', text: 'Legenda' },
      { id: 'B', text: 'Indeks' },
      { id: 'C', text: 'Inset' },
      { id: 'D', text: 'Katalog' },
    ],
    correctAnswer: 'A',
    explanation:
      'Legenda adalah kolom keterangan yang menjelaskan arti setiap simbol, garis, dan warna yang digunakan dalam peta agar pembaca mudah memahaminya.',
  },

  // Soal 7: Inset Peta
  {
    id: 7,
    type: 'pg',
    topic: 'Komponen Peta',
    difficulty: 'Sedang',
    image: SVG_KOMPONEN_PETA,
    imageCaption: 'Gambar: Perhatikan kotak kecil di sudut peta',
    text: 'Peta kecil yang disisipkan di dalam peta utama untuk memperjelas kedudukan wilayah yang dipetakan terhadap wilayah sekitarnya yang lebih luas dinamakan...',
    options: [
      { id: 'A', text: 'Inset peta' },
      { id: 'B', text: 'Garis tepi' },
      { id: 'C', text: 'Legenda' },
      { id: 'D', text: 'Orientasi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Inset peta adalah peta berukuran kecil di sudut lembar peta yang berfungsi memperlihatkan posisi wilayah yang digambar dalam cakupan wilayah yang lebih luas.',
  },

  // Soal 8: Simbol Warna Hijau
  {
    id: 8,
    type: 'pg',
    topic: 'Simbol Peta',
    difficulty: 'Mudah',
    image: SVG_SIMBOL_WARNA_PETA,
    imageCaption: 'Gambar: Pembagian simbol warna pada peta geografis',
    text: 'Pada peta rupa bumi, warna HIJAU biasanya digunakan untuk menggambarkan kenampakan bentang alam berupa...',
    options: [
      { id: 'A', text: 'Dataran rendah' },
      { id: 'B', text: 'Pegunungan tinggi' },
      { id: 'C', text: 'Danau dan laut' },
      { id: 'D', text: 'Gurun pasir' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada peta umum, warna hijau digunakan untuk melambangkan daerah dataran rendah dengan ketinggian antara 0 sampai 200 meter di atas permukaan laut (mdpl).',
  },

  // Soal 9: Simbol Warna Biru
  {
    id: 9,
    type: 'pg',
    topic: 'Simbol Peta',
    difficulty: 'Mudah',
    image: SVG_SIMBOL_WARNA_PETA,
    imageCaption: 'Gambar: Simbol warna wilayah perairan',
    text: 'Kenampakan alam seperti danau, sungai, selat, dan laut pada peta dilambangkan dengan warna...',
    options: [
      { id: 'A', text: 'Biru' },
      { id: 'B', text: 'Cokelat' },
      { id: 'C', text: 'Kuning' },
      { id: 'D', text: 'Hijau' },
    ],
    correctAnswer: 'A',
    explanation:
      'Warna biru melambangkan wilayah perairan. Biru muda menunjukkan perairan dangkal, sedangkan biru tua menunjukkan perairan dalam / palung laut.',
  },

  // Soal 10: Simbol Gunung Berapi
  {
    id: 10,
    type: 'pg',
    topic: 'Simbol Peta',
    difficulty: 'Mudah',
    text: 'Simbol titik berupa bentuk segitiga berwarna MERAH pada peta menandakan...',
    options: [
      { id: 'A', text: 'Gunung berapi aktif' },
      { id: 'B', text: 'Gunung tidak aktif (mati)' },
      { id: 'C', text: 'Ibu kota provinsi' },
      { id: 'D', text: 'Pelabuhan laut' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada peta, simbol segitiga merah melambangkan gunung berapi aktif yang masih bisa meletus, sedangkan segitiga hitam melambangkan gunung mati/tidak aktif.',
  },

  // Soal 11: Pengertian Bentang Alam
  {
    id: 11,
    type: 'pg',
    topic: 'Bentang Alam',
    difficulty: 'Mudah',
    text: 'Kenampakan atau bentuk muka bumi yang terbentuk secara alami tanpa campur tangan manusia disebut...',
    options: [
      { id: 'A', text: 'Bentang alam' },
      { id: 'B', text: 'Tata ruang buatan' },
      { id: 'C', text: 'Gedung bertingkat' },
      { id: 'D', text: 'Jembatan layang' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bentang alam (kenampakan alam) adalah bentukan alami di permukaan bumi yang tercipta melalui proses alamiah, meliputi bentang alam daratan dan perairan.',
  },

  // Soal 12: Karakteristik Dataran Rendah
  {
    id: 12,
    type: 'pg',
    topic: 'Bentang Alam Daratan',
    difficulty: 'Sedang',
    image: SVG_PROFIL_BENTANG_ALAM,
    imageCaption: 'Gambar: Profil ketinggian bentang alam daratan dan perairan',
    text: 'Wilayah daratan yang luas dan relatif rata dengan ketinggian antara 0 sampai 200 meter di atas permukaan laut (mdpl) dinamakan...',
    options: [
      { id: 'A', text: 'Dataran rendah' },
      { id: 'B', text: 'Dataran tinggi' },
      { id: 'C', text: 'Pegunungan' },
      { id: 'D', text: 'Bukit' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dataran rendah memiliki ketinggian 0 - 200 meter dpl. Wilayah ini biasanya menjadi pusat permukiman, industri, transportasi, dan lahan pertanian padi.',
  },

  // Soal 13: Karakteristik Dataran Tinggi
  {
    id: 13,
    type: 'pg',
    topic: 'Bentang Alam Daratan',
    difficulty: 'Sedang',
    text: 'Daerah dataran tinggi memiliki udara yang sejuk dan tanah yang gembur. Komoditas perkebunan yang paling cocok dibudidayakan di dataran tinggi adalah...',
    options: [
      { id: 'A', text: 'Teh, kopi, dan sayuran' },
      { id: 'B', text: 'Kelapa sawit dan rumput laut' },
      { id: 'C', text: 'Tembakau pantai dan garam' },
      { id: 'D', text: 'Pohon bakau dan terumbu karang' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dataran tinggi berhawa sejuk dan berhawa dingin sangat cocok untuk perkebunan teh, kopi, stroberi, kentang, wortel, dan aneka sayur mayur.',
  },

  // Soal 14: Lembah dan Ngarai
  {
    id: 14,
    type: 'pg',
    topic: 'Bentang Alam Daratan',
    difficulty: 'Sedang',
    image: SVG_PROFIL_BENTANG_ALAM,
    imageCaption: 'Gambar: Cekungan di antara bukit atau gunung',
    text: 'Wilayah daratan cekung dan landai yang berada di antara kaki dua lereng bukit atau pegunungan disebut...',
    options: [
      { id: 'A', text: 'Lembah' },
      { id: 'B', text: 'Puncak' },
      { id: 'C', text: 'Tanjung' },
      { id: 'D', text: 'Beting karang' },
    ],
    correctAnswer: 'A',
    explanation:
      'Lembah adalah daerah dataran rendah yang dikelilingi oleh perbukitan atau pegunungan. Lembah yang dalam dengan tebing curam sering dinamakan ngarai.',
  },

  // Soal 15: Tanjung
  {
    id: 15,
    type: 'pg',
    topic: 'Bentang Alam Pesisir',
    difficulty: 'Sedang',
    image: SVG_TANJUNG_DAN_TELUK,
    imageCaption: 'Gambar: Perhatikan bagian daratan yang menonjol keluar',
    text: 'Berdasarkan gambar di atas, bagian daratan yang menjorok masuk ke arah perairan lautan disebut...',
    options: [
      { id: 'A', text: 'Tanjung' },
      { id: 'B', text: 'Teluk' },
      { id: 'C', text: 'Selat' },
      { id: 'D', text: 'Sungai' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tanjung (atau semenanjung jika sangat luas) adalah daratan yang menjorok ke arah laut. Kebalikannya adalah teluk, yaitu lautan yang menjorok masuk ke arah daratan.',
  },

  // Soal 16: Teluk
  {
    id: 16,
    type: 'pg',
    topic: 'Bentang Alam Pesisir',
    difficulty: 'Sedang',
    image: SVG_TANJUNG_DAN_TELUK,
    imageCaption: 'Gambar: Teluk yang terlindung dari ombak besar',
    text: 'Wilayah lautan yang menjorok masuk ke arah daratan dan dikelilingi daratan di tiga sisinya dinamakan TELUK. Teluk sering dimanfaatkan manusia sebagai tempat yang baik untuk...',
    options: [
      { id: 'A', text: 'Pelabuhan kapal karena ombaknya relatif tenang' },
      { id: 'B', text: 'Pembangkit listrik tenaga angin kencang' },
      { id: 'C', text: 'Lahan sawah padi beririgasi' },
      { id: 'D', text: 'Tempat pendakian gunung tertinggi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Karena menjorok ke daratan, teluk terlindung dari terjangan ombak samudra yang ganas, sehingga airnya relatif tenang dan sangat ideal untuk dermaga serta pelabuhan kapal.',
  },

  // Soal 17: Pengertian Selat
  {
    id: 17,
    type: 'pg',
    topic: 'Bentang Alam Perairan',
    difficulty: 'Mudah',
    image: SVG_SELAT_BALI,
    imageCaption: 'Gambar: Selat Bali yang memisahkan Pulau Jawa dan Pulau Bali',
    text: 'Perairan laut sempit yang terletak di antara dua pulau dan menghubungkan dua perairan yang lebih luas disebut...',
    options: [
      { id: 'A', text: 'Selat' },
      { id: 'B', text: 'Danau' },
      { id: 'C', text: 'Sungai' },
      { id: 'D', text: 'Rawa' },
    ],
    correctAnswer: 'A',
    explanation:
      'Selat adalah lautan sempit di antara dua pulau. Contohnya Selat Bali (memisahkan Bali dan Jawa), Selat Sunda (memisahkan Jawa dan Sumatra), dan Selat Lombok.',
  },

  // Soal 18: Selat Bali di Jembrana
  {
    id: 18,
    type: 'pg',
    topic: 'Bentang Alam Perairan',
    difficulty: 'Mudah',
    image: SVG_SELAT_BALI,
    imageCaption: 'Gambar: Penyeberangan Ketapang (Jawa Timur) ke Gilimanuk (Jembrana, Bali)',
    text: 'Kabupaten Jembrana di Bali terhubung dengan Pulau Jawa melalui pelabuhan feri yang melintasi perairan...',
    options: [
      { id: 'A', text: 'Selat Bali' },
      { id: 'B', text: 'Selat Sunda' },
      { id: 'C', text: 'Selat Malaka' },
      { id: 'D', text: 'Selat Makassar' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pelabuhan Gilimanuk yang berada di Kabupaten Jembrana menghubungkan Pulau Bali dengan Pelabuhan Ketapang (Banyuwangi, Jawa Timur) melintasi perairan Selat Bali.',
  },

  // Soal 19: Aliran Sungai dari Hulu ke Hilir
  {
    id: 19,
    type: 'pg',
    topic: 'Bentang Alam Perairan',
    difficulty: 'Sedang',
    image: SVG_ALIRAN_SUNGAI,
    imageCaption: 'Gambar: Aliran air sungai alami dari hulu menuju hilir',
    text: 'Bagian awal dari sebuah sungai yang berada di daerah pegunungan berhawa dingin disebut...',
    options: [
      { id: 'A', text: 'Hulu sungai' },
      { id: 'B', text: 'Hilir sungai' },
      { id: 'C', text: 'Muara sungai' },
      { id: 'D', text: 'Delta sungai' },
    ],
    correctAnswer: 'A',
    explanation:
      'Hulu adalah bagian awal/sumber mata air sungai yang umumnya berada di dataran tinggi atau pegunungan. Hilir atau muara adalah bagian akhir tempat sungai bermuara ke laut atau danau.',
  },

  // Soal 20: Danau
  {
    id: 20,
    type: 'pg',
    topic: 'Bentang Alam Perairan',
    difficulty: 'Mudah',
    text: 'Genangan air yang sangat luas dan seluruh sisinya dikelilingi oleh daratan disebut...',
    options: [
      { id: 'A', text: 'Danau' },
      { id: 'B', text: 'Teluk' },
      { id: 'C', text: 'Samudra' },
      { id: 'D', text: 'Tanjung' },
    ],
    correctAnswer: 'A',
    explanation:
      'Danau adalah cekungan luas di permukaan bumi yang terisi air dan dikelilingi oleh daratan. Contoh danau terkenal di Bali adalah Danau Beratan, Danau Batur, Danau Buyan, dan Danau Tamblingan.',
  },

  // Soal 21: Rawa
  {
    id: 21,
    type: 'pg',
    topic: 'Bentang Alam Perairan',
    difficulty: 'Sedang',
    text: 'Lahan basah yang selalu tergenang air secara alami dan umumnya banyak ditumbuhi tumbuhan air seperti eceng gondok atau bakau disebut...',
    options: [
      { id: 'A', text: 'Rawa' },
      { id: 'B', text: 'Plato' },
      { id: 'C', text: 'Ngarai' },
      { id: 'D', text: 'Gurun' },
    ],
    correctAnswer: 'A',
    explanation:
      'Rawa adalah tanah basah yang tergenang air terus-menerus atau musiman karena drainase yang terhambat, biasanya terdapat di dekat muara sungai atau pantai.',
  },

  // Soal 22: Mata Pencaharian di Wilayah Pantai
  {
    id: 22,
    type: 'pg',
    topic: 'Pemanfaatan Bentang Alam',
    difficulty: 'Mudah',
    text: 'Sebagian besar masyarakat yang tinggal di sekitar kawasan pantai memiliki mata pencaharian utama sebagai...',
    options: [
      { id: 'A', text: 'Nelayan dan petani garam' },
      { id: 'B', text: 'Pemetik daun teh' },
      { id: 'C', text: 'Petani sayur kol di pegunungan' },
      { id: 'D', text: 'Penebang kayu pinus' },
    ],
    correctAnswer: 'A',
    explanation:
      'Masyarakat pesisir pantai memanfaatkan laut dan terik matahari pesisir untuk menangkap ikan (nelayan), membuat garam (petani garam), dan budidaya tambak ikan/udang.',
  },

  // Soal 23: Fungsi Hutan Mangrove / Bakau
  {
    id: 23,
    type: 'pg',
    topic: 'Pelestarian Bentang Alam',
    difficulty: 'Sedang',
    text: 'Pohon bakau (mangrove) banyak ditanam di daerah pesisir pantai dengan tujuan utama untuk...',
    options: [
      { id: 'A', text: 'Mencegah abrasi pantai akibat hempasan ombak laut' },
      { id: 'B', text: 'Menjadikan air laut menjadi air tawar yang dapat diminum' },
      { id: 'C', text: 'Memudahkan kapal besar bersandar di pantai' },
      { id: 'D', text: 'Mempercepat penguapan garam di pinggir laut' },
    ],
    correctAnswer: 'A',
    explanation:
      'Akar pohon bakau yang kokoh mencengkeram tanah dan mampu memecah energi gelombang laut, sehingga sangat efektif mencegah abrasi (pengikisan daratan pantai oleh air laut).',
  },

  // Soal 24: Fungsi Terasering / Sengkedan
  {
    id: 24,
    type: 'pg',
    topic: 'Pelestarian Bentang Alam',
    difficulty: 'Sedang',
    image: SVG_TERASERING_SAWAH,
    imageCaption: 'Gambar: Pembuatan sawah bertingkat di daerah miring',
    text: 'Masyarakat petani di daerah perbukitan membuat sistem sawah bertingkat (terasering/sengkedan). Manfaat utama dari terasering tersebut adalah...',
    options: [
      { id: 'A', text: 'Mencegah erosi tanah dan longsor di lahan miring' },
      { id: 'B', text: 'Menahan air laut agar tidak naik ke bukit' },
      { id: 'C', text: 'Mempercepat aliran air hujan agar cepat habis' },
      { id: 'D', text: 'Mengubah suhu udara menjadi lebih panas' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sistem terasering (sengkedan) memperlambat laju aliran air permukaan pada lahan miring, sehingga tanah tidak mudah terkikis (erosi) dan mencegah bencana tanah longsor.',
  },

  // Soal 25: Perbedaan Peta, Atlas, dan Globe
  {
    id: 25,
    type: 'pg',
    topic: 'Pengetahuan Peta',
    difficulty: 'Mudah',
    text: 'Tiruan bentuk bola bumi tiruan dalam bentuk tiga dimensi yang dapat diputar dinamakan...',
    options: [
      { id: 'A', text: 'Globe' },
      { id: 'B', text: 'Peta' },
      { id: 'C', text: 'Atlas' },
      { id: 'D', text: 'Kompas' },
    ],
    correctAnswer: 'A',
    explanation:
      'Globe adalah tiruan bola bumi dalam ukuran kecil yang dibuat mirip dengan bentuk bumi yang sebenarnya (tiga dimensi) serta dipasang miring sesuai kemiringan poros bumi.',
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (PGK) KATEGORI PERNYATAAN (5 SOAL: ID 26 s.d. 30)
  // Format: Siswa wajib merespons setiap butir pernyataan dengan BENAR atau SALAH
  // =========================================================================

  // Soal 26: PGK Kategori - Komponen Peta
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Komponen Peta',
    difficulty: 'Sedang',
    image: SVG_KOMPONEN_PETA,
    imageCaption: 'Gambar: Lembar peta beserta komponen pelengkapnya',
    text: 'Tentukan apakah setiap pernyataan mengenai komponen peta di bawah ini BENAR atau SALAH!',
    statements: [
      {
        id: 's26_1',
        text: 'Judul peta berfungsi memberikan informasi mengenai wilayah dan tema yang digambarkan pada peta.',
        correctAnswer: true,
      },
      {
        id: 's26_2',
        text: 'Pada peta umum, bagian atas peta selalu menunjuk ke arah Selatan.',
        correctAnswer: false,
      },
      {
        id: 's26_3',
        text: 'Legenda adalah kolom yang berisi penjelasan arti dari setiap simbol yang digunakan pada peta.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (judul peta mencerminkan tema wilayah). Pernyataan 2 SALAH (bagian atas peta menunjuk ke arah Utara, bukan Selatan). Pernyataan 3 BENAR (legenda berisi penjelasan simbol).',
  },

  // Soal 27: PGK Kategori - Simbol Warna Peta
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Simbol Warna Peta',
    difficulty: 'Sedang',
    image: SVG_SIMBOL_WARNA_PETA,
    imageCaption: 'Gambar: Penggunaan warna pada peta geografis',
    text: 'Tentukan apakah setiap pernyataan mengenai makna simbol warna pada peta di bawah ini BENAR atau SALAH!',
    statements: [
      {
        id: 's27_1',
        text: 'Warna hijau pada peta rupa bumi melambangkan kawasan dataran rendah yang subur.',
        correctAnswer: true,
      },
      {
        id: 's27_2',
        text: 'Warna cokelat pada peta digunakan untuk menggambarkan wilayah perairan yang dangkal.',
        correctAnswer: false,
      },
      {
        id: 's27_3',
        text: 'Warna biru tua pada peta menunjukkan wilayah laut yang sangat dalam atau palung laut.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (hijau = dataran rendah 0-200 m). Pernyataan 2 SALAH (warna cokelat melambangkan pegunungan/daerah tinggi, bukan perairan dangkal). Pernyataan 3 BENAR (biru tua = laut dalam/palung).',
  },

  // Soal 28: PGK Kategori - Bentang Alam Daratan
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Bentang Alam Daratan',
    difficulty: 'Sedang',
    image: SVG_PROFIL_BENTANG_ALAM,
    imageCaption: 'Gambar: Profil bentang alam daratan',
    text: 'Tentukan apakah setiap pernyataan mengenai karakteristik bentang alam daratan di bawah ini BENAR atau SALAH!',
    statements: [
      {
        id: 's28_1',
        text: 'Dataran tinggi memiliki suhu udara yang panas sehingga cocok untuk tambak udang.',
        correctAnswer: false,
      },
      {
        id: 's28_2',
        text: 'Gunung berapi yang meletus dapat memuntahkan abu vulkanik yang membuat tanah di sekitarnya menjadi subur.',
        correctAnswer: true,
      },
      {
        id: 's28_3',
        text: 'Lembah merupakan daratan cekung yang terletak di antara dua kaki perbukitan atau pegunungan.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 SALAH (dataran tinggi berhawa sejuk dan cocok untuk perkebunan teh/sayur, bukan tambak udang). Pernyataan 2 BENAR (material vulkanis kaya mineral menyuburkan tanah). Pernyataan 3 BENAR (lembah terletak di antara bukit/pegunungan).',
  },

  // Soal 29: PGK Kategori - Bentang Alam Perairan
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Bentang Alam Perairan',
    difficulty: 'Sedang',
    image: SVG_TANJUNG_DAN_TELUK,
    imageCaption: 'Gambar: Karakteristik bentang alam pesisir dan perairan',
    text: 'Tentukan apakah setiap pernyataan mengenai bentang alam perairan di bawah ini BENAR atau SALAH!',
    statements: [
      {
        id: 's29_1',
        text: 'Selat adalah wilayah lautan sempit yang memisahkan dua pulau yang berdekatan.',
        correctAnswer: true,
      },
      {
        id: 's29_2',
        text: 'Teluk adalah daratan yang menjorok keluar menuju ke arah lautan lepas.',
        correctAnswer: false,
      },
      {
        id: 's29_3',
        text: 'Air sungai mengalir secara alami dari hulu di dataran tinggi menuju hilir atau muara di laut.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (selat adalah laut sempit pemisah dua pulau seperti Selat Bali). Pernyataan 2 SALAH (daratan yang menjorok ke laut adalah tanjung, sedangkan teluk adalah laut yang menjorok ke daratan). Pernyataan 3 BENAR (air sungai mengalir dari elevasi tinggi ke rendah).',
  },

  // Soal 30: PGK Kategori - Pelestarian Lingkungan Bentang Alam
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Pelestarian Bentang Alam',
    difficulty: 'Sedang',
    image: SVG_TERASERING_SAWAH,
    imageCaption: 'Gambar: Upaya pelestarian dan pemanfaatan bentang alam',
    text: 'Tentukan apakah setiap pernyataan mengenai upaya pelestarian bentang alam di bawah ini BENAR atau SALAH!',
    statements: [
      {
        id: 's30_1',
        text: 'Hutan bakau (mangrove) di tepi pantai dapat melindungi garis pantai dari bahaya abrasi.',
        correctAnswer: true,
      },
      {
        id: 's30_2',
        text: 'Membuat sengkedan atau terasering di lereng perbukitan dapat membantu mencegah erosi tanah.',
        correctAnswer: true,
      },
      {
        id: 's30_3',
        text: 'Membuang sampah rumah tangga dan limbah ke aliran sungai dapat membantu memperdalam dasar sungai.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (mangrove menahan gempuran ombak laut). Pernyataan 2 BENAR (terasering menahan laju air dan erosi). Pernyataan 3 SALAH (sampah menyebabkan pendangkalan, penyumbatan, banjir, dan pencemaran air).',
  },
];
