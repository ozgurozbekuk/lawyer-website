import React from 'react'
import "./info.css";
import Lawyer1 from "../../../img/lawyer1.jpg"
import Lawyer2 from "../../../img/lawyer2.jpg"
import Pp from "../../../img/pp2.png"

function Info() {
  return (
    <div className='info'>
      <div className='info-left'>
        <div className='info-text'>
           <h2>Azad Avukatlık Ofisi</h2>
           <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis eligendi quos inventore magnam explicabo tempore fuga non iste libero, earum assumenda! Ab sequi, incidunt veniam atque unde fugiat cumque, reprehenderit, repellat quos repellendus asperiores dolore tempore ipsum totam nemo molestiae possimus laudantium voluptates voluptatem accusamus debitis vel. Nihil magni saepe ex nam, sed eos dolores temporibus. Eum autem, dolorem, tenetur enim voluptatem recusandae vero nisi praesentium officiis veniam reiciendis maiores iste, vitae deleniti ex culpa minima. Quam temporibus iste sed unde et nihil praesentium error odit sequi animi saepe ut quisquam possimus beatae id, qui numquam quis voluptas recusandae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut omnis, vero veniam totam voluptatum repudiandae consequuntur rerum eos nemo neque vel aliquam adipisci fugiat molestiae alias et dolore aperiam placeat!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reiciendis ad a, rerum voluptate atque obcaecati beatae velit perspiciatis sit distinctio ducimus, amet quo ipsum consequuntur est iure accusamus maxime similique totam molestias cupiditate? Itaque omnis distinctio ducimus, laudantium et iusto vero quae eos iure, possimus in pariatur id mollitia.</h5>     
        </div> 
      </div> 
      <div className='info-right'>
        <img src={Lawyer1} alt="" />
      </div>
    </div>
  )
}

export default Info
