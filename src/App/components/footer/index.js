import React from 'react';

import './style.scss'

const Footer = () => {
  return (
    <footer className="footer-wp">
      <div className="footer-wp__navegation">
        <div className="footer-wp__navegation--item">
          <img className="footer-wp__navegation--item--icon" />
          <img className="footer-wp__navegation--item--icon icon__x24" src="/icon/organizer-32px.svg"/>
          <p className="footer-wp__navegation--item--description">Materia</p>
        </div>
        <div className="footer-wp__navegation--item">
          <img className="footer-wp__navegation--item--icon icon__x24" src="/icon/schedule-32px.svg"/>
          <p className="footer-wp__navegation--item--description">Calendario</p>
        </div> 
      </div>
      <div className="footer-wp__navegation">
        <div className="footer-wp__navegation--item-plas">
          <img className="footer-wp__navegation--item--icon icon__x32" src="/icon/plus-32px.svg"/>
        </div>
      </div>
      <div className="footer-wp__navegation">
        <div className="footer-wp__navegation--item">
          <img className="footer-wp__navegation--item--icon" />
          <img className="footer-wp__navegation--item--icon icon__x24" src="/icon/message-32px.svg"/>
          <p className="footer-wp__navegation--item--description">Mensaje</p>
        </div>
        <div className="footer-wp__navegation--item">
          <img className="footer-wp__navegation--item--icon icon__x24" src="/icon/bell-32px.svg"/>
          <p className="footer-wp__navegation--item--description">Alerta</p>
        </div> 
      </div>
    
      
    </footer>
  )
};

export default Footer;
