import Reveal from "../components/Reveal";
import useDocumentTitle from "../components/useDocumentTitle";

export default function Resume() {
  useDocumentTitle("Resume");

  return (
    <>
      <Reveal>
        <p className="section-label">Resume</p>
        <h1 className="section-title">Curriculum Vitae</h1>
        <p className="lede">
          The most recent version of my CV; the same one I'm sending out right
          now.
        </p>
      </Reveal>

      <Reveal delay={120} className="resume-frame">
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
      </Reveal>
    </>
  );
}
