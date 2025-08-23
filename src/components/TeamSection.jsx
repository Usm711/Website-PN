import React from "react";
import "../Css/TeamSection.css"; // Your own local CSS file

const teamData = [
  {
    name: "Usman1",
    role: "CEO",
    bio: "11+ years IT infrastructure, Computer Networks and Cybersecurity experience.",
    image: "usmanSir.png",
  },
  {
    name: "Syed fawad Shah",
    role: "Web Developer",
    bio: "Develops high quality, user friendly and functional Website using React",
    image: "",
  },
  {
    name: "Omama",
    role: "UI Desginer",
    bio: "Designs intuitive, user-friendly, and visually engaging digital experiences.",
    image: "",
  },
  {
    name: "Warda Khan",
    role: "Project Lead App Developer",
    bio: "Lead projects and develops high quality mobile or web applications.",
    image: "warda.jpeg",

  },
  {
    name: "Mobeen Ali Shah6",
    role: "Web Developer",
    bio: "Develops high quality, user friendly and functional Website using React",
    image: "mobeen.png",
  },
  {
    name: "Suliman khan",
    role: "UI Desginer",
    bio: "Designs intuitive, user-friendly, and visually engaging digital experiences.",
    image: "suliman.png",
  },
  {

    name: "Umaima Aftab",
    role: "App Developer",
    bio: "Builds and maintains user-friendly, efficient, and reliable mobile or web applications.",
    image: "umaima.jpg",
  },
  {
    name: "ali"

  },
  {
    name: "Nadra khan",
    role: "Graphic Designer",
    bio: "Create visually compelling designs to communicate ideas and enhance brand identity.",
    image: "Nadra.jpg",
  }

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
