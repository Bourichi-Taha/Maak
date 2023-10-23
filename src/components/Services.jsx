import React from 'react'
import "../assets/css/services.css"
import Swiper from './Swiper'
const Services = () => {
  return (
    <div className="services-container">
      <p className="sc-subtitle">
        Services
      </p>
      <h1 className="sc-title">
        What We Do?
      </h1>
      <Swiper />
    </div>
  )
}

export default Services