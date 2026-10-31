(() => {
  const root = document.querySelector('[data-team-carousel]');
  if (!root) return;

  const members = [
    {
      name: 'Alex Morgan', role: 'Founder & CEO', department: 'LEADERSHIP', initials: 'AM',
      bio: 'Brings a clear point of view to complex problems and turns ambitious ideas into focused direction.',
      email: 'alex@example.com', github: 'https://github.com/', portrait: 'one'
    },
    {
      name: 'Sam Rivera', role: 'Creative Director', department: 'DESIGN', initials: 'SR',
      bio: 'Connects strategy and craft, building identities and experiences that feel considered from every angle.',
      email: 'sam@example.com', github: 'https://github.com/', portrait: 'two'
    },
    {
      name: 'Jordan Lee', role: 'Head of Product', department: 'PRODUCT', initials: 'JL',
      bio: 'Makes complicated systems easier to understand, use and improve, one deliberate decision at a time.',
      email: 'jordan@example.com', github: 'https://github.com/', portrait: 'three'
    },
    {
      name: 'Taylor Brooks', role: 'Engineering Lead', department: 'ENGINEERING', initials: 'TB',
      bio: 'Builds resilient foundations for ambitious ideas, with an eye for the details people should never notice.',
      email: 'taylor@example.com', github: 'https://github.com/', portrait: 'four'
    },
    {
      name: 'Casey Kim', role: 'Research Director', department: 'RESEARCH', initials: 'CK',
      bio: 'Finds the signal in complex human needs and turns it into insight teams can act on.',
      email: 'casey@example.com', github: 'https://github.com/', portrait: 'five'
    }
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

  const interval = 6500;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeIndex = 0;
  let timer = null;
  let paused = false;
  let transitionTimer = null;

  function render(index, announce = true) {
    activeIndex = (index + members.length) % members.length;
    const member = members[activeIndex];

    card.classList.add('is-changing');
    window.clearTimeout(transitionTimer);
    transitionTimer = window.setTimeout(() => {
      fields.name.textContent = member.name;
      fields.role.textContent = member.role;
      fields.bio.textContent = member.bio;
      fields.number.textContent = String(activeIndex + 1).padStart(2, '0') + ' / 05';
      fields.department.textContent = member.department;
      fields.monogram.textContent = member.initials;
      fields.figure.textContent = 'FIG. ' + String(activeIndex + 1).padStart(2, '0');
      fields.figureDepartment.textContent = member.department;
      fields.github.href = member.github;
      fields.github.setAttribute('aria-label', member.name + ' on GitHub');
      fields.email.href = 'mailto:' + member.email;
      fields.email.setAttribute('aria-label', 'Email ' + member.name);
      portrait.className = 'portrait portrait--' + member.portrait;
      tabs.forEach((tab, i) => tab.setAttribute('aria-pressed', String(i === activeIndex)));
      markers.forEach((marker, i) => marker.setAttribute('aria-pressed', String(i === activeIndex)));
      card.classList.remove('is-changing');
    }, reducedMotion.matches ? 0 : 160);

    card.setAttribute('aria-live', announce ? 'polite' : 'off');
    if (announce) card.setAttribute('aria-label', 'Team member ' + (activeIndex + 1) + ' of 5: ' + member.name);
    restartTimer();
  }

  function stopTimer() {
    window.clearTimeout(timer);
    timer = null;
  }

  function restartTimer() {
    stopTimer();
    if (paused || reducedMotion.matches || document.hidden) { card.classList.add('is-paused'); return; }
    card.classList.remove('is-paused');
    timer = window.setTimeout(() => render(activeIndex + 1, false), interval);
  }

  function pause() {
    paused = true;
    card.classList.add('is-paused');
    stopTimer();
  }

  function resume() {
    paused = false;
    restartTimer();
  }

  tabs.forEach((tab) => tab.addEventListener('click', () => {
    pause();
    render(Number(tab.dataset.member));
  }));
  markers.forEach((marker) => marker.addEventListener('click', () => {
    pause();
    render(Number(marker.dataset.go));
  }));

  root.querySelector('[data-prev]').addEventListener('click', () => {
    pause();
    render(activeIndex - 1);
  });
  root.querySelector('[data-next]').addEventListener('click', () => {
    pause();
    render(activeIndex + 1);
  });

  card.addEventListener('mouseenter', pause);
  card.addEventListener('mouseleave', resume);
  root.addEventListener('focusin', pause);
  root.addEventListener('focusout', (event) => {
    if (!root.contains(event.relatedTarget)) resume();
  });
  document.addEventListener('visibilitychange', restartTimer);
  reducedMotion.addEventListener?.('change', restartTimer);

  root.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      pause();
      render(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      pause();
      render(activeIndex - 1);
    }
  });

  card.classList.add('is-enhanced');
  render(0, false);
})();
