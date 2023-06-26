import React from "react";

// components
import CardLineChart from "components/Cards/CardLineChart.js";
import CardCounterStats from "components/Cards/CardCounterStats";
import {useEffect} from 'react'
import {getCookie, validateToken} from '../../libs/cookie.lib'

// layout for page
import Admin from "layouts/Admin.js";

export default function Dashboard() {
  useEffect(() => {
    if(getCookie('token') === "" && getCookie("username") === ""){
      window.location.href = "/";
    }else{
      validateToken(getCookie('token')) ? null : window.location.href = "/";
    }
  }, [])
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
      <div className="flex flex-wrap mt-4">
        
      </div>
    </>
  );
}

Dashboard.layout = Admin;
