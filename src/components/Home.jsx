import React from 'react'
import "../assets/css/home.css"
import avatar from "../assets/images/beard.png"
const Home = () => {
  return (
    <div className="home-container">
      <img src={avatar} alt="" className="hc-avatar" />
      <div className="hc-titles-left">
        <h1 className="hc-title">
          HATIM
        </h1>
        <h1 className="hc-title">
          MAKBOUL
        </h1>
      </div>
      <div className="hc-content-right">
        <div className="hc-cr-subtitle">UX Engineer</div>
        <h2 className="hc-cr-title">
          Based in Morocco, I'm a developer and a graphics designer.
        </h2>
        <p className="hc-cr-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam voluptate autem ea dolores expedita minus?</p>
        <div className="hc-cr-infos">
        <p className="hc-cr-info">P : +212 626 661 516</p>
        <p className="hc-cr-info">E : Bourichi.taha@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Home