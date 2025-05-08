import React from "react";
import Navbar from "../components/navbar";
import FAQ from "../components/FAQ";
import logo from "../assets/img/icons/nexterra-white.png";
import { Link } from "react-router";
import leodavinci from "../assets/img/leodavinci.jpg";
import { ShieldExclamationIcon } from "@heroicons/react/24/outline";
import undraw1 from "../assets/img/undraw1.svg";
import undraw2 from "../assets/img/undraw2.svg";
import undraw3 from "../assets/img/undraw3.svg";
import undraw4 from "../assets/img/undraw4.svg";
import Ebook1 from "../assets/img/Ebook-1.jpeg";
import Ebook2 from "../assets/img/Ebook-2.jpeg";
import Ebook3 from "../assets/img/Ebook-3.jpeg";
import Ebook4 from "../assets/img/Ebook-4.jpeg";
import Ebook5 from "../assets/img/Ebook-5.jpeg";

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
            <div className="bg-gray-800 rounded-lg p-8 text-white text-center">
              <p className="mb-4">
                Di tengah derasnya informasi digital, hanya mereka yang mampu
                bertindaklah yang akan melangkah lebih jauh. Nexterra hadir
                untuk Anda—pengusaha yang ingin scale-up, karyawan yang ingin
                naik level, mahasiswa yang haus skill masa depan, atau kreator
                yang ingin membangun ekosistem digital yang kuat.
              </p>
              <p>
                Kami tidak hanya menyajikan teori. Kami membangun ekosistem
                belajar yang transformatif, aplikatif, dan berorientasi aksi
                nyata.
              </p>
            </div>
          </div>
        </section>
        {/* Problem Statement Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white">
              Banyak Belajar, Minim Aksi? Anda Tidak Sendirian.
            </h2>
            <ul className="list-none text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <li className="mb-4 flex items-center">
                <ShieldExclamationIcon className="h-6 w-6 mr-4 text-purple-500" />
                <span>Tahu teorinya, tapi bingung menerapkannya.</span>
              </li>
              <li className="mb-4 flex items-center">
                <ShieldExclamationIcon className="h-6 w-6 mr-4 text-purple-500" />
                <span>
                  Sudah ikut banyak kelas, tapi belum ada yang berubah.
                </span>
              </li>
              <li className="mb-4 flex items-center">
                <ShieldExclamationIcon className="h-6 w-6 mr-4 text-purple-500" />
                <span>
                  Merasa sibuk belajar, tapi sebenarnya hanya menumpuk
                  pengetahuan.
                </span>
              </li>
              <li className="mb-4 flex items-center">
                <ShieldExclamationIcon className="h-6 w-6 mr-4 text-purple-500" />
                <span>Terdistraksi oleh banyaknya pilihan belajar.</span>
              </li>
              <li className="mb-4 flex items-center">
                <ShieldExclamationIcon className="h-6 w-6 mr-4 text-purple-500" />
                <span>Kehilangan semangat karena tidak ada hasil nyata.</span>
              </li>
            </ul>
            <p className="mt-6 text-md md:text-lg text-center italic text-gray-300">
              Inilah fenomena “Overlearning, Underacting”. Jangan biarkan
              pengetahuan Anda hanya menjadi tumpukan catatan.
            </p>
            <p className="mt-6 text-md md:text-lg text-center text-gray-300">
              Di sisi lain, dunia terus bergerak. <br />
              Bisnis berubah, teknologi berkembang, dan kebutuhan pasar makin
              kompleks. Tanpa aksi nyata dan hasil konkret, pengetahuan hanya
              akan jadi tumpukan catatan—bukan alat untuk bertumbuh.
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
        <section className="py-20 bg-gradient-to-br from-purple-800 to-gray-600 text-center">
          <div className="container mx-auto">
            <p className="text-2xl text-gray-400 mb-8 font-bold">
              {" "}
              Di Nexterra, Anda tidak hanya belajar. <br />
              Anda bertumbuh, membangun, dan bergerak.
            </p>
            <h2 className="text-3xl font-semibold mb-6">
              Mari ubah wawasan jadi aksi, ubah potensi jadi pencapaian.
            </h2>
          </div>
        </section>
        {/* Value Proposition Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white">
              Nexterra: Tempat Ilmu Bekerja, Bukan Hanya Disimpan
            </h2>
            <p className="text-lg mb-6 text-center text-gray-300">
              Kami tahu, Anda tidak butuh motivasi kosong. <br />
              Anda butuh{" "}
              <span className="font-bold">
                strategi yang jelas, materi yang relevan,
              </span>{" "}
              dan {""}
              <span className="font-bold">
                panduan yang bisa diterapkan langsung.
              </span>{" "}
              <br />
              Itulah kenapa Nexterra tidak dibuat untuk semua orang. <br />
              Kami hadir untuk mereka yang serius ingin bertumbuh, bukan sekadar
              menambah daftar tontonan atau koleksi sertifikat.
            </p>
            <p className="text-lg mb-6 text-center text-gray-300">
              Di Nexterra, Anda akan menemukan pendekatan belajar yang berbeda:
            </p>
            <div className="p-6 flex flex-wrap justify-center items-stretch gap-4">
              <div className="bg-gray-800 rounded-md p-6 text-center text-white flex flex-col items-center w-full md:w-1/2 lg:w-1/4 h-full min-h-[80px]">
                <img
                  src={undraw1}
                  alt="Terstruktur"
                  className="w-28 h-20 mb-4"
                />
                <span className="font-bold text-lg mb-1">
                  Terstruktur, bukan acak-acakan.
                </span>
                <p className="text-sm">
                  Kami kurasi materi agar progres Anda punya arah, dari pemula
                  hingga tahap eksekusi.
                </p>
              </div>
              <div className="bg-gray-800 rounded-md p-6 text-center text-white flex flex-col items-center w-full md:w-1/2 lg:w-1/4 h-full min-h-[80px]">
                <img src={undraw2} alt="Aplikatif" className="w-28 h-20 mb-4" />
                <span className="font-bold text-lg mb-1">
                  Aplikatif, bukan hanya teoritis.
                </span>
                <p className="text-sm">
                  Setiap modul, webinar, dan ebook kami rancang dengan fokus
                  pada “apa yang bisa Anda lakukan setelah ini.”
                </p>
              </div>
              <div className="bg-gray-800 rounded-md p-6 text-center text-white flex flex-col items-center w-full md:w-1/2 lg:w-1/4 h-full min-h-[80px]">
                <img src={undraw3} alt="Sederhana" className="w-28 h-20 mb-4" />
                <span className="font-bold text-lg mb-1">
                  Sederhana tapi tajam.
                </span>
                <p className="text-sm">
                  Kami bantu Anda fokus pada hal yang berdampak, bukan tren
                  sesaat.
                </p>
              </div>
              <div className="bg-gray-800 rounded-md p-6 text-center text-white flex flex-col items-center w-full md:w-1/2 lg:w-1/4 h-full min-h-[80px]">
                <img src={undraw4} alt="Fleksibel" className="w-28 h-20 mb-4" />
                <span className="font-bold text-lg mb-1">
                  Fleksibel tapi tetap intens.
                </span>
                <p className="text-sm">
                  Belajar sesuai waktu Anda, tapi tetap ditantang untuk bergerak
                  maju.
                </p>
              </div>
            </div>
            <p className="mt-6 text-lg text-center text-gray-300">
              Lewat empat jalur utama pembelajaran,{" "}
              <span className="font-bold text-white">
                —Insight Series, Digital Mastery, GrowthLab, dan Action Lab—
              </span>{" "}
              kami membangun ekosistem yang memudahkan Anda bukan hanya{" "}
              <span className="font-bold text-white">
                belajar lebih banyak,
              </span>{" "}
              tapi{" "}
              <span className="font-bold text-white">
                bertindak lebih cepat.
              </span>
            </p>
            <p className="mt-6 text-lg text-center text-gray-300">
              Ini bukan soal menjadi yang paling pintar. <br />
              Ini tentang menjadi yang paling siap{" "}
              <span className="font-bold text-white">
                melangkah dan beradaptasi.
              </span>
              <br />
              Dan kami ada di sini, untuk bantu Anda bergerak ke sana. <br />
              <span className="font-bold text-white">
                Bukan nanti. Tapi mulai sekarang.
              </span>
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
              Setiap orang bisa belajar, tapi hanya mereka yang berani bertindak
              yang akan menciptakan hasil nyata.
            </p>
            <p className="text-lg md:text-xl mb-8">
              Di Nexterra, kami tidak menjanjikan jalan pintas. Tapi kami{" "}
              <span className="font-bold">
                menyediakan jalur yang tepat, sumber belajar yang relevan,
              </span>{" "}
              dan <span className="font-bold">dukungan nyata</span> agar Anda
              bisa naik level—dengan cara yang terukur, bertahap, dan bisa
              dipertanggungjawabkan.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mx-auto mb-5">
              <span className="w-[400px] bg-purple-100 rounded-full py-4 px-8 text-purple-700 font-bold text-lg text-center">
                Ingin strategi cepat & padat? <br />
                Mulai dari 📘 Insight Series.
              </span>
              <span className="w-[400px] bg-green-100 rounded-full py-4 px-8 text-green-700 font-bold text-lg text-center">
                Ingin diskusi langsung dengan praktisi? <br /> Ikuti 🎓 Digital
                Mastery.
              </span>
              <span className=" w-[400px] bg-yellow-100 rounded-full py-4 px-8 text-yellow-700 font-bold text-lg text-center">
                Siap mendalami skill secara sistematis? <br /> Masuk ke 💻
                GrowthLab.
              </span>
              <span className="w-[400px] bg-red-100 rounded-full py-4 px-8 text-red-700 font-bold text-lg text-center">
                Butuh arahan langsung & personal? <br /> Pilih 👥 Action Lab.
              </span>
              {/* Tambahkan badge/label lainnya di sini */}
            </div>
            <p className="text-lg md:text-xl mb-8">
              Tidak perlu menunggu semuanya sempurna. <br />
              <span className="font-bold">
                {" "}
                Cukup satu langkah hari ini, untuk hasil yang berbeda besok.{" "}
              </span>
            </p>
            <Link to={"/feature"}>
              <button className="mb-5 bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg">
                Jelajahi Program Nexterra Sekarang
              </button>
            </Link>
            <p className="text-lg md:text-xl mb-8">
              Karena belajar seharusnya tidak bikin ragu—tapi membuat Anda siap
              bergerak.
            </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
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
            </div>
            <p className="text-lg mb-6 text-center text-gray-300">
              <span className="font-bold">
                {" "}
                Tertarik belajar lebih banyak dan berkembang?
              </span>{" "}
              <br />
              Jelajahi berbagai edukasi baru untuk bisnismu dan pengembangan
              diri di Nexterra. Mulai perjalananmu dengan langkah kecil yang
              besar dampaknya!
            </p>
          </div>
        </section>

        <section className="product bg-gradient-to-br from-purple-800 to-gray-600">
          <div className="container mx-auto px-4">
            <section className="py-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Insight Series
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">
                    Mengenal Market dalam Marketing
                  </h3>
                  <img
                    src={Ebook1}
                    alt="Mengenal Market dalam Marketing"
                    className="w-full h-auto rounded-md mb-4"
                  />
                  <p className="text-gray-600 mb-4">
                    Kamu pikir marketing itu soal desain keren dan caption kece?
                    Salah besar. Semua jadi sia-sia kalau kamu belum ngerti satu
                    hal paling penting: market. Mau tahu kenapa banyak bisnis
                    gagal padahal promosinya jalan terus? Jawabannya ada di
                    sini..
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">E-book</span>
                    <span className="text-purple-800 font-bold">FREE</span>
                  </div>
                  <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Beli Sekarang
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">
                    Skill yang Nggak Diajarkan di Kampus tapi Dicari Perusahaan
                  </h3>
                  <img
                    src={Ebook5}
                    alt="Skill yang Nggak Diajarkan di Kampus tapi Dicari Perusahaan"
                    className="w-full h-auto rounded-md mb-4"
                  />
                  <p className="text-gray-600 mb-4">
                    Kuliah bertahun-tahun, skripsi berdarah-darah... tapi pas
                    lulus malah bingung kerja di mana? Ternyata, ada skill
                    penting yang nggak pernah diajarin kampus tapi jadi incaran
                    utama HRD. Jangan sampai kamu jadi korban sistem. Buka mata,
                    upgrade skill-mu sekarang!
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">E-book</span>
                    <span className="text-purple-800 font-bold">FREE</span>
                  </div>
                  <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Beli Sekarang
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">
                    Usaha Jalan tapi Ilegal: Bahaya yang Harus Dihindari
                  </h3>
                  <img
                    src={Ebook4}
                    alt="Usaha Jalan tapi Ilegal: Bahaya yang Harus Dihindari"
                    className="w-full h-auto rounded-md mb-4"
                  />
                  <p className="text-gray-600 mb-4">
                    Kelihatannya bisnis kamu aman, tapi gimana kalau ternyata
                    statusnya... ilegal? Banyak pelaku usaha nggak sadar mereka
                    sedang berjalan di jalur abu-abu. Jangan sampai kamu salah
                    satu yang akhirnya disikat aturan. Ini yang harus kamu
                    waspadai sebelum terlambat!
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">E-book</span>
                    <span className="text-purple-800 font-bold">FREE</span>
                  </div>
                  <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Beli Sekarang
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">
                    Mau Sukses? Berhenti Jadi Multitasker!
                  </h3>
                  <img
                    src={Ebook3}
                    alt="Mau Sukses? Berhenti Jadi Multitasker!"
                    className="w-full h-auto rounded-md mb-4"
                  />
                  <p className="text-gray-600 mb-4">
                    Multitasking itu keren? Justru itu jebakan! Makin banyak
                    yang kamu kerjain sekaligus, makin kecil peluang kamu buat
                    benar-benar berhasil. Mau tahu kenapa orang sukses justru
                    anti multitasking? Baca ini sebelum kamu terus kejebak sibuk
                    tapi nggak maju-maju.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">E-book</span>
                    <span className="text-purple-800 font-bold">FREE</span>
                  </div>
                  <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Beli Sekarang
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">
                    Karyawan tapi Punya Mimpi Bisnis? Langkah Awal Membangun
                    Usaha Tanpa Harus Resign Duluan
                  </h3>
                  <img
                    src={Ebook2}
                    alt="Karyawan tapi Punya Mimpi Bisnis?"
                    className="w-full h-auto rounded-md mb-4"
                  />
                  <p className="text-gray-600 mb-4">
                    Pengen punya bisnis tapi masih terjebak jam kantor 9-to-5?
                    Good news: kamu bisa mulai tanpa harus drama resign dulu.
                    Ini bukan motivasi kosong. ini strategi diam-diam para
                    pebisnis sukses yang dulunya juga karyawan. Mau tahu
                    caranya?
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">E-book</span>
                    <span className="text-purple-800 font-bold">FREE</span>
                  </div>
                  <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </section>

            <section className="py-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Digital Mastery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Strategi Pemasaran Digital 2024
                  </h3>
                  {/* Jika ada gambar untuk Webinar */}
                  <img
                    src="URL_WEBINAR_1"
                    alt="Strategi Pemasaran Digital 2024"
                    className="w-full h-auto rounded-md mb-4"
                  />
                  <p className="text-gray-600 mb-4">
                    Webinar pelatihan tentang tren dan strategi pemasaran
                    digital terkini.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Webinar</span>
                    <span className="text-green-800 font-bold">
                      Rp {`99000`}
                    </span>
                  </div>
                  <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Beli Sekarang
                  </button>
                </div>

                {/* Tambahkan card Webinar lainnya di sini */}
              </div>
            </section>
            <section className="py-8">
              <h2 className="text-2xl font-bold text-white mb-6">Growth Lab</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                    Mastering Tailwind CSS dalam 7 Hari
                  </h3>
                  {/* Jika ada trailer untuk E-course */}
                  <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden mb-4">
                    <iframe
                      src="URL_ECOURSE_1_TRAILER"
                      title="Trailer"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Kursus online intensif untuk menguasai Tailwind CSS dengan
                    cepat.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">E-course</span>
                    <span className="text-yellow-800 font-bold">
                      Rp {`149000`}
                    </span>
                  </div>
                  <button className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Beli Sekarang
                  </button>
                </div>

                {/* Tambahkan card E-course lainnya di sini */}
              </div>
            </section>
            <section className="py-8">
              <h2 className="text-2xl font-bold text-white mb-6">Action Lab</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-2">
                    Private Class Eksklusif
                  </h3>
                  {/* Mungkin tidak ada gambar/trailer khusus untuk private class */}
                  <p className="text-gray-600 mb-4">
                    lorem ipsum dolor sit amet parmet sir dolor paramet sir
                    tulur
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Private Class</span>
                    <span className="text-red-800 font-bold">
                      Rp {`129000`}
                    </span>
                  </div>
                  <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Beli Sekarang
                  </button>
                </div>

                {/* Tambahkan card Private Class lainnya di sini */}
              </div>
            </section>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-800 to-gray-600 py-20 md:py-32">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Belajar dengan Berani. Bertindak Nyata. <br />
              Tumbuh ke Depan.
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Nexterra: Ekosistem pertumbuhan untuk para penggerak perubahan.
            </p>
          </div>
        </section>
        {/* Steps to Success Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white">
              6 Langkah Belajar Terarah di Nexterra
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kolom Kiri (1-3) */}
              <div className="order-1">
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-white">
                      Kenali Tujuan & Kebutuhan Anda
                    </h3>
                    <p className="text-md text-gray-300">
                      Mulai dengan apa yang ingin Anda capai. Nexterra membantu
                      memetakan arah belajar Anda.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-white">
                      Pilih Jalur Pembelajaran yang Tepat
                    </h3>
                    <p className="text-md text-gray-300">
                      Insight Series, Digital Mastery, GrowthLab, atau Action
                      Lab - pilih sesuai gaya belajar Anda.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-white">
                      Akses Materi Fleksibel
                    </h3>
                    <p className="text-md text-gray-300">
                      Belajar kapan saja, di mana saja melalui platform digital
                      kami yang terstruktur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Kolom Kanan (4-6) */}
              <div className="order-2">
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-white">
                      Terapkan Ilmu Secara Bertahap
                    </h3>
                    <p className="text-md text-gray-300">
                      Setiap modul dilengkapi action point dan template untuk
                      penerapan langsung.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-white">
                      Dapatkan Feedback & Arahan Praktis
                    </h3>
                    <p className="text-md text-gray-300">
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
                    <h3 className="text-lg font-semibold mb-1 text-white">
                      Review & Konsisten Bertumbuh
                    </h3>
                    <p className="text-md text-gray-300">
                      Sistem modular untuk menyesuaikan jalur belajar dengan
                      perkembangan Anda.
                    </p>
                  </div>
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
              {/* Gambar Leonardo da Vinci yang Lebih Besar */}
              <div className="w-64 h-auto md:w-80 md:h-auto overflow-hidden shadow-md">
                <img
                  src={leodavinci} // Ganti dengan URL atau import gambar Anda
                  alt="Leonardo da Vinci"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Teks Inspirasi */}
              <div className="text-center md:text-left">
                <blockquote className="text-xl md:text-2xl italic mb-4 text-white">
                  “Learning never exhausts the mind.”
                </blockquote>
                <cite className="text-md text-gray-400">
                  - Leonardo da Vinci
                </cite>
                <p className="text-lg mt-6 text-gray-300 leading-relaxed">
                  Beliau mengingatkan kita bahwa belajar adalah kekuatan tak
                  terbatas yang tidak akan pernah melelahkan pikiran kita,
                  justru malah akan memperkuatnya. Jika Anda merasa terjebak
                  dalam rutinitas atau stagnasi, mungkin itu saatnya untuk
                  menguji batasan Anda. Di Nexterra, kami menantang Anda untuk
                  belajar lebih, berpikir lebih, dan melampaui apa yang Anda
                  kira mungkin.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2 text-white">
                  Kenapa harus mulai dari sekarang?
                </h3>
                <p className="text-lg mb-4 text-gray-300 leading-relaxed">
                  Jangan biarkan ketakutan atau keraguan menghalangi Anda untuk
                  mengeksplorasi potensi Anda. Pikiran Anda tidak akan pernah
                  lelah belajar, justru Anda akan menemukan kekuatan baru setiap
                  kali Anda menambah pengetahuan. Ini adalah tantangan untuk
                  Anda yang siap melangkah keluar dari zona nyaman dan mengubah
                  masa depan Anda.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2 text-white">
                  Tidak Ada Batasan untuk Belajar
                </h3>
                <p className="text-lg mb-4 text-gray-300 leading-relaxed">
                  Di Nexterra, kami tidak hanya mengajarkan Anda teori, tapi
                  memberikan Anda tantangan nyata untuk diterapkan. Kami percaya
                  bahwa belajar adalah sebuah proses yang memperkuat otak, dan
                  setiap pelajaran adalah kesempatan untuk berkembang lebih
                  jauh. Apakah Anda siap untuk menguji kemampuan Anda?
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2 text-white">
                  Pikiran Anda Hanya Akan Semakin Kuat
                </h3>
                <p className="text-lg mb-4 text-gray-300 leading-relaxed">
                  Setiap keterampilan yang Anda pelajari di Nexterra bukan hanya
                  untuk menambah wawasan—ini adalah pelatihan mental yang akan
                  mengasah cara berpikir dan kemampuan Anda untuk memecahkan
                  masalah dengan cara yang belum pernah Anda bayangkan. Tidak
                  ada jalan yang mudah menuju kesuksesan, namun di Nexterra,
                  Anda akan dipersiapkan untuk melewati tantangan-tantangan
                  tersebut dengan kekuatan yang tak terbatas.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2 text-white">
                  Siap untuk Menjadi Lebih Baik?
                </h3>
                <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                  Jika Anda berpikir bahwa Anda sudah tahu segalanya, mungkin
                  ini saatnya untuk mencoba sesuatu yang baru. Belajar bukan
                  hanya tentang menambah informasi, tapi tentang menantang diri
                  untuk terus berkembang. Mulailah di Nexterra, dan biarkan kami
                  membawa Anda lebih jauh dari yang pernah Anda bayangkan.
                </p>
                <p className="text-lg italic text-gray-300">
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
