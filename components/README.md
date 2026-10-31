# Component Patterns

Store framework-free component specifications and examples here: navigation, heroes, content sections, feature explanations, testimonials/case studies, pricing, forms/CTAs, and footers.

Components should be semantic HTML with Tailwind CSS utility classes and optional Vanilla JavaScript. Use the repository Tailwind build (`src/tailwind.css`) and keep component-specific CSS only for bespoke artwork, complex visual effects, or behavior that utilities cannot express cleanly. Alpine.js is acceptable for a small reactive behavior when justified. Do not introduce React or another component framework.

Document variants and accessibility behavior. Avoid a giant catalog that makes every site look identical.

## Implemented interaction reference

- [Team profile carousel](../design-intelligence/patterns/about/team-profile-carousel.md) — one active team profile with a selectable member list, position controls, responsive layout and optional timed progression. [Open the standalone demo](../design-intelligence/examples/team-profile-carousel/index.html).
