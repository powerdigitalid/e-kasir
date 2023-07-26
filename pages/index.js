import React from "react";
import Auth from "layouts/Auth";
import CardTablePelanggan from "components/Cards/CardTablePelanggan";

export default function LoginPage() {

  return (
    <Auth>
      <div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <CardTablePelanggan/>
          </div>
        </div>
      </div>
    </Auth>
  );
}
