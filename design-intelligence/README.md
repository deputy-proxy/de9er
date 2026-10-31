# Design Intelligence Library

A curated, implementation-aware knowledge base for selecting and adapting design patterns. It complements the reference-analysis prompts in `.chatgpt/`: analysis describes evidence from a source; this library stores independently reusable design knowledge.

## Principles
- Store principles, not screenshots masquerading as knowledge.
- Separate observed evidence, interpretation, and reusable abstraction.
- Never clone source copy, proprietary assets, or complete page designs.
- Every pattern has structured metadata, implementation guidance, and a runnable example.
- Prefer a small, coherent set of patterns over indiscriminate combinations.
- Keep implementation Vanilla-first: HTML, CSS, and browser-native JavaScript.

## Structure
- `schema/pattern.schema.yaml`: canonical pattern record contract.
- `patterns/`: reusable patterns grouped by category.
- `visual-directions/`: broader visual-language descriptors.
- `composition-recipes/`: coherent page-level combinations.
- `references/`: source provenance and links.
- `selection/`: retrieval and combination rules.
- `examples/`: runnable demonstrations.

## Ingestion
1. Capture a source with `skills/capture-reference/SKILL.md`.
2. Analyze it with `.chatgpt/reference_dna.md` and `.chatgpt/distinctive_patterns.md`.
3. Extract candidates with `skills/extract-patterns/SKILL.md`.
4. Author and implement with `skills/create-pattern/SKILL.md`.
5. Validate with `validation/checklist.md`.

## Pattern lifecycle
`candidate → analyzed → authored → implemented → validated → published`

## Initial collection
The current fifteen hero patterns are indexed in [patterns/README.md](patterns/README.md), with runnable examples under [examples/](examples/README.md). The five advanced Three.js examples use a pinned CDN module, custom geometry/shaders, responsive renderer sizing, reduced-motion handling, and CSS fallbacks. Each record documents suitability, avoid-when conditions, implementation, responsive behavior, accessibility, and provenance.

The collection is deliberately marked `implemented`, not `validated`, until browser and accessibility checks are completed. See [hero collection review](validation/hero-patterns-review.md).

## Website Factory integration
Read [selection/design-selection.md](selection/design-selection.md) after understanding the brief and before defining the visual system. Select patterns by audience, objective, content, visual direction, and constraints. Explain why each selected pattern belongs. Reject combinations that compete for attention or contradict the brand.
