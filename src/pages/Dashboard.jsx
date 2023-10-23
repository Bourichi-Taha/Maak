import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <Home />
        <About />
        <Services/>
    </div>
  )
}

export default Dashboard