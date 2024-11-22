
function cambiarNavBackground() {
    const navbars = document.querySelectorAll('.custom-nav, .custom-nav-about');

    navbars.forEach(navbar => {
        if (window.scrollY > 1) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

window.addEventListener('scroll', cambiarNavBackground);


const btnScroll = document.getElementById("btn-scroll");

btnScroll.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.onload = function () {
    const textInfo = document.getElementById("text-inf").style.opacity = "1";
    if (textInfo === "1") {
        document.getElementById("p-inf");
    }
};

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

function openModal() {
    myModal.addEventListener('shown.bs.modal', function () {
        myInput.focus()
    })
}

document.getElementById("seccionAbout").addEventListener("click", function () {
    window.location.href = "index.html#seccionAbout";
});
