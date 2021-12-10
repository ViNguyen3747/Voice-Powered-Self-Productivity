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

import { Pie, Bar } from "react-chartjs-2";
import "./Report.css";
import "../common/Styles/commonStyles.css";
import useReport from "../../utils/Hooks/useReport";
import useWeeklyReport from "../../utils/Hooks/useWeeklyReport";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const weeklyOptions = {
  plugins: {
    title: {
      display: true,
      text: "Weekly Report",
      color: "white",
      font: {
        size: 25,
        family: "Space Mono, monospace",
        lineHeight: 1,
      },
      padding: 5,
    },
    legend: {
      labels: {
        color: "white",
        font: {
          size: 12,
          family: "Space Mono, monospace",
        },
      },
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      ticks: {
        color: "white",
      },
      grid: {
        color: "white",
      },
    },
    y: {
      stacked: true,
      ticks: {
        color: "white",
      },
      grid: {
        color: "white",
      },
    },
  },
};

export const dailyOptions = {
  plugins: {
    title: {
      display: true,
      text: "Daily Report",
      color: "black",
      font: {
        size: 25,
        family: "Space Mono, monospace",
      },
    },
    legend: {
      labels: {
        color: "black",
        font: {
          size: 12,
          family: "Space Mono, monospace",
          weight: "bold",
        },
      },
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
};
const Report = () => {
  const [dailyData] = useReport();
  const [weeklyData] = useWeeklyReport();

  return (
    <>
      <div className="pie-chart-container">
        <Pie options={dailyOptions} data={dailyData} />
      </div>
      <div className="barchart-wrapper">
        <div className="bar-chart-container">
          <Bar options={weeklyOptions} data={weeklyData} />
        </div>
      </div>
    </>
  );
};

export default Report;
