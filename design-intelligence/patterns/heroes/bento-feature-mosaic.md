# Bento feature mosaic

```yaml
schema_version: "1.0"
id: bento-feature-mosaic
name: "Bento feature mosaic"
category: heroes
summary: >
  A modular hero arranges a primary proposition and several compact evidence or feature tiles into a unified mosaic of unequal cells.
principle: >
  Group related product capabilities into a single visual system, using tile size and content density to signal relative importance instead of presenting a flat list.
characteristics:
  composition: modular
  density: medium
  typography: technical
  imagery: mixed
  geometry: soft
  motion: subtle
  alignment: mixed
suitability:
  audiences:
  - "SaaS evaluators"
  - "platform buyers"
  - "multi-feature product audiences"
  contexts:
  - "Product launches"
  - "platform homepages"
  - "feature-rich services"
  objectives:
  - "Communicate breadth without a long feature list"
  - "Show several connected capabilities at a glance"
  good_when:
  - "The offer has a small number of distinct, related capabilities"
  - "Each tile can carry one clear idea"
  - "The mosaic supports rather than replaces the main proposition"
  avoid_when:
  - "Features are unrelated or too numerous"
  - "Every tile demands equal attention"
  - "The content needs a sequential explanation"
structure:
  regions:
  - "Headline and CTA anchor"
  - "Primary large tile with key product proof"
  - "Two or more secondary tiles with distinct supporting roles"
  content_slots:
  - "Main value proposition"
  - "Primary visual proof"
  - "Secondary capability labels"
  - "Supporting microcopy"
  spatial_relationships:
  - "One tile clearly dominates"
  - "Secondary tiles have distinct content roles"
  - "Gutters and radii are consistent"
  - "The mosaic reads as one composition, not a random card collection"
variants:
  - "One large plus two small tiles"
  - "Two-column asymmetric mosaic"
  - "Text anchor with three compact capability tiles"
implementation:
  semantic_html: "Use a section and individually titled articles or list items for distinct capabilities; avoid nested interactive controls."
  css_approach: "Use CSS Grid with explicit areas and intrinsic min-heights; use consistent gaps and avoid fixed tile heights."
  javascript: "None required for a static mosaic."
  optional_dependencies: []
  performance_notes:
    - "No external assets, fonts, scripts, or runtime dependencies are required by the demonstration."
    - "Keep decorative layers lightweight and avoid layout shifts."
responsive:
  desktop: "Use a 2- or 3-column grid with one dominant cell and supporting tiles."
  tablet: "Simplify the grid to fewer columns while preserving the dominant tile."
  mobile: "Stack tiles in semantic priority order; avoid tiny multi-column cards."
  behavior_changes:
    - "The composition reflows rather than shrinking a desktop canvas."
    - "Decorative layers may be simplified when they compete with content at narrow widths."
accessibility:
  keyboard: "All interactive elements use native focusable controls; static demonstrations require no keyboard interaction beyond links."
  semantics: "Use a section and individually titled articles or list items for distinct capabilities; avoid nested interactive controls."
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

A mosaic can communicate product breadth in one glance, but it only works when the tiles form a coherent story and have a clear hierarchy.

## Implementation notes

A four-tile fictional product overview with one dominant capability tile. The standalone example uses semantic HTML and local CSS only. It is intentionally free of external assets and build tooling.

## Variants and trade-offs

1. **One large plus two small tiles.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.
2. **Two-column asymmetric mosaic.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.
3. **Text anchor with three compact capability tiles.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.

## Validation

Runnable demonstration: [`examples/bento-feature-mosaic/index.html`](../../examples/bento-feature-mosaic/index.html)

Lifecycle remains `implemented`, not `validated`, until the responsive and accessibility checks are performed in a browser.
