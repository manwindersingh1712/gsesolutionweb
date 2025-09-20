import React, { useState } from "react";
import Logo from "../img/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { FaAngleDown, FaArrowRightLong } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const location = useLocation();

  return (
    <div className="w-full   relative z-50  ">
      <div className="xl:max-w-full  xl:flex xl:mx-auto xl:h-[80px]  max-w-[335px]    flex items-center mx-auto justify-between mt-4 xl:px-[140px] overf">
        <div className="w-full xl:w-[1160px] xl:h-[40.07px]   mx-auto xl:m-auto xl:flex xl:justify-between xl:opacity-100 xl:items-center xl:flex-wrap">
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-[82px] h-[40.07px] flex gap-[5.47px] opacity-100 sm:w-[75px] sm:h-[36.5px] sm:flex sm:gap-[8px] sm:opacity-100"
            />
          </div>

          <div className="w-full max-w-[533px] h-[40px] gap-[72px] opacity-100 sm:flex items-center hidden">
            <div className="w-full max-w-[319px] h-[24px] flex gap-[57px] opacity-100 items-center ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "w-[45px] h-[24px] opacity-100 font-nunito font-bold text-[16px] leading-[24px] text-center text-[#6449FF]"
                    : "w-[44px] h-[24px] opacity-100 font-nunito font-semibold text-[16px] leading-[24px] text-center"
                }
              >
                Home
              </NavLink>

              <div className="w-[85px] h-[24px] rotate-0 opacity-100 flex ">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "w-[61px] h-[24px] opacity-100 font-nunito font-bold text-[16px] leading-[24px] text-center text-[#6449FF]"
                      : "w-[61px] h-[24px] opacity-100 text-[#000018] text-[16px] leading-[24px] font-semibold font-nunito text-center"
                  }
                >
                  Services
                </NavLink>

                <div
                  className="relative inline-block "
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <button className="flex items-center gap-[1px] px-3 py-1.5 opacity-100 cursor-pointer">
                    <FaAngleDown className="relative w-[16px] h-[14px] top-[-1px] left-[-3px] cursor-pointer" />
                  </button>

                  {open && (
                    <div className="mt-6 bg-white border border-black rounded-md shadow-md flex-col w-[257px] h-auto p-3 gap-3 absolute z-50 top-[12px] left-[16px] flex opacity-100">
                      <div className="w-full max-w-[225px] m-auto flex flex-col h-[194px] opacity-100 top-[12px] left-[16px] gap-3">
                        <a
                          href="#"
                          className="w-full h-[26px] text-black text-[16px] leading-[26px] font-commissioner ml-2 mt-1 border-b border-gray-600"
                        >
                          Web Development
                        </a>
                        <a
                          href="#"
                          className="w-full h-[26px] text-black text-[16px] leading-[26px] font-commissioner ml-2 border-b border-gray-600"
                        >
                          Mobile & App Development
                        </a>
                        <a
                          href="#"
                          className="w-full h-[26px] text-black text-[16px] leading-[26px] font-commissioner ml-2 border-b border-gray-600"
                        >
                          AI & Machine Learning
                        </a>
                        <a
                          href="#"
                          className="w-full h-[26px] text-black text-[16px] leading-[26px] font-commissioner ml-2 border-b border-gray-600"
                        >
                          DevOps
                        </a>
                        <a
                          href="#"
                          className="w-full h-[26px] text-black text-[16px] leading-[26px] font-commissioner ml-2 border-b border-gray-600"
                        >
                          UI/UX Design
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "w-[72px] h-[24px] opacity-100 font-nunito font-bold text-[16px] leading-[24px] text-center text-[#6449FF]"
                    : "w-[71px] h-[24px] opacity-100 text-[16px] leading-[24px] font-semibold font-nunito text-center text-[#000018]"
                }
              >
                About Us
              </NavLink>
            </div>
            {location.pathname !== "/contact" && (
              <NavLink
                to="/contact"
                className=" w-200 border hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] transition duration-300 cursor-pointer h-[48px] opacity-100 flex items-center gap-2 rounded-lg text-[#6449FF] p-4 bg-white shadow-[0px_15px_55px_-5px_rgba(100,73,255,0.4)] font-commissioner font-semibold text-[14px] leading-[24px] tracking-[0] align-middle"
              >
                Contact Us
                <div className="text-[#6449FF] text-[15px] opacity-100 rotate-320">
                  <FaArrowRightLong />
                </div>
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
          className={`absolute xl:hidden  top-[60px] left-0 w-full h-[350px] flex flex-col gap-[40px] p-6
          bg-white shadow-md border border-gray-300 rounded-md z-50 transition-all duration-500 ease-in-out
          ${
            mobileOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-full max-w-[144px] h-[200px] flex flex-col gap-10 opacity-100 items-center ">
            <NavLink
              to="/"
              className="font-nunito  mr-5 font-semibold text-[18px] leading-[24px] tracking-[0%]  text-[#000018]"
            >
              Home
            </NavLink>

            <div className="w-[85px] h-[24px] ml-3 rotate-0 opacity-100 flex">
              <NavLink
                to="/services"
                className="font-nunito font-semibold text-[18px] leading-[24px] tracking-[0%]  text-[#000018]"
              >
                Services
              </NavLink>

              <div className="relative flex">
                <button
                  onClick={() => toggleAccordion(1)}
                  className={`w-full  bg-white px-5 py-4 flex gap-51 transition-colors 
                    ${
                      openIndex === 1
                        ? "bg-gray-300 text-gray-800"
                        : "bg-gray-200 text-gray-600"
                    } 
                    hover:bg-gray-300`}
                >
                  <FaAngleDown className="relative  bottom-3 z-10 w-[16px] h-[14px] transform transition-transform duration-300 cursor-pointer" />
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out  ${
                    openIndex === 1
                      ? "max-h-96 opacity-100 z-50 overflow-visible"
                      : "max-h-0 opacity-0 z-0 overflow-hidden"
                  }`}
                >
                  <div className="p-6 relative border w-[335px] right-35   top-8 h-[220px] bg-white  flex flex-col gap-5">
                    <a
                      href="#"
                      className="text-[14px] leading-[20px] font-normal border-b font-commissioner text-[#000018]"
                    >
                      Web Development
                    </a>
                    <a
                      href="#"
                      className="text-[14px] leading-[20px] font-normal border-b font-commissioner text-[#000018]"
                    >
                      Mobile & App Development
                    </a>
                    <a
                      href="#"
                      className="text-[14px] leading-[20px] font-normal border-b font-commissioner text-[#000018]"
                    >
                      AI & Machine Learning
                    </a>
                    <a
                      href="#"
                      className="text-[14px] leading-[20px] font-normal border-b font-commissioner text-[#000018]"
                    >
                      DevOps
                    </a>
                    <a
                      href="#"
                      className="text-[14px] leading-[20px] font-normal border-b font-commissioner text-[#000018]"
                    >
                      UI/UX Design
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              to="/about"
              className="font-nunito font-semibold text-[18px] leading-[24px] tracking-[0%]  text-[#000018]"
            >
              About Us
            </NavLink>

            {location.pathname !== "/contact" && (
              <NavLink
                to="/contact"
                className="w-[168px] ml-20 border  hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] transition duration-300 cursor-pointer h-[48px] opacity-100 flex items-center gap-2 rounded-lg text-[#6449FF] px-7 py-[6px] bg-white shadow-[0px_15px_55px_-5px_rgba(100,73,255,0.4)] font-commissioner font-semibold text-[16px] leading-[24px] tracking-[0] align-middle"
              >
                Contact Us
                <div className="text-[#6449FF] text-[15px] opacity-100 rotate-320">
                  <FaArrowRightLong />
                </div>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
