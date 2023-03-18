import React from 'react';
import { EntriesContext } from './EntriesContext';

export { EntriesContext } from './EntriesContext';
export { EntriesProvider } from './EntriesProvider';

export const useEntriesContext = () => React.useContext(EntriesContext);