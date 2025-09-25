import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const Attendance = () => {
  // Attendance datasets
  const attendanceData = {
    Student: [
      { name: "Absent", value: 60, color: "#038CD5" }, // blue
      { name: "Present", value: 470, color: "#063F6C" }, // dark blue
    ],
    Teacher: [
      { name: "Absent", value: 10, color: "#038CD5" },
      { name: "Present", value: 40, color: "#063F6C" },
    ],
    Staff: [
      { name: "Absent", value: 5, color: "#038CD5" },
      { name: "Present", value: 25, color: "#063F6C" },
    ],
  };

  // State for active tab
  const [activeTab, setActiveTab] = useState("Student");

  // Current data based on active tab
  const data = attendanceData[activeTab];
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className=" xl2:w-[378px] 2xl:w-full h-[470px] bg-[#ffffff] rounded border-[1px] border-[#f2f2f2] shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h2 className="font-bold leading-[100%] text-[#1E293B] text-[18px] xl:text-base">Attendance</h2>
        <button className="flex justify-between items-center w-[86px] font-bold text-xs leading-[100%] text-[#1E293B] rounded border border-[#f2f2f2] p-2 cursor-pointer">
          Today
          <IoIosArrowDown className="h-4 w-4" />
        </button>
      </div>
      <hr className="w-full text-[#f2f2f2]" />

      {/* Tabs */}
      <div className="p-4">
        <ul className="flex gap-4 border-b border-[#f2f2f2]">
          {["Student", "Teacher", "Staff"].map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 cursor-pointer transition-colors duration-300 ${
                activeTab === tab
                  ? "text-[#063F6C] border-b-2 border-[#063F6C] font-bold"
                  : "text-[#ADB5BD]"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Present / Absent / Late Cards */}
      <div className="px-4 flex justify-between gap-3">
        <div className="h-[65px] xl:h-[50px] rounded bg-[#F8FAFC] w-full py-2">
          <span className="flex flex-col text-center gap-1.5 xl:gap-1">
            <h3 className="font-bold text-xl xl:text-sm leading-[18px] text-[#000000]">
              {data.find((d) => d.name === "Present")?.value}
            </h3>
            <p className="font-bold text-sm xl:text-xs leading-[100%] text-[#6B7280]">
              Present
            </p>
          </span>
        </div>
        <div className="h-[65px] xl:h-[50px] rounded bg-[#F8FAFC] w-full py-2">
          <span className="flex flex-col text-center gap-1.5 xl:gap-1">
            <h3 className="font-bold text-xl xl:text-sm leading-[18px] text-[#000000]">
              {data.find((d) => d.name === "Absent")?.value}
            </h3>
            <p className="font-bold text-sm xl:text-xs leading-[100%] text-[#6B7280]">
              Absent
            </p>
          </span>
        </div>
        <div className="h-[65px] xl:h-[50px] rounded bg-[#F8FAFC] w-full py-2">
          <span className="flex flex-col text-center gap-1.5 xl:gap-1">
            <h3 className="font-bold text-xl xl:text-sm leading-[18px] text-[#000000]">
              0
            </h3>
            <p className="font-bold text-sm xl:text-xs leading-[100%] text-[#6B7280]">
              Late
            </p>
          </span>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="p-4 flex justify-center outline-0">
        <div className="w-[230px] h-[230px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={80}
                outerRadius={115}
                paddingAngle={1}
                dataKey="value"
                startAngle={120}
                endAngle={-350}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    className="cursor-pointer transition-all duration-300 hover:opacity-90"
                  />
                ))}
              </Pie>

              {/* Tooltip */}
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const { name, value, color } = payload[0].payload;
                    return (
                      <div
                        className="text-white text-xs rounded px-2 py-1 shadow-lg"
                        style={{ backgroundColor: color }}
                      >
                        {`${name}: ${value}`}
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <h2 className="text-[28px] font-bold leading-[100%] text-[#000000] pb-2">
              {total}
            </h2>
            <p className="text-[#6B7280] font-bold text-sm leading-[100%]">
              Total {activeTab}
            </p>
            <span className="absolute bottom-3 text-[10px] font-bold text-[#ffffff] leading-[100%]">
              {((data.find((d) => d.name === "Present")?.value / total) * 100).toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 flex justify-end">
        <span className="font-bold text-sm leading-[100%] text-[#000000] cursor-pointer">
          View All
        </span>
      </div>
    </div>
  );
};

export default Attendance;
