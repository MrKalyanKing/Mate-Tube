import React from "react";
import './Navbar.css'
import menuicon from '../../assets/menu.png'
import logovideo from '../../assets/Logogif.gif'
import searchicon from '../../assets/search.png'
import uploadicon from '../../assets/upload.png'
import moreicon from '../../assets/more.png'
import notificationicon from '../../assets/notification.png'
import userprofileicon from '../../assets/megan.png'
import { Link } from "react-router-dom";

 
const Navbar=({setSliderbar})=>{
    return(
    <nav>
           <div className="menu">
              <img className='menu-icon' onClick={()=>setSliderbar(prev=>prev===false?true:false)} src={menuicon} alt="" />
            </div>
        <div className="left flex-div">
           
            
        <div className="logo " >
          <Link to='/' >  <img src={logovideo}  ></img></Link>
        </div>
        
        </div>
        
        <div className="navbar-middle " >
            <div className="searchbox">
            <input type="text" />
            <img src={searchicon} alt="" />
            </div>
        </div>
        <div className="navbar-right">
            <img src={uploadicon} alt="" />
            <img src={moreicon} alt="" />
            <img src={notificationicon} alt="" />
            <img className="prof"src={userprofileicon} alt="" />
        </div>
    </nav>
    )
}
export default Navbar