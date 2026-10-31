# Design pattern selection

## Purpose
Select a coherent set of design patterns for a specific website brief. The goal is not to maximize the number of patterns used. The goal is to make deliberate, explainable design decisions.

## Inputs
- audience, positioning, and primary objective
- content inventory and proof available
- chosen visual direction (or competing directions to resolve)
- brand constraints, assets, and technical constraints
- viewport and accessibility requirements

## Selection process
1. **Translate the brief into design needs.** Identify what the first screen must communicate, how content needs to be understood, what evidence is required, and what actions users must take.
2. **Choose a visual direction.** Describe its principles in plain language. Do not select a direction from industry stereotypes.
3. **Retrieve candidates by fit.** Match pattern characteristics, suitability, content structure, and implementation constraints. Do not match on category alone.
4. **Compare alternatives.** For important decisions such as the hero, consider at least two materially different compositions when the library has evidence for them.
5. **Compose a system.** Select patterns that reinforce one another. Limit competing focal points, repeated treatments, and unnecessary motion.
6. **Adapt to content.** Reject patterns that require content the project does not have. Never invent testimonials, metrics, awards, or imagery.
7. **Check implementation cost.** Prefer native HTML/CSS. Add Alpine.js for small reactive state, GSAP for meaningful timelines, or Three.js only when the experience justifies the dependency and performance cost.
8. **Record the rationale.** Explain selected pattern IDs, why each fits, alternatives rejected, and any assumptions.
9. **Validate at page level.** Review the complete page, not just each pattern in isolation.

## Fit dimensions
Consider:
- audience and context fit
- objective and information hierarchy fit
- content and asset fit
- visual-direction compatibility
- responsiveness
- accessibility
- performance and implementation complexity
- originality and risk of looking derivative

Do not invent numerical scores or rankings unless a project explicitly needs a scoring model. A short evidence-based rationale is normally more useful.

## Combination rules
- One dominant focal point per viewport, unless the concept intentionally creates controlled tension.
- Avoid repeating the same composition in every section.
- Use variation with a consistent underlying grid, typography, color, and spacing system.
- Motion must clarify, guide, or enrich; it must not obstruct reading or interaction.
- Never combine patterns merely because each looks attractive in isolation.
- A pattern's avoid-when conditions override its general suitability.

## Required selection output
Return:
- visual direction and rationale
- selected patterns with IDs and intended placement
- role each pattern plays
- how the patterns relate to one another
- rejected alternatives and reasons
- responsive adaptations
- accessibility/performance risks
- unresolved assumptions
