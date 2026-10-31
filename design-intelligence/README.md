# Design Intelligence Library

A curated, implementation-aware knowledge base for selecting and adapting design patterns. It complements the reference-analysis prompts in `.chatgpt/`: analysis describes evidence from a source; this library stores independently reusable design knowledge.

## Principles
- Store principles, not screenshots masquerading as knowledge.
- Separate observed evidence, interpretation, and reusable abstraction.
- Never clone source copy, proprietary assets, or complete page designs.
- Every published pattern has structured metadata, implementation guidance, and a working example.
- Prefer a small, coherent set of patterns over indiscriminate combinations.
- Keep implementation Vanilla-first: HTML, CSS, and browser-native JavaScript. Alpine.js, GSAP, and Three.js are optional and justified per pattern.

## Structure
- `schema/pattern.schema.yaml`: canonical pattern record contract and field definitions.
- `patterns/`: reusable composition and interaction patterns, grouped by category.
- `visual-directions/`: broader visual-language descriptors. These are not patterns.
- `composition-recipes/`: coherent combinations of patterns for page-level compositions.
- `references/`: source provenance and links; not a screenshot dump.
- `selection/`: retrieval and combination rules.
- `examples/`: working demonstrations for published patterns.

## Ingestion
1. Capture a source and its available evidence with `skills/capture-reference/SKILL.md`.
2. Analyze it with the existing `.chatgpt/reference_dna.md` and `.chatgpt/distinctive_patterns.md` prompts.
3. Abstract candidate patterns with `skills/extract-patterns/SKILL.md`.
4. Author and implement approved patterns with `skills/create-pattern/SKILL.md`.
5. Validate using `validation/checklist.md`.

## Pattern lifecycle
`candidate → analyzed → authored → implemented → validated → published`

A candidate is not a published pattern. Missing evidence, unclear provenance, or an untested implementation must remain visible as such.

## Categories
See [patterns/README.md](patterns/README.md) for the initial taxonomy. Categories are extensible; do not create a new one for a one-off variation.

## How Website Factory uses this library
Read [selection/design-selection.md](selection/design-selection.md) after understanding the brief and before defining the page's visual system. Select patterns by audience, objective, content, visual direction, and constraints. Explain why each selected pattern belongs. Reject combinations that compete for attention or contradict the brand.

## Adding content
Use the templates and schema. Keep each pattern independently understandable. Include a reference URL and evidence notes where applicable. The example must run without a build step unless a specific dependency is essential and documented.
