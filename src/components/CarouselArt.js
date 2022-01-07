





import { NavLink } from "react-router-dom"
import Navigation from "./Navigation"
import video from "../img/test.mp4"
import meka1 from "../img/meka.jpg";
import meka2 from "../img/meka2.jpg";
import meka3 from "../img/meka3.jpg";
import meka4 from "../img/meka4.jpg";
import meka5 from "../img/meka5.jpg";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import niho from "../img/niho.jfif"
import niho2 from "../img/niho2.jfif";
import niho3 from "../img/niho3.jfif";
import niho4 from "../img/niho4.jfif";
import niho5 from "../img/niho5.jfif";
import niho6 from "../img/niho6.jfif";
// // gallus.mp4
import { Component } from "react";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed:500,
      pauseOnHover: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024, // width to change options
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }
      ]
    };
    return (
      <div className="artCarousel">
       
        <Slider {...settings}>
          <div className="marge">
          <img src={niho} alt="meka" className="niho" />
          </div>
          <div className="marge">
          <img src={niho2} alt="meka" className="niho" />
          </div>
          <div className="marge">
          <img src={niho3} alt="meka" className="niho" />
          </div>
          <div className="marge">
          <img src={niho4} alt="meka" className="niho" />
          </div>
          <div className="marge">
          <img src={niho5} alt="meka" className="niho" />
          </div>
          <div className="marge">
          <img src={niho6} alt="meka" className="niho" />
          </div>
        </Slider>
      </div>
    );
  }
}
