import React from 'react'
import '../Css/TeamMainPage.css'
const TeamMainPage = () => {
    const teamData = [
        {
          name: "Usman",
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
          name: "Omama",
          role: "Manager",
          bio: "Designs intuitive, user-friendly, and visually engaging digital experiences.",
          image: "omama.jpg",
          socials: {
            linkedin: "#",
            twitter: "#",
            facebook: "#",
            instagram: "#"
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
            <i className="fab fa-instagram"></i>
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      );
      
      
      
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
  )
}

export default TeamMainPage
