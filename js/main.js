
const navLinks = document.querySelectorAll('.nav-links');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

navLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const currentLink = document.querySelector('.active');

    currentLink.classList.remove('active');
    e.target.classList.add('active');
  });
});

hamburger.addEventListener('click', function () {
  navMenu.classList.toggle('show');
});
