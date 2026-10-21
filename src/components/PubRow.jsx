/**
 * One publication row, used on both the Publications page and the Home preview.
 * Differences captured as props:
 *  - `compact`: strips the leading year prefix from the conference string
 *    ("2026 5th International ..." -> "5th International ...").
 *  - `compact` also hides the explicit DOI block — the Publications page is
 *    the recruiter-facing one, the DOI link belongs there.
 */
export default function PubRow({ pub, compact = false }) {
  const venueCode = pub.conference?.includes("DCOSS")
    ? "DCOSS-IoT"
    : pub.conference?.includes("ICCIT")
      ? "ICCIT"
      : pub.conference?.includes("QPAIN")
        ? "QPAIN"
        : "IEEE";

  const conferenceLabel = compact
    ? pub.conference.replace(/^\d+\w+\s+/, "")
    : pub.conference;

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
            >
              {pub.title}
            </a>
          ) : (
            pub.title
          )}
        </p>
        <p className="pub-venue">{conferenceLabel}</p>
      </div>
      <div className="pub-actions">
        {pub.link && (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="pub-action-link"
          >
            ↗ {compact ? "Read" : "Read on IEEE"}
          </a>
        )}
        {!compact && pub.doi && (
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
  );
}