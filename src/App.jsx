import React, { useEffect, useState } from 'react'
import './index.css'
import Places from './components/Places.jsx'
import Cards from './components/Cards.jsx'
import Video from './components/Video'

function App() {
  
  return (
    <div>
     <h1 className="heading">TRAVEL DESTINATIONS</h1>
     <div className="line"></div>
    <Video />
    <Places />
    </div>
  )
   
  
}

export default App
