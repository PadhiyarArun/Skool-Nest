import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="bg-[#ffffff] h-[50px] w-full flex items-center justify-between sticky top-0 pr-2.5 z-50">
      {/* Menu Button (Visible on mobile only) */}
      <div className="ms-4">
        <button
          onClick={toggleSidebar}
          aria-label="Toggle menu"
          className="lg:hidden p-1 rounded hover:bg-gray-100"
        >
          <TiThMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex gap-2.5 items-center">
        <button className="h-8 w-8 flex items-center justify-center border rounded-[3px] border-[#f2f2f2]">
          <IoSearch />
        </button>

        <button className="h-8 w-8 flex items-center justify-center border rounded-[3px] border-[#f2f2f2]">
          <IoIosNotifications />
        </button>

        <div className="h-8 w-8 flex items-center justify-center border rounded-[3px] border-[#f2f2f2] overflow-hidden">
          <img src="/Navbar-img1.png" alt="Profile" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
