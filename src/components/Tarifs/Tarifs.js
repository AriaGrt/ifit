import React, {Component} from "react"
import './Tarifs.css'
import { Link } from "react-router-dom";

export default class Tarifs extends Component {

  state = {
    training: 'club',
    persons: "1",
    seances: "1",
    montantTotal: "",
    montantPseance: "",
    impots: "",
    priceChanged: false
  }

  handleOptionChange1 = (e) => {
    let value = e.target.value
    this.setState({
      training: value,
      priceChanged: false
    })
  }

  handleOptionChange2 = (e) => {
    let value = e.target.value
    this.setState({
      persons: value,
      priceChanged: false
    })
  }

  handleOptionChange3 = (e) => {
    let value = e.target.value
    this.setState({
      seances: value,
      priceChanged: false
    })
  }

  changePrices = () => {
    let  { training, persons, seances, montantPseance, impots, montantTotal } = this.state;
    console.log('here')
    console.log('training')
    if(training === 'domicile'){
      if(seances === '1'){
        switch (persons) {
          case '1':
            this.setState({
              montantPseance: '70',
              montantTotal: '70',
              impots: '35',
              priceChanged: true
            })
            break;
          case '2':
            this.setState({
              montantPseance: '75',
              montantTotal: '75',
              impots: '37,50',
              priceChanged: true
            })
            break;
          case '3':
            this.setState({
              montantPseance: '80',
              montantTotal: '80',
              impots: '40',
              priceChanged: true
            })
            break;
          case '4':
            this.setState({
              montantPseance: '85',
              montantTotal: '85',
              impots: '42,50',
              priceChanged: true
            })
            break;
          case '5':
            this.setState({
              montantPseance: '90',
              montantTotal: '90',
              impots: '45',
              priceChanged: true
            })
            break;
          case '6':
            this.setState({
              montantPseance: '95',
              montantTotal: '95',
              impots: '47,50',
              priceChanged: true
            })
            break;
          case '7':
            this.setState({
              montantPseance: '100',
              montantTotal: '100',
              impots: '50',
              priceChanged: true
            })
            break;
          case '8':
            this.setState({
              montantPseance: '105',
              montantTotal: '105',
              impots: '52,50',
              priceChanged: true
            })
            break;
          case '9':
            this.setState({
              montantPseance: '105',
              montantTotal: '105',
              impots: '52,50',
              priceChanged: true
            })
            break;
          case '10':
            this.setState({
              montantPseance: '115',
              montantTotal: '115',
              impots: '57,50',
              priceChanged: true
            })
            break;
          default:
            this.setState({
              montantTotal: 0,
              montantPseance: 0,
              impots: 0,
              priceChanged: true
            })
        }
      }
      if(seances === '5'){
        switch (persons) {
          case '1':
            this.setState({
              montantPseance: '68',
              montantTotal: '340',
              impots: '170',
              priceChanged: true
            })
            break;
          case '2':
            this.setState({
              montantPseance: '73',
              montantTotal: '365',
              impots: '182,50',
              priceChanged: true
            })
            break;
          case '3':
            this.setState({
              montantPseance: '78',
              montantTotal: '390',
              impots: '195',
              priceChanged: true
            })
            break;
          case '4':
            this.setState({
              montantPseance: '83',
              montantTotal: '415',
              impots: '207,50',
              priceChanged: true
            })
            break;
          case '5':
            this.setState({
              montantPseance: '88',
              montantTotal: '440',
              impots: '220',
              priceChanged: true
            })
            break;
          case '6':
            this.setState({
              montantPseance: '93',
              montantTotal: '465',
              impots: '232,50',
              priceChanged: true
            })
            break;
          case '7':
            this.setState({
              montantPseance: '98',
              montantTotal: '490',
              impots: '245',
              priceChanged: true
            })
            break;
          case '8':
            this.setState({
              montantPseance: '103',
              montantTotal: '515',
              impots: '257,50',
              priceChanged: true
            })
            break;
          case '9':
            this.setState({
              montantPseance: '108',
              montantTotal: '540',
              impots: '270',
              priceChanged: true
            })
            break;
          case '10':
            this.setState({
              montantPseance: '113',
              montantTotal: '565',
              impots: '282',
              priceChanged: true
            })
            break;
          default:
            this.setState({
              montantTotal: 0,
              montantPseance: 0,
              impots: 0,
              priceChanged: true
            })
        }
      }
      if(seances === '10'){
        switch (persons) {
          case '1':
            this.setState({
              montantPseance: '65',
              montantTotal: '650',
              impots: '325',
              priceChanged: true
            })
            break;
          case '2':
            this.setState({
              montantPseance: '70',
              montantTotal: '700',
              impots: '350',
              priceChanged: true
            })
            break;
          case '3':
            this.setState({
              montantPseance: '75',
              montantTotal: '750',
              impots: '375',
              priceChanged: true
            })
            break;
          case '4':
            this.setState({
              montantPseance: '80',
              montantTotal: '800',
              impots: '400',
              priceChanged: true
            })
            break;
          case '5':
            this.setState({
              montantPseance: '85',
              montantTotal: '850',
              impots: '425',
              priceChanged: true
            })
            break;
          case '6':
            this.setState({
              montantPseance: '90',
              montantTotal: '900',
              impots: '450',
              priceChanged: true
            })
            break;
          case '7':
            this.setState({
              montantPseance: '95',
              montantTotal: '950',
              impots: '475',
              priceChanged: true
            })
            break;
          case '8':
            this.setState({
              montantPseance: '100',
              montantTotal: '1000',
              impots: '500',
              priceChanged: true
            })
            break;
          case '9':
            this.setState({
              montantPseance: '105',
              montantTotal: '1050',
              impots: '525',
              priceChanged: true
            })
            break;
          case '10':
            this.setState({
              montantPseance: '110',
              montantTotal: '1100',
              impots: '550',
              priceChanged: true
            })
            break;
          default:
            this.setState({
              montantTotal: 0,
              montantPseance: 0,
              impots: 0,
              priceChanged: true
            })
        }
      }
      if(seances === '20'){
        switch (persons) {
          case '1':
            this.setState({
              montantPseance: '60',
              montantTotal: '1200',
              impots: '600',
              priceChanged: true
            })
            break;
          case '2':
            this.setState({
              montantPseance: '65',
              montantTotal: '1300',
              impots: '650',
              priceChanged: true
            })
            break;
          case '3':
            this.setState({
              montantPseance: '70',
              montantTotal: '1400',
              impots: '700',
              priceChanged: true
            })
            break;
          case '4':
            this.setState({
              montantPseance: '75',
              montantTotal: '1500',
              impots: '750',
              priceChanged: true
            })
            break;
          case '5':
            this.setState({
              montantPseance: '80',
              montantTotal: '1600',
              impots: '800',
              priceChanged: true
            })
            break;
          case '6':
            this.setState({
              montantPseance: '85',
              montantTotal: '1700',
              impots: '850',
              priceChanged: true
            })
            break;
          case '7':
            this.setState({
              montantPseance: '90',
              montantTotal: '1800',
              impots: '900',
              priceChanged: true
            })
            break;
          case '8':
            this.setState({
              montantPseance: '95',
              montantTotal: '1900',
              impots: '950',
              priceChanged: true
            })
            break;
          case '9':
            this.setState({
              montantPseance: '100',
              montantTotal: '2000',
              impots: '1000',
              priceChanged: true
            })
            break;
          case '10':
            this.setState({
              montantPseance: '105',
              montantTotal: '2100',
              impots: '1050',
              priceChanged: true
            })
            break;
          default:
            this.setState({
              montantTotal: 0,
              montantPseance: 0,
              impots: 0,
              priceChanged: true
            })
        }
      }
      if(seances === '40'){
        switch (persons) {
          case '1':
            this.setState({
              montantPseance: '55',
              montantTotal: '2200',
              impots: '1100',
              priceChanged: true
            })
            break;
          case '2':
            this.setState({
              montantPseance: '60',
              montantTotal: '2400',
              impots: '1200',
              priceChanged: true
            })
            break;
          case '3':
            this.setState({
              montantPseance: '65',
              montantTotal: '2600',
              impots: '1300',
              priceChanged: true
            })
            break;
          case '4':
            this.setState({
              montantPseance: '70',
              montantTotal: '2800',
              impots: '1400',
              priceChanged: true
            })
            break;
          case '5':
            this.setState({
              montantPseance: '75',
              montantTotal: '3000',
              impots: '1500',
              priceChanged: true
            })
            break;
          case '6':
            this.setState({
              montantPseance: '80',
              montantTotal: '3200',
              impots: '1600',
              priceChanged: true
            })
            break;
          case '7':
            this.setState({
              montantPseance: '85',
              montantTotal: '3400',
              impots: '1700',
              priceChanged: true
            })
            break;
          case '8':
            this.setState({
              montantPseance: '90',
              montantTotal: '3600',
              impots: '1800',
              priceChanged: true
            })
            break;
          case '9':
            this.setState({
              montantPseance: '95',
              montantTotal: '3800',
              impots: '1900',
              priceChanged: true
            })
            break;
          case '10':
            this.setState({
              montantPseance: '100',
              montantTotal: '4000',
              impots: '2000',
              priceChanged: true
            })
            break;
          default:
            this.setState({
              montantTotal: 0,
              montantPseance: 0,
              impots: 0,
              priceChanged: true
            })
        }
      }
      if(seances === '100'){
        switch (persons) {
          case '1':
            this.setState({
              montantPseance: '50',
              montantTotal: '2200',
              impots: '1100',
              priceChanged: true
            })
            break;
          case '2':
            this.setState({
              montantPseance: '55',
              montantTotal: '2400',
              impots: '1200',
              priceChanged: true
            })
            break;
          case '3':
            this.setState({
              montantPseance: '60',
              montantTotal: '2600',
              impots: '1300',
              priceChanged: true
            })
            break;
          case '4':
            this.setState({
              montantPseance: '65',
              montantTotal: '2800',
              impots: '1400',
              priceChanged: true
            })
            break;
          case '5':
            this.setState({
              montantPseance: '70',
              montantTotal: '3000',
              impots: '1500',
              priceChanged: true
            })
            break;
          case '6':
            this.setState({
              montantPseance: '75',
              montantTotal: '3200',
              impots: '1600',
              priceChanged: true
            })
            break;
          case '7':
            this.setState({
              montantPseance: '80',
              montantTotal: '3400',
              impots: '1700',
              priceChanged: true
            })
            break;
          case '8':
            this.setState({
              montantPseance: '85',
              montantTotal: '3600',
              impots: '1800',
              priceChanged: true
            })
            break;
          case '9':
            this.setState({
              montantPseance: '90',
              montantTotal: '3800',
              impots: '1900',
              priceChanged: true
            })
            break;
          case '10':
            this.setState({
              montantPseance: '95',
              montantTotal: '4000',
              impots: '2000',
              priceChanged: true
            })
            break;
          default:
            this.setState({
              montantTotal: 0,
              montantPseance: 0,
              impots: 0,
              priceChanged: true
            })
        }
      }
    }else if(training === 'club'){
      if(seances === '1'){
        switch (persons) {
          case '1':
            this.setState({
              montantPseance: '50',
              montantTotal: '50',
              impots: '0',
              priceChanged: true
            })
            break;
          case '2':
            this.setState({
              montantPseance: '55',
              montantTotal: '55',
              impots: '0',
              priceChanged: true
            })
            break;
          case '3':
            this.setState({
              montantPseance: '60',
              montantTotal: '60',
              impots: '0',
              priceChanged: true
            })
            break;
          case '4':
            this.setState({
              montantPseance: '65',
              montantTotal: '65',
              impots: '0',
              priceChanged: true
            })
            break;
          case '5':
            this.setState({
              montantPseance: '70',
              montantTotal: '70',
              impots: '0',
              priceChanged: true
            })
            break;
          case '6':
            this.setState({
              montantPseance: '75',
              montantTotal: '75',
              impots: '0',
              priceChanged: true
            })
            break;
          case '7':
            this.setState({
              montantPseance: '80',
              montantTotal: '80',
              impots: '0',
              priceChanged: true
            })
            break;
          case '8':
            this.setState({
              montantPseance: '85',
              montantTotal: '85',
              impots: '0',
              priceChanged: true
            })
            break;
          case '9':
            this.setState({
              montantPseance: '90',
              montantTotal: '90',
              impots: '0',
              priceChanged: true
            })
            break;
          case '10':
            this.setState({
              montantPseance: '95',
              montantTotal: '95',
              impots: '0',
              priceChanged: true
            })
            break;
          default:
            this.setState({
              montantTotal: 0,
              montantPseance: 0,
              impots: 0,
              priceChanged: true
            })
        }
      }
      if(seances === '5'){
        switch (persons) {
          case '1':
            this.setState({
              montantPseance: '48',
              montantTotal: '240',
              impots: '0',
              priceChanged: true
            })
            break;
          case '2':
            this.setState({
              montantPseance: '53',
              montantTotal: '265',
              impots: '0',
              priceChanged: true
            })
            break;
          case '3':
            this.setState({
              montantPseance: '58',
              montantTotal: '290',
              impots: '0',
              priceChanged: true
            })
            break;
          case '4':
            this.setState({
              montantPseance: '63',
              montantTotal: '315',
              impots: '0',
              priceChanged: true
            })
            break;
          case '5':
            this.setState({
              montantPseance: '68',
              montantTotal: '340',
              impots: '0',
              priceChanged: true
            })
            break;
          case '6':
            this.setState({
              montantPseance: '73',
              montantTotal: '365',
              impots: '0',
              priceChanged: true
            })
            break;
          case '7':
            this.setState({
              montantPseance: '78',
              montantTotal: '390',
              impots: '0',
              priceChanged: true
            })
            break;
          case '8':
            this.setState({
              montantPseance: '83',
              montantTotal: '415',
              impots: '0',
              priceChanged: true
            })
            break;
          case '9':
            this.setState({
              montantPseance: '88',
              montantTotal: '440',
              impots: '0',
              priceChanged: true
            })
            break;
          case '10':
            this.setState({
              montantPseance: '93',
              montantTotal: '465',
              impots: '0',
              priceChanged: true
            })
            break;
          default:
            this.setState({
              montantTotal: 0,
              montantPseance: 0,
              impots: 0,
              priceChanged: true
            })
        }
      }
      if(seances === '10'){
        switch (persons) {
          case '1':
            this.setState({
              montantPseance: '45',
              montantTotal: '450',
              impots: '0',
              priceChanged: true
            })
            break;
          case '2':
            this.setState({
              montantPseance: '50',
              montantTotal: '500',
              impots: '0',
              priceChanged: true
            })
            break;
          case '3':
            this.setState({
              montantPseance: '55',
              montantTotal: '550',
              impots: '0',
              priceChanged: true
            })
            break;
          case '4':
            this.setState({
              montantPseance: '60',
              montantTotal: '600',
              impots: '0',
              priceChanged: true
            })
            break;
          case '5':
            this.setState({
              montantPseance: '65',
              montantTotal: '650',
              impots: '0',
              priceChanged: true
            })
            break;
          case '6':
            this.setState({
              montantPseance: '70',
              montantTotal: '700',
              impots: '0',
              priceChanged: true
            })
            break;
          case '7':
            this.setState({
              montantPseance: '75',
              montantTotal: '750',
              impots: '0',
              priceChanged: true
            })
            break;
          case '8':
            this.setState({
              montantPseance: '80',
              montantTotal: '800',
              impots: '0',
              priceChanged: true
            })
            break;
          case '9':
            this.setState({
              montantPseance: '85',
              montantTotal: '850',
              impots: '0',
              priceChanged: true
            })
            break;
          case '10':
            this.setState({
              montantPseance: '90',
              montantTotal: '900',
              impots: '0',
              priceChanged: true
            })
            break;
          default:
            this.setState({
              montantTotal: 0,
              montantPseance: 0,
              impots: 0,
              priceChanged: true
            })
        }
      }
      if(seances === '20'){
        switch (persons) {
          case '1':
            this.setState({
              montantPseance: '42,50',
              montantTotal: '850',
              impots: '0',
              priceChanged: true
            })
            break;
          case '2':
            this.setState({
              montantPseance: '47,50',
              montantTotal: '950',
              impots: '0',
              priceChanged: true
            })
            break;
          case '3':
            this.setState({
              montantPseance: '52,50',
              montantTotal: '1050',
              impots: '0',
              priceChanged: true
            })
            break;
          case '4':
            this.setState({
              montantPseance: '57,50',
              montantTotal: '1150',
              impots: '0',
              priceChanged: true
            })
            break;
          case '5':
            this.setState({
              montantPseance: '62,50',
              montantTotal: '1250',
              impots: '0',
              priceChanged: true
            })
            break;
          case '6':
            this.setState({
              montantPseance: '67,50',
              montantTotal: '1350',
              impots: '0',
              priceChanged: true
            })
            break;
          case '7':
            this.setState({
              montantPseance: '72,50',
              montantTotal: '1450',
              impots: '0',
              priceChanged: true
            })
            break;
          case '8':
            this.setState({
              montantPseance: '77,50',
              montantTotal: '1550',
              impots: '0',
              priceChanged: true
            })
            break;
          case '9':
            this.setState({
              montantPseance: '82,50',
              montantTotal: '1650',
              impots: '0',
              priceChanged: true
            })
            break;
          case '10':
            this.setState({
              montantPseance: '87,50',
              montantTotal: '1750',
              impots: '0',
              priceChanged: true
            })
            break;
          default:
            this.setState({
              montantTotal: 0,
              montantPseance: 0,
              impots: 0,
              priceChanged: true
            })
        }
      }
      if(seances === '40'){
        switch (persons) {
          case '1':
            this.setState({
              montantPseance: '40',
              montantTotal: '1600',
              impots: '0',
              priceChanged: true
            })
            break;
          case '2':
            this.setState({
              montantPseance: '45',
              montantTotal: '1800',
              impots: '0',
              priceChanged: true
            })
            break;
          case '3':
            this.setState({
              montantPseance: '50',
              montantTotal: '2000',
              impots: '0',
              priceChanged: true
            })
            break;
          case '4':
            this.setState({
              montantPseance: '55',
              montantTotal: '2200',
              impots: '0',
              priceChanged: true
            })
            break;
          case '5':
            this.setState({
              montantPseance: '60',
              montantTotal: '2400',
              impots: '0',
              priceChanged: true
            })
            break;
          case '6':
            this.setState({
              montantPseance: '65,',
              montantTotal: '2600',
              impots: '0',
              priceChanged: true
            })
            break;
          case '7':
            this.setState({
              montantPseance: '70',
              montantTotal: '2800',
              impots: '0',
              priceChanged: true
            })
            break;
          case '8':
            this.setState({
              montantPseance: '75',
              montantTotal: '3000',
              impots: '0',
              priceChanged: true
            })
            break;
          case '9':
            this.setState({
              montantPseance: '80',
              montantTotal: '3200',
              impots: '0',
              priceChanged: true
            })
            break;
          case '10':
            this.setState({
              montantPseance: '85',
              montantTotal: '3400',
              impots: '0',
              priceChanged: true
            })
            break;
          default:
            this.setState({
              montantTotal: 0,
              montantPseance: 0,
              impots: 0,
              priceChanged: true
            })
        }
      }
      if(seances === '100'){
        switch (persons) {
          case '1':
            this.setState({
              montantPseance: '38,50',
              montantTotal: '3850',
              impots: '0',
              priceChanged: true
            })
            break;
          case '2':
            this.setState({
              montantPseance: '43,50',
              montantTotal: '4350',
              impots: '0',
              priceChanged: true
            })
            break;
          case '3':
            this.setState({
              montantPseance: '48,50',
              montantTotal: '4850',
              impots: '0',
              priceChanged: true
            })
            break;
          case '4':
            this.setState({
              montantPseance: '53,50',
              montantTotal: '5350',
              impots: '0',
              priceChanged: true
            })
            break;
          case '5':
            this.setState({
              montantPseance: '58,50',
              montantTotal: '5850',
              impots: '0',
              priceChanged: true
            })
            break;
          case '6':
            this.setState({
              montantPseance: '63,50,',
              montantTotal: '6350',
              impots: '0',
              priceChanged: true
            })
            break;
          case '7':
            this.setState({
              montantPseance: '68,50',
              montantTotal: '6850',
              impots: '0',
              priceChanged: true
            })
            break;
          case '8':
            this.setState({
              montantPseance: '73,50',
              montantTotal: '7350',
              impots: '0',
              priceChanged: true
            })
            break;
          case '9':
            this.setState({
              montantPseance: '78,50',
              montantTotal: '7850',
              impots: '0',
              priceChanged: true
            })
            break;
          case '10':
            this.setState({
              montantPseance: '83,50',
              montantTotal: '8350',
              impots: '0',
              priceChanged: true
            })
            break;
          default:
            this.setState({
              montantTotal: 0,
              montantPseance: 0,
              impots: 0,
              priceChanged: true
            })
        }
      }
  }else{
      this.setState({
        montantTotal: 0,
        montantPseance: 0,
        impots: 0,
        priceChanged: true
      })
    }
  }

