import './App.css'
import { HomePage } from './container/HomePage'
import { CmsContentProvider } from './contexts/CmsContentContext'

function App() {
  return (
    <CmsContentProvider>
      <HomePage />
    </CmsContentProvider>
  )
}

export default App
