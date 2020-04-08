export const toggleRef = document.getElementById('toggle');
export const popupRef = document.getElementById('popup');
export const overlayRef = document.getElementById('overlay');
export const closeButtonRef = document.getElementById('close-btn');
export const contentRef = document.querySelector('.popup-content');
export const updatePopupUI = (data) => {

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
