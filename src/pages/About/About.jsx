import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import './about.scss';
import '../../styles/main.scss';
import logo from '../../images/Icon-AboutUs.png';
import Button from '../../components/Button';
import Title from '../../components/Title';

const About = () => {
  return (
    <MainLayout>
      <section className="about">
        <div className="container">
          <div className="about__row">
            <div className="about__title-column">
              <Title name="about us" logo={logo}/>
            </div> 
            <div className="about__text-column">
              <p className="about__text about__text_paragraph">Nullam quis risus eget urna <b>mollis ornare</b> vel eu leo. Donec id elit non mi porta gravida at eget metus. Donec
                  ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
              </p>                            
              <p className="about__text about__text_paragraph2"> <b>Morbi leo risus</b>, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                  dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis
                  interdum. Cras mattis consectetur purus sit amet <em>fermentum</em>. Sed posuere consectetur est at lobortis.
              </p>
              <Button name="Learn more"/>                     
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
