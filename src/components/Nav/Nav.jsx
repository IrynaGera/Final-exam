import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import Burger from '../Burger';

const Nav = ({ list }) => {

  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen)
  }

  return (
    <nav className="nav">
      <ul className={`nav__list ${burgerOpen ? 'open' : 'close'}`}>
        {list.map((item) => (
          <li key={item.name} className="nav__list-item">
            <NavLink to={item.path} className="nav__link">
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="burger-holder" onClick={toggleBurger}>
        <Burger />
      </div>
    </nav>
  );
};

export default Nav;