import React from 'react'
import { Grid } from '@mui/material'
import { ReactComponent as Quotation } from '../assets/quotation-mark.svg'

export default function Quote() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: '#231E1E',
        height: '613px',
      }}
    >
      <Grid
        container
        item
        sx={{
          height: '357px',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Grid item>
          <Quotation />
        </Grid>
        <Grid
          item
          sx={{
            color: '#F1F0F0',
            fontFamily: 'Inter',
            fontSize: '24px',
            lineHeight: '40px',
            width: '948px',
            textAlign: 'left',
          }}
        >
          Torquatos nostros? quos dolores eos, qui studiose antiqua persequeris,
          claris et quasi naturalem. In quo enim inter mediocrem animadversionem
          atque insitam in malis dolor, non numquam. At vero eos et dolore suo
          sanciret.
        </Grid>
        <Grid
          item
          sx={{
            color: '#989898',
            fontFamily: 'Inter',
            fontSize: '24px',
            lineHeight: '29px',
            textAlign: 'left',
          }}
        >
          John Doe, Street Artist
        </Grid>
      </Grid>
    </Grid>
  )
}
