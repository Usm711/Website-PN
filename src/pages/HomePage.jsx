import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/MainHeader";
import HighlightsStrip from "../components/HighlightsStrip";
import AboutUs from "../components/AboutUs";
// import ProcessSection from "../components/ProcessSection";
import DiscoverSection from "../components/DiscoverSection";
import HomeCourses from "../components/HomeCourses"
import OurExpertise from "../components/OurExpertise";
import Contact from "../components/Contact";
import ProcessSectionNew from "../components/ProcessSectionNew";
import History from "../components/History";
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
      <HomeCourses />
      <Contact/>
      <History />
    </>
  );
}
export default HomePage;
