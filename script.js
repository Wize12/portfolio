// Toggle button click to show/hide navbar
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// Typed.js animation for text
var typed = new Typed(".input", {
    strings: ["Web Developer", "Aspiring Real Estate Virtual Assistant with a Technical Background"],
    typeSpeed: 70,
    backSpeed: 55,
    loop: true
});
