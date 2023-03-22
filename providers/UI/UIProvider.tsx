

import React from 'react'
import { UIReducer, UIState } from './reducer';
import { UIContext } from './UIContext'

const initialState: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
  modalOpened: false
}

type UIProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export const UIProvider = ({ children }: UIProviderProps) => {

  const [state, dispatch] = React.useReducer(UIReducer, initialState);
  const onCloseModalCallback = React.useRef<() => void>();

  const openSideMenu = () => dispatch({ type: 'OPEN_SIDE_MENU' });
  const closeSideMenu = () => dispatch({ type: 'CLOSE_SIDE_MENU' });
  const setIsAddingEntry = (isAdding: boolean) => dispatch({
    type: 'SET_IS_ADDING_ENTRY',
    payload: isAdding
  });

  const startDragging = () => dispatch({ type: 'START_DRAGGING' });
  const endDragging = () => dispatch({ type: 'END_DRAGGING' });

  const openModal = (callback?: () => void) => {
    dispatch({ type: 'OPEN_MODAL' });
    onCloseModalCallback.current = callback;
  }

  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

  const onConfirm = () => {
    closeModal();
    if (onCloseModalCallback.current) {
      onCloseModalCallback.current();
      onCloseModalCallback.current = undefined;
    }
  }

  return (
    <UIContext.Provider value={{
      ...state,
      closeSideMenu,
      openSideMenu,
      setIsAddingEntry,
      startDragging,
      endDragging,
      openModal,
      closeModal,
      onConfirm
    }}>
      {children}
    </UIContext.Provider>
  )
}