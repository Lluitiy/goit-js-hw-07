(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }

  function handleCloseModal(e) {
    if (e.key === 'Escape') {
      refs.modal.classList.add('is-hidden');
    }
  }

  window.addEventListener('keydown', handleCloseModal);
})();
