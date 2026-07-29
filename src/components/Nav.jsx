import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isProjectsActive = location.pathname.startsWith("/projects");

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <img
              src="/profile-photo.jpg"
              alt="Ashik"
              className="nav-logo-img"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "inline";
              }}
            />
            <span className="nav-logo-text">Ashik</span>
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
              >
                Projects ▾
              </NavLink>
              <div className="nav-dropdown-menu">
                <Link to="/projects?category=research" className="nav-dropdown-item">
                  Research
                </Link>
                <Link to="/projects?category=software" className="nav-dropdown-item">
                  Software
                </Link>
                <Link to="/projects" className="nav-dropdown-item">
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
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile${mobileOpen ? " open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <div className="nav-mobile-sub">
          <Link to="/projects?category=research">Research</Link>
          <Link to="/projects?category=software">Software</Link>
        </div>
        <Link to="/publications">Publications</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}
