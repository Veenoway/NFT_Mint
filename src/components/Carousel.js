





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

// // gallus.mp4
import { Component } from "react";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: 'none',
      autoplaySpeed: 1500,
      pauseOnHover: true,
      centerPadding:'100px',
      centerMode:true,

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
      <div className="contain">
       
        <Slider {...settings} >
          <div className="meka2">
          <img src={meka4} alt="meka" className="d-block meka" />
          </div>
          <div className="meka2">
          <img src={meka1} alt="meka" className="d-block meka" />
          </div>
          <div className="meka2">
          <img src={meka2} alt="meka" className="d-block meka" />
          </div>
          <div className="meka2">
          <img src={meka5} alt="meka" className="d-block meka" />
          </div>
          <div className="meka2">
          <img src={meka3} alt="meka" className="d-block meka" />
          </div>
          <div className="meka2">
          <img src={meka2} alt="meka" className="d-block meka" />
          </div>
        </Slider>
      </div>
    );
  }
}

// import { Component } from "react";
// import Slider from "react-slick";


//     return (
//       <div className="contain">
//         <h2>Auto Play</h2>
//         <Slider {...settings}>
//           <div className="slid">
//           <img src={meka4} alt="meka" className="d-block meka" />
//           </div>
//           <div className="slid">
//           <img src={meka1} alt="meka" className="d-block meka" />
//           </div>
//           <div className="slid">
//           <img src={meka2} alt="meka" className="d-block meka" />
//           </div>
//           <div className="slid">
//           <img src={meka3} alt="meka" className="d-block meka" />
//           </div>
//           <div className="slid">
//           <img src={meka5} alt="meka" className="d-block meka" />
//           </div>
//           <div className="slid">
//           <img src={meka4} alt="meka" className="d-block meka" />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }


// export default class CenterMode extends Component {
//   render() {
//     const settings = {
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       centerPadding: "60px",
//       slidesToShow: 3,
//       speed: 500
//     };
//     return (
//       <div className="contain">
//         <Slider {...settings}>
//           <div>
//           <img src={meka4} alt="meka" className="d-block meka" />
//           </div>
//           <div>
//           <img src={meka4} alt="meka" className="d-block meka" />
//           </div>
//           <div>
//           <img src={meka4} alt="meka" className="d-block meka" />
//           </div>
//           <div>
//           <img src={meka4} alt="meka" className="d-block meka" />
//           </div>
//           <div>
//           <img src={meka4} alt="meka" className="d-block meka" />
//           </div>
//           <div>
//           <img src={meka4} alt="meka" className="d-block meka" />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }