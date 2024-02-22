import React, { useState } from 'react'
import './Home.css'
import Slidebar from '../../Components/Slidebar/Slidebar'
import Feed from '../../Components/Feed/Feed'


const Home = ({slidebar}) => {

  const[category,setCategory]= useState(0);
  return (
    <>
     <Slidebar slidebar={slidebar} category={category} setCategory={setCategory}/>
     <div className={`container ${slidebar?"":'large-container'}`}>
        <Feed category={category}/>
     </div>
    </>
  )
}

export default Home
