import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import CreateAlbumBox from './components/CreateAlbum.jsx'
import BandCard from './components/BandCard.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
      <div className="MainBox">
        <Header />
        <CreateAlbumBox />
        <BandCard />
      </div>
  </StrictMode>,
)
