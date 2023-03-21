import React from 'react'
import { entriesReducer, EntriesState } from './reducer';
import { EntriesContext } from './EntriesContext'
import { Entry } from '@/intefaces';
import { v4 as uuid } from 'uuid';
import { entriesApi } from '@/api/entriesApi';

const initialState: EntriesState = {
  entries: []
}

type EntriesProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export const EntriesProvider = ({ children }: EntriesProviderProps) => {

  const [state, dispatch] = React.useReducer(entriesReducer, initialState);

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<{ entry: Entry }>('', { description });
    dispatch({
      type: 'ADD_NEW_ENTRY',
      payload: data.entry
    });

  }
  const updateEntry = async (entry: Entry) => {
    const { data } = await entriesApi.put<{ entry: Entry }>(
      `/${entry._id}`,
      entry,
      { headers: { 'Content-Type': 'application/json' } }
    );

    dispatch({
      type: 'UPDATE_ENTRY',
      payload: data.entry
    });
  };

  const getEntries = async () => {
    const { data } = await entriesApi.get<{ entries: Entry[] }>('');
    dispatch({ type: 'SET_ENTRIES', payload: data.entries })
  }

  React.useEffect(() => {
    getEntries();
  }, [])

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