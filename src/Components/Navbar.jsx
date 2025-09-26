import React, { useState } from "react";
import Logo from "../img/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { FaAngleDown, FaArrowRightLong } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  let timeoutId;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const location = useLocation();

  return (
    <div className="w-full relative z-50">
      <div className="xl:max-w-full xl:flex xl:mx-auto xl:h-[80px] max-w-[335px] flex items-center mx-auto justify-between mt-4 xl:px-[140px]">
        <div className="w-full xl:w-[1160px] mx-auto xl:flex xl:justify-between xl:items-center">
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-[82px] h-[40px] sm:w-[75px] sm:h-[36px]"
            />
          </div>
          <div className="w-full max-w-[533px] h-[40px] gap-[72px] sm:flex items-center hidden">
            <div className="w-full max-w-[319px] flex gap-[57px] items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-nunito font-bold text-[16px] text-center text-[#6449FF]"
                    : "font-nunito font-semibold text-[16px] text-center text-[#000018]"
                }
              >
                Home
              </NavLink>

              <div className="flex relative">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "font-nunito font-bold text-[16px] text-center text-[#6449FF]"
                      : "font-nunito font-semibold text-[16px] text-center text-[#000018]"
                  }
                >
                  Services
                </NavLink>

                <div
                  className="relative inline-block"
                  onMouseEnter={() => {
                    clearTimeout(timeoutId); // cancel close if re-entered
                    setOpen(true);
                  }}
                  onMouseLeave={() => {
                    timeoutId = setTimeout(() => setOpen(false), 100); // delay close
                  }}
                >
                  <button className="flex items-center mt-1 px-2 cursor-pointer">
                    <FaAngleDown className="w-[16px] h-[14px]" />
                  </button>

                  {open && (
                    <div className="mt-4 bg-white border rounded-md shadow-md absolute z-50 left-0 flex flex-col w-[250px] p-3 gap-3 transition-opacity duration-200">
                      <a
                        href="#"
                        className="relative text-[16px] font-commissioner after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full"
                      >
                        Web Development
                      </a>
                      <a
                        href="#"
                        className="relative text-[16px] font-commissioner after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full"
                      >
                        Mobile & App Development
                      </a>
                      <a
                        href="#"
                        className="relative text-[16px] font-commissioner after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full"
                      >
                        AI & Machine Learning
                      </a>
                      <a
                        href="#"
                        className="relative text-[16px] font-commissioner after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full"
                      >
                        DevOps
                      </a>
                      <a
                        href="#"
                        className="relative text-[16px] font-commissioner after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full"
                      >
                        UI/UX Design
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "font-nunito font-bold   text-[15px] text-center text-[#6449FF]"
                    : "font-nunito font-semibold text-[15px] text-center text-[#000018]"
                }
              >
                About Us
              </NavLink>
            </div>

            {location.pathname !== "/contact" && (
              <NavLink
                to="/contact"
                className="border hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] transition duration-300 cursor-pointer h-[48px] flex items-center gap-2 rounded-lg text-[#6449FF] px-4 bg-white  font-commissioner font-semibold text-[14px]"
              >
                Contact Us
                <RxArrowTopRight className="text-[16px] text-bold" />
              </NavLink>
            )}
          </div>
        </div>

        <div className="sm:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
          </button>
        </div>

        <div
          className={`absolute xl:hidden top-[50px] left-0 w-full flex flex-col gap-10 p-8
          bg-white shadow-md border border-gray-300 rounded-md z-50 transition-all duration-500 ease-in-out
          ${
            mobileOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
          }`}
        >
          <NavLink
            to="/"
            className="font-nunito font-semibold text-[18px] text-[#000018]"
          >
            Home
          </NavLink>

          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between">
              <NavLink
                to="/services"
                className="font-nunito font-semibold text-[18px] text-[#000018]"
              >
                Services
              </NavLink>
              <button onClick={() => toggleAccordion(1)}>
                <FaAngleDown
                  className={`w-[16px] h-[16px] transform transition-transform duration-300 ${
                    openIndex === 1 ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-3 transition-opacity duration-200 mt-3 pl-4">
                <a
                  href="#"
                  className="relative text-[16px] font-commissioner after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Web Development
                </a>
                <a
                  href="#"
                  className="relative text-[16px] font-commissioner after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Mobile & App Development
                </a>
                <a
                  href="#"
                  className="relative text-[16px] font-commissioner after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  AI & Machine Learning
                </a>
                <a
                  href="#"
                  className="relative text-[16px] font-commissioner after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  DevOps
                </a>
                <a
                  href="#"
                  className="relative text-[16px] font-commissioner after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  UI/UX Design
                </a>
              </div>
            </div>
          </div>

          <NavLink
            to="/about"
            className="font-nunito font-semibold text-[18px] text-[#000018]"
          >
            About Us
          </NavLink>

          {location.pathname !== "/contact" && (
            <NavLink
              to="/contact"
              className="border hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] w-[200px] transition duration-300 cursor-pointer h-[48px] justify-center  flex items-center gap-2 rounded-lg text-[#6449FF]  bg-white shadow-[0px_15px_55px_-5px_rgba(100,73,255,0.4)] font-commissioner font-semibold text-[16px]"
            >
              Contact Us
              <RxArrowTopRight className="text-[16px] text-bold" />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
