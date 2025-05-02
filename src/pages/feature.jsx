import React from "react";
import Navbar from "../components/Navbar";
import Ebook1 from "../assets/img/Ebook-1.jpeg";
import Ebook2 from "../assets/img/Ebook-2.jpeg";
import Ebook3 from "../assets/img/Ebook-3.jpeg";
import Ebook4 from "../assets/img/Ebook-4.jpeg";
import Ebook5 from "../assets/img/Ebook-5.jpeg";

const ProductCard = ({ title, description, type, price, image, trailer }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold text-purple-800 mb-2">{title}</h3>
    {type === "E-book" && image && (
      <img src={image} alt={title} className="w-full h-auto rounded-md mb-4" />
    )}
    {type === "E-course" && trailer && (
      <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden mb-4">
        <iframe
          src={trailer}
          title="Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )}
    {type === "Webinar" && image && (
      <img src={image} alt={title} className="w-full h-auto rounded-md mb-4" />
    )}
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500">{type}</span>
      <span className="text-purple-800 font-bold">
        {type === "E-book" ? "FREE" : `Rp ${price.toLocaleString()}`}
      </span>
    </div>
    <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
      Beli Sekarang
    </button>
  </div>
);

const ProductSection = ({ title, products }) => (
  <section className="py-8">
    <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </section>
);

const feature = () => {
  const products = [
    {
      title: "Mengenal Market dalam Marketing",
      description:
        "Kamu pikir marketing itu soal desain keren dan caption kece? Salah besar. Semua jadi sia-sia kalau kamu belum ngerti satu hal paling penting: market. Mau tahu kenapa banyak bisnis gagal padahal promosinya jalan terus? Jawabannya ada di sini..",
      type: "E-book",
      price: 0,
      image: `${Ebook1}`,
    },
    {
      title: "Skill yang Nggak Diajarkan di Kampus tapi Dicari Perusahaan",
      description:
        "Kuliah bertahun-tahun, skripsi berdarah-darah... tapi pas lulus malah bingung kerja di mana? Ternyata, ada skill penting yang nggak pernah diajarin kampus tapi jadi incaran utama HRD. Jangan sampai kamu jadi korban sistem. Buka mata, upgrade skill-mu sekarang!",
      type: "E-book",
      price: 0,
      image: `${Ebook5}`,
    },
    {
      title: "Usaha Jalan tapi Ilegal: Bahaya yang Harus Dihindari",
      description:
        "Kelihatannya bisnis kamu aman, tapi gimana kalau ternyata statusnya... ilegal? Banyak pelaku usaha nggak sadar mereka sedang berjalan di jalur abu-abu. Jangan sampai kamu salah satu yang akhirnya disikat aturan. Ini yang harus kamu waspadai sebelum terlambat!",
      type: "E-book",
      price: 0,
      image: `${Ebook4}`,
    },
    {
      title: "Mau Sukses? Berhenti Jadi Multitasker!",
      description:
        "Multitasking itu keren? Justru itu jebakan! Makin banyak yang kamu kerjain sekaligus, makin kecil peluang kamu buat benar-benar berhasil. Mau tahu kenapa orang sukses justru anti multitasking? Baca ini sebelum kamu terus kejebak sibuk tapi nggak maju-maju.",
      type: "E-book",
      price: 0,
      image: `${Ebook3}`,
    },
    {
      title:
        "Karyawan tapi Punya Mimpi Bisnis? Langkah Awal Membangun Usaha Tanpa Harus Resign Duluan",
      description:
        "Pengen punya bisnis tapi masih terjebak jam kantor 9-to-5? Good news: kamu bisa mulai tanpa harus drama resign dulu. Ini bukan motivasi kosong. ini strategi diam-diam para pebisnis sukses yang dulunya juga karyawan. Mau tahu caranya?",
      type: "E-book",
      price: 0,
      image: `${Ebook2}`,
    },
    {
      title: "Mastering Tailwind CSS dalam 7 Hari",
      description:
        "Kursus online intensif untuk menguasai Tailwind CSS dengan cepat.",
      type: "E-course",
      price: 149000,
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Contoh URL YouTube
    },
    {
      title: "Strategi Pemasaran Digital 2024",
      description:
        "Webinar pelatihan tentang tren dan strategi pemasaran digital terkini.",
      type: "Webinar",
      price: 99000,
      image:
        "https://via.placeholder.com/300x200/718096/fff?Text=Digital+Marketing+Webinar",
    },
    {
      title: "Advanced React Hooks",
      description:
        "Mempelajari penggunaan React Hooks tingkat lanjut untuk state management dan side effects.",
      type: "E-course",
      price: 199000,
      trailer: "https://www.youtube.com/embed/ysz5MSm_F3w", // Contoh URL YouTube lainnya
    },
    {
      title: "Rahasia Meningkatkan Penjualan dengan SEO",
      description:
        "Webinar pelatihan tentang optimasi mesin pencari (SEO) untuk meningkatkan penjualan.",
      type: "Webinar",
      price: 129000,
      image: "https://via.placeholder.com/300x200/4a5568/fff?Text=SEO+Webinar",
    },
    {
      title: "Private Class Eksklusif",
      description:
        "lorem ipsum dolor sit amet parmet sir dolor paramet sir tulur",
      price: 129000,
      type: "Private Class",
      image: "https://via.placeholder.com/300x200/4a5568/fff?Text=SEO+Webinar",
    },
  ];

  const ebooks = products.filter((product) => product.type === "E-book");
  const webinars = products.filter((product) => product.type === "Webinar");
  const ecourses = products.filter((product) => product.type === "E-course");
  const privateClasses = products.filter(
    (product) => product.type === "Private Class"
  );

  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-r from-purple-800 to-gray-600 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            4 Pilar pembelajaran utama di Nexterra
          </h1>

          {ebooks.length > 0 && (
            <ProductSection title="Insight Series" products={ebooks} />
          )}

          {webinars.length > 0 && (
            <ProductSection title="Digital Mastery" products={webinars} />
          )}

          {ecourses.length > 0 && (
            <ProductSection title="Growth Lab" products={ecourses} />
          )}

          {privateClasses.length > 0 && (
            <ProductSection title="Action Lab" products={privateClasses} />
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 bg-gray-800">
        <p>&copy; 2025 Nexterra. All rights reserved.</p>
      </footer>
    </>
  );
};

export default feature;
