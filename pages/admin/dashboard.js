import React from "react";

// components
import CardLineChart from "components/Cards/CardLineChart.js";
import CardCounterStats from "components/Cards/CardCounterStats";
// import {useEffect} from 'react'
// import {getCookie, validateToken} from '../../libs/cookie.lib'
import {useSession,signIn, signOut} from 'next-auth/react'

// layout for page
import Admin from "layouts/Admin.js";

export default function Dashboard() {
  const {data: session, status} = useSession()
  console.log(session)


  if(session && session.user.email === "kimeee220801@gmail.com" ) {
    return (
      <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardCounterStats />
        </div>
      </div>
    </>
    );
  } else {
    return (
      <div>
        <h1>Anda tidak memiliki akses</h1> 
      signIn('/')
      </div>
    )
  }
}

Dashboard.layout = Admin;
