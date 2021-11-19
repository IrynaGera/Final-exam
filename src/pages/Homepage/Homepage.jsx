import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import './homepage.scss';

const Homepage = () => {
  return (
    <MainLayout>
        <section className='home'>
            <div className="container">
                <h1 className="home__title">CreativE DIGITAL Project</h1>
                <h2 className="home__subtitle">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</h2>
            </div>
        </section>     
    </MainLayout>  
  );
};

export default Homepage;
