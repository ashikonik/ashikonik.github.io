import { useState } from "react";
import { profile } from "../data";
import Reveal from "../components/Reveal";
import useDocumentTitle from "../components/useDocumentTitle";

// Web3Forms access key is public-by-design (it must ship in the client bundle).
const WEB3FORMS_KEY = "36de9682-fd47-44c0-b621-b421795fa542";

const CONTACTS = [
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

export default function Contact() {
  useDocumentTitle("Contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("ready");

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
          access_key: WEB3FORMS_KEY,
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

  const isEmpty = !formData.name || !formData.email || !formData.message;

  return (
    <>
      <p className="section-label">Contact</p>
      <h1 className="section-title">Get in Touch</h1>
      <p className="lede">
        The fastest way to reach me is the form below. If you're working on
        something specific, a direct message on LinkedIn or email usually goes
        faster.
      </p>

      <Reveal as="section" className="contact-form-section">
        {status === "sent" ? (
          <div className="form-success">
            <p className="form-success-title">
              Message sent. I'll get back to you soon.
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
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-group">
              <label htmlFor="contact-name">Your name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Your email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" disabled={status === "sending" || isEmpty}>
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "error" && (
              <p className="form-error" role="alert">
                Something went wrong sending that. Try emailing me directly
                instead.
              </p>
            )}
          </form>
        )}
      </Reveal>

      <Reveal as="div" className="contact-direct" delay={120}>
        <p className="section-label">Or reach me directly</p>
        <div className="contact-grid">
          {CONTACTS.map((c) => (
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
            >
              <span className="contact-icon" aria-hidden="true">
                {c.icon}
              </span>
              <span className="contact-body">
                <span className="contact-label">{c.label}</span>
                <span className="contact-value">{c.value}</span>
              </span>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal as="div" className="contact-location" delay={180}>
        <p className="section-label">Location</p>
        <p>{profile.location}</p>
      </Reveal>
    </>
  );
}