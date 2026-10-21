import { useSearchParams } from "react-router-dom";
import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import useDocumentTitle from "../components/useDocumentTitle";

const CATEGORIES = ["all", "research", "software"];

export default function Projects() {
  useDocumentTitle("Projects");

  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("category") || "all";

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const setFilter = (cat) => {
    if (cat === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const counts = {
    all: projects.length,
    research: projects.filter((p) => p.category === "research").length,
    software: projects.filter((p) => p.category === "software").length,
  };

  return (
    <>
      <Reveal>
        <p className="section-label">Projects</p>
        <h1 className="section-title">All Projects</h1>
        <p className="section-subtitle">
          {projects.length} total · {counts.research} research,{" "}
          {counts.software} software
        </p>

        <div className="filter-bar" role="group" aria-label="Filter projects">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn${activeFilter === cat ? " active" : ""}`}
              aria-pressed={activeFilter === cat}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}{" "}
              <span className="filter-count">({counts[cat]})</span>
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="project-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} maxTags={5} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="empty-state">No projects in this category.</p>
        )}
      </Reveal>
    </>
  );
}
