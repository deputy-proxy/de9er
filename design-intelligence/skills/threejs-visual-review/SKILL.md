# Skill: Review visual quality of Three.js and WebGL work

## Purpose
Judge whether an interactive 3D experience is actually good, not merely whether the JavaScript runs.

## Review principle
A passing build, successful WebGL context, or technically correct shader is not evidence of good design. Review rendered work at real viewport sizes and through interaction states.

## Required evidence
For every candidate: initial-load screenshot at desktop and mobile; settled/idle screenshot; one screenshot per meaningful interaction state; reduced-motion screenshot; fallback screenshot with WebGL disabled/failed; browser console and network log; short motion capture; performance observations on at least one integrated or mobile-class GPU when feasible.

If the environment cannot run a real browser, mark browser validation as blocked. Never mark it validated from source inspection alone.

## Visual review gates

### A. Concept and distinctiveness
Can the visual thesis be described in one sentence? Does the scene communicate it without explanatory labels? Is it distinguishable from generic particle backgrounds, rotating primitives and stock shader demos? Is there a memorable visual signature?

### B. Composition
Is there a dominant focal point? Are silhouette, scale, camera, depth and negative space intentional? Does the scene support headline and CTA? Is the first frame composed before animation? Does it work as a still?

### C. Materials and lighting
Do surfaces read as intended? Are highlights, reflections, roughness, shadows and ambient fill coherent? Is there a meaningful environment or lighting setup? Are materials differentiated rather than sharing a default shader look?

### D. Motion and interaction
Is there an entrance, settle, idle and interaction state? Does movement have hierarchy and varied timing? Does input have a meaningful, discoverable response? Are transitions smooth, interruptible and reversible? Does motion avoid distracting from reading?

### E. Craft and integration
Do typography, DOM, images, canvas and background belong to one composition? Are texture resolution, edge quality, antialiasing and post effects controlled? Is there polish without decorative clutter? Is interaction usable on touch and keyboard?

### F. Responsive and operational quality
Is mobile independently art-directed? Are reduced motion and static fallback genuinely composed? Does it survive WebGL failure, context loss, slow network and resize? Are startup time, GPU load, memory and draw calls reasonable?

## Automatic rejection criteria
Reject and redesign if any apply:
- It is a stock-looking object/particle effect with no specific concept.
- The only motion is continuous rotation, orbiting, bobbing or random drift.
- The scene is unrelated to the brand/product or distracts from the proposition.
- It has no clear focal point or lighting/materials make the subject illegible.
- It only looks good in one desktop screenshot and collapses on mobile.
- The visual effect is inaccessible and has no static equivalent.
- It has not been run in a browser but is labelled validated.

## Review output
1. verdict: reject / revise / pass
2. strongest visual quality
3. most damaging weaknesses, ordered by impact
4. evidence inspected and gaps
5. specific art-direction changes
6. implementation changes
7. validation status

Do not soften a rejection into a pass because the code is technically impressive.
