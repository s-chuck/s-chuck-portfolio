import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

const stages = [
  {
    id: "01",
    name: "INGEST",
    title: "Document ingestion",
    description:
      "Documents enter the system through an asynchronous upload pipeline. The original document is stored while processing continues independently.",
    visual: "documents",
  },
  {
    id: "02",
    name: "PARSE",
    title: "Parse the document",
    description:
      "The document is converted into usable text while preserving useful metadata such as page information and document identity.",
    visual: "parse",
  },
  {
    id: "03",
    name: "CHUNK",
    title: "Create retrieval units",
    description:
      "The extracted content is divided into smaller chunks so retrieval can operate on focused pieces of information rather than entire documents.",
    visual: "chunks",
  },
  {
    id: "04",
    name: "EMBED",
    title: "Create embeddings",
    description:
      "Each chunk is represented as a dense vector so semantically related content can be retrieved even when the wording differs from the user's question.",
    visual: "vectors",
  },
  {
    id: "05",
    name: "RETRIEVE",
    title: "Retrieve candidates",
    description:
      "The question is converted into a searchable representation and used to retrieve potentially relevant chunks from the indexed document collection.",
    visual: "retrieve",
  },
  {
    id: "06",
    name: "RERANK",
    title: "Rank the evidence",
    description:
      "Retrieved candidates are evaluated again so the strongest pieces of evidence can be selected before generation.",
    visual: "rerank",
  },
  {
    id: "07",
    name: "GENERATE",
    title: "Generate the answer",
    description:
      "The selected context and the user's question are passed to the language model to produce a grounded response.",
    visual: "generate",
  },
  {
    id: "08",
    name: "CITATE",
    title: "Return the evidence",
    description:
      "The answer is returned together with source information so users can understand where the response came from.",
    visual: "cite",
  },
];

const AUTO_PLAY_DELAY = 3200;

function ProjectArchitecture() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /*
   * Automatically move through the architecture.
   */
  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveStage((current) => {
        if (current === stages.length - 1) {
          return 0;
        }

        return current + 1;
      });
    }, AUTO_PLAY_DELAY);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeStage, isPaused]);

  const active = stages[activeStage];

  /*
   * Clicking a stage lets the recruiter investigate it.
   * It also pauses the automatic animation.
   */
  const handleStageClick = (index: number) => {
    setActiveStage(index);
    setIsPaused(true);
  };

  const togglePlayback = () => {
    setIsPaused((current) => !current);
  };

  return (
    <div className="rag-architecture">

      {/* =====================================================
          PIPELINE HEADER
          ===================================================== */}

      <div className="rag-architecture-top">

        <div className="rag-architecture-caption">
          <span className="rag-live-dot" />

          SYSTEM FLOW

          <span className="rag-caption-divider">
            /
          </span>

          {isPaused ? "PAUSED" : "RUNNING"}
        </div>

        <button
          type="button"
          className={`rag-playback ${
            isPaused ? "paused" : ""
          }`}
          onClick={togglePlayback}
        >
          {isPaused ? (
            <>
              <Play size={13} />
              RESUME
            </>
          ) : (
            <>
              <Pause size={13} />
              PAUSE
            </>
          )}
        </button>

      </div>


      {/* =====================================================
          PIPELINE
          ===================================================== */}

      <div className="rag-pipeline">

        {stages.map((stage, index) => (
          <div
            key={stage.id}
            className="rag-stage-wrapper"
          >

            <button
              type="button"
              className={`rag-stage ${
                activeStage === index
                  ? "active"
                  : ""
              }`}
              onClick={() => handleStageClick(index)}
            >

              <span className="rag-stage-number">
                {stage.id}
              </span>

              <span className="rag-stage-name">
                {stage.name}
              </span>

            </button>

            {index < stages.length - 1 && (
              <div className="rag-connector">
                <span
                  className={
                    activeStage > index
                      ? "completed"
                      : ""
                  }
                />
              </div>
            )}

          </div>
        ))}

      </div>


      {/* =====================================================
          ACTIVE STAGE
          ===================================================== */}

      <div className="rag-detail">

        <div className="rag-detail-content">

          <AnimatePresence mode="wait">

            <motion.div
              key={active.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >

              <div className="rag-detail-index">
                STAGE {active.id}
              </div>

              <h3>{active.title}</h3>

              <p>{active.description}</p>

            </motion.div>

          </AnimatePresence>

        </div>


        {/* =================================================
            VISUAL
            ================================================= */}

        <div className="rag-visual">

          <AnimatePresence mode="wait">

            <motion.div
              key={active.visual}
              className="rag-visual-inner"
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >

              {active.visual === "documents" && (
                <DocumentVisual />
              )}

              {active.visual === "parse" && (
                <ParseVisual />
              )}

              {active.visual === "chunks" && (
                <ChunkVisual />
              )}

              {active.visual === "vectors" && (
                <VectorVisual />
              )}

              {active.visual === "retrieve" && (
                <RetrieveVisual />
              )}

              {active.visual === "rerank" && (
                <RerankVisual />
              )}

              {active.visual === "generate" && (
                <GenerateVisual />
              )}

              {active.visual === "cite" && (
                <CitationVisual />
              )}

            </motion.div>

          </AnimatePresence>

        </div>

      </div>


      {/* =====================================================
          PROGRESS
          ===================================================== */}

      <div className="rag-progress">

        <div
          className="rag-progress-bar"
          style={{
            width: `${
              ((activeStage + 1) / stages.length) * 100
            }%`,
          }}
        />

      </div>

    </div>
  );
}


