import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const quickLinks = [
  {
    title: "Calendar",
    icon: <img src="/Calender-icon.png" alt="Calender-icon" />,
    color: "bg-green-100",
  },
  {
    title: "Exam Result",
    icon: <img src="/Result-logo.png" alt="Result-logo" />,
    color: "bg-blue-100",
  },
  {
    title: "Attendance",
    icon: <img src="/Attendance-logo.png" alt="Attendance-logo.png" />,
    color: "bg-yellow-100",
  },
  {
    title: "Fees",
    icon: <img src="/Fees-logo.png" alt="Fees-logo.png" />,
    color: "bg-indigo-100",
  },
  {
    title: "Home Works",
    icon: <img src="/Homeworks-logo.png" alt="Homeworks-logo.png" />,
    color: "bg-red-100",
  },
  {
    title: "Reports",
    icon: <img src="/Reports-logo.png" alt="Reports-logo.png" />,
    color: "bg-pink-100",
  },
];

const data = [
  { name: "Excellent", value: 50, color: "#2D9CDB" },
  { name: "Good", value: 30, color: "#F59E0B" },
  { name: "Average", value: 20, color: "#DC2626" },
];

function QuickLinks() {
  return (
    <div className=" xl2:w-[379px] xl:w-full h-auto xl:h-[470px] grid gap-y-4 ">
      {/* Quick Links Section */}
      <div className="bg-white rounded shadow-md w-full xl2:w-[379px] 2xl:w-full h-auto xl:h-[236px] border-[1px] border-[#f2f2f2]">
        <div>
          <h2 className="p-4 font-bold leading-[100%] text-[#1E293B] pb-4 text-[18px] xl:text-base">
            Quick Links
          </h2>
          <hr className="w-full text-[#f2f2f2]" />
        </div>
        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {quickLinks.map((link, index) => (
            <div
              key={index}
              className={`${link.color} flex flex-col items-center justify-center rounded cursor-pointer hover:shadow h-[90px] xl:h-[70px] w-full xl2:w-[109px] 2xl:w-full`}
            >
              <div className="h-[32px] w-[32px] xl:h-[30px] xl:w-[30px]">
                {link.icon}
              </div>
              <span className="text-base xl:text-[12px] mt-2 font-bold xl:font-semi-bold leading-[100%] text-[#1E293B] text-center">
                {link.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Class Wise Performance Section */}
      <div className="bg-white rounded shadow-md xl2:w-[379px] 2xl:w-full xl:h-[218px] flex flex-col border-[1px] border-[#f2f2f2]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 py-4 gap-2 sm:gap-0">
          <h2 className="font-bold leading-[100%] text-[#1E293B] text-[18px] xl:text-base">
            Class Wise Performance
          </h2>
          <button className="flex justify-between items-center w-[86px] font-bold text-xs leading-[100%] text-[#1E293B] rounded border border-[#f2f2f2] p-2 cursor-pointer self-start sm:self-auto">
            Class
            <IoIosArrowDown className="h-4 w-4" />
          </button>
        </div>
        <hr className="w-full text-[#f2f2f2]" />

        <div className="flex flex-col lg:grid lg:grid-cols-12 px-4 py-5 xl:py-0 gap-4 lg:gap-0">
          <div className="flex items-center lg:col-span-6 justify-center ">
            <div className="flex flex-col justify-end gap-y-2 xl2:gap-y-1 py-2] w-full">
              <div className="h-[40px] w-full flex items-center justify-between border border-[#f2f2f2] p-2">
                <div className="flex items-center gap-x-2">
                  <img
                    src="public/DownArrowYL.png"
                    alt="DownArrowIcn.png"
                    className="h-3 xl:h-2 w-3 xl:w-2"
                  />
                  <span className="font-semibold text-base xl:text-xs leading-[100%] text-[#6B7280]">
                    Excellent
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-base xl:text-xs leading-[100%] text-[#000000]">
                    45
                  </span>
                </div>
              </div>
              <div className="h-[40px] w-full flex items-center justify-between border border-[#f2f2f2] p-2">
                <div className="flex items-center gap-x-2">
                  <img
                    src="/DownArrowORN.png"
                    alt="DownArrowIcn.png"
                    className="h-3 xl:h-2 w-3 xl:w-2"
                  />
                  <span className="font-semibold text-base xl:text-xs leading-[100%] text-[#6B7280]">
                    Good
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-base xl:text-xs leading-[100%] text-[#000000]">
                    11
                  </span>
                </div>
              </div>
              <div className="h-[40px] w-full flex items-center justify-between border border-[#f2f2f2] p-2">
                <div className="flex items-center gap-x-2">
                  <img
                    src="/DownArrowBL.png"
                    alt="DownArrowIcn.png"
                    className="h-3 xl:h-2 w-3 xl:w-2"
                  />
                  <span className="font-semibold text-base xl:text-xs leading-[100%] text-[#6B7280]">
                    Average
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-base xl:text-xs leading-[100%] text-[#000000]">
                    02
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center items-center pb-4 lg:pb-0">
            <div className="flex justify-center items-center w-[150px] h-[150px]">
              <PieChart width={150} height={150}>
                <Pie
                  data={data}
                  innerRadius={40}
                  outerRadius={65}
                  paddingAngle={1}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      className="cursor-pointer transition-transform duration-300 hover:scale-101"
                    />
                  ))}
                </Pie>

                {/* Tooltip on hover */}
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const { name, value, color } = payload[0].payload;
                      return (
                        <div
                          className="rounded-[1.5px] px-2 py-1 text-white text-sm shadow-lg"
                          style={{ backgroundColor: color }}
                        >
                          {`${name} : ${value}`}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
