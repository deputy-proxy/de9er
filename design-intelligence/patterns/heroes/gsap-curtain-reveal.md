# Curtain reveal masthead

```yaml
schema_version: "1.0"
id: gsap-curtain-reveal
name: "Curtain reveal masthead"
category: heroes
summary: >
  A masked headline rises into place, then a framed stage widens to full bleed as the visitor scrolls, turning the first screen into a short before-and-after story.
principle: >
  Let scroll progress carry a single narrative beat. The visitor commits to the story by scrolling, and the frame expands in step with that commitment while the proposition stays legible before it fades.
characteristics:
  composition: layered
  density: low
  typography: display-led
  imagery: layered
  geometry: soft
  motion: expressive
  alignment: left
suitability:
  audiences:
    - "Editorial, studio, and brand-led audiences"
    - "Teams telling a sequential product or campaign story"
  contexts:
    - "Campaign launches"
    - "Case-study and portfolio entry points"
    - "Brand storytelling pages"
  objectives:
    - "Create a memorable first impression"
    - "Reward scrolling with a clear narrative payoff"
  good_when:
    - "The story has a clear before and after"
    - "A short scroll-driven moment is acceptable on the first screen"
    - "Static content remains readable without JavaScript"
  avoid_when:
    - "Visitors need immediate access to dense information or navigation below the fold"
    - "The page must be usable without scroll-linked motion and no static equivalent is provided"
structure:
  regions:
    - "Overlay navigation"
    - "HTML message region with eyebrow, masked headline, explanation, actions, and optional figures"
    - "Framed stage that expands from a bounded inset to full bleed"
    - "Scrolling ticker anchored to the hero base"
  content_slots:
    - "Narrative cue"
    - "Three-line headline"
    - "Supporting explanation"
    - "Primary action"
    - "Stage artwork or media"
    - "Resolved-state caption"
  spatial_relationships:
    - "The stage starts as a bounded frame beside the copy and ends full bleed"
    - "Copy fades out as the stage opens so the caption can take over"
    - "The static layout (no JavaScript, no motion) remains a complete two-region composition"
variants:
  - "Center-origin expansion instead of right-origin"
  - "Image or video inside the stage in place of CSS artwork"
  - "Two-step expansion with an intermediate state"
implementation:
  semantic_html: "Use a header, main, and a single hero section with one h1 whose lines are span-wrapped for masking. Keep the headline readable as one sentence for assistive technology. Mark decorative stage artwork aria-hidden."
  css_approach: "Define the closed-frame clip-path in CSS so the pre-JavaScript layout is already correct. Use percentage-only inset values so the CSS and GSAP strings share the same units."
  javascript: "Load GSAP and ScrollTrigger with defer and initialise on DOMContentLoaded. Wrap animation in gsap.matchMedia so reduced-motion users receive the static layout. Tween clip-path with explicit fromTo strings rather than reading computed style, because browsers collapse equal inset values in computed output and misalign the interpolation. Do not combine ScrollTrigger pinning with CSS scroll-behavior smooth."
  optional_dependencies:
    - "GSAP 3.13.0 and ScrollTrigger from jsDelivr; the static layout works without them."
  performance_notes:
    - "Animate clip-path, transform, and opacity only."
    - "The pinned scene adds scroll length of roughly 90% of the viewport height; budget for it."
    - "Pause the ticker for reduced-motion users by not creating it."
responsive:
  desktop: "The framed stage sits at the right of the copy and expands to the full viewport."
  tablet: "Keep the two regions until the copy would wrap more than three lines, then stack."
  mobile: "Place the framed stage below the copy; hide secondary figures and expand the frame to full bleed on scroll."
  behavior_changes:
    - "Stack copy above the stage on narrow screens"
    - "Hide secondary figures on mobile"
    - "Use the same percentage insets with a different starting rectangle"
accessibility:
  keyboard: "All actions are native links; scrolling by keyboard drives the same scrub as the pointer."
  semantics: "Headline remains a single h1; stage artwork and ticker are aria-hidden; figures are labelled as sample values when placeholders."
  motion: "Under prefers-reduced-motion no tween, pin, ticker, or counter is created and the static layout is shown."
  contrast: "Copy sits on the solid page background and fades out before the stage passes behind it; caption text sits on an opaque panel."
provenance:
  references:
    - name: "GSAP documentation"
      url: "https://gsap.com/docs/v3/"
      captured_at: "2026-10-31"
      evidence: "Official API reference for tweens, timelines, matchMedia, and quickTo."
      notes: "Technical implementation reference, not a source for the visual composition."
    - name: "ScrollTrigger documentation"
      url: "https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
      captured_at: "2026-10-31"
      evidence: "Official reference for pinning and scrub behaviour."
      notes: "Technical implementation reference, not a source for the visual composition."
  evidence:
    - "The example is an original composition authored for this library."
    - "The cited documentation supports the implementation API, not a claim that the visual pattern was observed on a third-party site."
  inferences:
    - "Pairing a masked headline with a scrubbed frame expansion is a reusable composition interpretation."
  limitations:
    - "The demo loads GSAP from a CDN and shows the static layout if it is unavailable."
    - "Scrub feel on real touch devices has not been measured."
  originality_notes: "Original layout, CSS-built artwork, and placeholder copy. No third-party brand assets or copied site layouts."
lifecycle:
  status: implemented
  created_at: "2026-10-31"
  updated_at: "2026-10-31"
  validated_at:
  maintainer_notes: "Verify on real devices: pinned scroll on iOS Safari, overscroll behaviour, keyboard scrolling, and reduced motion. Source-level and headless-browser checks only so far."
```

## Design rationale

Let scroll progress carry a single narrative beat. The visitor commits to the story by scrolling, and the frame expands in step with that commitment while the proposition stays legible before it fades.

## Implementation notes

The runnable example uses GSAP 3.13.0 with ScrollTrigger. The unit lesson from building this pattern: read clip-path from explicit strings, never from computed style.

## Variants and trade-offs

1. **Center-origin expansion instead of right-origin.** Keep the underlying hierarchy intact and ensure the motion supports the proposition rather than becoming the proposition.
2. **Image or video inside the stage in place of CSS artwork.** Keep the underlying hierarchy intact and ensure the motion supports the proposition rather than becoming the proposition.
3. **Two-step expansion with an intermediate state.** Keep the underlying hierarchy intact and ensure the motion supports the proposition rather than becoming the proposition.

## Validation

Runnable demonstration: [`examples/gsap-curtain-reveal/index.html`](../../examples/gsap-curtain-reveal/index.html)

Lifecycle remains `implemented`, not `validated`. The demo was exercised in headless Chromium with software WebGL (render, interaction, no console errors, no horizontal overflow). Real-device, assistive-technology, contrast, and performance checks are still outstanding.
