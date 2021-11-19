import React from 'react';
import './socials.scss';

const Socials = ( {social = []}) => {

  return (
    <ul className='social'>
    {social.map((item) => (
      <a href={item.href} >
        <li key={item} className="social__item">
          <i className={item.className}><i className="path1"></i></i>
        </li>
      </a>
    ))}
    </ul>
  );
};

export default Socials;