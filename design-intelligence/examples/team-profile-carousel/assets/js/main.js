(() => {
  const root = document.querySelector('[data-team-carousel]');
  if (!root) return;

  const members = [
    { name: 'Alex Morgan', role: 'Founder & CEO', department: 'LEADERSHIP', initials: 'AM', bio: 'Brings a clear point of view to complex problems and turns ambitious ideas into focused direction.', email: 'alex@example.com', github: 'https://github.com/', portrait: 'one' },
    { name: 'Sam Rivera', role: 'Creative Director', department: 'DESIGN', initials: 'SR', bio: 'Connects strategy and craft, building identities and experiences that feel considered from every angle.', email: 'sam@example.com', github: 'https://github.com/', portrait: 'two' },
    { name: 'Jordan Lee', role: 'Head of Product', department: 'PRODUCT', initials: 'JL', bio: 'Makes complicated systems easier to understand, use and improve, one deliberate decision at a time.', email: 'jordan@example.com', github: 'https://github.com/', portrait: 'three' },
    { name: 'Taylor Brooks', role: 'Engineering Lead', department: 'ENGINEERING', initials: 'TB', bio: 'Builds resilient foundations for ambitious ideas, with an eye for the details people should never notice.', email: 'taylor@example.com', github: 'https://github.com/', portrait: 'four' },
    { name: 'Casey Kim', role: 'Research Director', department: 'RESEARCH', initials: 'CK', bio: 'Finds the signal in complex human needs and turns it into insight teams can act on.', email: 'casey@example.com', github: 'https://github.com/', portrait: 'five' }
  ];

  const card = root.querySelector('.profile-card');
  const tabs = [...root.querySelectorAll('[data-member]')];
  const markers = [...root.querySelectorAll('[data-go]')];
  const portrait = root.querySelector('[data-portrait]');
  const fields = {
    name: root.querySelector('[data-name]'),
    role: root.querySelector('[data-role]'),
    bio: root.querySelector('[data-bio]'),
    number: root.querySelector('[data-number]'),
    department: root.querySelector('[data-department]'),
    monogram: root.querySelector('[data-monogram]'),
    figure: root.querySelector('[data-figure]'),
    figureDepartment: root.querySelector('[data-figure-department]'),
    github: root.querySelector('[data-github]'),
    email: root.querySelector('[data-email]')
  };
  const copyItems = [fields.name, fields.role, fields.bio, ...root.querySelectorAll('.profile-kicker, .profile-links a')];
  const portraitItems = [fields.monogram, root.querySelector('.portrait-caption')];
  const metadataItems = [fields.number, fields.department];
  const gsap = window.gsap;
  const animationsEnabled = () => Boolean(gsap && !reducedMotion.matches);
  const interval = 6500;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeIndex = 0;
  let timer = null;
  let paused = false;
  let transition = null;
  let progressTween = null;
  let transitionToken = 0;

  function updateMember(member, index) {
    fields.name.textContent = member.name;
    fields.role.textContent = member.role;
    fields.bio.textContent = member.bio;
    fields.number.textContent = String(index + 1).padStart(2, '0') + ' / 05';
    fields.department.textContent = member.department;
    fields.monogram.textContent = member.initials;
    fields.figure.textContent = 'FIG. ' + String(index + 1).padStart(2, '0');
    fields.figureDepartment.textContent = member.department;
    fields.github.href = member.github;
    fields.github.setAttribute('aria-label', member.name + ' on GitHub');
    fields.email.href = 'mailto:' + member.email;
    fields.email.setAttribute('aria-label', 'Email ' + member.name);
    portrait.className = 'portrait portrait--' + member.portrait;

    tabs.forEach((tab, i) => tab.setAttribute('aria-pressed', String(i === index)));
    markers.forEach((marker, i) => marker.setAttribute('aria-pressed', String(i === index)));

    if (animationsEnabled()) {
      gsap.to(tabs.map((tab) => tab.querySelector('.tab-name')), { color: '#777c87', duration: 0.25, overwrite: true });
      gsap.to(tabs[index].querySelector('.tab-name'), { color: '#f4f2ed', duration: 0.35, ease: 'power2.out', overwrite: true });
      gsap.to(tabs.map((tab) => tab.querySelector('.tab-index')), { color: '#666b76', duration: 0.25, overwrite: true });
      gsap.to(tabs[index].querySelector('.tab-index'), { color: '#d3c6a1', duration: 0.3, ease: 'power2.out', overwrite: true });
      gsap.to(tabs.map((tab) => tab.querySelector('.tab-arrow')), { opacity: 0, x: -3, y: 3, duration: 0.2, overwrite: true });
      gsap.to(tabs[index].querySelector('.tab-arrow'), { opacity: 1, x: 0, y: 0, duration: 0.3, ease: 'power2.out', overwrite: true });
      gsap.to(markers.map((marker) => marker.querySelector('span')), {
        scaleX: 0, opacity: 0.55, duration: 0.2, ease: 'power2.out', overwrite: true
      });
      gsap.set(markers[index].querySelector('span'), { scaleX: 0, opacity: 1 });
    }
  }

  function render(index, announce = true) {
    activeIndex = (index + members.length) % members.length;
    const member = members[activeIndex];
    const token = ++transitionToken;
    if (transition) transition.kill();
    stopTimer();

    card.setAttribute('aria-live', announce ? 'polite' : 'off');
    if (announce) card.setAttribute('aria-label', 'Team member ' + (activeIndex + 1) + ' of 5: ' + member.name);

    if (!animationsEnabled()) {
      updateMember(member, activeIndex);
      restartTimer();
      return;
    }

    const outgoing = [...copyItems, ...portraitItems, ...metadataItems];
    transition = gsap.timeline({ defaults: { overwrite: 'auto' }, onComplete: () => { transition = null; } })
      .to(outgoing, { y: -10, opacity: 0, duration: 0.18, stagger: 0.012, ease: 'power2.in' })
      .to(portrait, { opacity: 0.35, scale: 1.035, duration: 0.22, ease: 'power2.inOut' }, '<')
      .add(() => {
        if (token !== transitionToken) return;
        updateMember(member, activeIndex);
        gsap.set(copyItems, { y: 14, opacity: 0 });
        gsap.set(portraitItems, { y: 10, opacity: 0 });
        gsap.set(metadataItems, { y: 7, opacity: 0 });
        gsap.set(portrait, { opacity: 0.35, scale: 1.035 });
      })
      .to(portrait, { opacity: 1, scale: 1, duration: 0.75, ease: 'power3.out' })
      .to(copyItems, { y: 0, opacity: 1, duration: 0.55, stagger: 0.055, ease: 'power3.out' }, '-=0.55')
      .to(portraitItems, { y: 0, opacity: 1, duration: 0.5, stagger: 0.045, ease: 'power3.out' }, '<0.08')
      .to(metadataItems, { y: 0, opacity: 1, duration: 0.45, stagger: 0.04, ease: 'power3.out' }, '<0.04');

    restartTimer();
  }

  function stopTimer() {
    window.clearTimeout(timer);
    timer = null;
  }

  function stopProgress() {
    if (progressTween) progressTween.kill();
    progressTween = null;
  }

  function restartTimer() {
    stopTimer();
    stopProgress();
    const markerFills = markers.map((marker) => marker.querySelector('span'));
    if (animationsEnabled()) {
      gsap.set(markerFills, { scaleX: 0, transformOrigin: 'left center', opacity: 0.55 });
      gsap.set(markerFills[activeIndex], { opacity: 1 });
    } else {
      gsap?.set(markerFills, { scaleX: 0 });
      if (gsap) gsap.set(markerFills[activeIndex], { scaleX: 1, opacity: 1 });
    }
    if (paused || reducedMotion.matches || document.hidden) {
      card.classList.add('is-paused');
      return;
    }
    card.classList.remove('is-paused');
    if (animationsEnabled()) {
      progressTween = gsap.to(markerFills[activeIndex], {
        scaleX: 1, duration: interval / 1000, ease: 'none', overwrite: true
      });
    }
    timer = window.setTimeout(() => render(activeIndex + 1, false), interval);
  }

  function pause() {
    paused = true;
    card.classList.add('is-paused');
    stopTimer();
    if (progressTween) progressTween.pause();
  }

  function resume() {
    paused = false;
    restartTimer();
  }

  tabs.forEach((tab) => tab.addEventListener('click', () => { pause(); render(Number(tab.dataset.member)); }));
  markers.forEach((marker) => marker.addEventListener('click', () => { pause(); render(Number(marker.dataset.go)); }));
  root.querySelector('[data-prev]').addEventListener('click', () => { pause(); render(activeIndex - 1); });
  root.querySelector('[data-next]').addEventListener('click', () => { pause(); render(activeIndex + 1); });

  card.addEventListener('mouseenter', pause);
  card.addEventListener('mouseleave', resume);
  root.addEventListener('focusin', pause);
  root.addEventListener('focusout', (event) => { if (!root.contains(event.relatedTarget)) resume(); });
  document.addEventListener('visibilitychange', restartTimer);
  reducedMotion.addEventListener?.('change', restartTimer);

  root.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); pause(); render(activeIndex + 1); }
    else if (event.key === 'ArrowLeft') { event.preventDefault(); pause(); render(activeIndex - 1); }
  });

  card.classList.add('is-enhanced');
  render(0, false);
})();
