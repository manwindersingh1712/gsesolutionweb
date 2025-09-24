import React from "react";
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RxArrowTopRight } from "react-icons/rx";

const Posts = () => {
  const blogData = [
    {
      date: "AUGUST 2024",
      title: "The Future of Web Development: Trends to Watch in 2024",
      description:
        "Explore the upcoming trends and technologies shaping the future of web development. From AI integrations to programming innovations...",
    },
    {
      date: "AUGUST 2024",
      title: "Maximizing Your Mobile App's Potential: Best Practices for 2024",
      description:
        "Learn the best practices for developing and optimizing mobile apps in 2024. This post covers key strategies for enhancing user experience...",
    },
    {
      date: "AUGUST 2024",
      title: "AI and ML: Transforming Business Operations",
      description:
        "Discover how artificial intelligence and machine learning are revolutionizing business operations. This article provides insights into practical applications...",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <div className="w-full   xl:m-0 m-auto relative xl:mb-10 mt-10 xl:mt-0 xl:pt-[10px] xl:pr-[140px] xl:pb-[108px] xl:pl-[140px] overflow-hidden">
      <div className="relative mx-auto w-[335px]  xl:w-[1160px] h-auto">
        <div className="flex flex-col items-center justify-center gap-3 xl:gap-4">
          <div className="w-[114px] h-[22px] font-commissioner font-medium text-[14px] text-center uppercase text-[#F545A6]">
            LATEST POSTS
          </div>
          <div className="text-center w-[412px] h-[44px] font-montserrat font-bold text-[32px] leading-[44px] text-[#000018]">
            Updates &{" "}
            <span className="font-montserrat font-bold text-[32px] leading-[44px] tracking-[-0.5%] text-[#6449FF]">
              Insights
            </span>
          </div>
          <p className="xl:w-[582px] w-[335px] h-auto mt-2 font-commissioner font-normal text-[18px] leading-[28px] text-center text-[#000018] opacity-100">
            Stay informed with the latest trends, tips, and news from the
            digital world. Our blog features expert insights and updates to help
            you navigate the evolving landscape of technology and digital
            solutions
          </p>
        </div>

        <div className="hidden xl:flex gap-[28px]  xl:w-[1160px] justify-center xl:mt-5 flex-wrap">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="xl:w-[366px] w-[335px]  gap-3 h-auto flex flex-col justify-between rounded-[12px] bg-white shadow-[0px_15px_55px_-5px_rgba(100,73,255,0.2)] overflow-hidden"
            >
              <div className="w-[335px] m-auto h-[186px] rounded-[8px] bg-[#bfbfbf] mt-5"></div>

              <div className="flex flex-col flex-grow mt-5 gap-1 px-5">
                <p className="text-[14px] font-medium uppercase font-commissioner text-[#f545a6] leading-[22px]">
                  {blog.date}
                </p>
                <h3 className="text-[20px] leading-[28px] tracking-[-0.2%] font-bold font-montserrat">
                  {blog.title}
                </h3>
                <p className="text-[16px] leading-[26px] text-[#52526B] font-normal">
                  {blog.description}
                </p>
              </div>

              <div className="px-5 mt-auto mb-5">
                <button className="w-[149px] h-[40px] items-center cursor-pointer text-[#6449FF] text-[15px] font-semibold font-commissioner flex gap-[10px] rounded-[8px] p-[16px] bg-[rgba(236,233,255,1)] hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] transition duration-300">
                  Read More
                  <RxArrowTopRight className="text-[#6449FF]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="  block xl:hidden mt-20">
          <Slider {...settings}>
            {blogData.map((blog, index) => (
              <div
                key={index}
                className="w-[335px] h-auto shadow-sm  rounded-[12px] bg-white  mx-auto overflow-hidden"
              >
                <div className="w-[295px] h-[186px] rounded-[8px] bg-[#bfbfbf] mt-5 mx-auto"></div>
                <div className="flex flex-col mt-5 gap-1 px-5">
                  <p className="text-[14px] font-medium uppercase font-commissioner text-[#f545a6] leading-[22px]">
                    {blog.date}
                  </p>
                  <h3 className="text-[20px] leading-[28px] tracking-[-0.2%] font-bold font-montserrat">
                    {blog.title}
                  </h3>
                  <p className="text-[16px] leading-[26px] text-[#52526B] font-normal">
                    {blog.description}
                  </p>
                </div>
                <div className="px-5 mt-5 mb-5">
                  <button className="w-[149px] h-[40px] items-center cursor-pointer text-[#6449FF] text-[15px] font-semibold font-commissioner flex gap-[10px] rounded-[8px] p-[16px] bg-[rgba(236,233,255,1)] hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] transition duration-300">
                    Read More
                    <RxArrowTopRight className="text-[#6449FF]" />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Posts;
