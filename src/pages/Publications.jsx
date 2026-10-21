import { publications } from "../data";
import PubRow from "../components/PubRow";
import Reveal from "../components/Reveal";
import useDocumentTitle from "../components/useDocumentTitle";

// Newest first by year. Ties (same year) keep their authored order in data.js
// (Array#sort is stable), which groups each year's venues together.
const sorted = [...publications].sort((a, b) => Number(b.date) - Number(a.date));

export default function Publications() {
  useDocumentTitle("Publications");

  return (
    <>
      <Reveal>
        <p className="section-label">Publications</p>
        <h1 className="section-title">
          {publications.length} IEEE Conference Papers
        </h1>
        <p className="section-subtitle">
          All accepted and published across 3 IEEE venues (DCOSS-IoT, ICCIT,
          QPAIN)
        </p>
      </Reveal>

      <Reveal delay={120} className="pub-list-wrap">
        {sorted.map((pub, i) => (
          <PubRow pub={pub} key={i} />
        ))}
      </Reveal>
    </>
  );
}
