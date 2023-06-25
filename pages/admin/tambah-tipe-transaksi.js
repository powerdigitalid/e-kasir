import React from "react";

// components

import CardTambahTipetransaksi from "components/Cards/CardTambahTipeTransaksi";

// layout for page

import Admin from "layouts/Admin.js";

export default function CardTambahTipetransaksiPages() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardTambahTipetransaksi />
        </div>
      </div>
    </>
  );
}

CardTambahTipetransaksiPages.layout = Admin;
