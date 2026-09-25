const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = contactForm.elements.name.value.trim();
  document.querySelector("#form-response").textContent =
    `Thank you, ${name}! I'll reply soon.`;

  contactForm.reset();
}); 