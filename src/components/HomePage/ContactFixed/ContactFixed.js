import React from 'react';
import './ContactFixed.css';

const ContactFixed = () => (
  <div id="contact-fixed-wrapper">
    <div className="contact-item" id="phone-item">
      <i class="fas fa-phone"></i>
    </div>
    <div className="contact-item" id="mail-item">
      <i class="fas fa-envelope"></i>
    </div>
    <div className="contact-item" id="facebook-item">
      <i class="fab fa-facebook-f"></i>
    </div>
    <div className="contact-item" id="google-item">
      <i class="fab fa-instagram"></i>
    </div>
  </div>
)

export default ContactFixed
