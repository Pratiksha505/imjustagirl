import React from 'react'
import CommonBars from './CommonBars'
import Footer from './Footer'
import fashion from '/icons/fashion.png'
import hair from '/icons/hair.png'
import skin from '/icons/skin.png'
import photography from '/icons/photography.png'
import nails from '/icons/nails.png'
import chef from '/icons/chef.png'
import frame from '/icons/frame.png'
import handbag from '/icons/handbag.png'
import tumbler from '/icons/tumbler.png'
import phone from '/icons/phone.png'
import wallpaper from '/icons/wallpaper.png'
// import pastelstars from './images/pastelstars.webp'

const WishList = () => {
  return (
    <div>
      <CommonBars/>
        <div className='list-page-main'>
          <h2 className='list-heading'>Welcome to your Space...</h2>
          <div className='list-description'>
            <p className='list-text'>💖 Keep your sparkle picks in one place.</p>
            <h2 className='bowimg'>🎀</h2>
          </div>
          <div className='list-description1'>
            <p className='list-text1'>👑 Because every girlie needs a wishlist!</p>
            <h2 className='bowimg'>🎀</h2>
         </div>
          <div className="sparkle-container">
            <span className="star" style={{top: "102%",left: "30%", color:" #bea7bd"}}>✦</span>
            <span className="star" style={{top: "95%", left: "50%", color:" #bea7bd"}}>✦</span>
            <span className="star" style={{top: "110%", left: "40%", color:" #bea7bd"}}>✦</span>
            <span className="star" style={{top: "60%", left: "40%", color:" #bea7bd"}}>✦</span>
            <span className="star" style={{top: "120%", left: "20%", color:" #bea7bd"}}>✦</span>
            <span className="star" style={{top:"65%", left: "60%", color:" #bea7bd"}}>✦</span>
            <span className="star" style={{top: "70%",left: "25%", color:" #bea7bd"}}>✦</span>
          </div>

          <div className='list-sections'>
            <div className='list-group'>
              <h2 className='list-heading1'>Categories</h2>
              <p className='list-text2'> Click a category to start curating your wishlist!</p>
           
              <div className="container text-center">
                <div className="row">
                  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;
                  <div className="col1" id="round-div1">&nbsp;
                    <img className='icons' src={fashion}/>
                    Fashion
                  </div>
                  <div className="col1" id="round-div1">
                    &nbsp;  &nbsp;  
                    <img className='icons' src={hair}/>
                    &nbsp; &nbsp;   Hairs
                  </div>
                </div>
                <div className="row">
                  &nbsp;  &nbsp;  &nbsp; &nbsp;&nbsp;
                  <div className="col1" id="round-div1">
                    &nbsp;  &nbsp;  &nbsp; 
                    <img className='icons' src={skin}/>
                    &nbsp; &nbsp;    Skin
                  </div>
                  <div className="col1" id="round-div1">
                    &nbsp;  
                    <img className='icons' src={photography}/>
                      Photography
                  </div>
                  <div className="col1" id="round-div1">
                    &nbsp;  &nbsp;  &nbsp;  
                    <img className='icons' src={nails}/>
                    &nbsp; &nbsp; &nbsp;    Nail Art
                  </div>
                  <div className="col1" id="round-div1">
                    &nbsp;  
                    <img className='icons' src={chef}/>
                    Reciepe
                  </div>
                </div>
                <div className="row">
                  <div className="col1" id="round-div1">
                    &nbsp;  
                    <img className='icons' src={frame}/>
                    &nbsp;  Decor
                  </div>
                    <div className="col1" id="round-div1">
                      &nbsp;  &nbsp;  
                      <img className='icons' src={handbag}/>
                      &nbsp;  &nbsp;  Bags
                    </div>
                    <div className="col1" id="round-div1">
                      <img className='icons' src={tumbler}/>
                      Sippers
                    </div>
                    <div className="col1" id="round-div1">
                      &nbsp;  
                      <img className='icons' src={phone}/>
                        &nbsp;  Phone Covers
                    </div>
                    <div className="col1" id="round-div1">
                      <img className='icons' src={wallpaper}/>
                      Wallpaper
                    </div>
                </div>
              </div>
            </div>

            <div className='heart-emoji'>🫶</div>
            <div className='list-side-section'>
                <h2>Hey!! did you forget something ?<br></br> Where's your bestiee 🤔</h2>
                <h2>Invite her now...</h2><br/>
                <div className='link-btn'>
                  <button className='btn1'>Send link</button>
                </div>
            </div>
          </div>

          <div className="sparkle-container1">
            <span className="star" style={{top: "40%",left: "20%", color:" #bea7bd"}}>✦</span>
            <span className="star" style={{top: "30%", left: "50%", color:" #bea7bd"}}>✦</span>
            <span className="star" style={{top: "60%", left: "40%", color:" #bea7bd"}}>✦</span>
            <span className="star" style={{top: "25%", left: "35%", color:" #bea7bd"}}>✦</span>
            <span className="star" style={{top: "50%", left: "10%", color:" #bea7bd"}}>✦</span>
            <span className="star" style={{top:"15%", left: "45%", color:" #bea7bd"}}>✦</span>
            <span className="star" style={{top: "10%",left: "25%", color:" #bea7bd"}}>✦</span>
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default WishList