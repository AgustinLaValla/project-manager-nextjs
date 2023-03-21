import { Entry } from '@/intefaces';
import { Action } from './actions'

export interface EntriesState {
  entries: Entry[];
}


const initialState: EntriesState = {
  entries: []
}

export const entriesReducer = (state: EntriesState = initialState, action: Action): EntriesState => {
  switch (action.type) {

    case 'SET_ENTRIES':
      return {
        ...state,
        entries: action.payload
      }

    case 'ADD_NEW_ENTRY':
      return {
        ...state,
        entries: [
          ...state.entries,
          action.payload
        ]
      };

    case 'UPDATE_ENTRY':
      return {
        ...state,
        entries: state.entries.map(entry =>
          entry._id === action.payload._id
            ? {
              ...entry,
              status: action.payload.status,
              description: action.payload.description
            }
            : entry
        )
      }

    default:
      return state
  }
}