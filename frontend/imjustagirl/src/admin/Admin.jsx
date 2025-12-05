import React, {useState} from 'react'
import fashion from '/icons/fashion.png'
import hair from '/icons/hair.png'
import skin from '/icons/skin.png'
import photography from '/icons/photography.png'
import nails from '/icons/nails.png'
import chef from '/icons/chef.png'
import frame from '/icons/frame.png'
import handbag from '/icons/handbag.png'
import tumbler from '/icons/tumbler.png'
import phone from '/icons/phone.png'
import wallpaper from '/icons/wallpaper.png'
import AdminNav from './AdminNav';
import { Link } from 'react-router-dom';

const Admin = () => {
    
    return (
    <div>
        <AdminNav/>
        <div className='admin-main'>
            <div className='admin-cards'>
                <ul>
                    <li className='cards-lists'>
                        <Link to="/AdminFashion">
                            <img className='icons' src={fashion}/>
                            <button className='sidebar-btn'>Fashion</button>
                        </Link> 
                    </li>
                    <li className='cards-lists'>
                        <Link to="/AdminHair">
                            <img className='icons' src={hair}/>
                            <button className='sidebar-btn'>Hair</button>
                        </Link>
                    </li>
                    <li className='cards-lists'>
                        <Link to="/AdminSkin">
                            <img className='icons' src={skin}/>
                            <button className='sidebar-btn'>Skin</button>
                        </Link>
                    </li>
                    <li className='cards-lists'>
                        <Link to="/AdminPhotography">
                            <img className='icons' src={photography}/>
                            <button className='sidebar-btn'>Photography</button> 
                        </Link>
                    </li>
                    <li className='cards-lists'>
                        <Link to="/AdminNails">
                            <img className='icons' src={nails}/>
                            <button className='sidebar-btn'>Nail Art</button>
                        </Link>
                    </li>
                    <li className='cards-lists'>
                        <Link to="/AdminRecipe">
                            <img className='icons' src={chef}/>
                            <button className='sidebar-btn'>Reciepe</button>
                        </Link>
                    </li>
                    <li className='cards-lists'>
                        <Link to="/AdminDecor">
                            <img className='icons' src={frame}/>
                            <button className='sidebar-btn'>Decor</button>
                        </Link>
                    </li>
                    <li className='cards-lists'>
                        <Link to="/AdminBags">
                            <img className='icons' src={handbag}/>
                            <button className='sidebar-btn'>Bags</button>
                        </Link>
                    </li>
                    <li className='cards-lists'>
                        <Link to="/AdminSippers">
                            <img className='icons' src={tumbler}/>
                            <button className='sidebar-btn'>Sippers</button>
                        </Link>
                    </li>
                    <li className='cards-lists'>
                        <Link to="/AdminPhoneCovers">
                            <img className='icons' src={phone}/>
                            <button className='sidebar-btn'>Phone Covers</button>
                        </Link>
                    </li>
                    <li className='cards-lists'>
                        <Link to="/AdminWallpapers">
                            <img className='icons' src={wallpaper}/>
                            <button className='sidebar-btn'>Wallpapers</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
export default Admin