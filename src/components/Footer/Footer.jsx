import {
  AUDITS_LIST,
  ECOSYSTEM_LIST,
  OTHER_SERVICES_LIST,
  PROGRAMMES_LIST,
  QUICK_LINKS_LIST,
  SOCIAL_LIST,
} from "@/constants/constants";
import Image from "next/image";
import DeFi_logo from "../../../public/assets/Defisec.png";
import Telangana_logo from "../../../public/assets/telangana.png";
import Quill_logo from "../../../public/assets/quillAudits-logo.png";
import Email_logo from "../../../public/assets/Email_logo.png";
import telegram_logo from "../../../public/assets/telegram_logo.png";

const Footer = () => {
  return (
    <div className="from-indigo-900  via-indigo-950  to-black text-lg px-5 lg:px-24 py-10 bg-gradient-to-br ">
      <div className=" relative">
        <div className="flex items-center justify-center md:justify-start gap-3">
          <div>
            <Image src={Quill_logo} alt="" />
          </div>
          <div className="text-white font-jost">
            <p className="font-light text-3xl tracking-wider">QuillAudits</p>
            <p className="text-xs ps-4 font-extralight">
              Making Web3 a safer place
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 text-white mt-8 md:hidden">
          <button className="w-32 px-1 py-2 text-xs text-center bg-gradient-to-r from-[#4F37EE] to-[#7184FD] via-[#3F7AF0] rounded-md">
            WAGSI Grants
          </button>

          <button className="w-32 px-1 py-2 text-xs text-center bg-gradient-to-r from-[#4F37EE] to-[#7184FD] via-[#3F7AF0] rounded-md">
            Ambassador Program
          </button>

          <button className="w-32 px-1 py-2 text-xs text-center bg-gradient-to-r from-[#4F37EE] to-[#7184FD] via-[#3F7AF0] rounded-md">
            Refer-Earn-Secure
          </button>

          <button className="w-32 px-1 py-2 text-xs text-center bg-gradient-to-r from-[#4F37EE] to-[#7184FD] via-[#3F7AF0] rounded-md">
            Partnership Program
          </button>
        </div>

        <div className="flex justify-around md:justify-between flex-wrap-reverse md:flex-wrap  gap-6  text-white font-jost mt-10">
          <div className="ms-2 md:ms-0">
            <ul className="space-y-5">
              <li className="font-500 border-b-2 border-[#2D83EE] inline-block py-1 font-md ">
                More About Quill
              </li>
              <li>
                <ul className="space-y-3 text-xs font-500">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">BlockChains We Audit</a>
                  </li>
                </ul>
              </li>
              <div className="space-y-2">
                <li className="font-500">Contact Us:</li>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Image src={Email_logo} alt="Email" height={2} width={20} />{" "}
                    <span className="underline italic text-[#F1F1F1] font-light">
                      audits@quillhash.com
                    </span>
                  </li>

                  <li className="flex gap-2">
                    <Image src={telegram_logo} alt="Telegram" />{" "}
                    <span className="underline italic text-[#F1F1F1] font-light">
                      t.me/quillaudits
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2 ">
                <li className="font-500 flex gap-2">
                  {/* <img src={location} alt="Location" /> */}
                  <span>Our Location:</span>
                </li>
                <li className="font-400 font-jost text-xs leading-5  w-[70%] md:w-[9.7rem] ">
                  Office 104/105 Level 1, Emaar Square, Building 4 Sheikh
                  Mohammed Bin Rashid Boulevard Downtown Dubai, United Arab
                  Emirates P.O box: 416654
                </li>
              </div>
            </ul>
          </div>
          <div>
            <ul className="space-y-5">
              <li className="font-500 border-b-2 border-[#2D83EE] inline-block py-1 font-md">
                Audit Services
              </li>
              <li>
                <ul className="space-y-3 text-xs lg:text-lg font-500">
                  {AUDITS_LIST.map((items, index) => {
                    return (
                      <li key={index}>
                        <a href="#">{items.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-5">
              <li className="font-500 border-b-2 border-[#2D83EE] inline-block py-1 font-md">
                Quill Ecosystem
              </li>
              <li>
                <ul className="space-y-3 text-xs lg:text-lg font-500">
                  {ECOSYSTEM_LIST.map((items, index) => {
                    return (
                      <li key={index}>
                        <a href="#">{items.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-5">
              <li className="font-500 border-b-2 border-[#2D83EE] inline-block py-1 font-md">
                Other Services
              </li>
              <li>
                <ul className="space-y-3 text-xs lg:text-lg font-500">
                  {OTHER_SERVICES_LIST.map((items, index) => {
                    return (
                      <li key={index}>
                        <a href="#">{items.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-5">
              <li className="font-500 border-b-2 border-[#2D83EE] inline-block py-1 font-md">
                Quick Links
              </li>
              <li>
                <ul className="space-y-3 font-500 text-xs lg:text-lg">
                  {QUICK_LINKS_LIST.map((items, index) => {
                    return (
                      <li key={index}>
                        <a href="#">{items.title}</a>
                      </li>
                    );
                  })}
                  <li>
                    <a href="#">Carrers </a>
                    <span className="bg-[#2D83EE] px-2 py-0.5 rounded-sm ">
                      Hiring
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white hidden md:block font-500 font-jost space-y-5 absolute bottom-0 -right-3">
          <p className=" border-b-2 border-[#2D83EE] inline-block py-1 font-md">
            Our Programmes
          </p>
          <div className="flex gap-5">
            {PROGRAMMES_LIST.map((item, index) => (
              <button
                key={index}
                className="btn border-none px-10 bg-gradient-to-r from-[#4F37EE] to-[#7184FD] via-[#3F7AF0] text-white"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-0 justify-between items-center mt-16 mb-5">
        <div className="flex items-center gap-10">
          <div>
            <Image src={DeFi_logo} alt="Security" />
          </div>
          <div>
            <Image src={Telangana_logo} alt="Government" />
          </div>
        </div>
        <div className="flex items-center gap-5">
          {SOCIAL_LIST.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              alt={item.title}
              className="hover:cursor-pointer"
            />
          ))}
        </div>
      </div>
      <hr className="border border-slate-600" />
      <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-0 justify-between items-center text-white text-xs font-jost font-400 mt-2">
        <p className="text-[11px] md:text-xs">
          All Rights Reserved. © Copyright 2023. QuillAudits - LLC
        </p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};
export default Footer;
