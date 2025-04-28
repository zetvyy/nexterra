import React, { useState } from "react";
import addIcon from "../assets/img/icons/add.svg";

const FAQ = () => {
  const faqData = [
    {
      id: "faq-1",
      question: "Apa itu Nexterra?",
      answer:
        "Nexterra adalah platform pembelajaran digital yang menyediakan eBook gratis, webinar, dan ecourse praktis untuk membantu pengusaha, mahasiswa, karyawan, dan wiraswasta mengembangkan skill dan bisnis mereka.",
    },
    {
      id: "faq-2",
      question: "Apakah semua materi di Nexterra gratis?",
      answer:
        "Banyak materi kami tersedia secara gratis, terutama eBook dan beberapa webinar. Untuk materi premium seperti ecourse tertentu, ada biaya yang sangat terjangkau.",
    },
    {
      id: "faq-3",
      question: "Siapa saja yang bisa ikut belajar di Nexterra?",
      answer:
        "Semua orang! Mulai dari pemilik bisnis, mahasiswa yang ingin upgrade skill, karyawan yang ingin naik level, hingga siapa pun yang ingin terus berkembang.",
    },
    {
      id: "faq-4",
      question: "Apakah saya bisa mendapatkan sertifikat?",
      answer:
        "Untuk beberapa webinar dan ecourse, ya, tersedia sertifikat. Informasi tentang sertifikat akan dicantumkan di masing-masing halaman produk.",
    },
    {
      id: "faq-5",
      question: "Bagaimana cara mengikuti webinar atau mengunduh eBook?",
      answer:
        "Cukup daftar di website Nexterra, lengkapi data pribadi, dan kamu bisa langsung akses semua materi yang tersedia di akunmu.",
    },
    {
      id: "faq-6",
      question: "Apakah bisa refund jika saya berubah pikiran?",
      answer:
        "Tidak bisa. Karena seluruh produk digital langsung bisa diakses setelah pembayaran. Kecuali terjadi double transaksi, maka kamu berhak mendapat refund penuh.",
    },
    {
      id: "faq-7",
      question: "Apakah data pribadi saya aman?",
      answer:
        "Tentu! Kami menjaga data pribadi kamu sesuai dengan kebijakan privasi. Data hanya digunakan untuk keperluan layanan, dan tidak akan dibagikan ke pihak lain.",
    },
  ];

  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section
      id="FAQ"
      className="max-w-[1200px] mx-auto flex flex-col py-[70px] px-[20px] md:px-[100px]"
    >
      <div className="flex justify-between items-start lg:items-center flex-col lg:flex-row gap-[50px] lg:gap-0">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col">
            <h2 className="font-bold text-white text-[36px] leading-[52px]">
              Get Your Answers
            </h2>
            <p className="text-lg text-gray-400">
              It’s time to upgrade skills without limits!
            </p>
          </div>
          <a
            href="#" // Tambahkan link yang sesuai
            className="text-white font-semibold rounded-[30px] p-[16px_32px] bg-indigo-600 transition-all duration-300 hover:shadow-[0_10px_20px_0_rgba(75,123,255,0.5)] w-fit"
          >
            Contact Our Sales
          </a>
        </div>
        <div className="flex flex-col gap-[20px] w-full lg:w-[552px] shrink-0">
          {faqData.map((faqItem) => (
            <div
              key={faqItem.id}
              className={`flex flex-col p-5 rounded-2xl bg-gray-800 border-t-4 border-indigo-600 w-full ${
                activeAccordion === faqItem.id ? "" : ""
              }`}
            >
              <button
                className="accordion-button flex justify-between gap-3 items-center w-full text-left text-white"
                onClick={() => toggleAccordion(faqItem.id)}
                aria-expanded={activeAccordion === faqItem.id}
                aria-controls={faqItem.id}
              >
                <span className="font-semibold text-lg">
                  {faqItem.question}
                </span>
                <div
                  className={`arrow w-9 h-9 flex shrink-0 transition-transform duration-300 ${
                    activeAccordion === faqItem.id ? "rotate-45" : ""
                  }`}
                >
                  <img src={addIcon} alt="icon" className="invert" />
                </div>
              </button>
              <div
                id={faqItem.id}
                className={`accordion-content overflow-hidden transition-max-h duration-300 ease-in-out ${
                  activeAccordion === faqItem.id
                    ? "max-h-[500px] mt-3"
                    : "max-h-0"
                }`}
              >
                <p className="leading-[30px] text-gray-400 pt-[10px]">
                  {faqItem.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
