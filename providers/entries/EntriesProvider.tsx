import React from 'react'
import { entriesReducer, EntriesState } from './reducer';
import { EntriesContext } from './EntriesContext'
import { Entry } from '@/intefaces';
import { v4 as uuid } from 'uuid';

const initialState: EntriesState = {
  entries: [
    {
      _id: uuid(),
      description: 'Pending: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui consequat.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuid(),
      description: 'In progress Veniam in cupidatat adipisicing Lorem sunt est est ex cillum laboris fugiat officia fugiat.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuid(),
      description: 'Finished: Commodo veniam aliqua tempor officia officia non laborum.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ]
}

type EntriesProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export const EntriesProvider = ({ children }: EntriesProviderProps) => {

  const [state, dispatch] = React.useReducer(entriesReducer, initialState);

  const addNewEntry = (description: string) => dispatch({
    type: 'ADD_NEW_ENTRY',
    payload: {
      _id: uuid(),
      description,
      createdAt: Date.now(),
      status: 'pending'
    }
  })

  const updateEntry = (entry: Entry) => dispatch({
    type: 'UPDATE_ENTRY',
    payload: entry
  })

  return (
    <EntriesContext.Provider value={{
      ...state,
      addNewEntry,
      updateEntry
    }}>
      {children}
    </EntriesContext.Provider>
  )
}