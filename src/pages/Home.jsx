import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import Courses from "../components/Courses-section/Courses";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Courses />
      <FreeCourse />
      <Footer />
    </Fragment>
  );
};

export default Home;
