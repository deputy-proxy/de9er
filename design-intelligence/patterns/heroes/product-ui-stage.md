# Product interface stage

```yaml
schema_version: "1.0"
id: product-ui-stage
name: "Product interface stage"
category: heroes
summary: >
  A hero that places a recognizable product interface or workflow demonstration in a large visual stage beneath or beside a concise product claim.
principle: >
  For software, show the shape of the experience rather than relying on abstract claims; the interface preview should substantiate the promise and make the product category legible.
characteristics:
  composition: layered
  density: medium
  typography: technical
  imagery: contained
  geometry: restrained
  motion: subtle
  alignment: centered
suitability:
  audiences:
  - "Software evaluators"
  - "team buyers"
  - "technical decision-makers"
  contexts:
  - "SaaS homepages"
  - "developer tools"
  - "workflow products"
  - "platform launches"
  objectives:
  - "Make an intangible product concrete"
  - "Show the primary workflow or output"
  good_when:
  - "The interface is a meaningful differentiator"
  - "A representative workflow can be shown without sensitive data"
  - "The product has a clear primary screen or outcome"
  avoid_when:
  - "The UI is too complex to read at hero scale"
  - "The product's value is primarily offline or service-based"
  - "A screenshot would expose private or misleading data"
structure:
  regions:
  - "Short claim and CTA"
  - "Large interface frame"
  - "Optional secondary panels or contextual labels"
  content_slots:
  - "Product category"
  - "Outcome-led headline"
  - "Primary CTA"
  - "Interface preview"
  - "Optional workflow annotations"
  spatial_relationships:
  - "The interface is the main visual proof and occupies a large contiguous stage"
  - "Secondary panels overlap only when their relationship is clear"
  - "The headline remains readable above or beside the interface"
  - "The interface crop preserves the most informative workflow"
variants:
  - "Centered interface stage below the headline"
  - "Offset interface stage beside the headline"
  - "Layered multi-window preview for multi-surface products"
implementation:
  semantic_html: "Represent the preview as a figure with a caption; if it is a real screenshot, provide an accessible text description of its key information."
  css_approach: "Build a responsive frame with CSS Grid and layered positioned panels; keep text in HTML rather than baking it into an image."
  javascript: "Static previews are preferred. Use interaction only when a real workflow can be demonstrated accessibly."
  optional_dependencies: []
  performance_notes:
    - "No external assets, fonts, scripts, or runtime dependencies are required by the demonstration."
    - "Keep decorative layers lightweight and avoid layout shifts."
responsive:
  desktop: "Give the preview enough width to communicate structure; allow secondary panels to overlap within a controlled frame."
  tablet: "Reduce the number of visible panels and keep the primary screen dominant."
  mobile: "Show one primary screen or a simplified crop; do not scale a complex desktop interface until its text becomes unreadable."
  behavior_changes:
    - "The composition reflows rather than shrinking a desktop canvas."
    - "Decorative layers may be simplified when they compete with content at narrow widths."
accessibility:
  keyboard: "All interactive elements use native focusable controls; static demonstrations require no keyboard interaction beyond links."
  semantics: "Represent the preview as a figure with a caption; if it is a real screenshot, provide an accessible text description of its key information."
  motion: "No essential information depends on motion. Respect prefers-reduced-motion for any future animation."
  contrast: "Choose text and control colors against their actual surfaces; verify contrast after brand colors and imagery are selected."
provenance:
  references:
    - name: "Screenrove: SaaS landing page examples"
      url: "https://screenrove.com/patterns/saas-landing-pages"
      captured_at: "2026-10-31"
      evidence: "A pattern gallery describing product-interface-led heroes and overlapping interface windows in SaaS landing pages."
      notes: "Secondary curated reference; inspect the linked examples directly before attributing source-specific details."
    - name: "Framer: Homepage design examples"
      url: "https://www.framer.com/blog/homepage-design-examples/"
      captured_at: "2026-10-31"
      evidence: "A survey of live homepage examples describing product-led focus, large visual demonstrations, and motion used to clarify complex offers."
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

Software is intangible. A credible interface stage reduces abstraction, but only when the preview is legible and representative.

## Implementation notes

A fictional analytics workspace constructed entirely from HTML and CSS. The standalone example uses semantic HTML and local CSS only. It is intentionally free of external assets and build tooling.

## Variants and trade-offs

1. **Centered interface stage below the headline.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.
2. **Offset interface stage beside the headline.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.
3. **Layered multi-window preview for multi-surface products.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.

## Validation

Runnable demonstration: [`examples/product-ui-stage/index.html`](../../examples/product-ui-stage/index.html)

Lifecycle remains `implemented`, not `validated`, until the responsive and accessibility checks are performed in a browser.
