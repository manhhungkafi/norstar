

var swiper =  new Swiper(".sl-testimonial", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
}); 
var swiper =  new Swiper(".sl-brand", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 12,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 12,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 12,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 12,
        },
    }
}); 
 
