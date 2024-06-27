// CAMBIAR OPACIDAD DEL NAVBAR

function navOpacoHamburguesa() {
    const nav = document.querySelector('.navbar');
    const contNav = document.querySelector('.container-nav');

    if(nav.classList.contains('bg-opacity-10')) {

        nav.classList.remove('bg-opacity-10')
        contNav.classList.remove('bg-opacity-50')
    }else{
        nav.classList.add('bg-opacity-10')
        contNav.classList.add('bg-opacity-50')
    }
}

function navOpacoScrolled() {
    const nav = document.querySelector('.navbar');
    const contNav = document.querySelector('.container-nav');

    if(window.scrollY >= 70) {
        nav.classList.remove('bg-opacity-10')
        contNav.classList.remove('bg-opacity-50')
    }
    else if(window.scrollY < 70){
        nav.classList.add('bg-opacity-10')
        contNav.classList.add('bg-opacity-50')
    }
}

window.addEventListener("scroll", navOpacoScrolled);

// MOSTRAR FONDO CUANDO SEA VISIBLE "SOBRE NOSOTROS"

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // El elemento está visible en pantalla
            entry.target.classList.add('visible');
        }
    });
});

const elemento = document.getElementById("contenidosn");
observer.observe(elemento);

// BOTON VER CABAÑAS

function zoombtn(elem) {
    elem.style.fontSize= "32px";
    elem.style.width= "255px";
    elem.style.height= "65px";
    elem.style.transitionDuration= "1s";
}
function restorebtn(elem) {
    elem.style.fontSize= "30px";
    elem.style.width= "250px";
    elem.style.height= "60px";
    elem.style.transitionDuration= "1s";
}