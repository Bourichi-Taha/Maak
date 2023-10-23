import React from 'react'
import "../assets/css/about.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const About = () => {
  return (
    <div className="about-container">
      <div className="ac-subtitle">About Me</div>
      <div className="ac-content">
        <div className="ac-content-left">
          <h1 className="ac-cl-title">
            You can't use up creativity.<br />
            The more you use, the more <br />
            you have in your signifant mind.
          </h1>
          <p className="ac-cl-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nihil dolore recusandae rerum aperiam iusto corrupti, suscipit alias pariatur aliquid nostrum impedit perspiciatis ipsa laborum earum quos nisi repudiandae error facere velit architecto eum cupiditate doloremque perferendis? Fugit, debitis corporis!
          </p>
          <div className="ac-cl-stuff">
            <span>30</span>
            <div className="ac-cl-stuff-col">
              <p>Years Of</p>
              <p>Experience</p>
            </div>
          </div>
        </div>
        <div className="ac-content-right">
          <h1 className="ac-cr-title">
            Any Type Of Query<br />
            & Discussion.
          </h1>
          <p className="ac-cr-desc">
            Let's talk with me.
          </p>
          <div className="ac-cr-stuff">
            info@maak.com <span>&rarr;</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About