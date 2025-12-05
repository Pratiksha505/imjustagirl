import React, { useState } from 'react'
import CommonBars from './CommonBars'
import Footer from './Footer'
import card1 from './images/cards/card1.jpg'
import card2 from './images/cards/card2.jpeg'
import card3 from './images/cards/card3.jpeg'
import card4 from './images/cards/card4.jpeg'
import card5 from './images/cards/card5.jpeg'
import { Link } from 'react-router-dom'


const Home = () => {

   const [popup,setPopUp]=useState(false);
   const [loginpopup,setLoginPopUp]=useState(false);
   const [forgotpopup,setForgotPopUp]=useState(false);
   const handleSignUp=()=>{
      setPopUp(true);
   }
   const handleLogin=()=>{
      setLoginPopUp(true);
      setPopUp(false);
   }
   const closePopUp=()=>{
      setPopUp(false);
      setLoginPopUp(false);
      setForgotPopUp(false);
   }
   const handleForgot=()=>{
      setForgotPopUp(true);
      setLoginPopUp(false);
   }
    
  return (
      <div>
        <CommonBars/>
      
        <div className='main'>
            <div className='searchbar'>
               <input type="text" className="search" placeholder='search for Fashion, Receipe, Nails etc.'/>
               <button onClick={handleSignUp} className='btn1'>Sign Up</button>
               <button onClick={handleLogin} className='btn1'>Login</button>
            </div>

            {popup &&
               <div className='signup-form'>
                  <button className='popup-btn' onClick={closePopUp}>X</button>
                  <h2 className='signup-text'>Sign Up</h2>
                  <label className='form-label'>First Name &nbsp;</label>
                  <input type="text" className='field1'></input><br></br>
                  <label className='form-label'>Last Name &nbsp;</label>
                  <input type="text" className='field1'></input><br></br>
                  <label className='form-label'>Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
                  <input type="email" className='field1'></input><br></br>
                  <label className='form-label'>Password &nbsp; &nbsp;</label>
                  <input type="password" className='field1'></input>
                  <div className='popupbtn-submit'>
                  <button className='popupbtn-2'>Create Account</button> <br/>
                  <a href="#" className='form-label' onClick={handleLogin}>Already have an account?</a>
                  </div>
               </div>
            }

            {loginpopup &&
               <div className='login-form'>
                  <button className='popup-btn' onClick={closePopUp}>X</button>
                  <h2 className='login-text'>Login</h2>
                  <label className='form-label'>Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
                  <input type="email" className='field1'></input><br></br>
                  <label className='form-label'>Password  &nbsp;</label>
                  <input type="password" className='field1'></input>
                  <div className='popupbtn-submit'>
                     <button className='popupbtn-2'>Login</button>  <br/>
                     <a href="#" className='form-label' onClick={handleForgot}>Forgot Password?</a>
                  </div>
               </div>
            }

           {forgotpopup &&
               <div className='forgot-form'>
                  <h2 className='login-text'>Forgot Password</h2>
                  <button className='popup-btn1'onClick={closePopUp}>X</button>
                  <label className='forgot-form-label'>Email &nbsp; &nbsp;</label>
                  <input type="email"  className='field1'></input>
                  <p className='forgot-form-label'>Check Your Mail for the Link.</p>
               </div>
            }

            <div className='description'>
               <h2 className='text1'>“Girlie vibes only — welcome to your happy place!”</h2>
               <h2 className='bowimg'>🎀</h2>
            </div>

            <div className='description1'>
               <h2 className='text1'>"For all the moody girlies out there..."</h2>
               <h2 className='bowimg'id="bowimg2">🎀</h2>
            </div>


            <div className='main2'>
               <div className="cards-block carousel">

                  <div className="group">
                     <div className="card" id="card1">
                        <img src={card1} className="card-img" id="card1-img" alt="..." />
                        <div className="card-img-overlay">
                           <h5 className="card-title" id="c-title">Cute Outfit Ideas for Summer Days</h5>
                           <p className="card-text">Stay cozy and stylish when the skies open up. Easy looks you can recreate today!</p>
                        </div>
                     </div>
                     <div className="card">
                        <img src={card2} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                        <h5 className="card-title" id="c-title">3-Minute Mug Cakes to Sweeten Your Mood</h5>
                        <p className="card-text">When your sweet tooth calls, answer it fast!</p>
                        </div>
                     </div>
                     <div className="card">
                        <img src={card3} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                        <h5 className="card-title" id="c-title">Trending Bags That Complete Your Look</h5>
                        <p className="card-text">From totes to mini backpacks — find your new fave arm candy.</p>
                        </div>
                     </div>
                     <div className="card">
                        <img src={card4} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                        <h5 className="card-title" id="c-title">DIY Room Decor for That Cozy Girl Vibe</h5>
                        <p className="card-text">Small tweaks, big mood change. Your space deserves it!</p>
                        </div>
                     </div>
                     <div className="card">
                        <img src={card5} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                        <h5 className="card-title" id="c-title">Office inspo</h5>
                        <p className="card-text">When you're in boss babe mode: power outfit picks</p>
                        </div>
                     </div>
                  </div>

                  <div className="group" aria-hidden="true">
                     <div className="card">
                        <img src={card1} className="card-img"alt="..." />
                        <div className="card-img-overlay">
                           <h5 className="card-title" id="c-title">Cute Outfit Ideas for Summer Days</h5>
                           <p className="card-text">Stay cozy and stylish when the skies open up. Easy looks you can recreate today!</p>
                        </div>
                     </div>
                     <div className="card">
                        <img src={card2} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                           <h5 className="card-title" id="c-title">3-Minute Mug Cakes to Sweeten Your Mood</h5>
                           <p className="card-text">When your sweet tooth calls, answer it fast!</p>
                        </div>
                     </div>
                     <div className="card">
                        <img src={card3} className="card-img" style={{ height: "370px" }} alt="..." />
                        <div className="card-img-overlay">
                           <h5 className="card-title" id="c-title">Trending Bags That Complete Your Look</h5>
                           <p className="card-text">From totes to mini backpacks — find your new fave arm candy.</p>
                        </div>
                     </div>
                     <div className="card">
                        <img src={card4} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                           <h5 className="card-title" id="c-title">DIY Room Decor for That Cozy Girl Vibe</h5>
                           <p className="card-text">Small tweaks, big mood change. Your space deserves it!</p>
                        </div>
                     </div>
                     <div className="card">
                        <img src={card5} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                           <h5 className="card-title" id="c-title">Office inspo</h5>
                           <p className="card-text">When you're in boss babe mode: power outfit picks</p>
                        </div>
                     </div>
                  </div>

               </div>

               <div className='side-section'>
                  <h2 className='bowimg1'>🎀</h2>
                  <h2 className='side-section-text'>Your go-to space for fashion, decor, nails, and more!</h2>
                  {/* <div className="btns"> */}
                  <Link to ="/WishList"> <button className="footer-btn">Your List</button></Link>
                  <Link to ="/About"> <button className="footer-btn">About Us</button></Link>
                  {/* </div> */}
               </div>
            </div>
            
         </div>

         <Footer/>
    
      </div>
  )
}

export default Home