# Pattern taxonomy

Patterns describe reusable design decisions at the level of composition, hierarchy, spatial relationships, or interaction. They are not branded components and should not prescribe a whole website.

| Category | What belongs here | Examples of useful questions |
|---|---|---|
| heroes | First-screen compositions | What establishes the focal point? How do message and media relate? |
| navigation | Navigation structures and behaviors | How is hierarchy exposed? What changes on scroll or mobile? |
| typography | Typographic systems and treatments | How is hierarchy created beyond font size? |
| section-compositions | Repeatable section-level spatial arrangements | How do content, media, and whitespace interact? |
| image-treatments | Image placement, crop, masking, layering | Is imagery content, atmosphere, evidence, or interruption? |
| grids | Page and content grid logic | How does the grid create rhythm and variation? |
| footers | Closing structures and utility navigation | How does the page conclude and preserve orientation? |
| interactions | Reusable interaction principles | What feedback or state change helps the user? |

## Authoring rules
- One file per pattern, named with a stable kebab-case ID.
- Include metadata conforming to [the schema](../schema/pattern.schema.yaml).
- Distinguish signature behavior from common conventions.
- Explain when not to use the pattern.
- Link to source references and describe evidence quality.
- Do not promote a pattern solely because it looks unusual.
- Keep variants under the parent pattern unless they express a genuinely different principle.

## Initial collection targets
Start with a balanced set across categories. Hero compositions are useful but must not dominate the library. A first curated collection may target roughly 30 patterns, but there is no quota and no pattern should be added to satisfy a number.
