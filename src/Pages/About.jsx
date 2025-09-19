import Slider from "react-slick";
import Main from "../Components/Main";
import Mission from "../Components/Mission";
import Navbar from "../Components/Navbar";
import Skills from "../Components/Slider";
import Approach from "../Components/Approach";
import Founder from "../Components/Founder";
import Values from "../Components/Values";
import Form from "../Components/Form";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <Main page="about" />
      <section className="xl:mt-0 mt-12">
        <Mission />
      </section>
      <Approach />
      <Founder />
      <section className="xl:mt-0 mt-20">
        <Values />
      </section>
      <section className="xl:mt-0 mt-20">
        <Form />
      </section>
      <section className="xl:mt-0 mt-20">
        <Footer />
      </section>
    </div>
  );
};

export default About;
