import React from "react";

// components

import CardTableBeli from "components/Cards/CardTableBeli.js";
import CardBeli from "components/Cards/CardBeli.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function TransaksiBeli() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardBeli />
        </div>
        <div className="w-full lg:w-12/12 px-4">
          <CardTableBeli />
        </div>
      </div>
    </>
  );
}

TransaksiBeli.layout = Admin;
