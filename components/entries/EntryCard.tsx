import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '@/intefaces';
import { useUIContext } from '@/providers/UI';

type Props = {
  entry: Entry
}

export const EntryCard: React.FC<Props> = ({ entry }) => {

  const { startDragging, endDragging } = useUIContext();

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={({ dataTransfer }) => {
        dataTransfer.setData('text', entry._id);
        startDragging();
      }}
      onDragEnd={endDragging}
    >
      <CardActionArea>
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
      </CardActionArea>
    </Card>
  )
}
