import React from 'react'
import './Coaching.css'
import { Route, Link } from "react-router-dom";
import {CoachingDomicile} from './Coachings'

const Coaching = () => (
  <div>
    <h2 style={{marginTop: '30px'}}>Le Coaching</h2>
    <div id="coaching-images-wrapper">
      <div className="wrapper">
        <img className="coaching-image" src="coaching-1.jpg"/>
        <p>Coaching à domicile</p>
        <Link to="/coaching/domicile" style={{color: 'inherit'}}>
          <span>Découvrir <i className="fas fa-long-arrow-alt-right"></i></span>
        </Link>
      </div>
      <div className="wrapper">
        <img className="coaching-image" src="coaching-2.jpg"/>
        <p>Coaching en entreprise</p>
          <Link to="/coaching/entreprise" style={{color: 'inherit'}}>
            <span>Découvrir <i className="fas fa-long-arrow-alt-right"></i></span>
          </Link>
      </div>
      <div className="wrapper">
        <img className="coaching-image" src="coaching-3.jpg"/>
        <p>Coaching en extérieur</p>
          <Link to="/coaching/exterieur" style={{color: 'inherit'}}>
            <span>Découvrir <i className="fas fa-long-arrow-alt-right"></i></span>
          </Link>
      </div>
      <div className="wrapper">
        <img className="coaching-image" src="coaching-4.jpeg"/>
        <p>Coaching en club</p>
          <Link to="/coaching/club" style={{color: 'inherit'}}>
            <span>Découvrir <i className="fas fa-long-arrow-alt-right"></i></span>
          </Link>
      </div>
    </div>
  </div>
)

export default Coaching
