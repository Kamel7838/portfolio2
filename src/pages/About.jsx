import React, { useState } from "react";
import "../index.css";
import "../styles/about.css";

export default function About() {
  const [tab, setTab] = useState("school");

  return (
    <div className="about-page">

      <div className="about-container">

        {/* ================= LEFT (BIO + CARD) ================= */}
        <div className="about-left">

          <div className="about-hero-text">

            <h1>À propos de moi</h1>

            <p>
              <span>Kamel Siad</span>, 20 ans, étudiant en deuxième année de BTS SIO option SLAM.
              Passionné par le développement d'applications web.
            </p>

          </div>

         <div className="about-hero-card">

  <h2>BTS SIO (SLAM & SISR)</h2>

  <p>
    Le BTS SIO (Services Informatiques aux Organisations) forme des techniciens
    capables de répondre aux besoins informatiques des entreprises.
  </p>

  <p>
    Il se compose de deux options complémentaires :
    <strong> SLAM </strong> et <strong> SISR </strong>.
  </p>

  <p>
    L’option <strong>SLAM</strong> (Solutions Logicielles et Applications Métiers)
    est orientée développement : création d’applications web et logicielles,
    gestion de bases de données et développement full-stack.
  </p>

  <p>
    L’option <strong>SISR</strong> (Solutions d’Infrastructure, Systèmes et Réseaux)
    est orientée systèmes et réseaux : administration des serveurs,
    gestion des infrastructures, cybersécurité et support utilisateur.
  </p>

  <p>
    Cette formation permet d’acquérir des compétences en développement,
    en administration système, en gestion de projet et en support technique.
  </p>

</div>

        </div>

        {/* ================= RIGHT (SWITCH + TIMELINE) ================= */}
        <div className="about-right">

          {/* SWITCH */}
          <div className="about-switch">

            <div className="switch-buttons">

              <button
                className={tab === "school" ? "active" : ""}
                onClick={() => setTab("school")}
              >
                Parcours académique
              </button>

              <button
                className={tab === "pro" ? "active" : ""}
                onClick={() => setTab("pro")}
              >
                Parcours professionnel
              </button>

            </div>

          </div>

          {/* TIMELINE */}
          <div className="about-timeline">

            {tab === "school" && (
              <div className="timeline">
                <div className="timeline-item">
                  <h3>2020-2023</h3>
                  <p>Baccalauréat - GENERAL</p>
                  <h6>Spécialité scientifique informatique & géopolitque </h6>
                  <h6>Lycée les Sept Mares - 78310</h6>
                </div>

                <div className="timeline-item">
                  <h3>2024 - 2026</h3>
                  <p>BTS SIO SLAM - Développement web & applications</p>
                 <h6>IPSSI Saint-Quentin en Yvelines - 78180</h6>
                </div>
              </div>
            )}

            {tab === "pro" && (
              <div className="timeline">
                <div className="timeline-item">
                  <h3>2023-2024</h3>
                  <p>Logistique</p>
                </div>

                <div className="timeline-item">
                  <h3>2025</h3>
                  <p>Stage - Développement d'application</p>
                  <h6>Mairie de Trappes - 78190</h6>
                </div>

                <div className="timeline-item">
                  <h3>2026</h3>
                  <p>Stage - Développement d'application web</p>
                  <h6>Nivo Web 33000 (Télé-Travail)</h6>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}