const form = document.querySelector(".form");
const status = document.querySelector(".form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (status) status.textContent = "Demo only: no information was sent or stored.";
});