import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useUIContext } from '@/providers/UI'


export const Navbar = () => {

  const { openSideMenu } = useUIContext();

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          size='large'
          edge="start"
          onClick={openSideMenu}
        >
          <MenuOutlinedIcon sx={{ color: 'white' }} />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Project Manager
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
