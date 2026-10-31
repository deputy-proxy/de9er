# Product prism stage

```yaml
schema_version: "1.0"
id: product-prism-stage
name: "Product prism stage"
category: heroes
summary: >
  A premium product or service is presented as a central dimensional object, surrounded by a small number of orbiting interface-like panels and precise light cues.
principle: >
  Give one product object a clear stage and use supporting elements to reveal its ecosystem. The central object owns the focal point; orbiting panels should clarify capabilities rather than become competing cards.
characteristics:
  composition: balanced
  density: medium
  typography: technical
  imagery: contained
  geometry: sharp
  motion: expressive
  alignment: mixed
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
    - "The product is best understood through a realistic screenshot or live interface."
    - "There are too many equally important features to represent as a single object."
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
    - "A central glass prism with three orbiting capability panels"
    - "A floating device-like slab with a rotating data halo"
    - "A minimal product object with animated light sweeps and a single orbiting marker"
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
  desktop: "The product object occupies the visual stage with three supporting elements at distinct depths."
  tablet: "Reduce orbit radius and panel count to preserve the overall silhouette."
  mobile: "Center the object and reduce supporting elements to one or two visible markers."
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

Give one product object a clear stage and use supporting elements to reveal its ecosystem. The central object owns the focal point; orbiting panels should clarify capabilities rather than become competing cards.

## Implementation notes

The runnable example pairs a semantic HTML proposition with a Three.js scene. The 3D layer is an enhancement, not a dependency for understanding the offer. It uses Three.js 0.187.0, a pinned CDN import map, responsive renderer sizing, a capped pixel ratio, and a CSS fallback.

## Variants and trade-offs

1. **A central glass prism with three orbiting capability panels.** Keep the underlying hierarchy intact and ensure the 3D scene supports the proposition rather than becoming the proposition.
2. **A floating device-like slab with a rotating data halo.** Keep the underlying hierarchy intact and ensure the 3D scene supports the proposition rather than becoming the proposition.
3. **A minimal product object with animated light sweeps and a single orbiting marker.** Keep the underlying hierarchy intact and ensure the 3D scene supports the proposition rather than becoming the proposition.

## Validation

Runnable demonstration: [`examples/product-prism-stage/index.html`](../../examples/product-prism-stage/index.html)

Lifecycle remains `implemented`, not `validated`, until browser, responsive, reduced-motion, keyboard, context-loss, and performance checks are recorded.
