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


// js for certificate section
var certify = document.querySelectorAll('.certificates');
var btn = document.querySelector('.load-more');
var current = 3;
btn.addEventListener('click', function() {
    for (var i = current; i < current + 3; i++) {
        if (certify[i]) {
            certify[i].style.display = 'block';
        }
    }
    current += 3;

    // when the certificates will end
    if (current >= certify.length) {
        event.target.style.display = 'none';
    }
})

// js for send email
function sendmail() {
    // Password: "10BB648675097F0F87A25E25A3FDFA4EA52A",
    Email.send({
        SecureToken: "6c468d4e-fdc3-4a73-bf75-3dcb3d3239c4",
        To: 'gyanabarik794@gmail.com',
        From: document.getElementById('mail').value,
        Subject: "Message From Your Portfolio ",
        Body: "Name: " + document.getElementById('name').value +
            "<br> Email: " + document.getElementById("mail").value +
            "<br> Message: " + document.getElementById("query").value
    }).then(
        message => alert(message)
    );
}
// scroll top
const topbtn = document.getElementById('sc-top');

// when user scroll down 100px from the top of the document , shows the button

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop) {
        topbtn.style.display = "block";
    } else {
        topbtn.style.display = "none";
    }
}

topbtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// mail
function sendmail(params) {
    var temp = {
        from_name: document.getElementById("firname").value,
        to_name: document.getElementById("youmail").value,
        message: document.getElementById("query").value
    };
    emailjs.send('service_lovxnv4', 'template_ifl1g7e', temp)
        .then(function(res) {
            console.log("success", res.status);
        })
}