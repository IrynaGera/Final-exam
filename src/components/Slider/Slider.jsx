import Socials from '../Socials';
import React, { Component } from "react";
import Slider from "react-slick";
import './slider.scss';

function SampleNextArrow(props) {
  const { onClick } = props;

  return (
    <div className="slider__arrow">
      <i className="icon-right"  onClick={onClick} ></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;

  return (
    <div className="slider__arrow-prev">
      <i className="icon-left" onClick={onClick}></i>
    </div>
  );
}

export default class Sliderteam extends Component {

  render() {

    const { team } = this.props;        

    let settings = {    
      infinite: true,
      speed: 500,    
      slidesToShow: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots:true,
            autoplaySpeed: 4000,
            autoplay: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true,
            autoplaySpeed: 4000,
            autoplay: true,
          }
        }
      ]
    };

    return (   
      <Slider {...settings}>
        {team.map((item) => (
        <div className='slider'>
          <div className="slider__holder">
            <div className="slider__image">
              <img src={item.image} alt="slider__team" />
            </div>
            <div className="slider__column">
              <h2 className="slider__name">{item.name}</h2>
              <span className="slider__role">{item.role}</span>
            </div>
            <Socials className="slider__links" social={item.social}/> 
          </div>
        </div> 
        ))}
      </Slider>
    );
  }
}