import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react'
import https from '../https'

const CmsContentContext = createContext()

export const useCmsContentContext = () => {
  return useContext(CmsContentContext)
}

export const CmsContentProvider = ({ children }) => {
  const [pages, setPages] = useState()
  const [contentForPage, setContentForPage] = useState()

  const fetchContentPerPage = async (data) => {
    const { id } = data?.find((page) => {
      return page.url === '/'
    })

    if (id) {
      const response = await https.get(`/page/${id}`)
      const { sections } = response?.data
      setContentForPage(sections)
    }
  }

  const fetchPages = async () => {
    const response = await https.get('/pages')
    const responseArr = response.data
    fetchContentPerPage(responseArr)
    setPages(responseArr)
  }

  useEffect(() => {
    fetchPages()
  }, [])

  const value = useMemo(
    () => ({
      pages,
      contentForPage,
    }),
    [pages, contentForPage]
  )

  return (
    <CmsContentContext.Provider value={value}>
      {children}
    </CmsContentContext.Provider>
  )
}
