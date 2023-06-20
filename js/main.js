const navLinks = document.querySelectorAll('.nav-links');


navLinks.forEach(function (link) {

   link.addEventListener('click', function (e) {
    const currentLink =document.querySelector("active");

    currentLink.classList.remove("active");
    e.target.classList.add("active")
  });
});