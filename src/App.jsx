import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import {Route,Routes} from 'react-router-dom'



const App=()=>{
 
    const[slidebar,setSliderbar]= useState(true);

  return(
    <div>
       <Navbar setSliderbar={setSliderbar}/>
        <Routes>
          <Route path='/' element={<Home slidebar={slidebar}/>}/>
          <Route path='/video/:categoryid/:videoid' element={<Video/>}/>
        </Routes>
    </div>
  )
}
export default App