import { Action } from "./actions"
import { UIState } from "./UIProvider"


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