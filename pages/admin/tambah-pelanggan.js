import React from "react";

// components

import CardTambahPelanggan from "components/Cards/CardTambahPelanggan.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function TambahPelanggan() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardTambahPelanggan />
        </div>
      </div>
    </>
  );
}

TambahPelanggan.layout = Admin;
