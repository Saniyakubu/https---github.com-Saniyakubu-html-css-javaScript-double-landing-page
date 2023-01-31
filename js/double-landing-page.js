const surface = document.querySelector(".surface-laptop");
const macbook = document.querySelector(".macbook-air");
const h1 = document.querySelector(".h1");
const h1_2 = document.querySelector(".h12");

h1.style.fontSize = "1rem";
h1_2.style.fontSize = "1rem";
surface.addEventListener("mouseenter", function () {
  macbook.classList.remove("active");
  surface.classList.add("active");
  h1.style.fontSize = "2.5rem";
});
surface.addEventListener("mouseleave", function () {
  surface.classList.remove("active");
  h1.style.fontSize = "1rem";
});

macbook.addEventListener("mouseenter", function () {
  macbook.classList.add("active");
  surface.classList.remove("active");
  h1_2.style.fontSize = "2.5rem";
});
macbook.addEventListener("mouseleave", function () {
  macbook.classList.remove("active");
  surface.classList.remove("active");
  h1_2.style.fontSize = "1rem";
});
