import React from "react";
import Contact from "../components/Contact";
import PageHeader from "../components/PageHeader";

function ContactPage() {
    const headerProps = {
        title: "Contact",
        src: "/images/2aef1e7870e658e37eeca082a17a4f3ee6aadc30.jpg", // Replace with actual image URL
        alt: "About Us Header Image"
    };
    return (
        <>
          <PageHeader headerProps={headerProps}/>
          <Contact/>
        </>
    );
    }
export default ContactPage;