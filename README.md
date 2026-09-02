# andrewhaines.me

Personal portfolio site. Vite + React, Framer Motion for entrance animation, GSAP ScrollTrigger for the pinned horizontal project rail, Lenis for smooth scroll. Deployed to GitHub Pages via GitHub Actions.

- `src/data/projects.js` — every project/skill card lives here; add an object to add a card
- `src/components/ProjectRail.jsx` — the pinned scroll-jacked horizontal section (desktop only; degrades to a plain scrollable row on narrow viewports and under `prefers-reduced-motion`)
- `src/lib/motion.js` — shared Framer Motion timing/easing variants
- `src/lib/smoothScroll.js` — Lenis setup, wired into GSAP's ticker

## Local dev

```bash
npm install
npm run dev
```

## Deploy

Push to `main` — `.github/workflows/deploy.yml` builds and deploys automatically. Repo's Pages settings need "Build and deployment source" set to **GitHub Actions** (Settings → Pages).
