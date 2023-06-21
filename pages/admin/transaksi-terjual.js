import React from "react";

// components

import CardTerjual from "components/Cards/CardTerjual.js";
import CardTableTerjual from "components/Cards/CardTableTerjual.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function TransaksiTerjual() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardTerjual />
        </div>
        <div className="w-full lg:w-12/12 px-4">
          <CardTableTerjual />
        </div>
      </div>
    </>
  );
}

TransaksiTerjual.layout = Admin;
