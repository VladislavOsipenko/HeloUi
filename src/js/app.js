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
        
        
    });
});



