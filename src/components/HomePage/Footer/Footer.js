import React, {Component} from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default class Footer extends Component{
  render(){
    return(
      <div id="footer-wrapper">
        <div className="footer-item">
          <p>IFIT TRAINER SAS au capital de 100€ </p>
          <p>Immatriculé au RCS de Paris </p>
          <p>Siret 841 717 515 </p>
          <p>Situé : 74 rue curial 75019 Paris </p>
          <p>RC Pro : Hiscox </p>
          <p>Numéro de contrat : HSXPM310013474</p>
        </div>
        <div className="footer-item">
          <Link to="/gcv" style={{color: 'inherit'}}>
            GCV
          </Link>
        </div>
        <div className="footer-item">
          <Link to="/mentions" style={{color: 'inherit'}}>
            Mentions Légales
          </Link>
        </div>
      </div>
    )
  }
}
