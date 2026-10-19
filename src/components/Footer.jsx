export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <span className="footer-copy">
              © {new Date().getFullYear()} Md. Ashik-Uz-Zaman · Built in
              Dhaka, served from a static site
            </span>
            <span className="footer-mark">— cheers, Ashik</span>
          </div>
          <div className="footer-links">
            <a href="https://github.com/ashikonik" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/ashikonik" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://scholar.google.com/citations?user=6up31n8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              Scholar
            </a>
            <a href="https://orcid.org/0009-0008-1047-4361" target="_blank" rel="noopener noreferrer">
              ORCID
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}