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

  const publishedCount = publications.filter(
    (p) => p.status === "Published"
  ).length;
  const acceptedCount = publications.filter(
    (p) => p.status === "Accepted"
  ).length;

  return (
    <div className="page">
      <div className="container">
        <p className="section-label">Publications</p>
        <h1 className="section-title">
          {publications.length} Peer-Reviewed Papers
        </h1>
        <p className="section-subtitle">
          {publishedCount} Published · {acceptedCount} Accepted · 3 IEEE venues
          (DCOSS-IoT, ICCIT, QPAIN)
        </p>

        <div className="pub-list">
          {publications.map((pub, i) => (
            <div className="pub-item" key={i}>
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
                {pub.venue} · {pub.conference}
                {pub.date ? ` · ${pub.date}` : ""}
              </p>
              <span className={`pub-status ${pub.status.toLowerCase()}`}>
                {pub.status}
              </span>
              {pub.doi && (
                <p className="pub-doi">
                  DOI:{" "}
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pub.doi}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
