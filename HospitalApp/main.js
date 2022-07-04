const navMenu = document.querySelector('#nav__items');
const openNavMenu = document.querySelector('#open__nav-btn');
const closeNavMenu = document.querySelector('#close__nav-btn');


openNavMenu.addEventListener('click', () => {
    openNavMenu.style.display = 'none';
    navMenu.style.display = 'flex';
    closeNavMenu.style.display = 'inline-block';
})

const closeNav = () => {
    openNavMenu.style.display = 'inline-block';
    navMenu.style.display = 'none';
    closeNavMenu.style.display = 'none';
}
closeNavMenu.addEventListener('click', closeNav );