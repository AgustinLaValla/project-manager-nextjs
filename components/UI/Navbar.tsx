import React from 'react'
import NextLink from 'next/link';
import { AppBar, IconButton, Toolbar, Typography, Link } from '@mui/material'
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
        <NextLink href='/' passHref>

          <Typography variant='h6' color="white" component='div' sx={{ flexGrow: 1 }}>
            Project Manager
          </Typography>


        </NextLink>
      </Toolbar>
    </AppBar>
  )
}
