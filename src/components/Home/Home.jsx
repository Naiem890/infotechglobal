import React from "react";
import Footer from "../Shared/Footer";
import AboutUs from "./AboutUs";
import Features from "./Features";
import Hero from "./Hero";
import Partner from "./Partner";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <AboutUs />
      <Services />
      <Partner />
      <Footer />
    </div>
  );
};

export default Home;
