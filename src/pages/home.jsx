import React from "react";
import Navbar from "../components/navbar";
import FAQ from "../components/FAQ";
import logo from "../assets/img/icons/nexterra-white.png";
import { Link } from "react-router";

const home = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-900 text-white font-sans">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-purple-800 to-grey-600">
          <div className="container mx-auto text-center">
            <img src={logo} className="w-64 mx-auto mb-6" alt="logo" />

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Platform pembelajaran digital untuk mengembangkan skill dan bisnis
              Anda.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              <Link to="/feature">Jelajahi Edukasi</Link>
            </button>
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
