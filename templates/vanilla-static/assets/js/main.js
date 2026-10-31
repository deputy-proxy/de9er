// Progressive enhancement entry point. Keep the page useful without JavaScript.
const year = document.querySelector("[data-current-year]");
if (year) year.textContent = String(new Date().getFullYear());
