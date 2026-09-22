import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta" id="contact">

      <div className="cta-content">

        <p className="section-tag">LET'S WORK TOGETHER</p>

        <h2>
          Have an idea?
          <span> Let's build it.</span>
        </h2>

        <p>
          Whether you need a new website, a digital experience or
          a creative solution, let's turn your idea into something
          meaningful.
        </p>

        <Link to="/about" className="cta-button">
          Start a Project
          <span>↗</span>
        </Link>

      </div>

    </section>
  );
}

export default CTA;