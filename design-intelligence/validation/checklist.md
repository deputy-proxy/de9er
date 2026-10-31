# Pattern validation checklist

A pattern cannot be marked `validated` or `published` until the applicable checks have been performed and results recorded.

## Knowledge quality
- [ ] One clear reusable principle is described.
- [ ] The pattern is specific enough to recognize and implement independently.
- [ ] Evidence, inference, and unknowns are separated.
- [ ] Provenance includes source URLs and capture context where applicable.
- [ ] No unsupported measurements, technologies, or responsive claims.
- [ ] No copied source copy, logos, proprietary assets, or source-specific styling masquerading as abstraction.
- [ ] Suitability and avoid-when conditions are explicit.
- [ ] Duplicate/overlap check completed against existing patterns.

## Implementation
- [ ] Runnable standalone example exists.
- [ ] Semantic HTML and native browser behavior are used where possible.
- [ ] CSS is responsive and avoids unnecessary layout shifts.
- [ ] JavaScript is minimal and only used where needed.
- [ ] No framework or build dependency has been introduced.
- [ ] Optional dependencies have a documented justification.
- [ ] No broken links, dead controls, or console errors.
- [ ] Example works without external network access unless explicitly documented.

## Accessibility
- [ ] Keyboard navigation and focus visibility work.
- [ ] Semantic landmarks and heading hierarchy are correct.
- [ ] Controls have accessible names and states.
- [ ] Contrast is sufficient for text and interactive elements.
- [ ] Reduced-motion preference is respected.
- [ ] Information is not conveyed by color or motion alone.

## Responsive and performance
- [ ] Desktop, tablet, and mobile widths inspected.
- [ ] No unintended horizontal overflow.
- [ ] Content order remains logical on narrow screens.
- [ ] Images/media have appropriate sizing and alternatives.
- [ ] Motion and rendering costs are proportionate to the benefit.

## Publication record
- [ ] Validation results and tested viewports recorded.
- [ ] Known limitations recorded.
- [ ] Lifecycle status updated accurately.
- [ ] Pattern record and example are linked.
- [ ] Review completed before status becomes `published`.
