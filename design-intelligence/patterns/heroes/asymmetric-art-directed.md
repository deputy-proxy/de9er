# Asymmetric art-directed hero

```yaml
schema_version: "1.0"
id: asymmetric-art-directed
name: "Asymmetric art-directed hero"
category: heroes
summary: >
  A deliberately unbalanced composition uses offset text, image, and graphic regions to create a distinctive visual rhythm while retaining a clear reading order.
principle: >
  Use controlled asymmetry to create visual character; balance should come from hierarchy, scale, and whitespace rather than mirroring every region.
characteristics:
  composition: asymmetric
  density: medium
  typography: expressive
  imagery: layered
  geometry: expressive
  motion: moderate
  alignment: mixed
suitability:
  audiences:
  - "Creative studios"
  - "design-led brands"
  - "cultural projects"
  - "premium independent products"
  contexts:
  - "Agency sites"
  - "portfolios"
  - "campaigns"
  - "brand launches"
  objectives:
  - "Signal a distinctive creative identity"
  - "Make a memorable first impression without sacrificing comprehension"
  good_when:
  - "The brand can support a strong visual point of view"
  - "Assets have varied shapes or aspect ratios"
  - "The audience expects expressive art direction"
  avoid_when:
  - "The brand needs a conservative or highly familiar interface"
  - "The content has no clear hierarchy"
  - "The layout relies on overlap that breaks at narrow widths"
structure:
  regions:
  - "Minimal navigation"
  - "Primary text block offset from the main visual"
  - "One dominant image or graphic"
  - "Secondary accent object or metadata"
  content_slots:
  - "Short headline"
  - "One-sentence explanation"
  - "Primary action"
  - "Dominant visual"
  - "Optional secondary visual or label"
  spatial_relationships:
  - "Primary and secondary elements use different scales"
  - "Visual weight is distributed diagonally or across unequal columns"
  - "Overlaps are intentional and do not obscure content"
  - "The reading order remains independent of visual placement"
variants:
  - "Text high-left with visual low-right"
  - "Large visual crop with a narrow text rail"
  - "Layered objects around a stable central message"
implementation:
  semantic_html: "Keep DOM order aligned with the intended reading order; do not use CSS positioning to create a misleading sequence."
  css_approach: "Use CSS Grid areas and relative positioning for art direction; keep overlaps inside a bounded container and provide a stacked fallback."
  javascript: "None required. Motion should not be necessary to understand the composition."
  optional_dependencies: []
  performance_notes:
    - "No external assets, fonts, scripts, or runtime dependencies are required by the demonstration."
    - "Keep decorative layers lightweight and avoid layout shifts."
responsive:
  desktop: "Use a broad canvas with offset regions and one dominant focal object."
  tablet: "Reduce overlap and bring elements closer to a conventional grid."
  mobile: "Collapse into a single column and convert decorative overlaps into normal flow."
  behavior_changes:
    - "The composition reflows rather than shrinking a desktop canvas."
    - "Decorative layers may be simplified when they compete with content at narrow widths."
accessibility:
  keyboard: "All interactive elements use native focusable controls; static demonstrations require no keyboard interaction beyond links."
  semantics: "Keep DOM order aligned with the intended reading order; do not use CSS positioning to create a misleading sequence."
  motion: "No essential information depends on motion. Respect prefers-reduced-motion for any future animation."
  contrast: "Choose text and control colors against their actual surfaces; verify contrast after brand colors and imagery are selected."
provenance:
  references:
    - name: "Awwwards: Design reference overview"
      url: "https://www.awwwards.com/"
      captured_at: "2026-10-31"
      evidence: "A design-award and inspiration archive used as a broad source for expressive, editorial, and immersive web compositions; individual implementations must be inspected before attributing details."
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

Asymmetry communicates authorship and craft. Its value comes from controlled imbalance, not random decoration.

## Implementation notes

An original geometric composition with offset typography and layered CSS shapes. The standalone example uses semantic HTML and local CSS only. It is intentionally free of external assets and build tooling.

## Variants and trade-offs

1. **Text high-left with visual low-right.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.
2. **Large visual crop with a narrow text rail.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.
3. **Layered objects around a stable central message.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.

## Validation

Runnable demonstration: [`examples/asymmetric-art-directed/index.html`](../../examples/asymmetric-art-directed/index.html)

Lifecycle remains `implemented`, not `validated`, until the responsive and accessibility checks are performed in a browser.
