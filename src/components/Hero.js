import React from 'react'
import { Grid, Box } from '@mui/material'
import { useCmsContentContext } from '../contexts/CmsContentContext'

export const Hero = () => {
  const { contentForPage } = useCmsContentContext()

  return (
    <Grid
      container
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        pt: { xs: '70px', lg: '127px' },
        pb: { xs: '70px', lg: '152px' },
        flexDirection: { md: 'column', lg: 'row' },
      }}
    >
      {contentForPage && (
        <Grid
          item
          sx={{
            color: '#231E1E',
            fontFamily: 'Inter',
            fontSize: { xs: '30px', lg: '48px' },
            lineHeight: { xs: '40px', lg: '64px' },
            width: { xs: '80vw', lg: '516px' },
            textAlign: { xs: 'center', lg: 'left' },
            alignSelf: 'center',
            objectFit: 'cover',
            mb: { xs: '40px', lg: '0px' },
          }}
        >
          {contentForPage[0].text}
        </Grid>
      )}
      {contentForPage && (
        <Grid
          item
          sx={{
            width: { xs: '80vw', sm: '516px' },
            height: { xs: '250px', sm: '384px' },
          }}
        >
          <Box
            component='img'
            sx={{
              backgroundSize: '100%',
              width: '100%',
              height: '100%',
            }}
            alt='The house from the offer.'
            src={contentForPage[0].img}
          />
        </Grid>
      )}
    </Grid>
  )
}
