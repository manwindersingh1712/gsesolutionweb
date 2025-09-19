import React from "react";
import { MdDescription } from "react-icons/md";

const Approach = () => {
  const ApproachData = [
    {
      id: "01",
      title: "You have an idea. We turn it into a reality",
      description:
        "Constantly pushing the boundaries of technology to transform your ideas into tangible products",
    },
    {
      id: "02",
      title: "We design and build your dream product",
      description:
        "Constantly pushing the boundaries of technology to transform your ideas into tangible products",
    },
    {
      id: "03",
      title: "We design and build your dream product",
      description:
        "Constantly pushing the boundaries of technology to transform your ideas into tangible products",
    },
    {
      id: "04",
      title: "We enhance your future experiences",
      description:
        "Constantly pushing the boundaries of technology to transform your ideas into tangible products",
    },
  ];

  return (
    <div>
      <div className="relative w-full xl:h-[950px] h-[1500px] bg-[rgba(0,0,24,1)] mt-20 overflow-hidden">
        <div className="absolute xl:w-[492px] h-[520px] xl:top-[700px] top-[500px] right-20 xl:right-0 xl:left-[1px] blur-[140px] opacity-50 bg-gradient-to-tr from-[#6449FF] to-[#A688FF]"></div>
        <div className="absolute xl:w-[380px] w-[238px] h-[520px] top-[70px] xl:top-[1px] left-[80px] xl:left-[1500px] bg-gradient-to-tr from-[#F545A6] to-[#FF8DCB] blur-[140px] opacity-50 rounded-[77px] rotate-180"></div>

        <div className=" xl:w-[1160px] w-[335px]  m-auto xl:pt-12 xl:pb-12 mt-20 overflow-hidden">
          <div className="flex flex-col w-full xl:w-[1160px] border items-center justify-center gap-2">
            <div className="xl:w-[133px] w-[108px] h-[18px] xl:h-[22px] font-commissioner font-medium xl:text-[14px] text-[12px] text-center uppercase text-[#ffffff] flex items-center justify-center gap-2">
              OUR APPROACH
            </div>
            <div className="text-center xl:w-[590px] w-[335px] h-auto xl:h-[44px] font-montserrat font-bold xl:text-[32px] text-[24px] leading-[32px] xl:leading-[44px] text-[#FFFFFF]">
              What it’s like working with{" "}
              <span className="text-[#F545A6]"> GSE </span> ?
            </div>
          </div>

          <section className="xl:w-[1160px] w-full text-white mt-20">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col xl:flex-row xl:w-[710px] w-full h-auto xl:h-[256px] gap-10">
                {ApproachData.slice(0, 2).map((app, index) => (
                  <div
                    key={index}
                    className="relative mt-10 w-full xl:w-[335px]"
                  >
                    <div className="w-[91px] h-[64px] absolute -top-8 left-4 opacity-60 font-montserrat font-bold text-[65px] leading-[64px] tracking-[-1%] text-center text-white bg-[#342c59] flex items-center justify-center z-10">
                      {app.id}
                    </div>

                    <div className="rounded-[12px] xl:h-[215px] relative border-2 border-[#FFFFFF1A] p-4 xl:p-2 flex flex-col gap-4">
                      <h3 className="font-montserrat mt-10 w-full xl:w-[287px] text-[#ffffff] font-bold text-[20px] xl:text-[24px]">
                        {app.title}
                      </h3>
                      <p className="mt-2 font-commissioner font-normal leading-[22px] tracking-normal w-full xl:w-[287px] opacity-100 text-[14px]">
                        {app.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col xl:flex-row xl:w-[710px]  w-full h-auto xl:h-[256px] xl:ml-[400px] gap-10">
                {ApproachData.slice(2).map((app, index) => (
                  <div
                    key={index}
                    className="relative mt-10 w-full xl:w-[335px]"
                  >
                    <div className="w-[91px] h-[64px] absolute -top-8 left-4 opacity-60 font-montserrat font-bold text-[65px] leading-[64px] tracking-[-1%] text-center text-white bg-[#342c59] flex items-center justify-center z-10">
                      {app.id}
                    </div>

                    <div className="rounded-[12px] xl:h-[215px] relative border-2 border-[#FFFFFF1A] p-4 xl:p-2 flex flex-col gap-4">
                      <h3 className="font-montserrat mt-10 w-full xl:w-[287px] text-[#ffffff] font-bold text-[20px] xl:text-[24px]">
                        {app.title}
                      </h3>
                      <p className="mt-2 font-commissioner font-normal leading-[22px] tracking-normal w-full xl:w-[287px] opacity-100 text-[14px]">
                        {app.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Approach;
