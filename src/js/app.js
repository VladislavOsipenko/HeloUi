import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


import Swiper, { Navigation, Pagination } from "swiper";

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.main__swiper', {
        modules: [Navigation, Pagination],
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        grabCursor: true,
        slidesPerView: 6,
   
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true
        },
        breakpoints: {
            992: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 4,
            },
            576: {
                slidesPerView: 3,
            },
            320: {
                slidesPerView: 2,
            }
            

        }
        
    });
    const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__li'),
        hamburger = document.querySelector('.header__hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('header__hamburger_active');
                menu.classList.toggle('header__menu_active');
            })
        })
});



