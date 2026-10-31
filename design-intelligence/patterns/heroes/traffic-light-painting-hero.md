# Traffic light painting hero

```yaml
schema_version: "1.0"
id: traffic-light-painting-hero
name: "Traffic light painting hero"
category: heroes
summary: >
  A full-bleed nighttime city scene with animated long-exposure traffic trails,
  proposition-led copy, and a tactile shutter-speed controller.
principle: >
  Make the visual metaphor itself interactive: changing exposure length changes
  the intensity and reach of the light trails, so the control demonstrates the
  photographic idea instead of acting as unrelated decoration.
characteristics:
  composition: immersive
  density: medium
  typography: expressive
  imagery: procedural-3d
  geometry: environmental
  motion: ambient-and-interactive
  alignment: left
suitability:
  audiences:
    - "Photography and camera applications"
    - "Creative tools and visual experiences"
  contexts:
    - "Product launches with a clear visual metaphor"
    - "Photography portfolios and creative campaigns"
  objectives:
    - "Create an atmospheric first impression"
    - "Demonstrate a meaningful product control before the visitor scrolls"
  good_when:
    - "A nighttime city and light-trail metaphor is relevant to the product"
    - "The hero can dedicate the full first viewport to one message and one control"
  avoid_when:
    - "The brand or product has no connection to photography, light, travel, or motion"
    - "The page needs a dense navigation or conversion form in the first viewport"
structure:
  regions:
    - "Full-viewport Three.js canvas"
    - "Contrast gradient overlay"
    - "Left-aligned headline, supporting copy, and two actions"
    - "Bottom-right shutter-speed control panel"
  content_slots:
    - "Short visual proposition"
    - "One-sentence product explanation"
    - "Primary action"
    - "Secondary gallery action"
    - "Shutter-speed slider and six preset values"
implementation:
  semantic_html: "Use a semantic section, one h1, paragraph, native links, labelled range input, output, and native preset buttons."
  css_approach: "Use the shared Tailwind build for base styling and a small component stylesheet for full-bleed layering, glass control panel, and slider details."
  javascript: "Use Three.js 0.187.0. Render an authored city street, building windows, street lamps, traffic light trails, and subtle camera drift. Shutter speed updates trail intensity and spread. Pause when offscreen or hidden, cap pixel ratio, handle resize/context loss, and respect reduced motion."
  optional_dependencies:
    - "Three.js 0.187.0 from jsDelivr through an import map."
performance_notes:
  - "Keep the city geometry and traffic trails bounded; cap device pixel ratio at 1.55."
  - "Pause the render loop when the hero is outside the viewport or the tab is hidden."
  - "Reduced-motion users receive a stable scene."
  - "If WebGL initialization fails, keep the copy and controls visible over the CSS background."
responsive:
  desktop: "Copy sits in the left half; the full city perspective and shutter controller remain visible."
  tablet: "Reduce camera depth and preserve the control panel in the lower-right corner."
  mobile: "Move copy toward the upper half and make the shutter panel full-width near the bottom."
accessibility:
  keyboard: "The range input and preset buttons are keyboard-operable. Both actions are native links."
  semantics: "Canvas is decorative and aria-hidden. Shutter controls have labels and expose the current value."
  motion: "Respect prefers-reduced-motion by stopping continuous animation. Pause when offscreen and when the document is hidden."
  contrast: "A dark gradient overlays the canvas so copy and controls remain legible regardless of scene detail."
provenance:
  references:
    - name: "User-provided ReactBits hero reference"
      url: "https://pro.reactbits.dev/"
      captured_at: "2026-10-31"
      evidence: "Supplied HTML shows the headline, supporting copy, dual actions, full-bleed Three.js canvas, and shutter-speed control with six values."
      notes: "The original canvas implementation was not included in the supplied HTML. This demo recreates the visible composition and interaction with original Three.js scene code."
    - name: "Three.js documentation"
      url: "https://threejs.org/docs/"
      captured_at: "2026-10-31"
      evidence: "Technical reference for scene, geometry, lights, and renderer lifecycle."
      notes: "Supports API usage, not the visual composition."
  evidence:
    - "The supplied reference contains the visible content and control structure."
    - "The Three.js city, buildings, traffic trails, lighting, and animation in this demo are original implementation."
  limitations:
    - "The source reference's original Three.js scene source was not supplied, so pixel-identical 3D artwork cannot be guaranteed."
    - "Three.js loads from a CDN and requires network access for the 3D scene."
  originality_notes: "Original procedural city scene and code; no third-party brand assets or copied source code."
lifecycle:
  status: implemented
  created_at: "2026-10-31"
  updated_at: "2026-10-31"
  validated_at:
  maintainer_notes: "Source-level implementation. Verify browser rendering, responsive layout, reduced motion, keyboard operation, WebGL failure, context loss, and performance on real devices before marking validated."
```

## Composition

A cinematic night-city canvas fills the viewport. The left-side message stays quiet and readable while the street perspective and traffic trails carry the visual weight. The shutter controller sits in the lower-right corner, matching the reference's compact camera-control treatment.

## Interaction

The range input and six preset buttons select shutter speeds from 1/15s to 30s. Longer exposures increase the brightness and spread of the traffic trails. The displayed value and active preset remain synchronized.

## Implementation

- Reusable markup: [component HTML](../../../components/traffic-light-painting-hero.html)
- Component styling: [component CSS](../../../components/traffic-light-painting-hero.css)
- Component behavior: [component JavaScript](../../../components/traffic-light-painting-hero.js)
- Runnable demo: [index.html](../../examples/traffic-light-painting-hero/index.html)
- Three.js version: 0.187.0, pinned through jsDelivr import map.

The supplied reference HTML exposed the page structure but not the original WebGL scene source. This implementation reproduces the visible composition and interaction with an original procedural city scene; the 3D artwork is therefore a faithful recreation, not a pixel-identical copy of the unavailable canvas.
