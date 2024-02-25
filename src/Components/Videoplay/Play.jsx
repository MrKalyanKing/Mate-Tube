import React, { useEffect, useState } from 'react'
import './Play.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import moment from 'moment'


export const API_KEY='AIzaSyB1B7Yfub92NmrjFIVNhjT6e8_3gI1IBkU';

   const Play = ({ videoid }) => {
    const [apiData, setApiData] = useState(null);
    const [channelDetails,setChannelDetails]= useState(null);
    const [commentData,setCommentData]= useState([])
 
    const fetchVideoData = async () => {
        const video_id_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid}&key=${API_KEY}`;
        const response = await fetch(video_id_url);
        const data = await response.json();
        if (data.items && data.items.length > 0) {
            setApiData(data.items[0]);
        }
    }
  
      
    const fetchChannelData = async () => {
      const channel_details = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
      const response = await fetch(channel_details);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
          setChannelDetails(data.items[0]);
      }
  }    
  const fetchCommentData = async () => {
    try {
        const comment_data_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=42&videoId=${videoid}&key=${API_KEY}`;
        const response = await fetch(comment_data_url);
        if (!response.ok) {
            throw new Error('Failed to fetch comment data');
        }
        const datacom = await response.json();
        if (datacom.items && datacom.items.length > 0) {
            setCommentData(datacom.items);
            //console.log(datacom.items); // Log the commentData array
        }
    } catch (error) {
        console.error('Error fetching comment data:', error);
    }
};

  useEffect(() => {
    if (!apiData) {
        fetchVideoData();
    } else if(!channelDetails){
        fetchChannelData();
    }
    else {
      fetchCommentData();
    }
}, [apiData,channelDetails]); 
if (!apiData || !channelDetails || !commentData) {
  return <div>Loading...</div>;
}

  return (

    <div className='left-side'>
       <div className="video">
        {/*<video src={video} controls ></video>*/}
        <iframe  src={`https://www.youtube.com/embed/${videoid}`} title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

       </div>
       <div className='video-information'>
         <h2> {apiData.snippet.title}</h2>
         <h3>  {value_converter(apiData.statistics.viewCount)} views &bull; {moment(apiData.snippet.publishedAt).fromNow()} </h3> 
         <h5>  </h5>
         <div className='likebtn'>
              <img src={like} alt="" /><p>{value_converter(apiData.statistics.likeCount)}</p>
              <img src={dislike} alt="" /><p>2</p>
              <img src={share} alt="" />
              <img src={save} alt="" />
         </div>
       </div>
       <hr/>
               <div className="publisher">
                  <div className="channel-info">
                    <img src={channelDetails.snippet.thumbnails.default.url} alt="" />
                  </div>
                    <div className="channel-name">
                       <h2>{channelDetails.snippet.title}</h2>
                       <h3>{value_converter(channelDetails.statistics.subscriberCount)}sucribers</h3>
                    </div>
                    <div className="subcriber-btn">
                      <button>Subcribe</button>
                    </div>
               </div>
               <div className="video-dis">
                      <p>{apiData.snippet.description.slice(0,280)}</p>
                </div>
                <hr/>
      <h2 className='comment'>{value_converter(apiData.statistics.commentCount)} Comments</h2>
       {/* <div className="show-comments">
          <button onClick={ToggleComment()}>Show Comments</button>
  </div>*/}
 
        
          {commentData.map((item,index)=>{
            console.log(Array.isArray(commentData))
            return(

              <div   className="comment-section" >
            <div key={index} className="comment-info">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} &bull; {moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</h3>
            </div>
            <div className="comment-action">
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-btn">
                    <img src={like} alt="" /><span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
             
        </div>
        )
      })}


                 
                 
              </div>
             
         
    
  )
}

export const value_converter=(value)=>{
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
const displaycomment=document.querySelector('.comment-section');
console.log(displaycomment)
 function ToggleComment(){
  if(displaycomment){
   displaycomment.style.display='block';
  }
  else{
    console.log('cannot find comment section')
  }
 }
export default Play
