import React, {Component} from 'react'
import './Contact.css'

const Contact = () => (
  <div id="wrapper">
    <h2 style={{marginTop: '30px', color: 'white'}}>Nous Contacter</h2>
    <div id="form-wrapper">
      <div class="form-section">
        <div class="smaller-form-section" id="text-section">
          <div><i class="far fa-envelope"></i><span>email@exemple.com</span></div>
          <div><i class="fas fa-phone"></i><span><a href="tel:0678212358">06 78 21 23 58</a></span></div>
        </div>
      </div>
      <div class="form-section">
        <div class="smaller-form-section">
          <div id="inputs-wrapper">
            <input type="text" placeholder="Nom/Prénom" required="true" />
            <input type="email" placeholder="Email" required="true" />
            <input type="text" placeholder="Téléphone" required="true" />
            <input type="text" placeholder="Adresse Postale" required="true" />
            <input type="text" placeholder="Sujet" required="true" />
            <textarea type="textarea" placeholder="Message..." required="true" />
            <button id="email-send">Envoyer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
