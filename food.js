let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll= () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}


document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

// var swiper = new Swiper('.home-slider', {
//     slidesPreview:3,
//     spaceBetween:30,
//     // autoplay: {
//     //     delay: 5000,
//     //     disableOnInteraction: false,
//     // },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable:true,
//     },
//     breakpoints:{
//         599:{
//             slidesPreview:2,
//             spaceBetween:40,
//         },
//         1023:{
//             slidesPreview:3,
//             spaceBetween:60,
//         }
//     }
// })


var swiper = new Swiper('.home-slider', {
    spaceBetween: 30,
    slidesPerView: 3,
    centeredSlides: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});

var swiper = new Swiper('.review-slider', {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 2,
        },
        1028:{
            slidesPerView: 3,
        }
    }
});
