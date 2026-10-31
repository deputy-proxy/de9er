# Immersive image overlay

```yaml
schema_version: "1.0"
id: immersive-image-overlay
name: "Immersive image overlay"
category: heroes
summary: >
  A full-bleed photograph or visual fills the hero region while a compact text and action layer sits over a deliberately quiet part of the image.
principle: >
  Use a single emotionally informative image as the environment for the message, while protecting text legibility with composition, contrast, and a controlled overlay.
characteristics:
  composition: layered
  density: sparse
  typography: display-led
  imagery: full-bleed
  geometry: soft
  motion: subtle
  alignment: left
suitability:
  audiences:
  - "Travel audiences"
  - "hospitality customers"
  - "fashion and lifestyle shoppers"
  - "event attendees"
  contexts:
  - "Campaign landings"
  - "destination pages"
  - "brand introductions"
  - "product launches"
  objectives:
  - "Create atmosphere quickly"
  - "Connect an offer to a tangible context"
  good_when:
  - "A strong original image carries relevant meaning"
  - "The brand benefits from emotional context"
  - "The image has usable negative space for copy"
  avoid_when:
  - "No suitable licensed or owned image is available"
  - "The offer requires detailed explanation"
  - "Text would obscure important image content"
structure:
  regions:
  - "Navigation over or above the image"
  - "Full-bleed image stage"
  - "Contrast layer or gradient where needed"
  - "Headline, brief copy, and action"
  content_slots:
  - "Context label"
  - "Headline"
  - "Short supporting line"
  - "Primary CTA"
  spatial_relationships:
  - "Text is anchored to an image region with sufficient contrast"
  - "The image remains the dominant environmental layer"
  - "Overlay treatment follows the image composition rather than using a generic dark wash everywhere"
  - "The CTA is visually distinct without becoming a second focal point"
variants:
  - "Left-anchored copy over negative space"
  - "Bottom-aligned caption treatment"
  - "Split focal image with a solid text panel"
implementation:
  semantic_html: "Use a background image only when decorative; use a figure and alt text when the image conveys information. Ensure overlay text remains in the document flow."
  css_approach: "Use background-size: cover or an img with object-fit: cover; provide a fallback surface and responsive object-position."
  javascript: "None required. Avoid autoplay video as a default substitute for photography."
  optional_dependencies: []
  performance_notes:
    - "No external assets, fonts, scripts, or runtime dependencies are required by the demonstration."
    - "Keep decorative layers lightweight and avoid layout shifts."
responsive:
  desktop: "Use the image as a large visual field and position the copy where contrast is naturally strongest."
  tablet: "Adjust crop and text width; add a stronger local scrim if the focal area shifts."
  mobile: "Use a dedicated portrait crop when available; otherwise reposition the image and move copy into a solid or strongly backed region."
  behavior_changes:
    - "The composition reflows rather than shrinking a desktop canvas."
    - "Decorative layers may be simplified when they compete with content at narrow widths."
accessibility:
  keyboard: "All interactive elements use native focusable controls; static demonstrations require no keyboard interaction beyond links."
  semantics: "Use a background image only when decorative; use a figure and alt text when the image conveys information. Ensure overlay text remains in the document flow."
  motion: "No essential information depends on motion. Respect prefers-reduced-motion for any future animation."
  contrast: "Choose text and control colors against their actual surfaces; verify contrast after brand colors and imagery are selected."
provenance:
  references:
    - name: "Framer: Homepage design examples"
      url: "https://www.framer.com/blog/homepage-design-examples/"
      captured_at: "2026-10-31"
      evidence: "A survey of live homepage examples describing product-led focus, large visual demonstrations, and motion used to clarify complex offers."
      notes: "Secondary curated reference; inspect the linked examples directly before attributing source-specific details."
    - name: "Shopify: Homepage design examples"
      url: "https://www.shopify.com/blog/homepage-design"
      captured_at: "2026-10-31"
      evidence: "A survey of ecommerce homepages focused on brand identity, product presentation, navigation, and conversion."
      notes: "Secondary curated reference; inspect the linked examples directly before attributing source-specific details."
  evidence:
    - "The cited sources are curated galleries or design guidance that document recurring homepage and hero approaches."
    - "The demo is an original abstraction created for this library and is not a reproduction of a referenced page."
  inferences:
    - "The reusable principle and suitability guidance are design interpretations synthesized from the recurring composition."
  limitations:
    - "References are inspiration and secondary descriptions, not a pixel-level audit of a single canonical implementation."
    - "No source-specific breakpoints, exact measurements, conversion outcomes, or implementation technologies are asserted."
  originality_notes: "Use original copy, brand identity, and licensed or owned assets when adapting this pattern. The demonstration uses original placeholder content and CSS-built visuals."
lifecycle:
  status: implemented
  created_at: "2026-10-31"
  updated_at: "2026-10-31"
  validated_at:
  maintainer_notes: "Source-level review only. Browser viewport, keyboard, contrast, and assistive-technology checks remain outstanding."
```

## Design rationale

The image supplies context and emotion faster than copy can. It is not a substitute for a clear offer, and its legibility depends on the actual image.

## Implementation notes

A self-contained CSS landscape illustration used to demonstrate the overlay relationship without external assets. The standalone example uses semantic HTML and local CSS only. It is intentionally free of external assets and build tooling.

## Variants and trade-offs

1. **Left-anchored copy over negative space.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.
2. **Bottom-aligned caption treatment.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.
3. **Split focal image with a solid text panel.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.

## Validation

Runnable demonstration: [`examples/immersive-image-overlay/index.html`](../../examples/immersive-image-overlay/index.html)

Lifecycle remains `implemented`, not `validated`, until the responsive and accessibility checks are performed in a browser.
