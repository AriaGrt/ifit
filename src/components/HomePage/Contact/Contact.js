import React, {Component} from 'react'
import './Contact.css'
import axios from 'axios'

export default class Contact extends Component {

  state = {
    name : "",
    email: "",
    tel: "",
    poste: "",
    subject: "",
    message: ""
  }

  handleChange1 = (event) => {
    this.setState({name: event.target.value});
  }

  handleChange2 = (event) => {
    this.setState({email: event.target.value});
  }

  handleChange3 = (event) => {
    this.setState({tel: event.target.value});
  }
  handleChange4 = (event) => {
    this.setState({poste: event.target.value});
  }
  handleChange5 = (event) => {
    this.setState({subject: event.target.value});
  }
  handleChange6 = (event) => {
    this.setState({message: event.target.value});
  }

  sendData = () => {
    let { name, email, tel, poste, subject, message} = this.state
    axios.post('http://localhost:5000/', {
      name : name,
      email: email,
      tel: tel,
      poste: poste,
      subject: subject,
      message: message
    })
    .then(function (response) {
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    return(
      <div id="wrapper">
        <h2 style={{marginTop: '30px', color: 'white'}}>Nous Contacter</h2>
        <div id="form-wrapper">
          <div class="form-section">
            <div class="smaller-form-section" id="text-section">
              <div><i class="far fa-envelope"></i><span>contact@ifit-trainer.fr</span></div>
              <div><i class="fas fa-phone"></i><span><a href="tel:0769513634">07 69 51 36 34</a></span></div>
            </div>
          </div>
          <div class="form-section">
            <div class="smaller-form-section">
              <div id="inputs-wrapper">
                <input type="text"  placeholder="Nom/Prénom" required="true" value={this.state.name} onChange={this.handleChange1} />
                <input type="email" placeholder="Email" required="true" value={this.state.email} onChange={this.handleChange2}/>
                <input type="text" placeholder="Téléphone" required="true" value={this.state.tel} onChange={this.handleChange3}/>
                <input type="text" placeholder="Adresse Postale" required="true" value={this.state.poste} onChange={this.handleChange4}/>
                <input type="text" placeholder="Sujet" required="true" value={this.state.subject} onChange={this.handleChange5}/>
                <textarea type="textarea" placeholder="Message..." required="true" value={this.state.message} onChange={this.handleChange6}/>
                <button id="email-send" onClick={this.sendData}>Envoyer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
