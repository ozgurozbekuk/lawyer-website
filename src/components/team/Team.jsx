import React from 'react'
import "./team.css"
import azad from "../../img/team.png"
import team2 from "../../img/team2.jpg"
import team3 from "../../img/team3.jpg"
import team4 from "../../img/team4.jpg"


function Team() {
  return (
    <div className='team'>
      <h2>Ekibimizle Tanışın</h2>
      <div className="t-cards">
        <div className="t-card">
            <img src={azad} alt="" />
            <h4>Azad Elpeze</h4>
            <span>Lawyer</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, repellendus.</p>
        </div>
        <div className="t-card">
            <img src={team2} alt="" />
            <h4>Azad Elpeze</h4>
            <span>Lawyer</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, repellendus.</p>
        </div>
        <div className="t-card">
            <img src={team3} alt="" />
            <h4>Azad Elpeze</h4>
            <span>Lawyer</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, repellendus. </p>
        </div>
        <div className="t-card">
            <img src={team4} alt="" />
            <h4>Azad Elpeze</h4>
            <span>Lawyer</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, repellendus.</p>
        </div>
      </div>
    </div>
  )
}

export default Team
