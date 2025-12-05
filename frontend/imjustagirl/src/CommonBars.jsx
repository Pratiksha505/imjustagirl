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
import logo from '/icons/logo.png'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CommonBars = () => {
  const[adminLogin,setAdminLogin]=useState(false)
  const[AdminDetails,setLoginAdminDetails]=useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAdmin=()=>{
    setAdminLogin(true);
  }
  const closePopUp=()=>{
    setAdminLogin(false);
  }
  const loginAdminDetails=()=>{
    if(email==="tasha@gmail.com" && password==="tasha123"){
      navigate('/Admin');
    }
    else{
      alert('error');
    }
  }
  return (
    <div>

      <nav className="navbar ">
        <div className="container-fluid">
          <div>
            <Link to='/Home'> 
              <img className='logo' src={logo}/>
            </Link>
          </div>
          <h1 className="navbar-brand mb-0 h1">I'm Just A Girl🎀</h1>
          <a href="#" className='bytasha' onClick={handleAdmin}>By Tasha</a>
        </div>
      </nav>
        
      {adminLogin &&
        <div className='admin-login-form'>
          <button className='popup-btn' onClick={closePopUp}>X</button>
          <h2 className='login-text'>Admin Login</h2>
          <label className='form-label'>Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
          <input type="email" className="field1" value={email} onChange={(e) => setEmail(e.target.value)}/><br></br>
          <label className='form-label'>Password  &nbsp;</label>
          <input type="password" className="field1" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <div className='popupbtn-submit'>
            <button className='popupbtn-admin' onClick={loginAdminDetails}>Login</button>
          </div>
        </div>
      }
        
      <div className='sidebar'>
        <ul>
          <li className='sidebar-lists1'><Link to="/Fashion"><img className='icons' src={fashion}/><button className='sidebar-btn'>Fashion</button></Link> </li>
          <li className='sidebar-lists'><Link to="/Hair"><img className='icons' src={hair}/><button className='sidebar-btn'>Hair</button></Link></li>
          <li className='sidebar-lists'><Link to="/Skin"><img className='icons' src={skin}/><button className='sidebar-btn'>Skin</button></Link></li>
          <li className='sidebar-lists'><Link to="/Photography"><img className='icons' src={photography}/><button className='sidebar-btn'>Photography</button></Link></li>
          <li className='sidebar-lists'><Link to="/Nails"><img className='icons' src={nails}/><button className='sidebar-btn'>Nail Art</button></Link></li>
          <li className='sidebar-lists'><Link to="/Recipe"><img className='icons' src={chef}/><button className='sidebar-btn'>Reciepe</button></Link></li>
          <li className='sidebar-lists'><Link to="/Decor"><img className='icons' src={frame}/><button className='sidebar-btn'>Decor</button></Link></li>
          <li className='sidebar-lists'><Link to="/Bags"><img className='icons' src={handbag}/><button className='sidebar-btn'>Bags</button></Link></li>
          <li className='sidebar-lists'><Link to="/Sippers"><img className='icons' src={tumbler}/><button className='sidebar-btn'>Sippers</button></Link></li>
          <li className='sidebar-lists'><Link to="/PhoneCovers"><img className='icons' src={phone}/><button className='sidebar-btn'>Phone Covers</button></Link></li>
          <li className='sidebar-lists'><Link to="/Wallpapers"><img className='icons' src={wallpaper}/><button className='sidebar-btn'>Wallpapers</button></Link></li>
        </ul>
      </div>
      
    </div>
  )
}
export default CommonBars