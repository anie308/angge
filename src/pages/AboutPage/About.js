import React from 'react'
import Slider from './Slider/Slider'
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
                <Slider />
            </AboutCon>
        </>
    )
}

export default About