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

//SwiperJs Interaction

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints:{
        //width >=600px
        600: {
            slidesPerView: 2
        },

        //width >=1024px
        1024: {
            slidesPerView: 3
        }
    }
  });