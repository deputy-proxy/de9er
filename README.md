# Website Factory

A reusable skill library for designing, generating, reviewing, and deploying distinctive websites from ChatGPT.

## Principles
- Vanilla-first: semantic HTML5, modern CSS, and Vanilla JavaScript.
- No React, Next.js, Vue, Svelte, Angular, or other frontend frameworks.
- Alpine.js, GSAP, and Three.js are optional tools, used only when they solve a real problem.
- Design the audience, message, visual system, and page narrative before coding.
- Learn from references by extracting reusable principles, never by cloning.
- Accessibility, responsiveness, and performance are part of the definition of done.

## Repository map
- `.chatgpt/`: existing Reference DNA, Distinctive Patterns, and inspiration-ingestion prompts. These remain the design research layer.
- `skills/`: core orchestration, page types, visual directions, and implementation capabilities.
- `components/`: framework-free reusable component patterns.
- `templates/vanilla-static/`: zero-build HTML/CSS/JS starter.
- `workflows/`: generation, review, iteration, and deployment procedures.

## Default stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JavaScript / ES modules |
| Reactive UI | Alpine.js, optional |
| Motion | GSAP, optional |
| 3D | Three.js, optional |
| Hosting | Vercel via GitHub integration |

No build step, package manager, or bundler for a simple static site unless a concrete requirement justifies it. Generated client websites belong in separate repositories, not here.

## Start
1. Read [Website Factory core skill](skills/core/website-factory/SKILL.md).
2. Choose a page type from [skills/page-types](skills/page-types/README.md).
3. Choose a visual direction from [design systems](skills/design-systems/README.md).
4. Start from [Vanilla Static](templates/vanilla-static/README.md).
5. Follow [generate](workflows/generate.md), [review](workflows/review.md), and [deploy](workflows/deploy.md).
