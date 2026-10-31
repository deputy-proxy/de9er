# Skill: Author and implement a design pattern

## Goal
Turn an approved candidate into a complete, tested, independent pattern record and runnable demonstration.

## Inputs
- candidate record
- approval to author/publish, or explicit task scope
- existing pattern library and example template

## Procedure
1. Validate the candidate against `../schema/pattern.schema.yaml`.
2. Check for duplicates and choose the existing stable ID if extending a known pattern.
3. Refine the principle, suitability, structure, variants, and avoid-when conditions. Preserve evidence/inference boundaries.
4. Write the pattern record. Set lifecycle status to `authored`.
5. Create a runnable example from `../../templates/pattern-demo/`. Use original placeholder copy and neutral/replaceable assets. Do not copy the source website.
6. Implement semantic HTML and CSS first. Use browser-native JavaScript only when needed.
7. Add Alpine.js only for small declarative reactive behavior; GSAP only for purposeful timelines; Three.js only for a genuinely 3D/WebGL requirement. Document why any dependency is justified.
8. Ensure responsive behavior, keyboard support, visible focus, semantic landmarks, reduced-motion support, and graceful behavior without optional JavaScript.
9. Test at desktop, tablet, and mobile widths. Check console errors, overflow, focus order, and reduced motion.
10. Complete `../../validation/checklist.md`. Record actual test results and remaining limitations.
11. Set lifecycle status to `validated` only when the checklist passes. Set `published` only after review and merge into the main library.

## Deliverables
- `patterns/{category}/{pattern-id}.md`
- `examples/{pattern-id}/index.html`
- `examples/{pattern-id}/assets/css/styles.css`
- `examples/{pattern-id}/assets/js/main.js` when interaction is required
- validation notes

## Implementation rules
- Vanilla-first, zero-build by default.
- No React, Vue, Svelte, Angular, jQuery, or other frontend frameworks.
- No unnecessary dependencies, package manager, or bundler.
- Avoid external network dependencies in the default example.
- Do not invent source facts, exact breakpoints, or measured values.
- A beautiful screenshot is not validation; the page must work at narrow widths and with keyboard input.
