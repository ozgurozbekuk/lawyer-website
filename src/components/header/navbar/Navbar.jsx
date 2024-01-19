import React from 'react';
import "./navbar.css"
import Logo from "../../../img/logo1.jpg";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <img src={Logo} alt="" />
        <h4>Azad Hukuk Bürosu</h4>
      </div>
      <div className='nav-right'>
      <ul>
        <li><NavLink to="/" exact="true" >Anasayfa</NavLink></li>
        <li><NavLink to="/about">Hakkımızda</NavLink></li>
        <li><NavLink to="/services">Hizmetlerimiz</NavLink></li>
        <li><NavLink to="/team">Ekibimiz</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">İletişim</NavLink></li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
