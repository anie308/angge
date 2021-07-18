import React from 'react'
import Carousel from 'react-elastic-carousel'
import { Item,
     SliderCon} from  './Slider.elements'
     import roothub from '../../../assets/images/roothub full black.png'
     import hostbeak from '../../../assets/images/hostbeak-logo.png'
     import ngage from '../../../assets/images/reduced-ngage-logo-small.png'
     import trax from '../../../assets/images/TRAX LOGO black.png'

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 4},   
    {width: 768, itemsToShow: 4},
    {width: 1200, itemsToShow: 4}
]

function Slider() {
    return (
        <SliderCon>
            <Carousel
             breakPoints={breakPoints}
           enableAutoPlay={true}
           pagination={false}
           >
                <Item><img src={roothub} alt="" /></Item>
                <Item><img src={ngage} alt="" /></Item>
                <Item><img src={hostbeak} alt="" /></Item>
                <Item><img src={trax} alt="" /></Item>
                <Item><img src={roothub} alt="" /></Item>
                <Item><img src={ngage} alt="" /></Item>
                <Item><img src={trax} alt="" /></Item>
            </Carousel>
        </SliderCon>
    )
}

export default Slider
