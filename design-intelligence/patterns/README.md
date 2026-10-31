# Pattern taxonomy

Patterns describe reusable design decisions at the level of composition, hierarchy, spatial relationships, or interaction. They are not branded components or finished website templates.

| Category | What belongs here |
|---|---|
| heroes | First-screen compositions: what establishes the focal point and how message and media relate |
| navigation | Navigation structures and behaviors |
| typography | Typographic hierarchy and treatments |
| section-compositions | Repeatable section-level spatial arrangements |
| image-treatments | Image placement, crop, masking, and layering |
| grids | Page and content grid logic |
| footers | Closing structures and utility navigation |
| about | Patterns for presenting an organization, its people, story, and identity |
| interactions | Reusable interaction principles and state changes |

## Authoring rules
- One file per pattern, named with a stable kebab-case ID.
- Include metadata conforming to [the schema](../schema/pattern.schema.yaml).
- Distinguish observed evidence from interpretation.
- Explain when not to use the pattern.
- Link source references and describe evidence quality.
- Keep variants under the parent pattern unless they express a genuinely different principle.
- A pattern is not `validated` until its runnable demo has passed the validation checklist.

## Hero collection

Twenty-one implemented patterns form the current hero collection. The first ten establish common composition approaches; the next five explore advanced Three.js/WebGL motion; the traffic-light painting hero is a canvas-based light-trail study; and the latest five (curtain reveal, glass refraction orb, aurora shader veil, particle morph sequence, ribbon helix flow) pair GSAP motion with art-directed Three.js or scroll-driven scenes. They are a curated starting set, not a quota or a claim of universal best practice.

| Pattern | Best suited to | Demo |
|---|---|---|
| [Editorial type-led](./heroes/editorial-type-led.md) | A proposition whose language is the strongest asset | [Open](../examples/editorial-type-led/index.html) |
| [Split-screen value](./heroes/split-screen-value.md) | One visual that directly supports a concise offer | [Open](../examples/split-screen-value/index.html) |
| [Product interface stage](./heroes/product-ui-stage.md) | Software that benefits from a representative UI preview | [Open](../examples/product-ui-stage/index.html) |
| [Immersive image overlay](./heroes/immersive-image-overlay.md) | A strong image that creates relevant context | [Open](../examples/immersive-image-overlay/index.html) |
| [Asymmetric art-directed](./heroes/asymmetric-art-directed.md) | A brand with a distinctive visual point of view | [Open](../examples/asymmetric-art-directed/index.html) |
| [Bento feature mosaic](./heroes/bento-feature-mosaic.md) | A few related capabilities that need hierarchy | [Open](../examples/bento-feature-mosaic/index.html) |
| [Proof-first](./heroes/proof-first-hero.md) | A trust barrier that can be addressed with real evidence | [Open](../examples/proof-first-hero/index.html) |
| [Conversion form-first](./heroes/conversion-form-first.md) | A high-intent visitor and a genuinely short conversion | [Open](../examples/conversion-form-first/index.html) |
| [Typographic brand statement](./heroes/typographic-brand-statement.md) | A concise, distinctive brand statement | [Open](../examples/typographic-brand-statement/index.html) |
| [Interactive product preview](./heroes/interactive-product-preview.md) | One meaningful product behavior that can be demonstrated | [Open](../examples/interactive-product-preview/index.html) |
| [Orbital particle field](./heroes/orbital-particle-field.md) | Connected systems, networks, or data relationships | [Open](../examples/orbital-particle-field/index.html) |
| [Kinetic type sculpture](./heroes/kinetic-type-sculpture.md) | A concise brand statement with a sculptural counterpoint | [Open](../examples/kinetic-type-sculpture/index.html) |
| [Liquid topography field](./heroes/liquid-topography-field.md) | Change, discovery, and complex systems represented as terrain | [Open](../examples/liquid-topography-field/index.html) |
| [Product prism stage](./heroes/product-prism-stage.md) | A central product with a small supporting capability ecosystem | [Open](../examples/product-prism-stage/index.html) |
| [Spatial portal gateway](./heroes/spatial-portal-gateway.md) | An invitation into a new product or brand environment | [Open](../examples/spatial-portal-gateway/index.html) |
| [Traffic light painting](./heroes/traffic-light-painting-hero.md) | Photography products and visual stories about long exposure | [Open](../examples/traffic-light-painting-hero/index.html) |
| [Curtain reveal masthead](./heroes/gsap-curtain-reveal.md) | A narrative with a clear before and after | [Open](../examples/gsap-curtain-reveal/index.html) |
| [Glass refraction orb](./heroes/glass-refraction-orb.md) | Clarity, precision, or optics as the idea | [Open](../examples/glass-refraction-orb/index.html) |
| [Aurora shader veil](./heroes/aurora-shader-veil.md) | Mood and brand feeling over a literal product | [Open](../examples/aurora-shader-veil/index.html) |
| [Particle morph sequence](./heroes/particle-morph-sequence.md) | One subject with a few named states | [Open](../examples/particle-morph-sequence/index.html) |
| [Ribbon helix flow](./heroes/ribbon-helix-flow.md) | Craft, softness, and a premium finish | [Open](../examples/ribbon-helix-flow/index.html) |

See [example instructions](../examples/README.md) and [validation status](../validation/hero-patterns-review.md).

## About collection

| Pattern | Best suited to | Demo |
|---|---|---|
| [Team profile carousel](./about/team-profile-carousel.md) | Introducing a small team through focused individual profiles | [Open](../examples/team-profile-carousel/index.html) |
| [Vinyl record carousel](./about/vinyl-record-carousel.md) | Presenting a curated catalogue as a tactile, dimensional collection | [Open](../examples/vinyl-record-carousel/index.html) |
