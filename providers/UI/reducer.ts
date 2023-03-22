import { Action } from "./actions"
export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  modalOpened: boolean;
}


const initialState: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
  modalOpened: false
}

export const UIReducer = (state: UIState = initialState, action: Action): UIState => {
  switch (action.type) {

    case 'OPEN_SIDE_MENU':
      return {
        ...state,
        sidemenuOpen: true
      };

    case 'CLOSE_SIDE_MENU':
      return {
        ...state,
        sidemenuOpen: false
      }

    case 'SET_IS_ADDING_ENTRY':
      return {
        ...state,
        isAddingEntry: action.payload
      }

    case 'START_DRAGGING':
      return {
        ...state,
        isDragging: true
      }

    case 'END_DRAGGING':
      return {
        ...state,
        isDragging: false
      }

    case 'OPEN_MODAL':
      return {
        ...state,
        modalOpened: true
      }

    case 'CLOSE_MODAL':
      return {
        ...state,
        modalOpened: false
      }

    default:
      return state
  }
}