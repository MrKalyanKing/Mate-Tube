import React, { useEffect, useState } from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_KEY, value_converter } from '../Feed/Feed'
import { Link } from 'react-router-dom'
const Recommended = ({categoryid}) => {

    const[apiData,setApiData]= useState([]);

    const Recommended= async ()=>{
        try {

        const Recommended_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryid}&key=${API_KEY}`
          const response=await fetch(Recommended_url);
          if(!response.ok){
            throw new Error('data feteched is failed')
          }
          const data=await response.json();
          if(data.items && data.items.length>0){
            setApiData(data.items)
            console.log(data.items)
          }
        }catch(error){
            console.error('error fetching remonded data'.error)
        }
    }
     useEffect(()=>{
            Recommended()
     },[])


  return (


    <div className='container'>
           {apiData.map((item,index)=>{
        return(
          <Link to={`/video/${item.snippet.categoryid}/${item.id}`}>  <div key={index} className="Card1">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="video-info1">
            <h4>{item.snippet.channelTitle}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)} views</p>
            </div>
        </div>
        </Link>
        )
   })}
       
       
       

    </div>
  )
}

export default Recommended
