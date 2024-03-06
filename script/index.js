const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.nav-ul');
const menuClose = document.querySelector('.menu-icon');


menuButton.addEventListener('click', () => {
    nav.classList.toggle('oluchi');
});