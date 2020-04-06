import React from 'react';

import './style.scss'

const Header = () => {
  return (
    <header className="header__wp">
      <div className="header__wp__menu">
        <img  className="icon__x24 header__wp__menu--icon" src="./icon/menu-24px.svg" />
      </div>
      <div className="header__wp__title">
        <img  className="header__wp__title--logo" src="./img/logo@2x.png" />
      </div>  
      <div className="header__wp__acction">
        <img  className="icon__x24 header__wp__acction--icon" src="./icon/shopping_cart-24px.svg" />
        <img  className="icon__x24 header__wp__acction--icon" src="./icon/user-24px.svg" />
      </div>
    </header>
  )
};

export default Header;
