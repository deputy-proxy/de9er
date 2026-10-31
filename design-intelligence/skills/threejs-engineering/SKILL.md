# Skill: Engineer production-quality Three.js experiences

## Purpose
Translate approved art direction into a robust, responsive, maintainable WebGL experience without sacrificing visual quality.

## Stack policy
- Default to Vanilla JavaScript, HTML and CSS with Three.js ES modules.
- Use GLSL ShaderMaterial/RawShaderMaterial for focused WebGL effects and TSL when node-based shaders or WebGPU-specific capabilities materially help.
- Use WebGPU only when warranted and provide a tested WebGL2 or static fallback where practical.
- React Three Fiber is not the default for this repository. Do not add frameworks, build systems or dependencies without a concrete need and approval.
- Pin Three.js and related addon versions together. Never mix addon versions or use a floating CDN URL.
- Prefer authored GLB assets for designed forms that primitives cannot convincingly express. Use glTF/GLB, KTX2 textures and Draco/Meshopt compression where appropriate.

## 1. Scene architecture
Separate responsibilities: Experience (lifecycle, renderer, scene, camera, resize, teardown); World (meshes, lights, environment, animation state); Interaction (pointer/touch/keyboard and raycasting); Motion (named states, timelines, easing, transitions); Assets (loading, progress, errors, disposal); Quality (device capability, pixel ratio, geometry/particle budgets and feature tiers).

Avoid one giant render-loop function. Keep scene state explicit and tunable.

## 2. Visual foundation
- Establish camera, composition, scale, clipping planes and target before adding detail.
- Use physically meaningful material choices and deliberate lighting. A material is only as good as the environment and light that reveal it.
- Use HDR environment lighting for reflective objects where appropriate; balance with controlled key/fill/rim lights.
- Tune tone mapping, exposure, output color space, texture color spaces and color management intentionally.
- Use baked lighting/shadows for static authored environments when dynamic shadows are unnecessary.
- Add post-processing only for a defined visual purpose. Each full-screen pass has measurable GPU cost.
- Treat bloom, DOF, AO, SSR, chromatic aberration, grain and motion blur as selective finishing tools, not a preset stack.

## 3. Geometry and shader craft
Choose by behavior: BufferGeometry/custom attributes for procedural forms; InstancedMesh or BatchedMesh for repeated geometry; GPU compute/ping-pong targets for large simulations when CPU updates bottleneck; SDFs for rounded shapes, masks and lens effects; vertex displacement for surface deformation; fragment shaders for material, lighting, color and screen-space effects; depth maps for 2.5D relighting/parallax; texture atlases/data textures for large per-instance state; curves/splines for paths and camera rigs; glTF clips and AnimationMixer for authored animation.

Shader requirements:
- Define coordinate spaces and units explicitly.
- Pass only necessary uniforms/attributes.
- Handle aspect ratio and texture cover/crop correctly.
- Avoid expensive noise loops and unnecessary texture samples in fragment shaders.
- Guard divisions, normalize vectors safely, clamp unstable values and avoid undefined behavior.
- Keep shader code readable and parameterized. Expose only meaningful art-direction controls.
- Validate shader compile errors on target browsers and test context restoration.

## 4. Motion system
Design motion as a sequence of states, not a perpetual loop: loading → entrance → settle → idle → interaction → transition.

Use monotonic time/delta time, not frame-count-dependent movement. Use damped interpolation/springs for pointer and camera follow. Give objects distinct but related phases. Use anticipation, acceleration, overshoot, follow-through and settle where appropriate. Use purposeful timelines (GSAP optional) for choreography and scroll-linked transitions. Avoid large idle motion while users read; the scene may become nearly still after entrance. Bound and smooth scroll/pointer velocity. Keep interactions deterministic, reversible and interruptible.

## 5. DOM and canvas integration
- Keep essential text, controls and links in semantic HTML.
- For DOM-linked media, measure element bounds and map them to camera/world coordinates; update on resize, scroll, layout shifts and font/image loading.
- Synchronize scroll transforms with one source of truth; avoid competing smooth-scroll loops.
- Preserve native DOM focus, selection, accessibility tree and touch behavior.
- Use raycasting only when a 3D object genuinely needs hit testing. Provide keyboard/touch alternatives.
- Decorative canvases must not intercept clicks intended for DOM controls.

## 6. Asset pipeline
Use original, licensed, user-supplied or permissively licensed assets. Optimize models before runtime: remove hidden geometry, merge static meshes, instance repeats, reduce material slots, bake static lighting and create LODs when useful. Compress geometry and textures; choose texture resolution by visible pixel footprint. Load critical hero assets first and lazy-load below-the-fold scenes. Show a loading state only when needed. Do not substitute low-quality primitive geometry for a model that defines the concept.

## 7. Performance and lifecycle
Cap device pixel ratio; provide adaptive quality tiers based on viewport and device capability. Set explicit budgets for draw calls, triangles, texture memory, shader passes and startup transfer. Use instancing/batching for repeats; avoid per-frame allocations and garbage. Pause when hidden/offscreen; prefer demand rendering for static scenes. Use ResizeObserver and IntersectionObserver. Dispose geometries, materials, textures, render targets, controls and renderer on teardown. Handle webglcontextlost/restored. Test integrated/mobile GPUs. Track renderer.info and memory across scene transitions.

## 8. Responsive and accessibility
Re-compose camera and object placement at mobile breakpoints; do not merely shrink desktop. Reduce render resolution, particle count, shadow quality and expensive passes on constrained devices. Support touch without hover-only affordances. Respect prefers-reduced-motion with a designed static frame or user-controlled motion. Provide pause/stop for persistent non-essential motion where appropriate. Keep text contrast independent of canvas. Mark decorative canvas aria-hidden and describe meaningful information in adjacent text.

## 9. Failure modes
Test CDN/network failure, slow assets, WebGL unavailable/context creation failure, shader compilation failure, context loss/restoration, resize/orientation/zoom, reduced motion before and during load, hidden tabs, pointer exit, touch cancel, rapid input, repeated mount/unmount and resource disposal.

## Output
- working experience in the repository's chosen stack
- concise architecture and dependency note
- measured asset/render budgets
- tested browser/device matrix
- documented fallback and known limitations
