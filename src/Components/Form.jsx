import React, { useState } from "react";
import FormPic from "../img/FormPic.svg";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("mpwjoyla");
  const [errors, setErrors] = useState({});

  const validateForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const newErrors = {};

    if (!form.name.value.trim()) newErrors.name = "Required";
    if (!form.company.value.trim()) newErrors.company = "Required";
    if (!form.email.value.trim()) newErrors.email = "Required";
    if (!form.number.value.trim()) newErrors.number = "Required";
    if (!form.service.value.trim() || form.service.value === "Select Service")
      newErrors.service = "Required";
    if (!form.message.value.trim()) newErrors.message = "Required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleSubmit(event);
    }
  };

  if (state.succeeded) {
    alert("Form Submitted");
  }

  return (
    <div
      id="formSection"
      className="w-full  h-[1300px] xl:h-[886px]  xl:m-0 m-auto xl:pt-[108px] xl:pr-[140px] xl:pb-[108px] xl:pl-[140px] "
    >
      <div className="xl:w-[1160px] w-[335px]  h-[1250px] xl:h-[670px] xl:relative opacity-100 rotate-0 mx-auto  overflow-hidden">
        <div className="xl:w-[428px] w-[335px] h-[435px] xl:h-[529px] absolute top-4 xl:top-[69.5px] xl:left-[72px] opacity-100 flex flex-col gap-10 rotate-0 overflow-hidden">
          <div className="flex flex-col gap-1 xl:gap-3 ">
            <h1 className="font-commissioner font-medium text-[13px] leading-[18.2px] tracking-[2px] uppercase text-[#F545A6]">
              CONTACT US
            </h1>
            <h2 className="font-montserrat font-bold xl:text-[32px] text-[24px] leading-[36px] xl:leading-[44px] text-[#14133B]">
              Request A Quote
            </h2>
            <p className="font-commissioner xl:flex hidden font-normal text-[18px] leading-[28px] text-[#14133B]">
              Reach out to us by providing your details
            </p>
          </div>
          <div>
            <img
              src={FormPic}
              className="xl:w-[394.793px] w-[295.17px] h-[240px] xl:h-[321px]"
            />
          </div>
        </div>

        <div className="xl:w-[529px] w-[296px] h-[652px] xl:h-[604px] absolute top-115 xl:top-[32px] xl:left-[567px]">
          <form onSubmit={validateForm} className="space-y-6 mt-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-commissioner font-medium text-[14px] text-[#666674]">
                  Name (*)
                </label>
                <input
                  type="text"
                  name="name"
                  className={`xl:w-[242px] w-[335px] p-2 h-[48px] rounded-[8px] border mt-3 ${
                    errors.name
                      ? "border-red-500"
                      : "border-[rgba(0,0,24,0.15)]"
                  }`}
                />
              </div>
              <div>
                <label className="font-commissioner font-medium text-[14px] text-[#666674]">
                  Company Name (*)
                </label>
                <input
                  type="text"
                  name="company"
                  className={`xl:w-[242px] w-[335px] p-2 h-[48px] rounded-[8px] border mt-3 ${
                    errors.company
                      ? "border-red-500"
                      : "border-[rgba(0,0,24,0.15)]"
                  }`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-commissioner font-medium text-[14px] text-[#666674]">
                  Email (*)
                </label>
                <input
                  type="email"
                  name="email"
                  className={`xl:w-[242px] w-[335px] p-2 h-[48px] rounded-[8px] border mt-3 ${
                    errors.email
                      ? "border-red-500"
                      : "border-[rgba(0,0,24,0.15)]"
                  }`}
                />
              </div>
              <div>
                <label className="font-commissioner font-medium text-[14px] text-[#666674]">
                  Phone (*)
                </label>
                <input
                  type="tel"
                  name="number"
                  className={`xl:w-[242px] w-[335px] p-2 h-[48px] rounded-[8px] border mt-3 ${
                    errors.number
                      ? "border-red-500"
                      : "border-[rgba(0,0,24,0.15)]"
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="font-commissioner font-medium text-[14px] text-[#666674]">
                Which ServiceNow services do you need? (*)
              </label>
              <select
                name="service"
                className={`xl:w-[519px] w-[335px] p-3 h-[48px] rounded-[8px] border mt-3 ${
                  errors.service
                    ? "border-red-500"
                    : "border-[rgba(0,0,24,0.15)]"
                }`}
              >
                <option>Select Service</option>
                <option>Web Development</option>
                <option>Mobile & App Development</option>
                <option>AI & Machine Development</option>
                <option>DevOps</option>
                <option>UI/UX Design</option>
              </select>
            </div>

            <div>
              <label className="font-commissioner font-medium text-[14px] text-[#666674]">
                Your Message (*)
              </label>
              <textarea
                name="message"
                rows="4"
                className={`xl:w-[519px] w-[335px] h-[112px] p-2 rounded-[8px] border mt-3 ${
                  errors.message
                    ? "border-red-500"
                    : "border-[rgba(0,0,24,0.15)]"
                }`}
              ></textarea>
            </div>

            <button
              type="submit"
              className="xl:w-[519px] w-[335px] font-commissioner hover:shadow-[0_0_15px_rgba(100,73,255,0.6)] duration-300 text-[16px] bg-[rgba(0,0,24,1)] text-white font-semibold py-3 rounded-md hover:bg-[#1a1b48] transition"
            >
              Get a Free Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
