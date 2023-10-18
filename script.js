var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});

var swiper = new Swiper(".reviews-slider",{
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    grabCursor:true,
    loop:true,
    spaceBetween:20,
    breakpoints: {
        0: {
        slidesPreView: 1,
    },
    768: {
        slidesPreView: 2,
    },
    991: {
        slidesPreView: 3,
    },

    },

});

