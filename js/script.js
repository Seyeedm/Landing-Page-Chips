let menu = document.querySelector(".nav_list");
let menuBtn = document.querySelector(".btn_humber");
let menubtnIcon = document.querySelector(".btn_humber i");

menuBtn.addEventListener("click", function () {
    if (menubtnIcon.classList.contains("fa-bars")) {
        menu.style.left = "0"
        menu.style.width = "100%"
        menubtnIcon.classList="fa fa-times fa-3x"
    }else{
        menu.style.left = "-112"
        menu.style.width = "0"
        menubtnIcon.classList="fa fa-bars fa-3x"
    }
})