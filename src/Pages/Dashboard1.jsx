import React from "react";
import WelcomeBanner from "../Components/Dashboard1Pages/WelcomeBanner";
import StrenghtCount from "../Components/Dashboard1Pages/StrenghtCount";
import QuickLinks from "../Components/Dashboard1Pages/QuickLinks";
import Attendance from "../Components/Dashboard1Pages/Attendance";
import FeesCollection from "../Components/Dashboard1Pages/FeesCollection";
import Calender from "../Components/Dashboard1Pages/Calender";
import DashboardCards from "../Components/Dashboard1Pages/DashboardCards";
import NoticeBoard from "../Components/Dashboard1Pages/NoticeBoard";
import AmountPart from "../Components/Dashboard1Pages/AmountPart";

function Dashboard1() {
  return (
    <>
      <div className="flex flex-col gap-x-4 gap-y-4 p-4 w-full xl2:w-[1200px] 2xl:w-full">
        <div className="flex flex-col gap-y-4 ">
          <WelcomeBanner />
          <StrenghtCount />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="">
            <QuickLinks />
          </div>
          <div className="">
            <Attendance />
          </div>
          <div className="xl:row-span-2">
            <Calender />
          </div>
          <div className="xl:col-span-2">
            <FeesCollection />
          </div>
        </div>
        
        <div>
          <DashboardCards />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 xl:gap-x-4">
          <div className="xl:col-span-8">
            <NoticeBoard />
          </div>
          <div className="xl:col-span-4">
            <AmountPart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard1;