import React from 'react'
import Slider from "react-slick";
 import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";
import {
    Con,
    TextCon,
    TextLg,
    CaroCon,
    Item,
    ImgCon,
    Imag,
    Review,
    RevText,
    RevName
} from './Reviews.element'
import customer from '../../assets/images/Ellipse 7.png'



const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    arrow:false,
    responsive: [
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerMode: true,
            arrow:false,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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

function Reviews() {
    return (
        <Con>
            <TextCon>
                <TextLg>Customer Reviews</TextLg>
            </TextCon>
            <CaroCon>
                <Slider {...settings}>
                    <Item>
                    <ImgCon>
                  <Imag src={customer}/>
                  </ImgCon>
                    <Review>
                        <RevText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto blanditiis magni maiores. Deleniti natus, eveniet nemo porro vitae tempore voluptate ducimus  </RevText>
                        <RevName>ADE YOMI</RevName>
                    </Review>
                    </Item>
                    <Item>
                    <ImgCon>
                  <Imag src={customer}/>
                  </ImgCon>
                    <Review>
                        <RevText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto blanditiis magni maiores. Deleniti natus, eveniet nemo porro vitae tempore voluptate ducimus </RevText>
                        <RevName>ADE YOMI</RevName>
                    </Review>
                    </Item>
                    <Item>
                    <ImgCon>
                  <Imag src={customer}/>
                  </ImgCon>
                    <Review>
                        <RevText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto blanditiis magni maiores. Deleniti natus, eveniet nemo porro vitae tempore voluptate ducimus</RevText>
                        <RevName>ADE YOMI</RevName>
                    </Review>
                    </Item>
                </Slider>
            </CaroCon>
        </Con>
    )
}

export default Reviews
