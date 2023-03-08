
const showModal = () => {
  const modalBtn = document.querySelector('.hero-button'),
    modal = document.querySelector('.modal');

  modalBtn.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('hero-button')) {
      openModal();
    }
  });

  modal.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('modal-dialog__close') || target.classList.contains('modal-dialog__close-img')) {
      closeModal();
    } else {
      target = target.closest('.modal-dialog');
      if (!target) {
        closeModal();
      }
    }
  });
  const openModal = () => {
    modal.classList.add('modal_active');
  };
  const closeModal = () => {
    modal.classList.remove('modal_active');
  };
};
showModal();

const modal = document.querySelector(`#modal`),
      cal = document.querySelector(`#cal-container`);

  modal.addEventListener(`click`, (event) => {
    let target = event.target;
  });
