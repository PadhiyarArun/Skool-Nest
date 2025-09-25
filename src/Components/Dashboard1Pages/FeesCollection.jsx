import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function FeesCollection() {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const collectedFee = [50, 55, 40, 70, 100, 30, 70, 55, 35, 75, 45, 80];
  const totalFee = [110, 120, 90, 115, 150, 70, 115, 100, 75, 110, 95, 120];
  const remainingFee = totalFee.map((total, idx) => total - collectedFee[idx]);

  // State for checkboxes
  const [showCollected, setShowCollected] = useState(true);
  const [showRemaining, setShowRemaining] = useState(true);

  const data = {
    labels,
    datasets: [
      {
        label: "Remaining Fee",
        data: remainingFee,
        backgroundColor: "#F1F5F9",
        stack: "stack1",
        barThickness: 20,
        hidden: !showRemaining,
      },
      {
        label: "Collected Fee",
        data: collectedFee,
        backgroundColor: "#063F6C",
        stack: "stack1",
        barThickness: 20,
        hidden: !showCollected,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, 
    },
    layout: { padding: { top: 0, bottom: 12 } },
    scales: {
      x: {
        stacked: true,
        grid: { display: false, drawBorder: false },
        ticks: { color: "#1E293B", font: { size: 12 } },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: { stepSize: 50, color: "#1E293B", font: { size: 12 } },
        grid: { color: "#F1F5F9", drawBorder: false, drawTicks: false },
      },
    },
  };

  return (
    <div className="h-[354px] xl2:w-[773px] 2xl:w-full bg-white rounded border-[1px] border-[#f2f2f2] shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center px-4 pt-4 pb-3">
        <h2 className="text-sm font-semibold text-[#1E293B] text-[18px] xl:text-base">
          Fees Collection
        </h2>
        <button className="flex items-center text-xs font-semibold text-[#1E293B] border border-[#f2f2f2] px-3 py-1 rounded cursor-pointer">
          This Month
          <IoIosArrowDown className="ml-1 text-sm" />
        </button>
      </div>

      <hr className="border-[#F1F5F9]" />

      {/* Checkboxes */}
      <div className="flex gap-6 px-4 pt-2 pb-2 my-2">
        {/* Collected Fee */}
        <label className="flex items-center gap-2 cursor-pointer mt-1">
          <input
            type="checkbox"
            checked={showCollected}
            onChange={() => setShowCollected(!showCollected)}
            className={`w-4 h-4 appearance-none cursor-pointer
        ${showCollected ? "bg-[#063F6C]" : "bg-[#E9EDF4]"}
        transition-colors duration-200`}
          />
          <span className="font-semibold text-sm leading-[18px] text-[#1E293B]">
            Collected Fee
          </span>
        </label>

        {/* Remaining Fee */}
        <label className="flex items-center gap-2 cursor-pointer mt-1">
          <input
            type="checkbox"
            checked={showRemaining}
            onChange={() => setShowRemaining(!showRemaining)}
            className={`w-4 h-4 appearance-none cursor-pointer
        ${showRemaining ? "bg-[#063F6C]" : "bg-[#E9EDF4]"}
        transition-colors duration-200`}
          />
          <span className="font-semibold text-sm leading-[18px] text-[#1E293B]">
            Total Fee
          </span> 
        </label>
      </div>

      {/* Chart */}
      <div className="px-4 pt-2 pb-4 h-[260px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default FeesCollection;
