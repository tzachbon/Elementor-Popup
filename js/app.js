import { updateData } from './popup.js';
import { closeButtonRef, overlayRef, popupRef, toggleRef } from './vendor.js';

(function () {
  const state = {
    popup: {
      isOpen: false,
      data: null,
    },
  };

  const togglePopup = () => {
    state.popup.isOpen = !state.popup.isOpen;

    [popupRef, overlayRef].forEach((ref) => ref.classList.toggle('open'));

    updateData(state);
  };

  [toggleRef, closeButtonRef, overlayRef].forEach((ref) =>
    ref.addEventListener('click', togglePopup)
  );
})();
