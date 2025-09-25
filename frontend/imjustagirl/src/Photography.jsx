import React from 'react'
import CommonBars from './CommonBars'
import Footer from './Footer'
const Photography = () => {
  return (
    <div>
      <CommonBars/>
      
      <div className='photography-main'>
        <div className='photo-top-section'>
          <h2 className='photo-text1'> 💅Strike a Pose, Princess</h2>
        </div>
      
        <div className='photo-mid-section'>
        
          <section className="cafe-section">
            <h2 className="section-heading">☕Sippin' & Snapshots📷 </h2>
            <div className="cafe-grid">
              <a className="cafe-card" href="#cafe1">
                <p>Latte in hand, soft gaze ready✨</p>
              </a>
              <a className="cafe-card" href="#cafe1">
                <p>Sips, smiles, and sweet moments💖</p>
              </a>
              <a className="cafe-card" href="#cafe1">
                <p>Croissant & calm kind of day🥐</p>
              </a>
              <a className="cafe-card" href="#cafe1">
                <p>Journals, java & gentle mornings☁️</p>
              </a>
            </div>
          </section>
        
          <section className="book-candle-section">
            <h2 className="section-heading">📖Pages, Petals & Candle Glow🕯️</h2>
            <div className="book-grid">
              <a className="book-card" href="#book1">
                <p>Chapter one: You & soft light🌼</p>
              </a>
              <a className="book-card" href="#book1">
                <p>Petals, pages & peaceful vibes🌸</p>
              </a>
              <a className="book-card" href="#book1">
                <p>Weekend read, candle lit, heart full✨</p>
              </a>
            </div>
          </section>
          
          <section className='pose-section'>
            <h2 className='section-heading'>Head high, chin up, crown on👑</h2>
            <a className="pose-card1" href="#pose">
              <p className='pose-card'>Glow in every frame, babe✨📸</p>
            </a>
          </section>
          
          <section className='bottom-section'>
            <a name="cafe1"></a>
            <div className='bottom1'>
              kjhgf
            </div>
          </section>
          
          <section className='bottom-section2'>
            <a name="book1"></a>
            <div className='bottom2'>
              ghjk
            </div>
          </section>

          <section className='bottom-section3'>
            <a name="pose"></a>
            <div className='bottom3'>
             ghjk
            </div>
          </section>
        
        </div>
        
      </div>
      
      <Footer/>
    </div>
  )
}
export default Photography