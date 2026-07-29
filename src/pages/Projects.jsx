import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { apiGet } from "../api";
import Loading from "../components/Loading";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("category") || "all";

  useEffect(() => {
    apiGet("/projects")
      .then(setProjects)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const setFilter = (cat) => {
    if (cat === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="page">
      <div className="container">
        <p className="section-label">Projects</p>
        <h1 className="section-title">All Projects</h1>

        <div className="filter-bar">
          {["all", "research", "software"].map((cat) => (
            <button
              key={cat}
              className={`filter-btn${activeFilter === cat ? " active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filtered.map((project) => (
            <Link
              to={`/projects/${project.slug}`}
              key={project.slug}
              className="project-card"
              style={{ textDecoration: "none" }}
            >
              <span className="project-card-badge">{project.category}</span>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-summary">{project.summary}</p>
              <div className="project-card-tech">
                {project.tech.slice(0, 5).map((t) => (
                  <span className="tech-tag" key={t}>
                    {t}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="tech-tag">+{project.tech.length - 5}</span>
                )}
              </div>
              <p className="project-card-year">{project.year}</p>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ color: "var(--text-muted)", padding: "var(--space-2xl) 0" }}>
            No projects in this category.
          </p>
        )}
      </div>
    </div>
  );
}
