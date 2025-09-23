import React, { useState } from "react";
import {
  FaAngleDown,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import logo from "../img/logo.svg";
import Phone from "../img/PhoneCall.svg";
import Envelope from "../img/Envelope.svg";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full relative  m-auto  min-h-[300px]  xl:pr-[140px] xl:pb-[60px] xl:pl-[140px]">
      <div className="absolute inset-0 -z-10 opacity-60 blur-[100px] bg-gradient-to-bl from-[#6449FF] via-white to-pink-400  "></div>
      <div className="xl:w-[1165px]  w-[335px] m-auto  relative ">
        <div className="xl:flex xl:gap-22">
          <div className="flex flex-col gap-6 xl:gap-10 xl:w-[264px] w-[335px] m-auto xl:m-0 h-auto">
            <img src={logo} className="w-19" />
            <p className="text-[14px] leading-[22px] text-[#000018] font-normal font-commissioner">
              Innovate.Grow.Succeed
            </p>
            <div className="flex gap-1  flex-wrap">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="xl:w-[150px] w-[280px] h-[40px] rounded-lg border border-[rgba(0,0,24,0.15)] text-[14px] leading-[20px] font-normal font-commissioner p-2"
              />
              <RiSendPlaneFill className="w-[48px] h-[40px] bg-[rgba(0,0,24,1)] p-3 text-white rounded-[8px] text-[80px]" />
            </div>

            <div className="w-full xl:hidden mt-5">
              {[
                {
                  title: "Services",
                  links: [
                    "Web Development",
                    "Mobile & App Development",
                    "AI & Machine Learning",
                    "DevOps",
                    "UI/UX Design",
                  ],
                },
                { title: "Company", links: ["About Us", "Contact Us"] },
                { title: "Help", links: ["Terms & Conditions", "FAQ"] },
                {
                  title: "Contact",
                  links: [
                    { icon: Phone, text: "+91 9051200800" },
                    { icon: Envelope, text: "info@gsesolutions.com" },
                  ],
                },
              ].map((section, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full text-left  flex justify-between items-center  border-b px-5 py-4 transition-colors bg-white hover:bg-gray-300 ${
                      openIndex === index
                        ? "bg-gray-300 text-gray-800"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {section.title}
                    <FaAngleDown
                      className={`w-[16px] h-[14px] transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 py-3 flex flex-col gap-4 bg-white border border-t-0 border-gray-200">
                      {section.links.map((link, idx) =>
                        typeof link === "string" ? (
                          <a
                            key={idx}
                            href="#"
                            className="text-[14px] leading-[20px] font-normal font-commissioner text-[#000018]"
                          >
                            {link}
                          </a>
                        ) : (
                          <div key={idx} className="flex items-center gap-2">
                            <img src={link.icon} alt="icon" />
                            <p className="text-[14px] leading-[20px] font-normal font-commissioner text-[#000018]">
                              {link.text}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-9 mt-5 xl:mt-0">
              <FaFacebookF className="w-6 h-6" />
              <FaLinkedinIn className="w-6 h-6" />
              <FaTwitter className="w-6 h-6" />
            </div>
          </div>

          <div className="hidden xl:flex xl:gap-10">
            {[
              {
                title: "Services",
                links: [
                  "Web Development",
                  "Mobile & App Development",
                  "AI & Machine Learning",
                  "DevOps",
                  "UI/UX Design",
                ],
                width: "xl:w-[190px]",
              },
              {
                title: "Company",
                links: ["About Us", "Contact Us"],
                width: "xl:w-[79px]",
              },
              {
                title: "Help",
                links: ["Terms & Conditions", "FAQ"],
                width: "xl:w-[134px]",
              },
              {
                title: "Contact",
                links: [
                  { icon: Phone, text: "+91 9051200800" },
                  { icon: Envelope, text: "info@gsesolutions.com" },
                  "Umaid Vilas, Cantt Area,",
                  "Jodhpur,Rajasthan - 342006",
                ],
                width: "xl:w-[207px]",
              },
            ].map((section, idx) => (
              <div
                key={idx}
                className={`xl:flex xl:flex-col ${section.width} gap-4`}
              >
                <h1 className="text-[16px] leading-[24px] font-medium font-commissioner text-[#000018] py-2">
                  {section.title}
                </h1>
                {section.links.map((link, i) =>
                  typeof link === "string" ? (
                    <a
                      key={i}
                      href="#"
                      className="text-[14px] leading-[20px] font-normal font-commissioner text-[#000018]"
                    >
                      {link}
                    </a>
                  ) : (
                    <div key={i} className="flex items-center gap-2">
                      <img src={link.icon} alt="icon" />
                      <p className="text-[14px] leading-[20px] font-normal font-commissioner text-[#000018]">
                        {link.text}
                      </p>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
