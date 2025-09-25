import React from 'react'
import CommonBars from './CommonBars'
import Footer from './Footer'
const Decor = () => {
  return (
    <div>
      <CommonBars/>
    
      <div className='decor-main'>
        <div className='decor-heading'>
          <h2 className='decor-heading-text'> 💖Pretty little corners, made just for you </h2>
        </div>
      
        <section className='decor-carousel-section'>
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
      
            <div className="carousel-inner" id="slides">
              <div className="carousel-item active">
                <img src="https://i.pinimg.com/736x/7f/0d/d9/7f0dd90a9de4458b358f4bb89c79904c.jpg" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://i.pinimg.com/736x/75/a7/0f/75a70fe16c328ba9b62c6a9029168bf1.jpg"  alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://i.pinimg.com/736x/99/32/20/993220afb6a2deafc93136148d039b66.jpg"  alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            
          </div>
        </section>
        
        <section className='decor-mid-section'>
          <div className="decor-container">
            <div className="decor-card one">
              <img src="https://i.pinimg.com/736x/7f/0d/d9/7f0dd90a9de4458b358f4bb89c79904c.jpg" alt="Pink Dream" />
              <h4>Pink Dreamy Vibes</h4>
            </div>
            <div className="decor-card two">
              <img src="https://i.pinimg.com/736x/75/a7/0f/75a70fe16c328ba9b62c6a9029168bf1.jpg" alt="Star Room" />
              <h4>Star Light Serenity</h4>
            </div>
            <div className="decor-card three">
              <img src="https://i.pinimg.com/736x/99/32/20/993220afb6a2deafc93136148d039b66.jpg" alt="Fairy Wall" />
              <h4>Fairy Wall Corner</h4>
            </div>
            <div className="decor-card four">
              <img src="https://i.pinimg.com/736x/7f/0d/d9/7f0dd90a9de4458b358f4bb89c79904c.jpg" alt="Pink Dream" />
              <h4>Pink Dreamy Vibes</h4>
            </div>
            <div className="decor-card five">
              <img src="https://i.pinimg.com/736x/75/a7/0f/75a70fe16c328ba9b62c6a9029168bf1.jpg" alt="Star Room" />
              <h4>Star Light Serenity</h4>
            </div>
            <div className="decor-card six">
              <img src="https://i.pinimg.com/736x/99/32/20/993220afb6a2deafc93136148d039b66.jpg" alt="Mirror Decor" />
              <h4>Mirror Magic</h4>
            </div>
          </div>
        </section>
        
        <section className='decor-mid-section1'>
          <div className="decor-grid">
            <div className="decor-card1">
              <img src="https://i.pinimg.com/736x/7f/0d/d9/7f0dd90a9de4458b358f4bb89c79904c.jpg" alt="Pink Dream" />
              <h4>Pink Dreamy Vibes</h4>
            </div>
            <div className="decor-card1">
              <img src="https://i.pinimg.com/736x/75/a7/0f/75a70fe16c328ba9b62c6a9029168bf1.jpg" alt="Star Room" />
              <h4>Star Light Serenity</h4>
            </div>
            <div className="decor-card1">
              <img src="https://i.pinimg.com/736x/99/32/20/993220afb6a2deafc93136148d039b66.jpg" alt="Fairy Wall" />
              <h4>Fairy Wall Corner</h4>
            </div>
            <div className="decor-card1">
              <img src="https://i.pinimg.com/736x/99/32/20/993220afb6a2deafc93136148d039b66.jpg" alt="Books & Candles" />
              <h4>Books & Candles Nook</h4>
            </div>
            <div className="decor-card1">
              <img src="https://i.pinimg.com/736x/99/32/20/993220afb6a2deafc93136148d039b66.jpg" alt="Mirror Decor" />
              <h4>Mirror Magic</h4>
            </div>
            <div className="decor-card1">
              <img src="https://i.pinimg.com/736x/99/32/20/993220afb6a2deafc93136148d039b66.jpg" alt="Floral Vibe" />
              <h4>Floral Fantasy</h4>
            </div>
          </div>
        </section>
      
      </div>
      
      <Footer/>
    </div>
  )
}
export default Decor