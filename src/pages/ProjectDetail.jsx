import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data";
import Loading from "../components/Loading";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHydrated(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!hydrated) return <Loading />;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="page container">
        <div className="not-found">
          <h1>404</h1>
          <p>That project doesn't live here anymore.</p>
          <p className="not-found-note">
            Maybe it never did, maybe it just grew up and got a real README.
          </p>
          <Link to="/projects">← Back to all projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <div className="project-detail">
          <Link to="/projects" className="project-detail-back">
            ← All Projects
          </Link>

          <h1>{project.title}</h1>

          <div className="project-detail-meta">
            <span className="project-card-badge">{project.category}</span>
            <span className="project-card-year">{project.year}</span>
          </div>

          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            {project.summary}
          </p>

          <h2>Problem</h2>
          <p>{project.problem}</p>

          <h2>Approach</h2>
          <p>{project.approach}</p>

          <h2>Outcome</h2>
          <p>{project.outcome}</p>

          <h2>Highlights</h2>
          <ul className="project-detail-highlights">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <div style={{ marginTop: "var(--space-2xl)" }}>
            <p
              className="section-label"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Tech Stack
            </p>
            <div className="project-card-tech">
              {project.tech.map((t) => (
                <span className="tech-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="project-detail-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail-link"
              >
                View on GitHub →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}