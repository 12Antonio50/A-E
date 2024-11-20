window.onscroll = function () {
    cambiarNavBackground();
};

function cambiarNavBackground() {
    const navbar = document.querySelector('.custom-nav');
    if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

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

document.getElementById("seccionAbout").addEventListener("click", function() {
    window.location.href = "index.html#seccionAbout";
});