import React from 'react'
import { Grid, Button } from '@mui/material'

export const Newsletter = () => {
  return (
    <Grid
      container
      sx={{
        pb: { xs: '80px', lg: '128px' },
        pt: { xs: '80px', lg: '128px' },
        alignItems: 'center',
      }}
      justifyContent='center'
    >
      <Grid
        container
        item
        sx={{
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: { xs: '330px', lg: '238px' },
          width: { xs: '80vw', lg: '624px' },
          alignItems: 'center',
        }}
      >
        <Grid
          item
          sx={{
            color: '#231E1E',
            fontFamily: 'Inter',
            fontSize: { xs: '30px', lg: '40px' },
            lineHeight: { xs: '40px', lg: '56px' },
            width: { xs: '80%', lg: '624px' },
            textAlign: 'center',
          }}
        >
          Sign up for Newsletter
        </Grid>
        <Grid
          item
          sx={{
            width: { xs: '90%', md: '624px' },
            display: 'flex',
            alignItems: 'center',

            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <input
            placeholder=' Type your emails'
            id='your-mail'
            style={{
              backgroundColor: '#F1F0F0',
              borderRadius: '24px',
              width: '100%',
              height: '48px',
              borderWidth: 0,
              color: '#231E1E',
              fontFamily: 'Inter',
              fontSize: '16px',
              lineHeight: '19px',
              textAlign: 'left',
            }}
          />
          <Button
            sx={{
              backgroundColor: '#DAC2F2',
              borderRadius: '24px',
              width: '182px',
              height: '48px',
              textTransform: 'none',
              color: '#231E1E',
              ml: { xs: '0', lg: '16px' },
              mt: { xs: '20px', lg: '0' },
            }}
          >
            Submit
          </Button>
        </Grid>
        <Grid
          item
          sx={{
            color: '#5EDC4B',
            fontFamily: 'Inter',
            fontSize: '14px',
            lineHeight: '22px',
            textAlign: 'center',
          }}
        >
          Thank you for signing up for the Breally newsletter.
        </Grid>
      </Grid>
    </Grid>
  )
}