  componentDidMount(){
    this.changePrices();
  }

  componentDidUpdate(){
    if(this.state.priceChanged === false){
      this.changePrices()
    }
    console.log(this.state)
  }

  render(){
    return(
      <div className="whole-container">
        <span id="back-arrow-wrapper">
          <Link to="/" style={{color: 'inherit'}}>
            <i class="fas fa-arrow-left"></i>
          </Link>
        </span>
        <h1>Tarifs</h1>
        <div className="form">
          <div className="inputs">
            <label>La séance se déroulera : </label>
            <select multiple="" onChange={ (e) => this.handleOptionChange1(e)}>
              <option value="club">En Club</option>
              <option value="domicile">A domicile</option>
            </select>
          </div>
          <div className="inputs">
            <label>Lors des séances, je/nous serais(ons):</label>
            <select multiple="" onChange={ (e) => this.handleOptionChange2(e)}>
              <option value="1">1 personne</option>
              <option value="2">2 personnes</option>
              <option value="3">3 personnes</option>
              <option value="4">4 personnes</option>
              <option value="5">5 personnes</option>
              <option value="6">6 personnes</option>
              <option value="7">7 personnes</option>
              <option value="8">8 personnes</option>
              <option value="9">9 personnes</option>
              <option value="10">10 personnes</option>
            </select>
          </div>
          <div className="inputs">
            <label>Je choisis mon pack de séances (Tarifs dégressifs)</label>
            <select multiple="" onChange={ (e) => this.handleOptionChange3(e)}>
              <option value="1">1 séance</option>
              <option value="5">5 séances</option>
              <option value="10">10 séances</option>
              <option value="20">20 séances</option>
              <option value="40">40 séances</option>
              <option value="100">100 séances</option>
            </select>
          </div>
        </div>

        <div className="tarif-final">
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1}}>
            <p style={{fontSize: '1.5em'}}>Montant à payer : {this.state.montantTotal}€</p>
            <p>Montant par séance : {this.state.montantPseance}€</p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1}}>
            <p style={{color: "red"}}>Montant à déduire de vos impôts : {this.state.impots}€</p>
          </div>
        </div>
      </div>

    )
  }
}
