import React from 'react'
import Footer from './Footer'
import CommonBars from './CommonBars';
import { Link } from 'react-router-dom'
import pizza from './images/recipe/pizza.webp';

const Recipe = () => {
  return (
    <>
    <div>
      <CommonBars/>
      <div className="recipe-main">
        <div>
          <h2 className='recipe-head'> 🍕From Tasha's Kitchen With Love </h2>
        </div>

        <div className='recipe-content'>
          <div className='recipe-card'>
            <img className='recipe-img' src={pizza}/>
            <h3 className='item-head'> PIZZA </h3>
            <Link to='/RecipeDetails'>
              <button className='show-recipe'> Show Recipe </button>
            </Link>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Recipe