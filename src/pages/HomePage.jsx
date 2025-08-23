import React from "react";
import Header from "../components/MainHeader";
import HighlightsStrip from "../components/HighlightsStrip";
import AboutUs from "../components/AboutUs";
import DiscoverSection from "../components/DiscoverSection";
import HomeCourses from "../components/HomeCourses";
import OurExpertise from "../components/OurExpertise";
import Contact from "../components/Contact";
import ProcessSectionNew from "../components/ProcessSectionNew";
import History from "../components/History";
import FadeInSection from "../components/FadeInSection"; // 👈 new component
import "../Css/HomePage.css";

function HomePage() {
  return (
    <>
      <div className="home-page">
        <FadeInSection><Header /></FadeInSection>
        <FadeInSection><HighlightsStrip /></FadeInSection>
        <FadeInSection><AboutUs /></FadeInSection>
        <FadeInSection><ProcessSectionNew /></FadeInSection>
        <FadeInSection><DiscoverSection /></FadeInSection>
        <FadeInSection><OurExpertise /></FadeInSection>
        <FadeInSection><HomeCourses /></FadeInSection>
        <FadeInSection><Contact /></FadeInSection>
        <FadeInSection><History /></FadeInSection>
      </div>
    </>
  );
}

export default HomePage;
