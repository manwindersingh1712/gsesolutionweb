import React from "react";
import Light from "../img/Light.svg";
import Group from "../img/Group.svg";
import illustrate from "../img/Illustration.svg";

const Mission = () => {
  const MissionsData = [
    {
      title: "Innovation",
      description:
        "Constantly pushing the boundaries of technology to transform your ideas into tangible products",
      icon: Light,
    },
    {
      title: "Success",
      description:
        "Focused on delivering measurable results that contribute to your business success",
      icon: illustrate,
    },
    {
      title: "Growth",
      description:
        "Partnering with you to ensure sustainable business growth through technical transformation",
      icon: Group,
    },
  ];

  return (
    <div className="w-full  overflow-x-hidden ">
      <div className="xl:max-w-[1160px] xl:mt-20 xl:pt-10 xl:pb-12 max-w-[335px]  mx-auto  flex flex-col items-center gap-4 ">
        <div className="flex flex-col text-center justify-center items-center gap-4">
          <div className="font-commissioner  font-medium text-[12px] xl:text-[14px] uppercase text-[#F545A6] text-center">
            OUR MISSION
          </div>
          <h2 className="font-montserrat  xl:w-[412px] xl:h-[44px] w-[300px]   font-bold text-[24px] xl:text-[32px] leading-[36px] xl:leading-[44px] text-[#000018] text-center">
            Innovate. Grow. Succeed
          </h2>
          <p className="font-commissioner  xl:w-[894px] xl:h-[56px] w-[276px] text-[14px] xl:text-[18px] text-[#000018] text-center max-w-[894px] leading-[24px] xl:leading-[28px]">
            At GSE Solutions, our objective is to empower businesses by
            delivering innovative technical solutions that cater to the dynamic
            needs of the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1  xl:grid-cols-3 gap-4 xl:gap-14 mt-14 w-full">
          {MissionsData.map((mission, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl bg-[#F9F8FF] justify-between p-6 "
            >
              <div>
                <h3 className="font-montserrat font-bold text-[20px] xl:text-[24px] text-[#000018] mb-2">
                  {mission.title}
                </h3>
                <p className="font-commissioner text-[14px] xl:text-[16px] text-[#000018] leading-[22px] xl:leading-[24px]">
                  {mission.description}
                </p>
              </div>
              <img
                src={mission.icon}
                alt={mission.title}
                className="w-[64px] xl:w-[88px] h-auto mt-6 self-end"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
