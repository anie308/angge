import React from 'react'
import CountUp from 'react-countup'
import {    ElementCon,
                    TextCon,
                    TextLg,
                    TextSm,
                    DivCon,
                    DivItem,
                    DivChild1,
                    DivChild2,
                    DivChild3,
                    Text
} from './Small.element'

function Small() {
    return (
        <ElementCon>
            <TextCon>
            <TextLg>Company Website Design Full Services.</TextLg>
            <TextSm>View our Portfolio to see more.</TextSm>
            </TextCon>

            <DivCon>
                <DivItem>
                    <DivChild1><CountUp  end={137} duration={7}/></DivChild1>
                    <Text>PROJECT DONE</Text>
                </DivItem>
                <DivItem>
                <DivChild2><CountUp end={47} duration={7}/></DivChild2>
                <Text>HAPPY CLIENT</Text>
                </DivItem>
                <DivItem>
                <DivChild3><CountUp end={34} duration={10}/></DivChild3>
                <Text>RETURN CLIENT</Text>
                </DivItem>

            </DivCon>
        </ElementCon>
    )
}

export default Small
