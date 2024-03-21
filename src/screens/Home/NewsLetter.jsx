import Image from "next/image";
import React from "react";
import NewLetter_img from "../../../public/assets/newsleter_img.png";

const NewsLetter = () => {
  return (
    <div className="bg-[#EDF2FE] flex w-full justify-center items-center ">
      <div className="lg:flex lg:justify-between gap-x-20 lg:items-center justify-center px-4 py-12 max-w-5xl">
        <div className=" flex flex-col gap-4 lg:w-1/2 ">
          <p className="text-sky-600 hidden lg:block uppercase text-lg font-semibold ">
            Newsletter
          </p>
          <h6 className="font-bold w-full max-w-xs  leading-relaxed pl-4 lg:pl-0 lg:text-3xl  lg:text-blue-950">
            Security First News Letter by QuillAudits
          </h6>
          <p className="hidden lg:block">
            Subscribe for the most Exclusive Weekly security based newsletter
            and covering all the recent hacks up to date.
          </p>
        </div>
        <div className=" lg:w-1/2 flex-shrink-0">
          <div className="relative aspect-video my-8 lg:my-0 max-w-md lg:max-w-xl mx-auto w-full">
            <Image
              src={NewLetter_img}
              alt="Newsletter Image"
              fill
              className="object-contain h-full w-full"
            />
          </div>

          <div className="max-w-md lg:hidden mx-auto text-center">
            <p>
              DeFi & NFT Hacks, CTFs, and Blockchain Security Insights straight
              to your Inbox. Explore our weekly newsletter:{" "}
              <span className="text-sky-500 font-semibold">HashingBits</span>.
              Stay updated on everything we’re publishing. Stand a step ahead.
            </p>
          </div>

          <div className=" flex flex-col lg:flex-row lg:max-w-[480px] relative items-center space-y-4 lg:space-y-0 max-w-md mx-auto w-full my-8 lg:my-0">
            <input
              className="w-full px-3 h-14 lg:pr-52 rounded-md border-2 shadow-sm focus:outline-2 focus:outline placeholder:font-jost placeholder:font-light focus:outline-sky-600 focus:outline-offset-2"
              type="text"
              placeholder="vitalik@ethereum.org"
            />
            <button className="btn text-lg mx-auto lg:absolute right-1 bg-gradient-to-r from-[#4F37EE] to-[#7184FD] via-[#3F7AF0] text-white px-8">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
