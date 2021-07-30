import React from 'react'
import { FiFacebook } from 'react-icons/fi';
import {FiTwitter } from 'react-icons/fi';
import {FiInstagram } from 'react-icons/fi';
import {FiYoutube } from 'react-icons/fi';
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
    Qual,
    IconsBag,
    IconCon
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
                    <IconsBag>
              <IconCon> < FiFacebook/> </IconCon>
              <IconCon>< FiTwitter/></IconCon>
              <IconCon>  <FiInstagram/></IconCon>
                <IconCon> <FiYoutube/></IconCon>  
                </IconsBag>
                </ContChild>
                <ContChild>
                    <ImgCon>
                        <Imag src={customer} />
                    </ImgCon>
                    <Name>Abas Eton</Name>
                    <Qual>CEO & Design Director
                    </Qual>
                    <IconsBag>
              <IconCon> < FiFacebook/> </IconCon>
              <IconCon>< FiTwitter/></IconCon>
              <IconCon>  <FiInstagram/></IconCon>
                <IconCon> <FiYoutube/></IconCon>  
                </IconsBag>
                </ContChild>
                <ContChild>
                    <ImgCon>
                        <Imag src={customer} />
                    </ImgCon>
                    <Name>Abas Eton</Name>
                    <Qual>CEO & Design Director
                    </Qual>
                    <IconsBag>
              <IconCon> < FiFacebook/> </IconCon>
              <IconCon>< FiTwitter/></IconCon>
              <IconCon>  <FiInstagram/></IconCon>
                <IconCon> <FiYoutube/></IconCon>  
                </IconsBag>
                </ContChild>
                <ContChild>
                    <ImgCon>
                        <Imag src={customer} />
                    </ImgCon>
                    <Name>Abas Eton</Name>
                    <Qual>CEO & Design Director
                    </Qual>
                    <IconsBag>
              <IconCon> < FiFacebook/> </IconCon>
              <IconCon>< FiTwitter/></IconCon>
              <IconCon>  <FiInstagram/></IconCon>
                <IconCon> <FiYoutube/></IconCon>  
                </IconsBag>
                </ContChild>
            </Cont>

        </Contain>
    )
}

export default Team
