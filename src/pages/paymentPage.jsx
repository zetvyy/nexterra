import React from "react";
import PaymentForm from "../components/paymentForm";
const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 to-gray-600 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-lg p-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Pembayaran
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Pilih metode pembayaran dan selesaikan transaksi Anda.
          </p>
        </div>
        <PaymentForm />
      </div>
    </div>
  );
};

export default PaymentPage;
