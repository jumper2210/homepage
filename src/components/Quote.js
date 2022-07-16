import React from 'react'
import { Grid, Typography } from '@mui/material'
import { ReactComponent as Quotation } from '../assets/quotation-mark.svg'

export default function Quote({ quoteContent }) {
  const { text, author } = quoteContent

  return (
    <Grid
      container
      sx={{
        backgroundColor: '#231E1E',
        height: '613px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        item
        sx={{
          height: '357px',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          width: { xs: '80vw', lg: '948px' },
          mt: { xs: '80px', lg: '128px' },
          mb: { xs: '80px', lg: '128px' },
        }}
      >
        <Grid item>
          <Quotation />
        </Grid>
        {text && (
          <Typography
            sx={{
              color: '#F1F0F0',
              fontFamily: 'Inter',
              fontSize: { xs: '20px', lg: '24px' },
              lineHeight: { xs: '30px', lg: '40px' },
              textAlign: 'left',
            }}
          >
            Torquatos nostros? quos dolores eos, qui studiose antiqua
            persequeris, claris et quasi naturalem. In quo enim inter mediocrem
            animadversionem atque insitam in malis dolor, non numquam. At vero
            eos et dolore suo sanciret.
          </Typography>
        )}
        {author && (
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
        )}
      </Grid>
    </Grid>
  )
}
