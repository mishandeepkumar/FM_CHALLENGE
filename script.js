const menu = document.querySelector(".menu");
const navBar = document.querySelector(".nav-bar");

const creations = document.querySelectorAll(".creation");

menu.addEventListener("click",()=>{
    menu.classList.toggle("open");
    navBar.classList.toggle("open");
});

creations.forEach(container=>{
    container.addEventListener("mouseover",()=>{
        container.classList.add("hover");
    });
    container.addEventListener("mouseout",()=>{
        container.classList.remove("hover");
    })
});