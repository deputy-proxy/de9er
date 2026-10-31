const controls = document.querySelectorAll("[data-mode]");
const screen = document.querySelector(".screen");
const heading = screen?.querySelector(".screen-head b");
const note = screen?.querySelector(".screen-note");
const hint = document.querySelector(".hint");

const descriptions = {
  overview: ["Overview", "A shared view of the whole picture."],
  focus: ["Focus", "A simplified view of the next important task."],
  timeline: ["Timeline", "A sequence that makes order and progress easier to scan."]
};

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const mode = control.dataset.mode;
    if (!screen || !descriptions[mode]) return;

    screen.dataset.mode = mode;
    controls.forEach((item) => {
      const selected = item === control;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });

    heading.textContent = descriptions[mode][0];
    note.textContent = descriptions[mode][1];
    hint.textContent = `${descriptions[mode][0]} mode selected.`;
  });
});