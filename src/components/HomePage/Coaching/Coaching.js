import React from 'react'
import './Coaching.css'

const Coaching = () => (
  <div>
    <h2 style={{marginTop: '30px'}}>Le Coaching</h2>
    <div id="coaching-images-wrapper">
      <div className="wrapper">
        <img className="coaching-image" src="reason-image-1.png"/>
        <span>Découvrir <i className="fas fa-long-arrow-alt-right"></i></span>
      </div>
      <div className="wrapper">
        <img className="coaching-image" src="reason-image-1.png"/>
        <span>Découvrir <i className="fas fa-long-arrow-alt-right"></i></span>
      </div>
      <div className="wrapper">
        <img className="coaching-image" src="reason-image-1.png"/>
        <span>Découvrir <i className="fas fa-long-arrow-alt-right"></i></span>
      </div>
      <div className="wrapper">
        <img className="coaching-image" src="reason-image-1.png"/>
        <span>Découvrir <i className="fas fa-long-arrow-alt-right"></i></span>
      </div>
    </div>
  </div>
)

export default Coaching
