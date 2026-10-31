# Skill: Capture a design reference

## Goal
Create an evidence-based capture record for a supplied website or visual reference. This skill gathers evidence; it does not judge quality, choose a design for the destination project, or copy the source.

## Inputs
- required: source URL or supplied screenshot/file
- optional: project context, target viewport(s), specific areas of interest, explicit user likes/dislikes/borrowing instructions

## Procedure
1. Resolve the canonical source URL where available. Record redirects separately; do not silently replace the supplied URL.
2. Identify what can actually be inspected: live page, screenshot, DOM, CSS, assets, interaction states, and viewport dimensions.
3. Capture the initial viewport and relevant page sections. If possible, inspect desktop and mobile states. Record viewport dimensions.
4. Inspect key states only when relevant: navigation open/closed, hover/focus, sticky behavior, menus, tabs, accordions, forms, and transitions.
5. Record observable structure: section order, content width, grid, alignment, spacing rhythm, typography hierarchy, image crop, and visual focal points.
6. Record technical evidence only when directly observed. Do not infer a framework, font, breakpoint, animation library, or CSS value from appearance alone.
7. Separate facts, interpretations, and unknowns.
8. Preserve explicit human assessment verbatim or as a concise faithful summary in a separate field. Never infer preference from the fact that a reference was supplied.
9. Save a source record using the structure below.

## Capture record
```yaml
reference:
  id: stable-kebab-case-id
  name:
  supplied_url:
  canonical_url:
  captured_at:
  viewports:
    - width:
      height:
  evidence_collected:
    screenshots: []
    dom:
    css:
    assets: []
    interaction_states: []
  observations:
    structure: []
    typography: []
    composition: []
    imagery: []
    color: []
    motion: []
  confirmed_facts: []
  interpretations: []
  unknowns: []
  human_assessment:
    liked: []
    disliked: []
    explicitly_borrow: []
    explicitly_avoid: []
  limitations: []
```

## Output
- the completed YAML capture record
- concise list of evidence gaps
- next action: run the existing Reference DNA and Distinctive Patterns prompts

## Guardrails
- Do not reproduce substantial copyrighted copy.
- Do not download or retain proprietary assets unless the user has the right to use them and explicitly requests it.
- Do not fabricate observations from inaccessible pages.
- Do not create a pattern record at this stage.
