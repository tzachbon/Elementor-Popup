(function () {
  const toggleRef = document.getElementById('toggle');
  const popupRef = document.getElementById('popup');
  const overlayRef = document.getElementById('overlay');
  const closeButtonRef = document.getElementById('close-btn');

  const state = {
    popup: {
      isOpen: false,
      data: null,
    },
  };

  const togglePopup = () => {
    state.popup.isOpen = !state.popup.isOpen;

    [popupRef, overlayRef].forEach((ref) => ref.classList.toggle('open'));

    updateData();
  };

  const updateData = async () => {
    const { isOpen } = state.popup;

    if (isOpen) {
      state.popup.data = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      ).then((res) => res.json());
    } else {
      state.popup.data = null;
    }

    updatePopupUI();
  };

  const updatePopupUI = () => {
    const { data } = state.popup;
    const contentRef = document.querySelector('.popup-content');

    if (!contentRef) return;

    if (data) {
      contentRef.innerHTML = data.reduce(
        (htmlElement, item) =>
          `
          ${htmlElement}
          <li class="item">
            ${item.title}
          </li>
          `,
        ''
      );
    } else {
      contentRef.innerHTML = '';
    }
  };

  [toggleRef, closeButtonRef].forEach((ref) =>
    ref.addEventListener('click', togglePopup)
  );
})();

