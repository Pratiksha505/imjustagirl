import React from 'react'
import CommonBars from './CommonBars'
import Footer from './Footer'

const Sippers = () => {
  return (
    <>
    <div>
      <CommonBars/>

      <div className="sippers-main">
        <div>
          <h2 className='sippers-head'> 🧋Sip in Style, Girl! </h2>
        </div>

        <div className="sippers-content">
          <div className='tumbler'>
            <div className='sipper-imgs'>
              <img src="https://m.media-amazon.com/images/I/71YXsxuCw9L.jpg"/>
            </div>
            <div className='sipper-imgs'>
              <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQC9WqrV-7cRnxLu9XNODJSyfYwZS-OTzRy9AGDjGHwffAHZi0c-gUfdT9EM_A1uFB2ts8JWjAr8UvqUj8HapahG76T6VZAeuToX8chW0TkiX-nUWiW2Gk"/>
            </div>
            <div className='sipper-imgs'>
              <img src="https://m.media-amazon.com/images/I/71YXsxuCw9L.jpg"/>
            </div>
            
          </div>

        </div>

      </div>
      
      <Footer/>
    </div>
    </>
  )
}

export default Sippers