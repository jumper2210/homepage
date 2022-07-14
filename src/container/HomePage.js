import React from 'react'
import { Menu } from '../components/Menu'
import { Grid } from '@mui/material'
import { Hero } from '../components/Hero'
import Quote from '../components/Quote'

export const HomePage = () => {
  return (
    <Grid>
      <Menu />
      <Hero />
      <Quote />
    </Grid>
  )
}
