import React from "react";
import award from "../img/Award.svg";
import puzzle from "../img/Puzzle.svg";
import handshake from "../img/Hands.svg";
import light2 from "../img/Light2.svg";
import verify from "../img/Verify.svg";
import { RxArrowTopRight } from "react-icons/rx";

const Values = () => {
  const ValueData = [
    {
      icon: light2,
      title: "Innovation",
      description: "Constantly Pushing Technological Boundaries",
    },
    {
      icon: award,
      title: "Excellence",
      description: " Dedicated to Delivering Unmatched Quality",
    },
    {
      icon: handshake,
      title: "Client-Centric Approach ",
      description: "  Your Success is Our Priority",
    },
    {
      icon: verify,
      title: "Integrity",
      description: "Building Trust Through Transparency",
    },
    {
      icon: puzzle,
      title: "Collaboration",
      description: "Achieving Success Together, Always",
    },
  ];

  return (
    <div className="w-full  overflow-x-hidden min-h-[1300px] xl:min-h-[700px] m-auto xl:m-0 xl:pt-12 xl:pr-[140px] xl:pb-12 xl:pl-[140px] overflow-hidden">
      <div className="relative mx-auto xl:mt-20 xl:mb-20 flex flex-col gap-[30px] xl:w-[1160px]   w-[335px] h-[1290px] xl:h-[435px] overflow-hidden">
        <div className="flex flex-col items-center justify-center xl:gap-3 gap-3">
          <div className="xl:w-[157px] xl:h-[22px] w-[139px] h-[18px] font-commissioner font-medium xl:text-[14px] text-[12px] text-center uppercase text-[#F545A6]">
            OUR CORE VALUES
          </div>
          <div className="text-center xl:w-[472px] w-[335px] h-[76px] xl:h-[44px] font-montserrat font-bold xl:text-[32px] text-[24px] xl:leading-[44px] text-[#000018]">
            Why Choose <span className="text-[rgba(100,73,255,1)]"> GSE </span>{" "}
            Solutions?
          </div>
          <p className="xl:w-[450px] xl:h-[56px] w-[259px] h-[44px] font-commissioner font-normal xl:text-[18px] text-[14px] xl:leading-[28px] tracking-[0] text-center text-[#000018]">
            What sets us apart and why our clients trust us to drive their
            digital success
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="xl:w-[1160px] xl:h-[220px]  w-[199px] m-auto xl:m-0 h-[1100px] xl:flex gap-8  justify-center mt-2 xl:mt-5">
            {ValueData.map((value, index) => (
              <div key={index}>
                <div className="min-w-[180px]  min-h-[203px]  flex flex-col justify-center items-center gap-1">
                  <img
                    src={value.icon}
                    className="w-16 h-16 opacity-100 rounded-[12px]"
                  />
                  <div className="min-w-[135px] min-h-[36px] font-montserrat font-bold text-[24px]  text-center text-[rgba(0,0,24,1)]">
                    {value.title}
                  </div>
                  <p className="min-w-[210px]  min-h-[25px]  font-commissioner font-normal text-[16px] leading-[26px] tracking-[0] text-center text-[#000018]">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
            <button>
              <a
                href="#formSection"
                className="relative text-center m-auto xl:hidden w-46 h-[48px] top-[25px] left-1 opacity-100 flex gap-[10px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] 
                              rounded-[8px] bg-[#000018] transition-all duration-100ms ease-out hover:bg-[#6449FF] hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] duration-300
                              text-[rgba(255,255,255,1)] font-commissioner font-semibold text-[16px] cursor-pointer leading-[24px] rotate-0 items-center justify-center"
              >
                Get Started <RxArrowTopRight />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Values;
