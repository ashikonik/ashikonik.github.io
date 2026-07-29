export default function Resume() {
  return (
    <div className="page">
      <div className="container">
        <p className="section-label">Resume</p>
        <h1 className="section-title">Curriculum Vitae</h1>

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
