const menuBtn = document.querySelector('.menu__button');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.header__list');
const menuShadow = document.querySelector('.menu--close')


menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu--open');
});

menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
});


//  const swiper = new Swiper('.analysis-slider', {
//     loop: true,
//         slidesPerView:2,
//     centeredSlides: true,
//     effect: "coverflow",
//     coverflowEffect: {
//         rotate: 0,
//         depth: 200,
//         stretch: 5,
//         modifier: 1,
//         scale: 1,
//         slideShadows: true,
//     },
//      spaceBetween: 21,
//      breakpoints: {
//           1024: {
//              spaceBetween: 40
//          },
//          426: {
//              spaceBetween: 80,
//              coverflowEffect: {
//                  depth: 200,
//              }
//          },
//      },
//         autoplay: {
//             delay: 2000,
//         },
//     })

const swiper = new Swiper('.analysis-slider', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        slideShadows: false,
    },   
    spaceBetween: 25,
     
    breakpoints: {
    
    350: {
      spaceBetween: 40
    },
   
    480: {
      spaceBetween: 50
    },
   
    640: {
      spaceBetween: 90
         },
    
    1024: {
      spaceBetween: 140
    }
  }
})    