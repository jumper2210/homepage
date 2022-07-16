import React from 'react'
import { Grid, Typography } from '@mui/material'
import { ReactComponent as Quotation } from '../assets/quotation-mark.svg'
import { useCmsContentContext } from '../contexts/CmsContentContext'

export default function Quote() {
  const { contentForPage } = useCmsContentContext()

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
          height: { xs: '80vh', sm: '48vh', lg: '357px' },
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          width: { xs: '80vw', lg: '948px' },
          mt: { xs: '30px', lg: '128px' },
          mb: { xs: '50px', lg: '128px' },
        }}
      >
        <Grid item>
          <Quotation />
        </Grid>
        {contentForPage && (
          <Typography
            sx={{
              color: '#F1F0F0',
              fontFamily: 'Inter',
              fontSize: { xs: '13px', md: '18px', lg: '24px' },
              lineHeight: { xs: '25px', md: '30px', lg: '40px' },
              textAlign: 'left',
            }}
          >
            {contentForPage[1].text}
          </Typography>
        )}
        {contentForPage && (
          <Typography
            item
            sx={{
              color: '#989898',
              fontFamily: 'Inter',
              fontSize: '24px',
              lineHeight: '29px',
              textAlign: 'left',
            }}
          >
            {contentForPage[1].author}
          </Typography>
        )}
      </Grid>
    </Grid>
  )
}
