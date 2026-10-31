# Traffic light painting hero

```yaml
schema_version: "1.0"
id: traffic-light-painting-hero
name: "Traffic light painting hero"
category: heroes
summary: >
  A full-bleed black canvas with flowing warm-white and red long-exposure light trails,
  proposition-led copy, and a minimal shutter-speed controller.
principle: >
  Make the visual metaphor itself interactive: changing exposure length changes
  the glow, width, and intensity of the parallel light trails.
characteristics:
  composition: immersive
  density: medium
  typography: expressive
  imagery: procedural-2d
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
    - "An abstract long-exposure light-trail metaphor is relevant to the product"
    - "The hero can dedicate the full first viewport to one message and one control"
  avoid_when:
    - "The brand or product has no connection to photography, light, travel, or motion"
    - "The page needs a dense navigation or conversion form in the first viewport"
structure:
  regions:
    - "Full-viewport animated 2D canvas"
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
  javascript: "Use a 2D canvas to draw a fan of smooth, parallel warm-white and red light trails. Animate the shared vanishing point and curve geometry. Shutter speed updates trail glow and intensity. Pause when offscreen or hidden, cap pixel ratio, and respect reduced motion."
  optional_dependencies:
performance_notes:
  - "Keep the trail count bounded and cap device pixel ratio at 2."
  - "Pause the render loop when the hero is outside the viewport or the tab is hidden."
  - "Reduced-motion users receive a stable scene."
  - "If canvas rendering is unavailable, keep the copy and controls visible over the CSS background."
responsive:
  desktop: "Copy sits in the upper-left; the light-trail fan fills the canvas and the shutter controller floats in the upper-right."
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
      evidence: "Supplied HTML shows the headline, supporting copy, dual actions, canvas, and shutter-speed control with six values. The screen recording clarifies the canvas artwork as abstract flowing light trails."
      notes: "The supplied HTML did not include the original canvas implementation. A screen recording later clarified the actual abstract light-trail animation."
  evidence:
    - "The supplied reference contains the visible content and control structure."
    - "The flowing warm-white and red light trails and their motion are an original canvas implementation guided by the recording."
  limitations:
    - "The source reference's original canvas code was not supplied, so exact pixel-level matching cannot be guaranteed."
    - "The animation uses native canvas and has no rendering-library dependency."
  originality_notes: "Original canvas animation guided by the user-provided reference recording."
lifecycle:
  status: implemented
  created_at: "2026-10-31"
  updated_at: "2026-10-31"
  validated_at:
  maintainer_notes: "Source-level implementation. Verify browser rendering, responsive layout, reduced motion, keyboard operation, canvas availability and performance on real devices before marking validated."
```

## Composition

A near-black canvas fills the viewport. Parallel warm-white and red trails converge near the upper portion of the frame, then fan outward in long, fluid curves. Their vanishing point drifts horizontally, making the composition feel like a continuous long exposure. The shutter controller floats in the upper-right.

## Interaction

The range input and six preset buttons select shutter speeds from 1/15s to 30s. Longer exposures increase the brightness and spread of the traffic trails. The displayed value and active preset remain synchronized.

## Implementation

- Reusable markup: [component HTML](../../../components/traffic-light-painting-hero.html)
- Component styling: [component CSS](../../../components/traffic-light-painting-hero.css)
- Component behavior: [component JavaScript](../../../components/traffic-light-painting-hero.js)
- Runnable demo: [index.html](../../examples/traffic-light-painting-hero/index.html)
- Rendering: native 2D canvas, no external rendering dependency.

The user-provided screen recording is the visual reference. The implementation recreates its abstract fan of flowing light trails rather than introducing a literal city or road scene.
