import React from 'react'
import "./icon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone , faEnvelope , faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Icon() {
    const phone = <FontAwesomeIcon icon={faPhone} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const location = <FontAwesomeIcon icon={faLocationDot} />
  return (
    <div className='icons'>
        <div className='icon-phone'>
            <i>{phone}</i>
            <p>+905555555444</p>
        </div>
        <div className='icon-email'>
            <i>{email}</i>
            <p>azadlawyer@gmail.com</p> 
        </div>
        <div className='icon-location'>
            <i>{location}</i>
            <p>osmanağa cad. no:14 kadıköy/İstanbul</p>
        </div>
    </div>
  )
}

export default Icon
