import { Link } from "react-router-dom";
import useDocumentTitle from "../components/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Not found");
  return (
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
  );
}
