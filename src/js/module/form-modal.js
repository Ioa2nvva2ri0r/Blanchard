/* eslint-disable no-unused-vars */
function formModal(
  popup,
  popupContainer,
  btnClose,
  descElem,
  content,
  classClose
) {
  function popupFormClose(modal, desc, classCloseModal) {
    modal.classList.add(classClose);
    setTimeout(() => {
      modal.style.display = 'none';
      desc.textContent = '';
      modal.classList.remove(classCloseModal);
    }, 400);
  }

  popup.style.display = 'flex';
  descElem.textContent = content;
  btnClose.addEventListener('click', () => {
    popupFormClose(popup, descElem, classClose);
  });
  popup.addEventListener('click', (el) => {
    if (!popupContainer.contains(el.target)) {
      popupFormClose(popup, descElem, classClose);
    }
  });
}
