import React, { Component } from "react";
import './HomePage.css';
import Particles from 'react-particles-js';
import Parameters from '../../configs/particles-parameters'
import Reasons from './Reasons/Reasons'
import Divider from './Divider/Divider'
import Prestations from "./Prestations/Prestations"
import Coaching from "./Coaching/Coaching"
import Contact from './Contact/Contact'
import ContactFixed from './ContactFixed/ContactFixed'

export default class HomePage extends Component {

  state = {
    height: 0
  }

  updateDimensions = () => {
    let height = document.getElementsByClassName('box-item')[0].offsetWidth
    this.setState({ height })
  }

  componentDidMount() {
    let height = document.getElementsByClassName('box-item')[0].offsetWidth
    this.setState({ height })
    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    let { height } = this.state
    return (
      <div>
        <ContactFixed />
        <header>
          <Particles className="particles" params={Parameters} />
          <div id="header-content-wrapper">
            <div id="logo-container">
              <img src="ifitlogo.png" alt="ifit logo" />
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
          <p>
            Ifit Trainer est une agence spécialisée dans le coaching sportif. Du particulier à l'entreprise, du domicile au club de sport, nos coachs experts dans leur domaine vous accompagnent tout au long de vos séances. Tout nos coachs sont diplômés d’état et triés sur le volet parmi les meilleurs afin de vous offrir une qualité de service irréprochable. Votre bien-être est notre priorité, nous mettons à votre service toute notre expérience pour vous guider lors de vos moments sportifs ! </p>
          <button>Séance d'essai</button>
        </section>
        <Divider />
        <Reasons />
        <section className="container center-section" style={{ marginTop: '30px' }}>
          <Divider />
          <h2 style={{ marginTop: '30px' }}>Pourquoi IFit trainer?</h2>
          <div className="box-wrapper">
            <div className="box-item" id="box-item-1" style={{ height: height }}>
              <span id="box-item-text-1">
                <h5>Un service de qualité a moindre coût!</h5>
                <p>Notre société est agréer Service à la Personne pour vous permettre de bénéficier de nos services et les déduire de vos impôts!</p>
              </span>
              <img src="reason-image-1.png" className="img-fluid" />
            </div>
            <div className="box-item" id="box-item-2" style={{ height: height }}>
              <span id="box-item-text-1">
                <h5>Les meilleurs Coachs du Marché !</h5>
                <p>Nous sélectionnons nos coachs parmi les meilleurs afin de vous offrir un service qualité irréprochable. Chaque coachs a ses particularité et est formé pour vous apporter le meilleur au travers de leurs spécialités !</p>
              </span>
              <img src="reason-image-1.png" className="img-fluid" />
            </div>
            <div className="box-item" id="box-item-3" style={{ height: height }}>
              <span id="box-item-text-1">
                <h5>A chacun son cours !</h5>
                <p>Nous voulons vous satisfaire toujours plus! Pour se faire nous vous proposons une grande diversité de cours avec nos coachs. Du coaching personnalisé au cours en plein air en petit groupe ou même du renforcement et de la détente, chacun trouvera le cours de son choix. Bénéficier de plusieurs activité dans une même formule c'est possible! </p>
              </span>
              <img src="why-ifit-image-3.jpg" className="img-fluid" />
            </div>
          </div>
        </section>
        <section className="prestations">
          <Prestations />
        </section>
        <section className="coaching">
          <Coaching />
        </section>
        <section style={{ marginTop: '30px' }}>
          <Contact />
        </section>
      </div>
    )
  }
}
