import React from "react";
import PropTypes from "prop-types";
import {useState, useEffect} from 'react'
import {moneyFormat} from "../../helpers/index";
// components

export default function CardTableTerjual({ color }) {
  const [transaksi, setTransaksi] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchTransaksi = () => {
    fetch("/api/jual/all", {
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
    fetch(`/api/jual/delete?id=${id}`, {
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
    })
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
              Tabel Transksi Terjual
            </h6>
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
              <tbody>
                {transaksi.slice(0).reverse().map((item, index) => (
                  <tr key={index}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {index + 1}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {item.pelanggan.name}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {item.product.product_name}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {item.date}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {moneyFormat(item.harga)}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {item.quantity}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {item.invove}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {moneyFormat(item.pembayaran)}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {moneyFormat(item.sisa)}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {moneyFormat(item.total)}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                      {item.keterangan}
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
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan="6" className="text-center p-4">
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

CardTableTerjual.defaultProps = {
  color: "light",
};

CardTableTerjual.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
