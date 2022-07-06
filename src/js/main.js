// my scripts
console.log("Welcome");

// Library
import Bootstrap from "bootstrap";
import fancybox from "@fancyapps/ui";
import jQuery from "jquery";
import Swiper from "swiper";

// Only Swiper scripts
const myy = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

