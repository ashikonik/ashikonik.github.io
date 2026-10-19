import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { projects } from "../data";
import Loading from "../components/Loading";

export default function Projects() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHydrated(true), 0);
    return () => clearTimeout(t);
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("category") || "all";

  if (!hydrated) return <Loading />;

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

  const counts = {
    all: projects.length,
    research: projects.filter((p) => p.category === "research").length,
    software: projects.filter((p) => p.category === "software").length,
  };

  return (
    <div className="page">
      <div className="container">
        <p className="section-label">Projects</p>
        <h1 className="section-title">All Projects</h1>
        <p className="section-subtitle">
          {projects.length} total · {counts.research} research,{" "}
          {counts.software} software
        </p>

        <div className="filter-bar">
          {["all", "research", "software"].map((cat) => (
            <button
              key={cat}
              className={`filter-btn${activeFilter === cat ? " active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}{" "}
              <span className="filter-count">({counts[cat]})</span>
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filtered.map((project) => (
            <Link
              to={`/projects/${project.slug}`}
              key={project.slug}
              className={`project-card ${project.category}`}
              style={{ textDecoration: "none" }}
            >
              <span className="project-card-arrow" aria-hidden="true">↗</span>
              <div className="project-card-meta">
                <span className="project-card-badge">{project.category}</span>
                <span className="project-card-year">{project.year}</span>
              </div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-summary">{project.summary}</p>
              <div className="project-card-tech">
                {project.tech.slice(0, 5).map((t) => (
                  <span className="tech-tag" key={t}>
                    {t}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="tech-tag">
                    +{project.tech.length - 5}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            style={{
              color: "var(--text-muted)",
              padding: "var(--space-2xl) 0",
            }}
          >
            No projects in this category.
          </p>
        )}
      </div>
    </div>
  );
}