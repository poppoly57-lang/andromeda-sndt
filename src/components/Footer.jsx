import { Link } from "react-router-dom";
import "../styles/Footer.css";

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "Academy", to: "/academy" },
  { label: "Videos", to: "/videos" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const learningLinks = [
  { label: "Video learning", to: "/videos" },
  { label: "Study materials", to: "/resources" },
  { label: "Market knowledge", to: "/academy" },
];

function Footer() {
  return (
    <footer className="academy-footer">
      <div className="academy-footer-main">
        <div className="academy-footer-brand-area">
          <Link className="academy-footer-brand" to="/" aria-label="Andromeda SNDT Academy home">
            <img
              src="/images/branding/andromeda-logo.png"
              alt="Andromeda SNDT Academy"
              loading="lazy"
              decoding="async"
            />
          </Link>
          <p>
            An educational platform dedicated to developing forex knowledge,
            market understanding and responsible learning.
          </p>
        </div>

        <nav className="academy-footer-column" aria-label="Footer navigation">
          <h2>EXPLORE</h2>
          {navigationLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>

        <nav className="academy-footer-column" aria-label="Learning links">
          <h2>LEARNING</h2>
          {learningLinks.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="academy-footer-bottom">
        <p className="academy-footer-credit">
          Build by:{" "}
          <a
            href="https://poly-carp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OLUPOT POLYCARP PRINCE
          </a>
        </p>
        <p className="academy-footer-disclaimer">
          Educational content only. Not financial advice.
        </p>
      </div>
    </footer>
  );
}

export default Footer;