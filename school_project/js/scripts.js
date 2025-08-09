const in1 = document.querySelector(".right-res #in1");
const menu = document.querySelector(".menu");

in1.addEventListener("click", () => {
    if (in1.checked) {
        menu.classList.add("menu-show");
    }
    else {
        menu.classList.remove("menu-show");
    }
})
// ---------------------- navbar --------------------------