import React from "react";
import AboutUsSection from "./AboutUsSection";
import Features from "./Features";
import Hero from "./Hero";
import Partner from "./Partner";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <AboutUsSection />
      <Services />
      <Partner />
    </div>
  );
};

export default Home;
