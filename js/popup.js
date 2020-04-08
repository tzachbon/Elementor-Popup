import { updatePopupUI } from './vendor.js';

export const updateData = async (state) => {
  const { isOpen } = state.popup;

  if (isOpen) {
    state.popup.data = await fetch(
      'https://jsonplaceholder.typicode.com/todos'
    ).then((res) => res.json());
  } else {
    state.popup.data = null;
  }

  updatePopupUI(state.popup.data);
};
