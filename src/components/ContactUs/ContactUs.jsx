import React from "react";
import Banner from "../Shared/Banner";
import ContactBannerImg from "./../../assets/contact-banner.jpg";
import ContactBox from "./ContactBox";

const ContactUs = () => {
  return (
    <div>
      <Banner BannerImg={ContactBannerImg} BannerText={"Contact Us"} />
      <ContactBox />
    </div>
  );
};

export default ContactUs;
