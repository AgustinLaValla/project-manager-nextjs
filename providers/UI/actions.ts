interface OPEN_SIDE_MENU {
  type: 'OPEN_SIDE_MENU'
};

interface CLOSE_SIDE_MENU {
  type: 'CLOSE_SIDE_MENU'
};

export type Action = OPEN_SIDE_MENU | CLOSE_SIDE_MENU; 