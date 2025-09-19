import Navbar from "../Components/Navbar";
import Main from "../Components/Main";
import Skills from "../Components/Slider";
import Mission from "../Components/Mission";
import Values from "../Components/Values";
import Testimonials from "../Components/Testimonials";
import Form from "../Components/Form";
import Posts from "../Components/Posts";
import Footer from "../Components/Footer";
import Courses2 from "../Components/Courses2";
import Updates from "../Components/Updates";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main page="home" />
      <Skills />
      <section className="xl:mt-18 mt-20">
        <Mission />
      </section>
      <Courses2 page="home" />
      <section className="xl:mt-0 mt-12">
        <Values />
      </section>
      <Testimonials />
      <section className="xl:mt-5 mt-15">
        <Form />
      </section>
      <Posts />
      <Updates />
      <section className="xl:mt-0 mt-10">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
