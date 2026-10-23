# Mathew Adeyemi — Portfolio

Full-Stack Software Engineer portfolio. React 19 + Vite + Tailwind CSS v4 + Framer Motion. No backend — the contact form uses EmailJS.

## Setup

```bash
npm install
cp .env.example .env   # then fill in your real EmailJS keys
npm run dev
```

## Before this goes live — asset checklist

Nothing below was invented; these are placeholders you need to fill in with real files/links.

- [ ] **Profile photo** → `src/assets/images/profile/profile-photo.jpg` (used in Hero + About)
- [ ] **Company logos** → `src/assets/images/companies/` (`td4pai-logo.png`, `elevate-solution-logo.png`, `splantom-logo.png`, `torbita-logo.png`)
- [ ] **Project screenshots** → `src/assets/images/projects/{slug}/cover.png`, plus optional `gallery/` images for the Swiper on each case study
- [ ] **Resume PDF** → `src/assets/resume/Mathew_Adeyemi_Resume.pdf` (drop your latest export in here — the filename is already wired into the Navbar, Footer, and Home CTAs)
- [ ] **GitHub URL** — used as a placeholder (`https://github.com/`) in Navbar/Footer/Contact/Home; swap in your real profile
- [ ] **petrolapp Google Play link** — `data/experience.js` and `data/projects.js` (`petrolapp` entry)
- [ ] **EmailJS credentials** — `.env` (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`)
- [ ] **Favicon** — `public/favicon.svg` referenced from `index.html`
- [ ] Any `[ADD ...]` placeholder text inside `src/data/*.js` — problem/solution copy, engineering-challenge approaches, and case-study details that only you can fill in accurately

## Project structure

```
src/
├── assets/            profile photo, company logos, project screenshots, resume
├── components/        shared UI (Navbar, Footer, cards, badges, diagrams, Seo)
│   └── ui/             Button, Badge, SectionTitle
├── pages/              one file per route
├── data/               experience.js, projects.js, skills.js, articles.js, companies.js
├── App.jsx             routes + layout shell
├── index.css           Tailwind import, fonts, design tokens, global styles
└── main.jsx            entry point
```

## Editing content

You will not need to touch components to update copy — everything content-related lives in `src/data/`:

- **New project** → add an entry to `projects.js`, drop a `cover.png` into `assets/images/projects/<slug>/`
- **New job** → add an entry to `experience.js`
- **New article** → add an entry to `articles.js`, set `published: true` and a real `date` once it's ready
- **Skills** → edit the category arrays in `skills.js` directly

## Notes on scope

- No Next.js, no backend, no database — this is a static Vite/React app by design.
- SEO is handled client-side via the `<Seo />` component (per-page `document.title` + meta description), not a Next.js head API.
- Contact form has no server: EmailJS sends directly from the browser using your public key, which is safe to expose client-side per EmailJS's own design.
