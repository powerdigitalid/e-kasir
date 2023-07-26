import React from "react";
import { signIn } from "next-auth/react";
import Auth from "layouts/Auth";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { moneyFormat } from "../../helpers/index";
// components

export default function CardTablePelanggan({ color }) {
  const [transaksi, setTransaksi] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signIn("google", { callbackUrl: `${window.location.origin}/dashboard` });
  };

  const fetchTransaksi = () => {
    fetch("/api/transaksi/jual", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setTransaksi(res.data);
          setLoading(false);
        } else {
          alert("Gagal mengambil data");
          console.log(res);
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`/api/transaksi/actionJual?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          alert("Berhasil menghapus transaksi beli");
          fetchTransaksi();
        } else {
          alert("Gagal menghapus transaksi beli");
        }
      });
  };

  useEffect(() => {
    fetchTransaksi();
  }, []);
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Tabel Pelanggan
            </h6>
            <div className="relative flex w-96 flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
            <button
              onClick={handleGoogleLogin}
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Login With Google
            </button>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  No
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Nama Pelanggan
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Nama Produk
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Pengiriman
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Harga /KG
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Jumlah Karung
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Invoice Karung
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Pembayaran
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Sisa Hutang
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Total Harga
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Keterangan
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
            {transaksi.length > 0 ? (
              transaksi.map((item, index) => (
                <tbody>
                  <tr key={index}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {index + 1}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {new Date(item.date).toLocaleDateString()}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {item.product.product_name}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {item.quantity}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {moneyFormat(item.total)}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {moneyFormat(item.total)}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {moneyFormat(item.total)}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {moneyFormat(item.total)}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {moneyFormat(item.total)}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {moneyFormat(item.total)}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {moneyFormat(item.total)}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      <button
                        className="bg-red-700 active:bg-red-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => handleDelete(item.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <tbody>
                <tr>
                  <td colSpan="12" className="text-center p-4">
                    Tidak ada data
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}

CardTablePelanggan.defaultProps = {
  color: "light",
};

CardTablePelanggan.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
