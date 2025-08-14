import React from "react";
import "../Css/TeamSection.css"; // Your own local CSS file

const teamData = [
  {
    name: "Zane Savell",
    role: "CEO",
    bio: "11+ years in outbound, product, growth; team mentor.",
    image: "3edf170860bd8cbc37debc437ee46cfc812c7918.jpg",
  },
  {
    name: "Maya Mathy",
    role: "PM",
    bio: "High-impact PM; data-first; brings joy.",
    image: "fcf5dbf8a60f8660b370b432520d1e7ddd3cf12b.jpg",
  },
  {
    name: "Alvida Jensen",
    role: "Lead Designer",
    bio: "Creates clean interfaces with a crafted workflow.",
    image: "a37b1d7ec0bf00c9ee7d65223824d3892e7e7619.jpg",
  },
  {
    name: "Karia Botney",
    role: "Marketing",
    bio: "Content strategist and community lead.",
    image: "6be6ecfed0aeaa1e8fbaa6f9c45badf0d7a763db.jpg",
  },
  {
    name: "Dominic Gomez",
    role: "Engineer",
    bio: "Full-stack specialist, performance focused.",
    image: "284098299f1f29ed0793eb101ef988d3f0ca24ed.jpg",
  },
  {
    name: "James Vial",
    role: "Support",
    bio: "Customer-first; elevates every experience.",
    image: "",
  },
];

const SocialRow = () => (
  <div className="member-social" aria-label="Social links">
    <a href="#" aria-label="Twitter">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="#" aria-label="Facebook">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="#" aria-label="Instagram">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="#" aria-label="Linkedin">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
);

const TeamSection = () => {
  return (
    <section className="team" aria-labelledby="team-title">
      <div className="team-container">
        <header className="team-header">
          <span className="team-kicker" aria-hidden>
            Team Members
          </span>
          <h1 id="team-title" className="team-title">
            MEET OUR TEAM MEMBER
          </h1>
          <p className="team-subtitle">
            We focus on the details of everything we do. All to help businesses
            around the world focus on what’s most important to them.
          </p>
        </header>

        <div className="team-grid" role="list">
          {teamData.map((m) => (
            <article
              key={m.name}
              role="listitem"
              className="member-card"
              style={{ backgroundImage: `url(/images/${m.image})` }}
            >
              <div className="member-body">
                <h3 className="member-name">{m.name}</h3>
                <p className="member-role">{m.role}</p>
                <p className="member-bio">{m.bio}</p>
                <SocialRow />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
