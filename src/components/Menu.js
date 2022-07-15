import React from 'react'
import { Grid, Link, Button } from '@mui/material'
import { ReactComponent as Logo } from '../assets/logo.svg'

export const Menu = () => {
  return (
    <Grid
      container
      sx={{
        height: { xs: '150px', md: '100px', lg: '73px' },
        mt: '24px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: '1px solid #F1F0F0',
        alignItems: 'center',
      }}
    >
      <Grid
        xs={12}
        md={12}
        lg={6}
        item
        container
        display='flex'
        sx={{ justifyContent: { md: 'space-around', lg: 'space-evenly' } }}
      >
        <Grid
          item
          xs={12}
          sm={3}
          sx={{ ml: { xs: '15px', lg: 0 }, mr: { xs: '5px', md: '0' } }}
        >
          <Logo />
        </Grid>
        <Grid item xs={8} lg={6} sx={{ ml: { xs: '15px' } }}>
          <Link
            href='#'
            underline='hover'
            sx={{
              color: '#231E1E',
              fontFamily: 'Inter',
              fontSize: { xs: '14px', lg: '16px' },
              lineHeight: '24px',
              textAlign: 'left',

              pr: { xs: '20px', sm: '30px', lg: '48px' },
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
              fontSize: { xs: '14px', lg: '16px' },
              lineHeight: '24px',
              textAlign: 'left',
              pr: { xs: '20px', sm: '30px', lg: '48px' },
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
              fontSize: { xs: '14px', lg: '16px' },
              lineHeight: '24px',
              textAlign: 'left',
              pr: { xs: '20px', sm: '30px', lg: '48px' },
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
              fontSize: { xs: '14px', lg: '16px' },
              lineHeight: '24px',
              textAlign: 'left',
            }}
          >
            {'About'}
          </Link>
        </Grid>
      </Grid>
      <Grid
        lg={6}
        item
        container
        sx={{
          alignItems: 'flex-start',
          justifyContent: { xs: 'center', lg: 'flex-end' },
          mt: { xs: '10px', lg: '0' },
          mb: { xs: '10px', lg: '25px' },
        }}
      >
        <Button
          sx={{
            backgroundColor: '#DAC2F2',
            borderRadius: '24px',
            width: '192px',
            height: { xs: '35px', md: '40px', lg: '48px' },
            color: '#231E1E',
            fontFamily: 'Inter',
            fontSize: '16px',
            lineheight: '24px',
            mr: { xs: '6px', md: '50px', lg: '64px' },
            textTransform: 'none',
          }}
        >
          Contact us
        </Button>
      </Grid>
    </Grid>
  )
}
