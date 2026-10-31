import * as THREE from 'three';

const root = document.querySelector('[data-traffic-hero]');
if (root) {
  const canvas = root.querySelector('canvas');
  const stage = root;
  const range = root.querySelector('[data-shutter-range]');
  const valueLabel = root.querySelector('[data-shutter-value]');
  const presets = [...root.querySelectorAll('[data-shutter-preset]')];
  const status = root.querySelector('[data-scene-status]');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x080b11);
  scene.fog = new THREE.Fog(0x080b11, 17, 58);
  const camera = new THREE.PerspectiveCamera(43, 1, .1, 100);
  camera.position.set(0, 5.2, 15.5);
  camera.lookAt(0, 1.2, -12);
  let renderer;
  let disposed = false;
  let inView = true;
  let pageVisible = !document.hidden;
  let shutter = Number(range?.value ?? 3);
  const clock = new THREE.Timer();
  clock.connect(document);
  const traffic = [];
  const windows = [];
  const temp = new THREE.Object3D();

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  const exposureLabels = ['1/15 s', '1/4 s', '1 s', '4 s', '15 s', '30 s'];
  const exposureAriaLabels = ['one fifteenth of a second', 'one quarter of a second', 'one second', 'four seconds', 'fifteen seconds', 'thirty seconds'];
  const exposureStrength = () => [0.12, 0.25, 0.42, 0.68, 1, 1.35][shutter];

  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.55));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;

    scene.add(new THREE.HemisphereLight(0x8b9bb5, 0x11131a, 1.25));
    const moon = new THREE.DirectionalLight(0xa9bddb, 1.45);
    moon.position.set(-8, 14, 6);
    scene.add(moon);

    const city = new THREE.Group();
    scene.add(city);
    const road = new THREE.Mesh(
      new THREE.PlaneGeometry(13, 80),
      new THREE.MeshStandardMaterial({ color: 0x11151b, roughness: .88, metalness: .16 })
    );
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, -.08, -19);
    city.add(road);

    const sidewalkMat = new THREE.MeshStandardMaterial({ color: 0x252a31, roughness: .95 });
    for (const side of [-1, 1]) {
      const sidewalk = new THREE.Mesh(new THREE.BoxGeometry(2.3, .22, 80), sidewalkMat);
      sidewalk.position.set(side * 7.55, .02, -19);
      city.add(sidewalk);
    }

    const laneMat = new THREE.MeshBasicMaterial({ color: 0x5b626c, transparent: true, opacity: .26 });
    for (const x of [-2.15, 2.15]) {
      for (let z = 8; z > -54; z -= 5.5) {
        const dash = new THREE.Mesh(new THREE.BoxGeometry(.055, .012, 2.4), laneMat);
        dash.position.set(x, .012, z);
        city.add(dash);
      }
    }

    const buildingMats = [
      0x151b25, 0x1b202a, 0x202631, 0x171e28, 0x22232b
    ].map(color => new THREE.MeshStandardMaterial({ color, roughness: .92, metalness: .08 }));
    const windowMat = new THREE.MeshBasicMaterial({ color: 0xffd99a });
    const coolWindowMat = new THREE.MeshBasicMaterial({ color: 0x9fc5ee });
    const windowGeo = new THREE.PlaneGeometry(.16, .22);

    for (const side of [-1, 1]) {
      for (let i = 0; i < 13; i++) {
        const width = 2.4 + Math.random() * 2.8;
        const height = 5 + Math.random() * 15;
        const depth = 3.2 + Math.random() * 5.5;
        const z = 7 - i * 5.1 - Math.random() * 2;
        const x = side * (8.9 + width * .48);
        const building = new THREE.Mesh(
          new THREE.BoxGeometry(width, height, depth),
          buildingMats[Math.floor(Math.random() * buildingMats.length)]
        );
        building.position.set(x, height / 2 - .04, z);
        city.add(building);

        const rows = Math.floor(height / 1.15);
        const cols = Math.max(2, Math.floor(width / .58));
        for (let row = 1; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            if (Math.random() > .57) continue;
            const pane = new THREE.Mesh(windowGeo, Math.random() > .72 ? coolWindowMat : windowMat);
            pane.position.set(
              x - width / 2 + .36 + col * ((width - .55) / cols),
              row * 1.08,
              z + depth / 2 + .012
            );
            pane.material = pane.material.clone();
            pane.material.transparent = true;
            pane.material.opacity = .22 + Math.random() * .62;
            city.add(pane);
            windows.push({ mesh: pane, phase: Math.random() * 8, base: pane.material.opacity });
          }
        }
      }
    }

    // Street lamps establish the road perspective and add warm pools of light.
    for (const side of [-1, 1]) {
      for (let i = 0; i < 6; i++) {
        const z = 5 - i * 9;
        const pole = new THREE.Mesh(
          new THREE.CylinderGeometry(.035, .055, 4.7, 8),
          new THREE.MeshStandardMaterial({ color: 0x414752, metalness: .7, roughness: .35 })
        );
        pole.position.set(side * 6.35, 2.35, z);
        city.add(pole);
        const arm = new THREE.Mesh(new THREE.BoxGeometry(.8, .05, .07), pole.material);
        arm.position.set(side * 6.0, 4.65, z);
        city.add(arm);
        const lamp = new THREE.PointLight(0xffc982, 9, 8, 2);
        lamp.position.set(side * 5.7, 4.5, z);
        scene.add(lamp);
        const bulb = new THREE.Mesh(new THREE.SphereGeometry(.09, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffd6a0 }));
        bulb.position.copy(lamp.position);
        city.add(bulb);
      }
    }

    // A low skyline glow keeps the vanishing point legible.
    const skyline = new THREE.Mesh(
      new THREE.PlaneGeometry(34, 15),
      new THREE.MeshBasicMaterial({ color: 0x25374e, transparent: true, opacity: .2, depthWrite: false })
    );
    skyline.position.set(0, 7, -49);
    scene.add(skyline);

    const glowTexture = (() => {
      const c = document.createElement('canvas');
      c.width = c.height = 128;
      const ctx = c.getContext('2d');
      const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(.18, 'rgba(255,255,255,.72)');
      gradient.addColorStop(.48, 'rgba(255,255,255,.15)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 128, 128);
      return new THREE.CanvasTexture(c);
    })();

    const trailColors = [0xff3d36, 0xffbd59, 0x4ba7ff, 0xfff0c7];
    const headGeometry = new THREE.SphereGeometry(.075, 10, 8);
    for (let i = 0; i < 34; i++) {
      const direction = i % 2 === 0 ? 1 : -1;
      const lane = (i % 6) - 2.5;
      const startZ = 8 + Math.random() * 8;
      const endZ = -34 - Math.random() * 17;
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(lane * .58, .13, startZ),
        new THREE.Vector3(lane * .72 + (Math.random() - .5) * .5, .14, -2),
        new THREE.Vector3(lane * .9, .16, -16),
        new THREE.Vector3(lane * 1.08 + (Math.random() - .5) * .5, .2, endZ)
      ]);
      const color = trailColors[i % trailColors.length];
      const material = new THREE.MeshBasicMaterial({
        color, transparent: true, opacity: .45 + Math.random() * .3,
        blending: THREE.AdditiveBlending, depthWrite: false
      });
      const line = new THREE.Mesh(new THREE.TubeGeometry(curve, 90, .018 + Math.random() * .025, 5, false), material);
      line.position.x += direction * .12;
      city.add(line);
      const halo = new THREE.Mesh(
        new THREE.PlaneGeometry(1.3, 1.3),
        new THREE.MeshBasicMaterial({ map: glowTexture, color, transparent: true, opacity: .3, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
      );
      halo.position.set(lane * .8, .18, -9 - Math.random() * 15);
      halo.rotation.x = -Math.PI / 2;
      city.add(halo);
      const head = new THREE.Mesh(headGeometry, new THREE.MeshBasicMaterial({ color, toneMapped: false }));
      const headGlow = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5), new THREE.MeshBasicMaterial({ map: glowTexture, color, transparent: true, opacity: .8, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
      headGlow.rotation.x = -Math.PI / 2;
      city.add(head, headGlow);
      traffic.push({ line, halo, head, headGlow, curve, direction, phase: Math.random() * 10, speed: .035 + Math.random() * .08, baseOpacity: material.opacity });
    }

    const carGeometry = new THREE.BoxGeometry(.56, .34, 1.05);
    for (let i = 0; i < 12; i++) {
      const color = i % 2 ? 0xe8edf4 : 0x242a34;
      const car = new THREE.Mesh(carGeometry, new THREE.MeshStandardMaterial({ color, metalness: .28, roughness: .42 }));
      car.position.set(((i % 6) - 2.5) * .78, .32, 5 - Math.floor(i / 6) * 14);
      city.add(car);
      for (const side of [-1, 1]) {
        const tail = new THREE.PointLight(i % 2 ? 0xff443d : 0xffd8a0, 1.6, 2.8);
        tail.position.set(side * .2, .28, car.position.z + .5);
        car.add(tail);
      }
    }

    const ambientGlow = new THREE.PointLight(0x315d91, 30, 35);
    ambientGlow.position.set(0, 8, -25);
    scene.add(ambientGlow);

    function updateExposure() {
      const strength = exposureStrength();
      traffic.forEach(({ line, halo, baseOpacity }) => {
        line.material.opacity = clamp(baseOpacity * (.35 + strength * .82), .12, .95);
        line.scale.z = .55 + strength * .48;
        halo.userData.exposureOpacity = clamp(.12 + strength * .3, .12, .58);
        halo.material.opacity = halo.userData.exposureOpacity;
        halo.scale.setScalar(.7 + strength * .55);
      });
      if (valueLabel) valueLabel.textContent = exposureLabels[shutter];
      range?.setAttribute('aria-valuetext', exposureAriaLabels[shutter]);
      if (range) range.style.setProperty('--progress', (shutter / 5 * 100) + '%');
      presets.forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.shutterPreset) === shutter)));
    }

    function render(time) {
      traffic.forEach(({ halo, head, headGlow, curve, phase, speed, direction }) => {
        const pulse = .78 + Math.sin(time * (1.1 + speed * 8) + phase) * .22;
        halo.material.opacity = halo.userData.exposureOpacity * pulse;
        const progress = ((time * speed * .055 + phase * .071) % 1 + 1) % 1;
        const point = curve.getPointAt(direction > 0 ? progress : 1 - progress);
        head.position.copy(point);
        headGlow.position.set(point.x, point.y + .015, point.z);
      });
      windows.forEach(({ mesh, phase, base }) => {
        mesh.material.opacity = base * (.88 + Math.sin(time * .24 + phase) * .12);
      });
      camera.position.x = Math.sin(time * .055) * .24;
      camera.position.y = 5.2 + Math.sin(time * .08) * .08;
      camera.lookAt(0, 1.2, -12);
      renderer.render(scene, camera);
    }

    function resize() {
      const width = Math.max(1, stage.clientWidth);
      const height = Math.max(1, stage.clientHeight);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.fov = width < 650 ? 51 : 43;
      camera.position.z = width < 650 ? 18 : 15.5;
      camera.updateProjectionMatrix();
      clock.update();
      render(clock.getElapsed());
    }

    function syncAnimation() {
      if (!renderer || disposed) return;
      if (inView && pageVisible && !reducedMotion.matches) {
        renderer.setAnimationLoop(() => { clock.update(); render(clock.getElapsed()); });
      } else {
        renderer.setAnimationLoop(null);
        clock.update();
        render(clock.getElapsed());
      }
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
      syncAnimation();
    }, { threshold: .01 });
    observer.observe(stage);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(stage);
    document.addEventListener('visibilitychange', () => {
      pageVisible = !document.hidden;
      syncAnimation();
    });
    reducedMotion.addEventListener?.('change', syncAnimation);
    canvas.addEventListener('webglcontextlost', event => {
      event.preventDefault();
      renderer.setAnimationLoop(null);
      if (status) status.textContent = '3D paused · restore to retry';
    });
    canvas.addEventListener('webglcontextrestored', () => {
      if (status) status.textContent = 'Live city simulation';
      syncAnimation();
    });

    updateExposure();
    resize();
    syncAnimation();
    if (status) status.textContent = reducedMotion.matches ? 'Static scene · reduced motion' : 'Live city simulation';

    window.addEventListener('pagehide', () => {
      disposed = true;
      observer.disconnect();
      resizeObserver.disconnect();
      renderer.setAnimationLoop(null);
      clock.disconnect();
      renderer.dispose();
      scene.traverse(object => {
        object.geometry?.dispose?.();
        if (Array.isArray(object.material)) object.material.forEach(material => material.dispose());
        else object.material?.dispose?.();
      });
      glowTexture.dispose();
    }, { once: true });
  } catch (error) {
    console.warn('Traffic hero WebGL unavailable; retaining CSS fallback.', error);
    if (status) status.textContent = 'Static fallback · 3D unavailable';
    canvas.hidden = true;
  }
}
