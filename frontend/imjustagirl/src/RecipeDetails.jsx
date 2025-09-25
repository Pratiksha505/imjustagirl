import React from 'react'
import CommonBars from './CommonBars'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import pizza from './images/recipe/pizza.webp';

const RecipeDetails = () => {
  return (
    <>
    <div>
        <CommonBars/>
        <div className="recipe-main">
            <div>
                <h2 className='recipe-head'> ✨From Tasha's Kitchen With Love✨ </h2>
            </div>

            <div className='recipe-details'>
                <h3 className='rd-head'> PIZZA </h3>
                <div className='ingr-img'>
                    <img className='rd-img' src={pizza} />
                    
                    <div className="ingredients-box">
                        <h4 className='ingr-head'> 🧾Ingredients </h4>
                        <ul className='ingr-list'> <hr className='line'/>
                            <li> ✓ &nbsp; Pizza base (thin crust or pan) </li> <hr className='line'/>
                            <li> ✓ &nbsp; Tomato sauce </li> <hr className='line'/>
                            <li> ✓ &nbsp; Mozzarella cheese </li> <hr className='line'/> 
                            <li> ✓ &nbsp; Bell peppers, onions, olives </li> <hr className='line'/>
                            <li> ✓ &nbsp; Chili flakes & oregano </li> <hr className='line'/>
                        </ul>
                    </div>
                </div>

                <div className="full-recipe">
                    <h4 className='full-head'> 🍽️Let's Get Cooking! </h4>
                    <ol className='full-list'>
                        <li> &nbsp; Spread tomato sauce evenly over the pizza base. </li>
                        <li> &nbsp; Sprinkle cheese generously across the top. </li>
                        <li> &nbsp; Add veggies and toppings of your choice. </li>
                        <li> &nbsp; Bake at 200°C for 10-12 minutes until golden and bubbly. </li>
                        <li> &nbsp; Sprinkle chili flakes & oregano, then slice and serve hot! </li>
                    </ol>
                </div>

                <Link  to="/Recipe">
                    <button className="back-btn"> ← Back to Recipes </button>
                </Link>
            </div>

        </div>

        <Footer/>
    </div>
    </>
  )
}

export default RecipeDetails