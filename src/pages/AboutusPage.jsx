import React from "react";
import PageHeader from "../components/PageHeader";
import AboutUs from "../components/AboutUs";
import TeamSection from "../components/TeamSection";

function AboutusPage() {
    const headerProps = {
        title: "About Us",
        src: "/images/d5c4680d34ba55cff683085da2cf0786a3885aaa.jpg", // Replace with actual image URL
        alt: "About Us Header Image"
    };
    return (
        <>
          <PageHeader headerProps={headerProps}/>
          <AboutUs/>
          <TeamSection/>
        </>
    );
    }
export default AboutusPage;