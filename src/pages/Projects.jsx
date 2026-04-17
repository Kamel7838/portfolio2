import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/projects.css";

export default function Projects() {

  const [tab, setTab] = useState("school");
  const [openIndex, setOpenIndex] = useState(null);

  // 🔥 MODIF : image zoom
  const [zoomImg, setZoomImg] = useState(null);

  const schoolProjects = [
    {
      title: "Projet BTS - Event Manager",
      date: "2025-2026",
      type: "En collaboration",
      skills: ["Travailler en mode projet", "Développer la présence en ligne", "Mettre à disposition un service informatique"],
      link: "projets/event-manager",
      description: "Application de gestion d'événements sportifs développée en groupe avec React, Symfony et MariaDB/MySQL. J'ai participé à la conception de la maquette et à la rédaction du cahier des charges. J'ai également travaillé sur le front-end, notamment les pages d'authentification, accueil et développer plusieurs composants comme le calendrier des événements ou le scoreboard.",
      images: [
        "assets/login.png",
        "assets/register.png",
        "assets/home.png",
        "assets/figma.png",
      ]
    },
    {
      title: "Llama 4 - Veille technologique",
      date: "2025",
      type: "Solo",
      description: "Dans le cadre de ma formation en BTS SIO, j’ai réalisé une veille technologique sur LLaMA 4, un modèle d’intelligence artificielle développé par Meta..."
    },
    {
      title: "Projet groupe BTS",
      date: "2025",
      type: "Groupe",
      description: "Application web collaborative avec API."
    }
  ];

  const proProjects = [
    {
      title: "Application choix de prénom pour bébé - Nivo Web",
      date: "2026",
      type: "En collaboration",
      description: "Développement d'une application web permettant d'aider les futurs parents à choisir un prénom..."
    },
    {
      title: "Application de gestion des utilisateurs - Mairie de Trappes",
      date: "2025",
      type: "Solo",
      description: "Création d'une application permettant de gérer les utilisateurs et le matériel informatique..."
    },
    {
      title: "Application full-stack",
      date: "2025",
      type: "Groupe",
      description: "Projet de développement d'une application web complète..."
    }
  ];

  const ProjectCard = ({ project, index }) => {

    const isOpen = openIndex === index;

    return (
      <div className="project-card-modern">

        <div className="project-top">
          <h3>{project.title}</h3>
          <span>{project.date}</span>
        </div>

        <p>{project.description}</p>

        <div className="project-tag">
          {project.type}
          {project.skills && " | Compétences : " + project.skills.join(", ")}
        </div>

        {/* FLÈCHE */}
        <button
          className="project-arrow"
          onClick={() => setOpenIndex(isOpen ? null : index)}
        >
          {isOpen ? "▲ Masquer les screens" : "▼ Voir les screens"}
        </button>

        {/* IMAGES */}
        {isOpen && (
          <div className="project-dropdown">
            <div className="project-images">
              {project.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="screen"
                  onClick={() => setZoomImg(img)}
                  style={{ cursor: "zoom-in" }}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    );
  };

  return (
    <div className="projects-page">

      <Navbar />

      {/* SWITCH */}
      <section className="projects-switch">

        <div className="switch-buttons">

          <button
            className={tab === "school" ? "active" : ""}
            onClick={() => setTab("school")}
          >
            Académique
          </button>

          <button
            className={tab === "pro" ? "active" : ""}
            onClick={() => setTab("pro")}
          >
            Professionnel
          </button>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="projects-grid">

        {(tab === "school" ? schoolProjects : proProjects).map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}

      </section>

      {/* BOTTOM BUTTONS */}
      <div className="projects-bottom-buttons">

        <a href="/cv" className="summary-btn">
          CV
        </a>

        <a href="/assets/synthese.pdf" target="_blank" rel="noopener noreferrer" className="summary-btn">
          Tableau de synthèse
        </a>

      </div>

      {/* 🔥 ZOOM IMAGE (LIGHTBOX) */}
      {zoomImg && (
        <div
          onClick={() => setZoomImg(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "zoom-out"
          }}
        >
          <img
            src={zoomImg}
            alt="zoom"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              boxShadow: "0 0 30px rgba(0,0,0,0.6)"
            }}
          />
        </div>
      )}

    </div>
  );
}