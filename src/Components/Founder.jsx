import React from "react";
import amanjot from "../img/aman.jpeg";
import navjot from "../img/navu.jpeg";
import manwinder from "../img/mani.jpeg";

import { FaArrowRightLong } from "react-icons/fa6";

const Founder = () => {
  const FounderData = [
    {
      image: manwinder,
      title: "Manwinder Singh",
      description: "Founding member",
    },
    {
      image: navjot,
      title: "Navjot Singh",
      description: "Founding member",
    },
    {
      image: amanjot,
      title: "Amanjot Singh",
      description: "Founding member",
    },
  ];

  return (
    <div className="xl:w-full w-[375px]    m-auto xl:m-0 xl:pt-8 xl:mt-0 mt-25 xl:pr-[140px] xl:pb-2 xl:pl-[140px]">
      <div className="relative mx-auto   xl:mt-30   flex flex-col gap-[50px]  xl:w-[1160px] w-[335px] overflow-hidden">
        <div className="flex flex-col  items-center justify-center xl:gap-6 gap-3">
          <div className="xl:w-[157px] xl:h-[22px] w-[139px] h-[18px] font-commissioner font-medium xl:text-[14px] text-[12px] text-center uppercase text-[#F545A6]">
            OUR TEAM
          </div>
          <div className="text-center xl:w-[500px] w-[335px] font-montserrat font-bold xl:text-[32px] text-[24px] leading-[36px] xl:leading-[44px] text-[#000018]">
            How do we make it happen?
          </div>
          <p className="xl:w-[450px] w-[259px] font-commissioner font-normal xl:text-[18px] text-[14px] xl:leading-[28px] leading-[22px] text-center text-[#000018]">
            With the help of our team
          </p>
        </div>

        <div className="grid grid-cols-1  xl:grid-cols-3 gap-8 place-items-center">
          {FounderData.map((founder, index) => (
            <div
              key={index}
              className=" flex flex-col  min-w-[250px] justify-center  items-center p-6 rounded-lg  shadow-sm"
            >
              <img
                src={founder.image}
                alt={founder.title}
                className="w-[120px] h-[120px] object-cover rounded-full"
              />
              <div className="mt-4 font-montserrat font-bold text-[20px] xl:text-[24px] text-center text-[#000018]">
                {founder.title}
              </div>
              <p className="mt-2 font-commissioner text-[14px] xl:text-[16px] leading-[22px] xl:leading-[26px] text-center text-[#000018]">
                {founder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founder;
