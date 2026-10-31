# Vanilla Static Template

A zero-build starter for static websites. Copy this directory into a new project.

- `index.html`: semantic page shell
- Tailwind CSS utilities compiled from the repository-level `src/tailwind.css` entry point
- `assets/js/main.js`: progressive-enhancement entry point

The starter uses the repository Tailwind CSS build. Run `npm ci && npm run build:css` from the repository root before previewing. No JavaScript framework is required. Add Alpine.js, GSAP, or Three.js only when needed; pin CDN versions and provide fallbacks. Replace all sample content and metadata, verify all actions, and deploy as a static site.
