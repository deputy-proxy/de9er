# Skill: Art-direct a WebGL experience

## Purpose
Define a memorable visual and interaction concept before choosing Three.js techniques. This skill exists to prevent technically competent but visually generic scenes.

## Non-negotiable principle
**The visual idea comes first; the renderer is a means.** A scene is not creative merely because it contains particles, shaders, reflections, or a rotating mesh. Every major visual decision must support a brand idea, product truth, story, or useful interaction.

## When to use
Use when a brief requests a Three.js/WebGL hero, immersive landing page, interactive 3D section, shader-led media treatment, scroll-driven 3D story, or a portfolio-grade browser experience.

## Phase 1: Discover the actual brief
Extract audience, brand character, product category, emotional register, the one thing the visitor should understand or feel, primary action and information hierarchy, available brand assets, intended viewport/device mix, performance budget, and whether the scene is a hero accent, product demonstration, navigable world, or main content.

Do not start with an effect name. Start with a sentence describing the visual thesis, e.g. "A precision instrument suspended in a dark photographic studio, with the interface behaving like an optical measuring device."

## Phase 2: Research references, not just effects
Inspect at least two curated creative galleries (Codrops Demos Hub / Creative Hub, mesh3d.gallery, ThreeJS Resources, Awwwards WebGL collections), two individual live experiences relevant to the brief, and one technical source (official Three.js examples/manual, WebGPU/TSL docs, or a detailed Codrops breakdown).

For each reference, inspect the live page, not just its thumbnail. Record first-screen composition and focal hierarchy; camera angle, distance, lens feel, framing and depth cues; geometry language and authored detail; material response, lighting, environment/reflections and shadow quality; palette, contrast, texture, grain and atmosphere; motion timing, anticipation, follow-through, secondary motion and idle behavior; input model; DOM typography/media relationship; loading, fallback, responsive behavior and observed performance. Separate fact from inference.

Do not copy source assets, layouts, code, or brand-specific visual signatures. Extract principles and transform them into a distinct concept.

## Phase 3: Write the art-direction brief
Before coding, specify:
1. **Concept:** one clear visual metaphor or narrative.
2. **Composition:** focal object, supporting elements, negative space, camera framing, relationship to headline and CTA.
3. **Geometry:** why the chosen form is appropriate; authored GLB, procedural mesh, instancing, curves, or image planes.
4. **Material language:** surface qualities such as matte ceramic, anodized metal, translucent resin, paper, fabric, liquid, glass, emissive; explain how light reveals them.
5. **Lighting:** key/fill/rim/environment strategy, shadow intent, exposure and tone mapping.
6. **Palette:** dominant, secondary and accent roles. Avoid default cyan/purple neon unless the brief calls for it.
7. **Camera:** projection, lens/FOV, target, depth, movement range and composition constraints.
8. **Motion choreography:** entrance, settle, idle, interaction response, transitions and exit. State what moves, why and at what relative speed.
9. **Interaction:** one primary interaction with a clear affordance and meaningful response.
10. **DOM integration:** exact placement of heading, body, actions, labels and media relative to the scene.
11. **Mobile art direction:** a deliberately composed mobile frame, not a smaller desktop canvas.
12. **Fallback:** an intentional static visual that preserves the concept if WebGL is unavailable.

## Phase 4: Choose an experience family
- **Authored object / product stage:** high-quality GLB, deliberate materials and lighting, controlled camera and hotspots.
- **DOM-linked shader media:** images/video remain semantic HTML; WebGL planes align to DOM bounds and apply transitions, distortion, depth or relighting.
- **Procedural / generative world:** custom geometry, fields, particles, terrain, fluid or TSL/GLSL systems when generative behavior is the concept.
- **Spatial narrative / scrollytelling:** authored camera path and staged scenes synchronized to scroll, with clear chapter progression.
- **Interactive instrument / toy:** direct manipulation, physics, sound or simulation where user input changes state.
- **Atmospheric environment:** a coherent place with scale, parallax, lighting, fog and secondary life.
- **Hybrid 2D/3D composition:** CSS/DOM typography and layout with bounded WebGL depth, distortion or lighting.

A 3D scene is not mandatory. If a shader on a 2D plane or CSS/GSAP produces a better result at lower cost, use that instead.

## Anti-patterns: reject by default
- A torus knot, sphere, cube, or particle cloud rotating beside generic copy without a concept.
- Random orbiting cards, decorative HUD labels, grids, rings and floating spheres added to imply sophistication.
- Default purple/cyan gradients, bloom, chrome and wireframes used as substitutes for art direction.
- Uniform constant-speed rotation or sinusoidal bobbing as the only animation.
- Generic shader distortion applied to every surface regardless of content.
- Excessive bloom, DOF, AO, chromatic aberration, grain, fog or motion blur that hides form or text.
- A scene with no focal point, scale reference, depth hierarchy or visual rest.
- Interactions that only spin an object without revealing information or changing state.
- A scene that competes with the headline or makes the CTA harder to find.
- Mobile layouts that crop the subject or leave an oversized empty canvas.

## Composition and craft checklist
One dominant focal point; intentional silhouette, scale, framing and negative space; legible material response; foreground/midground/background separation where appropriate; varied motion timing and meaningful states; coherence with typography, imagery and brand palette; a composed initial frame before animation; and a still screenshot that remains visually strong.

## Deliverables
- short art-direction brief
- annotated reference notes with source URLs and evidence boundaries
- chosen experience family and rejected alternatives
- scene storyboard or keyframe descriptions
- interaction/state diagram
- responsive composition notes
- implementation plan and performance/accessibility risks

Do not implement until the art-direction brief is specific enough that another creative developer could build the intended experience without guessing.
