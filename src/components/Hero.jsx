function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-tag">
          DIGITAL EXPERIENCES FOR MODERN BUSINESSES
        </p>

        <h1>
          We Build Digital Experiences
          <span> That Move Businesses Forward.</span>
        </h1>

        <p className="hero-description">
          We create modern websites, digital experiences and creative
          solutions that help businesses grow and connect with their
          customers.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="primary-button">
            Start a Project
          </a>

          <a href="#portfolio" className="secondary-button">
            View Our Work
          </a>
        </div>

      </div>

      <div className="hero-visual">

        <div className="hero-circle circle-one"></div>
        <div className="hero-circle circle-two"></div>

        <div className="mockup mockup-one">
          <div className="mockup-header"></div>
          <div className="mockup-content"></div>
          <div className="mockup-cards">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="mockup mockup-two">
          <div className="mockup-header"></div>
          <div className="mockup-content"></div>
          <div className="mockup-cards">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;