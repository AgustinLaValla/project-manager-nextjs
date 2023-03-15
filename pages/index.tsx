import Head from 'next/head'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { Layout } from '@/components/layout/Layout'

export default function Home() {
  return (
    <Layout>
      <Typography>Hello world</Typography>
    </Layout>
  )
}
