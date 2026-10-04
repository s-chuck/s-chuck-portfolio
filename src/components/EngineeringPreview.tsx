// import { ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";

function EngineeringPreview() {
  return (
    <section className="engineering-preview">

      <div className="section-label">
        <span>02</span>
        HOW I BUILD
      </div>

      <div className="engineering-preview-content">

        <h2>
          I don't start with
          <br />
          <span>the code.</span>
        </h2>

        <div>

          <p>
            I start by understanding the system,
            the failure modes, and the tradeoffs
            behind the problem.
          </p>

          {/* <Link
            to="/about"
            className="text-link"
          >
            HOW I THINK
            <ArrowUpRight size={15} />
          </Link> */}

        </div>

      </div>

    </section>
  );
}

export default EngineeringPreview;