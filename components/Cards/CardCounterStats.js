import React from "react";
// components

import CardStats from "components/Cards/CardStats.js";

export default function CardCounterStats() {
  return (
    <div>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-white text-xl font-semibold">Sales value</h2>
              <div className="flex flex-row mt-3">
                <h6 className="text-blueGray-100 mb-1 text-xs font-semibold mr-1 mt-3 ">
                  Date Range :
                </h6>

                <input
                  type="date"
                  id="date1"
                  className="dark-input p-2 rounded w-1/3"
                  style={{ backgroundColor: "#4B5563", color: "#F9FAFB" }}
                />

                <p className="uppercase text-blueGray-100 mb-1 text-xs font-semibold ml-1 mr-1 mt-3 w-1/3">
                  -
                </p>

                <input
                  type="date"
                  id="date2"
                  className="dark-input p-2 rounded w-1/3"
                  style={{ backgroundColor: "#4B5563", color: "#F9FAFB" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Counter */}
          <div className="relative ">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TRAFFIC"
                  statTitle="350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="NEW USERS"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SALES"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card stats */}
    </div>
  );
}
