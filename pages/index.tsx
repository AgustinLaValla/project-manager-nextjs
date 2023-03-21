import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Card, CardHeader, Grid, Typography } from '@mui/material'
import { Layout } from '@/components/layout/Layout'
import { EntryList } from '@/components/entries'
import { NewEntry } from '@/components/entries/NewEntry'

export default function Home() {
  return (
    <Layout title="Home - Project Manager">
      <Grid container spacing={2}>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pending" />
            <NewEntry />
            <EntryList status='pending' />
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="In Progress" />
            <EntryList status='in-progress' />
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Finished" />
            <EntryList status='finished' />
          </Card>
        </Grid>

      </Grid>
    </Layout>
  )
}
