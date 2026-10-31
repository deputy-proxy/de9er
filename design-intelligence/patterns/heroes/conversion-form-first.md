# Conversion form-first hero

```yaml
schema_version: "1.0"
id: conversion-form-first
name: "Conversion form-first hero"
category: heroes
summary: "A focused proposition shares the first screen with a short form that lets visitors begin the intended conversion immediately."
principle: "When the next step is simple and intent is high, reduce friction by placing the smallest useful form beside the explanation."
characteristics:
  composition: balanced
  density: low
  typography: neutral
  imagery: none
  geometry: restrained
  motion: static
  alignment: left
suitability:
  audiences:
    - "Service bookers"
    - "prospective students"
    - "event registrants"
    - "qualified leads"
  contexts:
    - "Booking pages"
    - "consultation requests"
    - "event registration"
    - "quote requests"
  objectives:
    - "Capture qualified intent"
    - "reduce steps to the primary action"
  good_when:
    - "Conversion needs very few fields"
    - "visitor understands what happens after submission"
  avoid_when:
    - "Visitor needs substantial education first"
    - "form requires sensitive or lengthy information"
structure:
  regions:
    - "Short proposition"
    - "compact form panel"
    - "privacy or follow-up explanation"
  content_slots:
    - "Outcome headline"
    - "expectation"
    - "minimum fields"
    - "submit action"
    - "privacy note"
  spatial_relationships:
    - "Form is distinct but not louder than promise"
    - "fields follow a logical sequence"
    - "action names next step"
    - "trust notes sit nearby"
variants:
    - "Single-field email capture"
    - "short request form"
    - "essential date or location selector"
implementation:
  semantic_html: "Use a real form with associated labels, suitable input types, required states, and production success/error responses."
  css_approach: "Use a restrained panel with clear field spacing and visible focus; never use placeholders as labels."
  javascript: "Use minimal browser-native JavaScript only for the essential preview state; provide a static default."
  optional_dependencies: []
  performance_notes:
    - "No external images, fonts, packages, or frameworks."
responsive:
  desktop: "Use two columns with a compact form beside the proposition."
  tablet: "Widen the form beneath the proposition if columns become cramped."
  mobile: "Stack the form after the proposition; full-width controls and visible labels."
  behavior_changes:
    - "Reflow content rather than shrinking a desktop canvas."
accessibility:
  keyboard: "Use native focusable links and buttons with visible focus styles."
  semantics: "Use a real form with associated labels, suitable input types, required states, and production success/error responses."
  motion: "No essential information depends on motion; respect prefers-reduced-motion."
  contrast: "Verify contrast against the final brand palette and any imagery."
provenance:
  references:
    - name: "Curated design reference"
      url: "https://www.framer.com/blog/homepage-design-examples/"
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

This reduces friction only when the visitor is ready to act. A form placed too early feels like a demand for personal data.

## Implementation notes

The standalone demo uses semantic HTML and local CSS. No external assets or build step are required.

## Variants and trade-offs

1. **Single-field email capture.** Choose based on the content hierarchy and audience.
2. **short request form.** Choose based on the content hierarchy and audience.
3. **essential date or location selector.** Choose based on the content hierarchy and audience.

## Validation

Runnable demo: [`examples/conversion-form-first/index.html`](../../examples/conversion-form-first/index.html). Lifecycle remains `implemented` until browser and accessibility checks pass.
