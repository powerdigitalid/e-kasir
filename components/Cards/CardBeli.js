import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// components

export default function CardBeli() {
  const router = useRouter();
  const [product_id, setProduct_id] = useState("");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");

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

  const handleAdd = (e) => {
    e.preventDefault();
    const data = {
      product_id: product_id,
      quantity: product.data + quantity,
      total: quantity * product.product_price,
    };
    if (!product_id || !quantity) {
      alert("Semua data harus diisi");
    } else {
      fetch("/api/transaksi/beli", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            alert("Berhasil menambahkan transaksi");
            setLoading(true);
          } else {
            alert("Gagal menambahkan transaksi");
            console.log(res);
          }
        });
    }
  };

  useEffect(() => {
    fetchProduk();
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Beli</h6>
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
                    Pilih produk
                  </label>
                  <select className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  onChange={(e) => setProduct_id(e.target.value)}
                  >
                    <option value="">Pilih produk</option>
                    {product.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.product_name} - Stock {item.product_stock} - Rp.{item.product_price}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    QTY
                  </label>
                  <input
                    type="number"
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="QTY"
                    onChange={(e) => setQuantity(e.target.value)}
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
                  <h3 className="text-blueGray-700 text-xl font-bold">Rp. {total}</h3>
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
