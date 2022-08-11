import React from "react";

import AboutUsContentImg1 from "./../../assets/about-us-content-1.jpg";
import AboutUsContentImg2 from "./../../assets/about-us-content-2.jpg";
import AboutUsContentImg3 from "./../../assets/about-us-content-3.jpg";

const AboutContent = () => {
  return (
    <div className="container my-28 leading-7">
      <div className="grid md:grid-cols-2 items-center mb-16">
        <div className="grid grid-cols-2 gap-5 md:pr-10">
          <img src={AboutUsContentImg1} alt="" />
          <div className="grid grid-cols-1 gap-5">
            <img src={AboutUsContentImg2} alt="" />
            <img src={AboutUsContentImg3} alt="" />
          </div>
        </div>
        <div className="md:mx-12 mb-7">
          <h6 className="uppercase font-medium font-poppins mb-2">About us</h6>
          <h2 className="text-4xl font-poppins font-bold mb-5">
            Welcome to Infotech Global Limited India. (IGLIND)
          </h2>
          <p>
            Infotech Global Limited India. (IGLIND) is a leading IT solutions
            provider, offering Applications development, Consulting and Business
            Process Outsourcing services globally through a combination of
            technology, domain and process expertise. We help our clients find
            the right problems to solve, and to solve these effectively. Our
            core values focus on quality processes and solutions, investing in
            the best people, and transparent communications - all to achieve our
            primary goal of customer satisfaction.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <p>
            Since its inception in 2017, IGLIND has been committed in delivering
            meaningful technology solutions to, Large Enterprises & Fortune 100+
            organizations. Partnering with IGLIND gives our customers access to
            some of the finest talent in the industry. Our highly qualified team
            of professionals leverages their skills and experiences in order to
            design and integrate exceptionally successful products and
            strategies. These strategies are built with the aim to empower our
            customers with the right tools and processes needed to achieve
            operating and financial goals.
          </p>
        </div>
        <div>
          At IGLIND, we believe our responsibilities extend beyond business.
          That is why we behave ethically and honestly in all our interactions –
          with our clients, our partners and our employees.
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
