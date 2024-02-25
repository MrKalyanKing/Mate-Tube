import React from 'react'
import './Slidebar.css'
import home from '../../assets/home.png'
import gaming from '../../assets/game_icon.png'
import automobile from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import technology from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import simon  from '../../assets/simon.png'
import jack  from '../../assets/jack.png'
import megan  from '../../assets/megan.png'


const Slidebar=({slidebar,category,setCategory})=>{
    return(
        <div className={`slidebar ${slidebar?"":"small-slidebar"}`}>
            <div className="shortcut-links">
             <div className={`slide-link ${category===0?"active":""}`} onClick={()=>{setCategory(0)}}>
                 <img  src={home} alt="" /><p>Home</p>
             </div>
                <div className={`slide-link ${category===20?"active":""}`}onClick={()=>setCategory(20)}>
                    <img src={gaming} alt="" /><p>Gaming</p>
                </div>
                <div className={`slide-link ${category===2?"active":""}`}onClick={()=>setCategory(2)}>
                    <img src={automobile} alt="" /><p>Automobile</p>
                </div>
                <div className={`slide-link ${category===17?"active":""}`}onClick={()=>setCategory(17)}>
                    <img src={sports} alt="" /><p>Sports</p>
                </div>
                <div className={`slide-link ${category===24?"active":""}`}onClick={()=>setCategory(24)}>
                    <img src={entertainment} alt="" /><p>Entertainment</p>
                </div>
                <div className={`slide-link ${category===28?"active":""}`}onClick={()=>setCategory(28)}>
                    <img src={technology} alt="" /><p>Technology</p>
                </div>
                <div className={`slide-link ${category===10?"active":""}`}onClick={()=>setCategory(10)}>
                    <img src={music} alt="" /><p>Music</p>
                </div>
                <div className={`slide-link ${category===22?"active":""}`}onClick={()=>setCategory(22)}>
                    <img src={blogs} alt="" /><p>Blogs</p>
                </div>
                <hr/>

            </div>
            <div className="subcriber">
                <h3>Subcribers</h3>
                <div className="slide-link">
                    <img src={simon} alt="" /><p>Simon</p>
                </div>
                <div className="slide-link">
                    <img src={jack} alt="" /><p>Jack</p>
                </div>
                <div className="slide-link">
                    <img src={megan} alt="" /><p>Megan</p>
                </div>
            </div>
        </div>
    )
}
export default Slidebar