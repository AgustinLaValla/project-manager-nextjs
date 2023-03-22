import React from 'react'
import { entriesReducer, EntriesState } from './reducer';
import { EntriesContext } from './EntriesContext'
import { Entry } from '@/intefaces';
import { entriesApi } from '@/api/entriesApi';
import { useSnackbar } from 'notistack';

const initialState: EntriesState = {
  entries: []
}

type EntriesProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export const EntriesProvider = ({ children }: EntriesProviderProps) => {

  const [state, dispatch] = React.useReducer(entriesReducer, initialState);
  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<{ entry: Entry }>('', { description });
    dispatch({
      type: 'ADD_NEW_ENTRY',
      payload: data.entry
    });

  }
  const updateEntry = async (entry: Entry, showSnack = false) => {
    const { data } = await entriesApi.put<{ entry: Entry }>(
      `/${entry._id}`,
      entry,
      { headers: { 'Content-Type': 'application/json' } }
    );

    dispatch({
      type: 'UPDATE_ENTRY',
      payload: data.entry
    });

    if (showSnack) {
      enqueueSnackbar({
        variant: 'success',
        autoHideDuration: 1500,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        message: 'Entry updated!'
      })
    }
  };

  const deleteEntry = async (id: string) => {
    await entriesApi.delete(`/${id}`);
    dispatch({ type: 'DELETE_ENTRY', payload: id });
    enqueueSnackbar({
      variant: 'success',
      autoHideDuration: 1500,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      message: 'Entry deleted!'
    });

  }

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
      updateEntry,
      deleteEntry
    }}>
      {children}
    </EntriesContext.Provider>
  )
}