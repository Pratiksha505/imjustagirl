import React from 'react'
import CommonBars from './CommonBars'
import Footer from './Footer'

const Nails = () => {
  return (
    <div>
      <CommonBars/>
      <div className="nails-main">
        <div>
          <h2 className='nails-head'> 🌈Your Fingers Deserve Some Magic </h2>
        </div>

        <div className="nail-tips-container">
          <div className="nail-tips-card one">
            <h3>🌿 Keep Cuticles Moisturized </h3>
            <p>Use cuticle oil/hand cream daily for healthy nail beds.</p>
          </div>
          <div className="nail-tips-card two">
            <h3>✂️ File in One Direction</h3>
            <p>Avoid sawing back and forth—this prevents breakage and splits.</p>
          </div>
          <div className="nail-tips-card three">
            <h3>💅 Always Use a Base Coat</h3>
            <p>It protects nails and helps polish stay longer and smoother.</p>
          </div>
          <div className="nail-tips-card four">
            <h3>✨ Seal with a Top Coat</h3>
            <p>Adds shine and protects from chips—don't skip this magic layer!</p>
          </div>
          <div className="nail-tips-card five">
            <h3>🧴 Avoid Harsh Chemicals</h3>
            <p>Wear gloves when cleaning—detergents can dry out your nails.</p>
          </div>
          <div className="nail-tips-card six">
            <h3>💧 Drink Water for Nail Health</h3>
            <p>Hydration = stronger, shinier, and less brittle nails!</p>
          </div>
        </div>

        <div className='nails-photos'>
          <div className='nails-section'>
            <h2> Nailed It with Love 💘</h2>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Nails