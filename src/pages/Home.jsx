import { useState, useEffect, useRef } from "react";
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
import ProjectCard from "../components/ProjectCard";
import PubRow from "../components/PubRow";
import Reveal from "../components/Reveal";
import useDocumentTitle from "../components/useDocumentTitle";

const STAGGER = ["hero-greeting", "hero-name", "hero-signoff", "hero-tagline"];

// The three most recent papers, newest year first. Mirrors the order used on
// /publications so the preview and the full list agree.
const recentPublications = [...publications]
  .sort((a, b) => Number(b.date) - Number(a.date))
  .slice(0, 3);

export default function Home() {
  useDocumentTitle();
  const [photoError, setPhotoError] = useState(false);
  const heroRef = useRef(null);

  // Mark the hero as loaded on mount so the staggered rise transitions fire.
  // Skipped under prefers-reduced-motion (handled by the CSS @media block).
  useEffect(() => {
    const id =
      "requestAnimationFrame" in window
        ? requestAnimationFrame(() => heroRef.current?.classList.add("is-loaded"))
        : setTimeout(() => heroRef.current?.classList.add("is-loaded"), 0);
    return () => {
      if (typeof id === "number") {
        if ("requestAnimationFrame" in window) cancelAnimationFrame(id);
        else clearTimeout(id);
      }
    };
  }, []);

  const featured = projects.slice(0, 4);
  const researchProjects = projects.filter((p) => p.category === "research");

  return (
    <>
      {/* Hero — animates once on load, above the fold, so it does not use the
          IntersectionObserver reveal that the sections below it use. */}
      <section className="hero" ref={heroRef}>
        <div className="hero-layout">
          <div className="hero-text">
            <p className={`hero-greeting rise ${STAGGER[0]}`}>Hello there.</p>
            <h1 className={`hero-name rise ${STAGGER[1]}`}>{profile.name}</h1>
            <p className={`hero-signoff rise ${STAGGER[2]}`}>
              I'm a CS researcher and developer based in Dhaka. Currently{" "}
              <em>shipping one thing and reading three.</em>
            </p>
            <p className={`hero-tagline rise ${STAGGER[3]}`}>{profile.bio}</p>

            <div
              className="hero-now rise"
              style={{ "--rise-delay": "260ms" }}
              aria-label="What I'm up to right now"
            >
              <span>
                <strong>Now</strong> · Researching context-aware IoT transport
                · Open to research &amp; software collaborations
              </span>
            </div>

            <div className="hero-meta rise" style={{ "--rise-delay": "310ms" }}>
              <span>
                <strong>CGPA</strong> {profile.cgpa}
              </span>
              <span className="hero-meta-dot" />
              <span>{profile.expectedGraduation} · Expected</span>
              <span className="hero-meta-dot" />
              <span>{publications.length} IEEE conference papers</span>
            </div>

            <div className="hero-links rise" style={{ "--rise-delay": "360ms" }}>
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
              <Link to="/resume" className="hero-link hero-link-primary">
                View Résumé →
              </Link>
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
      </section>

      {/* Everything below the hero reveals on scroll. */}

      <Reveal as="section" className="section">
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
      </Reveal>

      <Reveal as="section" className="section">
        <p className="section-label">Education</p>
        <div className="section-divider" />
        <div className="edu-grid">
          {education.map((edu, i) => (
            <div className="edu-card" key={i}>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-credential">{edu.credential}</p>
              <p className="edu-score">{edu.score}</p>
              <p className="edu-period">{edu.period}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section">
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
      </Reveal>

      <Reveal as="section" className="section">
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
        <div className="interests-chips">
          {interests.map((i) => (
            <span className="tech-tag" key={i}>
              {i}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Featured Work</h2>
        <div className="project-grid">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} maxTags={4} />
          ))}
        </div>
        <p className="section-more">
          <Link to="/projects">
            View all {projects.length} projects ({researchProjects.length}{" "}
            research, {projects.length - researchProjects.length} software) →
          </Link>
        </p>
      </Reveal>

      <Reveal as="section" className="section">
        <p className="section-label">Publications</p>
        <h2 className="section-title">
          {publications.length} IEEE Conference Papers
        </h2>
        <p className="section-subtitle">
          All accepted and published across 3 IEEE venues (DCOSS-IoT, ICCIT,
          QPAIN)
        </p>
        <div className="pub-list">
          {recentPublications.map((pub, i) => (
            <PubRow pub={pub} key={i} compact />
          ))}
        </div>
        {publications.length > 3 && (
          <p className="section-more">
            <Link to="/publications">View all publications →</Link>
          </p>
        )}
      </Reveal>
    </>
  );
}