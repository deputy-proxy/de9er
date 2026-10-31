# Interactive product preview

```yaml
schema_version: "1.0"
id: interactive-product-preview
name: "Interactive product preview"
category: heroes
summary: "A small interaction lets visitors manipulate or switch a representative product state directly in the hero."
principle: "Let visitors experience one meaningful product behavior before asking them to imagine the full product; the interaction should teach value, not merely entertain."
characteristics:
  composition: layered
  density: medium
  typography: technical
  imagery: contained
  geometry: soft
  motion: moderate
  alignment: mixed
suitability:
  audiences:
    - "Software evaluators"
    - "tool buyers"
    - "design-conscious consumers"
  contexts:
    - "Product launches"
    - "configurable products"
    - "interactive tools"
    - "platform demonstrations"
  objectives:
    - "Demonstrate a core interaction"
    - "improve understanding through direct manipulation"
  good_when:
    - "One interaction explains a core benefit"
    - "keyboard and touch work"
    - "preview remains useful without JS"
  avoid_when:
    - "Interaction is decorative"
    - "feature requires account data or complex backend"
    - "state change is inaccessible"
structure:
  regions:
    - "Short proposition"
    - "interactive preview"
    - "labeled controls"
    - "visible result"
    - "optional reset"
  content_slots:
    - "Outcome headline"
    - "control labels"
    - "interactive state"
    - "result"
    - "fallback explanation"
  spatial_relationships:
    - "Controls and result stay connected"
    - "state is explicit"
    - "choices are bounded"
    - "headline explains why interaction matters"
variants:
    - "Tabs switching product views"
    - "configuration control changing preview"
    - "labeled before/after switch"
implementation:
  semantic_html: "Use native buttons or inputs with accessible names, state attributes, and a meaningful static fallback."
  css_approach: "Style native controls; keep state changes legible; never rely on hover alone."
  javascript: "Use minimal browser-native JavaScript only for the essential preview state; provide a static default."
  optional_dependencies: []
  performance_notes:
    - "No external images, fonts, packages, or frameworks."
responsive:
  desktop: "Place controls beside or above a generous preview."
  tablet: "Keep controls grouped and reduce secondary decoration."
  mobile: "Stack controls and preview; ensure touch targets and focus states remain usable."
  behavior_changes:
    - "Reflow content rather than shrinking a desktop canvas."
accessibility:
  keyboard: "Use native focusable links and buttons with visible focus styles."
  semantics: "Use native buttons or inputs with accessible names, state attributes, and a meaningful static fallback."
  motion: "No essential information depends on motion; respect prefers-reduced-motion."
  contrast: "Verify contrast against the final brand palette and any imagery."
provenance:
  references:
    - name: "Curated design reference"
      url: "https://screenrove.com/patterns/saas-landing-pages"
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

A meaningful interaction can make an abstract feature concrete. It must remain optional and must not block the message.

## Implementation notes

The standalone demo uses semantic HTML and local CSS. No external assets or build step are required.

## Variants and trade-offs

1. **Tabs switching product views.** Choose based on the content hierarchy and audience.
2. **configuration control changing preview.** Choose based on the content hierarchy and audience.
3. **labeled before/after switch.** Choose based on the content hierarchy and audience.

## Validation

Runnable demo: [`examples/interactive-product-preview/index.html`](../../examples/interactive-product-preview/index.html). Lifecycle remains `implemented` until browser and accessibility checks pass.
