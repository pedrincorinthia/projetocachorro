const menuBnt = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links-mobile")
const menuBtnIcon = menuBnt.querySelector("i")

menuBnt.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")
    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars" 
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars" );
});

const animacao = {
    distance: "50px", // distancia que a animação irá percorrer
    origin: "bottom", // origem da animação
    duration: 1000, // tempo da animação
  };
  
  ScrollReveal().reveal(".servico", {
    ...animacao,
    delay: 50,
    interval: 100,
  });
  
  ScrollReveal().reveal(".dog", {
    ...animacao,
    delay: 50,
    interval: 100,
  });