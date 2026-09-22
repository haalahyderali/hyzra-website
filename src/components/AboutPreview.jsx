import { Link } from "react-router-dom";

function AboutPreview() {
  return (
    <section className="about-preview">

      <div className="about-preview-content">

        <p className="section-tag">ABOUT HYZRA</p>

        <h2>
          Turning ideas into
          <span> digital experiences.</span>
        </h2>

        <p className="about-preview-text">
          HyZra Quadtech Innovations creates modern digital
          experiences that combine design, technology and
          creativity. We work with businesses to transform
          ideas into meaningful digital solutions.
        </p>

        <Link to="/about" className="about-button">
          Learn More <span>↗</span>
        </Link>

      </div>

      <div className="about-preview-visual">

        <div className="about-number">
          <span>01</span>
          <strong>Digital</strong>
          <strong>Experiences</strong>
        </div>

        <div className="about-circle">
          H
        </div>

      </div>

    </section>
  );
}

export default AboutPreview;