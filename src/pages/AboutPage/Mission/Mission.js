import React from 'react'
import {
    MissionCon,
    MissionImgCon,
    MissionImg,
    MissionStatCon,
    MissionStat,
    Lead,
    SubLead,
    Text,
    But,
    Break,
    CoverImg
} from './Mission.element'
import mission from '../../../assets/images/Layer 1.png'
import ellipse from '../../../assets/images/Ellipse 4.png'

function Mission() {
    return (
        <>
            <MissionCon   id='about'>
                <MissionImgCon>
                    <CoverImg src={ellipse}/>
                    <MissionImg src={mission} />
                </MissionImgCon>
                <MissionStatCon>
                    <MissionStat>
                        <Lead>Why Choose Us<Break /> For Your Digital Services </Lead>
                        <SubLead>Simple! Our mission is to become the best <Break/>design agency in the world! </SubLead>
                        <Text>
                            What’s an outsourced marketing un-agency, you say? Well, we’re the antithesis to your run-of-the-mill agency that oversells and underdelivers.
                        </Text>

                        <Text>
                            Lately, it’s been about closing the biggest contracts. But what about making the biggest impact for clients? Our goal is to get RESULTS that will make clients HAPPY without overpricing.
                        </Text>

                        <But>READ MORE</But>

                    </MissionStat>
                </MissionStatCon>


            </MissionCon>
        </>
    )
}

export default Mission
