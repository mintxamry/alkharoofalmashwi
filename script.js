document.addEventListener("DOMContentLoaded", () => {

  const hero = document.querySelector(".hero");

  setTimeout(() => {
    hero.classList.add("animate");
  }, 150);

  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(sec => observer.observe(sec));

});document.addEventListener("DOMContentLoaded", function () {

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  console.log("JS Loaded"); // check in browser console

  const images = document.querySelectorAll("img");

  images.forEach(img => {
    img.style.cursor = "pointer";

    img.addEventListener("click", function () {
      console.log("Image clicked"); // debug

      lightbox.style.display = "flex";
      lightboxImg.src = this.src;
    });
  });

  // close on click
  lightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });

});