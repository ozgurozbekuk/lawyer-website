import React from 'react';
import "./services.css";
import Lawyer3 from "../../img/lawyer3.jpg"

function Services() {
  return (
    <div className='services'>
      <h2>
        Uzmanlıklarımız
      </h2>
      <div className='s-cards'>
        <div className='cards-up'>
            <div className="card">
              <div className="card-left">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nostrum minus! Accusamus, distinctio?...</p>
                <button>Borçlar Hukuku </button> 
              </div>
              <div className="card-right">
                <img src={Lawyer3} alt="" />
              </div>
            </div>
            <div className="card">
              <div className="card-left">
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet a libero veniam quia perferendis accusantium....</p>
                 <button>Medeni Hukuk</button>  
              </div>
              <div className="card-right">
                <img src={Lawyer3} alt="" />
              </div> 
            </div>
            <div className="card">
              <div className="card-left">
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet a libero veniam quia perferendis accusantium....</p>
                 <button>Uluslararası Hukuk</button>  
              </div>
              <div className="card-right">
                <img src={Lawyer3} alt="" />
              </div> 
            </div>
        </div>
        <div className='cards-bottom'>
        <div className="card">
              <div className="card-left">
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet a libero veniam quia perferendis accusantium....</p>
                 <button>Ceza Hukuku</button>  
              </div>
              <div className="card-right">
                <img src={Lawyer3} alt="" />
              </div> 
            </div>
            <div className="card">
              <div className="card-left">
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet a libero veniam quia perferendis accusantium....</p>
                 <button>İcra İflas Hukuku</button>  
              </div>
              <div className="card-right">
                <img src={Lawyer3} alt="" />
              </div> 
            </div>
            <div className="card">
              <div className="card-left">
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet a libero veniam quia perferendis accusantium....</p>
                 <button>Fikri Mülkiyet Hukuku</button>  
              </div>
              <div className="card-right">
                <img src={Lawyer3} alt="" />
              </div> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
