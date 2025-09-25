import React, { useState } from 'react'
import Footer from './Footer'
import CommonBars from './CommonBars'

const Bags = () => {
  const[back, setBack]=useState(true);
  const[tote, setTote]=useState(false);
  const[clutch, setClutch]=useState(false);
  const[work, setWork]=useState(false);

  const openBack=()=> {
    setBack(true);
    setTote(false);
    setClutch(false);
    setWork(false);
  }

  const openTote=()=> {
    setBack(false);
    setTote(true);
    setClutch(false);
    setWork(false);
  }

  const openClutch=()=> {
    setBack(false);
    setTote(false);
    setClutch(true);
    setWork(false);
  }

  const openWork=()=> {
    setBack(false);
    setTote(false);
    setClutch(false);
    setWork(true);
  }

  return (
    <>
    <div>
      <CommonBars/>
      <div className="bags-main">
        <div>
          <h2 className='bags-head'> 🌸Pretty Little Carriers </h2>
        </div>

        <div className="bags-content">
          <div className="bags-btns">
            <button className='bags' onClick={openBack}> 🎒Backpacks </button>
            <button className='bags' onClick={openTote}> 👜Totes </button>
            <button className='bags' onClick={openClutch}> 👛Clutches </button>
            <button className='bags' onClick={openWork}> 💼Work Bags </button>
          </div>

          <div className="show-bags">

            {back &&
            <div className="all">
              🎒Backpacks
            </div>
            }

            {tote &&
            <div className="all">
              👜Totes
            </div>
            }

            {clutch &&
            <div className="all">
              👛Clutches
            </div>
            }

            {work &&
            <div className="all">
              💼Work Bags
            </div>
            }

          </div>

          
        </div>

      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Bags