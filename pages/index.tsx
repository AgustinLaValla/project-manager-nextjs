import Head from 'next/head'
import Image from 'next/image'
import { Card, CardHeader, Grid, Typography } from '@mui/material'
import { Layout } from '@/components/layout/Layout'

export default function Home() {
  return (
    <Layout title="Home - Project Manager">
      <Grid container spacing={2}>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pending">

            </CardHeader>
          </Card>
          {/* Entry list */}
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pending">

            </CardHeader>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pending">

            </CardHeader>
          </Card>
        </Grid>

      </Grid>
    </Layout>
  )
}
