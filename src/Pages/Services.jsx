import React from "react";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
import Skills from "../Components/Slider";
import Values from "../Components/Values";
import Form from "../Components/Form";
import Footer from "../Components/Footer";
import Courses2 from "../Components/Courses2";
import { FaArrowRightLong } from "react-icons/fa6";
import Hero from "../img/Hero2.svg";

const Services = () => {
  return (
    <div>
      <Navbar />
      <Main page="services" />
      <Skills />
      <Courses2 page="services" />
      <Values />
      <section className="mt-25 xl:mt-0 ">
        <Form />
      </section>
      <section className="xl:mt-0 mt-10">
        <Footer />
      </section>
    </div>
  );
};

export default Services;
