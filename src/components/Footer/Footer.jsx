import React from 'react';
import './footer.scss';
import Socials from '../Socials';

const social = [
  {href:"https://www.behance.net/", className:"icon-behance",},
  {href:"https://linkedin.com/", className:"icon-linked-in"},
  {href:"https://myaccount.google.com/", className:"icon-google"},
  {href:"https://www.facebook.com/", className:"icon-facebook"},
  {href:"https://twitter.com/", className:"icon-twitter"},
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__copyrights">
            <p className="footer__text">&#169;2014 tulusdriyo. All Rights Reserved.</p>
          </div>
          <Socials social={social} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
