import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

// components

export default function CardTambahPelanggan() {
  // const [product_name, setProduct_name] = useState("");
  // const [product_price, setProduct_price] = useState("");
  // const [product_stock, setProduct_stock] = useState("");
  // const router = useRouter();

  const handleAdd = (e) => {
    // e.preventDefault();
    // if(!product_name || !product_price || !product_stock){
    //   alert('Semua data harus diisi')
    // }else{
    //   fetch("/api/produk/create", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       product_name: product_name,
    //       product_price: product_price,
    //       product_stock: product_stock,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((res) => {
    //       if (res.data) {
    //         alert("Berhasil menambahkan produk");
    //         router.push("/admin/products");
    //       } else {

    //         alert("Gagal menambahkan produk");
    //       }
    //     });
    // }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Tambahkan produk</h6>
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
                    Nama Pelanggan
                  </label>
                  <input
                    type="text"
                    className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Nama Pelanggan"
                    // onChange={(e) => setProduct_name(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Tambah Pelanggan
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
