import React from "react";

// components

import CardEditProduct from "components/Cards/CardEditProduct.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function TambahProducts() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardEditProduct />
        </div>
      </div>
    </>
  );
}

TambahProducts.layout = Admin;
