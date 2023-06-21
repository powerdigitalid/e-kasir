import React from "react";

// components

import CardTableProduct from "components/Cards/CardTableProduct.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Products() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardTableProduct />
        </div>
      </div>
    </>
  );
}

Products.layout = Admin;
