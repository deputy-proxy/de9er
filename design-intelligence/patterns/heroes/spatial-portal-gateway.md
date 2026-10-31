# Spatial portal gateway

```yaml
schema_version: "1.0"
id: spatial-portal-gateway
name: "Spatial portal gateway"
category: heroes
summary: >
  A sequence of nested dimensional frames and a controlled camera movement create the sensation of entering a new space, product world, or experience.
principle: >
  Use repeated spatial thresholds and forward camera movement to make the hero feel like an invitation into a new environment. The motion should be slow, finite in intensity, and never imply that the user must wait for content.
characteristics:
  composition: linear
  density: medium
  typography: display-led
  imagery: none
  geometry: sharp
  motion: expressive
  alignment: centered
suitability:
  audiences:
    - "Technology and design-forward brands"
    - "Product teams with a clear visual story"
  contexts:
    - "Premium product launches"
    - "Creative technology and digital experiences"
    - "Brand campaigns with a strong visual identity"
  objectives:
    - "Create a memorable first impression"
    - "Make an abstract proposition feel tangible"
  good_when:
    - "The 3D scene communicates a relevant idea rather than serving as decoration"
    - "The brand can support a motion-led first screen"
    - "The page can budget for WebGL rendering and a graceful fallback"
  avoid_when:
    - "The brand needs a calm, direct, utility-first first screen."
    - "The camera movement could cause discomfort or obscure the relationship between headline and action."
structure:
  regions:
    - "Conventional semantic navigation"
    - "HTML message region with eyebrow, headline, explanation, and action"
    - "Dedicated visual stage containing a Three.js canvas"
    - "Optional compact interaction or motion-status hint"
  content_slots:
    - "Category or audience cue"
    - "Single proposition"
    - "Supporting explanation"
    - "Primary action"
    - "Purposeful 3D scene"
  spatial_relationships:
    - "The HTML proposition remains readable and independent of the WebGL scene"
    - "The canvas occupies a bounded visual region and never obscures controls"
    - "Motion creates depth and hierarchy without competing with the headline"
    - "A static CSS fallback remains visible if WebGL or the CDN is unavailable"
variants:
    - "Concentric portal rings with a slow camera dolly"
    - "A corridor of geometric frames with moving light bands"
    - "A single dimensional aperture with particles crossing its plane"
implementation:
  semantic_html: "Use semantic header, main, section, h1, paragraph, and native links. Treat the canvas as decorative when it conveys no unique information; provide an adjacent text explanation when it does."
  css_approach: "Use a responsive two-region composition, a clipped canvas stage, fluid typography, and a CSS fallback background. Keep canvas sizing independent from the page's content height."
  javascript: "Use an ES module and Three.js 0.187.0. Create and dispose renderer resources deliberately, cap device pixel ratio, use setAnimationLoop, pause offscreen/hidden tabs, handle resize and context loss, and honor prefers-reduced-motion."
  optional_dependencies:
    - "Three.js 0.187.0 loaded from jsDelivr via an import map; requires network access for the 3D enhancement."
  performance_notes:
    - "Keep geometry and particle counts bounded; cap renderer pixel ratio at 1.5–1.75."
    - "Pause animation when the document is hidden or the stage is outside the viewport."
    - "Reduced-motion users receive a stable composed frame rather than continuous animation."
    - "If WebGL initialization fails, retain the HTML proposition and CSS fallback."
responsive:
  desktop: "A centered portal fills the right visual stage, with a slow camera drift through its depth."
  tablet: "Reduce the number of visible frames and shorten the depth of field."
  mobile: "Use a static frontal composition with subtle ring rotation and no forward camera travel."
  behavior_changes:
    - "Reduce scene complexity and pixel ratio on narrow screens."
    - "Stack content and visual regions without changing semantic reading order."
    - "Keep the canvas decorative and non-interactive unless an explicit control is provided."
accessibility:
  keyboard: "All actions are native links or buttons; no keyboard interaction is required to understand the scene."
  semantics: "Canvas is aria-hidden when decorative; the proposition and action remain ordinary HTML."
  motion: "Respect prefers-reduced-motion by rendering one composed frame and stopping the animation loop. Pause when offscreen and when the page is hidden."
  contrast: "Maintain readable text over a solid or sufficiently opaque surface; do not rely on the canvas for essential text contrast."
provenance:
  references:
    - name: "Three.js documentation"
      url: "https://threejs.org/docs/"
      captured_at: "2026-10-31"
      evidence: "Official API documentation for scene construction, materials, geometry, and renderer lifecycle."
      notes: "Technical implementation reference, not a source for the visual composition."
    - name: "Three.js package"
      url: "https://www.npmjs.com/package/three"
      captured_at: "2026-10-31"
      evidence: "Package metadata and current published version used to pin the browser module."
      notes: "Version is pinned in the example import map to avoid floating CDN dependencies."
  evidence:
    - "The example is an original Three.js composition authored for this library."
    - "The cited documentation supports the implementation API, not a claim that the visual pattern was observed on a third-party site."
  inferences:
    - "The composition principle and suitability guidance are reusable design interpretations."
  limitations:
    - "The demos load Three.js from a CDN and therefore require network access for WebGL rendering."
    - "No conversion lift, device coverage, or performance score is claimed."
  originality_notes: "Original geometry, shader logic, layout, and placeholder copy. No third-party brand assets or copied site layouts."
lifecycle:
  status: implemented
  created_at: "2026-10-31"
  updated_at: "2026-10-31"
  validated_at:
  maintainer_notes: "Source-level implementation only. Verify desktop/tablet/mobile, reduced motion, WebGL failure, context loss, keyboard, and performance on real devices before marking validated."
```

## Design rationale

Use repeated spatial thresholds and forward camera movement to make the hero feel like an invitation into a new environment. The motion should be slow, finite in intensity, and never imply that the user must wait for content.

## Implementation notes

The runnable example pairs a semantic HTML proposition with a Three.js scene. The 3D layer is an enhancement, not a dependency for understanding the offer. It uses Three.js 0.187.0, a pinned CDN import map, responsive renderer sizing, a capped pixel ratio, and a CSS fallback.

## Variants and trade-offs

1. **Concentric portal rings with a slow camera dolly.** Keep the underlying hierarchy intact and ensure the 3D scene supports the proposition rather than becoming the proposition.
2. **A corridor of geometric frames with moving light bands.** Keep the underlying hierarchy intact and ensure the 3D scene supports the proposition rather than becoming the proposition.
3. **A single dimensional aperture with particles crossing its plane.** Keep the underlying hierarchy intact and ensure the 3D scene supports the proposition rather than becoming the proposition.

## Validation

Runnable demonstration: [`examples/spatial-portal-gateway/index.html`](../../examples/spatial-portal-gateway/index.html)

Lifecycle remains `implemented`, not `validated`, until browser, responsive, reduced-motion, keyboard, context-loss, and performance checks are recorded.
