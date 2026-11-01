# Particle morph sequence

```yaml
schema_version: "1.0"
id: particle-morph-sequence
name: "Particle morph sequence"
category: heroes
summary: >
  One GPU particle system reshapes itself between four target forms, timed by GSAP and selectable through native controls.
principle: >
  Show one subject in several states without changing the subject. A single continuous object that transforms communicates relationship and continuity better than four separate illustrations.
characteristics:
  composition: balanced
  density: medium
  typography: technical
  imagery: none
  geometry: expressive
  motion: expressive
  alignment: mixed
suitability:
  audiences:
    - "Platform and infrastructure products with several modes"
    - "Brands whose story has distinct stages"
  contexts:
    - "Product overviews with named states"
    - "Capability tours"
  objectives:
    - "Make several states memorable in one place"
    - "Invite exploration through direct control"
  good_when:
    - "The states are few and meaningfully different"
    - "Each form can be named in one word"
    - "A pause control and manual selection are provided"
  avoid_when:
    - "The states need detailed explanation that a particle form cannot carry"
    - "Many more than four states would be needed"
structure:
  regions:
    - "Conventional navigation"
    - "HTML copy with form selector and live caption"
    - "Bounded stage with canvas, pause control, and label"
  content_slots:
    - "Cue"
    - "Proposition"
    - "Explanation"
    - "Primary action"
    - "Form selector"
    - "Caption"
    - "Particle scene"
  spatial_relationships:
    - "Selector and caption live in HTML beside the stage"
    - "The stage label mirrors the active form"
    - "The pause control sits inside the stage corner"
variants:
  - "Logo or glyph as a target form"
  - "Scroll-driven morph instead of timed"
  - "Two forms with a toggle"
implementation:
  semantic_html: "Use native radio inputs and a polite live region for the caption. Provide a real button for pausing the sequence."
  css_approach: "Hide the CSS fallback once WebGL starts, because the transparent canvas would otherwise show it."
  javascript: "Store each target shape as a vertex attribute and blend between a from and a to shape in the vertex shader using one mix uniform. Tween the mix with GSAP, queue clicks that arrive mid-morph, and kill the autoplay timer when the visitor takes control. Use additive blending with soft round points."
  optional_dependencies:
    - "Three.js 0.187.0 via an import map."
    - "GSAP 3.13.0 for morph timing and the intro."
  performance_notes:
    - "Use 14,000 points on desktop and 7,000 on narrow screens."
    - "All blending happens on the GPU; JavaScript only updates uniforms."
    - "Pause when hidden or offscreen."
responsive:
  desktop: "Stage beside the copy."
  tablet: "Stack the stage below the copy."
  mobile: "Halve the point count and pull the camera back."
  behavior_changes:
    - "Reduce particle count on narrow screens"
    - "Stack regions"
    - "Keep chips wrapping"
accessibility:
  keyboard: "Radios and the pause button are native controls with visible focus."
  semantics: "Caption is a polite live region; canvas is aria-hidden."
  motion: "Autoplay is off for reduced-motion users and a pause control is offered otherwise; morphs become instant."
  contrast: "Text never sits on the canvas."
provenance:
  references:
    - name: "Three.js BufferGeometry"
      url: "https://threejs.org/docs/#api/en/core/BufferGeometry"
      captured_at: "2026-10-31"
      evidence: "Official documentation for custom attributes."
      notes: "Technical implementation reference, not a source for the visual composition."
    - name: "GSAP documentation"
      url: "https://gsap.com/docs/v3/"
      captured_at: "2026-10-31"
      evidence: "Official reference for tweens and delayedCall."
      notes: "Technical implementation reference, not a source for the visual composition."
  evidence:
    - "The example is an original composition authored for this library."
    - "The cited documentation supports the implementation API, not a claim that the visual pattern was observed on a third-party site."
  inferences:
    - "Four forms is near the limit for a legible morph sequence."
  limitations:
    - "Point sprite sizing differs between GPUs."
    - "The demo needs network access for Three.js and GSAP."
  originality_notes: "Original shapes, shader, and placeholder copy."
lifecycle:
  status: implemented
  created_at: "2026-10-31"
  updated_at: "2026-10-31"
  validated_at:
  maintainer_notes: "Verify point size on high-DPI phones and long-run memory behaviour."
```

## Design rationale

Show one subject in several states without changing the subject. A single continuous object that transforms communicates relationship and continuity better than four separate illustrations.

## Implementation notes

The runnable example uses Three.js 0.187.0 and GSAP 3.13.0. Queue selections made during a morph rather than interrupting it.

## Variants and trade-offs

1. **Logo or glyph as a target form.** Keep the underlying hierarchy intact and ensure the motion supports the proposition rather than becoming the proposition.
2. **Scroll-driven morph instead of timed.** Keep the underlying hierarchy intact and ensure the motion supports the proposition rather than becoming the proposition.
3. **Two forms with a toggle.** Keep the underlying hierarchy intact and ensure the motion supports the proposition rather than becoming the proposition.

## Validation

Runnable demonstration: [`examples/particle-morph-sequence/index.html`](../../examples/particle-morph-sequence/index.html)

Lifecycle remains `implemented`, not `validated`. The demo was exercised in headless Chromium with software WebGL (render, interaction, no console errors, no horizontal overflow). Real-device, assistive-technology, contrast, and performance checks are still outstanding.
