import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/MainHeader";
import HighlightsStrip from "../components/HighlightsStrip";
import AboutUs from "../components/AboutUs";
// import ProcessSection from "../components/ProcessSection";
import DiscoverSection from "../components/DiscoverSection";
import OurExpertise from "../components/OurExpertise";
import Contact from "../components/Contact";
import ProcessSectionNew from "../components/ProcessSectionNew";

function HomePage() {

  return (
    <>
      <Header />
      <HighlightsStrip />
      <AboutUs />
      {/* <ProcessSection processSteps={processSteps}/> */}
      <ProcessSectionNew />
      <DiscoverSection />
      <OurExpertise />
      <Contact/>
    </>
  );
}
export default HomePage;
