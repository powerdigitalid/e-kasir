import React from "react";

// components
import CardLineChart from "components/Cards/CardLineChart.js";
import CardCounterStats from "components/Cards/CardCounterStats";

// layout for page
import Admin from "layouts/Admin.js";

export default function Dashboard() {
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
