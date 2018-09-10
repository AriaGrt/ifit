import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage/HomePage'
import Blog from './Blog/Blog'
import { CoachingDomicile, CoachingEntreprise, CoachingExterieur, CoachingClub } from './HomePage/Coaching/Coachings'
import Tarifs from "./Tarifs/Tarifs"
import GCV from "./GCV/gcv"
import mentions from "./mentions/mentions"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/coaching/domicile" component={CoachingDomicile} />
          <Route exact path="/coaching/entreprise" component={CoachingEntreprise} />
          <Route exact path="/coaching/exterieur" component={CoachingExterieur} />
          <Route exact path="/coaching/club" component={CoachingClub} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/tarifs" component={Tarifs} />
          <Route exact path="/mentions" component={mentions} />
          <Route exact path="/gcv" component={GCV} />
        </div>
      </Router>
    );
  }
}

export default App;
