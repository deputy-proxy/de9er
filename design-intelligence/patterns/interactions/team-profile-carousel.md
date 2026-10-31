# Team profile carousel

```yaml
schema_version: "1.0"
id: team-profile-carousel
name: "Team profile carousel"
category: interactions
summary: "A focused team presentation pairs a selectable list of people with one prominent profile at a time. The active profile combines identity, role, a short biography and direct contact links."
principle: "Give each person enough visual and editorial space to be memorable while keeping the full team discoverable in a compact, navigable selector."
characteristics:
  composition: layered
  density: low
  typography: mixed
  imagery: cropped
  geometry: restrained
  motion: subtle
  alignment: mixed
suitability:
  audiences:
    - "Professional services teams"
    - "Studios and agencies"
    - "Organizations introducing leadership or specialists"
  contexts:
    - "About pages"
    - "Team and leadership sections"
    - "Expert directories with a small fixed set of profiles"
  objectives:
    - "Introduce people without creating a long roster"
    - "Connect expertise to a real person"
    - "Make contact paths easy to find"
  good_when:
    - "The group is small enough to browse as one set"
    - "Each profile has a clear name, role and concise description"
    - "The active profile benefits from a large portrait or visual"
  avoid_when:
    - "Visitors need to compare many people at once"
    - "The directory is large or requires filtering"
    - "Profile content is too sparse to justify a large active panel"
structure:
  regions:
    - "Section heading and short context"
    - "Selectable team member list"
    - "Single active profile panel"
    - "Previous/next controls and position indicators"
  content_slots:
    - "Name"
    - "Role or discipline"
    - "Short biography"
    - "Portrait or owned visual"
    - "Optional social and contact links"
  spatial_relationships:
    - "The selector and active profile remain visually connected"
    - "The active profile owns the majority of the visual area"
    - "Position controls are grouped with the active panel"
    - "The selector remains available while profiles change"
variants:
  - "Vertical name list beside a large profile panel"
  - "Compact horizontal selector above the profile on mobile"
  - "Manual-only navigation without automatic progression"
  - "Grid of profiles when simultaneous comparison matters more than focus"
implementation:
  semantic_html: "Use a section with a heading, native buttons for profile selection, an article for the active profile, and real anchor elements for contact links."
  css_approach: "Use a two-column desktop layout, a single-column mobile layout, layered image gradients for legible text, and a clear active state in both selector and progress controls."
  javascript: "Use a small data array and browser-native event listeners to update the active profile. Optional timed progression must pause on focus, hover and hidden documents, and must be disabled for reduced-motion preferences."
  optional_dependencies: []
  performance_notes:
    - "No framework, build step, remote font, or external image dependency is required."
    - "Use optimized owned portraits when available; provide a stable visual fallback."
    - "Keep the active profile content in the DOM and update it without rebuilding the whole section."
responsive:
  desktop: "Place the member selector beside a large, image-led active profile."
  tablet: "Reduce the gap and panel height while retaining the two-region hierarchy where space permits."
  mobile: "Move the selector above the profile and render it as a compact row of five equal choices."
  behavior_changes:
    - "The selector changes from vertical list to horizontal strip on narrow screens."
    - "Profile controls remain visible and touch-accessible."
accessibility:
  keyboard: "All profile choices and navigation controls are native buttons. Left and right arrow keys move between profiles, and focus indicators remain visible."
  semantics: "Expose the selector as a labeled group; use aria-pressed on selected buttons and announce the active profile through a polite live region."
  motion: "Respect prefers-reduced-motion. Timed progression is disabled when reduced motion is requested and pauses during interaction."
  contrast: "Use a strong gradient behind overlaid text and verify all text and controls against the final portrait assets."
provenance:
  references:
    - name: "User-supplied React Bits team carousel reference"
      url: "https://pro.reactbits.dev/"
      captured_at: "2026-10-31"
      evidence: "Supplied rendered HTML shows a team member selector, one prominent active profile with name and role, social/contact links, and position controls."
      notes: "The supplied markup contains placeholder portrait paths and sample team identities. Exact source styling values and implementation internals are not asserted."
  evidence:
    - "The supplied reference exposes five selectable member names."
    - "The active profile includes a name, role, GitHub link and email link."
    - "A set of five position controls accompanies the active profile."
  inferences:
    - "The active profile panel is the visual focal point and the selector provides direct access to the other profiles."
    - "The demo's automatic progression is an optional adaptation, not a verified requirement of the supplied source."
    - "The source's placeholder portrait paths do not establish a production image treatment."
  limitations:
    - "The source was supplied as rendered HTML with obfuscated class names; no original component API, CSS tokens, source assets or complete source code were available."
    - "The demo uses original CSS-built portrait abstractions and fictional sample profiles rather than source assets or real people."
  originality_notes: "Recreate the interaction principle with original markup, styles and sample content. Replace demo profiles, links and portrait treatments with owned team data and assets."
lifecycle:
  status: implemented
  created_at: "2026-10-31"
  updated_at: "2026-10-31"
  validated_at:
  maintainer_notes: "Standalone vanilla HTML/CSS/JS demo added. Automated source checks completed; real-browser visual and assistive-technology validation remain outstanding."
```

## Design rationale

A team section often has a difficult trade-off: a grid gives visitors a quick overview but leaves little room for context, while a long list makes each person feel interchangeable. This pattern gives one profile the visual lead and keeps the rest of the team one action away.

The interaction should support discovery rather than hide information. The selected name, selected position marker and profile content must always agree. For larger teams, use a searchable directory or a grid instead.

## Implementation notes

The standalone example uses semantic HTML, local CSS and browser-native JavaScript. It has no framework, package manager, remote font or external image dependency. The sample uses CSS-built portrait abstractions so it works offline; replace them with optimized, owned portraits when adapting the component.

The demo advances automatically every 6.5 seconds as an optional enhancement. It pauses while the visitor hovers or focuses the component, resumes after interaction, stops while the document is hidden, and does not autoplay when reduced motion is requested. Remove timed progression when the content is important to read at the visitor's own pace.

## Variants and trade-offs

1. **Vertical selector.** Best when the profile panel is wide and the team is small.
2. **Horizontal selector.** Better on mobile or when names are short.
3. **Manual-only carousel.** Prefer when profiles contain longer biographies or the page is primarily informational.
4. **Profile grid.** Prefer when comparing people or scanning the entire group is more important than focusing on one person.

## Validation

Runnable demo: [`examples/team-profile-carousel/index.html`](../../examples/team-profile-carousel/index.html).

Lifecycle remains `implemented` until real-browser, responsive, keyboard and assistive-technology checks are recorded.
