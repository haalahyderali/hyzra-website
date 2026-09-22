import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        <Link to="/" className="logo" onClick={closeMenu}>
          HyZra
        </Link>

        <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <a href="/#services" onClick={closeMenu}>
            Services
          </a>

          <a href="/#portfolio" onClick={closeMenu}>
            Portfolio
          </a>

          <a href="/contact" onClick={closeMenu}>
            Contact
          </a>

        </nav>

        <Link
          to="/contact"
          className="nav-button"
          onClick={closeMenu}
        >
          Get Started
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </header>
  );
}

export default Navbar;