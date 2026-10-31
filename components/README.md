# Component Patterns

Store framework-free component specifications and examples here: navigation, heroes, content sections, feature explanations, testimonials/case studies, pricing, forms/CTAs, and footers.

Components should be semantic HTML with Tailwind CSS utility classes and optional Vanilla JavaScript. Use the repository Tailwind build (`src/tailwind.css`) and keep component-specific CSS only for bespoke artwork, complex visual effects, or behavior that utilities cannot express cleanly. Alpine.js is acceptable for a small reactive behavior when justified. Do not introduce React or another component framework.

Document variants and accessibility behavior. Avoid a giant catalog that makes every site look identical.

## Hero components

- [Traffic light painting hero](./traffic-light-painting-hero.html) — full-bleed Three.js night city with interactive shutter-speed controls. Requires [component CSS](./traffic-light-painting-hero.css), [component JavaScript](./traffic-light-painting-hero.js), and the pinned Three.js import map documented in the [pattern record](../design-intelligence/patterns/heroes/traffic-light-painting-hero.md).

## Implemented interaction reference

- [Team profile carousel](../design-intelligence/patterns/about/team-profile-carousel.md) — one active team profile with a selectable member list, position controls, responsive layout and optional timed progression. [Open the standalone demo](../design-intelligence/examples/team-profile-carousel/index.html).
