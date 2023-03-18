export enum ModalActionTypes {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
}

export interface OpenModalAction {
  type: typeof ModalActionTypes.OPEN_MODAL;
}

export interface CloseModalAction {
  type: typeof ModalActionTypes.CLOSE_MODAL;
}

export type ModalActions = OpenModalAction | CloseModalAction;
