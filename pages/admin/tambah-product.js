import React from "react";

// components

import CardTambahProduct from "components/Cards/CardTambahProduct.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function TambahProducts() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardTambahProduct />
        </div>
      </div>
    </>
  );
}

TambahProducts.layout = Admin;
