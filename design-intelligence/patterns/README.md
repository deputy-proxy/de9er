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
| interactions | Reusable interaction principles and state changes |

## Authoring rules
- One file per pattern, named with a stable kebab-case ID.
- Include metadata conforming to [the schema](../schema/pattern.schema.yaml).
- Distinguish observed evidence from interpretation.
- Explain when not to use the pattern.
- Link source references and describe evidence quality.
- Keep variants under the parent pattern unless they express a genuinely different principle.
- A pattern is not `validated` until its runnable demo has passed the validation checklist.

## Initial hero collection

Ten implemented patterns form the first usable slice of the library. They are a starting collection, not a quota or a claim of universal best practice.

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

See [example instructions](../examples/README.md) and [validation status](../validation/hero-patterns-review.md).
