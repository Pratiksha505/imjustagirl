import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Logo from './Logo'
import CommonBars from './CommonBars'
import Home from './Home'
import About from './About'
import Footer from './Footer'
import WishList from './WishList'
import Fashion from './Fashion'
import Hair from './Hair'
import Skin from './Skin'
import Photography from './Photography'
import Nails from './Nails'
import Recipe from './Recipe'
import Decor from './Decor'
import Bags from './Bags'
import Sippers from './Sippers'
import PhoneCovers from './PhoneCovers'
import Wallpapers from './Wallpapers'
import RecipeDetails from './RecipeDetails'
import Admin from './admin/Admin';
import AdminNav from './admin/AdminNav'
import AdminFashion from './admin/AdminFashion'
import AdminHair from './admin/AdminHair'
import AdminSkin from './admin/AdminSkin'
import AdminPhotography from './admin/AdminPhotography'
import AdminNails from './admin/AdminNails'
import AdminRecipe from './admin/AdminRecipe'
import AdminRecipeDetails from './admin/AdminRecipeDetails'
import AdminDecor from './admin/AdminDecor'
import AdminBags from './admin/AdminBags'
import AdminSippers from './admin/AdminSippers'
import AdminPhoneCovers from './admin/AdminPhoneCovers'
import AdminWallpapers from './admin/AdminWallpapers'
import ShowFashion from './admin/ShowFashion'
import ShowNails from './admin/ShowNails'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Logo/>}/>
      <Route path="/CommonBars" element={<CommonBars/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path='/Footer' element={<Footer/>}/>
      <Route path="/WishList" element={<WishList/>}/>
      <Route path="/Fashion" element={<Fashion/>}/>
      <Route path="/Hair" element={<Hair/>}/>
      <Route path="/Skin" element={<Skin/>}/>
      <Route path="/Photography" element={<Photography/>}/>
      <Route path="/Nails" element={<Nails/>}/>
      <Route path="/Recipe" element={<Recipe/>}/>
      <Route path="/RecipeDetails" element={<RecipeDetails/>}/>
      <Route path="/Decor" element={<Decor/>}/>
      <Route path="/Bags" element={<Bags/>}/>
      <Route path="/Sippers" element={<Sippers/>}/>
      <Route path="/PhoneCovers" element={<PhoneCovers/>}/>
      <Route path="/Wallpapers" element={<Wallpapers/>}/>

      <Route path='/AdminNav' element={<AdminNav/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/AdminFashion" element={<AdminFashion/>}/>
      <Route path="/AdminHair" element={<AdminHair/>}/>
      <Route path="/AdminSkin" element={<AdminSkin/>}/>
      <Route path="/AdminPhotography" element={<AdminPhotography/>}/>
      <Route path="/AdminNails" element={<AdminNails/>}/>
      <Route path="/AdminRecipe" element={<AdminRecipe/>}/>
      <Route path="/AdminRecipeDetails" element={<AdminRecipeDetails/>}/>
      <Route path="/AdminDecor" element={<AdminDecor/>}/>
      <Route path="/AdminBags" element={<AdminBags/>}/>
      <Route path="/AdminSippers" element={<AdminSippers/>}/>
      <Route path="/AdminPhoneCovers" element={<AdminPhoneCovers/>}/>
      <Route path="/AdminWallpapers" element={<AdminWallpapers/>}/>
      <Route path="/ShowFashion" element={<ShowFashion/>}/>
      <Route path="/ShowNails" element={<ShowNails/>}/>


    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App