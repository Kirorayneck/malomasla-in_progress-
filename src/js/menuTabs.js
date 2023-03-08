const menuTabs = () => {
  const tabHeader = document.querySelector('#menuTabs'),
    tab = tabHeader.querySelectorAll('.menu-left__point'),
    tabContent = tabHeader.querySelectorAll('.menu-right__point');
  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tabContent[i].classList.add('menu-right__point-active');
      } else {
        tabContent[i].classList.remove('menu-right__point-active');
      }
    }
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tab[i].classList.add('menu-left__point-active');
      } else {
        tab[i].classList.remove('menu-left__point-active');
      }
    }
  };
  tab.forEach((item, i) => {
    item.addEventListener(`click`, (event) => {
      event.preventDefault();
      let target = event.target;
      if (target.parentNode === item.children[0] || target.parentNode === item || target === item) {
        toggleTabContent(i);
      }
    });
  });
};
const menuWeekTabs = () => {
  const tabHeader = document.querySelector('#menuWeekTabs'),
    tab = tabHeader.querySelectorAll('.weekmenu-day'),
    tabContent = tabHeader.querySelectorAll('.weekmenu-menubox');
  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tabContent[i].classList.add('weekmenu-menubox__active');
      } else {
        tabContent[i].classList.remove('weekmenu-menubox__active');
      }
    }
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tab[i].classList.add('weekmenu-day__active');
      } else {
        tab[i].classList.remove('weekmenu-day__active');
      }
    }
  };
  tab.forEach((item, i) => {
    item.addEventListener(`click`, (event) => {
      event.preventDefault();
      let target = event.target;
      if (target.parentNode === item.children[0] || target.parentNode === item || target === item) {
        toggleTabContent(i);
      }
    });
  });
};
const answerAccordeon = () => {
  const tabHeader = document.querySelector('#answerAccordeon'),
    tab = tabHeader.querySelectorAll('.answer-accordeon__upper'),
    tabContent = tabHeader.querySelectorAll('.answer-accordeon__down'),
    tabIcons = tabHeader.querySelectorAll('.answer-accordeon__icon');
  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tabContent[i].classList.add('answer-accordeon__down--active');
      } else {
        tabContent[i].classList.remove('answer-accordeon__down--active');
      }
    }
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tabIcons[i].classList.add('answer-accordeon__icon--active');
      } else {
        tabIcons[i].classList.remove('answer-accordeon__icon--active');
      }
    }
    
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tab[i].classList.add('answer-accordeon__upper--active');
      } else {
        tab[i].classList.remove('answer-accordeon__upper--active');
      }
    }
  };
  tab.forEach((item, i) => {
    item.addEventListener(`click`, (event) => {
      event.preventDefault();
      let target = event.target;
      if (target.parentNode === item.children[0] || target.parentNode === item || target === item) {
        toggleTabContent(i);
      }
    });
  });
};
menuTabs();
menuWeekTabs();
answerAccordeon();