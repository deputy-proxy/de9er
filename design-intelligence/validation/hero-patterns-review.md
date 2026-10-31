# Initial hero collection review

Date: 2026-10-31

## Scope
Ten hero records and ten standalone HTML/CSS examples are included. The interactive product preview includes a small browser-native interaction; the form example prevents submission and displays an inline status.

## Source-level review
- [x] Each record describes one reusable principle.
- [x] Suitability and avoid-when conditions are documented.
- [x] Evidence, inference, and limitations are separated.
- [x] Reference links point to curated galleries or published design guidance.
- [x] Examples use original placeholder copy and locally generated visuals.
- [x] No frameworks, packages, remote assets, or build steps are required.
- [x] Semantic HTML and visible focus styling are present.
- [x] Responsive layout rules and reduced-motion handling are present.
- [ ] Browser testing at desktop, tablet, and mobile widths.
- [ ] Keyboard and assistive-technology checks.
- [ ] Contrast checks with final brand palettes.
- [ ] Console and network-error checks.

## Status
All ten patterns are marked `implemented`, not `validated`. Source inspection is not a substitute for browser testing. Complete the unchecked checks before changing lifecycle status.


## Advanced Three.js hero collection

Date: 2026-10-31

### Scope
Five additional hero records and five standalone demonstrations:
- Orbital particle field: instanced particle system on layered orbital paths.
- Kinetic type sculpture: reflective parametric torus-knot geometry and moving lights.
- Liquid topography field: custom GLSL vertex displacement and fragment contour treatment.
- Product prism stage: physical-material product object with orbiting capability panels.
- Spatial portal gateway: nested dimensional frames, moving particles, and camera dolly.

### Source-level implementation review
- [x] Each scene expresses a distinct composition principle.
- [x] Three.js is pinned to 0.187.0 through an import map.
- [x] No framework, package manager, bundler, or build step introduced.
- [x] HTML proposition and actions remain independent from the canvas.
- [x] Renderer pixel ratio is capped and canvas sizing follows its container.
- [x] Animation pauses when the tab is hidden or the stage is offscreen.
- [x] Reduced-motion preference produces a static frame.
- [x] Pointer movement is used only as subtle scene input.
- [x] CSS fallback artwork remains visible if WebGL initialization fails.
- [ ] Browser testing at desktop, tablet, and mobile widths.
- [ ] Verify CDN failure behavior and WebGL context loss/restoration on target browsers.
- [ ] Keyboard, screen-reader, contrast, and reduced-motion checks.
- [ ] GPU/memory profiling on representative low- and mid-range devices.

### Status
All five new patterns remain `implemented`, not `validated`. Their visual quality and performance must be checked in actual browsers and devices before publication status changes. Three.js demos require network access to load the pinned library from jsDelivr; their HTML content and CSS fallback remain available without it.
