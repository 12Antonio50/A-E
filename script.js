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

//Botón Scroll 
const btnScroll = document.getElementById("btn-scroll");

btnScroll.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

//Texto del home
window.onload = function () {
    const textInfo = document.getElementById("text-inf").style.opacity = "1";
    if (textInfo === "1") {
        document.getElementById("p-inf");
    }
};  