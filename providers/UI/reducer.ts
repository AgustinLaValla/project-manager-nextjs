import { Action } from "./actions"
export interface UIState {
  sidemenuOpen: boolean;
}


const initialState: UIState = {
  sidemenuOpen: false
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

    default:
      return state
  }
}