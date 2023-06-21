import React from "react";

// components

import CardTableKeuangan from "components/Cards/CardTableKeuangan.js";
import CardKeuangan from "components/Cards/CardKeuangan.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function TransaksiKeuangan() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardKeuangan />
        </div>
        <div className="w-full lg:w-12/12 px-4">
          <CardTableKeuangan />
        </div>
      </div>
    </>
  );
}

TransaksiKeuangan.layout = Admin;
