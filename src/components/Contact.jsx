import React, { useRef } from "react";
import "../Css/Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const publicKey = "XNPxclxRnzUq9_b9T";
    const serviceID = "service_z90z6nl";
    const templateID = "template_bq4zorv";

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log("SUCCESS!", result.text);
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">LET'S TALK OUR TEAM WELL HELP YOU</p>

        <div className="contact-content">
          {/* Left Column - Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Now
              </button>
            </form>
          </div>

          {/* Right Column - Info */}
          <div className="contact-info-wrapper">
            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h4>Call Anytime</h4>
                <p>+92 3469222711 | +92 3278593478</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h4>Send Email</h4>
                <p>info@pulxenet.com | pulxenetpvtltd@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h4>Visit Us</h4>
                <p>Near Missile Chowk Main Mansehra road Mandian 1st</p>
                <p>floor PulxeNet (Pvt) Limited IT</p>
                <p>Park Abbottabad, Pakistan</p>
              </div>
            </div>

            <div className="socialMedia">
              <a
                href="https://www.linkedin.com/in/mobeen-ali-shah-1a0933277/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedIn"
              >
                <FaLinkedinIn className="icon-linkedin" />
              </a>
              <a
                href="https://www.instagram.com/mubeenali.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <IoLogoInstagram className="icon-instagram" />
              </a>
              <a
                href="https://www.facebook.com/mubeen.ali.6896/"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <FaFacebookF className="icon-facebook" />
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
              >
                <IoLogoTwitter className="icon-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
