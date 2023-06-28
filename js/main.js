//menu
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})





const navList = document.querySelectorAll('.nav-list');

navList.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const currentLink = document.querySelector('.active');

    currentLink.classList.remove('active');
    e.target.classList.add('active');
  });
});

