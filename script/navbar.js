let navBar = document.querySelector(".navbar")
let navLinks = document.querySelectorAll(".navbar__list__item")

let menu = document.querySelector(".menu")
let closeIcon = document.querySelector(".navbar__close-btn")

window.onscroll = function() {scrollFunction()};

menu.addEventListener("click", OpenNav)

function OpenNav(){
    navBar.style.left = "0"
}

closeIcon.addEventListener("click", CloseNav)

function CloseNav(){
    navBar.style.left = "-500px"
}

function scrollFunction() {

    if(window.screen.width >= 880){
        navBar.style.left = "0"
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

            navBar.style.height = "3rem";

            navLinks.forEach(navLink => {
                navLink.style.fontSize = "1rem";
            })

        } else {
            navBar.style.height = "10rem";
            navLinks.forEach(navLink => {
                navLink.style.fontSize = "1.4rem";
            })

        }
    }

    else{

        navBar.style.height = "100vh";


    }

}