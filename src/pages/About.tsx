import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <main className="site inner-page">
      <Navbar />

      <section className="about-hero">
        <div className="section-label">
          <span>01</span>
          ABOUT
        </div>

        <div className="about-hero-grid">
          <h1>
            Engineer by
            <br />
            <span>curiosity.</span>
          </h1>

          <div className="about-intro">
            <p>
              I’m a Backend Engineer at Tata Consultancy Services,
              working primarily with Python, FastAPI, APIs, testing,
              debugging, and application environments.
            </p>

            <p>
              I’m now moving deeper into AI engineering, building
              practical systems around retrieval, embeddings, and
              LLM applications.
            </p>
          </div>
        </div>
      </section>

      <section className="about-experience">
        <div className="section-label">
          <span>02</span>
          EXPERIENCE
        </div>

        <div className="about-experience-entry">
          <div className="about-experience-meta">
            <span>2024 — PRESENT</span>
            <span>GHAZIABAD, INDIA</span>
          </div>

          <div className="about-experience-main">
            <h2>Backend Engineer</h2>
            <div className="about-company">
              TATA CONSULTANCY SERVICES
            </div>

            <p>
              Working on the BaNCS financial platform, supporting
              backend application environments and validating
              Python-based services across software release cycles.
            </p>

            <p>
              My work includes testing FastAPI services, validating
              request and response behavior, investigating backend
              issues, reproducing API defects, and collaborating
              with development and QA teams to resolve failures.
            </p>

            <div className="about-tags">
              <span>PYTHON</span>
              <span>FASTAPI</span>
              <span>REST APIs</span>
              <span>POSTMAN</span>
              <span>JENKINS</span>
              <span>DOCKER</span>
              <span>KUBERNETES</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-thinking">
        <div className="section-label">
          <span>03</span>
          HOW I THINK
        </div>

        <div className="about-thinking-grid">
          <h2>
            I don't start with
            <br />
            <span>the code.</span>
          </h2>

          <div className="about-thinking-content">
            <p>
              I start by understanding the system, the failure
              modes, and the tradeoffs behind the problem.
            </p>

            <p>
              Backend engineering has taught me to think about
              APIs, data, failures, environments, and reliability.
              AI engineering adds another layer: retrieval quality,
              context, evaluation, and the behavior of the model.
            </p>
          </div>
        </div>
      </section>

      <section className="about-focus">
        <div className="section-label">
          <span>04</span>
          CURRENTLY EXPLORING
        </div>

        <div className="about-focus-grid">
          <div className="about-focus-item">
            <span>01</span>
            <h3>LLM ENGINEERING</h3>
            <p>
              Building applications around language models rather
              than treating the model as an isolated component.
            </p>
          </div>

          <div className="about-focus-item">
            <span>02</span>
            <h3>RAG & RETRIEVAL</h3>
            <p>
              Embeddings, semantic search, vector databases,
              retrieval quality, and grounded generation.
            </p>
          </div>

          <div className="about-focus-item">
            <span>03</span>
            <h3>AI APPLICATIONS</h3>
            <p>
              Turning AI capabilities into usable backend systems
              with APIs, data, authentication, and workflows.
            </p>
          </div>

          <div className="about-focus-item">
            <span>04</span>
            <h3>BACKEND SYSTEMS</h3>
            <p>
              API design, PostgreSQL, testing, debugging,
              deployment, infrastructure, and reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="about-education">
        <div className="section-label">
          <span>05</span>
          EDUCATION
        </div>

        <div className="about-education-entry">
          <div>
            <h2>B.Tech in Computer Science</h2>
            <p>NOIDA INSTITUTE OF ENGINEERING AND TECHNOLOGY</p>
          </div>

          <div className="about-education-meta">
            <span>2020 — 2024</span>
            <span>GPA · 85%</span>
          </div>
        </div>
      </section>

      <section className="about-contact" id="contact">
        <div className="section-label">
          <span>06</span>
          CONTACT
        </div>

        <div className="about-contact-content">
          <h2>
            Have something
            <br />
            worth building?
          </h2>

          <a
            href="/contact"
            className="contact-button"
          >
            LET’S TALK
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="about-contact-footer">
          <span>SUMIT ASWAL</span>
          <span>BACKEND ENGINEER · AI ENGINEER</span>
        </div>
      </section>
    </main>
  );
}

export default About;
