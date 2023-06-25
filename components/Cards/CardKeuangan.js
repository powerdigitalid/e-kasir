/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function CardKeuangan() {
  const router = useRouter();
  const [jumlah_uang, setJumlah_uang] = useState("");
  const [pembayaran, setPembayaran] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [date, setDate] = useState("");
  const [type_id, setType_id] = useState("");
  const [type, setType] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchType = () => {
    fetch("/api/keuangan/type", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setType(res.data);
        } else {
          alert("Gagal mengambil data");
          console.log(res);
        }
      });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const data = {
      jumlah_uang: jumlah_uang,
      pembayaran: pembayaran,
      keterangan: keterangan,
      type_id: type_id,
      date: new Date(),
    };
    if (!jumlah_uang || !pembayaran || !keterangan || !type_id) {
      alert("Semua data harus diisi");
    } else {
      fetch("/api/keuangan/create", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            alert("Berhasil menambahkan keuangan");
            setLoading(true);
            router.push("/admin/transaksi-keuangan");
          } else {
            alert("Gagal menambahkan keuangan");
            console.log(res);
          }
        });
    }
  };

  useEffect(() => {
    fetchType();
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Keuangan</h6>
            <a
              href="/admin/tambah-tipe-transaksi"
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Tambah Tipe Transaksi
            </a>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleAdd}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-3/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Jumlah Uang
                  </label>
                  <input
                    type="number"
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={jumlah_uang}
                    onChange={(e) => setJumlah_uang(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-3/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pilih Tipe Transaksi
                  </label>
                  <select
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setType_id(e.target.value)}
                  >
                    <option value="">Pilih Tipe Transaksi</option>
                    {type.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.type_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-3/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pilih Mode Transaksi
                  </label>
                  <select
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={pembayaran}
                    onChange={(e) => setPembayaran(e.target.value)}
                  >
                    <option value="">Pilih Mode Transaksi</option>
                    <option value={'Cash'}>Cash</option>
                    <option value={'Transfer'}>Transfer</option>
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-3/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Keterangan
                  </label>
                  <input
                    type="text"
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Tambahkan
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
