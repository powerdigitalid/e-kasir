import React from "react";

// components
import CardLineChart from "components/Cards/CardLineChart.js";
import CartTambah from "components/Cards/CartTambahLaba";
// import {useEffect} from 'react'
// import {getCookie, validateToken} from '../../libs/cookie.lib'
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
// layout for page
import Admin from "layouts/Admin.js";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (!session) {
        router.replace("/");
      }
      console.log(session)
    };

    checkSession();
  }, []);

    return (
      <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CartTambah />
        </div>
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
      </div>
    </>
    );
}

Dashboard.layout = Admin;
