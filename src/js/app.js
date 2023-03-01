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
                slidesPerView: 6,
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

    $('ul.main__buttons').on('click', 'li:not(.main__btn-active)', function() {
        $(this)
            .addClass('main__btn-active').siblings().removeClass('main__btn-active')
            .closest('div.container').find('div.main__pictures').removeClass('main__pictures-active').eq($(this).index()).addClass('main__pictures-active');
    });


    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Please specify your name",
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com"
                }
            },
            errorClass: 'validator',
        });
    }   

    validateForms('#footer-form');
    validateForms('#modal__form');
    validateForms('#modal__forma');



    $('[data-modal=modal]').on('click', function() {
        $('.overlay, #modal').fadeIn('slow');
    });

    $('[data-signin=signin]').on('click', function() {
        $('.overlay, #signin').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #modal, #thanks, #signin').fadeOut('slow');
    });


    $(document).ready(function () {
        $('.footer__item-title').click(function (event) {
            if($('.footer').hasClass('one')) {
                $('.footer__item-title').not($(this)).removeClass('.active');
                $('.footer__item-wrapper').not($(this).next()).slideUp(300);

            }
            $(this).toggleClass('active').next().slideToggle(300);
        });
    });

    const animItems = document.querySelectorAll('._anim-items');

    if(animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart; 
                }

                if ((scrollY > animItemOffset - animItemPoint) && scrollY <(animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                    
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(), 
                scrollLeft = window.scrollX || document.documentElement.scrollLeft,
                scrollTop = window.scrollY || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }
        setTimeout(() => {
            animOnScroll();
        }, 400);
        

    }
});



