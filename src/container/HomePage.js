import React from 'react'
import { Menu } from '../components/Menu'
import { Grid } from '@mui/material'
import { Hero } from '../components/Hero'
import Quote from '../components/Quote'
import { Newsletter } from '../components/Newsletter'

export const HomePage = () => {
  return (
    <Grid>
      <Menu />
      <Hero />
      <Quote />
      <Newsletter />
    </Grid>
  )
}
