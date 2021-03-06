import React from 'react'
import Slide from './Slider/Slider'
import Mission from './Mission/Mission'
import { AboutCon,
                    Trusted,
                    TrustedHead,
                TrustedChild, } from './About.elements'

function About() {
    return (
        <>
            <Trusted>
                <TrustedHead>
                    These Companies Trust Us
                </TrustedHead>
                <TrustedChild>
                    With Their Products
                </TrustedChild>
            </Trusted>
            <AboutCon>
                <Slide />
            </AboutCon>
            <Mission/>
        </>
    )
}

export default About
