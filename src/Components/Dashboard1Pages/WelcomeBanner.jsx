import React from "react";

function WelcomeBanner() {
  return (
    <>
      {/* Welcome banner */}
      <div className="bg-[#063F6C] h-[88px] xl2:w-[1168px] 2xl:w-full rounded p-[15px] flex gap-2.5">
        <div className="flex flex-col gap-1.5">
          <h2 className="font-nunito font-extrabold text-[22px] text-[#ffffff]">
            Welcome back Mr.Zaid
          </h2>
          <p className="font-nunito font-medium text-[#ffffff]">Have a Good Day at Work</p>
        </div>
      </div>
    </>
  );
}

export default WelcomeBanner;
