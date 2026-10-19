import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <div className="container">
        <div className="not-found">
          <h1>404</h1>
          <p>This page wandered off like a node out of radio range.</p>
          <p className="not-found-note">
            Try the home page, or ping me — I'll send you a working link.
          </p>
          <Link to="/" className="hero-link hero-link-primary">
            ← Back home
          </Link>
        </div>
      </div>
    </div>
  );
}