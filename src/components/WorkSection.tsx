import { motion } from "framer-motion";
import ProjectArchitecture from "./ProjectArchitecture";

function WorkSection() {
  return (
    <section id="work" className="work-section">
      <div className="work-header">
        <div className="section-label">
          <span>01</span>
          SELECTED WORK
        </div>

        <p className="work-intro">
          Systems I've built to explore the intersection
          of backend engineering and intelligent software.
        </p>
      </div>

      <div className="project">
        <motion.div
          className="project-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="project-number">01 / AI SYSTEM</p>

          <h2>
            Document
            <br />
            <span>Intelligence.</span>
          </h2>

          <p className="project-description">
            An AI-powered document system that lets users
            upload documents, retrieve relevant information,
            ask questions across their knowledge base, and
            receive grounded answers with citations.
          </p>

          <div className="project-stack">
            <span>PYTHON</span>
            <span>FASTAPI</span>
            <span>POSTGRESQL</span>
            <span>RAG</span>
            <span>EMBEDDINGS</span>
            <span>LLM</span>
          </div>

          <a
            href="#"
            className="project-link"
            onClick={(event) => event.preventDefault()}
          >
            VIEW PROJECT
            <span>↗</span>
          </a>
        </motion.div>

        <motion.div
          className="project-system"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="system-header">
            <span>SYSTEM PIPELINE</span>
            <span>RAG / 001</span>
          </div>

          <ProjectArchitecture />
        </motion.div>
      </div>
    </section>
  );
}

export default WorkSection;