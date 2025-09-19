import React from "react";
import Slider from "react-slick";
import { GiPolarStar } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const skills = [
    "AI/ML",
    "DevOps",
    "UI/UX Design",
    "Web Development",
    "AI ChatBot",
    "Mobile App Development",
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    variableWidth: true,
    rtl: false,
  };

  return (
    <div className="w-full  bg-white     absolute top-200  -z-14  overflow-x-hidden">
      <Slider {...settings}>
        {skills.concat(skills).map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-[15px] mr-20 mt-4 text-center px-6 h-[72px] bg-white"
          >
            <span className="text-[22px] font-medium text-gray-800 whitespace-nowrap">
              {skill}
            </span>
            <GiPolarStar className="text-pink-500 relative bottom-7 right-8 text-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Skills;
