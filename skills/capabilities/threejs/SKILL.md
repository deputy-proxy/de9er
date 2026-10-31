# Three.js and 3D Experiences

Use Three.js only when 3D adds meaningful product explanation, spatial storytelling, interaction, or distinctive brand experience that cannot be achieved more simply.

- Treat WebGL as optional enhancement, never a prerequisite for understanding.
- Provide a static/CSS fallback for unsupported devices, reduced motion, context loss, and failed module loading.
- Defer loading so it does not block core content.
- Control geometry, textures, draw calls, shader complexity, and pixel ratio.
- Pause or reduce rendering when offscreen or when the tab is hidden.
- Provide keyboard alternatives where interaction is essential.
- Avoid full-screen WebGL backgrounds that compete with content or drain battery.
- Prefer CSS/native browser APIs for simple effects.
