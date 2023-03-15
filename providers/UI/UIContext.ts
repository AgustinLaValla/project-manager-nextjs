import React from "react";

interface UIContextProps {
  sidemenuOpen: boolean;
  closeSideMenu: () => void;
  openSideMenu: () => void;
}

export const UIContext = React.createContext<UIContextProps>({} as UIContextProps);
