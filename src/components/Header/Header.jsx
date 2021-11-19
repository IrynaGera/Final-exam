import React from 'react';
import Navigation from '../Nav/Nav';
import './header.scss';

const nav = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/services', name: 'Services' },
  { path: '/works', name: 'Works' },
  { path: '/team', name: 'Team' },
  { path: '/contact', name: 'Contact' },
];

const Header = () => {

  return (
    <header className="header">
        <div className="container">
          <div className="header__row">
            <a href="#" className="header__logo-holder">
              <i className="icon-Logo header__logo"></i>
            </a>
            <Navigation list={nav} />
          </div>
      </div>
    </header>
  );
};

export default Header;
