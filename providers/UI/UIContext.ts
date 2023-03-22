import React from "react";

interface UIContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  modalOpened: boolean;

  closeSideMenu: () => void;
  openSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
  closeModal: () => void;
  openModal: (calback?: () => void) => void;
  onConfirm: () => void
}

export const UIContext = React.createContext<UIContextProps>({} as UIContextProps);
