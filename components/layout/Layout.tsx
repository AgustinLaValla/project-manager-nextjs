import { useUIContext } from '@/providers/UI';
import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react'
import { Navbar } from '../UI'
import { Sidebar } from '../UI'
import ConfirmModal from '../UI/ConfirmModal';

type Props = {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const Layout: React.FC<Props> = ({ children, title }) => {

  const { closeModal, modalOpened, onConfirm } = useUIContext();

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

      <ConfirmModal
        open={modalOpened}
        handleClose={closeModal}
        onConfirm={onConfirm}
        title="Remove Entry"
        description='Are you sure you want to remove this entry?'
      />
    </Box>
  )
}
