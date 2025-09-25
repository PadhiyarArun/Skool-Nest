import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-[#f2f2f2] min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main content area */}
        <div className="flex-1 lg:ml-[240px] xl:ml-[280px] 2xl:ml-[320px] flex flex-col min-h-screen">
          <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

          {/* Main content */}
          <main className="bg-[#f2f2f2] flex-1 transition-all duration-300">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
