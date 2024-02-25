import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import moment from 'moment'
 const API_KEY='AIzaSyB1B7Yfub92NmrjFIVNhjT6e8_3gI1IBkU';
const Feed=({category})=>{
      

     const[data,setData]= useState([]);
     
     const fetchData= async () =>{
          const video_list_url=`  https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=80&regionCode=IN&videoCategoryId=${category}&key=${API_KEY} `
          await fetch(video_list_url).then(res=>res.json()).then(data=>setData(data.items))
     }
     useEffect(()=>{
          fetchData();
     },[category])

     

    return(
        <div className="Feed">
          {data && data.map((item,index)=>{
               return(
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`}><div className='Card'>
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <h2>{item.snippet.title} </h2> 
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
               </div>
               </Link>
               )
          })}
        
        
           
 </div>

    )
}

  const value_converter=(value)=>{
     if(value>1000000){
         return Math.floor(value/1000000)+"M"
     }
     else if(value>=1000){
         return Math.floor(value/1000)+"k"
     }
     else{
         return value
     }
 }
export default Feed