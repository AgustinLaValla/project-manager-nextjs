import React from "react";

interface UIContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;

  closeSideMenu: () => void;
  openSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = React.createContext<UIContextProps>({} as UIContextProps);
