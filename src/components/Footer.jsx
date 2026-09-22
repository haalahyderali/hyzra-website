import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            HyZra
          </Link>

          <p>
            Creating modern digital experiences
            for ambitious businesses.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
        </div>

        <div className="footer-contact">
          <h4>Get in touch</h4>

          <a href="mailto:info@hyzra.com">
            info@hyzra.com
          </a>

          <a href="tel:+918086745229">
            +91 80867 45229
          </a>

          <span>Kerala, India</span>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 HyZra Quadtech Innovations. All rights reserved.
        </p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;