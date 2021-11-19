import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import graphic from '../../images/Icon-Graphic.svg';
import web from '../../images/Icon-Web.svg';
import service from '../../images/Icon-Services.png';
import seo from '../../images/Icon-SEO.svg';
import mobile from '../../images/Icon-Mobile.svg';
import './services.scss';

const Services = () => {
  return (
    <MainLayout>
        <section className='services'>
            <div className="container">
                <div className="services__grid">
                    <div className="services__grid-item">
                        <img src={graphic} alt="graphic" className="services__logo" />
                        <h2 className="services__subtitle">GRAPHIC DESIGN</h2>
                        <p className="services__text">Cras mattis consectetur purus sit amet fermentum.</p>
                    </div>
                    <div className="services__grid-item services__grid-item_color">
                        <img src={web} alt="web" className="services__logo" />
                        <h2 className="services__subtitle">WEB DEVELOPMENT</h2>
                        <p className="services__text">Cras mattis consectetur purus sit amet fermentum.</p>
                    </div>
                    <div className="services__grid-item services__grid-item_huge">
                        <div className="services__title-holder">
                            <div className="services__logo-holder">
                                <img src={service} alt="icon" className="services__logo-huge" />
                            </div>
                            <h1 className="services__title">our services</h1>
                            <blockquote className="services__blockquote">“Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.”
                            <b>- Borat -</b></blockquote>
                        </div>
                    </div>
                    <div className="services__grid-item services__grid-item_color">
                        <img src={seo} alt="seo" className="services__logo" />
                        <h2 className="services__subtitle">SEO & MARKETING</h2>
                        <p className="services__text">Cras mattis consectetur purus sit amet fermentum.</p>
                    </div>
                    <div className="services__grid-item">
                        <img src={mobile} alt="mobile" className="services__logo" />
                        <h2 className="services__subtitle">MOBILE DEVELOPMENT</h2>
                        <p className="services__text">Cras mattis consectetur purus sit amet fermentum.</p>
                    </div>
                </div>
            </div>
        </section>     
    </MainLayout>  
  );
};

export default Services;