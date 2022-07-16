import React, { useState, useEffect } from 'react'
import { Menu } from '../components/Menu'
import { Grid } from '@mui/material'
import { Hero } from '../components/Hero'
import Quote from '../components/Quote'
import { Newsletter } from '../components/Newsletter'
import { useCmsContentContext } from '../contexts/CmsContentContext'
import https from '../https'

export const HomePage = () => {
  const [contentForPage, setContentForPage] = useState()
  const { pages } = useCmsContentContext()

  const fetchContentPerPage = async () => {
    const { id } = pages?.find((page) => {
      return page.url === '/'
    })

    if (id) {
      const response = await https.get(`/page/${id}`)
      const { sections } = response.data
      setContentForPage(sections)
    }
  }

  useEffect(() => {
    fetchContentPerPage()
  }, [])

  return (
    <Grid>
      <Menu />
      <Hero heroContent={contentForPage[0]} />
      <Quote quoteContent={contentForPage[1]} />
      <Newsletter />
    </Grid>
  )
}
