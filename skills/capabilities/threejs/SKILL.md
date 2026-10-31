# Three.js, WebGL and Creative 3D Experiences

Use Three.js only when real-time 3D adds meaningful product explanation, spatial storytelling, interaction or a distinctive brand experience that cannot be achieved more simply. The renderer is not the concept.

## Mandatory workflow
Before implementation, read:
1. ../../../design-intelligence/skills/webgl-art-direction/SKILL.md
2. ../../../design-intelligence/skills/threejs-engineering/SKILL.md
3. ../../../design-intelligence/skills/threejs-visual-review/SKILL.md
4. ../../../design-intelligence/references/webgl-research.md

Do not skip art direction. Do not begin from "make a particle background" or a list of effects. Write a visual thesis, reference analysis, composition, camera, material/light language, motion choreography, interaction model, mobile composition and fallback first.

## Creative quality standard
- The first frame must be art-directed and visually compelling before animation.
- Build a distinct visual world with intentional geometry, materials, lighting, camera, depth and negative space.
- Prefer authored GLB models, designed textures, image/video surfaces or a purposeful procedural system over generic primitives.
- Motion must have designed entrance, settle, idle and interaction/transition states. Avoid constant rotation and random drift as the whole experience.
- Give interaction a purpose: reveal, transform, navigate, compare, manipulate or tell a story.
- Integrate DOM and canvas as one composition. Keep semantic content and actions in HTML.
- Use the lightest technique that creates the result. A DOM shader, depth-map relighting, CSS or GSAP may be better than a full 3D scene.
- Do not use default neon gradients, chrome, bloom, wireframes, orbiting cards or HUD decoration as substitutes for a concept.

## Engineering defaults
- Vanilla JavaScript, HTML and CSS; pinned Three.js ES modules.
- GLSL for focused custom effects; TSL/WebGPU only where materially useful and supported by a graceful fallback.
- No React Three Fiber or build tooling by default.
- Optimize authored GLB assets, textures, geometry, draw calls, shader passes and pixel ratio.
- Pause offscreen/hidden scenes, dispose GPU resources, handle context loss and adapt quality for mobile.
- Provide a static/CSS fallback for unsupported devices, reduced motion, context loss and failed module loading.
- Defer loading so WebGL never blocks core content.
- Provide keyboard/touch alternatives for meaningful interactions and never rely on hover alone.

## Mandatory review
A running renderer is not a visual-quality pass. Capture and review desktop, mobile, idle, interaction, reduced-motion and fallback states. Inspect console/network errors and performance. Reject generic-looking work even when code is technically correct. If a real browser test was not possible, mark validation blocked, not passed.

## Research sources
Use Codrops Demos Hub and Creative Hub, mesh3d.gallery, ThreeJS Resources and official Three.js examples as discovery sources. The research file records selected examples and lessons. Inspect live experiences, distinguish observation from inference, and abstract rather than copy.

## Core references
- ../../../design-intelligence/skills/webgl-art-direction/SKILL.md
- ../../../design-intelligence/skills/threejs-engineering/SKILL.md
- ../../../design-intelligence/skills/threejs-visual-review/SKILL.md
- ../../../design-intelligence/references/webgl-research.md
- https://tympanus.net/codrops/demos/
- https://www.mesh3d.gallery/
- https://threejsresources.com/showcase/
- https://threejs.org/examples/
