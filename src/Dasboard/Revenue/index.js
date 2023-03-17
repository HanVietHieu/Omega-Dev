import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Dasboard from "..";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Revenue() {
  const data = {
    labels: ["10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [
      {
        label: "Dataset 1",
        data: [33, 25, 35, 51, 54, 76, 33, 53],
        backgroundColor: "rgba(75,192,192,1)",
        fill: false,
        lineTension: 0.1,
        borderColor: "black",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "black",
        pointBackgroundColor: "white",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "black",
        pointHoverBorderColor: "black",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        beginAtZero: false,
        ticks: {
          color: "black",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "black",
        },
      },
    },
  };
  return (
    <div className="container">
      <Dasboard />
      <h2>Simple Colum Chart width Index Lable</h2>
      <div style={{ maxWidth: "1000px" }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
