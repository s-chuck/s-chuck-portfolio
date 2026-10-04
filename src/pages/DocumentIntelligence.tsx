import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProjectArchitecture from "../components/ProjectArchitecture";

function DocumentIntelligence() {
  return (
    <main className="site inner-page">
      <Navbar />

      <section className="project-hero">
        <Link to="/work" className="back-link">
          <ArrowLeft size={14} />
          BACK TO WORK
        </Link>

        <div className="project-hero-grid">
          <div className="project-hero-main">
            <div className="project-hero-label">
              01 / AI SYSTEM
            </div>

            <h1>
              Document
              <br />
              <span>Intelligence.</span>
            </h1>

            <p className="project-hero-description">
              A document intelligence system designed to retrieve
              relevant information, generate grounded answers,
              and connect every answer back to its source.
            </p>

            <div className="project-tech-stack">
              <span>PYTHON</span>
              <span>FASTAPI</span>
              <span>POSTGRESQL</span>
              <span>RAG</span>
              <span>VECTOR SEARCH</span>
              <span>LLM</span>
            </div>
          </div>

          <aside className="project-hero-meta">
            <div className="project-hero-meta-header">
              <span>SYSTEM PROFILE</span>
              <span className="project-hero-meta-status">
                ACTIVE BUILD
              </span>
            </div>

            <dl className="project-hero-meta-list">
              <div className="project-hero-meta-row">
                <dt>SYSTEM</dt>
                <dd>DOCUMENT QA / MANAGEMENT</dd>
              </div>

              <div className="project-hero-meta-row">
                <dt>CORE</dt>
                <dd>RAG · VECTOR SEARCH · LLM</dd>
              </div>

              <div className="project-hero-meta-row">
                <dt>BACKEND</dt>
                <dd>FASTAPI · POSTGRESQL</dd>
              </div>

              <div className="project-hero-meta-row">
                <dt>FOCUS</dt>
                <dd>RETRIEVAL · GROUNDING · CITATIONS</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="project-story">
        <div className="project-story-grid">
          <div>
            <div className="section-label">
              <span>01</span>
              THE PROBLEM
            </div>

            <h2>
              Turning documents
              <br />
              into answers.
            </h2>
          </div>

          <div className="project-story-content">
            <p>
              Important information is often buried inside
              documents. As the number of documents grows,
              manually finding the right information becomes
              slow and difficult.
            </p>

            <p>
              The system allows users to upload documents,
              process them asynchronously, and ask questions
              using natural language.
            </p>

            <p>
              But generating an answer is only part of the
              problem. The system also needs to retrieve the
              right evidence and connect the response back
              to its original source.
            </p>
          </div>
        </div>

        <div className="project-problem-flow">
          <div className="problem-step">
            <span className="problem-step-number">01</span>
            <span className="problem-step-title">DOCUMENTS</span>
            <span className="problem-step-description">
              Information is distributed across files.
            </span>
            <span className="problem-step-arrow">→</span>
          </div>

          <div className="problem-step">
            <span className="problem-step-number">02</span>
            <span className="problem-step-title">RETRIEVAL</span>
            <span className="problem-step-description">
              Find the relevant pieces of information.
            </span>
            <span className="problem-step-arrow">→</span>
          </div>

          <div className="problem-step">
            <span className="problem-step-number">03</span>
            <span className="problem-step-title">CONTEXT</span>
            <span className="problem-step-description">
              Give the model the right evidence.
            </span>
            <span className="problem-step-arrow">→</span>
          </div>

          <div className="problem-step">
            <span className="problem-step-number">04</span>
            <span className="problem-step-title">GROUNDED ANSWER</span>
            <span className="problem-step-description">
              Return an answer with its source.
            </span>
          </div>
        </div>
      </section>

      <section className="project-architecture-section">
        <div className="section-label">
          <span>02</span>
          SYSTEM ARCHITECTURE
        </div>

        <h2>
          From document
          <br />
          to grounded answer.
        </h2>

        <ProjectArchitecture />
      </section>

      <section className="project-decisions">
        <div className="section-label">
          <span>03</span>
          ENGINEERING DECISIONS
        </div>

        <div className="project-decisions-grid">
          <article className="project-decision">
            <div className="project-decision-number">01</div>
            <h3>Why RAG?</h3>
            <p>
              The documents can change independently from
              the language model. Retrieval keeps document
              knowledge external to generation and avoids
              retraining the model whenever source content changes.
            </p>
          </article>

          <article className="project-decision">
            <div className="project-decision-number">02</div>
            <h3>Why PostgreSQL?</h3>
            <p>
              Users, documents, permissions, versions, and
              conversations have structured relationships.
              A relational database provides transactions,
              constraints, and consistent ownership boundaries.
            </p>
          </article>

          <article className="project-decision">
            <div className="project-decision-number">03</div>
            <h3>Why reranking?</h3>
            <p>
              Initial retrieval is useful for finding a broad
              candidate set. A second ranking stage can improve
              precision before context is passed to the model.
            </p>
          </article>

          <article className="project-decision">
            <div className="project-decision-number">04</div>
            <h3>Why async processing?</h3>
            <p>
              Parsing, chunking, embedding, and indexing can
              take longer than the upload request. Separating
              processing keeps the user-facing upload path responsive.
            </p>
          </article>
        </div>
      </section>

      <section className="project-failures">
        <div className="section-label">
          <span>04</span>
          FAILURE MODES
        </div>

        <div className="project-failures-grid">
          <article className="project-failure">
            <span className="project-failure-number">01 / RETRIEVAL</span>
            <h3>Relevant information isn't retrieved.</h3>
            <p>
              The answer may exist in the document, but poor
              chunking, embeddings, or retrieval parameters can
              prevent the right evidence from reaching generation.
            </p>
          </article>

          <article className="project-failure">
            <span className="project-failure-number">02 / CHUNKING</span>
            <h3>Context is split at the wrong boundary.</h3>
            <p>
              Splitting content too aggressively can separate
              related information and make an otherwise relevant
              passage harder to retrieve.
            </p>
          </article>

          <article className="project-failure">
            <span className="project-failure-number">03 / GENERATION</span>
            <h3>The model lacks sufficient evidence.</h3>
            <p>
              When retrieved context is incomplete or ambiguous,
              the system needs to avoid presenting unsupported
              information as if it came from the source.
            </p>
          </article>

          <article className="project-failure">
            <span className="project-failure-number">04 / PROCESSING</span>
            <h3>Upload succeeds, indexing doesn't.</h3>
            <p>
              Asynchronous processing introduces partial-failure
              states, so the system needs a way to track processing
              status and surface failures instead of hiding them.
            </p>
          </article>
        </div>
      </section>

      <section className="project-next">
        <div className="section-label">
          <span>05</span>
          NEXT ITERATION
        </div>

        <div className="project-next-grid">
          <article className="project-next-item">
            <div className="project-next-number">01</div>

            <div>
              <h3>Hybrid search</h3>
              <span className="project-next-badge">
                FUTURE WORK
              </span>
            </div>

            <p>
              Combine semantic retrieval with keyword-based
              search so the system can handle both conceptual
              similarity and exact terms, identifiers, or names.
            </p>
          </article>

          <article className="project-next-item">
            <div className="project-next-number">02</div>

            <div>
              <h3>Stronger reranking</h3>
              <span className="project-next-badge">
                FUTURE WORK
              </span>
            </div>

            <p>
              Evaluate a dedicated cross-encoder reranking stage
              to improve precision when several retrieved passages
              are semantically similar.
            </p>
          </article>

          <article className="project-next-item">
            <div className="project-next-number">03</div>

            <div>
              <h3>Observability</h3>
              <span className="project-next-badge">
                FUTURE WORK
              </span>
            </div>

            <p>
              Track retrieval latency, processing failures,
              token usage, and request-level behavior so the
              system can be diagnosed under real workloads.
            </p>
          </article>

          <article className="project-next-item">
            <div className="project-next-number">04</div>

            <div>
              <h3>Evaluation</h3>
              <span className="project-next-badge">
                FUTURE WORK
              </span>
            </div>

            <p>
              Build a representative question set and evaluate
              retrieval quality separately from final answer
              quality instead of relying only on subjective testing.
            </p>
          </article>
        </div>
      </section>

      <section className="project-end">
        <div className="section-label">
          <span>06</span>
          PROJECT
        </div>

        <h2>
          Explore the
          <br />
          implementation.
        </h2>

        <a
          href="https://github.com/s-chuck/Documind"
          target="_blank"
          rel="noreferrer"
          className="contact-button"
        >
          VIEW ON GITHUB
          <ArrowUpRight size={17} />
        </a>
      </section>
    </main>
  );
}

export default DocumentIntelligence;
