import { LoginIcon } from "@heroicons/react/solid";
import React from "react";
import InfoTechLogo from "./../../assets/logo.png";

const NavBar = () => {
  const Links = [
    { link: "/", linkText: "Home", isParent: false },
    {
      link: "/",
      linkText: "About Us",
      isParent: true,
      childLinks: [
        { link: "/", linkText: "Application Development" },
        { link: "/", linkText: "It professional Services" },
        { link: "/", linkText: "Quality Assurance Services" },
        { link: "/", linkText: "Business Intelligence & Report" },
        { link: "/", linkText: "Mobility SOlutions & Services" },
      ],
    },
    { link: "/", linkText: "About Us", isParent: false },
    { link: "/", linkText: "Career", isParent: false },
    { link: "/", linkText: "Contact US", isParent: false },
  ];

  return (
    <div className="sticky top-0 bg-white">
      <div class="navbar min-h-[90px] justify-between container">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links.map((link, i) =>
                link.isParent ? (
                  <li tabindex={i}>
                    <a href={link.link} class="justify-between">
                      {link.linkText}
                      <svg
                        class="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                      </svg>
                    </a>
                    <ul class="p-2 bg-dark-blue text-white">
                      {link.childLinks.map((clink) => (
                        <li>
                          <a
                            href={clink.link}
                            className="font-poppins uppercase font-medium"
                          >
                            {clink.linkText}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li>
                    <a
                      href={link.link}
                      className="font-poppins uppercase font-medium"
                    >
                      {link.linkText}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <a href="/" class="flex-shrink-0">
            <img
              src={InfoTechLogo}
              className="md:max-h-[90px] max-h-[72px]"
              alt=""
              srcset=""
            />
          </a>

          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0 ml-6">
              {Links.map((link, i) =>
                link.isParent ? (
                  <li tabindex={i}>
                    <a
                      href={link.link}
                      className="font-poppins uppercase font-medium transition-all"
                    >
                      {link.linkText}
                      <svg
                        class="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </a>
                    <ul class="p-2 bg-dark-blue text-white transition-all">
                      {link.childLinks.map((clink) => (
                        <li>
                          <a
                            href={clink.link}
                            className="font-poppins uppercase font-medium"
                          >
                            {clink.linkText}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li>
                    <a
                      href={link.link}
                      className="font-poppins uppercase font-medium"
                    >
                      {link.linkText}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <a
          href="/"
          class="uppercase font-poppins font-bold text-green hidden md:flex items-center"
        >
          <LoginIcon className="h-6 w-6" />
          Login
        </a>
      </div>
    </div>
  );
};

export default NavBar;
