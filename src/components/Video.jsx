import React from 'react'
import beachBg from './beachBg.mp4'
import '../index.css'

export default function Video () {
    return (
        <div className='main'>
            <video src={beachBg} autoPlay muted loop className="video-bg" />
            <div className='bg-overlay'></div>
      
        

        </div>
    )
}


