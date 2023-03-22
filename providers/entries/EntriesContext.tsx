import React from 'react';
import { Entry } from '@/intefaces';

interface EntriesContextProps {
  entries: Entry[];
  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry, showSnack?: boolean) => void;
  deleteEntry: (id: string) => void;
}

export const EntriesContext = React.createContext<EntriesContextProps>({} as EntriesContextProps);