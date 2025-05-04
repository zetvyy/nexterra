import React from "react";
import Navbar from "../components/navbar";
import FAQ from "../components/FAQ";
import logo from "../assets/img/icons/nexterra-white.png";
import { Link } from "react-router";
import leodavinci from "../assets/img/leodavinci.jpg";
import {
  ArchiveBoxIcon,
  HeartIcon,
  VariableIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";

const home = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-900 text-white font-sans">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-purple-800 to-grey-600">
          <div className="container mx-auto text-center">
            <img src={logo} className="w-64 mx-auto mb-6" alt="logo" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wawasan Digital, Aksi Nyata
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Selamat Datang di Nexterra, Di Sini Strategi Bertemu Eksekusi!
            </p>
            {/* <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              <Link to="/feature">Jelajahi Edukasi</Link>
            </button> */}
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Banyak Belajar, Minim Aksi? Anda Tidak Sendirian.
            </h2>
            <ul className="list-none text-lg">
              <li className="mb-4 flex items-center">
                <VariableIcon className="h-6 w-6 mr-4 text-purple-500" />
                <span>Tahu teorinya, tapi bingung menerapkannya.</span>
              </li>
              <li className="mb-4 flex items-center">
                <VariableIcon className="h-6 w-6 mr-4 text-purple-500" />
                <span>
                  Sudah ikut banyak kelas, tapi belum ada yang berubah.
                </span>
              </li>
              <li className="mb-4 flex items-center">
                <ArchiveBoxIcon className="h-6 w-6 mr-4 text-purple-500" />
                <span>
                  Merasa sibuk belajar, tapi sebenarnya hanya menumpuk
                  pengetahuan.
                </span>
              </li>
              <li className="mb-4 flex items-center">
                <WifiIcon className="h-6 w-6 mr-4 text-purple-500" />
                <span>Terdistraksi oleh banyaknya pilihan belajar.</span>
              </li>
              <li className="mb-4 flex items-center">
                <HeartIcon className="h-6 w-6 mr-4 text-purple-500" />
                <span>Kehilangan semangat karena tidak ada hasil nyata.</span>
              </li>
            </ul>
            <p className="mt-6 text-md md:text-lg text-center italic">
              Inilah fenomena “Overlearning, Underacting”. Jangan biarkan
              pengetahuan Anda hanya menjadi tumpukan catatan.
            </p>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-gray-700 to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              4 Pilar Pembelajaran Utama di Nexterra
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  📘 Insight Series
                </h3>
                <p className="text-md">
                  Ebook strategis, padat, dan siap pakai untuk pemahaman cepat
                  dan tindakan instan.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  🎓 Digital Mastery
                </h3>
                <p className="text-md">
                  Webinar interaktif dengan praktisi untuk pengalaman belajar
                  langsung dan penguasaan digital.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">💻 GrowthLab</h3>
                <p className="text-md">
                  Ecourse mendalam dengan modul terstruktur, latihan, dan studi
                  kasus untuk pertumbuhan nyata.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">👥 Action Lab</h3>
                <p className="text-md">
                  Private class eksklusif untuk bimbingan intensif, personal,
                  dan penerapan langsung.
                </p>
              </div>
            </div>
            <p className="mt-8 text-lg text-center">
              Di Nexterra, Anda tidak hanya belajar. Anda bertumbuh, membangun,
              dan bergerak.
            </p>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Nexterra: Tempat Ilmu Bekerja, Bukan Hanya Disimpan
            </h2>
            <p className="text-lg mb-6 text-center">
              Kami hadir untuk Anda yang serius ingin bertumbuh, dengan
              pendekatan belajar yang:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li className="mb-2">Terstruktur, bukan acak-acakan.</li>
              <li className="mb-2">Aplikatif, bukan hanya teoritis.</li>
              <li className="mb-2">Sederhana tapi tajam.</li>
              <li className="mb-2">Fleksibel tapi tetap intens.</li>
            </ul>
            <p className="mt-6 text-lg text-center">
              Lewat empat jalur utama pembelajaran, kami membangun ekosistem
              untuk membantu Anda bertindak lebih cepat.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 md:py-28 bg-gradient-to-tr from-purple-700 to-gray-700">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Mulai Perjalanan Belajar yang Berdampak Sekarang!
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Jangan tunda lagi. Pilih jalur yang sesuai dengan kebutuhan Anda
              dan ambil langkah pertama menuju pertumbuhan nyata.
            </p>
            <div className="space-x-4">
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg">
                Jelajahi Program
              </button>
              {/* Anda bisa menambahkan tombol lain atau link ke program spesifik di sini */}
            </div>
          </div>
        </section>

        {/* Keunggulan Nexterra */}
        <section className="p-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kenapa Nexterra?
          </h1>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Bisa Mulai dari Nol
              </h3>
              <p className="text-gray-300">
                Nexterra percaya semua orang bisa berkembang, dari mana pun
                titik awalmu. Kami hadir untuk menemani setiap langkah kecil
                menuju sukses.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Ilmu Praktis, Bukan Hanya Teori
              </h3>
              <p className="text-gray-300">
                Semua eBook, webinar, dan ecourse kami dirancang untuk langsung
                dipraktikkan dalam bisnis dan kariermu.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Akses Mudah dan Gratis
              </h3>
              <p className="text-gray-300">
                Belajar seharusnya tidak ribet dan tidak mahal. Di Nexterra,
                banyak materi penting yang bisa kamu akses gratis atau dengan
                biaya sangat terjangkau.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Tumbuh Bersama Komunitas
              </h3>
              <p className="text-gray-300">
                Kami tidak hanya menyediakan materi, tapi juga membangun
                komunitas pembelajar dan pelaku usaha untuk saling mendukung dan
                bertumbuh.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Langkah Kecil, Perubahan Besar
              </h3>
              <p className="text-gray-300">
                Kami percaya bahwa perubahan besar dimulai dari satu keputusan
                sederhana: mau belajar hari ini. Nexterra ada untuk mempercepat
                perjalananmu.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        <section className="py-20 bg-gradient-to-br from-purple-800 to-gray-600 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6">
              “An investment in knowledge pays the best interest.”
            </h2>
            <p className="text-lg text-gray-400 mb-8">— Benjamin Franklin</p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Apa Kata Mereka ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-md p-6">
                <p className="text-gray-300 italic mb-4">
                  “Saya baru pertama kali mengikuti webinar di Nexterra dan
                  sangat terkesan! Materinya sangat relevan dengan bisnis saya
                  dan mudah dipahami. Banyak tips praktis yang langsung bisa
                  diterapkan. Terima kasih Nexterra!”
                </p>
                <p className="font-semibold">
                  - Rudi Hartono, Pemilik Usaha Kuliner
                </p>
              </div>
              <div className="bg-gray-800 rounded-md p-6">
                <p className="text-gray-300 italic mb-4">
                  “Ebook yang saya download dari Nexterra benar-benar membuka
                  wawasan baru. Saya tidak hanya belajar tentang cara mengelola
                  bisnis lebih efektif, tetapi juga bagaimana cara meningkatkan
                  keterampilan saya secara pribadi. Sangat membantu!”
                </p>
                <p className="font-semibold">
                  - Dewi N. S., Pengusaha Fashion Online
                </p>
              </div>
              <div className="bg-gray-800 rounded-md p-6">
                <p className="text-gray-300 italic mb-4">
                  “Saya seorang mahasiswa yang ingin mengembangkan skill bisnis.
                  E-course di Nexterra memberikan saya pengetahuan yang sangat
                  aplikatif. Dengan belajar langsung dari praktisi, saya bisa
                  lebih percaya diri memulai usaha kecil-kecilan!”
                </p>
                <p className="font-semibold">- Fajar S., Mahasiswa Ekonomi</p>
              </div>
              <div className="bg-gray-800 rounded-md p-6">
                <p className="text-gray-300 italic mb-4">
                  “Saya sudah mengikuti beberapa webinar bisnis, dan Nexterra
                  adalah yang terbaik! Presentasi yang jelas dan pembahasan yang
                  mendalam membuat saya merasa siap untuk mengembangkan bisnis
                  saya. Sangat direkomendasikan!”
                </p>
                <p className="font-semibold">
                  - Lina Wijaya, Pemilik Startup Teknologi
                </p>
              </div>
              <div className="bg-gray-800 rounded-md p-6">
                <p className="text-gray-300 italic mb-4">
                  “Saya sudah mengikuti beberapa kursus online, tetapi Nexterra
                  memberikan pengalaman yang berbeda. Pembelajaran yang
                  sistematis dan mudah dicerna benar-benar membantu saya dalam
                  mengembangkan keterampilan profesional saya.”
                </p>
                <p className="font-semibold">
                  - Andi Setiawan, Karyawan dan Pengusaha Sampingan
                </p>
              </div>
              <div className="bg-gray-800 rounded-md p-6">
                <p className="text-gray-300 italic mb-4">
                  “Nexterra adalah solusi bagi saya yang ingin belajar bisnis
                  dan keterampilan digital dalam waktu singkat. Saya merasa
                  lebih siap menghadapi tantangan dan lebih percaya diri dalam
                  menjalankan usaha saya.”
                </p>
                <p className="font-semibold">
                  - Rina Pratiwi, Freelancer Digital Marketing
                </p>
              </div>
              <div className="bg-gray-800 rounded-md p-6">
                <p className="text-gray-300 italic mb-4">
                  “Setelah mengikuti beberapa webinar di Nexterra, saya mulai
                  merasa bahwa belajar bisa menyenangkan dan bermanfaat. Saya
                  berhasil mengaplikasikan banyak hal baru dalam pekerjaan dan
                  bisnis saya. Terima kasih Nexterra!”
                </p>
                <p className="font-semibold">
                  - Ari Susanto, Manajer Pemasaran
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-800 to-gray-600 py-20 md:py-32">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Belajar dengan Berani. Bertindak Nyata. Tumbuh ke Depan.
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Nexterra: Ekosistem pertumbuhan untuk para penggerak perubahan.
            </p>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              Mulai Belajar Sekarang
            </button>
          </div>
        </section>

        {/* Steps to Success Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              6 Langkah Belajar Terarah di Nexterra
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Kenali Tujuan & Kebutuhan Anda
                  </h3>
                  <p className="text-md">
                    Mulai dengan apa yang ingin Anda capai. Nexterra membantu
                    memetakan arah belajar Anda.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Pilih Jalur Pembelajaran yang Tepat
                  </h3>
                  <p className="text-md">
                    Insight Series, Digital Mastery, GrowthLab, atau Action Lab
                    - pilih sesuai gaya belajar Anda.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Akses Materi Fleksibel
                  </h3>
                  <p className="text-md">
                    Belajar kapan saja, di mana saja melalui platform digital
                    kami yang terstruktur.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Terapkan Ilmu Secara Bertahap
                  </h3>
                  <p className="text-md">
                    Setiap modul dilengkapi action point dan template untuk
                    penerapan langsung.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Dapatkan Feedback & Arahan Praktis
                  </h3>
                  <p className="text-md">
                    Sesi live, mentoring, dan review untuk membantu Anda
                    berkembang lebih jauh.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">
                  6
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Review & Konsisten Bertumbuh
                  </h3>
                  <p className="text-md">
                    Sistem modular untuk menyesuaikan jalur belajar dengan
                    perkembangan Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-gray-700 to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Mulai Belajar di Nexterra - Ini Langkahnya!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-semibold text-lg">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Buat Akun</h3>
                <p className="text-md">
                  Daftar gratis. Proses cepat, langsung siap eksplorasi!
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-semibold text-lg">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Lengkapi Profil</h3>
                <p className="text-md">
                  Isi data singkat agar kami bisa menyarankan jalur belajar
                  terbaik.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-semibold text-lg">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Pilih Program</h3>
                <p className="text-md">
                  Jelajahi Insight Series, Digital Mastery, GrowthLab, atau
                  Action Lab.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-semibold text-lg">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Klik Gabung</h3>
                <p className="text-md">
                  Satu klik untuk mulai upgrade skill dan wawasan kamu.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-semibold text-lg">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Selesaikan Pembayaran
                </h3>
                <p className="text-md">
                  Proses pembayaran cepat dan aman melalui sistem resmi.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-semibold text-lg">
                  6
                </div>
                <h3 className="text-lg font-semibold mb-2">Mulai Belajar</h3>
                <p className="text-md">
                  Nikmati materi eksklusif dan terapkan langsung!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Nexterra Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Tentang Nexterra
            </h2>
            <p className="text-lg mb-6 text-center italic">
              Learn Bold. Act Real. Grow Forward.
            </p>
            <p className="text-lg mb-6">
              Nexterra bukan sekadar platform belajar—kami adalah ekosistem
              pertumbuhan untuk para penggerak perubahan. Di tengah dunia yang
              terus berubah cepat, Nexterra hadir sebagai jembatan antara
              pengetahuan dan aksi nyata, membekali Anda dengan skill, mindset,
              dan strategi yang relevan untuk menjawab tantangan hari ini dan
              masa depan.
            </p>
            <p className="text-lg">
              Kami percaya, pembelajaran tidak harus rumit, tapi harus
              berdampak. Kami rancang setiap program dengan satu tujuan: membuat
              Anda berkembang secara terarah, terukur, dan berani bergerak.
            </p>
          </div>
        </section>

        {/* Program Overview Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-gray-700 to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Apa yang Kami Tawarkan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 flex items-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 text-xl">
                  📘
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Insight Series</h3>
                  <p className="text-md">Materi singkat untuk insight cepat.</p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 flex items-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 text-xl">
                  🎓
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Digital Mastery
                  </h3>
                  <p className="text-md">
                    Webinar langsung dari para praktisi.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 flex items-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 text-xl">
                  💻
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">GrowthLab</h3>
                  <p className="text-md">
                    Ecourse mendalam untuk skill yang terstruktur.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 flex items-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 text-xl">
                  👥
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Action Lab</h3>
                  <p className="text-md">
                    Ruang eksekusi untuk menerapkan ilmu secara langsung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Kami Hadir Untuk Anda
            </h2>
            <p className="text-lg text-center">
              Baik Anda seorang <span className="font-semibold">pengusaha</span>
              , <span className="font-semibold">profesional</span>,{" "}
              <span className="font-semibold">mahasiswa</span>, atau{" "}
              <span className="font-semibold">kreator mandiri</span> yang haus
              kemajuan, Nexterra adalah tempat Anda bertumbuh.
            </p>
            <p className="mt-6 text-lg text-center">
              Ini adalah tempat Anda membentuk versi terbaik dari diri Anda.
            </p>
          </div>
        </section>

        {/* Inspiration Section (Card Style) */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              {/* Gambar Leonardo da Vinci */}
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-md">
                <img
                  src={leodavinci} // Ganti dengan URL atau import gambar Anda
                  alt="Leonardo da Vinci"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Teks Inspirasi */}
              <div className="text-center md:text-left">
                <blockquote className="text-xl md:text-2xl italic mb-4">
                  “Learning never exhausts the mind.”
                </blockquote>
                <cite className="text-md text-gray-400">
                  - Leonardo da Vinci
                </cite>
                <p className="text-lg mt-6">
                  Beliau mengingatkan kita bahwa belajar adalah kekuatan tak
                  terbatas yang tidak akan pernah melelahkan pikiran kita,
                  justru malah akan memperkuatnya. Jika Anda merasa terjebak
                  dalam rutinitas atau stagnasi, mungkin itu saatnya untuk
                  menguji batasan Anda. Di Nexterra, kami menantang Anda untuk
                  belajar lebih, berpikir lebih, dan melampaui apa yang Anda
                  kira mungkin.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Kenapa harus mulai dari sekarang?
                </h3>
                <p className="text-lg mb-4">
                  Jangan biarkan ketakutan atau keraguan menghalangi Anda untuk
                  mengeksplorasi potensi Anda. Pikiran Anda tidak akan pernah
                  lelah belajar, justru Anda akan menemukan kekuatan baru setiap
                  kali Anda menambah pengetahuan. Ini adalah tantangan untuk
                  Anda yang siap melangkah keluar dari zona nyaman dan mengubah
                  masa depan Anda.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Tidak Ada Batasan untuk Belajar
                </h3>
                <p className="text-lg mb-4">
                  Di Nexterra, kami tidak hanya mengajarkan Anda teori, tapi
                  memberikan Anda tantangan nyata untuk diterapkan. Kami percaya
                  bahwa belajar adalah sebuah proses yang memperkuat otak, dan
                  setiap pelajaran adalah kesempatan untuk berkembang lebih
                  jauh. Apakah Anda siap untuk menguji kemampuan Anda?
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Pikiran Anda Hanya Akan Semakin Kuat
                </h3>
                <p className="text-lg mb-4">
                  Setiap keterampilan yang Anda pelajari di Nexterra bukan hanya
                  untuk menambah wawasan—ini adalah pelatihan mental yang akan
                  mengasah cara berpikir dan kemampuan Anda untuk memecahkan
                  masalah dengan cara yang belum pernah Anda bayangkan. Tidak
                  ada jalan yang mudah menuju kesuksesan, namun di Nexterra,
                  Anda akan dipersiapkan untuk melewati tantangan-tantangan
                  tersebut dengan kekuatan yang tak terbatas.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Siap untuk Menjadi Lebih Baik?
                </h3>
                <p className="text-lg mb-6">
                  Jika Anda berpikir bahwa Anda sudah tahu segalanya, mungkin
                  ini saatnya untuk mencoba sesuatu yang baru. Belajar bukan
                  hanya tentang menambah informasi, tapi tentang menantang diri
                  untuk terus berkembang. Mulailah di Nexterra, dan biarkan kami
                  membawa Anda lebih jauh dari yang pernah Anda bayangkan.
                </p>
                <p className="text-lg italic">
                  Belajar tidak akan pernah melelahkan Anda—justru, itu akan
                  mengubah Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-black to-gray-800 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6">
              Tertarik belajar lebih banyak dan berkembang?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Jelajahi berbagai edukasi baru untuk bisnismu dan pengembangan
              diri di Nexterra. Mulai perjalananmu dengan langkah kecil yang
              besar dampaknya!
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              <Link to="/feature">Lihat Semua Edukasi</Link>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500">
          <p>&copy; 2025 Nexterra. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default home;
