import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react'
import { Navbar } from '../UI'
import { Sidebar } from '../UI'

type Props = {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <main style={{ padding: '10px 20px' }}>
        {children}
      </main>
    </Box>
  )
}
