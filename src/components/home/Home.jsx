import React from 'react'
import Info from '../header/info/Info'
import Services from '../services/Services'
import About from '../about/About'
import Team from '../team/Team'
import Contact from '../contact/Contact'

function Home() {
  return (
    <div>
      <Info/>
      <About />
      <Services/>
      <Team />
      <Contact/>
    </div>
  )
}

export default Home
