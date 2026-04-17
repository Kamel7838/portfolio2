import React from "react";
import Navbar from "../components/Navbar";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div>

      <Navbar />

      <section className="contact-section">

        <h2>Contact</h2>

        <p>
          Vous souhaitez discuter d’un projet ou collaborer ?
        </p>

        <div className="contact-buttons">

          <a href="mailto:kamel@email.com" className="btn-primary">
            Me contacter
          </a>

          <a href="https://github.com/" target="_blank" className="btn-secondary">
            GitHub
          </a>

        </div>

      </section>

    </div>
  );
}