import React from 'react'
import { Grid, Link, Button } from '@mui/material'
import { ReactComponent as Logo } from '../assets/logo.svg'

export const Menu = () => {
  return (
    <Grid
      container
      sx={{
        height: '73px',
        mt: '24px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: '1px solid #F1F0F0',
        alignItems: 'center',
      }}
    >
      <Grid xs='6' item container display='flex' justifyContent='space-evenly'>
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <Link
            href='#'
            underline='hover'
            sx={{
              color: '#231E1E',
              fontFamily: 'Inter',
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'left',
              pr: '48px',
            }}
          >
            {'Products'}
          </Link>
          <Link
            href='#'
            underline='hover'
            sx={{
              color: '#231E1E',
              fontFamily: 'Inter',
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'left',
              pr: '48px',
            }}
          >
            {'Soluctions'}
          </Link>
          <Link
            href='#'
            underline='hover'
            sx={{
              color: '#231E1E',
              fontFamily: 'Inter',
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'left',
              pr: '48px',
            }}
          >
            {'Resources'}
          </Link>
          <Link
            href='#'
            underline='hover'
            sx={{
              color: '#231E1E',
              fontFamily: 'Inter',
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'left',
            }}
          >
            {'About'}
          </Link>
        </Grid>
      </Grid>
      <Grid xs='6' item container>
        <Button
          sx={{
            backgroundColor: '#DAC2F2',
            borderRadius: '24px',
            width: '192px',
            height: '48px',
            color: '#231E1E',
            fontFamily: 'Inter',
            fontSize: '16px',
            lineheight: '24px',
            mr: '64px',
            textTransform: 'none',
          }}
        >
          Contact us
        </Button>
      </Grid>
    </Grid>
  )
}
