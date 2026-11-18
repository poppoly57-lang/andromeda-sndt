import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      const nextState = window.scrollY > 30;
      setIsScrolled((currentState) =>
        currentState === nextState ? currentState : nextState,
      );
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Academy", path: "/academy" },
    { name: "Videos", path: "/videos" },
    { name: "Resources", path: "/resources" },
    { name: "About", path: "/about" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${isScrolled ? " scrolled" : ""}`}>
      <NavLink to="/" className="brand" onClick={closeMenu}>
        <img
          src="/images/andromeda-logo.png"
          alt="Andromeda SNDT Academy logo"
        />
        <span className="brand-name" aria-hidden="true">
          <span>ANDROMEDA</span>
          <span>SNDT ACADEMY</span>
        </span>
      </NavLink>

      <nav
        id="primary-navigation"
        aria-label="Primary navigation"
        className={`nav-links ${menuOpen ? "open" : ""}`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.name}
          </NavLink>
        ))}

        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-contact active" : "nav-contact"
          }
          aria-label="Contact us"
        >
          Contact Us
        </NavLink>
      </nav>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
    </header>
  );
}

export default Navbar;