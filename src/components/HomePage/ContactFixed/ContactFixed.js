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
      <a href="https://www.facebook.com/ifitrainer/"><i class="fab fa-facebook-f"></i></a>
    </div>
    <div className="contact-item" id="google-item">
      <a href="https://www.instagram.com/ifit_trainer/"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
)

export default ContactFixed
