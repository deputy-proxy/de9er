# Motion and Animation

Prefer CSS transitions and browser-native animation for simple state changes. Use GSAP when sequencing, scroll-linked motion, timelines, or cross-element choreography materially improves the experience.

- Motion must communicate hierarchy, state, continuity, or brand character.
- Respect `prefers-reduced-motion: reduce`.
- Avoid scroll hijacking, forced delays, excessive parallax, and motion that blocks reading.
- Animate transform and opacity where possible.
- Ensure content remains usable if animation libraries fail.
- Do not animate every element on entrance.
- Pin stable GSAP versions, scope selectors, and clean up listeners/timelines when appropriate.
