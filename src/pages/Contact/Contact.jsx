import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import MapContainer from '../../components/Map/Map';
import logo from '../../images/Layer_7.png';
import Title from '../../components/Title';
import './contact.scss';
import IconAddress from '../../images/Icon-Address.png';
import IconPhone from '../../images/Layer_8.png';
import './contact.scss';
import Modal from '../../components/Modal/Modal';

const Contact = () => {
  return (
    <MainLayout>
        <section className='contacts'>
          <MapContainer />
          <Title name="get in touch" logo={logo} className="contacts__title"/>
          <div className="contacts__address-holder">
            <div className="contacts__wrapper">
              <div className="contacts__wrapper-logo">
                <img src={IconAddress} alt="address"/>
              </div>
              <address className="contacts__info">Ikan Piranha Atas 220C Malang - East Java Indonesia</address>
            </div>
          </div>
          <div className="contacts__address-holder">
            <div className="contacts__wrapper">
              <div className="contacts__wrapper-logo">
                <img src={IconPhone} alt="phone"/>
              </div>
              <a href="tel:0013568682454" className="contacts__info contacts__info_phone">+001 356-868-2454</a>
            </div>                
          </div>
          <Modal />
          <Link to="/" className="contacts__top-holder">
            <i className="icon-up"></i>
          </Link>       
        </section>     
    </MainLayout>  
  );
};

export default Contact;