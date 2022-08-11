import React from "react";
import ContactForm from "./ContactForm";
import LocationBlock from "./LocationBlock";

const ContactBox = () => {
  const ContactLocations = [
    {
      country: "USA",
      address: "347 Thornall Street, Suite #640 Edison, NJ 08839",
    },
    {
      country: "Singapore",
      address:
        "130 Robinson Road, Crown at Robinson Floor 12 Unit 2, 068907 Singapore",
    },
    {
      country: "Canada",
      address: "9 Slack Road, Suite 200 Ottawa, Ontario, K2G 0B7",
    },
    {
      country: "China",
      address:
        "Office 308, 4/F, Dongfeng KASO, Dongfengbeiqiao, Chaoyang District, Beijing 100016, China.",
    },
    {
      country: "India",
      address:
        "BLOCK 1,6TH FLOOR, Gachibowli Rd, DLF Cyber City, Indira Nagar,Gachibowli, HYD, TS 500032",
    },
  ];

  return (
    <div className="bg-light-blue py-24">
      <div className="md:container ">
        <div className="grid md:grid-cols-12 ">
          <div className="md:p-14 md:pl-[72px] p-11 md:col-span-7 bg-white order-2 md:order-1">
            <div className="mb-12">
              <h6 className="uppercase font-medium font-poppins mb-2">
                Contact us
              </h6>
              <h2 className="text-4xl font-poppins font-bold mb-5">
                Get In Touch
              </h2>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
          <div className="p-12 md:col-span-5 order-1 md:order-2 bg-dark-blue text-white">
            <h2 className="text-3xl font-poppins font-bold mb-8">
              Contact Info
            </h2>
            <div className="flex flex-col gap-5">
              {ContactLocations.map((location) => (
                <LocationBlock location={location} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
