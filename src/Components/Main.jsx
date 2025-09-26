import React from "react";
import MainPic from "../img/main.svg";
import Hero from "../img/Hero2.svg";
import arrow from "../img/arrow.svg";
import AboutUs from "../img/AboutUs.svg";
import { RxArrowTopRight } from "react-icons/rx";

const Main = ({ page }) => {
  return (
    <div className=" max-w-full xl:h-[700px] z-0 xl:mt-2 mx-auto mt-1   h-190 overflow-x-hidden   ">
      <div className="absolute inset-0 -z-10 xl:mt-25 xl:mb-20 bg-gradient-to-bl from-pink-400 via-white to-[#6449FF] blur-[140px] opacity-60"></div>

      {page === "home" && (
        <div className="relative xl:w-[1206px]  xl:mt-10 xl:h-[539px] xl:m-auto">
          <div className="xl:absolute xl:top-[1px]  xl:ml-6 xl:w-[1160px] xl:mt-12 xl:h-[442px] xl:flex xl:flex-col xl:gap-[32px]  w-[335px] h-[683px] relative top-8 mx-auto flex flex-col gap-1">
            <div className="xl:absolute xl:top-[40px] xl:max-w-[516px] xl:max-h-[338px] xl:flex xl:flex-col xl:gap-[12px] max-w-[335px] max-h-[365px] flex flex-col gap-1">
              <div className="xl:w-[255px]  xl:h-[22px] text-[rgba(245,69,166,1)] opacity-100 font-commissioner font-medium xl:text-[14px] text-[16px] uppercase text-left">
                YOUR VISION. OUR EXPERTISE
              </div>

              <h1 className="xl:w-[516px]  xl:h-[120px] w-[335px] h-[100px] text-[28px] font-montserrat font-bold xl:text-[45px] xl:leading-[60px] xl:tracking-[-0.5%] text-[rgba(0,0,24,1)] text-left">
                <span className="xl:w-[516px]  xl:h-[120px] xl:text-[55px] text-[rgba(100,73,255,1)]">
                  Empowering
                </span>{" "}
                Your <br />
                Digital Journey
              </h1>

              <div className="font-normal  text-[18px] leading-[28px] xl:mt-2 font-commissioner">
                Delivering tailored IT engineering solutions to turn your
                digital ambitions into reality. From concept to implementation,
                we bring precision, innovation, and expertise to grow your
                business
              </div>

              <button>
                <a
                  href="#formSection"
                  className="relative text-center w-[184px] h-[48px] top-[20px] opacity-100 flex gap-[10px] px-[32px] py-[16px]
                   rounded-[8px] bg-[#000018] transition-all ease-out hover:bg-[#6449FF] hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] duration-300
                   text-[rgba(255,255,255,1)] font-commissioner font-semibold text-[16px] cursor-pointer leading-[24px] items-center justify-center"
                >
                  Get Started <RxArrowTopRight />
                </a>
              </button>
              <>
                <img
                  src={MainPic}
                  alt="Main"
                  className="xl:absolute  xl:w-[540px] xl:h-[360px] xl:mt-10 xl:left-[620px] relative mt-20 mx-auto"
                />
                <img
                  src={arrow}
                  alt="arrow"
                  className="xl:absolute xl:w-[350px]  xl:h-[100px] xl:top-[380px] xl:left-[180px] xl:rotate-2 xl:mix-blend-difference xl:flex hidden"
                />
              </>
            </div>
          </div>
        </div>
      )}
      {page === "services" && (
        <div className="relative xl:w-[1206px]  xl:mt-10 xl:h-[539px] xl:m-auto">
          <div className="xl:absolute xl:top-[1px]  xl:ml-6 xl:w-[1160px] xl:mt-12 xl:h-[442px] xl:flex xl:flex-col xl:gap-[32px] w-[335px] h-[683px] relative top-8 mx-auto flex flex-col gap-1">
            <div className="xl:absolute xl:top-[40px] xl:w-[516px] xl:h-[338px] xl:flex xl:flex-col xl:gap-[12px] w-[335px] h-[365px] flex flex-col gap-1">
              <div className="xl:w-[255px] xl:h-[22px] text-[rgba(245,69,166,1)] opacity-100 font-commissioner font-medium xl:text-[14px] text-[16px] uppercase text-left">
                YOUR VISION. OUR EXPERTISE
              </div>

              <h1 className="xl:w-[516px] xl:h-[120px] w-[335px] h-[100px] text-[28px] font-montserrat font-bold xl:text-[45px] xl:leading-[60px] xl:tracking-[-0.5%] text-[rgba(0,0,24,1)] text-left">
                <span className="xl:w-[516px] xl:h-[120px] xl:text-[55px] text-[rgba(100,73,255,1)]">
                  Empowering
                </span>{" "}
                Your <br />
                Digital Journey
              </h1>

              <div className="font-normal text-[18px] leading-[28px] xl:mt-2 font-commissioner">
                Delivering tailored IT engineering solutions to turn your
                digital ambitions into reality. From concept to implementation,
                we bring precision, innovation, and expertise to grow your
                business
              </div>

              <button>
                <a
                  href="#formSection"
                  className="relative text-center w-[184px] h-[48px] top-[20px] opacity-100 flex gap-[10px] px-[32px] py-[16px]
                   rounded-[8px] bg-[#000018] transition-all ease-out hover:bg-[#6449FF] hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] duration-300
                   text-[rgba(255,255,255,1)] font-commissioner font-semibold text-[16px] cursor-pointer leading-[24px] items-center justify-center"
                >
                  Get Started <RxArrowTopRight />
                </a>
              </button>

              <img
                src={Hero}
                alt="Main"
                className="xl:absolute xl:w-[540px] xl:h-[360px] xl:mt-10 xl:left-[620px] relative mt-20 mx-auto"
              />
            </div>
          </div>
        </div>
      )}

      {page === "about" && (
        <div className="relative overflow-hidden xl:w-[1206px]   mt-5 xl:mt-10 xl:h-[539px] xl:m-auto   ">
          <div className="xl:absolute xl:top-[1px]   xl:ml-6 xl:w-[1160px] xl:mt-12 xl:h-[442px]    xl:flex xl:flex-col xl:gap-[32px] w-[335px] h-[683px] relative top-8 mx-auto flex flex-col gap-1">
            <div className="xl:absolute   xl:top-[40px] xl:min-w-[516px]  xl:max-h-[338px]  xl:flex xl:flex-col xl:gap-[15px] max-w-[335px] h-[365px] flex flex-col gap-1">
              <div className="xl:w-[255px] xl:h-[22px] text-[rgba(245,69,166,1)] opacity-100 font-commissioner font-medium xl:text-[14px] text-[16px] uppercase text-left">
                ABOUT US
              </div>

              <h1 className="xl:w-[516px] xl:h-[60px]  w-[335px] h-[100px] text-[28px] font-montserrat font-bold xl:text-[45px] xl:leading-[60px] xl:tracking-[-0.5%] text-[rgba(0,0,24,1)] text-left">
                <span className="xl:w-[516px] xl:h-[120px] xl:text-[55px] text-[rgba(100,73,255,1)]">
                  Who
                </span>{" "}
                are We?
              </h1>

              <div className="font-normal text-[18px] leading-[28px]  font-commissioner">
                Our expert IT consultants provide tailored solutions to optimize
                your technology infrastructure and drive success. Our expert IT
                consultants provide tailored solutions to optimize your
                technology infrastructure and drive success.
              </div>

              <button>
                <a
                  href="#formSection"
                  className="relative text-center w-[184px] h-[48px] top-[20px] opacity-100 flex gap-[10px] px-[30px] py-[14px]
                   rounded-[8px] bg-[#000018] transition-all ease-out hover:bg-[#6449FF] hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] duration-300
                   text-[rgba(255,255,255,1)] font-commissioner font-semibold text-[16px] cursor-pointer leading-[24px] items-center justify-center"
                >
                  Get Started{" "}
                  <RxArrowTopRight className="text-[16px] text-bold" />
                </a>
              </button>

              <img
                src={AboutUs}
                alt="Main"
                className="xl:absolute  xl:max-w-[540px] xl:max-h-[360px]   xl:mt-1 xl:left-[660px] relative mt-10 mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
