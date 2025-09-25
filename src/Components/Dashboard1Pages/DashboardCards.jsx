import React from "react";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    id: 1,
    text: "View Attendance",
    iconSrc: "/Attendance logo.png",
  },
  {
    id: 2,
    text: "New Events",
    iconSrc: "/Events logo.png",
  },
  {
    id: 3,
    text: "Membership Plans",
    iconSrc: "/Membership plans logo.png",
  },
  {
    id: 4,
    text: "Finance & Accounts",
    iconSrc: "/Finance & acc logo.png",
  },
];

function DashboardCards() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:flex xl:gap-4 gap-4">
        {cards.map(({ id, bgColor, text, iconSrc }) => (
          <div key={id} className="bg-white rounded w-full xl2:w-[280px] 2xl:w-full">
            {" "}
            {/* ✅ FIXED */}
            <div
              className="flex items-center justify-between h-[68px] rounded bg-[#FEF7E6] cursor-pointer hover:shadow-md transition-shadow m-1"
              style={{ backgroundColor: id === 2 ? "#DDF6F8" : undefined }}
            >
              <div
                className={`flex items-center px-3 rounded-l ${bgColor} h-full`}
              >
                {iconSrc ? (
                  <img src={iconSrc} alt={text} className="h-10 w-10" />
                ) : (
                  <div className="w-5 h-5" />
                )}
              </div>

              <div className="flex-1 text-sm font-semibold text-[#1E293B] px-3">
                {text}
              </div>

              <div className="me-3 text-[#6B7280] bg-white rounded-full">
                <FaAngleRight className="h-4.5 w-4.5 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DashboardCards;