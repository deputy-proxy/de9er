# Accessibility and Performance

## Accessibility
- Semantic landmarks and logical heading order.
- Keyboard access for every control, with visible focus.
- Sufficient contrast; never use color as the only signal.
- Labels, instructions, and errors associated with form fields.
- Meaningful alt text; empty alt for decorative images.
- Reduced-motion support and browser zoom compatibility.

## Performance
- Keep the default page dependency-light and build-free.
- Optimize image dimensions/formats and specify intrinsic dimensions.
- Lazy-load below-the-fold media; defer nonessential scripts.
- Do not load GSAP or Three.js on pages that do not use them.
- Use sensible font fallbacks and avoid excessive weights.
- Minimize third-party scripts and prevent layout shifts.

Test mobile/desktop, keyboard navigation, reduced motion, slow network behavior, and console output. Never claim a Lighthouse score or certification without running a test.
