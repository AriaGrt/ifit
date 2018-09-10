import React, {Component} from "react"
import './Prestations.css'

export default class Prestations extends Component {

  state = {
    prestationToggled: false,
    modalToggled: true
  };

  togglePrestations = () => {
    let prestationToggled = this.state.prestationToggled
    this.setState({
      prestationToggled : !prestationToggled
    })
  }

  render(){
    let {prestationToggled, modalToggled} = this.state
    return(

        <div className="container">
          <h2>Nos Prestations</h2>
          <div className="presta-container">
            <div className="presta-row">
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-1.jpeg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Zones Ciblées
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-2.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Ventre Plat
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-3.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Cours Collectifs
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="trx.png" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  TRX
                </div>
              </div>
            </div>
            <div className="presta-row">
              <div className="presta-item">
                <div className="presta-background">
                    <img src="presta-5.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Zumba
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-6.jpeg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Stretching
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-7.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Cross Training
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="postural.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Postural
                </div>
              </div>
            </div>
          </div>
          <div id="hidden-prestations" className={prestationToggled ? 'slide-down' : 'slide-up'}>
            <div className="presta-row">
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-9.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Fit Boxing
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-10.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Femme Enceinte
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-11.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Prise de Masse
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="nutrition.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Nutrition
                </div>
              </div>
            </div>
            <div className="presta-row">
              <div className="presta-item">
                <div className="presta-background">
                  <img src="bootcamp.png" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Boot Camp
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="rehabilitation.png" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Réathlétisation
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-15.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Préparation Mariage
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-16.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Perte de Poids
                </div>
              </div>
            </div>
            <div className="presta-row">
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-17.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Pilates
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-18.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Yoga
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-19.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Renforcement Musculaire
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="senior.png" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Senior
                </div>
              </div>
            </div>
            <div className="presta-row">
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-21.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Running
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-22.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Préparation Physique
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-23.jpg" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Prévention des blessures
                </div>
              </div>
              <div className="presta-item">
                <div className="presta-background">
                  <img src="presta-24.png" className="img-fluid"/>
                </div>
                <div className="presta-text">
                  Carte Cadeau
                </div>
              </div>
            </div>
          </div>
          <div id="button-container">
            <button >Séance d'</button>
            <span onClick={this.togglePrestations} className="btn btn-default more">
              <i className={prestationToggled ? 'fas fa-minus' : 'fas fa-plus'}></i>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
