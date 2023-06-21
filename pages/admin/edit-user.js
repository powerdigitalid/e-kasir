import React from "react";

// components
import CardEditUser from "components/Cards/CardEditUser";

// layout for page
import Admin from "layouts/Admin.js";

export default function TambahProducts() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
         <CardEditUser />
        </div>
      </div>
    </>
  );
}

TambahProducts.layout = Admin;
