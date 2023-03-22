import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import { Entry } from '@/intefaces';
import { useUIContext } from '@/providers/UI';
import { useRouter } from 'next/router';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEntriesContext } from '@/providers/entries';
import ConfirmModal from '../UI/ConfirmModal';

type Props = {
  entry: Entry
}

export const EntryCard: React.FC<Props> = ({ entry }) => {

  const { startDragging, endDragging, openModal } = useUIContext();
  const { deleteEntry } = useEntriesContext();

  const { push } = useRouter();

  const onRemove = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ev.stopPropagation();
    openModal(() => deleteEntry(entry._id));
  }

  return (
    <Card
      onClick={() => push(`/entries/${entry._id}`)}
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={({ dataTransfer }) => {
        dataTransfer.setData('text', entry._id);
        startDragging();
      }}
      onDragEnd={endDragging}
    >
      <CardActionArea sx={{ position: 'relative' }}>
        <CardContent>
          <Typography whiteSpace='pre-line'>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography variant='body2'>
            30 minutes ago
          </Typography>
        </CardActions>


        <IconButton
          aria-label="delete"
          onClick={onRemove}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px'
          }}>
          <DeleteIcon />
        </IconButton>


      </CardActionArea>
    </Card>
  )
}
