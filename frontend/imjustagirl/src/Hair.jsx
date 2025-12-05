import React from 'react'
import CommonBars from './CommonBars'
import Footer from './Footer'
const Hair = () => {
  return (
    <div>
        <CommonBars/>
        <div className='hair-main'>
          <div className='hair-top-section'>
            <h2 className='hair-text1'> 💆‍♀️Because every girl deserves a good hair day </h2>
            <h2 className='hair-text2'>&nbsp;Soft &nbsp;strands,<br/> &nbsp;&nbsp;sweet  styles, &nbsp; always you💫</h2>
            <h2 className='hair-text3'>Twirls, curls <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&<br/> all the girl &nbsp;&nbsp;&nbsp;&nbsp;vibes💕 </h2>
            <h2 className='hair-text4'>Braids, buns <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&<br/> &nbsp;baddie vibes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;💁‍♀️</h2>
            <h2 className='hair-text5'>“For the love of waves, curls & cute clips🌸</h2>
          </div>
          <div className='hair-mid-section'>
            <div class="container2 text-center">
              <div class="row2">
                <a className='container-text' href = "#candy">
                  <div class="col" id="hair-category1">
                    💕Hair Candy
                  </div>
                </a>
                <a className='container-text' href= "#fairy">
                  <div class="col"  id="hair-category1">
                    🌷Hair Fairytales
                  </div>
                </a>
              </div>
            </div>
            <div className='hair-bottom-section'>
              <a name="candy"></a>
                <div className='hair-section'>
                  💕Hair Candy
                </div>
              <a name="fairy"></a>
                <div className='hair-section'>
                  🌷Hair Fairytales
                </div>
            </div>
          </div>
          <div className='hair-bottom-section'>
            <div class="spa-reminder-box">
              <span class="heart">💖</span>
              Self-care sparkle: Don’t skip your spa day, queen 👑
              <span class="heart">💖</span>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
export default Hair