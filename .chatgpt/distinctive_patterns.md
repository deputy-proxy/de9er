# Distinctive Patterns

## Purpose

Identify the **distinctive design patterns** in a supplied reference that are worth remembering as reusable inspiration.

This is deliberately narrower than Reference DNA.

Reference DNA describes the reference broadly. This prompt identifies the small set of patterns that make the reference visually or experientially distinctive, separates them from generic web conventions, and explains how they could inspire another design without copying the source.

## Input

Use any available combination of:
- URL
- screenshots
- DOM / HTML
- CSS
- extracted assets
- Reference DNA
- human notes about what they liked or disliked

Prefer observed evidence over assumptions.

## Instructions

### 1. Identify signature patterns

Find patterns that are:
- visually distinctive
- structurally distinctive
- typographically distinctive
- compositional
- interaction-related
- related to the relationship between content and space

A pattern should be specific enough that another designer could recognize it.

Bad:
- "Modern layout"
- "Clean typography"
- "Good spacing"

Good:
- "Oversized display type is allowed to cross the boundary between adjacent sections."
- "Horizontal rules become a recurring structural device rather than decoration."
- "Images appear as occasional editorial interruptions instead of repeated card thumbnails."

### 2. Identify supporting patterns

These reinforce the visual language but are not necessarily signature characteristics.

### 3. Identify generic patterns

Explicitly separate common web conventions from genuinely distinctive characteristics.

Examples:
- standard CTA buttons
- conventional sticky navigation
- ordinary responsive grid
- common card patterns

Do not pretend generic patterns are unique.

### 4. Identify reusable principles

Translate each distinctive pattern into an abstract design principle.

Example:

Observed:
"Large headline overlaps the lower edge of the hero."

Principle:
"Allow typography to create controlled spatial overlap between sections."

The principle should be reusable without copying the reference.

### 5. Identify borrowing opportunities

For each strong pattern, describe where it could potentially be useful:
- typography
- hero
- section transitions
- navigation
- content presentation
- imagery
- interaction
- page architecture

Do not prescribe that it must be used.

### 6. Identify copying risks

Explain when a pattern is so closely associated with the source that direct reproduction would make a new design derivative.

The goal is to preserve the principle while encouraging independent expression.

### 7. Incorporate human assessment

If the user explicitly says:
- "I like this"
- "I hate this"
- "borrow this"
- "avoid this"

record that separately.

Never infer human preference from the fact that a reference was supplied.

## Required output

Return **valid YAML only**, using this structure:

```yaml
distinctive_patterns:
  reference_id:
  reference_name:

  signature:
    - id:
      name:
      category:
      description:
      evidence:
      reusable_principle:
      useful_for:
      borrowing_risk:

  supporting:
    - id:
      name:
      category:
      description:
      evidence:
      reusable_principle:
      useful_for:

  generic:
    - pattern:
      category:
      reason_generic:

  human_assessment:
    liked:
    disliked:
    explicitly_borrow:
    explicitly_avoid:

  synthesis:
    strongest_principles:
    patterns_to_reinterpret:
    patterns_to_avoid_copying:
```

## Quality rules

- Prefer 3-8 signature patterns over a long catalog.
- Do not confuse complexity with distinctiveness.
- A pattern is valuable because it changes perception or composition, not because it uses unusual CSS.
- Separate observed pattern from abstract principle.
- Avoid copying source-specific text, imagery, or proprietary assets.
- Do not assign an overall quality score.
- Do not rank the reference against other references.
- Do not generate the final site's design.
