import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {moneyFormat} from "../../helpers/index";

export default function CardTambahLaba() {
  const [total_pemasukan, setTotalPemasukan] = useState("");
  const [total_pengeluaran, setTotalPengeluaran] = useState("");
  const [total_laba, setTotalLaba] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();

  useEffect(() => {
    const calculateTotalLaba = () => {
      if (total_pemasukan && total_pengeluaran) {
        const laba = parseFloat(total_pemasukan) - parseFloat(total_pengeluaran);
        setTotalLaba(laba.toFixed(2));
      } else {
        setTotalLaba("");
      }
    };

    calculateTotalLaba();
  }, [total_pemasukan, total_pengeluaran]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!total_pemasukan || !total_pengeluaran || !date) {
      alert("Semua data harus diisi");
    } else {
      fetch("/api/hitung/create", {
        method: "POST",
        body: JSON.stringify({
          total_pemasukan: total_pemasukan,
          total_pengeluaran: total_pengeluaran,
          total_laba: total_laba,
          date: date,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            alert("Berhasil menambahkan data Amount");
            router.push("/admin/dashboard");
          } else {
            alert("Gagal menambahkan dashboard");
          }
        });
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Hitung Laba/Rugi</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleAdd}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pemasukan
                  </label>
                  <input
                    type="text"
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setTotalPemasukan(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pengeluaran
                  </label>
                  <input
                    type="number"
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setTotalPengeluaran(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Tanggal
                  </label>
                  <input
                    type="date"
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Laba/Rugi
                  </label>
                  <input
                    type="number"
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={total_laba}
                    disabled
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
