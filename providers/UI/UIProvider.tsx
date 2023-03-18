

import React from 'react'
import { UIReducer, UIState } from './reducer';
import { UIContext } from './UIContext'

const initialState: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false
}

type UIProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export const UIProvider = ({ children }: UIProviderProps) => {

  const [state, dispatch] = React.useReducer(UIReducer, initialState);

  const openSideMenu = () => dispatch({ type: 'OPEN_SIDE_MENU' });
  const closeSideMenu = () => dispatch({ type: 'CLOSE_SIDE_MENU' });
  const setIsAddingEntry = (isAdding: boolean) => dispatch({
    type: 'SET_IS_ADDING_ENTRY',
    payload: isAdding
  });

  const startDragging = () => dispatch({ type: 'START_DRAGGING' });
  const endDragging = () => dispatch({ type: 'END_DRAGGING' });



  return (
    <UIContext.Provider value={{
      ...state,
      closeSideMenu,
      openSideMenu,
      setIsAddingEntry,
      startDragging,
      endDragging
    }}>
      {children}
    </UIContext.Provider>
  )
}