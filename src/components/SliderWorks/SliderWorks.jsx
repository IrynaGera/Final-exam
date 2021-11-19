import React, { Component } from "react";
import Slider from "react-slick";
import './sliderworks.scss';

function SampleNextArrow(props) {

  const { onClick } = props;

  return (
    <div className="slider__next-work">
      <i className="icon-right"  onClick={onClick} ></i>
    </div>
  );
}   

function SamplePrevArrow(props) {

  const { onClick } = props;
  
  return (
    <div className="slider__prev-work">
      <i className="icon-left" onClick={onClick}></i>
    </div>   
  );
}

export default class SliderWorks extends Component {

  render() {

    const { works } = this.props;
      
    let settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplaySpeed: 4000,
      autoplay: true,
      dotsClass: 'custom-dots',
      appendDots: dots => (
        <ul style={{ display: "flex" }}> {dots} </ul>       
      ),   
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <Slider {...settings}>
        {works.map((item) => (
        <div className='slider'>
            <div className="slider__works-holder">
                <a href="#" className="works__link">
                  <img src={item.image} alt="campofrio" />
                </a>
            </div>
        </div> 
        ))}
      </Slider>
    );
  }
}