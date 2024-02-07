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