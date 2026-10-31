# Editorial type-led hero

```yaml
schema_version: "1.0"
id: editorial-type-led
name: "Editorial type-led hero"
category: heroes
summary: >
  A text-dominant opening in which a large headline and carefully paced supporting copy establish the subject before imagery or interface detail appears.
principle: >
  When the proposition itself is the strongest asset, give it the dominant visual role and let secondary information behave like editorial metadata rather than competing marketing blocks.
characteristics:
  composition: asymmetric
  density: sparse
  typography: editorial
  imagery: none
  geometry: restrained
  motion: static
  alignment: left
suitability:
  audiences:
  - "Publishers"
  - "consultancies"
  - "cultural organizations"
  - "founders with a distinctive point of view"
  contexts:
  - "Editorial sites"
  - "thought leadership"
  - "specialist services"
  - "portfolio introductions"
  objectives:
  - "Communicate a differentiated point of view"
  - "Establish tone and subject quickly"
  good_when:
  - "The offer can be explained in a memorable sentence"
  - "Brand voice and expertise are meaningful differentiators"
  - "Imagery would distract from the central claim"
  avoid_when:
  - "The offer depends on seeing a physical product"
  - "The proposition is unfamiliar and needs an explanatory visual"
  - "The headline would become vague without supporting context"
structure:
  regions:
  - "Compact navigation or masthead"
  - "Optional eyebrow or category label"
  - "Large headline occupying the primary column"
  - "Short explanatory paragraph"
  - "One primary action and optional text link"
  - "Optional small metadata or issue marker"
  content_slots:
  - "Category label"
  - "Headline"
  - "Supporting statement"
  - "Primary CTA"
  - "Secondary link or metadata"
  spatial_relationships:
  - "Headline is the visual anchor and is constrained to a deliberate line length"
  - "Supporting copy sits close enough to read as one message unit"
  - "Actions follow the explanation rather than interrupting the headline"
  - "Open space protects the headline from unrelated decoration"
variants:
  - "Pure typography with no image"
  - "Editorial split with a narrow secondary column for metadata"
  - "Headline paired with a small supporting portrait or artifact"
implementation:
  semantic_html: "Use a single h1, paragraph, and clearly named links or buttons inside main; keep metadata in a p or list."
  css_approach: "Use a constrained text measure, fluid type via clamp(), tight display leading, and generous surrounding space. Avoid arbitrary decorative cards."
  javascript: "None required."
  optional_dependencies: []
  performance_notes:
    - "No external assets, fonts, scripts, or runtime dependencies are required by the demonstration."
    - "Keep decorative layers lightweight and avoid layout shifts."
responsive:
  desktop: "Keep the text block in a defined column with generous negative space; optional metadata may occupy a narrow adjacent rail."
  tablet: "Reduce headline scale fluidly and preserve the hierarchy; metadata can move below the text block."
  mobile: "Use a single column, preserve natural reading order, and prevent display type from forcing awkward single-word lines."
  behavior_changes:
    - "The composition reflows rather than shrinking a desktop canvas."
    - "Decorative layers may be simplified when they compete with content at narrow widths."
accessibility:
  keyboard: "All interactive elements use native focusable controls; static demonstrations require no keyboard interaction beyond links."
  semantics: "Use a single h1, paragraph, and clearly named links or buttons inside main; keep metadata in a p or list."
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

The layout treats the proposition as content worth reading, not as a label attached to a hero image. It works when verbal positioning carries the brand.

## Implementation notes

A typographic editorial opening with issue metadata and a restrained text action. The standalone example uses semantic HTML and local CSS only. It is intentionally free of external assets and build tooling.

## Variants and trade-offs

1. **Pure typography with no image.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.
2. **Editorial split with a narrow secondary column for metadata.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.
3. **Headline paired with a small supporting portrait or artifact.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.

## Validation

Runnable demonstration: [`examples/editorial-type-led/index.html`](../../examples/editorial-type-led/index.html)

Lifecycle remains `implemented`, not `validated`, until the responsive and accessibility checks are performed in a browser.
