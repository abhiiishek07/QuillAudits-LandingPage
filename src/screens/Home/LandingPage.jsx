import React from "react";
import HeroSection from "./HeroSection";
import Difference from "./Difference";
import Description from "./Description";
import NewsLetter from "./NewsLetter";

const LandingPage = () => {
  return (
    <div className="flex-flex-col">
      <HeroSection />
      <Difference />
      <Description />
      <NewsLetter />
    </div>
  );
};

export default LandingPage;
