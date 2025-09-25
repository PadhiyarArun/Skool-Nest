import React from "react";
import { MdOutlineDashboard } from "react-icons/md";

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: "New Syllabus Instructions",
      addedDate: "21 Apr 2025",
      daysLeft: "20 Days",
      ImgSrc: "/Sylabus logo.png",
      iconColor: "text-pink-500",
      iconBg: "bg-pink-50",
    },
    {
      id: 2,
      title: "World Environment Day program...!!",
      addedDate: "21 Apr 2025",
      daysLeft: "15 Days",
      ImgSrc: "/Environment logo.png",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50",
    },
    {
      id: 3,
      title: "Exam preparation Notification!",
      addedDate: "21 Apr 2025",
      daysLeft: "12 Days",
      ImgSrc: "/Preparation logo.png",
      iconColor: "text-green-500",
      iconBg: "bg-green-50",
    },
    {
      id: 4,
      title: "Online Classes Preparation",
      addedDate: "21 Apr 2025",
      daysLeft: "02 Days",
      ImgSrc: "/OnlineClasses logo.png",
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-50",
    },
    {
      id: 5,
      title: "Exam Time Table Release",
      addedDate: "21 Apr 2025",
      daysLeft: "06 Days",
      ImgSrc: "/Time table logo.png",
      iconColor: "text-yellow-500",
      iconBg: "bg-yellow-50",
    },
  ];

  return (
    <div className=" border-[1px] border-[#f2f2f2] shadow-md">
      <div className="bg-white overflow-hidden h-[388px] rounded">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <h2 className="font-bold leading-[100%] text-[#1E293B] text-[18px] xl:text-base">
            Notice Board
          </h2>
          <button className="flex justify-between items-center w-[86px] font-bold text-xs leading-[100%] text-[#1E293B] rounded p-2 cursor-pointer">
            View All
          </button>
        </div>
        <hr className="w-full text-[#f2f2f2]" />

        {/* Notice Items */}
        <div className=" text-gray-200">
          {notices.map((notice) => {
            const IconComponent = notice.icon;
            return (
              <div
                key={notice.id}
                className="flex justify-between items-center py-3 px-4 hover:bg-gray-50 transition-colors border-0"
              >
                <div className="flex gap-x-3 gap-y-4">
                  {/* Icon */}
                  <div className="flex items-center rounded-full">
                    <img src={notice.ImgSrc} className="w-[30px] h-[30px]" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center it-center">
                    <h3 className="font-bold text-[#1E293B] leading-[100%]">
                      {notice.title}
                    </h3>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <MdOutlineDashboard className="w-[14px] h-[14px] mr-1" />
                      <span className="font-semibold text-sm leading-[18px]">
                        Added On: {notice.addedDate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Days Left Badge */}
                <div className="bg-[#E9EDF4] text-center rounded-[3px] h-6 w-[62px]">
                  <span className="text-sm font-medium text-gray-700">
                    {notice.daysLeft}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
