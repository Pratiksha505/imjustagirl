import React, { useState } from 'react'
import Footer from './Footer';
import CommonBars from './CommonBars';
// import tanu from './images/us/tanu.jpg'
// import prati from './images/us/prati.jpg'
// import tasha from './images/us/tasha.jpg'

const About = () => {
    const [site, setSite]=useState(true);
    const [us, setUs]=useState(false);

    const openSite=()=> {
        setSite(true);
        setUs(false);
    }

    const openUs=()=> {
        setUs(true);
        setSite(false);
    }

  return (
    <>
    <div>
        <CommonBars/>
        <div className='about'>

            <div className='about-container'>
                <div>
                    <h1 className='abouthead'> ♡ ABOUT US ♡ </h1>
                </div>
                <div className='buttons'>
                    <button className='site' onClick={openSite}> Site </button>
                    <button className='us' onClick={openUs}> Us </button>
                </div>

                <div className='about-con'>

                    {site &&
                        <div className='content-container1'>
                            <div className='content1'>
                                <h1 className='sitehead'> I'M JUST A GIRL </h1>
                                <div className='siteabout'>
                                    <p> Welcome to "I'm Just a Girl" — your cozy digital corner made just for girls who love expressing themselves through style, mood, and creativity! Whether you’re feeling dreamy, chic, bold, or playful, this is your happy place to scroll, get inspired, and vibe with your mood. </p>
                                    <p> This aesthetic photo gallery is curated with love — from fashion and hair inspo to cute room decor, nail art, and more. Every category is here to match your inner vibe. 💕 </p>
                                    <p> ✨ Got a favorite look or setup? Save it to Your List and come back whenever you want a dose of beauty and inspiration. </p>
                                    <p> ✨ Search by your mood, trend, or category. This site is all about you and your personal style journey. </p>
                                    <p> Made for the girlies who love pretty things, cozy vibes, and showing a little sparkle every day. </p>
                                    <p> Join our girl gang, explore the gallery, and let your scroll feel like a warm hug. 💖 </p>
                                </div>
                            </div>
                        </div>
                    }

                    
                    {us &&
                        <div className='content-container2'>
                            <div className='content2'>
                                <h1 className='ushead'> TASHA = TANU + PRATIKSHA </h1>
                                <div className='usabout'>
                                    <h4 className='tashahead'> TASHA </h4>
                                    <p> Tasha isn't just a name — it's us.
                                        We met during our master's and instantly clicked. 
                                        What started as classmates became endless laughter, deep talks, and a beautiful friendship.
                                        We called ourselves “Tasha” — a blend of Tanu and Pratiksha — because everything we do, we do together. 
                                        And now, I'm Just a Girl is our shared dream brought to life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    }

                    <div className='about-side-section'>
                        <h4> Want to know more about us? </h4>
                        <h4> DM us on @tashaaa.05 </h4> 
                    </div>
                
                </div>

            </div>
            
        </div>

        <Footer/>

    </div>
    
    </>
  )
}

export default About