import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

export default function Navbar() {

  const [active, setActive] = useState("home");

  const links = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "about", icon: <FaUser />, label: "About" },
    { id: "skills", icon: <FaCode />, label: "Skills" },
    { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" }
  ];

  const socials = [
    {
      id: "github",
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/Kamel7838"
    },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/kamel-siad-2aa879279/"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="side-navbar">

      {/* LOGO */}
      <div className="logo">KS</div>

      {/* MAIN LINKS */}
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={active === link.id ? "active" : ""}
            >
              <span className="icon">{link.icon}</span>
              <span className="text">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* SOCIAL LINKS (same structure) */}
      <ul className="nav-socials">
        {socials.map((s) => (
          <li key={s.id}>
            <a
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <span className="icon">{s.icon}</span>
              <span className="text">{s.label}</span>
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
}