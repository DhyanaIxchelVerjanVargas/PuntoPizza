const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

cargarEventListeners();
function cargarEventListeners(){
    //Quitar el menú
    navMenu.addEventListener('click', removeClass);
}

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
})

function removeClass(e){
    if(e.target.classList.contains('nav-menu-link')){
        navMenu.classList.remove("nav-menu_visible");
    }
}
