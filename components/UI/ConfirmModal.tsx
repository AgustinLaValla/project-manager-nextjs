import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react'

type Props = {
  open: boolean;
  handleClose: () => void;
  title: string;
  description?: string;
  onConfirm: () => void
}

export default function ConfirmModal({ open, handleClose, title, description, onConfirm }: Props) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby={'dialog-component'}
    >
      <DialogTitle id={'dialog-component'}>
        {title}
      </DialogTitle>
      {
        description && (
          <DialogContent>
            <DialogContentText>
              {description}
            </DialogContentText>
          </DialogContent>
        )
      }
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={onConfirm} autoFocus>
          Acept
        </Button>
      </DialogActions>
    </Dialog>
  )
}
