import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Header from './components/Header.jsx'
import CreateAlbumBox from './components/CreateAlbum.jsx'
import BandCard from './components/BandCard.jsx'

/*const AlbumsFetched = [ 
  { BandCard: { AlbumName: "III" , Artist: "Portrait decay" , ListeningStatus: "true" }},
  { BandCard: { AlbumName: "WhirlWind", Artist: "Demonic Science", ListeningStatus: "false "}}
]*/

createRoot(document.getElementById('root')).render(

  <StrictMode>
      <div className="MainBox">
        <Header />
        <CreateAlbumBox />
        <BandCard />
      </div>
  </StrictMode>,
)
