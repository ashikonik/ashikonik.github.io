import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page container">
      <div className="not-found">
        <h1>404</h1>
        <p>This page doesn't exist.</p>
        <Link to="/">← Back to home</Link>
      </div>
    </div>
  );
}
