# WebGL and Three.js creative research

Research snapshot: 2026-10-31

This is a curated source map and synthesis, not a claim that every linked experience has been exhaustively tested on every device. Inspect live demos and record viewport/evidence when using a reference for a concrete project.

## Curated inspiration galleries

### Codrops
- Demos Hub: https://tympanus.net/codrops/demos/
- Creative Hub: https://tympanus.net/codrops/hub/tutorials/
- All posts: https://tympanus.net/codrops/all-posts/
- Value: technique-rich runnable experiments and detailed breakdowns. Strong subjects include DOM/WebGL image synchronization, cursor-driven shader lenses, scroll-reactive media, custom cursor trails, ASCII rendering, datamosh, glass/refraction, procedural geometry, physics and WebGPU/TSL.

### mesh3d.gallery
- https://www.mesh3d.gallery/
- Value: curated real-world interactive Three.js/WebGL websites rather than isolated code snippets. Useful for studying how 3D fits commercial brand systems and complete page experiences.
- Current featured selection includes Shopify Editions, Cyera AI Guardian, Igloo Inc., The Symphony of Vines, ORYZO AI, Shader Development Studio, HubTown and EverSwap. Treat these as leads for live inspection, not endorsements or technical claims.

### ThreeJS Resources
- https://threejsresources.com/showcase/
- Creative portfolios: https://threejsresources.com/showcase/categories/creative-portfolios
- Value: categorized real-world project discovery, including portfolio, scroll-driven, experimental and interactive work.

### Official Three.js examples
- https://threejs.org/examples/
- Value: implementation truth and a breadth map of custom BufferGeometry, instancing, GPU compute, particles, portals, raycasting, physical materials, glTF, post-processing, TSL, WebGPU, WebXR and performance studies.
- Use as technical reference, not a substitute for art direction.

## Selected Codrops case studies and transferable lessons

### The Sleepers: Atmospheric WebGL with lightweight techniques
https://tympanus.net/codrops/2026/07/10/the-sleepers-creating-an-atmospheric-webgl-experience-with-lightweight-techniques/
- Transferable ideas: texture-driven threshold reveals; shader-based vertical fog; noise-texture atmosphere; reusable environment chunks for an infinite world; authorable outline treatment.
- Lesson: strong atmosphere can come from a few coordinated, lightweight techniques rather than maximum shader complexity.

### Infinite Liquid Glass Grid
https://tympanus.net/codrops/2026/09/08/building-an-infinite-liquid-glass-grid-with-three-js-webgpu-and-tsl/
- Transferable ideas: fake rounded glass with a signed-distance function and height profile; derive normals from the height field; refract the card's own video texture; vary quality via shader taps; achieve the look in one pass without actual glass geometry.
- Lesson: understand the visual target and fake only the physical properties needed. A coherent pass can outperform a heavy physical scene.

### Scroll-Reactive 3D Gallery
https://tympanus.net/codrops/2026/03/09/building-a-scroll-reactive-3d-gallery-with-three-js-velocity-and-mood-based-backgrounds/
- Transferable ideas: depth-layered media; camera progression; per-image palette metadata; background transitions based on active visual; scroll velocity as bounded motion input; restrained grain.
- Lesson: scroll can become narrative time, with image, camera, palette and motion changing as one system.

### Scroll-Revealed WebGL Gallery
https://tympanus.net/codrops/2026/02/02/building-a-scroll-revealed-webgl-gallery-with-gsap-three-js-astro-and-barba-js/
- Transferable ideas: map DOM image bounds to WebGL planes; reveal on entry; animate clicked image into detail view; keep page transitions spatially continuous.
- Lesson: continuity between DOM and canvas can be more compelling than a standalone 3D object.

### Mouse-Following Square Lens
https://tympanus.net/codrops/2026/08/25/building-a-mouse-following-square-lens-effect-with-three-js-and-glsl/
- Transferable ideas: grayscale base image with a color image revealed through a cursor-following lens; localized distortion and RGB separation.
- Lesson: one precise, bounded interaction can be more memorable than an entire animated 3D scene.

### Custom-Shaped Cursor Trail
https://tympanus.net/codrops/2026/09/24/custom-shaped-cursor-trail/
- Transferable ideas: store cursor movement in a field/texture; use it to displace sampling coordinates; preserve sharp grid structure and blur output selectively.
- Lesson: interaction history can become a visual material, not just cursor decoration.

### Windland
https://tympanus.net/codrops/2022/04/25/case-study-windland-an-immersive-three-js-experience/
- Transferable ideas: low-poly authored world, baked lighting, geometry-node distribution, MeshSurfaceSampler, compressed GLB, selective depth of field/bloom and raycast selection.
- Lesson: designed assets, lighting and composition matter as much as runtime code. Bake static work; reserve dynamic GPU work for what must move.

### DOM-synced image distortion
https://tympanus.net/codrops/2024/07/18/how-to-create-distortion-and-grain-effects-on-scroll-with-shaders-in-three-js/
- Transferable ideas: HTML remains source of truth; WebGL planes mirror image bounds; shader uniforms receive cursor, hover, scroll velocity, image size and border radius; only visible planes update.
- Lesson: build a reusable DOM-to-WebGL bridge rather than manually positioning unrelated canvas objects.

## Synthesis: what consistently makes the work compelling
1. A singular visual thesis, not a list of effects.
2. Authored imagery, models, textures or a purposeful procedural system.
3. Camera and lighting designed like photography or cinematography.
4. A clear focal hierarchy and controlled negative space.
5. Motion that responds to input or narrative state, with a deliberate settle.
6. DOM and WebGL behaving as one visual system.
7. A few integrated techniques instead of unrelated effects stacked together.
8. Performance decisions made during art direction, not after the scene is finished.

## How to use these references
Capture the live experience and viewport before extracting a pattern. Separate observed behavior from interpretation. Extract reusable principles, never copy layouts, source code, text or proprietary assets. Record the exact interaction and its purpose. Re-check links and technical APIs before implementation.
