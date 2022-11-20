// Libraries
import Bootstrap from "bootstrap";
// import fancybox from "@fancyapps/ui";
// import jQuery from "jquery";
import Swiper from "swiper/bundle";
import { gsap } from "gsap"

// Only Swiper scripts
const myy = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
