import { useState, useEffect } from "react";
import { publications } from "../data";
import Loading from "../components/Loading";

export default function Publications() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHydrated(true), 0);
    return () => clearTimeout(t);
  }, []);
  if (!hydrated) return <Loading />;

  const venueCode = (conf) =>
    conf?.includes("DCOSS") ? "DCOSS-IoT"
    : conf?.includes("ICCIT") ? "ICCIT"
    : conf?.includes("QPAIN") ? "QPAIN"
    : "IEEE";

  return (
    <div className="page">
      <div className="container">
        <p className="section-label">Publications</p>
        <h1 className="section-title">
          {publications.length} IEEE Conference Papers
        </h1>
        <p className="section-subtitle">
          All accepted and published across 3 IEEE venues (DCOSS-IoT, ICCIT,
          QPAIN)
        </p>

        <div className="pub-list">
          {publications.map((pub, i) => (
            <article className="pub-item" key={i}>
              <div className="pub-rail">
                <div className="pub-year">{pub.date}</div>
                <span className="pub-venue-chip">{venueCode(pub.conference)}</span>
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
                <p className="pub-venue">{pub.conference}</p>
              </div>
              <div className="pub-actions">
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-action-link"
                  >
                    ↗ Read on IEEE
                  </a>
                )}
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-doi"
                  >
                    DOI: {pub.doi}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}