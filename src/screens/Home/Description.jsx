import React from "react";
import Description_img from "../../../public/assets/Description.png";
import PensionScheme_img from "../../../public/assets/PensionScheme.png";
import Image from "next/image";
import {
  DESCRIPTION_LIST,
  REMEDIATION_LIST,
  STARTEGY_LIST,
} from "@/constants/constants";
import { Tweet } from "react-tweet";
import Quotes_white from "../../../public/assets/Quotes-white.png";
import Quotes_blue from "../../../public/assets/Quotes-blue.png";
import User from "../../../public/assets/User.png";

const Description = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="px-8 lg:hidden">
        <div className="w-full max-w-sm flex flex-col my-3 gap-3 p-4 rounded-lg border-2 border-blue-300 shadow-md">
          <div>
            <h4 className="text-sm text-gray-400">Headquarters</h4>
            <p className="font-medium">Switzerland</p>
          </div>
          <div>
            <h4 className="text-sm text-gray-400">Chain</h4>
            <p className="font-medium">Pulse Blockchain</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12 gap-4">
        <h1 className="font-bold text-4xl text-center max-w-3xl text-blue-900 px-4">
          See how QuillAudits is a trusted partner in 1000+ Audit stories
        </h1>
        <button className="btn bg-gradient-to-r from-[#4F37EE] to-[#7184FD] via-[#3F7AF0] text-white btn-md px-8 my-4">
          <p className="text-lg"> Request An Audit</p>
        </button>
      </div>
      <div className="flex  w-full justify-center">
        <div className="max-w-6xl w-full  flex ">
          <div className="flex flex-col p-4 w-full max-w-3xl">
            <p className="max-w-xl text-xl">
              Carpe Diem Pension, on Pulse blockchain, redefines retirement with
              a self-managed, inclusive, globally portable fund. Unique for its
              token burn mechanism, it ensures a sustainable 4.32% inflation
              payout. With $143.11k and 41.06% of CDP already burned, it serves
              35 users globally.
            </p>
            <div className="flex flex-col my-8">
              <h1 className="font-bold text-3xl">
                CarpeDiem Pension&apos;s Flexible,
              </h1>
              <h1 className="font-bold text-3xl">Blockchain-Enabled Future</h1>
            </div>
            <p className="max-w-2xl text-xl mb-6">
              CarpeDiem Pension redefines retirement planning with a unique
              approach that deviates from traditional pension funds. With no
              minimum age for retirement, it offers flexibility and freedom,
              ensuring all genders receive equal treatment. CarpeDiem Pension
              ensures blockchain transparency, anonymity, and global
              accessibility, safeguarding pensions during international
              relocation. Easily transfer pensions to loved ones; share wallet
              access. Re-deposit payouts for increased future benefits.
              Importantly, CarpeDiem Pension prioritizes deposit security by
              avoiding utilizing client funds for internal investments. To
              become a part of this forward-thinking pension scheme, one simply
              needs to install and configure a blockchain wallet.
            </p>
            <Image src={Description_img} />
            <h3 className="max-w-xl font-bold my-6 text-3xl">
              CarpeDiem Pension&apos;s Challenges: Enhancing Security Against
              Reentrancy, Front-Running, and Infinite Minting
            </h3>
            <p className="max-w-xl text-xl font- mb-6">
              CarpeDiem Pension confronts critical security challenges,
              including the risks of reentrancy and front-running
              exploits.Malicious actors may exploit contract vulnerabilities,
              withdrawing excess funds or manipulating transaction timing for
              unfair advantages. System faces infinite minting threats, risking
              economic stability with endless creation of CDP tokens or pension
              shares.  Addressing these challenges is paramount to safeguarding
              the integrity and security of CarpeDiem Pension.
            </p>
            <Image src={PensionScheme_img} />
            <h3 className="max-w-xl font-bold my-6 text-3xl">
              CarpeDiem Pension&apos;s Journey Through our Audit Process
            </h3>
            {DESCRIPTION_LIST.map((data, index) => {
              return (
                <div key={index} className="max-w-xl my-3 w-full">
                  <h3 className="text-2xl font-bold gap-3">
                    {index + 1}
                    {". "}
                    {data.heading}
                  </h3>
                  <ul className="list-disc pl-10 pr-6 text-lg font-semibold py-4">
                    {data.items.map((item, index) => (
                      <li key={index} className="py-2">
                        {item.title}
                        {item.subItems && (
                          <ul className="pl-8">
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex} className="flex  my-2">
                                <div className="h-1 w-1 rounded-full border border-black p-[4px] mt-3"></div>{" "}
                                <p className="px-2 py-1">
                                  <span className="italic">
                                    {subItem.title}
                                  </span>{" "}
                                  {subItem.description}
                                </p>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
            <h3 className="max-w-xl font-bold my-6 text-3xl">
              QuillAudits&apos; Strategic Approach to CDP Security Audits
            </h3>
            <p className="max-w-xl text-xl font- mb-6">
              We prioritize threat modeling based on platform-specific risks.
              Security-first, we identify and mitigate vulnerabilities beyond
              functionality testing. Using white-box and black-box tests, we
              conduct thorough vulnerability assessments. Maintaining
              transparency, we communicate openly with the CDP team. Emphasizing
              clarity, we present actionable insights for efficient issue
              resolution.
            </p>
            <h3 className="max-w-xl font-bold my-6 text-3xl">
              Comprehensive Audit Discoveries and Remediation Strategies
            </h3>
            <p className="max-w-xl text-xl font- mb-6">
              Throughout the audit process, we unearthed a total of 33 issues,
              spanning from minor concerns to critical vulnerabilities. Among
              these, some of the critical issues identified were: Here&apos;s
              how we remediated them :
            </p>
            <ul className="w-full max-w-2xl text-wrap">
              {STARTEGY_LIST.map((item, index) => (
                <li className="px-2" key={index}>
                  <h6 className="text-lg font-bold">
                    {index + 1}
                    {". "}
                    {item.heading}
                  </h6>
                  <p className="ml-6 my-3 flex gap-x-3 ">
                    <span className="">a.</span>
                    {item.content}
                  </p>
                </li>
              ))}
            </ul>
            <h3 className="max-w-xl font-bold my-6 text-3xl">
              Remediation & Impact:
            </h3>
            <p className="max-w-xl text-xl font- mb-6">
              All identified vulnerabilities were addressed by the CDP team,
              significantly enhancing the smart contract&apos;s security
              posture. Key improvements include
            </p>
            <ul className="pl-10 font-medium text-lg space-y-3 pr-4">
              {REMEDIATION_LIST.map((item, index) => (
                <li className="list-disc" key={index}>
                  {item.item}
                </li>
              ))}
            </ul>
            <div className="my-4">
              <Tweet id="1742906560794296402" />
            </div>
            <p className="max-w-2xl text-justify text-xl font- mb-6">
              CDP smart contract audit revealed and fixed critical
              vulnerabilities, safeguarding funds and ensuring platform
              stability. This underscores the need for proactive security in
              blockchain projects, crucial for financial asset management.
              Through audits and issue resolution, CDP reinforces platform
              security, bolstering user trust.
            </p>
            <div>
              <div className="h-auto relative my-10 w-full rounded-lg  shadow-lg">
                <div className="bg-gradient-to-br from-blue-950 :via-blue-900 to-blue-800 before:top-0 before:left-0 sm:px-20 px-4 py-7 relative h-full before:absolute w-full before:h-[72%] sm:before:h-[75%] before:-z-10 before:w-full before:bg-gradient-to-br ">
                  <Image src={Quotes_white} />
                  <div className="flex sm:flex-row flex-row-reverse h-full sm:justify-between justify-end gap-x-5 pt-8 items-end w-full">
                    <div className="leading-relaxed h-full flex flex-col justify-between">
                      <div className="hidden sm:block">
                        <h6 className="font-jost text-4xl font-semibold text-white">
                          Sally Radley
                        </h6>
                        <p className="text-white text-lg font-light mt-1.5 font-jost">
                          WebGFi - CEO
                        </p>
                      </div>

                      <div className="sm:hidden block">
                        <h6 className="font-jost text-3xl font-semibold text-white">
                          Carpediem
                        </h6>
                        <p className="text-white text-lg font-light font-jost">
                          TEAM
                        </p>
                      </div>
                      <div className="flex mt-5 gap-x-3 items-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <p key={index}>⭐</p>
                        ))}
                      </div>
                    </div>

                    <div className="sm:h-44 h-36 sm:w-44 w-36 relative overflow-hidden rounded-md">
                      <Image src={User} className="w-full h-full" />
                    </div>
                  </div>
                </div>
                <div className="sm:px-20 px-4 sm:py-4 py-0 lg:pb-14 relative ">
                  <p className="font-jost">
                    “It felt like the auditing team was available within a short
                    timeframe, which was excellent. The auditing process looked
                    thorough, and I really appreciate the fact that you took
                    time to investigate GAS optimizations.”
                  </p>
                </div>
                <div className="flex justify-end px-8 py-4">
                  <Image src={Quotes_blue} />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 hidden lg:block sticky top-32 my-12 left-16 order-none space-y-3 mb-10 max-w-80 h-fit w-full min-w-72 rounded-lg bg-white shadow-sm shadow-[#7184FD]/80 border-[#2D83EE]/60 border">
            <div className="">
              <h4 className="text-sm text-muted">Headquarters</h4>
              <p>Switzerland</p>
            </div>
            <div className="">
              <h4 className="text-sm text-muted">Chain</h4>
              <p>Pulse Blockchain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
