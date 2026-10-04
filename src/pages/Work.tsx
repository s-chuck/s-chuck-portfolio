import Navbar from "../components/Navbar";
import WorkPreview from "../components/WorkPreview";

function Work() {
  return (
    <main className="site inner-page">
      <Navbar />

      <section className="page-header work-page-header">
        <div className="section-label">
          <span>01</span>
          WORK
        </div>

        <h1>
          Things I've
          <br />
          <span>built.</span>
        </h1>

        {/* <p>
          List of all projects that i made or currently working on.
        </p> */}
      </section>

      <WorkPreview />
    </main>
  );
}

export default Work;