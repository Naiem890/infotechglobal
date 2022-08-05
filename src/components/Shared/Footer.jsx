import React from "react";
import FooterCompanyInfo from "./FooterCompanyInfo";
import FooterContactInfo from "./FooterContactInfo";
import FooterCopyRight from "./FooterCopyRight";
import FooterQuickLinks from "./FooterQuickLinks";

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <div className="container">
        {/* Footer content */}
        <div className="grid md:grid-cols-12 gap-8 pt-16 pb-20">
          <div className="col-span-full md:col-span-5">
            <FooterCompanyInfo />
          </div>
          <div className="col-span-full md:col-span-3">
            <FooterQuickLinks />
          </div>
          <div className="col-span-full md:col-span-4">
            <FooterContactInfo />
          </div>
        </div>
        <FooterCopyRight />
      </div>
    </div>
  );
};

export default Footer;
