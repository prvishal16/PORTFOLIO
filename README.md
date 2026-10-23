# Vishal — Full-Stack Developer Portfolio

A React + Vite + Tailwind CSS portfolio for Peddanolla Ragichettukindi Vishal, featuring:

- Cinematic name-reveal preloader
- Looping intro video hero with rotating role titles + an ambient Three.js particle layer
- About, Skills (icon grid), Experience timeline, Projects, and Contact sections
- A 3D-style flip-book modal that opens from "Download Resume" — browse the resume page by page, or download the original PDF
- A floating AI assistant widget that answers questions about the portfolio (skills, experience, projects, contact)

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. `vercel.json` is already included with a SPA rewrite rule, so direct links won't 404.

## Editing content

Almost everything (name, roles, bio, skills, experience, projects, education, certifications, and the AI assistant's knowledge base) lives in one place:

```
src/data/portfolio.js
```

Update that file and every section + the assistant updates automatically.

## Replacing the resume PDF

Swap the file at `public/resume/P_R_Vishal_Resume.pdf` with an updated PDF of the same name (or change the filename and update `resumeFile` in `src/data/portfolio.js`).
