interface OPEN_SIDE_MENU {
  type: 'OPEN_SIDE_MENU'
};

interface CLOSE_SIDE_MENU {
  type: 'CLOSE_SIDE_MENU'
};

interface SET_IS_ADDING_ENTRY {
  type: 'SET_IS_ADDING_ENTRY',
  payload: boolean;
}

interface START_DRAGGING {
  type: 'START_DRAGGING'
}

interface END_DRAGGING {
  type: 'END_DRAGGING',
}

interface OPEN_MODAL {
  type: 'OPEN_MODAL',
}

interface CLOSE_MODAL {
  type: 'CLOSE_MODAL'
}

export type Action =
  OPEN_SIDE_MENU |
  CLOSE_SIDE_MENU |
  SET_IS_ADDING_ENTRY |
  START_DRAGGING |
  END_DRAGGING |
  OPEN_MODAL |
  CLOSE_MODAL 