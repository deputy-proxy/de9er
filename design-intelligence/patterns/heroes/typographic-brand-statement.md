# Typographic brand statement

```yaml
schema_version: "1.0"
id: typographic-brand-statement
name: "Typographic brand statement"
category: heroes
summary: "A short, high-conviction statement becomes the hero composition, supported by sparse navigation and a minimal next action."
principle: "For brands with a clear identity, a concise statement can function as both message and visual identity; remove competing elements so it feels intentional."
characteristics:
  composition: centered
  density: sparse
  typography: display-led
  imagery: none
  geometry: sharp
  motion: static
  alignment: centered
suitability:
  audiences:
    - "Creative brands"
    - "independent studios"
    - "cultural institutions"
    - "premium products"
  contexts:
    - "Brand homepages"
    - "portfolio openings"
    - "campaign microsites"
  objectives:
    - "Create immediate brand recognition"
    - "communicate a distinctive point of view"
  good_when:
    - "Brand can be summarized in a short statement"
    - "audience values expressive identity"
  avoid_when:
    - "Offer needs detailed explanation"
    - "headline is generic"
    - "type treatment harms readability"
structure:
  regions:
    - "Minimal navigation"
    - "optional context label"
    - "oversized statement"
    - "small supporting line or CTA"
  content_slots:
    - "Brand statement"
    - "context label"
    - "optional supporting line"
    - "one next action"
  spatial_relationships:
    - "Statement dominates hierarchy"
    - "navigation remains quiet"
    - "line breaks adapt responsively"
    - "action does not compete"
variants:
    - "Centered poster-like statement"
    - "left-aligned oversized statement"
    - "stacked short phrases with varied scale"
implementation:
  semantic_html: "Use one h1 and meaningful HTML text; avoid image-based typography."
  css_approach: "Use fluid type, balanced wrapping, and max-width controls; avoid forced line breaks that fail on mobile."
  javascript: "Use minimal browser-native JavaScript only for the essential preview state; provide a static default."
  optional_dependencies: []
  performance_notes:
    - "No external images, fonts, packages, or frameworks."
responsive:
  desktop: "Let the statement dominate a broad uncluttered canvas."
  tablet: "Adjust line length and font size while preserving hierarchy."
  mobile: "Use natural wrapping and moderate scale; prevent clipping and horizontal scroll."
  behavior_changes:
    - "Reflow content rather than shrinking a desktop canvas."
accessibility:
  keyboard: "Use native focusable links and buttons with visible focus styles."
  semantics: "Use one h1 and meaningful HTML text; avoid image-based typography."
  motion: "No essential information depends on motion; respect prefers-reduced-motion."
  contrast: "Verify contrast against the final brand palette and any imagery."
provenance:
  references:
    - name: "Curated design reference"
      url: "https://www.awwwards.com/"
      captured_at: "2026-10-31"
      evidence: "Secondary source documenting recurring homepage or product-hero approaches."
      notes: "Inspect live examples before attributing source-specific details."
  evidence:
    - "The cited source documents examples from the broader composition family."
    - "The demo is an original abstraction rather than a reproduction."
  inferences:
    - "The principle and suitability guidance are reusable design interpretations."
  limitations:
    - "No exact source measurements, breakpoints, conversion outcomes, or implementation technologies are asserted."
  originality_notes: "Use original copy, brand identity, and owned or licensed assets."
lifecycle:
  status: implemented
  created_at: "2026-10-31"
  updated_at: "2026-10-31"
  validated_at:
  maintainer_notes: "Source review only; browser and assistive-technology checks outstanding."
```

## Design rationale

The statement is the brand's first impression. It depends on strong language and cannot disguise an unclear proposition.

## Implementation notes

The standalone demo uses semantic HTML and local CSS. No external assets or build step are required.

## Variants and trade-offs

1. **Centered poster-like statement.** Choose based on the content hierarchy and audience.
2. **left-aligned oversized statement.** Choose based on the content hierarchy and audience.
3. **stacked short phrases with varied scale.** Choose based on the content hierarchy and audience.

## Validation

Runnable demo: [`examples/typographic-brand-statement/index.html`](../../examples/typographic-brand-statement/index.html). Lifecycle remains `implemented` until browser and accessibility checks pass.
