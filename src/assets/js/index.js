import '../styles/main.scss'
window.$ = window.jQuery = require('jquery');
require("@fancyapps/fancybox");
require('./map.js');
import Inputmask from "inputmask";
import Masonry from 'masonry-layout';
import Swiper from 'Swiper';

document.querySelectorAll('.grid').forEach(function (el) {
    new Masonry(el, {});
});

new Swiper('.main-documents .swiper-container', {
    loop: true,
    spaceBetween: 44,
    slidesPerView: 5,
    speed: 600,
    navigation: {
        nextEl: '.main-documents__next',
        prevEl: '.main-documents__prev',
    },
    breakpoints: {
        1489: {
            spaceBetween: 17,
            slidesPerView: 4,
        },
        989: {
            spaceBetween: 15,
            slidesPerView: 3,
        },
        767: {
            spaceBetween: 15,
            slidesPerView: 2,
        },
        575: {
            spaceBetween: 15,
            slidesPerView: 1,
        }
    },
});
new Swiper('.main-clients .swiper-container', {
    loop: true,
    spaceBetween: 53,
    slidesPerView: 7,
    speed: 600,
    navigation: {
        nextEl: '.main-clients__next',
        prevEl: '.main-clients__prev',
    },
    breakpoints: {
        1489: {
            spaceBetween: 53,
            slidesPerView: 4,
        },
        989: {
            spaceBetween: 53,
            slidesPerView: 3,
        },
        767: {
            spaceBetween: 53,
            slidesPerView: 2,
        },
        575: {
            spaceBetween: 53,
            slidesPerView: 1,
        }
    },
});

$('[data-fancybox]').fancybox({
    autoFocus: false
});

Inputmask({"mask": "+7(999) 999-9999"}).mask("input[type='tel']");

$(window).on('load', function () {
    // $('.wpcf7-form button').click(function (e) {
    //     $(this).addClass('loading');
    // });

    // document.addEventListener('wpcf7submit', function (event) {
    //     $('.wpcf7-form button').removeClass('loading');
    // }, false);
});