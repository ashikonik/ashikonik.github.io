import { useState, useEffect } from "react";
import { apiGet } from "../api";
import Loading from "../components/Loading";

export default function Publications() {
  const [pubs, setPubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGet("/publications")
      .then(setPubs)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="page">
      <div className="container">
        <p className="section-label">Publications</p>
        <h1 className="section-title">
          {pubs.length} Papers Published &amp; Accepted
        </h1>

        <div className="pub-list">
          {pubs.map((pub, i) => (
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
              <p className="pub-venue">{pub.venue}</p>
              <span
                className={`pub-status ${pub.status.toLowerCase()}`}
              >
                {pub.status}
              </span>
              {pub.doi && (
                <p className="pub-doi">
                  DOI:{" "}
                  <a
                    href={pub.link}
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
