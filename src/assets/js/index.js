import '../styles/main.scss'

window.$ = window.jQuery = require('jquery');
require("@fancyapps/fancybox");

if(document.querySelector('#map') ){
    require('./map.js');
}

import Inputmask from "inputmask";
import Masonry from 'masonry-layout';
import Swiper from 'swiper/swiper-bundle';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


document.querySelectorAll('.grid').forEach(function (el) {
    new Masonry(el, {});
});

new Swiper('.main-documents .swiper', {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1,
    speed: 600,
    navigation: {
        nextEl: '.main-documents__next',
        prevEl: '.main-documents__prev',
    },
    breakpoints: {
        1489: {
            spaceBetween: 44,
            slidesPerView: 5,
        },
        989: {
            spaceBetween: 44,
            slidesPerView: 4,
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

new Swiper('.main-clients .swiper', {
    loop: true,
    spaceBetween: 53,
    slidesPerView: 1,
    speed: 600,
    navigation: {
        nextEl: '.main-clients__next',
        prevEl: '.main-clients__prev',
    },
    breakpoints: {
        1489: {
            spaceBetween: 53,
            slidesPerView: 7,
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







if(document.querySelector('.main-about') ){
    gsap.from(".main-about__img", {
        duration: 100,
        scrollTrigger: {
            trigger: ".main-about__col",
            endTrigger: ".main-about__col",
            scrub : 2,
            start: "20px 100%",
            end: "120px 100%",
        },
        x: -200,

        opacity: "0",
    });
}
if(document.querySelector('.main-about__col') ){
    gsap.from(".main-about__col:nth-of-type(2)", {
        duration: 100,
        scrollTrigger: {
            trigger: ".main-about__col",
            endTrigger: ".main-about__col",
            scrub : 2,
            start: "20px 100%",
            end: "120px 100%",
        },
        y: 100,

        opacity: "0",
    });
}
if(document.querySelector('.main-produce') ){
    gsap.from(".main-produce__overlay", {
        duration: 100,
        scrollTrigger: {
            trigger: ".main-produce__overlay",
            endTrigger: ".main-produce__overlay",
            scrub : 1,
            start: "20px 100%",
            end: "120px 100%",
        },
        // y: 100,
        scale: 0.8,
        opacity: "0",
    });
}
if(document.querySelector('.main-documents') ){
    gsap.from(".main-documents__overlay", {
        duration: 100,
        scrollTrigger: {
            trigger: ".main-documents__overlay",
            endTrigger: ".main-documents__overlay",
            scrub : 1,
            start: "20px 100%",
            end: "120px 100%",
        },
        // y: 100,
        scale: 0.8,
        opacity: "0",
    });
}
if(document.querySelector('.main-works') ){
    gsap.from(".main-works__overlay", {
        duration: 100,
        scrollTrigger: {
            trigger: ".main-works__overlay",
            endTrigger: ".main-works__overlay",
            scrub : 1,
            start: "20px 100%",
            end: "120px 100%",
        },
        // y: 100,
        scale: 0.8,
        opacity: "0",
    });
}
if(document.querySelector('.main-advantages') ){
    gsap.from(".main-advantages__list", {
        duration: 100,
        scrollTrigger: {
            trigger: ".main-advantages__list",
            endTrigger: ".main-advantages__list",
            scrub : 1,
            start: "20px 100%",
            end: "120px 100%",
        },
        y: 100,
        opacity: "0",
    });
}
if(document.querySelector('.main-requirements') ){
    gsap.from(".main-requirements__list", {
        duration: 100,
        scrollTrigger: {
            trigger: ".main-requirements__list",
            endTrigger: ".main-requirements__list",
            scrub : 1,
            start: "20px 100%",
            end: "120px 100%",
        },
        y: 100,
        opacity: "0",
    });
}
if(document.querySelector('.main-clients') ){
    gsap.from(".main-clients .swiper", {
        duration: 100,
        scrollTrigger: {
            trigger: ".main-clients .swiper",
            endTrigger: ".main-clients .swiper",
            scrub : 1,
            start: "20px 100%",
            end: "120px 100%",
        },
        y: 100,
        opacity: "0",
    });
}
if(document.querySelector('.main-map') ){
    gsap.from(".main-map__info", {
        duration: 100,
        scrollTrigger: {
            trigger: ".main-map",
            endTrigger: ".main-map",
            scrub : 1.5,
            start: "20px 100%",
            end: "120px 100%",
        },
        x: -200,
    });
}








