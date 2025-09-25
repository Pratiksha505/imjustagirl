import React from 'react'
import CommonBars from './CommonBars'
import Footer from './Footer'
const Wallpapers = () => {
  return (
    <div>
      <CommonBars/>
      <div className='wallpaper-main'>
        <div className='wallpaper-heading'>
          <h2 className='wallpaper-heading-text'>✨Dress up your📱in dreamy💫 vibes ✨</h2>
        </div>
      
        <section className='wallpaper-mid-section'>
          <div className='wallpaper1'>
            <div className='wallpaper-border'>
              <div className='wallpaper-imgs'>
                <img src="https://m.media-amazon.com/images/I/71YXsxuCw9L.jpg"/>
              </div>
            </div>
            <div className='wallpaper-border'>
              <div className='wallpaper-imgs'>
                <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQC9WqrV-7cRnxLu9XNODJSyfYwZS-OTzRy9AGDjGHwffAHZi0c-gUfdT9EM_A1uFB2ts8JWjAr8UvqUj8HapahG76T6VZAeuToX8chW0TkiX-nUWiW2Gk"/>
              </div>
            </div>
            <div className='wallpaper-border'>
              <div className='wallpaper-imgs'>
                <img src="https://m.media-amazon.com/images/I/71YXsxuCw9L.jpg"/>
              </div>
            </div>
          </div>
        </section>
      </div>
    
      <Footer/>
    </div>
  )
}
export default Wallpapers