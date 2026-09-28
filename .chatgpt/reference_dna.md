# Reference DNA

## Purpose

Analyze a supplied design reference and extract its **Reference DNA**: the observable visual and interaction principles that make the reference useful as inspiration.

This is an analysis prompt, not a recreation prompt. Do not redesign the reference, reproduce its copy, or infer hidden implementation details that are not supported by the available evidence.

The output must separate:
1. observable evidence,
2. interpretation,
3. reusable inspiration,
4. patterns that should not be copied.

## Input

The reference may be supplied as:
- a URL
- screenshots
- DOM / HTML
- CSS
- extracted assets
- a combination of the above

Use all supplied evidence. Prefer concrete evidence over visual guesswork.

## Instructions

### 1. Identity & provenance

Capture:
- reference name
- URL
- source type
- original URL vs analyzed URL
- capture/analyze date if available
- analysis version
- whether the reference is intended to be reusable across projects

Do not track who introduced the reference. Inspiration references in this system are assumed to be human-supplied.

### 2. Inspiration scope

Determine which dimensions the reference is useful for:
- overall visual language
- typography
- layout
- composition
- navigation
- color
- imagery
- motion
- interaction
- information architecture

For each relevant dimension, describe the degree of influence it could reasonably provide: low, medium, or high.

Do not assign an overall quality score.

### 3. Typography

Describe observable typography characteristics:
- primary and secondary family, only when identifiable
- serif/sans/mono or other category
- display character
- body character
- weight range
- display scale
- contrast
- tracking
- line-height
- capitalization
- hierarchy
- heading/body relationship

Do not invent exact font names when they cannot be established from evidence.

### 4. Layout

Describe:
- content width
- alignment
- grid structure
- columns
- gutters
- density
- whitespace
- section rhythm
- container behavior
- responsive behavior when evidence exists

### 5. Composition

Describe:
- hero composition
- focal point
- section composition
- visual rhythm
- asymmetry
- visual tension
- repetition vs variation
- relationship between text, media, and empty space

### 6. Color

Describe:
- dominant background
- secondary surfaces
- foreground
- muted colors
- accent colors
- contrast
- saturation
- light/dark behavior
- whether color is structural, decorative, or functional

Use approximate descriptions or values only when supported by evidence.

### 7. Geometry

Describe:
- corner-radius character
- borders
- shadows
- surface treatment
- shapes
- separators
- strokes
- other recurring geometry

### 8. Imagery

Describe:
- role of imagery
- visual style
- crop behavior
- aspect ratios
- treatment
- frequency
- relationship to typography/layout
- whether imagery acts as content, atmosphere, or interruption

### 9. Motion

Describe only observable or supplied evidence:
- motion intensity
- transitions
- hover behavior
- scroll behavior
- entrance behavior
- parallax or other effects
- approximate timing/easing when technically observable

### 10. Distinctive design characteristics

Identify the visual principles that make this reference recognizable or particularly useful as inspiration.

Keep these at the level of design principles, not copied implementation details.

### 11. Human assessment

If the user has supplied likes, dislikes, or explicit borrowing instructions, preserve them separately from your own analysis.

Do not invent human preferences.

### 12. Design axes

Summarize the reference using normalized qualitative axes such as:
- typography: editorial / neutral / technical / expressive / etc.
- density: sparse / low / medium / high / dense
- composition: symmetrical / balanced / asymmetric / fragmented
- geometry: soft / restrained / sharp / expressive
- color: monochrome / restrained / vibrant / etc.
- motion: static / subtle / moderate / expressive

Use the vocabulary that best describes the evidence. Do not force the reference into predefined labels when they are inaccurate.

### 13. Technical evidence

Record available evidence:
- viewport(s)
- pages captured
- DOM captured
- CSS captured
- screenshots available
- assets available
- identifiable technologies
- measurable values such as content width, spacing, border radius, or font sizes when actually observed

Do not claim technical facts that were not observed.

## Required output

Return **valid YAML only**, using this structure:

```yaml
inspiration:
  id:
  name:
  url:

  source:
    added_at:
    captured_at:
    analysis_version:

  classification:
    type:
    reusable:

  scope:
    overall:
    typography:
    layout:
    composition:
    navigation:
    color:
    imagery:
    motion:
    interaction:
    information_architecture:

  reference_dna:
    typography:
      primary_family:
      secondary_family:
      display_character:
      body_character:
      weight_range:
      display_scale:
      contrast:
      tracking:
      line_height:
      capitalization:
      hierarchy:

    layout:
      container_width:
      alignment:
      grid:
      columns:
      gutter:
      density:
      whitespace:
      section_rhythm:
      responsive_behavior:

    composition:
      hero:
      focal_point:
      section_pattern:
      asymmetry:
      visual_tension:
      repetition_vs_variation:

    color:
      dominant:
      secondary:
      foreground:
      muted:
      accent:
      contrast:
      saturation:
      theme_behavior:

    geometry:
      corner_radius:
      borders:
      shadows:
      surfaces:
      shapes:
      separators:

    imagery:
      role:
      style:
      crop:
      aspect_ratio:
      treatment:
      frequency:
      relationship_to_layout:

    motion:
      intensity:
      transitions:
      scroll:
      entrance:
      hover:
      other_effects:

  design_axes:
    typography:
    density:
    composition:
    geometry:
    color:
    motion:

  technical_capture:
    viewport:
    pages_captured:
    dom_captured:
    css_captured:
    screenshots:
    assets:
    technologies:
    measurable_values:

  evidence_notes:
    confirmed:
    inferred:
    unknown:
```

### Quality rules

- Be specific and evidence-based.
- Never fabricate exact values.
- Keep evidence and inference distinguishable.
- Do not turn the analysis into praise or criticism.
- Do not reproduce substantial copyrighted copy from the reference.
- Do not prescribe the final design of the new project.
- The result must be useful to another designer/agent that has never seen the original reference.
