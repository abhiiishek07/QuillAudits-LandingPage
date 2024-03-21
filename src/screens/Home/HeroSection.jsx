import React from "react";
import CD_Pension_Black from "../../../public/assets/CD-Pension-black.png";
import CD_Pension_White from "../../../public/assets/CD-Pension-white.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex min-h-screen items-center w-full bg-gradient-to-br from-indigo-900 to-black relative">
      <div className="mt-16 w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="mt-24 text-white text-xl px-4 lg:hidden my-3 justify-start flex w-full">
          <p className="border-b-4 border-blue-600">Case Studeies</p>
        </div>
        <div className="flex flex-col w-full max-w-[34.6rem]">
          <div className="rounded-md  h-96 lg:h-[32.5rem] w-full  flex flex-col justify-center lg:justify-end pb-16 items-center bg-gradient-to-r from-black to-green-900">
            {" "}
            <div className="h-32 ">
              <Image src={CD_Pension_White} alt="pension" />
            </div>
            <div className="mt-8 text-white text-lg hidden lg:flex justify-start w-full items-start">
              {" "}
              <p className="max-w-sm px-8">
                {" "}
                Carpe Diem Pension, a blockchain-based retirement fund, offers
                permanent payouts through CDP deposits, with a 4.32% annual
                inflation claimable by depositors.
              </p>
            </div>
          </div>
          <p className="text-[#3b4250] font-jost font-500 md:flex items-center gap-1 ms-10 lg:ms-28 mt-5 pb-5 hidden">
            QuilAudits -&gt; Resources -&gt;
            <span className="text-white">Case Studies</span>
          </p>
        </div>

        <div className="absolute border p-4 bg-white rounded-md top-[33rem]  lg:top-48 ">
          <Image src={CD_Pension_Black} alt="pension" />
        </div>
        <div className="flex flex-col text-white  max-w-xl p-5 mt-24">
          <h1 className="text-4xl font-bold leading-snug">
            Securing Trust : Boosting Security and Strengthening Trust at Carpe
            Diem Pension
          </h1>
          <p className="max-w-md mt-6 text-lg">
            QuillAudits enhances Carpe Diem Pension by addressing 33
            vulnerabilities on the Pulse blockchain, boosting security and user
            trust in digital pensions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
