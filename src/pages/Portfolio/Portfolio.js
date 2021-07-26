import React from 'react'
import Carousel from 'react-elastic-carousel'
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


const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},   
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
]

function Portfolio() {
    return (
        <Parent>
            <TextCon>
                <TextSm>Awesome Portfolio</TextSm>
                <TextLg>We Have A Great Portfolio To Check</TextLg>
            </TextCon>
            <SliderCon>
                <Carousel breakPoints={breakPoints}
                pagination={false}
                enableAutoPlay={true}
                
                >
                <Item>
                  <ImgCon1>
                  <Imag src={web1}/>
                  </ImgCon1>
                  <Texcon>
                      <TexLg>Web Design Project</TexLg>
                      <TexSm>UX/UI Design</TexSm>
                  </Texcon>
                </Item>
                <Item>
                  <ImgCon2>
                  <Imag src={web2}/>
                  </ImgCon2>
                  <Texcon>
                      <TexLg>Web Design Project</TexLg>
                      <TexSm>UX/UI Design</TexSm>
                  </Texcon>
                </Item>
                <Item>
                  <ImgCon3>
                  <Imag src={web3}/>
                  </ImgCon3>
                  <Texcon>
                      <TexLg>Web Design Project</TexLg>
                      <TexSm>UX/UI Design</TexSm>
                  </Texcon>
                </Item>
                <Item>
                  <ImgCon4>
                  <Imag src={web4}/>
                  </ImgCon4>
                  <Texcon>
                      <TexLg>Web Design Project</TexLg>
                      <TexSm>UX/UI Design</TexSm>
                  </Texcon>
                </Item>
                </Carousel>
            </SliderCon>
        </Parent>
    )
}

export default Portfolio


