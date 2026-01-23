import "react";

import StartProject from "./StartProject";
import RecentWork from "./RecentWork";
import HeroSection from "./HeroSection";
import Workflow from "./Workflow";
import WhyToChoose from "./WhyToChoose";
import WhatWeDo from "./WhatWeDo";
import ProjectForm from "./ProjectForm";
import SignUp from "../authonication/SignUp";

function Home() {
  return (
    <div
      id="home"
      className=" text-white/90 bg-black font-sens flex flex-col items-center"
    >
      <HeroSection />
      <WhyToChoose />
      <WhatWeDo />
      <Workflow />
      <RecentWork />
      <StartProject />
    </div>
  );
}

export default Home;
