import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { apiGet } from "../api";
import Loading from "../components/Loading";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiGet(`/projects/${slug}`)
      .then(setProject)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Loading />;
  if (error || !project) {
    return (
      <div className="page container">
        <div className="not-found">
          <h1>404</h1>
          <p>Project not found.</p>
          <Link to="/projects">← Back to projects</Link>
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

          <p style={{ fontSize: "var(--text-lg)", color: "var(--text-secondary)", lineHeight: 1.7 }}>
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
            <p className="section-label" style={{ marginBottom: "var(--space-md)" }}>
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
