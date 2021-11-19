import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import logo from '../../images/Icon-Works.png';
import comprofio from '../../images/Campofrío.png';
import SliderWorks from '../../components/SliderWorks';
import './works.scss';
import Button from '../../components/Button';
import Title from '../../components/Title';

const works = [
  {image:`${comprofio}`},
  {image:`${comprofio}`},
  {image:`${comprofio}`},
  {image:`${comprofio}`},
]

const Works = () => {
  return (
    <MainLayout>
        <section className='works'>
            <div className="container">
              <Title name="recent works" logo={logo} className="works__title"/>
              <SliderWorks works={works} />
              <Button name="View Gallery" color="white" className="works__btn"/>
            </div>
        </section>     
    </MainLayout>  
  );
};

export default Works;