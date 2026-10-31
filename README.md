# Website Factory

A reusable skill library for designing, generating, reviewing, and deploying distinctive websites from ChatGPT.

## Principles
- Tailwind-first: semantic HTML5, Tailwind CSS utilities, and Vanilla JavaScript.
- No React, Next.js, Vue, Svelte, Angular, or other frontend frameworks.
- Alpine.js, GSAP, and Three.js are optional tools, used only when they solve a real problem.
- Design the audience, message, visual system, and page narrative before coding.
- Learn from references by extracting reusable principles, never by cloning.
- Accessibility, responsiveness, and performance are part of the definition of done.

## Repository map
- `.chatgpt/`: existing Reference DNA, Distinctive Patterns, and inspiration-ingestion prompts. These remain the design research layer.
- `design-intelligence/`: curated pattern knowledge, metadata schema, ingestion skills, working examples, and selection rules.
- `skills/`: core orchestration, page types, visual directions, and implementation capabilities.
- `components/`: framework-free reusable component patterns.
- `templates/vanilla-static/`: zero-build HTML/CSS/JS starter.
- `workflows/`: generation, review, iteration, and deployment procedures.

## Default stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | Tailwind CSS v4 (compiled with the CLI) |
| Logic | Vanilla JavaScript / ES modules |
| Reactive UI | Alpine.js, optional |
| Motion | GSAP, optional |
| 3D | Three.js, optional |
| Hosting | GitHub Pages via GitHub Actions |

The glossary and shared design-system UI use Tailwind CSS v4 with a small CLI build. Keep bespoke CSS for visual artwork and effects that do not map cleanly to utilities. All standalone examples load the shared Tailwind build. Use utility classes for new component and page styling; retain page-local CSS only for bespoke visual artwork, WebGL presentation, and effects that do not map cleanly to utilities. Both starter templates are utility-first and contain no page-specific layout stylesheet. Generated client websites belong in separate repositories, not here.

## Design preview gallery
The searchable glossary and all standalone pattern demos are published through [GitHub Pages](https://deputy-proxy.github.io/de9er/). The Pages workflow publishes the glossary, standalone example pages, and each example’s local CSS/JS assets. The hero examples gallery embeds the actual standalone pages for live previews; it does not synthesize generic mockups. Internal prompts, skills, pattern research, and other repository files are not included in the published artifact. Pattern documentation links return to this repository.

## Start
1. Read [Website Factory core skill](skills/core/website-factory/SKILL.md).
2. Choose a page type from [skills/page-types](skills/page-types/README.md).
3. Read [Design Intelligence](design-intelligence/README.md) and its [pattern selection rules](design-intelligence/selection/design-selection.md).
4. Choose a visual direction from [design systems](skills/design-systems/README.md).
5. Start from [Vanilla Static](templates/vanilla-static/README.md).
6. Follow [generate](workflows/generate.md), [review](workflows/review.md), and [deploy](workflows/deploy.md).
