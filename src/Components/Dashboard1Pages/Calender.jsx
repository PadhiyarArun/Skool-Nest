import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  getDay,
  isToday,
  addMonths,
  subMonths,
  setYear,
} from "date-fns";
import {
  FaBirthdayCake,
  FaBriefcase,
  FaCalendarAlt,
  FaPlus,
} from "react-icons/fa";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
} from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";

const events = {
  "2025-09-04": ["meeting"],
  "2025-09-07": ["meeting", "event"],
  "2025-09-12": ["meeting", "event"],
  "2025-09-16": ["meeting", "event", "birthday"],
  "2025-09-20": ["meeting", "event"],
  "2025-09-28": ["meeting", "event", "birthday"],
};

// const colors = {
//   meeting: "#063F6C",
//   events: "#038CD5",
//   birthday: "#F59E0B",
// };

// const newEvents = Array(6).fill({
//   title: "Parents, Teacher Meet",
//   date: "15 July 2025",
//   startTime: "09:30 AM",
//   endTime: " 10:30 AM",
// });

const newEvents = [
  {
    id: 1,
    title: "Parents, Teacher Meet",
    date: "15 July 2025",
    startTime: "09:30 AM",
    endTime: "10:30 AM",
    type: "meeting", // meeting, event, birthday
  },
  {
    id: 2,
    title: "Parents, Teacher Meet",
    date: "15 July 2025",
    startTime: "09:30 AM",
    endTime: "10:30 AM",
    type: "birthday",
  },
  {
    id: 3,
    title: "Parents, Teacher Meet",
    date: "15 July 2025",
    startTime: "09:30 AM",
    endTime: "10:30 AM",
    type: "event",
  },
  {
    id: 4,
    title: "Parents, Teacher Meet",
    date: "15 July 2025",
    startTime: "09:30 AM",
    endTime: "10:30 AM",
    type: "birthday",
  },
  {
    id: 5,
    title: "Parents, Teacher Meet",
    date: "15 July 2025",
    startTime: "09:30 AM",
    endTime: "10:30 AM",
    type: "meeting",
  },
  {
    id: 6,
    title: "Parents, Teacher Meet",
    date: "15 July 2025",
    startTime: "09:30 AM",
    endTime: "10:30 AM",
    type: "event",
  },
];

// Border colors by type
const colors = {
  meeting: "#063F6C",
  birthday: "#F59E0B",
  event: "#038CD5",
};

// Logo images by type
const logos = {
  meeting: "/meeting logo.png",
  birthday: "/Birthday logo.png",
  event: "/Event logo.png",
};

