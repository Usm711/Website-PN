import React from "react";
import Contact from "../components/Contact";
import PageHeader from "../components/PageHeader";
import ContactBackground from "../components/ContactBackground";
import History from "../components/History";

function ContactPage() {
    const headerProps = {
        title: "Contact",
        src: "/images/2aef1e7870e658e37eeca082a17a4f3ee6aadc30.jpg", // Replace with actual image URL
        alt: "About Us Header Image"
    };
    return (
        <>
          <ContactBackground />
          <Contact/>
          <History />
        </>
    );
    }
export default ContactPage;