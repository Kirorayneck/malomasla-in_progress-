$(function () {
  $('.navbar-element').click(function (e) {
  $('.navbar-element').toggleClass('navbar-element__active');
  $('.navbar-box__menu--mobile').toggleClass('navbar-box__menu--mobile--active');
  });
});


const toggleMenu = () => {

    const btnMenu = document.querySelector(`.navbar-element`),
          menu = document.querySelector(`.navbar-menu__burger`),
          menuPoint = menu.querySelectorAll(`a`),
          body = document.querySelector('body'),
          closeMenuBtn = document.querySelector(`.navbar-box__item`);
    const openMenu = () => {
      menu.classList.add('navbar-menu__active');
      btnMenu.classList.add('navbar-element__active');
    };
    const closeMenu = () => {
      menu.classList.remove('navbar-menu__active');
      btnMenu.classList.remove('navbar-element__active');
    };
    
    body.addEventListener('click', (event) => {
      let target = event.target;
      if (!target.closest(`.navbar-menu__active`) && !target.classList.contains('navbar-element')) {
        closeMenu();
      } else {
        menuPoint.forEach((item) => {
          if (item.contains(target)) {
            closeMenu();
          }
        });
      }
    });  
  };
toggleMenu();