// preloader script
var loader = document.getElementById("preloader");
// load event
window.addEventListener("load", function() {
    // to hide loader we target css
    loader.style.display = "none";
})

// For the animation text in first
var typed = new Typed(".typing", {
    strings: ["YouTuber", "Coder", "Competative Coder", "Front-End Developer", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});