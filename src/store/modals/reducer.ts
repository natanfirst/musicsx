import { ModalActionTypes, ModalActions } from "./interface";

const initialState: { open: boolean } = {
  open: false,
};

const modalReducer = (
  state = initialState,
  action: ModalActions
): { open: boolean } => {
  switch (action.type) {
    case ModalActionTypes.OPEN_MODAL:
      document.body.classList.add('overflow-hidden')
      return { ...state, open: true };
    case ModalActionTypes.CLOSE_MODAL:
      document.body.classList.remove('overflow-hidden')
      return { ...state, open: false };
    default:
      return state;
  }
};

export default modalReducer;
