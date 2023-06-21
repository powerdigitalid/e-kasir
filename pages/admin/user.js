import React from "react";

// components
import CardUser from "components/Cards/CardUser";

// layout for page
import Admin from "layouts/Admin.js";

export default function User() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardUser />
        </div>
      </div>
    </>
  );
}

User.layout = Admin;
