# Vinyl record carousel

```yaml
schema_version: "1.0"
id: vinyl-record-carousel
name: "Vinyl record carousel"
category: about
summary: "A dimensional album rail presents a record label's catalogue as a browsable sequence of cover-and-vinyl objects, with one release brought forward at a time."
principle: "Turn a catalogue into a tactile brand story: each release is an object in a shared collection, and navigation physically advances the visitor through that collection."
characteristics:
  composition: centered
  density: low
  typography: mixed
  imagery: illustrated
  geometry: dimensional
  motion: expressive
  alignment: centered
suitability:
  audiences:
    - "Independent record labels and music publishers"
    - "Artists and creative collectives with a curated body of work"
    - "Cultural organizations presenting a small collection"
  contexts:
    - "About pages for labels, studios and creative organizations"
    - "Selected discography or release-history sections"
    - "Editorial showcases where the collection itself communicates identity"
  objectives:
    - "Make a catalogue feel tangible and worth exploring"
    - "Connect each release to its artist and identity"
    - "Give a small curated collection a memorable browsing interaction"
  good_when:
    - "The collection is finite and intentionally curated"
    - "Each item has distinctive cover artwork and a concise title/creator label"
    - "A spatial interaction adds meaning beyond a conventional list"
  avoid_when:
    - "Visitors need to scan or compare a large catalogue quickly"
    - "The content must be fully discoverable without interaction"
    - "The experience is primarily transactional or requires detailed metadata"
structure:
  regions:
    - "Editorial introduction with a concise brand statement"
    - "Optional proof points describing the organization or collection"
    - "Dimensional album rail with one selected release in focus"
    - "Selected release title and artist attribution"
    - "Previous/next and direct position controls"
  content_slots:
    - "Brand statement and supporting description"
    - "Collection metrics, when meaningful"
    - "Album artwork and release title"
    - "Artist or creator name"
    - "Optional release details or destination link"
  spatial_relationships:
    - "The 3D rail is the primary visual object and sits beneath the editorial introduction"
    - "The active release is closest to the camera and visually dominant"
    - "Adjacent releases remain visible to communicate that this is a browsable collection"
    - "The selected title and artist sit below the focal object, not inside the artwork"
    - "Controls are grouped below the rail and remain separate from the canvas"
variants:
  - "A horizontal perspective rail with covers and partially exposed vinyl discs"
  - "A flat cover-flow rail for devices where WebGL is unavailable"
  - "A manual-only carousel with direct position markers"
  - "A collection grid when simultaneous scanning matters more than immersion"
implementation:
  semantic_html: "Use a section with a heading, a labeled carousel region, native buttons for previous/next and direct selection, and a live region for the active release title and artist. Keep essential copy and controls in the DOM rather than drawing them into WebGL."
  css_approach: "Use a restrained dark stage, responsive editorial introduction, DOM-based title/artist labels, and a deliberately composed static fallback."
  javascript: "Use browser-native modules and a small data array to synchronize selection, accessible controls and the Three.js rail. Support pointer swipes and left/right arrow keys."
  optional_dependencies:
    - "Three.js 0.181.0, pinned as an ES module, is justified by the spatial depth, perspective, lighting and physical relationship between record discs and sleeves."
  performance_notes:
    - "Cap device pixel ratio and use a modest number of meshes for the finite release collection."
    - "Use generated CanvasTextures for replaceable sample sleeve artwork; production adaptations should use optimized owned artwork."
    - "Pause rendering while the rail is offscreen or the document is hidden, and dispose scene resources on page exit."
    - "Show a static cover-flow fallback when WebGL or the module CDN is unavailable."
responsive:
  desktop: "Use a wide perspective rail with the selected sleeve and vinyl disc as the focal point, with neighboring releases visible on both sides."
  tablet: "Tighten the camera framing and reduce the rail's vertical footprint while keeping the selected cover legible."
  mobile: "Recompose the rail into a shorter stage, retain the centered active release and keep touch-sized controls beneath it."
  behavior_changes:
    - "Pointer drag and touch swipe change the selected release."
    - "The canvas remains decorative to assistive technology; the DOM controls expose all selection actions."
accessibility:
  keyboard: "Previous/next buttons and direct selection markers are native buttons. Left and right arrow keys change the active release when the carousel region is focused."
  semantics: "The rail is a labeled region with carousel semantics. The selected title and artist are announced through a polite live region."
  motion: "Respect prefers-reduced-motion by switching the rail to immediate selection changes without animated rotation. No autoplay is used."
  contrast: "Keep labels and controls in HTML above the canvas with sufficient contrast independent of album artwork."
provenance:
  references:
    - name: "User-supplied React Bits album rail reference"
      url: "https://pro.reactbits.dev/"
      captured_at: "2026-10-31"
      evidence: "Supplied rendered HTML shows an editorial record-label introduction, three catalogue metrics, an eight-item album rail rendered by a Three.js canvas, a selected album/artist caption, previous/next controls, position slider and drag/swipe/arrow-key instructions."
      notes: "The source was provided as rendered HTML. The implementation recreates the interaction and spatial concept with original sample identities, artwork and code. The reference includes a play/pause control, but no playable audio asset or playback contract was supplied, so this demo does not claim to play audio."
  evidence:
    - "The supplied reference displays an album rail with eight release names."
    - "The reference labels the rail as a carousel and advertises drag, swipe and arrow-key browsing."
    - "The selected release is accompanied by its artist name."
    - "Previous/next controls and a position control are visible below the rail."
    - "The reference's rendered canvas identifies Three.js r181."
  inferences:
    - "The perspective and visible neighboring sleeves communicate the catalogue as a physical collection rather than a conventional flat list."
    - "The 3D treatment is appropriate when the collection is itself part of the organization's identity, but not for large utilitarian catalogues."
  limitations:
    - "The source was supplied as rendered HTML with obfuscated class names; original source code, shader implementation, textures, camera settings and responsive breakpoints were not available."
    - "The demo uses generated artwork, fictional artist/release names and illustrative catalogue metrics, not source assets or real recordings."
    - "The Three.js module is loaded from jsDelivr; when unavailable or when WebGL cannot initialize, the demo displays a static CSS cover rail."
    - "No audio playback is implemented because no audio source or playback behavior was supplied."
  originality_notes: "Recreate the tactile browsing principle using original album identities, artwork, geometry and lighting. Replace generated sleeve artwork with owned/licensed release artwork when adapting the pattern."
lifecycle:
  status: implemented
  created_at: "2026-10-31"
  updated_at: "2026-10-31"
  validated_at:
  maintainer_notes: "Standalone vanilla HTML/CSS/JS example with a pinned Three.js ES module and CSS fallback. JavaScript syntax, HTML parsing, catalogue integration and diff checks passed. Real-browser visual, responsive and assistive-technology validation remain outstanding."
```

