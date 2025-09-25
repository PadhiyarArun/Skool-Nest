import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowForwardIos, MdCancel, MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  // Lock body scroll when sidebar is open on mobile
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (typeof document === "undefined") return null;

  return (
    <>
    {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-[240px] xl:w-[280px] 2xl:w-[320px] h-[100vh] bg-white border-r border-[#f2f2f2] p-[15px] gap-[15px] fixed top-0 left-0 z-20">
        <div className="flex justify-center">
          <img src="/Skool-nest-logo.png" alt="logo" />
        </div>

        <div className="flex justify-center">
          <div className="w-[210px] h-[50px] flex items-center p-2.5 gap-2.5 border border-[#f2f2f2] rounded">
            <img
              className="border border-[#f2f2f2]"
              src="/Bright-future-logo.png"
              alt="Bright-future-logo"
            />
            <h4 className="font-medium text-sm leading-5 text-[#6B7280]">
              Bright Future Academy
            </h4>
          </div>
        </div>

        <div className="gap-0.5">
          <NavLink
            to="/dashboard1"
            className={({ isActive }) =>
              `flex items-center p-2.5 gap-1.5 rounded cursor-pointer ${
                isActive ? "bg-[#063F6C] text-white" : ""
              }`
            }
          >
            <MdDashboard className="h-3.5 w-3.5" />
            <h4 className="font-bold text-sm">Dashboard</h4>
          </NavLink>

          <NavLink
            to="/configuration"
            className={({ isActive }) =>
              `flex items-center p-2.5 gap-1.5 rounded cursor-pointer ${
                isActive ? "bg-[#063F6C] text-white" : ""
              }`
            }
          >
            <MdDashboard className="h-3.5 w-3.5" />
            <h4 className="font-bold text-sm">Configuration</h4>
          </NavLink>

          <NavLink
            to="/dashboard2"
            className={({ isActive }) =>
              `flex justify-between p-2.5 gap-1.5 rounded cursor-pointer ${
                isActive ? "bg-[#063F6C] text-white" : ""
              }`
            }
          >
            <div className="flex items-center gap-1.5">
              <MdDashboard className="h-3.5 w-3.5" />
              <h4 className="font-medium text-sm">Dashboard</h4>
            </div>
            <div className="h-4.5 w-4.5 flex items-center justify-center">
              <MdArrowForwardIos />
            </div>
          </NavLink>
        </div>
      </div>

      {/* ----- Mobile Sidebar ----- */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={onClose}
                className="fixed inset-0 bg-black z-40 lg:hidden"
              />

              <motion.div
                key="sidebar"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 h-full w-[240px] bg-white border-r border-[#95c4f772] shadow-4xl  z-50 lg:hidden flex flex-col gap-y-4 "
              >
                <div className="flex flex-col justify-center">
                  <div className="text-end">
                    <button
                      onClick={onClose}
                      className="p-2 rounded hover:bg-gray-100"
                    >
                      <MdCancel className="font-extrabold h-6 w-6 text-[#063F6C]" />
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <img src="/Skool-nest-logo.png" alt="logo" />
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-[210px] h-[50px] flex items-center p-2.5 gap-2.5 border border-[#f2f2f2] rounded">
                    <img
                      className="border border-[#f2f2f2]"
                      src="/Bright-future-logo.png"
                      alt="Bright-future-logo"
                    />
                    <h4 className="font-medium text-sm leading-5 text-[#6B7280]">
                      Bright Future Academy
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col gap-4 px-4">
                  <NavLink
                    to="/dashboard1"
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded ${
                        isActive ? "bg-[#063F6C] text-white" : ""
                      }`
                    }
                  >
                    <MdDashboard className="h-4 w-4" />
                    <span className="ml-2 text-sm font-bold">Dashboard</span>
                  </NavLink>

                  <NavLink
                    to="/configuration"
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded ${
                        isActive ? "bg-[#063F6C] text-white" : ""
                      }`
                    }
                  >
                    <MdDashboard className="h-4 w-4" />
                    <span className="ml-2 text-sm font-bold">
                      Configuration
                    </span>
                  </NavLink>

                  <NavLink
                    to="/dashboard2"
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded ${
                        isActive ? "bg-[#063F6C] text-white" : ""
                      }`
                    }
                  >
                    <MdDashboard className="h-4 w-4" />
                    <div className="flex justify-between w-full">
                      <span className="ml-2 text-sm font-bold">Dashboard</span>
                      <MdArrowForwardIos className="h-4.5 w-4.5" />
                    </div>
                  </NavLink>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

export default Sidebar;
