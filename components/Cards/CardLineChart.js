import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js';

export default function CardLineChart() {
  const chartContainer = useRef(null);
  const [chart, setChart] = useState(null);
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Penjualan',
        backgroundColor: '#4c51bf',
        borderColor: '#4c51bf',
        data: [],
        fill: false,
      },
      {
        label: 'Pembelian',
        backgroundColor: '#fca5a5',
        borderColor: '#fca5a5',
        data: [],
        fill: false,
      },
      {
        label: 'Laba',
        backgroundColor: '#38b2ac',
        borderColor: '#38b2ac',
        data: [],
        fill: false,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const url1 = '/api/transaksi/jual';
      const url2 = '/api/transaksi/beli';
      const url3 = '/api/hitung/all';
      const dataMap = {};
      const labelSet = [];

      const fetchJual = fetch(url1).then((res) => res.json());
      const fetchPembelian = fetch(url2).then((res) => res.json());
      const fetchLaba = fetch(url3).then((res) => res.json());

      await Promise.all([fetchJual, fetchPembelian, fetchLaba])
        .then((responses) => {
          const responseJual = responses[0];
          const responsePembelian = responses[1];
          const responseLaba = responses[2];

          if (Array.isArray(responseJual.data) && Array.isArray(responsePembelian.data)) {
            responseJual.data.forEach((val) => {
              const productName = val.product.product_name;
              const date = new Date(val.date);
              const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
              const quantity = val.total;

              if (!dataMap[productName]) {
                dataMap[productName] = { labels: [], penjualan: [], pembelian: [], laba: [] };
              }

              dataMap[productName].labels.push(monthYear);
              dataMap[productName].penjualan.push(quantity);
            });

            responsePembelian.data.forEach((val) => {
              const productName = val.product.product_name;
              const date = new Date(val.date);
              const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
              const quantity = val.total;

              if (!dataMap[productName]) {
                dataMap[productName] = { labels: [], penjualan: [], pembelian: [], laba: [] };
              }

              dataMap[productName].labels.push(monthYear);
              dataMap[productName].pembelian.push(quantity);
            });

            responseLaba.data.forEach((val) => {
              const date = new Date(val.date);
              const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
              const quantity = val.total_laba;
              if (!dataMap['laba']) {
                dataMap['laba'] = { labels: [], penjualan: [], pembelian: [], laba: [] };
              }

              if (dataMap['laba'].labels.includes(monthYear)) {
                const index = dataMap['laba'].labels.indexOf(monthYear);
                dataMap['laba'].laba[index] += quantity;
              } else {
                dataMap['laba'].labels.push(monthYear);
                dataMap['laba'].laba.push(quantity);
              }
            });

            let colorIndex = 0;
            for (const productName in dataMap) {
              if (dataMap.hasOwnProperty(productName)) {
                const productData = dataMap[productName];
                labelSet.push(...productData.labels);
                data.datasets[0].data.push(...productData.penjualan);
                data.datasets[1].data.push(...productData.pembelian);
                data.datasets[2].data.push(...productData.laba); // Menambahkan data laba
                colorIndex++;
              }
            }

            const newChartData = {
              ...data,
              labels: labelSet,
            };
            setData(newChartData);
          } else {
            console.error('Invalid data format:', responseJual, responsePembelian);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }
    createChart(data);
  }, [data]);

  const createChart = (chartData) => {
    const ctx = chartContainer.current.getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: 'white',
            },
            align: 'end',
            position: 'bottom',
          },
        },
        scales: {
          x: {
            ticks: {
              color: 'rgba(255,255,255,.7)',
            },
            display: true,
            title: {
              display: false,
              text: 'Date',
              font: {
                color: 'white',
              },
            },
            grid: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.3)',
              drawBorder: false,
              zeroLineColor: 'rgba(0, 0, 0, 0)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
          y: {
            ticks: {
              color: 'rgba(255,255,255,.7)',
            },
            display: true,
            title: {
              display: false,
              text: 'Value',
              font: {
                color: 'white',
              },
            },
            grid: {
              borderDash: [3],
              borderDashOffset: [3],
              drawBorder: false,
              color: 'rgba(255, 255, 255, 0.15)',
              zeroLineColor: 'rgba(33, 37, 41, 0)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        },
      },
    });
    setChart(newChart);
  };

  const handleFilterByYear = (year) => {
    const filteredData = {
      labels: [],
      datasets: [
        {
          label: 'Penjualan',
          backgroundColor: '#4c51bf',
          borderColor: '#4c51bf',
          data: [],
          fill: false,
        },
        {
          label: 'Pembelian',
          backgroundColor: '#fca5a5',
          borderColor: '#fca5a5',
          data: [],
          fill: false,
        },
        {
          label: 'Laba',
          backgroundColor: '#38b2ac',
          borderColor: '#38b2ac',
          data: [],
          fill: false,
        },
      ],
    };

    for (let i = 0; i < data.labels.length; i++) {
      const label = data.labels[i];
      const yearFromLabel = Number(label.split(' ')[1]);
      if (yearFromLabel === year) {
        filteredData.labels.push(label);
        filteredData.datasets[0].data.push(data.datasets[0].data[i]);
        filteredData.datasets[1].data.push(data.datasets[1].data[i]);
        filteredData.datasets[2].data.push(data.datasets[2].data[i]);
      }
    }

    createChart(filteredData);
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-white text-xl font-semibold">Sales value</h2>
              <div className="flex flex-row mt-3">
                <h6 className="text-blueGray-100 mb-1 text-xs font-semibold mr-1 mt-3">
                  Date Range :
                </h6>
                <input
                  type="date"
                  id="date1"
                  className="dark-input p-2 rounded w-1/3"
                  style={{ backgroundColor: '#4B5563', color: '#F9FAFB' }}
                />
                <p className="uppercase text-blueGray-100 mb-1 text-xs font-semibold ml-1 mr-1 mt-3 w-1/3">
                  -
                </p>
                <input
                  type="date"
                  id="date2"
                  className="dark-input p-2 rounded w-1/3"
                  style={{ backgroundColor: '#4B5563', color: '#F9FAFB' }}
                />
              </div>
              <div className="flex flex-row mt-3">
                <h6 className="text-blueGray-100 mb-1 text-xs font-semibold mr-1 mt-3">
                  Filter by Year:
                </h6>
                <select
                  className="dark-input p-2 rounded w-1/3"
                  style={{ backgroundColor: '#4B5563', color: '#F9FAFB' }}
                  onChange={(e) => handleFilterByYear(Number(e.target.value))}
                >
                  <option value="all">All Years</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  {/* Add more options for additional years */}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto"> 
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas ref={chartContainer} id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
} 
