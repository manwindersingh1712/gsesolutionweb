import React from "react";
import Navbar from "../Components/Navbar";
import Map from "../Components/Map";
import Footer from "../Components/Footer";
import Form from "../Components/Form";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <section className="xl:mt-0 mt-10">
        <Form />
      </section>

      <Map />
      <section className="xl:mt-0 mt-20">
        <Footer />
      </section>
    </div>
  );
};

export default ContactUs;
