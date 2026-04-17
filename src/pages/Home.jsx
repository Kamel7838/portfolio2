import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home">

      <Navbar />

      <section className="hero-section">
        <div className="hero-container">

          <div className="hero-text">

            <h1 className="hero-name">
              Kamel Siad
            </h1>

            <h2 className="hero-role">
              20 ans • Développeur Web & Backend
            </h2>

            <p className="hero-description">
              Étudiant en <strong>BTS SIO SLAM</strong>, passionné par la création
              d'applications web modernes.
              Je développe principalement avec <strong>React, JavaScript, PHP et MySQL</strong>.
            </p>

            <div className="hero-buttons">
              <a href="/Projects" className="btn-primary">
                Voir mes projets
              </a>

              <a href="/assets/mon-cv.pdf" target="_blank" className="btn-secondary">
                Télécharger mon CV
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}