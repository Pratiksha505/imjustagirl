import React from 'react';
import { useEffect } from 'react';
import bgimg from './images/logo/bgimg.jpg';
import vid from './videos/logoboth.mp4';
import {useNavigate} from 'react-router-dom';

const Logo = () => {
  const navigate= useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      navigate('/Home')
    },5000)
  },[]);

  return (
    <>
    <div>
      <div className="bglogo">
        <img src={bgimg} className='bgimg'/>
        <img src={bgimg} className='bgimg'/>
        <img src={bgimg} className='bgimg'/>
        <img src={bgimg} className='bgimg'/>
      </div>

      <div className='logovideo'>
        <video className='logovid' autoPlay loop muted>
          <source src={vid} type='video/mp4'/>
        </video>
      </div>

    </div>
    </>
    
  )
}

export default Logo