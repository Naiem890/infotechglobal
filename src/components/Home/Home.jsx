import React from "react";
import Footer from "../Shared/Footer";
import AboutUs from "./AboutUs";
import Features from "./Features";
import Partner from "./Partner";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Features />
      <AboutUs />
      <Services />
      <Partner />
      <Footer />
    </div>
  );
};

export default Home;
