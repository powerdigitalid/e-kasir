import React from "react";

// components
import CardLineChart from "components/Cards/CardLineChart.js";
import CartTambah from "components/Cards/CartTambahLaba";
// import {useEffect} from 'react'
// import {getCookie, validateToken} from '../../libs/cookie.lib'
import {useSession,signIn, signOut} from 'next-auth/react'

// layout for page
import Admin from "layouts/Admin.js";

export default function Dashboard() {
  const {data: session, status} = useSession()
  console.log(session)


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
