import "react";
import Navbar from "../components/layout/Navbar";
import Home4 from "./home/Workflow";
import RecentWork from "./home/RecentWork";
import StartProject from "./home/StartProject";
import HeroSection from "./home/HeroSection";
import WhyToChoose from "./home/WhyToChoose";
import WhatWeDo from "./home/WhatWeDo";
import Workflow from "./home/Workflow";

function Home() {
  return (
    <div
      id="home"
      className=" text-white/90 bg-black font-sens flex flex-col items-center"
    >
      <Navbar />
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
