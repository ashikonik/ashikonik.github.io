import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Escape closes the mobile menu so keyboard users aren't trapped inside it.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const isProjectsActive = location.pathname.startsWith("/projects");

  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            Ashik-Uz-Zaman
          </Link>

          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-dropdown">
              <NavLink
                to="/projects"
                className={`nav-link${isProjectsActive ? " active" : ""}`}
                aria-haspopup="true"
                aria-expanded={isProjectsActive ? "true" : "false"}
              >
                Projects ▾
              </NavLink>
              <div className="nav-dropdown-menu" role="menu">
                <Link to="/projects?category=research" className="nav-dropdown-item" role="menuitem">
                  Research
                </Link>
                <Link to="/projects?category=software" className="nav-dropdown-item" role="menuitem">
                  Software
                </Link>
                <Link to="/projects" className="nav-dropdown-item" role="menuitem">
                  All Projects
                </Link>
              </div>
            </li>
            <li>
              <NavLink
                to="/publications"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                Publications
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <button
            className={`nav-hamburger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="nav-mobile-panel"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        id="nav-mobile-panel"
        className={`nav-mobile${mobileOpen ? " open" : ""}`}
        hidden={!mobileOpen}
      >
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <div className="nav-mobile-sub">
          <Link to="/projects?category=research">Research</Link>
          <Link to="/projects?category=software">Software</Link>
          <Link to="/projects">All Projects</Link>
        </div>
        <Link to="/publications">Publications</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}