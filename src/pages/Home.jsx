import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiGet } from "../api";
import Loading from "../components/Loading";

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [publications, setPubs] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState({});
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
    Promise.all([
      apiGet("/profile"),
      apiGet("/projects"),
      apiGet("/publications"),
      apiGet("/experience"),
      apiGet("/education"),
      apiGet("/skills"),
      apiGet("/activities"),
    ])
      .then(([p, proj, pubs, exp, edu, sk, act]) => {
        setProfile(p);
        setProjects(proj);
        setPubs(pubs);
        setExperience(exp);
        setEducation(edu);
        setSkills(sk);
        setActivities(act);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (!profile) return <div className="page container">Failed to load data.</div>;

  return (
    <div className="page">
      <div className="container">
        <section className="hero">
          <div className="hero-layout">
            <div className="hero-text">
              <p className="hero-greeting">Hello, I'm</p>
              <h1 className="hero-name">{profile.name}</h1>
              <p className="hero-tagline">{profile.bio}</p>
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
              </div>
            </div>
            {!photoError ? (
              <img
                src="/profile-photo.jpg"
                alt={profile.name}
                className="hero-photo"
                onError={() => setPhotoError(true)}
              />
            ) : (
              <div className="hero-monogram">
                <span>AZ</span>
              </div>
            )}
          </div>
        </section>

        <section className="section">
          <p className="section-label">Experience</p>
          <div className="section-divider" />
          <div className="timeline">
            {experience.map((item, i) => (
              <div className="timeline-item" key={i}>
                <p className="timeline-role">{item.role}</p>
                <p className="timeline-org">{item.org}</p>
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

        <section className="section">
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
        </section>

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

        <section className="section">
          <p className="section-label">Activities</p>
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
        </section>

        <section className="section">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Featured Work</h2>
          <div className="project-grid">
            {projects.map((project) => (
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
                  {project.tech.slice(0, 4).map((t) => (
                    <span className="tech-tag" key={t}>
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tech-tag">+{project.tech.length - 4}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="section-label">Publications</p>
          <h2 className="section-title">
            {publications.length} Papers Published &amp; Accepted
          </h2>
          <div className="pub-list">
            {publications.slice(0, 3).map((pub, i) => (
              <div className="pub-item" key={i}>
                <p className="pub-title">{pub.title}</p>
                <p className="pub-venue">{pub.venue}</p>
                <span
                  className={`pub-status ${pub.status.toLowerCase()}`}
                >
                  {pub.status}
                </span>
              </div>
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
