import React from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Dasboard from "..";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Subcription() {
  const options = {
    responsive: true,
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "High - 2013",
        data: [33, 53, 85, 41, 44, 65],
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
        pointBorderWidth: 6,
        pointHoverRadius: 10,
        lineTension: 0.5,
      },
      {
        label: "Low - 2013",
        data: [23, 25, 35, 51, 54, 76],
        fill: false,
        backgroundColor: "#363636",
        borderColor: "#363636",
        pointBorderWidth: 6,
        pointHoverRadius: 10,
        lineTension: 0.5,
      },
    ],
  };
  return (
    <div className="container">
      <Dasboard />
      <SubscriptionContainer>
        <p>Average High & Low Temperature</p>
        <Line options={options} data={data} />
      </SubscriptionContainer>
    </div>
  );
}

const SubscriptionContainer = styled.div`
  max-width: 1000px;
`;
