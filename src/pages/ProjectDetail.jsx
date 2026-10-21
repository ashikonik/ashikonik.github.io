import { useParams, Link } from "react-router-dom";
import { projects } from "../data";
import useDocumentTitle from "../components/useDocumentTitle";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  useDocumentTitle(project ? project.title : "Not found");

  if (!project) {
    return (
      <div className="not-found">
        <h1>404</h1>
        <p>That project doesn't live here anymore.</p>
        <p className="not-found-note">
          Maybe it never did, maybe it just grew up and got a real README.
        </p>
        <Link to="/projects">← Back to all projects</Link>
      </div>
    );
  }

  return (
    <article className={`project-detail ${project.category}`}>
      <Link to="/projects" className="project-detail-back">
        ← All Projects
      </Link>

      <h1>{project.title}</h1>

      <div className="project-detail-meta">
        <span className="project-card-badge">{project.category}</span>
        <span className="project-card-year">{project.year}</span>
      </div>

      <p className="lede lede-wide">{project.summary}</p>

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

      <div className="project-detail-tech-block">
        <p className="section-label">Tech Stack</p>
        <div className="project-card-tech">
          {project.tech.map((t) => (
            <span className="tech-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {project.github && (
        <div className="project-detail-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-detail-link"
          >
            View on GitHub →
          </a>
        </div>
      )}
    </article>
  );
}
