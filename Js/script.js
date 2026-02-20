function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.style.background = window.scrollY > 50 ? "#000" : "transparent";
});
