import React from "react";

const FooterQuickLinks = () => {
  const FooterLinks = [
    {
      linkText: "Home",
      link: "/",
    },
    {
      linkText: "About Us",
      link: "/",
    },
    {
      linkText: "Serivces",
      link: "/",
    },
    {
      linkText: "Careers",
      link: "/",
    },
    {
      linkText: "Contact Us",
      link: "/",
    },
  ];
  return (
    <>
      <h3 className="mb-8 font-poppins font-bold text-2xl ">Quick Links</h3>
      <ul className="list-[square] pl-6 md:pl-0">
        {FooterLinks.map((link) => (
          <li className="underline underline-offset-4 text-lg mb-2 font-poppins font-medium cursor-pointer">
            <a href={link.link}>{link.linkText}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterQuickLinks;
