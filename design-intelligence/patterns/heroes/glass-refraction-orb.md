# Glass refraction orb

```yaml
schema_version: "1.0"
id: glass-refraction-orb
name: "Glass refraction orb"
category: heroes
summary: >
  A transmissive glass sphere bends a moving field of light lines behind it, with GSAP-driven finish changes that tint the glass.
principle: >
  Make the material the message. When clarity, precision, or optics is the proposition, a physically plausible refractive object communicates it faster than description, provided the background gives the glass something rich to bend.
characteristics:
  composition: balanced
  density: medium
  typography: technical
  imagery: none
  geometry: soft
  motion: expressive
  alignment: mixed
suitability:
  audiences:
    - "Optics, hardware, fintech, and design-tool brands"
    - "Audiences who respond to materials and craft"
  contexts:
    - "Premium product launches"
    - "Brand campaigns centred on clarity or transparency"
  objectives:
    - "Create a tactile first impression"
    - "Offer one small, satisfying interaction"
  good_when:
    - "The glass metaphor supports the proposition"
    - "The page can budget for a transmission render pass"
    - "A static frame is acceptable for reduced-motion users"
  avoid_when:
    - "The audience is on low-power devices and no static alternative is available"
    - "The proposition is already complex and the object would add another layer of explanation"
structure:
  regions:
    - "Conventional navigation"
    - "HTML message region with a glass finish selector"
    - "Bounded stage containing a Three.js canvas"
    - "Stage label and live status"
  content_slots:
    - "Category cue"
    - "Single proposition"
    - "Supporting explanation"
    - "Primary action"
    - "Finish selector"
    - "Glass scene"
  spatial_relationships:
    - "The selector is native HTML outside the canvas"
    - "The glass sits in front of a drifting light-line field and a soft colour wash"
    - "A thin metallic ring supplies a second reflective surface"
variants:
  - "A torus or lens form instead of a sphere"
  - "Frosted glass with higher roughness"
  - "A static photographic backdrop behind the glass"
implementation:
  semantic_html: "Use native radio inputs inside a fieldset with a legend for finishes. Keep the canvas aria-hidden because the selector and copy carry the meaning."
  css_approach: "Use a two-region grid, a clipped stage, and a CSS fallback shape that is hidden once WebGL initialises."
  javascript: "Use an ES module with Three.js 0.187.0, RoomEnvironment for reflections, and MeshPhysicalMaterial transmission with dispersion. Set an opaque scene background so the transmission pass samples a defined colour. Tween material colour, attenuation colour, and distance with GSAP; render once on demand when the loop is stopped."
  optional_dependencies:
    - "Three.js 0.187.0 and its RoomEnvironment addon via an import map from jsDelivr."
    - "GSAP 3.13.0 from jsDelivr for the intro and finish transitions."
  performance_notes:
    - "Cap pixel ratio at 1.5; transmission adds a second render of the scene."
    - "Keep the light-line field to a few dozen simple meshes."
    - "Pause the loop when hidden or offscreen."
responsive:
  desktop: "Large sphere opposite the copy."
  tablet: "Stack the stage under the copy with a wider aspect."
  mobile: "Pull the camera back so the ring is not cropped; keep the selector above the stage."
  behavior_changes:
    - "Stack regions on narrow screens"
    - "Increase camera distance in portrait"
    - "Keep finishes as large tap targets"
accessibility:
  keyboard: "Finish options are native radio inputs with visible focus."
  semantics: "Canvas is aria-hidden; the selected finish is exposed through the radio state."
  motion: "Reduced-motion users get a single composed frame and instant finish changes."
  contrast: "Text never sits on the canvas; stage labels use a text shadow against the scene."
provenance:
  references:
    - name: "Three.js MeshPhysicalMaterial"
      url: "https://threejs.org/docs/#api/en/materials/MeshPhysicalMaterial"
      captured_at: "2026-10-31"
      evidence: "Official documentation for transmission, ior, dispersion, and attenuation."
      notes: "Technical implementation reference, not a source for the visual composition."
    - name: "GSAP documentation"
      url: "https://gsap.com/docs/v3/"
      captured_at: "2026-10-31"
      evidence: "Official reference for tweening non-DOM objects."
      notes: "Technical implementation reference, not a source for the visual composition."
  evidence:
    - "The example is an original composition authored for this library."
    - "The cited documentation supports the implementation API, not a claim that the visual pattern was observed on a third-party site."
  inferences:
    - "Fine light lines suit refraction better than wide bars, which read as blocks."
  limitations:
    - "Transmission cost on low-end GPUs has not been measured."
    - "The demo needs network access for Three.js and GSAP."
  originality_notes: "Original scene, material settings, and placeholder copy."
lifecycle:
  status: implemented
  created_at: "2026-10-31"
  updated_at: "2026-10-31"
  validated_at:
  maintainer_notes: "Verify frame rate on real mobile GPUs and context-loss recovery."
```

## Design rationale

Make the material the message. When clarity, precision, or optics is the proposition, a physically plausible refractive object communicates it faster than description, provided the background gives the glass something rich to bend.

## Implementation notes

The runnable example uses Three.js 0.187.0 and GSAP 3.13.0. Give the glass a rich backdrop; a plain dark one leaves a black interior.

## Variants and trade-offs

1. **A torus or lens form instead of a sphere.** Keep the underlying hierarchy intact and ensure the motion supports the proposition rather than becoming the proposition.
2. **Frosted glass with higher roughness.** Keep the underlying hierarchy intact and ensure the motion supports the proposition rather than becoming the proposition.
3. **A static photographic backdrop behind the glass.** Keep the underlying hierarchy intact and ensure the motion supports the proposition rather than becoming the proposition.

## Validation

Runnable demonstration: [`examples/glass-refraction-orb/index.html`](../../examples/glass-refraction-orb/index.html)

Lifecycle remains `implemented`, not `validated`. The demo was exercised in headless Chromium with software WebGL (render, interaction, no console errors, no horizontal overflow). Real-device, assistive-technology, contrast, and performance checks are still outstanding.
