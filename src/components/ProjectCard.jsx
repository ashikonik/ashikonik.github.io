import { Link } from "react-router-dom";

/**
 * One project card, used by both the Home "Featured Work" section (4 tags) and
 * the Projects grid (5 tags). The accent colour is applied in CSS off the
 * category class, so the research/software split lives in one place.
 */
export default function ProjectCard({ project, maxTags = 5 }) {
  const shown = project.tech.slice(0, maxTags);
  const overflow = project.tech.length - maxTags;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`project-card ${project.category}`}
    >
      <span className="project-card-arrow" aria-hidden="true">
        ↗
      </span>
      <div className="project-card-meta">
        <span className="project-card-badge">{project.category}</span>
        <span className="project-card-year">{project.year}</span>
      </div>
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-summary">{project.summary}</p>
      <div className="project-card-tech">
        {shown.map((t) => (
          <span className="tech-tag" key={t}>
            {t}
          </span>
        ))}
        {overflow > 0 && <span className="tech-tag">+{overflow}</span>}
      </div>
    </Link>
  );
}