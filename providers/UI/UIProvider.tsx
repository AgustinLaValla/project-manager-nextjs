

import React from 'react'
import { UIReducer, UIState } from './reducer';
import { UIContext } from './UIContext'

const initialState: UIState = {
  sidemenuOpen: false
}

type UIProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export const UIProvider = ({ children }: UIProviderProps) => {

  const [state, dispatch] = React.useReducer(UIReducer, initialState);

  const openSideMenu = () => dispatch({ type: 'OPEN_SIDE_MENU' })
  const closeSideMenu = () => dispatch({ type: 'CLOSE_SIDE_MENU' })

  return (
    <UIContext.Provider value={{
      ...state,
      closeSideMenu,
      openSideMenu
    }}>
      {children}
    </UIContext.Provider>
  )
}