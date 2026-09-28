# Record Inspiration

## Purpose

Record a new design inspiration reference for a project, analyze it using the existing Reference DNA and Distinctive Patterns prompts, and create a complete Inspiration record in the Notion **Inspiration** database.

This is an ingestion workflow. It does not design the project, rank references, or infer human preference.

## Invocation

Run as:

`run record_inspiration.md for {project}: {url}`

Where:
- `{project}` is the project that should be related to the new Inspiration record.
- `{url}` is the source URL to record and analyze.

The project must resolve to an existing page in the Notion Projects database. If it cannot be resolved unambiguously, stop and request the correct project.

## Required systems

Use:
- **Notion** for the Inspiration database and project relation.
- **n8n / available web evidence collection** when technical or visual evidence must be gathered from the supplied URL.
- `.chatgpt/reference_dna.md` for Reference DNA analysis.
- `.chatgpt/distinctive_patterns.md` for distinctive-pattern analysis.

The two analysis prompts are sub-prompts. Do not duplicate or replace their analytical logic here.

## Workflow

### 1. Resolve the project

Find the supplied project in the Notion Projects database.

Use the resolved project page as the value of the Inspiration database's **Project** relation.

Do not create a new project.

### 2. Inspect the source

Use the supplied URL as the canonical **Source**.

Determine the available evidence before analysis. Gather as much useful evidence as is reasonably available, including when possible:

- page HTML / DOM
- CSS
- screenshots
- relevant assets
- viewport information
- responsive states
- identifiable technologies
- measurable layout or typography values

Prefer direct evidence over assumptions.

If the source cannot be accessed, do not fabricate an analysis. Record the reference only if enough evidence exists to create a useful record, and mark evidence limitations clearly.

### 3. Determine database metadata

Populate the following Inspiration database properties:

#### Source
The supplied URL.

#### Project
The resolved project relation.

#### Type
Use the existing database values:
- `Site screenshot`
- `Working site`

Choose based on the evidence/input being recorded. If the source is an accessible live website, normally use `Working site`. If the supplied reference is only a screenshot/image, use `Site screenshot`.

#### Reference Class
Choose one:
- `Website`
- `Landing Page`
- `Product`
- `Brand`
- `Editorial`
- `Campaign`
- `Other`

Base this on the source itself, not on assumptions about its quality.

#### Scope checkboxes
Set these according to the actual usefulness of the reference:

- Overall
- Typography
- Layout
- Composition
- Color
- Imagery
- Navigation
- Information Architecture
- Interaction
- Motion

A checkbox should be enabled when the reference provides meaningful evidence or inspiration for that dimension.

These values should be derived from the Reference DNA analysis, not guessed independently.

#### Borrowing Interest
Populate only when there is an explicit human-provided borrowing-interest value in the invocation/context or an existing project instruction.

If no value is supplied, leave it empty.

Never infer Borrowing Interest from the URL, visual quality, or analysis.

#### Human Preference
**Always leave this blank.**

Never infer:
- liked
- disliked
- neutral
- approval
- preference

from the fact that the reference was supplied.

### 4. Populate provenance metadata

Populate:

#### Status
Set to `Analyzed` after both sub-prompts have completed successfully and their results have been saved to the page.

If analysis cannot be completed, use `Captured`.

#### Analysis Version
Record the versions/identifiers of the two analysis prompts used, for example:

`reference_dna:v1; distinctive_patterns:v1`

Use the actual prompt/schema version if one is explicitly defined in the source files. Do not invent a semantic version.

#### Captured At
Record when the source evidence was captured.

#### Analyzed At
Record when the two analyses were completed.

#### Evidence Quality
Set:
- `High` when the source has substantial direct evidence such as URL + DOM/CSS + screenshots/assets.
- `Medium` when meaningful visual evidence exists but technical evidence is incomplete.
- `Low` when only limited evidence is available.

This is an evidence-quality classification, not a design-quality score.

#### Reuse Count
Set to `0` for a newly recorded reference unless an existing record is being intentionally re-imported.

### 5. Run Reference DNA

Load and execute `.chatgpt/reference_dna.md` using the collected source evidence.

The result must be valid YAML conforming to that prompt's required structure.

Do not rewrite the analysis into a different schema before storing it.

### 6. Run Distinctive Patterns

Load and execute `.chatgpt/distinctive_patterns.md`.

Provide it with:
- the source evidence
- the Reference DNA result
- any explicit human notes supplied with the invocation

The result must be valid YAML conforming to that prompt's required structure.

Do not invent human assessment fields.

### 7. Create the Inspiration page

Create a new page in the Notion **Inspiration** database.

Set its database properties according to the rules above.

The page title/property **Source** must contain the supplied source URL.

The page body must contain both complete analytical outputs.

Use this structure:

# Reference DNA

```yaml
{complete Reference DNA YAML}
```

# Distinctive Patterns

```yaml
{complete Distinctive Patterns YAML}
```

# Evidence

Include a concise evidence/provenance section containing:
- source URL
- evidence collected
- capture date/time
- analysis date/time
- evidence limitations
- analysis prompt versions

Do not duplicate large parts of the YAML in this section.

### 8. Final validation

Before completing the workflow, verify:

- the Inspiration page exists in the correct Notion database
- the Project relation points to the requested project
- Source contains the supplied URL
- Type is populated
- Reference Class is populated
- scope checkboxes reflect the analysis
- Status is correct
- Analysis Version is populated
- Captured At is populated when evidence was captured
- Analyzed At is populated when analysis completed
- Evidence Quality is populated
- Reuse Count is 0 for a new record
- **Human Preference is empty**
- Reference DNA is present in the page body
- Distinctive Patterns are present in the page body
- no fabricated technical facts or human preferences were introduced

## Duplicate handling

Before creating a new record, search the Inspiration database for the same Source URL.

If an existing record already has the same canonical Source:

- do not create a duplicate
- inspect the existing record
- update/re-analyze it only if the user explicitly requested a refresh
- otherwise report that the inspiration already exists and identify the existing record

Do not create duplicate references merely because they belong to different projects. If the same reference is useful to multiple projects, reuse the existing Inspiration record and add the requested Project relation when the database relation supports multiple projects.

## Important constraints

- This workflow records and analyzes inspiration. It does not design the destination project.
- Never rank or score the reference.
- Never assign human preference without explicit human input.
- Never infer Borrowing Interest.
- Never fabricate exact CSS, font, spacing, color, responsive, or interaction values.
- Clearly distinguish confirmed evidence from inference.
- Do not reproduce substantial copyrighted source copy.
- Preserve the complete outputs of the two sub-prompts in the page body.
- The Notion database properties are the retrieval/index layer. The page body is the detailed design-intelligence layer.
