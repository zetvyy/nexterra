import React, { useState } from "react";
import logo from "../assets/img/icons/nexterra.png";
import { Link } from "react-router";

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerData, setRegisterData] = useState({
    nama: "",
    email: "",
    nomorTelepon: "",
    domisili: "",
    password: "",
    confirmPassword: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Lakukan logika pendaftaran di sini (misalnya, kirim data ke server)
    console.log("Data Registrasi:", registerData);
    // Reset form setelah pendaftaran berhasil (opsional)
    setRegisterData({
      nama: "",
      email: "",
      nomorTelepon: "",
      domisili: "",
      password: "",
      confirmPassword: "",
    });
    setIsRegistering(false); // Kembali ke halaman login setelah berhasil (opsional)
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Lakukan logika login di sini (misalnya, kirim data ke server dan verifikasi)
    console.log("Data Login:", loginData);
    // Reset form setelah login (opsional)
    setLoginData({
      email: "",
      password: "",
    });
    // Redirect ke halaman utama atau dashboard setelah login berhasil (biasanya dilakukan di sini)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-gray-600 flex items-center justify-center py-12">
      <div className="bg-gray-100 shadow-md rounded-lg px-8 py-10 w-full max-w-md">
        {/* Area untuk Logo Perusahaan */}
        <div className="flex justify-center mb-6">
          <div className="w-[10rem] h-20 flex items-center justify-center text-gray-600 font-bold text-xl">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isRegistering ? "Buat Akun Baru" : "Masuk"}
        </h2>

        {isRegistering ? (
          <form onSubmit={handleRegisterSubmit}>
            <div className="mb-4">
              <label
                htmlFor="nama"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nama
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={registerData.nama}
                onChange={handleRegisterChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="nomorTelepon"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nomor Telepon
              </label>
              <input
                type="tel"
                id="nomorTelepon"
                name="nomorTelepon"
                value={registerData.nomorTelepon}
                onChange={handleRegisterChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="domisili"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Domisili
              </label>
              <input
                type="text"
                id="domisili"
                name="domisili"
                value={registerData.domisili}
                onChange={handleRegisterChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Konfirmasi Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Daftar
              </button>
              <button
                className="inline-block align-baseline font-semibold text-sm text-purple-500 hover:text-purple-800"
                onClick={() => setIsRegistering(false)}
                type="button"
              >
                Sudah punya akun? Masuk
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Masuk
              </button>
              <button
                className="inline-block align-baseline font-semibold text-sm text-purple-500 hover:text-purple-800"
                onClick={() => setIsRegistering(true)}
                type="button"
              >
                Buat akun baru
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
