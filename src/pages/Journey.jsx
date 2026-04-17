import React from "react";
import Navbar from "../components/Navbar";

export default function Journey() {
  return (
    <div>

      <Navbar />

      <section className="parcours-section">

        <h2>Parcours</h2>

        <div className="parcours-timeline">

          <div className="parcours-step">

            <span className="step-year">2022 - 2024</span>

            <div className="step-info">
              <h3>BTS SIO SLAM</h3>
              <p>Développement web et bases de données.</p>
            </div>

          </div>

          <div className="parcours-step">

            <span className="step-year">2020 - 2022</span>

            <div className="step-info">
              <h3>Baccalauréat Scientifique</h3>
              <p>Formation scientifique avec logique et mathématiques.</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}