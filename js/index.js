function Modal() {
  let modal = document.querySelector('.modal-overlay');
  let close = document.querySelector('.close-btn');
  modal.classList.add('is-open');
  close.addEventListener('click', () => {
    modal.classList.remove('is-open');
  });
}

function burger() {
  let burger_overlay = document.querySelector('.burger-menu-overlay');
  let burger_close = document.getElementById('close-burger');

  burger_overlay.classList.add('is-open');

  burger_close.addEventListener('click', () => {
    burger_overlay.classList.remove('is-open');
  });
}
