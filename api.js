import {
  profile,
  projects,
  publications,
  education,
  experience,
  skills,
  activities,
} from "./data";

const dataMap = {
  "/profile": profile,
  "/projects": projects,
  "/publications": publications,
  "/education": education,
  "/experience": experience,
  "/skills": skills,
  "/activities": activities,
};

export async function apiGet(path) {
  if (path.startsWith("/projects/") && path !== "/projects") {
    const slug = path.split("/projects/")[1];
    const project = projects.find((p) => p.slug === slug);
    if (!project) throw new Error("Project not found");
    return project;
  }

  if (path.startsWith("/projects?category=")) {
    const category = path.split("category=")[1].toLowerCase();
    return projects.filter((p) => p.category === category);
  }

  const data = dataMap[path];
  if (!data) throw new Error(`Unknown path: ${path}`);
  return data;
}
