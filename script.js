document.addEventListener("DOMContentLoaded", function () {

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
    if (btnScroll) {
        btnScroll.onclick = function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    const textInfo = document.getElementById("text-inf");
    if (textInfo) {
        textInfo.style.opacity = "1";
    }

    const seccionAbout = document.getElementById("seccionAbout");
    if (seccionAbout) {
        seccionAbout.addEventListener("click", function () {
            window.location.href = "index.html#seccionAbout";
        });
    }

    const myModal = document.getElementById('myModal');
    const myInput = document.getElementById('myInput');
    if (myModal && myInput) {
        myModal.addEventListener('shown.bs.modal', function () {
            myInput.focus();
        });
    }
});
