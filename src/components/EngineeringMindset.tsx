import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Scenario = {
  number: string;
  title: string;
  question: string;
  description: string;
  steps: {
    label: string;
    result: string;
    state: "normal" | "active" | "muted";
  }[];
};

const scenarios: Scenario[] = [
  {
    number: "01",
    title: "API FAILURE",
    question: "A request suddenly starts returning 500.",
    description:
      "I don't immediately change the code. I first narrow down where the failure entered the system.",
    steps: [
      {
        label: "REQUEST REACHED API",
        result: "YES",
        state: "normal",
      },
      {
        label: "AUTHENTICATION",
        result: "PASS",
        state: "normal",
      },
      {
        label: "SERVICE EXECUTION",
        result: "FAIL",
        state: "active",
      },
      {
        label: "DATABASE QUERY",
        result: "NOT REACHED",
        state: "muted",
      },
      {
        label: "ROOT CAUSE",
        result: "SERVICE LAYER",
        state: "active",
      },
    ],
  },

  {
    number: "02",
    title: "DATABASE FAILURE",
    question: "The API is healthy, but requests are timing out.",
    description:
      "Separate application health from dependency health, then inspect query behaviour, connections, locks, and database metrics.",
    steps: [
      {
        label: "REQUEST REACHED API",
        result: "YES",
        state: "normal",
      },
      {
        label: "SERVICE EXECUTION",
        result: "YES",
        state: "normal",
      },
      {
        label: "DATABASE CONNECTION",
        result: "SLOW",
        state: "active",
      },
      {
        label: "QUERY / LOCKS",
        result: "INVESTIGATE",
        state: "active",
      },
      {
        label: "ROOT CAUSE",
        result: "DATABASE",
        state: "active",
      },
    ],
  },

  {
    number: "03",
    title: "SLOW RESPONSE",
    question: "The endpoint works, but latency suddenly increases.",
    description:
      "Measure before changing anything. The goal is to identify which part of the request path is consuming the time.",
    steps: [
      {
        label: "API LATENCY",
        result: "HIGH",
        state: "active",
      },
      {
        label: "APPLICATION",
        result: "CHECK",
        state: "normal",
      },
      {
        label: "DATABASE",
        result: "CHECK",
        state: "normal",
      },
      {
        label: "EXTERNAL DEPENDENCY",
        result: "CHECK",
        state: "normal",
      },
      {
        label: "TRACE",
        result: "FIND BOTTLENECK",
        state: "active",
      },
    ],
  },

  {
    number: "04",
    title: "AI WRONG ANSWER",
    question: "The LLM gives an answer that doesn't match the document.",
    description:
      "I don't immediately blame the model. I inspect the retrieval pipeline first: query, candidates, ranking, context, and generation.",
    steps: [
      {
        label: "USER QUERY",
        result: "VALID",
        state: "normal",
      },
      {
        label: "RETRIEVAL",
        result: "CHECK",
        state: "active",
      },
      {
        label: "RERANKING",
        result: "CHECK",
        state: "active",
      },
      {
        label: "CONTEXT",
        result: "CHECK",
        state: "active",
      },
      {
        label: "GENERATION",
        result: "CHECK LAST",
        state: "normal",
      },
    ],
  },
];

function EngineeringMindset() {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenario = scenarios[activeScenario];

  return (
    <section id="thinking" className="mindset-section">
      <div className="mindset-header">
        <div className="section-label">
          <span>02</span>
          HOW I THINK
        </div>

        <h2>
          Engineering is mostly
          <br />
          <span>asking the right question.</span>
        </h2>
      </div>

      <div className="mindset-layout">
        <div className="scenario-list">
          {scenarios.map((item, index) => (
            <button
              key={item.number}
              className={`scenario-button ${
                activeScenario === index ? "active" : ""
              }`}
              onClick={() => setActiveScenario(index)}
            >
              <span>{item.number}</span>

              <strong>{item.title}</strong>

              <span className="scenario-arrow">↗</span>
            </button>
          ))}
        </div>

        <div className="scenario-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={scenario.number}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <div className="scenario-meta">
                SCENARIO {scenario.number}
              </div>

              <h3>{scenario.question}</h3>

              <p className="scenario-description">
                {scenario.description}
              </p>

              <div className="diagnostic-flow">
                {scenario.steps.map((step, index) => (
                  <div
                    className={`diagnostic-step ${step.state}`}
                    key={step.label}
                  >
                    <div className="diagnostic-number">
                      0{index + 1}
                    </div>

                    <div className="diagnostic-content">
                      <span>{step.label}</span>
                      <strong>{step.result}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default EngineeringMindset;