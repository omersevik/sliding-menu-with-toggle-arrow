var menuOpen = false;
function Merhaba() {
    let contain = document.getElementById("container");
    let arrow = document.getElementById("arrow");
    let greenArrow = document.querySelector(".green-arrow");
    
    if (!menuOpen) {
        contain.style.transform = "translateX(0px)";
        arrow.style.transform = "translateX(130px)";
        greenArrow.style.transform = "rotate(180deg)";
        menuOpen = true;
    } else {
        contain.style.transform = "translateX(-210px)";
        arrow.style.transform = "translateX(0px)";
        greenArrow.style.transform = "rotate(0deg)";
        menuOpen = false;
    }
}