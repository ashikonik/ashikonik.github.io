import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  profile,
  projects,
  publications,
  education,
  experience,
  skills,
  activities,
  interests,
} from "../data";
import Loading from "../components/Loading";
import Marquee from "../components/Marquee";
import NowSection from "../components/NowSection";

export default function Home() {
  const [photoError, setPhotoError] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHydrated(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!hydrated) return <Loading />;

  const featured = projects.slice(0, 4);
  const researchProjects = projects.filter((p) => p.category === "research");

  return (
    <div className="page">
      <div className="container">
        {/* Hero */}
        <section className="hero">
          <div className="hero-layout">
            <div className="hero-text">
              <p className="hero-greeting">Hello there.</p>
              <h1 className="hero-name">{profile.name}</h1>
              <p className="hero-signoff">
                I'm a CS researcher and developer based in Dhaka — currently{" "}
                <em>shipping one thing and reading three.</em>
              </p>
              <p className="hero-tagline">{profile.bio}</p>

              <div
                className="hero-now"
                aria-label="What I'm up to right now"
              >
                <span>
                  <strong>Now</strong> · Researching context-aware IoT transport
                  · Open to research & software collaborations
                </span>
              </div>

              <div className="hero-meta">
                <span>
                  <strong>CGPA</strong> {profile.cgpa}
                </span>
                <span className="hero-meta-dot" />
                <span>{profile.expectedGraduation} · Expected</span>
                <span className="hero-meta-dot" />
                <span>{publications.length} IEEE conference papers</span>
              </div>
              <div className="hero-links">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-link"
                >
                  GitHub
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-link"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.links.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-link"
                >
                  Google Scholar
                </a>
                <a
                  href={profile.links.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-link"
                >
                  ORCID
                </a>
                <a href="/resume" className="hero-link hero-link-primary">
                  View Résumé →
                </a>
              </div>
            </div>
            {!photoError ? (
              <div className="hero-photo-wrap">
                <img
                  src="/profile-photo.jpg"
                  alt={profile.name}
                  className="hero-photo"
                  onError={() => setPhotoError(true)}
                />
              </div>
            ) : (
              <div className="hero-monogram">
                <span>{profile.initials}</span>
              </div>
            )}
          </div>

          <Marquee />
        </section>

        {/* Now */}
        <NowSection />

        {/* Experience */}
        <section className="section">
          <p className="section-label">Experience</p>
          <div className="section-divider" />
          <div className="timeline">
            {experience.map((item, i) => (
              <div className="timeline-item" key={i}>
                <p className="timeline-role">{item.role}</p>
                <p className="timeline-org">
                  {item.org}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
                <p className="timeline-period">{item.period}</p>
                <ul className="timeline-bullets">
                  {item.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="section">
          <p className="section-label">Education</p>
          <div className="section-divider" />
          <div className="edu-grid">
            {education.map((edu, i) => (
              <div className="edu-card" key={i}>
                <p className="edu-institution">{edu.institution}</p>
                <p className="edu-credential">{edu.credential}</p>
                <p className="edu-score">
                  {edu.score}
                </p>
                <p className="edu-period">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="section">
          <p className="section-label">Skills</p>
          <div className="section-divider" />
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-group" key={category}>
                <p className="skill-group-title">{category}</p>
                <div className="skill-tags">
                  {items.map((item) => (
                    <span className="skill-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section className="section">
          <p className="section-label">Activities &amp; Interests</p>
          <div className="section-divider" />
          <div className="timeline">
            {activities.map((item, i) => (
              <div className="timeline-item" key={i}>
                <p className="timeline-role">
                  {item.role} — {item.org}
                </p>
                <p className="timeline-period">{item.period}</p>
                <ul className="timeline-bullets">
                  {item.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="interests-chips" style={{ marginTop: "var(--space-xl)" }}>
            {interests.map((i) => (
              <span className="tech-tag" key={i}>
                {i}
              </span>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="section">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Featured Work</h2>
          <div className="project-grid">
            {featured.map((project) => (
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
                  {project.tech.slice(0, 4).map((t) => (
                    <span className="tech-tag" key={t}>
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tech-tag">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: "var(--space-xl)" }}>
            <Link to="/projects">
              View all {projects.length} projects ({researchProjects.length}{" "}
              research, {projects.length - researchProjects.length} software) →
            </Link>
          </p>
        </section>

        {/* Publications preview */}
        <section className="section">
          <p className="section-label">Publications</p>
          <h2 className="section-title">
            {publications.length} IEEE Conference Papers
          </h2>
          <p className="section-subtitle">
            All accepted and published across 3 IEEE venues (DCOSS-IoT, ICCIT,
            QPAIN)
          </p>
          <div className="pub-list">
            {publications.slice(0, 3).map((pub, i) => (
              <PubRow pub={pub} key={i} compact />
            ))}
          </div>
          {publications.length > 3 && (
            <p style={{ marginTop: "var(--space-lg)" }}>
              <Link to="/publications">View all publications →</Link>
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

function PubRow({ pub, compact }) {
  const venueCode =
    pub.conference?.includes("DCOSS") ? "DCOSS-IoT" :
    pub.conference?.includes("ICCIT") ? "ICCIT" :
    pub.conference?.includes("QPAIN") ? "QPAIN" : "IEEE";
  return (
    <article className="pub-item">
      <div className="pub-rail">
        <div className="pub-year">{pub.date}</div>
        <span className="pub-venue-chip">{venueCode}</span>
      </div>
      <div>
        <p className="pub-title">
          {pub.link ? (
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              {pub.title}
            </a>
          ) : (
            pub.title
          )}
        </p>
        <p className="pub-venue">
          {compact ? pub.conference.replace(/^\d+\w+\s+/, "") : pub.conference}
        </p>
      </div>
      <div className="pub-actions">
        {pub.link && (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="pub-action-link"
          >
            ↗ Read
          </a>
        )}
        {!compact && pub.doi && (
          <span className="pub-doi">DOI: {pub.doi}</span>
        )}
      </div>
    </article>
  );
}
