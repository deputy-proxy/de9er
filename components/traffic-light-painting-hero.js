const root = document.querySelector('[data-traffic-hero]');
if (root) {
  const canvas = root.querySelector('canvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const range = root.querySelector('[data-shutter-range]');
  const valueLabel = root.querySelector('[data-shutter-value]');
  const presets = [...root.querySelectorAll('[data-shutter-preset]')];
  const status = root.querySelector('[data-scene-status]');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const labels = ['1/15 s', '1/4 s', '1 s', '4 s', '15 s', '30 s'];
  const ariaLabels = ['one fifteenth of a second', 'one quarter of a second', 'one second', 'four seconds', 'fifteen seconds', 'thirty seconds'];
  let shutter = Number(range?.value ?? 3);
  let width = 1;
  let height = 1;
  let dpr = 1;
  let frame = 0;
  let start = performance.now();
  let inView = true;
  let visible = !document.hidden;
  let disposed = false;

  const exposure = () => [0.32, 0.46, 0.62, 0.82, 1, 1.22][shutter];

  function resize() {
    const rect = root.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw((performance.now() - start) / 1000);
  }

  function paintTrail(index, count, anchor, t, strength) {
    const spread = (index - (count - 1) / 2) / ((count - 1) / 2);
    const bottomX = anchor + spread * width * 0.59;
    const topX = anchor + spread * 2.1;
    const drift = Math.sin(t * 0.55 + index * 0.19) * width * 0.006;
    const curve = new Path2D();
    curve.moveTo(topX, height * 0.205);
    curve.bezierCurveTo(
      anchor + spread * width * 0.025 + drift,
      height * 0.245,
      bottomX - (bottomX - anchor) * 0.13 + drift * 1.5,
      height * 0.47,
      bottomX + drift,
      height * 1.12
    );

    const red = spread > -0.02;
    const color = red ? [255, 91, 67] : [255, 231, 190];
    const [r, g, b] = color;
    const alpha = strength * (red ? 0.78 : 0.72) * (0.88 + 0.12 * Math.sin(t * 0.8 + index));
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalCompositeOperation = 'lighter';

    ctx.beginPath();
    ctx.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.32})`;
    ctx.lineWidth = (red ? 18 : 20) * (0.7 + strength * 0.38);
    ctx.shadowColor = red ? 'rgba(255,65,43,.9)' : 'rgba(255,220,165,.9)';
    ctx.shadowBlur = 27 * strength;
    ctx.stroke(curve);

    ctx.beginPath();
    ctx.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.72})`;
    ctx.lineWidth = 5.2 * (0.75 + strength * 0.25);
    ctx.shadowBlur = 13 * strength;
    ctx.stroke(curve);

    ctx.beginPath();
    ctx.strokeStyle = `rgba(255,${red ? 170 : 248},${red ? 145 : 225},${alpha})`;
    ctx.lineWidth = 1.15;
    ctx.shadowBlur = 5 * strength;
    ctx.stroke(curve);
    ctx.restore();
  }

  function draw(t) {
    if (disposed) return;
    const strength = exposure();
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#080706';
    ctx.fillRect(0, 0, width, height);

    // A very restrained warm haze around the convergence point.
    const motion = [[0, 0.60], [3, 0.60], [8, 0.40], [15, 0.82], [21, 0.82], [24, 0.60]];
    const phase = t % 24;
    let anchorRatio = motion[motion.length - 1][1];
    for (let i = 0; i < motion.length - 1; i++) {
      const [fromTime, fromX] = motion[i];
      const [toTime, toX] = motion[i + 1];
      if (phase <= toTime) {
        const p = (phase - fromTime) / (toTime - fromTime);
        const eased = p * p * (3 - 2 * p);
        anchorRatio = fromX + (toX - fromX) * eased;
        break;
      }
    }
    const anchor = width * anchorRatio;
    const haze = ctx.createRadialGradient(anchor, height * 0.22, 0, anchor, height * 0.22, width * 0.52);
    haze.addColorStop(0, 'rgba(119,66,39,.12)');
    haze.addColorStop(0.45, 'rgba(54,31,23,.055)');
    haze.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = haze;
    ctx.fillRect(0, 0, width, height);

    const count = width < 560 ? 15 : 21;
    for (let i = 0; i < count; i++) paintTrail(i, count, anchor, t, strength);

    // Fine, dim filaments continue past the bright convergence point.
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 9; i++) {
      const offset = (i - 4) * 2.3;
      ctx.beginPath();
      ctx.moveTo(anchor + offset, height * 0.205);
      ctx.bezierCurveTo(anchor + offset + width * 0.07, height * 0.15, anchor + width * 0.23, height * 0.18, anchor + width * 0.37, height * 0.12);
      ctx.strokeStyle = 'rgba(255,151,105,.075)';
      ctx.lineWidth = 0.65;
      ctx.stroke();
    }
    ctx.restore();
  }

  function animate(now) {
    if (disposed || !inView || !visible || reducedMotion.matches) return;
    draw((now - start) / 1000);
    frame = requestAnimationFrame(animate);
  }

  function sync() {
    cancelAnimationFrame(frame);
    if (inView && visible && !reducedMotion.matches) frame = requestAnimationFrame(animate);
    else draw((performance.now() - start) / 1000);
  }

  function updateExposure() {
    if (valueLabel) valueLabel.textContent = labels[shutter];
    range?.setAttribute('aria-valuetext', ariaLabels[shutter]);
    if (range) range.style.setProperty('--progress', (shutter / 5 * 100) + '%');
    presets.forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.shutterPreset) === shutter)));
    draw((performance.now() - start) / 1000);
  }

  range?.addEventListener('input', () => {
    shutter = Number(range.value);
    updateExposure();
  });
  presets.forEach(button => button.addEventListener('click', () => {
    shutter = Number(button.dataset.shutterPreset);
    if (range) range.value = String(shutter);
    updateExposure();
  }));

  const observer = new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    sync();
  }, { threshold: 0.01 });
  observer.observe(root);
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(root);
  document.addEventListener('visibilitychange', () => {
    visible = !document.hidden;
    sync();
  });
  reducedMotion.addEventListener?.('change', sync);
  window.addEventListener('pagehide', () => {
    disposed = true;
    cancelAnimationFrame(frame);
    observer.disconnect();
    resizeObserver.disconnect();
  }, { once: true });

  resize();
  updateExposure();
  sync();
  if (status) status.textContent = reducedMotion.matches ? 'Motion paused' : 'Long exposure study';
}
