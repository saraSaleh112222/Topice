// slide swiper

var swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBllests:true,
        clickable:true
    },
    autoplay:{
        delay:2500,
    },
    loop:true
    });



var swiper = new Swiper(".sale_sec", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBllests:true,
        clickable:true
    },
    slidesPerView:5,
    spaceBetween:30,
    autoplay:{
        delay:3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
    breakpoints:{
        1600:{
            slidesPerView:5
        },
        1200:{
            slidesPerView:4,
            spaceBetween:25,
        },
        700:{
            slidesPerView:3,
            spaceBetween:15
        },
        0:{
            slidesPerView:2,
            spaceBetween:10
        }
    }
    });

