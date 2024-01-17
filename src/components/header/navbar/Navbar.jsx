import React from 'react';
import "./navbar.css"
import Logo from "../../../img/logo1.jpg"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <img src={Logo} alt="" />
        <h4>Azad Hukuk Bürosu</h4>
      </div>
      <div className='nav-right'>
        <ul>
            <li>Anasayfa</li>
            <li>Hakkımızda</li>
            <li>Hizmetlerimiz</li>
            <li>Ekibimiz</li>
            <li>Blog</li>
            <li>İletişim</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
