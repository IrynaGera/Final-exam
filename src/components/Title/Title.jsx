import React from 'react';
import './title.scss';

const Title = (props) => {
  return (
     <div className={`title ${props.className}`}>
        <div className="title__holder">
          <img src={props.logo} alt="image" className="title__logo" />
        </div>
        <h1 className="title__name" style={{color: props.color}}>{props.name}</h1>
    </div>
  );
};

export default Title;
