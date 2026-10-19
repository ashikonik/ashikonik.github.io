import { skills, interests } from "../data";

export default function Marquee() {
  const items = [
    ...skills["Programming Languages"].map((s) => ({ label: s, kind: "code" })),
    ...skills["Web & Frameworks"].map((s) => ({ label: s, kind: "code" })),
    ...skills["Database & Big Data"].map((s) => ({ label: s, kind: "code" })),
    ...skills["Tools & Platforms"].map((s) => ({ label: s, kind: "tool" })),
    ...interests.map((s) => ({ label: s, kind: "interest" })),
  ];
  // Duplicate for seamless loop
  const loop = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <p className="marquee-label">
        Stacks, tools, and a few obsessions ↓
      </p>
      <div className="marquee-track">
        {loop.map((it, i) => (
          <span
            key={`${it.label}-${i}`}
            className={`marquee-item${
              it.kind === "tool" || it.kind === "interest" ? " copper" : ""
            }`}
          >
            {it.label}
          </span>
        ))}
      </div>
    </div>
  );
}