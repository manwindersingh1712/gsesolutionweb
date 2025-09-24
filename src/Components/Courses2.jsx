import React from "react";
import computer from "../img/computer.svg";
import coder from "../img/Coder.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import Mobile from "../img/mobile.svg";
import AI from "../img/AI.svg";
import pen from "../img/pen.svg";
import infinte from "../img/Infinite.svg";
import HTML from "../img/HTML.svg";
import AI2 from "../img/AI2.svg";
import dev from "../img/DevOps.svg";
import UI from "../img/UI.svg";
import { RxArrowTopRight } from "react-icons/rx";

const Courses2 = ({ page }) => {
  const CourseData = [
    {
      icon: computer,
      title: " Web Development",
      description:
        " Elevate your online presence with our custom web development services. We specialize in creating user-centric, responsive scalable, and secure websites that not only drive business growth but also effectively engage your audience",
      image: coder,
    },
    {
      icon: Mobile,
      title: "  Mobile & App Development",
      description:
        "Transform your ideas into reality with our mobile app development expertise. We design intuitive and robust apps for iOS and Android, customized to meet your business's unique needs",
      image: HTML,
    },
    {
      icon: AI,
      title: "AI & Machine Learing",
      description:
        " Leverage the power of AI and ML to gain insights, automate processes, and enhance decision-making. Our AI solutions are designed to help businesses stay ahead in a competitive landscape",
      image: AI2,
    },
    {
      icon: infinte,
      title: " DevOps",
      description:
        "   We optimize your infrastructure for efficiency, reliability, and scalability, leveraging platforms like AWS, DigitalOcean, and Azure to ensure your business can quickly adapt to change and maintain a competitive edge",
      image: dev,
    },
    {
      icon: pen,
      title: "UI/UX Design",
      description:
        "  Create impactful user experiences with our UI/UX design  services. We focus on crafting visually appealing and user-friendly designs that enhance customer engagement and  satisfaction",
      image: UI,
    },
  ];

  return (
    <div className=" w-full overflow-x-hidden ">
      {page === "services" && (
        <div
          id="services"
          className="relative mx-auto xl:mt-20  mt-8 flex flex-col justify-center items-center w-full  h-[3230px] xl:h-[2850px] opacity-100 "
        >
          <div className="absolute xl:top-18 m-auto top-20  flex flex-col xl:gap-[50px] xl:w-[1160px]  w-[335px] xl:h-[2600px] opacity-100 ">
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="xl:w-[122px] w-[108px] h-[18px] xl:h-[22px] font-commissioner font-medium xl:text-[14px] text-[12px] text-center uppercase text-[#000018]">
                OUR SERVICES
              </div>
              <div className="text-center xl:w-[1160px] w-[335px] h-[36px] xl:h-[44px] font-montserrat font-bold xl:text-[32px] text-[24px] leading-[44px] text-[#000018]">
                How can we <span className="text-[#F545A6]"> Help </span> ?
              </div>
              <p className="xl:w-[568px] w-[335px] h-[88px] font-commissioner font-normal xl:text-[18px] text-[14px] xl:leading-[28px] tracking-[0] text-center text-[#000018] opacity-100">
                Our expert IT consultants provide tailored solutions to optimize
                your technology infrastructure and drive success
              </p>
            </div>

            <div className="xl:w-[1160px]  w-[335px] h-[572px]  xl:h-[450px] flex flex-col gap-8 xl:gap-10 ">
              {CourseData.map((course, index) => (
                <div
                  key={index}
                  className={`xl:w-[1160px] w-[335px]  flex xl:flex xl:gap-90 xl:h-[450px] h-[572px] bg-white ${
                    index % 2 !== 0
                      ? "xl:flex-row-reverse flex-col-reverse"
                      : "xl:flex-row flex-col-reverse"
                  } rounded-[12px] shadow-[0px_15px_55px_-5px_rgba(100,73,255,0.2)]  xl:p-10`}
                >
                  <div className="flex xl:min-w-[458px]  min-w-[335px] flex-col xl:mt-10 min-h-[240px] gap-4   xl:min-h-[350px]   ">
                    <img
                      src={course.icon}
                      className="xl:w-[48px] xl:h-[48px] hidden xl:flex"
                    />
                    <h3 className="font-montserrat text-center xl:text-left font-bold xl:text-[32px] text-[20px] xl:leading-[44px] tracking-[-0.5%] min-w-[197px] min-h-[26px] xl:min-w-[320px]  xl:min-h-[45px]">
                      {course.title}
                    </h3>
                    <p className="font-commissioner text-center mx-auto xl:mx-0 xl:text-left font-normal xl:text-[16px] text-[14px] leading-[22px] xl:leading-[26px] tracking-[0%] w-[281px] xl:w-[361px] min-h-[132px] xl:min-h-[130px]">
                      {course.description}
                    </p>
                    <button className="w-[149px] h-[40px] xl:mx-0 mx-auto items-center text-[#6449FF] text-[15px] leading-[24px] font-semibold font-commissioner hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] transition duration-300 flex gap-[10px] opacity-100 text-center rounded-[8px] p-[16px] bg-[rgba(236,233,255,1)] cursor-pointer">
                      Contact Us{" "}
                      <RxArrowTopRight className="text-[#6449FF] text-[15px] opacity-100  " />
                    </button>
                  </div>

                  <div>
                    <img
                      src={course.image}
                      className="xl:w-[450px] mx-auto w-[221px] h-[304px] xl:h-[450px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {page === "home" && (
        <div id="home" className="relative w-full mt-20  bg-[rgba(0,0,24,1)] ">
          <div className="absolute xl:w-[492px] h-[520px] xl:top-[700px] top-[500px] right-20 xl:right-0 xl:left-[20px] blur-[140px] opacity-50 bg-gradient-to-tr from-[#6449FF] to-[#A688FF]"></div>
          <div className="absolute xl:w-[380px] w-[238px] h-[420px] top-[70px] xl:top-[160px] blur-[140px] opacity-50  left-[80px] xl:left-[1300px] bg-gradient-to-tr from-[#F545A6]  to-[#FF8DCB] rounded-[77px] rotate-180"></div>

          <section className="relative mx-auto xl:w-[1160px] w-[335px] text-white py-20">
            <div className="flex flex-col xl:flex-row gap-14">
              <div className="flex flex-col xl:w-[552px] w-full gap-14">
                <div className="flex flex-col gap-3 text-center xl:text-left">
                  <h1 className="font-commissioner font-medium text-[12px] xl:text-[14px] uppercase tracking-[2px]">
                    Our Services
                  </h1>
                  <h2 className="font-montserrat font-bold text-[24px] xl:text-[32px] leading-[36px] xl:leading-[44px]">
                    How can we <span className="text-[#F545A6]">Help</span>?
                  </h2>
                  <p className="font-commissioner text-[14px] xl:text-[18px] leading-[22px] xl:leading-[28px]">
                    Our expert IT consultants provide tailored solutions to
                    optimize your technology infrastructure and drive success.
                  </p>
                </div>

                <div className="grid gap-10">
                  {CourseData.slice(0, 2).map((course, index) => (
                    <div
                      key={index}
                      className="bg-white text-black rounded-[12px] shadow-lg p-6 xl:p-8 flex flex-col gap-4"
                    >
                      <img src={course.icon} alt="" className="w-12 h-12" />
                      <h3 className="font-montserrat font-bold text-[20px] xl:text-[24px]">
                        {course.title}
                      </h3>
                      <p className="font-commissioner text-[14px] xl:text-[16px]">
                        {course.description}
                      </p>
                      <button className="w-[149px] cursor-pointer h-[40px] mt-5 items-center text-[#6449FF] text-[15px] font-semibold font-commissioner flex gap-[10px] rounded-[8px] p-[16px] bg-[rgba(236,233,255,1)] hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] transition duration-300">
                        Learn More
                        <RxArrowTopRight className="text-[#6449FF]" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-10 xl:w-[552px]">
                {CourseData.slice(2).map((course, index) => (
                  <div
                    key={index}
                    className="bg-white text-black rounded-[12px] shadow-lg p-6 xl:p-8 flex flex-col gap-4"
                  >
                    <img src={course.icon} alt="" className="w-12 h-12" />
                    <h3 className="font-montserrat font-bold text-[20px] xl:text-[24px]">
                      {course.title}
                    </h3>
                    <p className="font-commissioner text-[14px] xl:text-[16px]">
                      {course.description}
                    </p>
                    <button className="w-[149px] cursor-pointer h-[40px] mt-5 items-center text-[#6449FF] text-[15px] font-semibold font-commissioner flex gap-[10px] rounded-[8px] p-[16px] bg-[rgba(236,233,255,1)] hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] transition duration-300">
                      Learn More
                      <RxArrowTopRight className="text-[#6449FF]" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center flex flex-col  justify-center items-center mt-12">
              <p className="font-commissioner text-[16px] xl:w-[406px] xl:text-[18px] leading-[28px]">
                Ready to{" "}
                <span className="xl:text-white text-[#F545A6]">Transform</span>{" "}
                your Business with our Comprehensive Digital Services?
              </p>
              <button>
                <a
                  href="#formSection"
                  className="relative text-center w-[184px] h-[48px] top-[20px] opacity-100 flex gap-[10px] px-[32px] py-[16px]
                              rounded-[8px] bg-white text-[#6449FF] transition-all ease-out hover:bg-[#6449FF] hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] duration-300
                              hover:text-[rgba(255,255,255,1)] font-commissioner font-semibold text-[16px] cursor-pointer leading-[24px] items-center justify-center"
                >
                  Contact Us <RxArrowTopRight />
                </a>
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Courses2;
