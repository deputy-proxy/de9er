# Split-screen value proposition

```yaml
schema_version: "1.0"
id: split-screen-value
name: "Split-screen value proposition"
category: heroes
summary: >
  A balanced two-region hero pairs a concise value proposition with one focused visual that explains, contextualizes, or makes the offer tangible.
principle: >
  Separate explanation from demonstration, then give each a clear region so visitors can scan the claim and inspect its supporting visual without competing focal points.
characteristics:
  composition: balanced
  density: low
  typography: neutral
  imagery: contained
  geometry: restrained
  motion: static
  alignment: mixed
suitability:
  audiences:
  - "SaaS buyers"
  - "professional services clients"
  - "education customers"
  - "consumer product shoppers"
  contexts:
  - "Product landing pages"
  - "service introductions"
  - "campaign pages"
  objectives:
  - "Explain an offer and show what it looks like"
  - "Move visitors toward a primary action"
  good_when:
  - "A single visual directly supports the claim"
  - "The proposition is short enough to scan"
  - "The visual and text can be understood independently"
  avoid_when:
  - "The visual is merely decorative or unrelated"
  - "There are several equally important products to explain"
  - "The copy needs a wide measure or complex comparison"
structure:
  regions:
  - "Shared navigation"
  - "Text region with eyebrow, headline, explanation, and action"
  - "Visual region containing one product, person, or explanatory artifact"
  content_slots:
  - "Audience or category cue"
  - "Value proposition"
  - "Supporting explanation"
  - "Primary CTA"
  - "Single proof visual"
  spatial_relationships:
  - "Text and visual form two distinct but related regions"
  - "The headline remains the first or co-first point of attention"
  - "The visual is sized to support rather than overpower the message"
  - "The CTA remains adjacent to the explanatory copy"
variants:
  - "Text left and visual right"
  - "Visual left and text right for image-led brands"
  - "Unequal split with a narrow copy rail and larger demonstration area"
implementation:
  semantic_html: "Use a section with a text group and a figure; provide useful alternative text for informative imagery and empty alt for decoration."
  css_approach: "Use CSS Grid with minmax() columns, intrinsic sizing, and a deliberate gap. Avoid fixed heights that crop content."
  javascript: "None required."
  optional_dependencies: []
  performance_notes:
    - "No external assets, fonts, scripts, or runtime dependencies are required by the demonstration."
    - "Keep decorative layers lightweight and avoid layout shifts."
responsive:
  desktop: "Two columns with a deliberate ratio based on content importance, not a mandatory 50/50 split."
  tablet: "Narrow the gap and allow the visual to shrink without losing legibility."
  mobile: "Stack text before the visual by default; reverse only when the visual is essential to understand the first sentence."
  behavior_changes:
    - "The composition reflows rather than shrinking a desktop canvas."
    - "Decorative layers may be simplified when they compete with content at narrow widths."
accessibility:
  keyboard: "All interactive elements use native focusable controls; static demonstrations require no keyboard interaction beyond links."
  semantics: "Use a section with a text group and a figure; provide useful alternative text for informative imagery and empty alt for decoration."
  motion: "No essential information depends on motion. Respect prefers-reduced-motion for any future animation."
  contrast: "Choose text and control colors against their actual surfaces; verify contrast after brand colors and imagery are selected."
provenance:
  references:
    - name: "HeroGrids: Split-screen hero gallery"
      url: "https://herogrids.com/layout/split-screen/"
      captured_at: "2026-10-31"
      evidence: "A curated gallery documenting the recurring two-column hero arrangement and its balance of proposition, supporting copy, action, and visual."
      notes: "Secondary curated reference; inspect the linked examples directly before attributing source-specific details."
    - name: "Webflow: A guide to better homepage design"
      url: "https://webflow.com/blog/design-a-homepage"
      captured_at: "2026-10-31"
      evidence: "A survey of homepage examples discussing clear propositions, visual storytelling, product demonstrations, and hierarchy."
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

This is a versatile pattern because it gives the visitor both the explanation and the evidence in one viewport. It fails when the visual does not add information.

## Implementation notes

A service proposition paired with a CSS-built abstract illustration, avoiding external assets. The standalone example uses semantic HTML and local CSS only. It is intentionally free of external assets and build tooling.

## Variants and trade-offs

1. **Text left and visual right.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.
2. **Visual left and text right for image-led brands.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.
3. **Unequal split with a narrow copy rail and larger demonstration area.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.

## Validation

Runnable demonstration: [`examples/split-screen-value/index.html`](../../examples/split-screen-value/index.html)

Lifecycle remains `implemented`, not `validated`, until the responsive and accessibility checks are performed in a browser.
