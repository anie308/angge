import { ListItemAvatar } from '@material-ui/core'
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
                    <Item1></Item1>
                    <Item2></Item2>
                    <Item3></Item3>
                </Con1>
                <Con2   >
                <Item4></Item4>
                <Item5></Item5>
                </Con2>
            </DivCon>
              </Parent>  
        </>
    )
}

export default Services
