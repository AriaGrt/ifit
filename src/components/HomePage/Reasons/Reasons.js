import React, { Component } from 'react'
import './Reasons.css'

import Divider from '../Divider/Divider'
export default class Reasons extends Component {

  state = {
    width: window.innerWidth
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.setState({ width: window.innerWidth }))
  }

  render() {
    let { width } = this.state
    return (
      <div>
        {
          width >= 768 ? (
            <section className="container reasons-wrapper-big">
              <h2>5 bonnes raisons de soliciter un coach sportif</h2>
              <div className="row">
                <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-1.png" /></div>
                <div className="col-md-9 my-auto">
                  <h5>Des Professionnels à votre service !</h5>
                  <p>Nos coachs sont des professionnels qui vous guiderons pas à pas au travers de vos séances afin de vous faire atteindre vos objectifs dans les meilleures conditions en privilégiant votre sécurité. Ils mettent à votre disposition toutes leurs connaissance et méthode d'entrainement pour rendre vos séances plus efficaces et motivante !</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9 my-auto">
                  <h5>Votre Santé, notre Priorité !</h5>
                  <p>Le sport, c'est la santé ! il est prouvé a bien des égards que le sport améliore la santé sous bien des aspects, et permet de prévenir des maladie cardio-vasculaire, obésité et bien d'autre encore.</p>
                </div>
                <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-2.jpg" /></div>
              </div>
              <div className="row">
                <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-3.png" /></div>
                <div className="col-md-9 my-auto">
                  <h5>Bien dans son corps!</h5>
                  <p>Favoriser la perte de poids, perdre des petits kilos superflus, améliorer sa condition physique, se sculpter. L'exercices physique est l'une des clés de la réussite, la seconde est une bonne alimentation. Nos coachs vous encadrent et vous conseils pour faire de votre corps le bijou que vous souhaitez ! </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9 my-auto">
                  <h5>A Chacun son niveau !</h5>
                  <p>L’adaptation : parce que chacun à un niveau sportif différents, nous adaptons à chaque objectifs, morphologie, niveau, ... les différentes séances pour en faire un moment de difficulté et de dépassement de soi et non pas un moment contraignant.  Chaque entrainement est conçu en fonction de vos capacités propres. </p>
                </div>
                <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="presta-19.jpg" /></div>
              </div><div className="row">
                <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="trx.png" /></div>
                <div className="col-md-9 my-auto">
                  <h5>Motivation et Réussite !</h5>
                  <p>Garder la motivation et une ligne de conduite ! Parce que la motivation n'est pas toujours facile à trouver faire appel à un coach vous engage dans vos objectifs et il vous motive et vous pousse à donner le meilleur de vous-même en toute circonstance afin de tirer le meilleur de vous-même. Rigueur et excellence sont nos maîtres mots !</p>
                </div>
              </div>
            </section>
          ) : (
              <section className="container-fluid reasons-wrapper-big">
                <Divider />
                <div className="reason-wrapper">
                  <div className="row">
                    <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-1.png" /></div>
                  </div>
                  <div className="row">
                    <div className="col-md-9 my-auto">
                      <h5>Des Professionnels à votre service !</h5>
                      <p>Nos coachs sont des professionnels qui vous guiderons pas à pas au travers de vos séances afin de vous faire atteindre vos objectifs dans les meilleurs conditions en privilégiant votre sécurité. Ils mettent a votre disposition toutes leurs connaissance et méthode d'entrainement pour rendre vos séances plus efficaces et motivante!</p>
                    </div>
                  </div>
                </div>
                <Divider />
                <div className="reason-wrapper">
                  <div className="row">
                    <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-2.jpg" /></div>
                  </div>
                  <div className="row">
                    <div className="col-md-9 my-auto">
                      <h5>Votre Santé, notre Priorité !</h5>
                      <p>Le sport, c'est la santé! il est prouvé a bien des égard que le sport améliore la santé sous bien des aspect, et permet de prévenir des maladie cardio-vasculaire, obésité et bien d'autre encore.</p>
                    </div>
                  </div>
                </div>
                <Divider />
                <div className="reason-wrapper">
                  <div className="row">
                    <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-2.jpg" /></div>
                  </div>
                  <div className="row">
                    <div className="col-md-9 my-auto">
                      <h5>Bien dans son corps!</h5>
                      <p>Favoriser la perte de poids, perdre des petits kilos superflus, améliorer sa conditions physique, se sculpter. L'exercices physique est l'une des clé de la réussite, la seconde est une bonne alimentation. Nos coachs vous encadre et vous conseils pour faire de votre corps le bijoux que vous souhaitez ! </p>
                    </div>
                  </div>
                </div>
                <Divider />
                <div className="reason-wrapper">
                  <div className="row">
                    <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-2.jpg" /></div>
                  </div>
                  <div className="row">
                    <div className="col-md-9 my-auto">
                      <h5>A Chacun son niveau !</h5>
                      <p>L'adaptation: parce que chacun à un niveau sportif différents, nous adaptons a chaque objectifs, morphologie, niveau, ... les différentes séances pour en faire un moment de difficulté et de dépassement de soi et non pas un moment contraignant.  Chaque entrainement est conçu en fonction de vos capacités propres. </p>
                    </div>
                  </div>
                </div>
                <Divider />
                <div className="reason-wrapper">
                  <div className="row">
                    <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-2.jpg" /></div>
                  </div>
                  <div className="row">
                    <div className="col-md-9 my-auto">
                      <h5>Motivation et Réussite !</h5>
                      <p>Garder la motivation et une ligne de conduite! Parce que la motivation n'est pas toujours facile a trouver faire appel a un coach vous engage dans vos objectifs et il vous motive et vous pousse a donner le meilleur de vous même en toute circonstance afin de tirer le meilleur de vous même. Rigueur et excellence sont nos maître mots!</p>
                    </div>
                  </div>
                </div>
              </section>
            )
        }
      </div>
    )
  }
}
