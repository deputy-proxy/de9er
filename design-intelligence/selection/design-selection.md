# Design pattern selection

## Purpose
Select a coherent set of design patterns for a specific website brief. The goal is not to maximize the number of patterns used; it is to make deliberate, explainable design decisions.

## Inputs
- audience, positioning and primary objective
- content inventory and proof available
- chosen visual direction
- brand constraints, assets and technical constraints
- viewport and accessibility requirements

## Selection process
1. Translate the brief into design needs: what must the first screen communicate, what evidence is required, and what action must users take?
2. Choose a visual direction before selecting individual components.
3. Retrieve candidates by audience, context, objective, content type and suitability.
4. Read each candidate's good_when and avoid_when conditions.
5. Compare materially different compositions when the library contains relevant alternatives.
6. Choose one dominant hero pattern. Add a secondary pattern only when it contributes a distinct job.
7. Adapt to real content and available assets; never invent testimonials, metrics, awards or imagery.
8. Record selected pattern IDs, rationale, rejected alternatives, assumptions and required adaptations.
9. Validate the complete page, not just each pattern in isolation.

## WebGL decision gate
Before selecting Three.js, answer:
- What specific product truth, brand idea or story benefits from real-time 3D?
- Would a DOM image, CSS, SVG, GSAP or a 2D shader achieve the result better?
- Is the desired experience an authored object, DOM-linked media effect, procedural world, spatial narrative, interactive instrument, atmosphere or hybrid composition?
- What is the visual thesis, focal point, material language, camera, lighting and motion choreography?
- What meaningful input does the visitor have, if any?
- What is the mobile composition and static fallback?
If these cannot be answered, do not select Three.js yet.

## Initial hero pattern index

| Pattern ID | Best-fit signal | Main caution |
|---|---|---|
| editorial-type-led | Language is the strongest asset. | Avoid if the offer needs a visual explanation. |
| split-screen-value | One visual directly supports a concise offer. | Avoid unrelated decorative imagery. |
| product-ui-stage | A representative interface makes software tangible. | Simplify complex UI for mobile. |
| immersive-image-overlay | A strong owned or licensed image creates context. | Preserve text contrast. |
| asymmetric-art-directed | The brand supports expressive art direction. | Preserve logical reading order. |
| bento-feature-mosaic | A few related capabilities need a hierarchical overview. | Avoid equal-weight tile clutter. |
| proof-first-hero | Verifiable evidence reduces a trust barrier. | Never fabricate or decontextualize proof. |
| conversion-form-first | Intent is high and conversion needs few fields. | Do not demand data before explaining value. |
| typographic-brand-statement | The brand has a concise point of view. | Do not disguise a vague offer. |
| interactive-product-preview | One interaction demonstrates meaningful behavior. | It must work with keyboard and touch. |

## Initial interaction pattern index

| Pattern ID | Best-fit signal | Main caution |
|---|---|---|
| team-profile-carousel | A small team benefits from one focused profile at a time. | Avoid for large directories or when visitors need to compare many people simultaneously. |

## Fit dimensions
Consider audience and context, objective and information hierarchy, content and asset fit, visual-direction compatibility, responsiveness, accessibility, performance, implementation complexity and originality.

Do not invent numerical scores unless the project explicitly needs a scoring model.

## Combination rules
- One dominant focal point per viewport unless the concept intentionally creates controlled tension.
- Avoid repeating the same composition in every section.
- Use variation with a consistent underlying grid, typography, color and spacing system.
- Motion must clarify, guide or enrich; it must not obstruct reading or interaction.
- Never combine patterns merely because each looks attractive in isolation.
- A pattern's avoid-when conditions override general suitability.
- Reject generic 3D ornaments that have no relationship to the offer, content or interaction.

## Required selection output
Return the visual direction and rationale; selected pattern IDs and intended placement; each pattern's role; how patterns relate; rejected alternatives; responsive adaptations; accessibility/performance risks; and unresolved assumptions.
