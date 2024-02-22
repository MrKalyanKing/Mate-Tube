import React from 'react'
import './Video.css'
import Play from '../../Components/Videoplay/Play'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {

  const{videoid,categoryid}=useParams();
  return (
    <div>
    <div className='play-container'>
      <Play videoid={videoid} />
      <Recommended categoryid={categoryid}/>
    </div>
    </div>
    
  )
}

export default Video
