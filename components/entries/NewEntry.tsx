import React from 'react'
import { Box, Button, TextField } from '@mui/material';

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { useEntriesContext } from '@/providers/entries'
import { useUIContext } from '@/providers/UI';

export const NewEntry = () => {

  const { addNewEntry } = useEntriesContext();
  const { isAddingEntry, setIsAddingEntry } = useUIContext();

  const [inputValue, setInputValue] = React.useState('');
  const [touched, setTouched] = React.useState(false);

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(ev.target.value);

  const onSave = () => {
    if (!inputValue.length) return;
    addNewEntry(inputValue);
    setTouched(false);
    setIsAddingEntry(false);
    setInputValue('');
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {
        isAddingEntry
          ?
          <>
            <TextField
              value={inputValue}
              onChange={onChange}
              placeholder="New Entry"
              label="New Entry"
              autoFocus
              multiline
              helperText={!inputValue.length && touched && 'Required'}
              error={!inputValue.length && touched}
              onBlur={() => setTouched(true)}
              fullWidth
            />
            <Box sx={{ display: 'flex', marginTop: '1rem' }}>
              <Button
                variant='text'
                onClick={() => setIsAddingEntry(false)}
                sx={{marginRight: '1rem'}}
              >
                Cancel
              </Button>

              <Button
                variant='outlined'
                color='secondary'
                endIcon={<SaveOutlinedIcon />}
                onClick={onSave}>
                Save
              </Button>
            </Box>
          </>
          :
          <Button
            variant='text'
            startIcon={<AddIcon />}
            onClick={() => setIsAddingEntry(true)}
          >
            Add Ticket
          </Button>
      }
    </Box>
  )
}
