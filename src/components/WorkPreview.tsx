import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    category: "AI SYSTEM",
    title: "Document Intelligence.",
    description:
      "A document intelligence system for retrieval, grounded answers, and source citations.",
    tech: "PYTHON · FASTAPI · POSTGRESQL · RAG",
    path: "/work/document-intelligence",
    available: true,
  },
  {
    number: "02",
    category: "AI SYSTEM",
    title: "AI Agent System.",
    description:
      "Coming soon — an agentic system exploring tool use, workflow orchestration, and LLM-driven task execution.",
    tech: "PYTHON · LANGGRAPH · LLM · TOOLS",
    available: false,
  },
  {
    number: "03",
    category: "BACKEND SYSTEM",
    title: "Backend Platform.",
    description:
      "Coming soon — a backend engineering project focused on API design, reliability, asynchronous processing, and infrastructure.",
    tech: "PYTHON · FASTAPI · POSTGRESQL · DOCKER",
    path: "/work",
    available: false,
  },
];

function WorkPreview() {
  return (
    <section className="work-preview">
      <div className="work-preview-header">
        <div className="section-label">
          <span>01</span>
          SELECTED WORK
        </div>

        <Link to="/work" className="text-link">
          VIEW ALL
          <ArrowUpRight size={15} />
        </Link>
      </div>

      <div className="project-preview-list">
        {projects.map((project) => {
          const content = (
            <>
              <div className="project-card-top">
                <span className="project-preview-number">
                  {project.number}
                </span>

                <span className="project-preview-category">
                  {project.available ? project.category : "COMING SOON"}
                </span>
              </div>

              <div className="project-card-main">
                <h3>{project.title}</h3>

                <p className="project-preview-description">
                  {project.description}
                </p>
              </div>

              <div className="project-card-bottom">
                <span className="project-preview-tech">
                  {project.tech}
                </span>

                {project.available ? (
                  <span className="project-preview-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                ) : (
                  <span className="project-preview-arrow" aria-hidden="true">
                    —
                  </span>
                )}
              </div>
            </>
          );

          if (!project.available) {
            return (
              <div
                key={project.number}
                className="project-preview-card project-preview-card-disabled"
              >
                {content}
              </div>
            );
          }

          return (
            <Link
              key={project.number}
              to={project.path!}
              className="project-preview-card"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default WorkPreview;
