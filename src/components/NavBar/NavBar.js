import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.jpg';


const NavBar = () => {
      return (
          <nav className="navBar">
              <div className="navContainer">
                  <img className="logo" src={logo} alt="logo"/>
                 <Link to="/login">
                 <button className="navBtn">Login/Register</button>
                 </Link>
              </div>
          </nav>
      )
}



export default NavBar;