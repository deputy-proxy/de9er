# Aurora shader veil

```yaml
schema_version: "1.0"
id: aurora-shader-veil
name: "Aurora shader veil"
category: heroes
summary: >
  A full-bleed fragment-shader aurora forms the atmosphere of the first screen, with GSAP-driven word reveals and palette transitions.
principle: >
  Use atmosphere as the interface. When brand feeling matters more than a literal product, a calm, large-scale light field sets mood while the typography stays the dominant information.
characteristics:
  composition: layered
  density: sparse
  typography: display-led
  imagery: full-bleed
  geometry: soft
  motion: expressive
  alignment: left
suitability:
  audiences:
    - "Lifestyle, wellness, travel, and creative brands"
    - "Audiences who respond to mood"
  contexts:
    - "Brand campaigns"
    - "Experience and event pages"
  objectives:
    - "Set an emotional tone immediately"
    - "Offer a simple mood choice"
  good_when:
    - "Mood is the proposition"
    - "The headline is short and large"
    - "A CSS gradient fallback is acceptable if WebGL fails"
  avoid_when:
    - "The page must show a specific product or interface above the fold"
    - "Dense copy would sit over the brightest part of the field"
structure:
  regions:
    - "Overlay navigation"
    - "Full-bleed canvas"
    - "Scrim for legibility"
    - "Copy block and actions"
    - "Atmosphere selector with status"
  content_slots:
    - "Mood cue"
    - "Short headline"
    - "Explanation"
    - "Primary action"
    - "Atmosphere selector"
  spatial_relationships:
    - "The canvas fills the hero and sits beneath a directional scrim"
    - "Copy occupies the left, where the scrim is strongest"
    - "The selector anchors the base of the hero"
variants:
  - "A single fixed palette with scroll-driven intensity"
  - "A horizon-line variant with mountains"
  - "Pointer-driven curtain lift"
implementation:
  semantic_html: "Use native radio inputs for atmospheres. Give the h1 an aria-label that reads as one sentence when words are split into spans."
  css_approach: "Provide a CSS radial-gradient fallback beneath the canvas and a left-to-right scrim above it."
  javascript: "Render a single full-screen triangle-quad with a ShaderMaterial. Use fBm noise for curtains and a jittered-cell star field with a sine-based hash to avoid lattice artefacts. Tween colour uniforms and intensity with GSAP; smooth pointer input with quickTo."
  optional_dependencies:
    - "Three.js 0.187.0 via an import map."
    - "GSAP 3.13.0 for text, intensity, and palette motion."
  performance_notes:
    - "Cap pixel ratio at 1.25 on desktop and 1 on narrow screens."
    - "The shader runs three layered curtains; reduce the loop count on weak devices."
    - "Pause when hidden or offscreen."
responsive:
  desktop: "Copy at left over the strongest scrim; aurora fills the frame."
  tablet: "Bottom-align copy and strengthen the vertical scrim."
  mobile: "Render at pixel ratio 1; hide the shader meta text."
  behavior_changes:
    - "Switch the scrim direction on narrow screens"
    - "Lower pixel ratio on mobile"
    - "Hide secondary meta text"
accessibility:
  keyboard: "Atmosphere options are native radios with visible focus."
  semantics: "Canvas is aria-hidden; the headline keeps a single accessible name."
  motion: "Reduced-motion users receive one static frame and instant palette changes."
  contrast: "Text sits over a scrim; verify contrast against the brightest palette with a measurement tool."
provenance:
  references:
    - name: "Three.js ShaderMaterial"
      url: "https://threejs.org/docs/#api/en/materials/ShaderMaterial"
      captured_at: "2026-10-31"
      evidence: "Official documentation for custom shader materials."
      notes: "Technical implementation reference, not a source for the visual composition."
    - name: "GSAP documentation"
      url: "https://gsap.com/docs/v3/"
      captured_at: "2026-10-31"
      evidence: "Official reference for tweens and quickTo."
      notes: "Technical implementation reference, not a source for the visual composition."
  evidence:
    - "The example is an original composition authored for this library."
    - "The cited documentation supports the implementation API, not a claim that the visual pattern was observed on a third-party site."
  inferences:
    - "A scrim plus short headline keeps text readable over a bright field."
  limitations:
    - "Contrast over every palette and animation frame has not been measured."
    - "The demo needs network access for Three.js and GSAP."
  originality_notes: "Original shader code, palettes, and placeholder copy."
lifecycle:
  status: implemented
  created_at: "2026-10-31"
  updated_at: "2026-10-31"
  validated_at:
  maintainer_notes: "Measure contrast over the brightest frames and test on real mobile GPUs."
```

## Design rationale

Use atmosphere as the interface. When brand feeling matters more than a literal product, a calm, large-scale light field sets mood while the typography stays the dominant information.

## Implementation notes

The runnable example uses Three.js 0.187.0 and GSAP 3.13.0. Avoid hashing single-pixel cells for stars; it produces visible grids.

## Variants and trade-offs

1. **A single fixed palette with scroll-driven intensity.** Keep the underlying hierarchy intact and ensure the motion supports the proposition rather than becoming the proposition.
2. **A horizon-line variant with mountains.** Keep the underlying hierarchy intact and ensure the motion supports the proposition rather than becoming the proposition.
3. **Pointer-driven curtain lift.** Keep the underlying hierarchy intact and ensure the motion supports the proposition rather than becoming the proposition.

## Validation

Runnable demonstration: [`examples/aurora-shader-veil/index.html`](../../examples/aurora-shader-veil/index.html)

Lifecycle remains `implemented`, not `validated`. The demo was exercised in headless Chromium with software WebGL (render, interaction, no console errors, no horizontal overflow). Real-device, assistive-technology, contrast, and performance checks are still outstanding.
