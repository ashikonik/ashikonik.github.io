import { useState, useEffect } from "react";
import { profile } from "../data";
import Loading from "../components/Loading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const t = setTimeout(() => setStatus("ready"), 0);
    return () => clearTimeout(t);
  }, []);

  if (status === "idle") return <Loading />;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "36de9682-fd47-44c0-b621-b421795fa542",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: ${formData.name}`,
        }),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contacts = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: "✉",
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      icon: "☎",
    },
    {
      label: "GitHub",
      value: "github.com/ashikonik",
      href: profile.links.github,
      icon: "⌨",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ashikonik",
      href: profile.links.linkedin,
      icon: "🔗",
    },
    {
      label: "Google Scholar",
      value: "Scholar Profile",
      href: profile.links.googleScholar,
      icon: "📚",
    },
    {
      label: "ORCID",
      value: "0009-0008-1047-4361",
      href: profile.links.orcid,
      icon: "🆔",
    },
  ];

  return (
    <div className="page">
      <div className="container">
        <p className="section-label">Contact</p>
        <h1 className="section-title">Get in Touch</h1>
        <p
          style={{
            color: "var(--text-secondary)",
            maxWidth: 560,
            lineHeight: 1.7,
            marginBottom: "var(--space-2xl)",
            fontFamily: '"Newsreader", serif',
            fontStyle: "italic",
            fontSize: "var(--text-lg)",
          }}
        >
          The fastest way to reach me is the form below — but if you're working
          on something specific, a direct message on LinkedIn or email usually
          goes faster.
        </p>

        <section className="contact-form-section">
          {status === "sent" ? (
            <div className="form-success">
              <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
                Message sent! I'll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("ready")}
                className="form-reset-btn"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={
                  status === "sending" ||
                  !formData.name ||
                  !formData.email ||
                  !formData.message
                }
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && (
                <p className="form-error">
                  Something went wrong. Try emailing me directly instead.
                </p>
              )}
            </form>
          )}
        </section>

        <div style={{ marginTop: "var(--space-3xl)" }}>
          <p
            className="section-label"
            style={{ marginBottom: "var(--space-md)" }}
          >
            Or reach me directly
          </p>
          <div className="contact-grid">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={
                  c.href.startsWith("mailto:") || c.href.startsWith("tel:")
                    ? undefined
                    : "_blank"
                }
                rel="noopener noreferrer"
                className="contact-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="contact-icon">
                  <span style={{ fontSize: "1.1rem" }}>{c.icon}</span>
                </div>
                <div>
                  <p className="contact-label">{c.label}</p>
                  <p className="contact-value">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "var(--space-3xl)" }}>
          <p className="section-label">Location</p>
          <p
            style={{
              color: "var(--text-secondary)",
              marginTop: "var(--space-sm)",
            }}
          >
            {profile.location}
          </p>
        </div>
      </div>
    </div>
  );
}
