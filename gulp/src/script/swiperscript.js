const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loopedSlides: 8,
    loop: true,
    autoplay: {
        delay: 2500,
    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});