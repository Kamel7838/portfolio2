import React from "react";
import Navbar from "../components/Navbar";
import "../styles/skills.css";

export default function Skills() {

  const skills = [
    { name: "HTML", type: "Frontend", level: 90 },
    { name: "CSS", type: "Frontend", level: 90 },
    { name: "JavaScript", type: "Frontend", level: 70 },
    { name: "React", type: "Frontend", level: 75 },

    { name: "PHP", type: "Backend", level: 60 },
    { name: "Python", type: "Backend", level: 70 },
    { name: "MySQL", type: "Backend", level: 80 },

    { name: "Git", type: "Outils", level: 80 },
    { name: "Insomnia", type: "Outils", level: 80 },
  ];

  return (
    <div className="skills-page">

      <Navbar />
        <div className="skills-hero">
           <h1>Mes compétences</h1>
            <p>
            Un aperçu de mes technologies, outils et niveau d’expérience.
            </p>
        </div>

      <section className="skills-grid-section">
        <div className="skills-grid-table">

          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">

              <div className="skill-top">
                <h3>{skill.name}</h3>
                <span className="skill-type">{skill.type}</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <span className="skill-level">{skill.level}%</span>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}