// import { motion } from "framer-motion";
import {
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import WorkPreview from "../components/WorkPreview";
import EngineeringPreview from "../components/EngineeringPreview";

function Home() {
  return (
    <main className="site">

      <Navbar />

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">
        <div className="hero-grid">

          {/* <div className="hero-status">
            <span className="status-dot" />
            AVAILABLE
          </div> */}

          <div className="hero-role">
            · ENGINEER
          </div>

          <h1 className="hero-title">
            Building systems
            <br />
            <span>that think.</span>
          </h1>

          <p className="hero-description">
            I build systems and AI-powered applications, with a
            focus on reliability, retrieval, and intelligent software.
          </p>

          <div className="hero-actions">
            <Link to="/work" className="primary-button">
              Explore my work
              <ArrowUpRight size={17} />
            </Link>

            <Link to="/about" className="secondary-button">
              About me
            </Link>
          </div>

          <div className="hero-stack">
            <span>PYTHON</span>
            <span>FASTAPI</span>
            <span>POSTGRESQL</span>
            <span>RAG</span>
            <span>LLM</span>
          </div>

        </div>
      </section>


      {/* =========================
          WORK PREVIEW
      ========================= */}

      <WorkPreview />


      {/* =========================
          ENGINEERING PREVIEW
      ========================= */}

      <EngineeringPreview />


      {/* =========================
          FOOTER CTA
      ========================= */}

      {/* <section className="home-contact">

        <div className="section-label">
          <span>03</span>
          CONTACT
        </div>

        <h2>
          Let's build something
          <br />
          <span>interesting.</span>
        </h2>

        <Link
          to="/contact"
          className="primary-button"
        >
          Get in touch
          <ArrowUpRight size={18} />
        </Link>

      </section> */}

    </main>
  );
}

export default Home;