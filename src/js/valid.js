const validation = () => {
  const inputs = document.querySelectorAll(`input`);

  inputs.forEach((item) => {
    if (item.classList.contains('username')) {
      item.addEventListener(`input`, () => {
        item.value = item.value.replace(/[^\sа-яА-ЯёЁ]/, '');
      });
    }
    if (item.classList.contains('guestnumber')) {
      item.addEventListener(`input`, () => {
        item.value = item.value.replace(/[a-z-яА-ЯёЁ]/gi, '');
      });
    }
  });
};
validation();