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

  const fetchPages = async () => {
    const response = await https.get('/pages')
    const responseArr = response.data
    setPages(responseArr)
  }

  useEffect(() => {
    fetchPages()
  }, [])

  const value = useMemo(
    () => ({
      pages,
    }),
    [pages]
  )

  return (
    <CmsContentContext.Provider value={value}>
      {children}
    </CmsContentContext.Provider>
  )
}
