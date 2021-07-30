import React from 'react'
import Slider from "react-slick";
 import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";

import web1 from '../../assets/images/Group 94.png';
import web2 from '../../assets/images/Group 482.png';
import web3 from '../../assets/images/Group 483.png';
import web4 from '../../assets/images/Group 484.png';
import {
    Parent,    
    TextCon,
    Texcon,
    TextLg,
    TexLg,
    TextSm,
    TexSm,
    Item,
    SliderCon,
    ImgCon1,
    ImgCon2,
    ImgCon3,
    ImgCon4,
    Imag

} from './Portfolio.element'




const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    swipeToSlide: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerMode: true,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            centerMode: true,
            arrow:false,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            arrow:false,
          }
        },
        
      ]
  };

function Portfolio() {
    return (
        <Parent>
            <TextCon>
                <TextSm>Awesome Portfolio</TextSm>
                <TextLg>We Have A Great Portfolio To Check</TextLg>
            </TextCon>
            <SliderCon>
                <Slider {...settings}  >
                <Item >
                  <ImgCon1>
                  <Imag src={web1}/>
                  </ImgCon1>
                  <Texcon>
                      <TexLg>Web Design Project</TexLg>
                      <TexSm>UX/UI Design</TexSm>
                  </Texcon>
                </Item>
                <Item >
                  <ImgCon2>
                  <Imag src={web2}/>
                  </ImgCon2>
                  <Texcon>
                      <TexLg>Web Design Project</TexLg>
                      <TexSm>UX/UI Design</TexSm>
                  </Texcon>
                </Item>
                <Item >
                  <ImgCon3>
                  <Imag src={web3}/>
                  </ImgCon3>
                  <Texcon>
                      <TexLg>Web Design Project</TexLg>
                      <TexSm>UX/UI Design</TexSm>
                  </Texcon>
                </Item>
                <Item >
                  <ImgCon4>
                  <Imag src={web4}/>
                  </ImgCon4>
                  <Texcon>
                      <TexLg>Web Design Project</TexLg>
                      <TexSm>UX/UI Design</TexSm>
                  </Texcon>
                </Item>
                </Slider>
            </SliderCon>
        </Parent>
    )
}

export default Portfolio


