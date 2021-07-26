import React from 'react'
import Carousel from 'react-elastic-carousel'
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


const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 1},   
    {width: 768, itemsToShow: 1},
    {width: 1200, itemsToShow: 1}
]


function Reviews() {
    return (
        <Con>
            <TextCon>
                <TextLg>Customer Reviews</TextLg>
            </TextCon>
            <CaroCon>
                <Carousel breakPoints={breakPoints}
                enableAutoPlay={true}
                pagination={false}>
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
                </Carousel>
            </CaroCon>
        </Con>
    )
}

export default Reviews