function Calender() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start, end });

  const handlePrevMonth = () => {
    setCurrentDate((prev) => subMonths(prev, 1));
    setShowYearDropdown(false);
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => addMonths(prev, 1));
    setShowYearDropdown(false);
  };

  const handleYearSelect = (year) => {
    setCurrentDate(setYear(currentDate, year));
    setShowYearDropdown(false);
  };

  const getEventDots = (dateStr) => {
    return (events[dateStr] || []).map((type) => (
      <span
        key={type}
        style={{
          height: 6,
          width: 6,
          backgroundColor: colors[type],
          margin: "1px",
        }}
      />
    ));
  };

  const currentYear = currentDate.getFullYear();
  const yearOptions = Array.from(
    { length: 50 },
    (_, i) => today.getFullYear() - 24 + i
  );

  const eventIcons = {
    meeting: <FaBriefcase className="text-[#063F6C] w-5 h-5" />,
    birthday: <FaBirthdayCake className="text-[#F59E0B] w-5 h-5" />,
    event: <FaCalendarAlt className="text-[#038CD5] w-5 h-5" />,
  };

  return (
    <div className="bg-white rounded relative h-[840px] xl2:w-[379px] 2xl:w-full border-[1px] border-[#f2f2f2] shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h2 className="font-bold text-[#1E293B] text-[18px] xl:text-base">Calendar</h2>
        <span className="h-[26px] w-[26px] bg-[#063F6C] text-white flex items-center justify-center rounded cursor-pointer">
          <FaPlus className="h-[14px] w-[14px]" />
        </span>
      </div>

      <hr className="w-full text-[#f2f2f2]" />

      {/* Month Navigation + Year Dropdown */}
      <div className="flex items-center justify-between px-4 py-6 relative">
        <button onClick={handlePrevMonth}>
          <IoIosArrowBack className="text-[#353535] text-2xl xl:text-xl cursor-pointer" />
        </button>

        {/* Month and Year Display with Dropdown Icon */}
        <div className="flex items-center text-xl xl:text-sm font-medium text-[#1E293B] space-x-1 cursor-pointer select-none">
          <span>{format(currentDate, "MMMM")}</span>
          <span
            
            className="flex items-center gap-1 font-semibold text-xl xl:text-sm leading-[14px] text-[#000000]"
          >
            {format(currentDate, "yyyy")}{" "}
            <IoIosArrowDown onClick={() => setShowYearDropdown((prev) => !prev)} className="inline text-[#353535]" />
          </span>
        </div>

        <button onClick={handleNextMonth}>
          <IoIosArrowForward className="text-[#353535] text-2xl xl:text-xl cursor-pointer" />
        </button>

        {/* Year Dropdown */}
        {showYearDropdown && (
          <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 bg-blue-200 rounded shadow-md z-10 w-36 max-h-60 overflow-y-auto">
            {yearOptions.map((year) => (
              <div
                key={year}
                onClick={() => handleYearSelect(year)}
                className={`px-4 py-2 font-semibold cursor-pointer hover:bg-blue-300 ${
                  year === currentYear ? "bg-blue-400 font-semibold text-xl" : ""
                }`}
              >
                {year}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center font-semibold text-sm sm:text-md xl:text-xs leading-[100%] text-[#1E293B] pt-2 pb-4 px-2 sm:px-0">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, index) => (
          <div key={d} className={d === "Sun" ? "text-[#FF0000]" : ""}>
            {d}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 text-center text-sm text-[#1E293B]">
        {Array(getDay(start) === 0 ? 6 : getDay(start) - 1)
          .fill(null)
          .map((_, i) => (
            <div key={`empty-${i}`} className="py-2" />
          ))}

        {days.map((day) => {
          const dateStr = format(day, "yyyy-MM-dd");
          const isCurrentDay = isToday(day);

          return (
            <div key={dateStr} className="py-2">
              <div
                className={`mx-auto flex items-center justify-center rounded h-6 w-6 text-sm xl:text-xs ${
                  isCurrentDay ? "bg-[#004080] text-white" : ""
                }`}
              >
                {format(day, "d")}
              </div>
              <div className="flex justify-center mt-1 ">
                {getEventDots(dateStr)}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex mt-4 pb-4 text-sm xl:text-xs font-semibold leading-[100%] text-[#6B7280] px-4 gap-4">
        <div className="flex items-center gap-0.5">
          <span style={{ ...dotStyle, backgroundColor: colors.meeting }} />
          Meeting
        </div>
        <div className="flex items-center gap-0.5">
          <span style={{ ...dotStyle, backgroundColor: colors.event }} />
          Events
        </div>
        <div className="flex items-center gap-0.5">
          <span style={{ ...dotStyle, backgroundColor: colors.birthday }} />
          Birthday
        </div>
      </div>

      {/* UpcomingEvent List part */}

      <div className="p-4">
        <h4 className="font-bold xl2:text-xs leading-[18px] text-[#1E293B] mb-2">
          Upcoming Events
        </h4>
        <hr className="w-full text-[#f2f2f2]" />

        {/* Scrollable list */}
        <div className="overflow-y-auto max-h-[300px] mt-4 space-y-2">
          {newEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-center p-3 xl:p-2 rounded cursor-pointer hover:bg-gray-50 transition"
              style={{
                borderLeft: `4px solid ${colors[event.type] || "#038CD5"}`,
              }}
            >
              {/* Icon */}
              <div className="mr-3 flex-shrink-0">
                <img
                  src={logos[event.type] || ""}
                  alt={`${event.type} icon`}
                  className="w-[38px] h-[38px] xl:w-[30px] xl:h-[30px] object-contain"
                />
              </div>

              {/* Event Info */}
              <div className="flex-1">
                <div className="font-semibold text-[#1E293B] text-[17px] xl:text-sm">
                  {event.title}
                </div>
                <div className="text-sm xl:text-xs flex items-center gap-1 text-gray-500">
                  <MdOutlineDashboard />
                  <span>{event.date}</span>
                </div>
              </div>

              {/* Time */}
              <div className="flex flex-col items-end text-[#6B7280] text-xs xl:text-[10px] font-medium">
                <span>{event.startTime}</span>
                <span>{event.endTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const dotStyle = {
  display: "inline-block",
  width: 6,
  height: 6,
  marginRight: 4,
  // borderRadius:1,
};

export default Calender;
