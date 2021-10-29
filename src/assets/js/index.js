import '../styles/main.scss'

window.$ = window.jQuery = require('jquery');
// import * as $ from 'jquery';
// import 'bootstrap';
require("@fancyapps/fancybox");
// require('./filter.js');
// require('./forms.js');

// require('masonry-layout');
// var Masonry = require('masonry-layout');
import Masonry from 'masonry-layout';
import Swiper from 'Swiper';


document.querySelectorAll('.grid').forEach(function (el) {
        new Masonry( el, {

    });
});

var certificatesSwiper = new Swiper('.main-documents .swiper-container', {
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