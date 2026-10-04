import { ArrowUpRight, Mail } from "lucide-react";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <main className="site inner-page contact-page">
      <Navbar />

      <section className="contact-page-hero">
        <div className="contact-page-label">
          <span>03</span>
          CONTACT
        </div>

        <div className="contact-page-hero-grid">
          <div className="contact-page-heading">
            <div className="contact-availability">
              <span />
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <h1>
              Let's build
              <br />
              <span>something interesting.</span>
            </h1>
          </div>

          <div className="contact-page-intro">
            <p>
              If you're working on backend systems,
              AI applications, or something technically
              interesting, I'd like to hear about it.
            </p>

            <a
              href="mailto:sumitaswal3683@gmail.com"
              className="contact-button contact-main-button"
            >
              GET IN TOUCH
              <ArrowUpRight size={17} />
            </a>

            <div className="contact-page-note">
              <span>01</span>
              EMAIL IS THE FASTEST WAY TO REACH ME.
            </div>
          </div>
        </div>
      </section>

      <section className="contact-page-details">
        <div className="contact-page-details-header">
          <div className="section-label">
            <span>01</span>
            DETAILS
          </div>

          <span className="contact-page-details-caption">
            OPEN TO INTERESTING WORK
          </span>
        </div>

        <div className="contact-details-grid">
          {/* EMAIL */}
          <a
            href="mailto:sumitaswal3683@gmail.com"
            className="contact-detail"
          >
            <div className="contact-detail-top">
              <span>EMAIL</span>
              <Mail size={16} />
            </div>

            <div className="contact-detail-main">
              <strong>sumitaswal3683@gmail.com</strong>
              <ArrowUpRight size={17} />
            </div>
          </a>

          {/* GITHUB */}
          <a
            href="YOUR_ACTUAL_GITHUB_URL"
            target="_blank"
            rel="noreferrer"
            className="contact-detail"
          >
            <div className="contact-detail-top">
              <span>GITHUB</span>
            </div>

            <div className="contact-detail-main">
              <strong>VIEW PROFILE</strong>
              <ArrowUpRight size={17} />
            </div>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/sumit-aswal-696057228/"
            target="_blank"
            rel="noreferrer"
            className="contact-detail"
          >
            <div className="contact-detail-top">
              <span>LINKEDIN</span>

              <span
                className="linkedin-mark"
                aria-hidden="true"
              >
                in
              </span>
            </div>

            <div className="contact-detail-main">
              <strong>VIEW PROFILE</strong>
              <ArrowUpRight size={17} />
            </div>
          </a>

          {/* LOCATION */}
          {/* <div className="contact-detail">
            <div className="contact-detail-top">
              <span>LOCATION</span>
              <span className="contact-detail-index">04</span>
            </div>

            <div className="contact-detail-main">
              <strong>INDIA</strong>
            </div>
          </div> */}
        </div>
      </section>

      <section className="contact-page-footer">
        <div>
          <span>SUMIT ASWAL</span>
          {/* <span>BACKEND ENGINEER · AI ENGINEER</span> */}
        </div>

        <span>BUILDING SYSTEMS / THAT THINK.</span>
      </section>
    </main>
  );
}

export default Contact;