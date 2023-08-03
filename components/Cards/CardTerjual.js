import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {moneyFormat} from "../../helpers/index";
// components

export default function CardTerjual() {
  const router = useRouter();
  const [product_id, setProduct_id] = useState("");
  const [product, setProduct] = useState([]);
  const [pelanggan_id, setPelanggan_id] = useState("");
  const [pelanggan, setPelanggan] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [harga, setHarga] = useState("");
  const [pembayaran, setPembayaran] = useState("");
  const [sisa, setSisa] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [invove, setInvove] = useState("");
  const [total, setTotal] = useState(0)
  const [error, setError] = useState("");

  const fetchProduk = () => {
    fetch("/api/produk/all", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setProduct(res.data);
        } else {
          alert("Gagal mengambil data");
          console.log(res);
        }
      });
  };
  const fetchPelanggan = () => {
    fetch("/api/pelanggan/all", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setPelanggan(res.data);
        } else {
          alert("Gagal mengambil data");
          console.log(res);
        }
      });
  };

  const handleClear = (e) => {
    e.preventDefault();
    setProduct_id("");
    setPelanggan_id("");
    setQuantity("");
    setDate("");
    setHarga("");
    setPembayaran("");
    setSisa("");
    setKeterangan("");
    setInvove("");
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const data ={
      product_id : product_id,
      pelanggan_id : pelanggan_id,
      quantity : parseInt(quantity),
      total : parseInt(total),
      date : date,
      harga : parseInt(harga),
      pembayaran : parseInt(pembayaran),
      sisa : parseInt(sisa),
      keterangan : keterangan,
      invove : invove,
    }
    fetch("/api/jual/create", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        alert("Berhasil menambahkan data");
        handleClear(e);
        router.push("/admin/transaksi-terjual");
      } else {
        alert("Gagal menambahkan data");
        console.log(res);
      }
    });
  };

  const calculateTotal = () => {
    const hargaBarang = parseInt(harga) || 0;
    const quantityValue = parseInt(quantity) || 0;
    const calculatedTotal = hargaBarang * quantityValue;
    setTotal(calculatedTotal);
  };

  useEffect(() => {
    calculateTotal();
  }, [harga, quantity]);




  useEffect(() => {
    fetchProduk();
    fetchPelanggan();
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Terjual</h6>
            <a
              href="/admin/tambah-pelanggan"
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Tambah Pelanggan
            </a>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form onSubmit={handleAdd}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pilih Pelanggan
                  </label>
                  <select
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={pelanggan_id}
                    onChange={(e) => setPelanggan_id(e.target.value)}
                  >
                    <option value="">Pilih Pelanggan</option>
                    {pelanggan.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pilih Produk
                  </label>
                  <select
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={product_id}
                    onChange={(e) => setProduct_id(e.target.value)}
                  >
                    <option value="">Pilih produk</option>
                    {product.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.product_name} - Stock {item.product_stock} - Rp.
                        {moneyFormat(item.product_price)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pengiriman
                  </label>
                  <input
                    type="date"
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Harga /KG
                  </label>
                  <input
                    type="number"
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Harga"
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Jumlah Karung (QTY)
                  </label>
                  <input
                    type="number"
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Jumlah Karung"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Invoice Karung
                  </label>
                  <input
                    type="number"
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Invoice Karung"
                    value={invove}
                    onChange={(e) => setInvove(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pembayaran
                  </label>
                  <input
                    type="number"
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Pembayaran"
                    value={pembayaran}
                    onChange={(e) => setPembayaran(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Sisa Hutang
                  </label>
                  <input
                    type="number"
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Sisa Hutang"
                    value={sisa}
                    onChange={(e) => setSisa(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Keterangan
                  </label>
                  <input
                    type="textarea"
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Keterangan"
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Total :
                  </label>
                  <h3 className="text-blueGray-700 text-xl font-bold" onChange={(e) => setTotal(e.target.value)}>
                    Rp. {total}
                  </h3>
                </div>
              </div>
              {error && (
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <span className="text-red-500 text-sm">{error}</span>
                  </div>
                </div>
              )}
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
