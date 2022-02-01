// preloader script
var loader = document.getElementById("preloader");
// load event
window.addEventListener("load", function() {
    // to hide loader we target css
    loader.style.display = "none";
})

// hamburgermenu script
const opennav = () => {
    if (document.getElementById('mysidenav').style.width = "0px") {
        document.getElementById('mysidenav').style.width = "250px ";

    } else {
        document.getElementById('mysidenav').style.width = "250px ";
    }

}
const closenav = () => {
    document.getElementById('mysidenav').style.width = "0px ";
}

// For the animation text in first
var typed = new Typed(".typing", {
    strings: ["YouTuber", "Coder", "Competative Coder", "Front-End Developer", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});