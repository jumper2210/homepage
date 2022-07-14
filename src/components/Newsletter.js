import React from 'react'
import { Grid, Button } from '@mui/material'

export const Newsletter = () => {
  return (
    <Grid
      container
      sx={{ pb: '128px', pt: '128px', alignItems: 'center' }}
      justifyContent='center'
    >
      <Grid
        container
        item
        sx={{
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: '238px',
          width: '624px',
        }}
      >
        <Grid
          item
          sx={{
            color: '#231E1E',
            fontFamily: 'Inter',
            fontSize: '40px',
            lineHeight: '56px',
            width: '624px',
            textAlign: 'center',
          }}
        >
          Sign up for Newsletter
        </Grid>
        <Grid item sx={{ width: '624px' }}>
          <input
            placeholder=' Type your emails'
            id='your-mail'
            style={{
              backgroundColor: '#F1F0F0',
              borderRadius: '24px',
              width: '416px',
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
              ml: '16px',
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
            width: '624px',
            textAlign: 'center',
          }}
        >
          Thank you for signing up for the Breally newsletter.
        </Grid>
      </Grid>
    </Grid>
  )
}
