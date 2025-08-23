import React from "react";
import "../Css/TeamSection.css"; // Your own local CSS file
import { FaGithub } from "react-icons/fa";
const teamData = [
  {
    name: "Usman1",
    role: "CEO",
    bio: "11+ years IT infrastructure, Computer Networks and Cybersecurity experience.",
    image: "usmanG.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/usman-profile",
      twitter: "https://twitter.com/usman",
      facebook: "https://facebook.com/usman",
      instagram: "https://github.com/Usm711"
    }
  },
  {
    name: "Syed fawad Shah",
    role: "Web Developer",
    bio: "Develops high quality, user friendly and functional Website using React",
    image: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/usman-profile",
      twitter: "https://twitter.com/usman",
      facebook: "https://facebook.com/usman",
      instagram: "https://instagram.com/usman"
    }
  },
  {
    name: "Omama",
    role: "UI Desginer",
    bio: "Designs intuitive, user-friendly, and visually engaging digital experiences.",
    image: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/usman-profile",
      twitter: "https://twitter.com/usman",
      facebook: "https://facebook.com/usman",
      instagram: "https://instagram.com/usman"
    }
  },
  {
    name: "Warda Khan",
    role: "Project Lead App Developer",
    bio: "Lead projects and develops high quality mobile or web applications.",
    image: "warda.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/warda-khan-kk238/",
      twitter: "#",
      facebook: "#",
      instagram: "https://github.com/codewithwarda"
    }

  },
  {
    name: "Mobeen Ali Shah",
    role: "Web Developer",
    bio: "Develops high quality, user friendly and functional Website using React",
    image: "mobeen.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/mobeen-ali-shah-1a0933277/",
      twitter: "#",
      facebook: "https://www.facebook.com/mubeen.ali.6896",
      instagram: "https://github.com/mubeenali-313"
    }
  },
  {
    name: "Suliman khan",
    role: "UI Desginer",
    bio: "Designs intuitive, user-friendly, and visually engaging digital experiences.",
    image: "suliman.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/usman-profile",
      twitter: "https://twitter.com/usman",
      facebook: "https://facebook.com/usman",
      instagram: "https://instagram.com/usman"
    }
  },
  {

    name: "Umaima Aftab",
    role: "App Developer",
    bio: "Builds and maintains user-friendly, efficient, and reliable mobile or web applications.",
    image: "umaima.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/umaima-aftab-336398377/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://twitter.com/usman",
      facebook: "https://facebook.com/usman",
      instagram: "https://instagram.com/usman"
    }
  },
  {
    name: "ali",
    role: "App Developer",
    bio: "Builds and maintains user-friendly, efficient, and reliable mobile or web applications.",
    image: "umaima.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/usman-profile",
      twitter: "https://twitter.com/usman",
      facebook: "https://facebook.com/usman",
      instagram: "https://instagram.com/usman"
    }


  },
  {
    name: "Nadra khan",
    role: "Graphic Designer",
    bio: "Create visually compelling designs to communicate ideas and enhance brand identity.",
    image: "Nadra.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/usman-profile",
      twitter: "https://twitter.com/usman",
      facebook: "https://facebook.com/usman",
      instagram: "https://instagram.com/usman"
    }
  }

];


const SocialRow = ({ socials }) => (
  <div className="member-social" aria-label="Social links">
    <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <i className="fab fa-twitter"></i>
    </a>
    <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      {/* <i className="fab fa-instagram"></i> */}
      <FaGithub />
      
    </a>
    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
);

const TeamSection = () => {
  return (
    <section className="team" aria-labelledby="team-title">
      <div className="team-container">
        {/* <header className="team-header">
          <span className="team-kicker" aria-hidden>
            Team Member
          </span>
          <h1 id="team-title" className="team-title">
            MEET OUR TEAM MEMBER
          </h1>
          <p className="team-subtitle">
            We Focus on the details of everything we do. All to help businesses around the world
            <br />Focus on what's most important to them.
          </p>
        </header> */}

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
      <SocialRow socials={m.socials} />
    </div>
  </article>
))}

        </div>
      </div>
    </section>
  );
};

export default TeamSection;