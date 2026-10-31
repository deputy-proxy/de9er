# Skill: Extract reusable design patterns

## Goal
Turn captured reference evidence and the existing Reference DNA / Distinctive Patterns analyses into candidate, source-independent design patterns.

## Inputs
- reference capture record
- complete output from `.chatgpt/reference_dna.md`
- complete output from `.chatgpt/distinctive_patterns.md`
- explicit human notes, if any

## Procedure
1. Read the capture record and both analyses. If either analysis is missing, mark the extraction incomplete; do not silently replace it.
2. Separate observed characteristics from interpretation and reusable principle.
3. Identify candidate patterns that are specific, repeatable, and meaningful to composition, hierarchy, content, or interaction.
4. Exclude generic conventions unless their particular arrangement or behavior is distinctive.
5. Split unrelated ideas into separate candidates. Merge near-duplicates when they express the same principle.
6. For each candidate, define:
   - stable kebab-case ID and concise name
   - category
   - one-paragraph summary
   - reusable principle
   - observable characteristics
   - spatial/content structure
   - suitable contexts and objectives
   - good-when and avoid-when conditions
   - meaningful variants
   - responsive implications supported by evidence or clearly marked as proposed
   - accessibility and performance implications
   - source evidence, inference, and limitations
   - originality/copying risks
7. Compare candidates with existing library patterns. Prefer extending an existing pattern when the principle is the same. Do not create duplicates with cosmetic naming differences.
8. Keep source-specific styling, brand assets, copy, and exact layout measurements out of the abstraction unless a measurement is essential and evidenced.
9. Mark every result as `candidate`. Extraction alone does not authorize publication.

## Candidate output
For each candidate, return a record compatible with `../schema/pattern.schema.yaml`. Include a short extraction note explaining:
- which source observations support it
- what has been abstracted away
- why it is reusable
- what remains unknown
- whether it overlaps an existing pattern

## Quality bar
A useful pattern can be implemented independently by another designer without seeing the source. If the record merely says "make it modern", "use whitespace", or "use large typography", it is not sufficiently specific.
