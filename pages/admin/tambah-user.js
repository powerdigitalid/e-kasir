import React from "react";

// components
import CardTambahUser from "components/Cards/CardTambahUser";

// layout for page
import Admin from "layouts/Admin.js";

export default function TabahUser() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardTambahUser />
        </div>
      </div>
    </>
  );
}

TabahUser.layout = Admin;
