import React from "react";
import AboutUsSection from "./AboutUsSection";
import Features from "./Features";
import Hero from "./Hero";
import Partner from "./Partner";
import ServicesSection from "./ServicesSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <AboutUsSection />
      <ServicesSection serviceCount={3} />
      <Partner />
    </div>
  );
};

export default Home;
