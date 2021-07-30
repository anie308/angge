import React from 'react'
// import Carousel from 'react-elastic-carousel'
import Slider from "react-slick";

 import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";

import { Item,
     SliderCon} from  './Slider.elements'

import roothub from '../../../assets/images/roothub full black.png'
import hostbeak from '../../../assets/images/hostbeak-logo.png'
import ngage from '../../../assets/images/reduced-ngage-logo-small.png'
import trax from '../../../assets/images/TRAX LOGO black.png'



const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    arrows:false,
    responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            centerMode: true,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            dots:true,
          }
        },
        
      ]
  };

function Slide() {
    return (
        <SliderCon>
            <Slider {...settings} >
                <Item><img src={roothub} alt="" /></Item>
                <Item><img src={ngage} alt="" /></Item>
                <Item><img src={hostbeak} alt="" /></Item>
                <Item><img src={trax} alt="" /></Item>
            </Slider>
        </SliderCon>
    )
}

export default Slide
