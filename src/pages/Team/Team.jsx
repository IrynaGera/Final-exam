import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import team1 from '../../images/team1.png';
import team2 from '../../images/team2.png';
import team3 from '../../images/team3.png';
import Sliderteam from '../../components/Slider';
import './team.scss';
import logo from '../../images/Icon-Team.svg'
import Title from '../../components/Title';
import '../../styles/main.scss'

const team = [
  {image:`${team1}`, name:"Miguel Obrien", role:"CEO & Founder", social:[
  {href:"https://linkedin.com/", className:"icon-linked-in"},
  {href:"https://myaccount.google.com/", className:"icon-google"},
  {href:"https://www.facebook.com/", className:"icon-facebook"},
  {href:"https://twitter.com/", className:"icon-twitter"}]},

  {image:`${team2}`, name:"Jackie Carroll", role:"Art Director", social:[  
  {href:"https://www.behance.net/", className:"icon-behance"},
  {href:"https://linkedin.com/", className:"icon-linked-in"},
  {href:"https://myaccount.google.com/", className:"icon-google"},
  {href:"https://www.facebook.com/", className:"icon-facebook"},
  {href:"https://twitter.com/", className:"icon-twitter"},] },

  {image:`${team3}`, name:"Ida Morrison", role:"Designer", social: [
  {href:"https://www.behance.net/", className:"icon-behance"},
  {href:"https://linkedin.com/", className:"icon-linked-in"},
  {href:"https://myaccount.google.com/", className:"icon-google"},
  {href:"https://www.facebook.com/", className:"icon-facebook"},
  {href:"https://twitter.com/", className:"icon-twitter"},]},

  {image:`${team1}`, name:"Miguel Obrien", role:"CEO & Founder", social:[
  {href:"https://linkedin.com/", className:"icon-linked-in"},
  {href:"https://myaccount.google.com/", className:"icon-google"},
  {href:"https://www.facebook.com/", className:"icon-facebook"},
  {href:"https://twitter.com/", className:"icon-twitter"}]},

  {image:`${team2}`, name:"Jackie Carroll", role:"Art Director", social:[  
  {href:"https://www.behance.net/", className:"icon-behance"},
  {href:"https://linkedin.com/", className:"icon-linked-in"},
  {href:"https://myaccount.google.com/", className:"icon-google"},
  {href:"https://www.facebook.com/", className:"icon-facebook"},
  {href:"https://twitter.com/", className:"icon-twitter"},] },

  {image:`${team3}`, name:"Ida Morrison", role:"Designer", social: [
  {href:"https://www.behance.net/", className:"icon-behance"},
  {href:"https://linkedin.com/", className:"icon-linked-in"},
  {href:"https://myaccount.google.com/", className:"icon-google"},
  {href:"https://www.facebook.com/", className:"icon-facebook"},
  {href:"https://twitter.com/", className:"icon-twitter"},]},
]

const Team = () => {
  return (
    <MainLayout>
        <section className='team'>
            <div className="container">
               <Title name="meet our team" logo={logo} className="team__title" color="#7d7a7c" />
                <Sliderteam team={team} />
            </div>
        </section>     
    </MainLayout>  
  );
};

export default Team;