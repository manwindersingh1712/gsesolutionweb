import React from "react";
import newsletter from "../img/newsletter.svg";

const Updates = () => {
  return (
    <div className="w-full   mt-6 h-[440px]  flex xl:hidden bg-[#F5F5F5]">
      <div className="w-[335px]  h-[410px]  flex flex-col justify-center mt-2 items-center  gap-5 pt-10 mx-auto ">
        <img src={newsletter} />
        <h1 className="w-[263px] h-[72px] font-montserrat font-bold text-[24px] leading-[36px] tracking-[-0.5%] text-center align-middle text-[#000018] ">
          Want more Insights and Updates?
        </h1>
        <div className="flex flex-col gap-1">
          <label className="font-commissioner font-medium text-[14px] leading-[22px] tracking-[0%]   text-[#666674]">
            Email (*)
          </label>
          <input
            type="email"
            className="w-[280px] p-2 h-[48px] rounded-[8px] border border-[rgba(0,0,24,0.15)] mt-3 opacity-100"
            name="email"
          />
        </div>
        <button className="font-commissioner  p-5 w-[160px] rounded-xl h-[20px] font-semibold text-[16px] bg-[#000018] leading-[22px] tracking-[0%] text-center  flex items-center justify-center text-white hover:shadow-[0_0_15px_rgba(100,73,255,0.6)]  duration-300 transition ">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Updates;
