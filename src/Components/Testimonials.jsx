import React, { useRef } from "react";
import Slider from "react-slick";
import {
  FaArrowRightLong,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import company from "../img/Negative.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  TbSquareRoundedArrowLeftFilled,
  TbSquareRoundedArrowRightFilled,
} from "react-icons/tb";
import { RxArrowTopRight } from "react-icons/rx";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      image: company,
      name: "Michael Lee",
      position: "Founder & CEO, BrightPath Solutions",
      testimonial:
        "“Working with GSE Solutions Pvt. Ltd. was a game-changer for our startup. Their team delivered a sleek, user-friendly platform that perfectly matched our vision and helped us scale quickly.”",
    },
    {
      id: 2,
      image: company,
      name: "Sarah Johnson",
      position: "CTO, Tech Innovators Inc.",
      testimonial:
        "“GSE Solutions Pvt. Ltd. transformed our digital presence with their exceptional web development and UI/UX design. Their innovative approach and commitment to excellence exceeded our expectations”",
    },
    {
      id: 3,
      image: company,
      name: "Ananya Sharma",
      position: "Marketing Director, Horizon Global",
      testimonial:
        "“The professionalism and creativity of GSE Solutions Pvt. Ltd. are unmatched. They not only improved our website’s performance but also elevated the overall brand experience for our customers.”",
    },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    accessibility: true,
    focusOnSelect: true,
    dots: true,
    pauseOnHover: false,
    variableWidth: true,
    appendDots: (dots) => (
      <div className="xl:flex mt-4 xl:justify-center">{dots}</div>
    ),
  };

  return (
    <section className="relative w-full  min-h-[850px] xl:min-h-[750px] mt-16 overflow-x-hidden xl:mt-0">
      <div className="absolute inset-0 -z-10 opacity-50 bg-gradient-to-bl from-pink-400 via-white to-[#6449FF]"></div>

      <div className="relative max-w-[335px] xl:max-w-[1160px] mx-auto  xl:px-[140px]  flex flex-col gap-14 items-center pt-10 pb-20">
        <div className="flex flex-col items-center gap-2">
          <div className="text-[#F545A6] font-commissioner font-medium text-[16px] xl:text-[14px] uppercase">
            TESTIMONIALS
          </div>
          <div className="text-center font-montserrat font-bold text-[24px] xl:text-[32px] w-[335px] xl:w-[644px]">
            What Our{" "}
            <span className="text-[#F545A6] xl:text-[rgba(100,73,255,1)]">
              Customers
            </span>{" "}
            Have To Say!
          </div>
        </div>

        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="hidden xl:flex absolute cursor-pointer top-1/2 left-3  transform -translate-y-1/2 w-[48px] h-[48px] items-center rounded-3xl p-4 justify-center text-white bg-[rgba(100,73,255,1)]"
        >
          <FaChevronLeft className="w-[48px]  h-[48px]" />
        </button>

        <div className="flex relative  overflow-hidden  w-full">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex flex-col m-auto items-center justify-center gap-6 w-full xl:w-[820px]  xl:p-6"
              >
                <div className="flex  min-h-[240px] w-[335px] xl:w-[820px] p-6 xl:p-8 ">
                  <p className="font-montserrat font-semibold text-[20px] xl:text-[32px] xl:leading-[48px] text-center text-[#000018]">
                    {t.testimonial}
                  </p>
                </div>
                <img
                  src={t.image}
                  className="hidden xl:flex opacity-0 xl:opacity-100 w-[300px] h-[300px] absolute top-20 -z-10 xl:ml-280  rounded-[77px]"
                />
                <h3 className="mt-4 font-commissioner font-semibold text-[20px] xl:text-[20px] text-center text-[#000018]">
                  {t.name}
                </h3>
                <p className="font-commissioner text-[14px] text-center text-[#000018]">
                  {t.position}
                </p>
              </div>
            ))}
          </Slider>
        </div>

        <button
          onClick={() => sliderRef.current.slickNext()}
          className="hidden xl:flex absolute cursor-pointer top-1/2 right-2 transform -translate-y-1/2 w-[48px] h-[48px] items-center justify-center  text-white bg-[rgba(100,73,255,1)] rounded-3xl p-4"
        >
          <FaChevronRight className="w-[48px] h-[48px]" />
        </button>

        <div className="flex flex-col items-center gap-4">
          <p className="font-commissioner font-medium text-[18px] text-center text-[#000018]">
            Want to start your journey towards Digital Success?
          </p>
          <button>
            <a
              href="#formSection"
              className="relative text-center w-[184px] h-[48px] top-[20px] opacity-100 flex gap-[10px] px-[32px] py-[16px]
                                      rounded-[8px] hover:bg-white hover:text-[#6449FF] transition-all ease-out bg-[#6449FF] hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] duration-300
                                      text-[rgba(255,255,255,1)] font-commissioner font-semibold text-[16px] cursor-pointer leading-[24px] items-center justify-center"
            >
              Contact Us <RxArrowTopRight />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
