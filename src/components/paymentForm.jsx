import React, { useState } from "react";

const PaymentForm = () => {
  const [productType, setProductType] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = async () => {
    // Di sini Anda akan mengimplementasikan logika untuk
    // mengirim data ke backend Anda untuk membuat transaksi Midtrans.
    // Setelah mendapatkan response dari backend (snapToken),
    // Anda akan memanggil `window.snap.pay(snapToken)`.

    // Contoh data produk (sesuaikan dengan implementasi backend Anda)
    const orderData = {
      productType,
      productName,
      price: parseInt(price),
    };

    console.log("Data Produk:", orderData);
    console.log("Metode Pembayaran:", paymentMethod);

    // Simulasi mendapatkan snapToken (ganti dengan pemanggilan API ke backend)
    const snapToken = "YOUR_SNAP_TOKEN"; // Ganti dengan token sebenarnya dari backend

    if (snapToken) {
      window.snap.pay(snapToken, {
        onSuccess: function (result) {
          console.log("success");
          console.log(result);
          // Redirect atau tampilkan pesan sukses
        },
        onPending: function (result) {
          console.log("pending");
          console.log(result);
          // Tampilkan pesan menunggu pembayaran
        },
        onError: function (result) {
          console.log("error");
          console.log(result);
          // Tampilkan pesan error
        },
        onClose: function () {
          console.log(
            "customer closed the popup without finishing the payment"
          );
          // Handle ketika pengguna menutup popup tanpa menyelesaikan pembayaran
        },
      });
    } else {
      console.error("Gagal mendapatkan Snap Token dari backend.");
      // Tampilkan pesan error gagal mendapatkan token
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="productType"
          className="block text-sm font-medium text-gray-700"
        >
          Jenis Produk
        </label>
        <select
          id="productType"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
        >
          <option value="">Pilih Jenis Produk</option>
          <option value="e-course">E-Course</option>
          <option value="webinar">Webinar</option>
          <option value="private-class">Private Class</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="productName"
          className="block text-sm font-medium text-gray-700"
        >
          Nama Produk
        </label>
        <input
          type="text"
          id="productName"
          className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Harga
        </label>
        <input
          type="number"
          id="price"
          className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="paymentMethod"
          className="block text-sm font-medium text-gray-700"
        >
          Metode Pembayaran
        </label>
        <select
          id="paymentMethod"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Pilih Metode Pembayaran</option>
          {/* Anda bisa menambahkan opsi pembayaran dinamis dari backend */}
          <option value="credit_card">Kartu Kredit</option>
          <option value="bank_transfer">Transfer Bank</option>
          <option value="gopay">GoPay</option>
          {/* ... tambahkan opsi lain sesuai kebutuhan */}
        </select>
      </div>
      <div>
        <button
          type="button"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          onClick={handlePayment}
        >
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
