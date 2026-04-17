import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/projects.css";

export default function Projects() {

  const [tab, setTab] = useState("school");

  const schoolProjects = [
    {
  title: "Projet BTS - Event Manager",
  date: "2025-2026",
  type: "En collaboration",
  description: "Application de gestion d'événements sportifs développée en groupe avec React, Symfony et MariaDB/MySQL. J'ai participé à la conception de la maquette et à la rédaction du cahier des charges. J'ai principalement travaillé sur le front-end, notamment la page d'accueil en développant plusieurs composants comme le calendrier des événements et le scoreboard."
    },
    {
      title: "Llama 4 - Veille technologique",
      date: "2025",
      type: "Solo",
      description: "Dans le cadre de ma formation en BTS SIO, j’ai réalisé une veille technologique sur LLaMA 4, un modèle d’intelligence artificielle développé par Meta. Cette veille avait pour objectif de comprendre les évolutions récentes des modèles de langage et leur impact dans le domaine du développement logiciel et des applications intelligentes.LLaMA 4 (Large Language Model Meta AI) est une nouvelle génération de modèles d’IA capables de comprendre et de générer du texte, d’assister au développement logiciel, d’analyser des données et d’interagir avec les utilisateurs de manière avancée. Ce type de technologie est aujourd’hui utilisé dans de nombreux domaines comme les assistants virtuels, la génération de code, la recherche d’informations ou encore l’automatisation de tâches.Au cours de cette veille, j’ai étudié les caractéristiques principales du modèle, ses performances comparées aux autres modèles d’intelligence artificielle, ainsi que ses cas d’usage dans le développement informatique. J’ai également analysé les enjeux liés à ces technologies, notamment en termes d’éthique, de sécurité et d’évolution du métier de développeur. Cette veille m’a permis de mieux comprendre l’importance de l’intelligence artificielle dans l’évolution du secteur informatique et de rester informé sur les innovations technologiques qui influencent le développement des applications modernes."
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
    description:
      "Développement d'une application web permettant d'aider les futurs parents à choisir un prénom grâce à un système de filtres et de suggestions. Projet réalisé avec React et Directus. Compétences mobilisées : travailler en mode projet (organisation et collaboration), développer la présence en ligne (création d'une application web), mettre à disposition un service informatique (tests et mise en service), organiser son développement professionnel (apprentissage de nouvelles technologies)."
  },
  {
    title: "Application de gestion des utilisateurs - Mairie de Trappes",
    date: "2025",
    type: "Solo",
    description:
      "Création d'une application permettant de gérer les utilisateurs et le matériel informatique d'une organisation. Développement full-stack avec React et Django. Compétences mobilisées : gérer le patrimoine informatique (gestion des utilisateurs et des ressources), répondre aux incidents et demandes (correction d'erreurs et amélioration des fonctionnalités), mettre à disposition un service informatique (tests et déploiement), organiser son développement professionnel (conception et développement d'une application complète)."
  },
  {
    title: "Application full-stack",
    date: "2025",
    type: "Groupe",
    description:
      "Projet de développement d'une application web complète avec frontend, backend et base de données. Travail en équipe avec répartition des tâches et suivi de l'avancement. Compétences mobilisées : travailler en mode projet, développer la présence en ligne et mettre à disposition un service informatique."
  }
];

  const ProjectCard = ({ project }) => (
    <div className="project-card-modern">
      <div className="project-top">
        <h3>{project.title}</h3>
        <span>{project.date}</span>
      </div>

      <p>{project.description}</p>

      <div className="project-tag">
        {project.type}
      </div>
    </div>
  );

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

        {tab === "school"
          ? schoolProjects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))
          : proProjects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))
        }

      </section>

      <div className="projects-bottom-buttons">

        <a href="/cv" className="summary-btn">
          CV
        </a>

        <a href="/assets/synthese.pdf" target="_blank" rel="noopener noreferrer" className="summary-btn">
        Tableau de synthèse
        </a>

      </div>

    </div>
  );
}