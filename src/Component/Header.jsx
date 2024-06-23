import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

const Header = () => {
  const [login, setLogin] = useState("Login")
  return (
<div>
    <div className="header">
       <div className='nav-logo'>
       <img className='logo' src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" alt="" />
       </div>
       <div className='nav-bar'>
           <ul >
     
             <li><Link to="/about">About</Link> </li>
               <li> <Link to="/resturant">Resturant</Link></li>
               <li><Link to="/offer">Offers</Link></li>
               <li><Link to="/sign"> Sign In</Link></li>
               <li><Link to="/help">Help</Link></li>
               <li><button onClick={()=>{
                login === "Login"?
                setLogin("LogOut")
                :setLogin("Login")}}>{login}
               </button></li>
               <li>Cart</li>
               
           </ul>
       </div>
    </div>
    </div>
  )
}

export default Header
