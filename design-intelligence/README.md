# Design Intelligence Library

A curated, implementation-aware knowledge base for selecting and adapting design patterns. It complements the reference-analysis prompts in .chatgpt/: analysis describes evidence from a source; this library stores independently reusable design knowledge.

## Principles
- Store principles, not screenshots masquerading as knowledge.
- Separate observed evidence, interpretation and reusable abstraction.
- Never clone source copy, proprietary assets or complete page designs.
- Every pattern has structured metadata, implementation guidance and a runnable example.
- Prefer a small, coherent set of patterns over indiscriminate combinations.
- Keep implementation Vanilla-first: HTML, CSS and browser-native JavaScript.
- Technical validity is not visual quality. WebGL work must pass a separate art-direction and visual-review gate.

## Structure
- schema/: canonical pattern record contract.
- patterns/: reusable patterns grouped by category.
- visual-directions/: broader visual-language descriptors.
- composition-recipes/: coherent page-level combinations.
- references/: source provenance and research syntheses.
- selection/: retrieval and combination rules.
- examples/: runnable demonstrations.
- skills/: reference capture, extraction, authoring, WebGL art direction, Three.js engineering and visual review.

## Ingestion
1. Capture a source with skills/capture-reference/SKILL.md.
2. Analyze it with .chatgpt/reference_dna.md and .chatgpt/distinctive_patterns.md.
3. Extract candidates with skills/extract-patterns/SKILL.md.
4. Author and implement with skills/create-pattern/SKILL.md.
5. For WebGL, first use skills/webgl-art-direction/SKILL.md, then skills/threejs-engineering/SKILL.md, and finally skills/threejs-visual-review/SKILL.md.
6. Validate with validation/checklist.md.

## Pattern lifecycle
candidate → analyzed → authored → implemented → validated → published

## Initial collection
The current collection includes fifteen hero patterns and two About patterns, indexed in patterns/README.md with runnable examples under examples/. The five advanced hero Three.js examples and the new vinyl record carousel remain implemented but not validated. None should be treated as a validated visual reference until real-browser evidence exists.

## WebGL quality standard
A WebGL scene must begin with a visual thesis and a designed composition, not an effect name. Choose the lightest experience family that achieves the intended result: authored 3D object, DOM-linked shader media, procedural world, spatial narrative, interactive instrument, atmosphere or hybrid 2D/3D. A 2D shader or CSS/GSAP treatment may be preferable to a 3D scene.

Read references/webgl-research.md for the current gallery/source map and transferable lessons. The WebGL skills define mandatory gates for art direction, engineering and visual review.

## Website Factory integration
Read selection/design-selection.md after understanding the brief and before defining the visual system. Select patterns by audience, objective, content, visual direction and constraints. Explain why each selected pattern belongs. Reject combinations that compete for attention or contradict the brand.
