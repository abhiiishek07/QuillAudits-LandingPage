import React from "react";

const Difference = () => {
  return (
    <div className="w-full flex items-center justify-center mt-14">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-8 p-10 ">
        <div className="w-full">
          <h2 className="bg-p px-2 text-2xl font-bold lg:order-none order-1 bg-pink-300 mb-4">
            Before QuillAudits
          </h2>
          <p className="text-lg mb-5 font-semibold">
            Exploits like reentrancy and front-running can let attackers
            withdraw extra funds and manipulate transaction timing for unfair
            gains
          </p>
          <p className="text-lg font-semibold">
            Vulnerabilities could allow users to mint CDP tokens or pension
            shares indefinitely, disrupting the system&apos;s economic balance.
          </p>
        </div>
        <div className="hidden lg:divider lg:divider-horizontal"></div>
        <div className="w-full">
          <h2 className="bg-p px-2 text-2xl font-bold lg:order-none order-1 bg-blue-300 mb-4">
            After QuillAudits
          </h2>
          <p className="text-lg mb-4 lg:mb-16 font-semibold">
            Implementation of reentrancy protection mechanisms.
          </p>
          <p className="text-lg font-semibold">
            Ensure precision in decimal handling with standard libraries,
            recalculate accurately, fix logic errors, and secure referral
            systems against exploitation.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Difference;
