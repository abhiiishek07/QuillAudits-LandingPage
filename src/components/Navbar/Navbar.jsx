import React, { useEffect, useState } from "react";
import logo from "../../../public/assets/quillAudits-logo.png";
import Image from "next/image";

const Navbar = () => {
  const [crossbar, setCrossbar] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`px-0 lg:px-32  top-0 left-0 right-0 z-50 fixed w-full  text-white pt-3 ${
        !showBackground
          ? "bg-transparent text-white"
          : " backdrop-filter backdrop-blur-lg bg-opacity-30 bg-black"
      }`}
    >
      <div
        className={`navbar border-b-0  py-1 ${
          !showBackground && "lg:border-b-2 border-gray-600"
        }`}
      >
        <div className="navbar-start gap-2">
          <Image src={logo} height={40} />

          <p className="hidden lg:flex text-2xl font-bold">QuillAudits</p>
        </div>
        <div className="hidden navbar-center lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="text-lg">Services</summary>
                <ul className="p-2 text-black">
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="text-lg">
              <a>Pricing</a>
            </li>
            <li className="text-lg">
              <a>Out-Audits</a>
            </li>
            <li>
              <details>
                <summary className="text-lg">Tools</summary>
                <ul className="p-2 text-black">
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-lg">Resources</summary>
                <ul className="p-2 text-black">
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="text-lg">
              <a>Refer-Earn-Secure</a>
            </li>
          </ul>
        </div>
        <div className="xs:navbar-center lg:navbar-end">
          <button className="btn bg-gradient-to-r from-[#4F37EE] to-[#7184FD] via-[#3F7AF0] text-white px-4">
            Request An Audit
          </button>
        </div>

        <div className="navbar-end lg:hidden">
          <label className="btn btn-circle border-none shadow-none bg-transparent swap swap-rotate z-20 text-white">
            <input type="checkbox" onChange={() => setCrossbar(!crossbar)} />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        {crossbar && (
          <div className=" flex lg:hidden flex-col items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-indigo-900 to-black">
            <ul className="menu menu-vertical px-1 mt-36">
              <li>
                <details>
                  <summary className="text-lg">Services</summary>
                  <ul className="p-2">
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="text-lg">
                <a>Pricing</a>
              </li>
              <li className="text-lg">
                <a>Out-Audits</a>
              </li>
              <li>
                <details>
                  <summary className="text-lg">Tools</summary>
                  <ul className="p-2">
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="text-lg">Resources</summary>
                  <ul className="p-2">
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="text-lg">
                <a>Refer-Earn-Secure</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
