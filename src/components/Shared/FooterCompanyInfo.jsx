import React from "react";
import Button from "./Button";
import FooterLogo from "./../../assets/logo-footer.png";

const FooterCompanyInfo = () => {
  return (
    <>
      <div className="mb-7">
        <a href="/">
          <img className="max-h-20" src={FooterLogo} alt="" />
        </a>
      </div>
      <div>
        <p>
          Infotech Global Limited India. (IGLIND) is a leading IT solutions
          provider, offering Applications development, Consulting and Business
          Process Outsourcing services globally through a combination of
          technology, domain and process expertise.
        </p>
      </div>
      <Button className="bg-dark-blue hover:bg-light-green mt-8 text-white">
        <a href="/">Read More</a>
      </Button>
    </>
  );
};

export default FooterCompanyInfo;