## Design rationale

A record label is partly defined by the body of work it has released. A plain list makes that catalogue easy to scan but strips away some of its physical character. This pattern gives each release a sleeve and a visible vinyl disc, then places the selected release at the front of a shared spatial rail. The result makes browsing feel closer to handling a small record collection.

The rail should not become a decorative 3D object that competes with the brand statement. Keep the interaction finite, the artwork distinct, the title/artist attribution close to the selected object, and the controls obvious. The neighboring records should establish depth and context without becoming more visually prominent than the active sleeve.

## External research context

- [Codrops Creative Hub](https://tympanus.net/codrops/hub/all/codrops/) was reviewed as a curated gallery of current WebGL, Three.js and 3D interaction work. The transferable lesson is to choose a visual concept and interaction family rather than treating a technology tag as a design direction.
- [On-Scroll 3D Carousel](https://tympanus.net/Development/3DCarousel/) was reviewed as a live spatial carousel reference. It uses a 3D presentation for a finite collection; this pattern instead uses a circular sleeve-and-record rail with direct, manual selection.
- [Building a Scroll-Reactive 3D Gallery](https://tympanus.net/codrops/2026/03/09/building-a-scroll-reactive-3d-gallery-with-three-js-velocity-and-mood-based-backgrounds/) was reviewed for its depth-layered image gallery and bounded motion approach. This informed the decision to keep the collection finite and motion tied to visitor input rather than autoplay.
- [Three.js scene manual](https://threejs.org/manual/pages/creating-a-scene.html) and [CanvasTexture documentation](https://threejs.org/docs/pages/CanvasTexture.html) informed the minimal scene/camera/renderer setup and generated sleeve-art texture approach.

These sources inform implementation technique and broader design context. The user-supplied React Bits rendering remains the reference for the specific album-rail concept.

## Implementation notes

The example uses semantic HTML, local CSS and browser-native JavaScript modules. Three.js is the only runtime dependency, pinned to version 0.181.0. It is justified here because the relationship between the flat sleeve, exposed vinyl disc, perspective rail and lighting is the central interaction, not an ornamental effect.

Sample sleeves are generated as CanvasTextures so the example remains independent of external image assets. In a production adaptation, replace these with owned or licensed cover artwork and preserve the same geometry/material hierarchy. The DOM owns all text and controls. The canvas is decorative, and the CSS cover rail remains available if WebGL initialization fails.

This example intentionally omits audio playback. The supplied reference displayed a play/pause control, but the provided material did not include an audio source or a defined playback contract. A visual control that pretends to play music would be a particularly pointless form of interface design.

## Variants and trade-offs

1. **Perspective sleeve-and-vinyl rail.** Best when tactile presentation and collection identity matter more than rapid scanning.
2. **Flat cover flow.** A lower-cost fallback that retains the sequence and selected-item emphasis.
3. **Manual-only browsing.** Prefer for editorial content that visitors may want to read at their own pace.
4. **Catalogue grid.** Prefer for large collections, filtering, comparison or direct access to many releases.

## Validation

Runnable demo: [`examples/vinyl-record-carousel/index.html`](../../examples/vinyl-record-carousel/index.html).

Lifecycle remains `implemented` until real-browser desktop/tablet/mobile, WebGL fallback, keyboard, reduced-motion and assistive-technology checks are recorded.
