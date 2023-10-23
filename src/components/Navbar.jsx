import React, { useState } from 'react'
import "../assets/css/navbar.css"
import logo from "../assets/images/logo/icon white.png"
import logoDark from "../assets/images/logo/icon.png"
import { Link,  useNavigate } from 'react-router-dom'
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';



const Navbar = ({ scroll }) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }else{
      navigate("/",{state: {id:id}});
    }
  }
  return (
    <>
      <div className={scroll ? "navbar-container scroll" : "navbar-container"}>
        <div className="nc-left">
          {scroll ? <img src={logoDark} onClick={() => navigate("/")} alt="" className="nc-left-logo" /> : <img onClick={() => scrollToSection("hero")} src={logo} alt="" className="nc-left-logo" />}
          <ul className="nc-left-nav-list">
            <li className="nc-ln-li"><a href="#about" style={{ textDecoration: "none", color: "white" }} onClick={() => scrollToSection("about")}>About</a></li>
            <li className="nc-ln-li"><a href="#services" style={{ textDecoration: "none", color: "white" }} onClick={() => scrollToSection("services")}>Services</a></li>
            <li className="nc-ln-li"><a href="#countries" style={{ textDecoration: "none", color: "white" }} onClick={() => scrollToSection("countries")}>Locals</a></li>
            <li className="nc-ln-li"><a href="#clients" style={{ textDecoration: "none", color: "white" }} onClick={() => scrollToSection("clients")}>Trusted</a></li>
            <li className="nc-ln-li"><a href="#partners" style={{ textDecoration: "none", color: "white" }} onClick={() => scrollToSection("partners")}>Partners</a></li>
            <li className="nc-ln-li"><a href="#contact" style={{ textDecoration: "none", color: "white" }} onClick={() => scrollToSection("contact")}>Contact</a></li>
          </ul>
        </div>
        <div className="nc-right">
          <Link to="/" onClick={() => scrollToSection("footer")} className="nc-right-button"><span>Start Now</span></Link>

          <WidgetsRoundedIcon className="nc-right-burger" onClick={() => setOpen(true)} />
        </div>

      </div>
      <div className={open ? "navbar-container-mobile active" : "navbar-container-mobile"}>
        <CloseRoundedIcon onClick={() => setOpen(false)} className='nc-ma-close' />
        <ul className="nc-left-nav-list mobile">
          <li className="nc-ln-li"><a href="#about" style={{ textDecoration: "none", color: "white" }} onClick={() => scrollToSection("about")}>About</a></li>
          <li className="nc-ln-li"><a href="#services" style={{ textDecoration: "none", color: "white" }} onClick={() => scrollToSection("services")}>Services</a></li>
          <li className="nc-ln-li"><a href="#countries" style={{ textDecoration: "none", color: "white" }} onClick={() => scrollToSection("countries")}>Locals</a></li>
          <li className="nc-ln-li"><a href="#clients" style={{ textDecoration: "none", color: "white" }} onClick={() => scrollToSection("clients")}>Trusted</a></li>
          <li className="nc-ln-li"><a href="#partners" style={{ textDecoration: "none", color: "white" }} onClick={() => scrollToSection("partners")}>Partners</a></li>
          <li className="nc-ln-li"><a href="#contact" style={{ textDecoration: "none", color: "white" }} onClick={() => scrollToSection("contact")}>Contact</a></li>
        </ul>
        <Link to="" onClick={() => scrollToSection("footer")} className="nc-right-button mobile"><span>Start Now</span></Link>
      </div>
    </>
  )
}

export default Navbar