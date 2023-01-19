import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div className="social-links">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} className="social-icon"/>
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} className="social-icon"/>
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className="social-icon"/>
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} className="social-icon"/>
          </a>
        </div>
        <div className="copyright">
          Copyright © {new Date().getFullYear()} AnswerMe All Rights Reserved
        </div>
        <div className="copyright2">Made By Aditya Sharma</div>
      </div>
    </footer>
  )
}

export default Footer
