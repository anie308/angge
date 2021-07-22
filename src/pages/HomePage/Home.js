import React from 'react'
import {
    InfoSec,
    InfoRow,
    TextWrapper,
    LeadText,
    ImageCon,
    Break,
    ImageWrapper,
    Follow
} from './Home.elements'
import { Container } from '../../globalStyles'
import secImg from '../../assets/images/About Section.png'

function InfoSection() {
    return (
        < >
            <InfoSec id='home'>
                <Container>
                    <InfoRow>
                        <TextWrapper>
                            <LeadText>
                                We make it <Break /> perfect for you
                            </LeadText>
                            <Follow>Simple . Clean . Creative.</Follow>
                        </TextWrapper>
                        <ImageWrapper>
                            <ImageCon src={secImg} alt="" />
                        </ImageWrapper>

                    </InfoRow>

                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection

