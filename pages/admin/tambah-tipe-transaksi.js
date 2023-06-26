import React from "react";

// components

import CardTambahTipeTransaksi from "components/Cards/CardTambahTipeTransaksi.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function CardTambahTipetransaksiPages() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardTambahTipeTransaksi />
        </div>
      </div>
    </>
  );
}

CardTambahTipetransaksiPages.layout = Admin;
