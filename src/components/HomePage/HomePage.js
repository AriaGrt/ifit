import React, { Component } from "react";
import './HomePage.css';
import Particles from 'react-particles-js';
import Parameters from '../../configs/particles-parameters'
import Reasons from './Reasons/Reasons'
import Divider from './Divider/Divider'
import Prestations from "./Prestations/Prestations"
import Coaching from "./Coaching/Coaching"

export default class HomePage extends Component {

  state = {
    height: 0
  }

  updateDimensions = () => {
    let height = document.getElementsByClassName('box-item')[0].offsetWidth
    this.setState({height})
  }

  componentDidMount(){
    let height = document.getElementsByClassName('box-item')[0].offsetWidth
    this.setState({height})
    window.addEventListener("resize", this.updateDimensions);
  }

  render(){
    let {height} = this.state
    return(
      <div>
        <header>
          <Particles className="particles" params={Parameters}/>
          <div id="header-content-wrapper">
            <div id="logo-container">
              <img src="ifitlogo.png" alt="ifit logo"/>
              <h1>Agence de Coaching du Particulier à l'Entreprise</h1>
            </div>
            <nav className="container-fluid" id="home-page-header">
              <ul className="row">
                <li className="col-sm">Accueil</li>
                <li className="col-sm">Coaching</li>
                <li className="col-sm">Prestations</li>
                <li className="col-sm">Coachs</li>
                <li className="col-sm">RDV</li>
                <li className="col-sm">Tarifs</li>
                <li className="col-sm">Blog</li>
              </ul>
            </nav>
          </div>
        </header>
        <section className="container center-section">
          <h2>Qui sommes nous?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et leo metus. Aliquam sed porta nunc, sed ullamcorper ex. Sed eget tempor odio. Proin rhoncus nunc varius risus venenatis, eu porttitor ipsum fringilla. Pellentesque in consectetur augue, sed euismod est. Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et leo metus. Aliquam sed porta nunc, sed ullamcorper ex. Sed eget tempor odio. Proin rhoncus nunc varius risus venenatis, eu porttitor ipsum fringilla. Pellentesque in consectetur augue, sed euismod est.</p>
          <button>Séance d'essai</button>
        </section>
        <Divider/>
        <Reasons/>
        <section className="container center-section" style={{marginTop: '30px'}}>
          <Divider/>
          <h2 style={{marginTop: '30px'}}>Pourquoi IFit trainer?</h2>
          <div className="box-wrapper">
            <div className="box-item" id="box-item-1" style={{height: height}}>
              <span id="box-item-text-1">
                <h5>Lorem Ipsum</h5>
                <p>Lorem Ipsum dolor sit amet, cosctur adispcapn let metus aliquam</p>
              </span>
              <img src="reason-image-1.png" className="img-fluid"/>
            </div>
            <div className="box-item" id="box-item-2" style={{height: height}}>
              <span id="box-item-text-1">
                <h5>Lorem Ipsum</h5>
                <p>Lorem Ipsum dolor sit amet, cosctur adispcapn let metus aliquam</p>
              </span>
              <img src="reason-image-1.png" className="img-fluid"/>
            </div>
            <div className="box-item" id="box-item-3" style={{height: height}}>
              <span id="box-item-text-1">
                <h5>Lorem Ipsum</h5>
                <p>Lorem Ipsum dolor sit amet, cosctur adispcapn let metus aliquam</p>
              </span>
              <img src="reason-image-1.png" className="img-fluid"/>
            </div>
          </div>
        </section>
        <section className="prestations">
          <Prestations/>
        </section>
        <section className="coaching">
          <Coaching/>
        </section>
      </div>
    )
  }
}
