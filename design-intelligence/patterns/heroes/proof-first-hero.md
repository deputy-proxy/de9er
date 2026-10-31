# Proof-first hero

```yaml
schema_version: "1.0"
id: proof-first-hero
name: "Proof-first hero"
category: heroes
summary: >
  The opening leads with a concise promise and immediately places credible evidence, customer context, or a representative outcome alongside the primary action.
principle: >
  When trust is the main barrier, make the strongest verifiable proof part of the opening rather than hiding it below the fold.
characteristics:
  composition: balanced
  density: low
  typography: neutral
  imagery: contained
  geometry: restrained
  motion: static
  alignment: left
suitability:
  audiences:
  - "B2B buyers"
  - "professional service clients"
  - "education customers"
  - "high-consideration purchasers"
  contexts:
  - "Service landing pages"
  - "B2B homepages"
  - "consultancy sites"
  - "regulated or trust-sensitive categories"
  objectives:
  - "Reduce perceived risk"
  - "Support a specific claim with evidence"
  good_when:
  - "Verifiable proof exists and can be presented accurately"
  - "The audience needs reassurance before acting"
  - "The proof directly relates to the promised outcome"
  avoid_when:
  - "Evidence is weak, outdated, or not permissioned"
  - "The proof is unrelated to the offer"
  - "The design would require fabricated metrics or testimonials"
structure:
  regions:
  - "Value proposition and action"
  - "Proof region containing a quote, credential, case result, or customer context"
  - "Optional source or attribution"
  content_slots:
  - "Specific promise"
  - "Supporting explanation"
  - "Primary CTA"
  - "Verified evidence"
  - "Attribution or source"
  spatial_relationships:
  - "The promise and evidence are visible as one connected unit"
  - "Proof is visually secondary to the headline but easy to find"
  - "Attribution is adjacent to the claim"
  - "No unsupported numerical claims are introduced"
variants:
  - "Customer quote beside the headline"
  - "Case-study outcome panel"
  - "Credential or certification strip below the main message"
implementation:
  semantic_html: "Use blockquote and cite or attribution markup for quotations; label metrics and provide source context."
  css_approach: "Use a two-region grid or compact proof panel; prioritize readable type and avoid decorative dashboard chrome."
  javascript: "None required."
  optional_dependencies: []
  performance_notes:
    - "No external assets, fonts, scripts, or runtime dependencies are required by the demonstration."
    - "Keep decorative layers lightweight and avoid layout shifts."
responsive:
  desktop: "Place one strong proof unit beside or directly below the promise."
  tablet: "Keep the proof adjacent if legible; otherwise move it directly below the copy."
  mobile: "Stack promise, action, then proof; preserve attribution and context."
  behavior_changes:
    - "The composition reflows rather than shrinking a desktop canvas."
    - "Decorative layers may be simplified when they compete with content at narrow widths."
accessibility:
  keyboard: "All interactive elements use native focusable controls; static demonstrations require no keyboard interaction beyond links."
  semantics: "Use blockquote and cite or attribution markup for quotations; label metrics and provide source context."
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

A visitor who doubts the claim needs evidence before being asked to commit. This pattern is only ethical when proof is real and contextualized.

## Implementation notes

A fictional case-note layout with clearly marked sample content, not fabricated customer proof. The standalone example uses semantic HTML and local CSS only. It is intentionally free of external assets and build tooling.

## Variants and trade-offs

1. **Customer quote beside the headline.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.
2. **Case-study outcome panel.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.
3. **Credential or certification strip below the main message.** Choose this when it best supports the content hierarchy; do not select it solely for visual novelty.

## Validation

Runnable demonstration: [`examples/proof-first-hero/index.html`](../../examples/proof-first-hero/index.html)

Lifecycle remains `implemented`, not `validated`, until the responsive and accessibility checks are performed in a browser.
