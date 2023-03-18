import React from 'react';
import { List, Paper } from '@mui/material';
import { useEntriesContext } from '@/providers/entries';
import { useUIContext } from '@/providers/UI';
import { Entry, EntryStatus } from '@/intefaces';
import styles from './EntryList.module.css'
import { EntryCard } from './EntryCard';

type Props = {
  status: EntryStatus;
}


export const EntryList: React.FC<Props> = ({ status }) => {
  const { updateEntry, entries } = useEntriesContext();
  const { isDragging, endDragging } = useUIContext();

  const entriesByStatus = React.useMemo(
    () => entries.filter(entry => entry.status === status), [entries]
  );

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    const entry = entries.find(e => e._id === id) as Entry;

    updateEntry({ ...entry, status });
    endDragging();
  }

  return (
    <div
      onDrop={onDrop}
      onDragOver={ev => ev.preventDefault()}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper sx={{
        height: 'calc(100vh - 180px)',
        overflow: 'scroll',
        backgroundColor: 'transparent',
        padding: '3px 5px'
      }}>

        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
          {
            entriesByStatus.map(entry => (
              <EntryCard key={entry._id} entry={entry} />
            ))
          }
        </List>

      </Paper>
    </div>
  )
}
