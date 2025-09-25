import React from "react";

function StrenghtCount() {
  return (
    <div className="w-full">
      <div className="
        grid gap-4
        sm:grid-cols-2           
        xl:flex xl:flex-row      
        xl:gap-x-4
        2xl:gap-x-6
      ">
        {/* Card 1 - Total Student */}
        <div className="
          h-[100px] w-full
          xl2:w-[280px]          /* Fixed width from 1440px */
          rounded flex justify-between p-[15px]
          bg-white shadow-md
        ">
          <div className="flex flex-col justify-between">
            <h2 className="font-extrabold text-[22px] leading-[18px] text-[#1E293B]">
              3654
            </h2>
            <p className="font-semibold text-[#6B7280]">Total Student</p>
          </div>
          <img src="/Student-card-logo.png" alt="Student-card-logo" />
        </div>

        {/* Card 2 - Total Teacher */}
        <div className="
          h-[100px] w-full
          xl2:w-[280px]
          rounded flex justify-between p-[15px]
          bg-white shadow-md
        ">
          <div className="flex flex-col justify-between">
            <h2 className="font-extrabold text-[22px] leading-[18px] text-[#1E293B]">
              3654
            </h2>
            <p className="font-semibold text-[#6B7280]">Total Teacher</p>
          </div>
          <img src="/Teacher-card-logo.png" alt="Teacher-card-logo" />
        </div>

        {/* Card 3 - Total Staff */}
        <div className="
          h-[100px] w-full
          xl2:w-[280px]
          rounded flex justify-between p-[15px]
          bg-white shadow-md
        ">
          <div className="flex flex-col justify-between">
            <h2 className="font-extrabold text-[22px] leading-[18px] text-[#1E293B]">
              3654
            </h2>
            <p className="font-semibold text-[#6B7280]">Total Staff</p>
          </div>
          <img src="/Staff-card-logo.png" alt="Staff-card-logo" />
        </div>

        {/* Card 4 - Total Subject */}
        <div className="
          h-[100px] w-full
          xl2:w-[280px]
          rounded flex justify-between p-[15px]
          bg-white shadow-md
        ">
          <div className="flex flex-col justify-between">
            <h2 className="font-extrabold text-[22px] leading-[18px] text-[#1E293B]">
              3654
            </h2>
            <p className="font-semibold text-[#6B7280]">Total Subject</p>
          </div>
          <img src="/Subject-card-logo.png" alt="Subject-card-logo" />
        </div>
      </div>
    </div>
  );
}

export default StrenghtCount;
