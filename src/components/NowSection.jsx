import { profile, projects } from "../data";

export default function NowSection() {
  const nextUp = projects.find((p) => p.slug === "iov-simulation-dhaka");
  return (
    <section className="section now">
      <p className="section-label">Right now</p>
      <h2 className="section-title">A short note from the workbench</h2>
      <div className="now-grid">
        <div className="now-card">
          <p className="now-card-label">Researching</p>
          <p className="now-card-body">
            <strong>Context-aware IoT transport.</strong> Working out how edge
            inference can decide which messages actually deserve a retransmit.
            Submitted to <em>{profile.supervisor.split(",")[0]}'s</em> reading
            group this week.
          </p>
        </div>
        <div className="now-card">
          <p className="now-card-label">Building</p>
          <p className="now-card-body">
            <strong>{nextUp ? nextUp.title : "a side project"}.</strong>{" "}
            Validating the Dhaka OSM map inside the ONE Simulator so my research
            group can stop re-doing map-prep every semester.
          </p>
        </div>
        <div className="now-card">
          <p className="now-card-label">Reading</p>
          <p className="now-card-body">
            <strong>Network protocols, mostly.</strong> DTN routing, IoT
            application-layer transports, and the occasional paper on RAG
            retrieval so <em>LapWise</em> doesn't embarrass me next demo day.
          </p>
        </div>
        <div className="now-card">
          <p className="now-card-label">Open to</p>
          <p className="now-card-body">
            <strong>Research and software collaborations.</strong> If you're
            working on IoT, RAG, or full-stack work that ships to real people —
            I'd love to hear about it.
          </p>
        </div>
      </div>
    </section>
  );
}