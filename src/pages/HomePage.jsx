import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/MainHeader";
import HighlightsStrip from "../components/HighlightsStrip";
import AboutUs from "../components/AboutUs";
import ProcessSection from "../components/ProcessSection";
import DiscoverSection from "../components/DiscoverSection";
import OurExpertise from "../components/OurExpertise";
import Contact from "../components/Contact";

function HomePage() {
  const processSteps = [
    {
      number: "01",
      title: "Research",
      iconClass: "fas fa-search",
      description:
        "We start by understanding your business, goals, and target users. This helps us define a strategy that ensures your project solves the right problems.",
    },
    {
      number: "02",
      title: "Design",
      iconClass: "fas fa-paint-brush",
      description:
        "Next, we create clean, user-focused designs that blend usability with modern aesthetics—ensuring a smooth and engaging user experience.",
    },
    {
      number: "03",
      title: "Develop",
      iconClass: "fas fa-code",
      description:
        "Our development team brings the designs to life with efficient coding and rigorous testing to ensure your product works flawlessly across all devices.",
    },
    {
      number: "04",
      title: "Test",
      iconClass: "fas fa-vial",
      description:
        "We conduct extensive testing for performance, bug resolution, and user experience to guarantee a flawless product.",
    }
  ];
  return (
    <>
      <Header />
      <HighlightsStrip />
      <AboutUs />
      <ProcessSection processSteps={processSteps}/>
      <DiscoverSection />
      <OurExpertise />
      <Contact/>
    </>
  );
}
export default HomePage;
