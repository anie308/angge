import React from 'react'
import {
    Contain,
    Write,
    Textlg,
    Textm,
    Cont,
    ContChild,
    ImgCon,
    Imag,
    Name,
    Qual
} from './Team.element'
import customer from '../../assets/images/Ellipse 7.png'



function Team() {
    return (
        <Contain>
            <Write>
                <Textlg>Meet  our  team</Textlg>
                <Textm>The Smartest people work every day to provide the
                    best services to make our clients happy  </Textm>
            </Write>
            <Cont>
                <ContChild>
                    <ImgCon>
                        <Imag src={customer} />
                    </ImgCon>
                    <Name>Abas Eton</Name>
                    <Qual>CEO & Design Director
                    </Qual>
                </ContChild>
                <ContChild>
                    <ImgCon>
                        <Imag src={customer} />
                    </ImgCon>
                    <Name>Abas Eton</Name>
                    <Qual>CEO & Design Director
                    </Qual>
                </ContChild>
                <ContChild>
                    <ImgCon>
                        <Imag src={customer} />
                    </ImgCon>
                    <Name>Abas Eton</Name>
                    <Qual>CEO & Design Director
                    </Qual>
                </ContChild>
                <ContChild>
                    <ImgCon>
                        <Imag src={customer} />
                    </ImgCon>
                    <Name>Abas Eton</Name>
                    <Qual>CEO & Design Director
                    </Qual>
                </ContChild>
            </Cont>

        </Contain>
    )
}

export default Team
