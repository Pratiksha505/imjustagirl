import React from 'react'
import CommonBars from './CommonBars'
import Footer from './Footer'

const Skin = () => {
  return (
    <div>
      <CommonBars/>
      <div className="skin-main">
        <div>
          <h2 className='skin-head'> 🌼Where Skincare meets Self-love </h2>
        </div>
        <div className="skin-type-container">
          <div className="skin-card dry">
            <h3>🏜️Dry like the Desert</h3>
            <p>Hydrate with creamy moisturizers. Look for hyaluronic acid & shea butter.</p>
          </div>

          <div className="skin-card oily">
            <h3>💦Oily but Glowing</h3>
            <p>Use gel-based products. Don't skip moisturizer — go oil-free & lightweight!</p>
          </div>

          <div className="skin-card sensitive">
            <h3>🌸Sensitive & Soft</h3>
            <p>Go fragrance-free. Aloe vera & chamomile are your BFFs.</p>
          </div>

          <div className="skin-card combo">
            <h3>🍭Combo Queen</h3>
            <p>Balance your zones! Light layers + targeted care is the trick.</p>
          </div>
        </div>

        <div className='skin-category'>
          <div className='category'>
            <a className='category-head' href = "#morning">
              <div className="morning">
                ☀️Morning Glow Routine
              </div>
            </a>
          </div>
          <div className='category'>
            <a className='category-head' href = "#night">
              <div className="night">
                🌙Night Repair Ritual
              </div>
            </a>
          </div>
        </div>

        <div className='skin-photos'>
          <a name="morning"></a>
          <div className='skin-section'>
            <h2> ☀️Morning Glow Routine </h2>
          </div>
          <a name="night"></a>
          <div className='skin-section'>
            <h2> 🌙Night Repair Ritual </h2>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Skin