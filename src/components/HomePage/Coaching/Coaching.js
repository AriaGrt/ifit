import React from 'react'
import './Coaching.css'

const Coaching = () => (
  <div>
    <h2 style={{marginTop: '30px'}}>Le Coaching</h2>
    <div id="coaching-images-wrapper">
      <div className="wrapper">
        <img className="coaching-image" src="coaching-1.jpg"/>
        <p>Coaching à domicile</p>
        <span>Découvrir <i className="fas fa-long-arrow-alt-right"></i></span>
      </div>
      <div className="wrapper">
        <img className="coaching-image" src="coaching-2.jpg"/>
        <p>Coaching en entreprise</p>
        <span>Découvrir <i className="fas fa-long-arrow-alt-right"></i></span>
      </div>
      <div className="wrapper">
        <img className="coaching-image" src="coaching-3.jpg"/>
        <p>Coaching en extérieur</p>
        <span>Découvrir <i className="fas fa-long-arrow-alt-right"></i></span>
      </div>
      <div className="wrapper">
        <img className="coaching-image" src="coaching-4.jpeg"/>
        <p>Coaching en club</p>
        <span>Découvrir <i className="fas fa-long-arrow-alt-right"></i></span>
      </div>
    </div>
  </div>
)

export default Coaching
