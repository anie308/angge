import React from 'react'
import { TextCon,
    TextLg,
    TextSm,
    Parent,
    DivCon,
    Con1,
    Con2,
    Item1,
    Item2,
    Item3,
    Item4,
    Item5,
    IconWrap1,
    IconWrap2,
    IconWrap3,
    IconWrap4,
    IconWrap5,
    Para1,
    Para2,
    Cta


} from './Services.elements'

function Services() {
    return (
        <>
          <Parent>
          <TextCon>
                <TextLg>Our Services</TextLg>
                <TextSm>Executive Trade International is an University Application Centre, guiding Bangladeshi students to Australian, British, Canadian and Irish universities!</TextSm>
            </TextCon>  

            <DivCon>
                <Con1>
                    <Item1>
                        <IconWrap1>
                        </IconWrap1>
                        <Para1>Mobile Application</Para1>
                        <Para2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, molestias!.</Para2>
                        <Cta href='#'>Learn More</Cta>
                    </Item1>
                    <Item2>
                    <IconWrap2>
                        </IconWrap2>
                        <Para1>Web Application</Para1>
                        <Para2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, molestias!.</Para2>
                        <Cta  href='#'>Learn More</Cta>
                    </Item2>
                    <Item3>
                    <IconWrap3>
                        </IconWrap3>
                        <Para1>Web</Para1>
                        <Para2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, molestias!.</Para2>
                        <Cta  href='#'>Learn More</Cta>
                    </Item3>
                </Con1>
                <Con2   >
                <Item4>
                <IconWrap4>
                        </IconWrap4>
                        <Para1>Web Maintenance</Para1>
                        <Para2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, molestias!.</Para2>
                        <Cta  href='#'>Learn More</Cta>
                </Item4>
                <Item5>
                <IconWrap5>
                        </IconWrap5>
                        <Para1>Pre-Departure Briefing</Para1>
                        <Para2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, molestias!.</Para2>
                        <Cta  href='#'>Learn More</Cta>
                </Item5>
                </Con2>
            </DivCon>
              </Parent>  
        </>
    )
}

export default Services
