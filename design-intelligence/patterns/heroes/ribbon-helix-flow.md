# Ribbon helix flow

```yaml
schema_version: "1.0"
id: ribbon-helix-flow
name: "Ribbon helix flow"
category: heroes
summary: >
  Iridescent silk ribbons braid through space on a light canvas, drawn in by GSAP and animated by live-updating geometry.
principle: >
  Convey craft through softness and finish. A light, paper-like canvas with a few well-lit ribbons suggests care and refinement rather than technical spectacle.
characteristics:
  composition: asymmetric
  density: low
  typography: editorial
  imagery: none
  geometry: soft
  motion: moderate
  alignment: mixed
suitability:
  audiences:
    - "Fashion, lifestyle, hospitality, and craft brands"
    - "Premium consumer services"
  contexts:
    - "Brand introductions"
    - "Collection and campaign pages"
  objectives:
    - "Signal quality and care"
    - "Differentiate from dark, technical heroes"
  good_when:
    - "Softness and finish are the message"
    - "A light theme suits the brand"
    - "A pause control is provided"
  avoid_when:
    - "The brand identity is strictly dark or technical"
    - "The first screen must show product detail"
structure:
  regions:
    - "Conventional navigation"
    - "Stage at the left holding the canvas and pause control"
    - "Copy and composition notes at the right"
  content_slots:
    - "Cue"
    - "Short headline"
    - "Explanation"
    - "Primary action"
    - "Notes"
    - "Ribbon scene"
  spatial_relationships:
    - "The stage is placed first visually while copy stays first in reading order"
    - "Ribbon tips taper inside the frame"
    - "Notes sit under a hairline divider"
variants:
  - "Dark-canvas version with bright ribbons"
  - "Fewer, wider ribbons"
  - "Pointer-driven twist"
implementation:
  semantic_html: "Keep copy first in the DOM and move the stage with CSS order. Provide a native pause button."
  css_approach: "Use a light token set and a paper-toned stage gradient; hide the CSS fallback once WebGL starts."
  javascript: "Rebuild each ribbon's vertex positions per frame from a parametric centre curve and a twisting binormal, then recompute normals. Use MeshPhysicalMaterial with iridescence (iridescenceThicknessMinimum and Maximum in 0.187) and RoomEnvironment reflections. Draw ribbons in with GSAP by animating the geometry draw range."
  optional_dependencies:
    - "Three.js 0.187.0 and the RoomEnvironment addon via an import map."
    - "GSAP 3.13.0 for the draw-in and intro."
  performance_notes:
    - "Roughly nine ribbons of 150 segments; fewer on narrow screens."
    - "Geometry updates are CPU-side; keep segment counts modest."
    - "Pause when hidden, offscreen, or paused by the visitor."
responsive:
  desktop: "Stage left, copy right."
  tablet: "Stack copy above the stage."
  mobile: "Six ribbons, camera pulled back."
  behavior_changes:
    - "Stack with copy first"
    - "Reduce ribbon count"
    - "Pull camera back in portrait"
accessibility:
  keyboard: "The pause control is a native button."
  semantics: "Canvas is aria-hidden; copy keeps reading order."
  motion: "Reduced-motion users get one composed frame and no draw-in."
  contrast: "Text uses dark ink on a light background."
provenance:
  references:
    - name: "Three.js MeshPhysicalMaterial"
      url: "https://threejs.org/docs/#api/en/materials/MeshPhysicalMaterial"
      captured_at: "2026-10-31"
      evidence: "Official documentation for iridescence and clearcoat."
      notes: "Technical implementation reference, not a source for the visual composition."
    - name: "GSAP documentation"
      url: "https://gsap.com/docs/v3/"
      captured_at: "2026-10-31"
      evidence: "Official reference for tweens."
      notes: "Technical implementation reference, not a source for the visual composition."
  evidence:
    - "The example is an original composition authored for this library."
    - "The cited documentation supports the implementation API, not a claim that the visual pattern was observed on a third-party site."
  inferences:
    - "Tapering ribbon ends read as silk and keep the composition framed."
  limitations:
    - "Per-frame geometry updates have not been profiled on low-end phones."
    - "The demo needs network access for Three.js and GSAP."
  originality_notes: "Original geometry, material settings, and placeholder copy."
lifecycle:
  status: implemented
  created_at: "2026-10-31"
  updated_at: "2026-10-31"
  validated_at:
  maintainer_notes: "Profile on low-end phones; confirm iridescence renders consistently across browsers."
```

## Design rationale

Convey craft through softness and finish. A light, paper-like canvas with a few well-lit ribbons suggests care and refinement rather than technical spectacle.

## Implementation notes

The runnable example uses Three.js 0.187.0 and GSAP 3.13.0. Use iridescenceThicknessMinimum and Maximum; the Range property is removed in 0.187.

## Variants and trade-offs

1. **Dark-canvas version with bright ribbons.** Keep the underlying hierarchy intact and ensure the motion supports the proposition rather than becoming the proposition.
2. **Fewer, wider ribbons.** Keep the underlying hierarchy intact and ensure the motion supports the proposition rather than becoming the proposition.
3. **Pointer-driven twist.** Keep the underlying hierarchy intact and ensure the motion supports the proposition rather than becoming the proposition.

## Validation

Runnable demonstration: [`examples/ribbon-helix-flow/index.html`](../../examples/ribbon-helix-flow/index.html)

Lifecycle remains `implemented`, not `validated`. The demo was exercised in headless Chromium with software WebGL (render, interaction, no console errors, no horizontal overflow). Real-device, assistive-technology, contrast, and performance checks are still outstanding.
