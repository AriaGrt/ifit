import React, {Component} from "react"
import './Prestations.css'

export default class Prestations extends Component {

  state = {
    prestationToggled: false
  };

  togglePrestations = () => {
    let prestationToggled = this.state.prestationToggled
    this.setState({
      prestationToggled : !prestationToggled
    })
  }

  render(){
    let {prestationToggled} = this.state
    return(
      <div className="container">
        <h2>Nos Prestations</h2>
        <div className="presta-container">
          <div className="presta-row">
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
          </div>
          <div className="presta-row">
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
          </div>
        </div>
        <div id="hidden-prestations" className={prestationToggled ? 'slide-down' : 'slide-up'}>
          <div className="presta-row">
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
          </div>
          <div className="presta-row">
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
            <div className="presta-item">
              <div className="presta-background">
              </div>
              <div className="presta-text">
                Ventre Plat
              </div>
            </div>
          </div>
        </div>
        <div id="button-container">
          <button >Séance d'essai</button>
          <span onClick={this.togglePrestations} className="btn btn-default more">
            <i className={prestationToggled ? 'fas fa-minus' : 'fas fa-plus'}></i>
          </span>
        </div>
      </div>
    )
  }
}
