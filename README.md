# Portfolio — Md. Ashik-Uz-Zaman

Academic portfolio: research projects, publications, and software.

Live at **https://ashikonik.github.io**.

## Run Locally

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Deploy

Hosted on **GitHub Pages** at `https://ashikonik.github.io`.

Deploy is automatic via GitHub Actions — every `git push` to `main` builds and deploys.

## Structure

```
├── src/
│   ├── pages/   Home, Projects, ProjectDetail, Publications, Resume, Contact, NotFound
│   ├── components/  Nav, Footer, Loading, useFadeIn
│   ├── data.js  All portfolio content (ES module)
│   ├── api.js   Local data wrapper
│   └── App.jsx  Routes + lazy-loaded pages
├── public/      Profile photo, resume PDF, 404.html for SPA routing
├── index.html
└── vite.config.js
```

## Edit Content

All portfolio content lives in `src/data.js`. Edit projects, publications, experience, education, skills, activities, and profile info there.
