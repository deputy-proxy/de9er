# Initial hero collection review

Date: 2026-10-31

## Scope
Ten original HTML/CSS hero records and five advanced Three.js hero records are included.

## Source-level implementation review
- [x] Each record describes a reusable principle.
- [x] Suitability and avoid-when conditions are documented.
- [x] Evidence, inference and limitations are separated.
- [x] Reference links point to curated galleries or published design guidance.
- [x] Examples use original placeholder copy and locally generated visuals.
- [x] Semantic HTML, responsive rules and reduced-motion handling are present in source.
- [ ] Browser testing at desktop, tablet and mobile widths.
- [ ] Keyboard and assistive-technology checks.
- [ ] Contrast checks with final brand palettes.
- [ ] Console and network-error checks.

## Advanced Three.js hero collection

### Scope
Five standalone demonstrations:
- Orbital particle field: instanced particle system on layered orbital paths.
- Kinetic type sculpture: reflective parametric torus-knot geometry and moving lights.
- Liquid topography field: custom GLSL vertex displacement and fragment contour treatment.
- Product prism stage: physical-material product object with orbiting capability panels.
- Spatial portal gateway: nested dimensional frames, moving particles and camera dolly.

### Technical review
- [x] Three.js is pinned to 0.187.0 through an import map.
- [x] No framework, package manager, bundler or build step introduced.
- [x] HTML proposition and actions remain independent from canvas.
- [x] Renderer pixel ratio is capped and canvas sizing follows its container.
- [x] Animation pauses when tab is hidden or stage is offscreen.
- [x] Reduced-motion preference produces a static frame.
- [x] CSS fallback artwork remains if WebGL initialization fails.
- [ ] Browser testing, context loss/restoration and CDN failure behavior.
- [ ] Keyboard, screen-reader, contrast and reduced-motion checks.
- [ ] GPU/memory profiling on representative low- and mid-range devices.

### Visual-quality reassessment
**Verdict: revise / do not use as showcase-quality reference work.**

The five demos demonstrate basic Three.js implementation patterns, but they do not yet meet the stronger creative standard established in the WebGL skills. The visual concepts rely too heavily on familiar procedural primitives, particle systems, orbiting elements and generic motion. They lack sufficiently authored art direction, distinctive material/lighting treatment, cinematic framing, and meaningful interaction. Technical implementation is not a substitute for those qualities.

These demos should remain examples of implementation scaffolding only, not exemplars of premium creative direction. Rebuild or substantially redesign them after preparing a specific art-direction brief and reference board for each. Do not mark them validated or use them as the quality benchmark for future work.

## Lifecycle status
All fifteen patterns remain implemented, not validated. The five Three.js demos specifically fail the current visual-quality gate and require redesign before publication as high-quality examples. A source-level review is not a browser or visual validation.

## Motion-led hero additions (2026-10-31)

Five further heroes were added with GSAP 3.13.0 and, for four of them, Three.js 0.187.0: `gsap-curtain-reveal`, `glass-refraction-orb`, `aurora-shader-veil`, `particle-morph-sequence`, `ribbon-helix-flow`. Each has a specific art direction (scroll-driven frame expansion; refractive material over a light-line field; fragment-shader atmosphere; GPU shape morphing; iridescent silk on a paper canvas) rather than a generic primitive.

Checks performed, all in headless Chromium with software WebGL against pinned local copies of the libraries: visual inspection of desktop, tablet, and phone widths; no console errors or uncaught exceptions; no horizontal overflow; reduced-motion rendering; headline visibility with the CDN blocked; and exercise of each interactive control. Two defects found and fixed during this pass are recorded in the pattern notes (computed clip-path shorthand misaligning a GSAP tween; a removed Three.js iridescence property).

Not performed: real-device testing, frame-rate and thermal measurement, screen-reader testing, and measured contrast over every animation frame. These patterns remain `implemented`, not `validated`, and software rendering is not evidence of real-GPU performance.