/* =========================================================
   DOCUMENT
   ========================================================= */

function DocumentVisual() {
  return (
    <div className="rag-document-stack">

      <div className="rag-document">
        <div className="rag-document-title">
          REPORT.PDF
        </div>

        <div className="rag-document-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="rag-flow-arrow">
        →
      </div>

      <div className="rag-system-node active">
        INGEST
      </div>

    </div>
  );
}


/* =========================================================
   PARSE
   ========================================================= */

function ParseVisual() {
  return (
    <div className="rag-parse-visual">

      <div className="rag-system-node">
        PDF
      </div>

      <div className="rag-flow-arrow">
        →
      </div>

      <div className="rag-system-node active">
        TEXT
      </div>

      <div className="rag-flow-arrow">
        →
      </div>

      <div className="rag-system-node">
        METADATA
      </div>

    </div>
  );
}


/* =========================================================
   CHUNKS
   ========================================================= */

function ChunkVisual() {
  return (
    <div className="rag-chunk-visual">

      <div className="rag-large-document">
        DOCUMENT
      </div>

      <div className="rag-chunk-arrow">
        ↓
      </div>

      <div className="rag-chunks">

        <div>CHUNK 01</div>
        <div>CHUNK 02</div>
        <div>CHUNK 03</div>
        <div>CHUNK 04</div>

      </div>

    </div>
  );
}


/* =========================================================
   VECTOR
   ========================================================= */

function VectorVisual() {
  return (
    <div className="rag-vector-visual">

      <div className="rag-vector-label">
        EMBEDDING
      </div>

      <div className="rag-vector-grid">

        {Array.from({ length: 48 }).map((_, index) => (
          <span
            key={index}
            className={
              index % 5 === 0 ||
              index % 7 === 0
                ? "active"
                : ""
            }
          />
        ))}

      </div>

      <div className="rag-vector-dimension">
        384-D VECTOR
      </div>

    </div>
  );
}


/* =========================================================
   RETRIEVE
   ========================================================= */

function RetrieveVisual() {
  return (
    <div className="rag-retrieve-visual">

      <div className="rag-query">
        USER QUERY
      </div>

      <div className="rag-flow-arrow">
        ↓
      </div>

      <div className="rag-retrieval-results">

        <div>
          <span>CHUNK 07</span>
          <b>0.92</b>
        </div>

        <div>
          <span>CHUNK 31</span>
          <b>0.87</b>
        </div>

        <div>
          <span>CHUNK 14</span>
          <b>0.81</b>
        </div>

        <div>
          <span>CHUNK 52</span>
          <b>0.74</b>
        </div>

      </div>

    </div>
  );
}


/* =========================================================
   RERANK
   ========================================================= */

function RerankVisual() {
  return (
    <div className="rag-rerank-visual">

      <div className="rag-rerank-title">
        CANDIDATE PASSAGES
      </div>

      <div className="rag-ranking">

        <div className="top">
          <span>CHUNK 07</span>
          <b>0.97</b>
        </div>

        <div>
          <span>CHUNK 31</span>
          <b>0.91</b>
        </div>

        <div>
          <span>CHUNK 14</span>
          <b>0.63</b>
        </div>

      </div>

    </div>
  );
}


/* =========================================================
   GENERATE
   ========================================================= */

function GenerateVisual() {
  return (
    <div className="rag-generation">

      <div className="rag-generation-input">
        CONTEXT + QUESTION
      </div>

      <div className="rag-flow-arrow">
        ↓
      </div>

      <div className="rag-llm">
        LLM
      </div>

      <div className="rag-flow-arrow">
        ↓
      </div>

      <div className="rag-generation-output">
        GROUNDED ANSWER
      </div>

    </div>
  );
}


/* =========================================================
   CITATION
   ========================================================= */

function CitationVisual() {
  return (
    <div className="rag-citation">

      <p>
        The document contains the requested
        information and the relevant section
        can be traced back to its original page.
      </p>

      <div className="rag-citation-source">
        SOURCE · REPORT.PDF · PAGE 12
      </div>

    </div>
  );
}


export default ProjectArchitecture;