export default function Resume() {
  return (
    <div className="page">
      <div className="container">
        <p className="section-label">Resume</p>
        <h1 className="section-title">Curriculum Vitae</h1>
        <p
          style={{
            color: "var(--text-secondary)",
            fontFamily: '"Newsreader", serif',
            fontStyle: "italic",
            fontSize: "var(--text-lg)",
            marginBottom: "var(--space-2xl)",
            maxWidth: 560,
          }}
        >
          The most recent version of my CV — the same one I'm sending out
          right now.
        </p>

        <iframe
          src="/Md_Ashik_Uz_Zaman_Resume.pdf"
          className="resume-embed"
          title="Resume — Md. Ashik-Uz-Zaman"
        />

        <a
          href="/Md_Ashik_Uz_Zaman_Resume.pdf"
          download
          className="resume-download"
        >
          ↓ Download PDF
        </a>
      </div>
    </div>
  );
}