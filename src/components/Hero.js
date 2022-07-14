import React from 'react'
import { Grid, Box } from '@mui/material'
import Img from '../assets/5EB7A4E2-36F3-4165-B7F6-9D5F1508B047.png'

export const Hero = () => {
  return (
    <Grid container justifyContent='center' sx={{ pt: '127px', pb: '152px' }}>
      <Grid
        item
        sx={{
          color: '#231E1E',
          fontFamily: 'Inter',
          fontSize: '48px',
          lineHeight: '64px',
          width: '516px',
          textAlign: 'left',
          alignSelf: 'center',
          objectFit: 'cover',
        }}
      >
        In oculis quidem rerum facilis est et aperta.
      </Grid>
      <Box
        component='img'
        sx={{
          backgroundSize: '100%',
          width: '516px',
          height: '384px',
        }}
        alt='The house from the offer.'
        src={Img}
      />
    </Grid>
  )
}
