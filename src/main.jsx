import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Header from './components/Header.jsx'
import SearchBox from './components/SearchBox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className="MainBox">
        <Header />
        <SearchBox />
      </div>
  </StrictMode>,
)
