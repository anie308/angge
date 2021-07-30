import React from 'react'
import { FiFacebook } from 'react-icons/fi';
import {FiTwitter } from 'react-icons/fi';
import {FiInstagram } from 'react-icons/fi';
import {FiYoutube } from 'react-icons/fi';
import {AiOutlineCopyright } from 'react-icons/ai';

import {
    Cont,
    Part1,
    Part2,
    Large,
    Small,
    Form,
    Div,
    Button,
    Input,
    Div1,
    ImgCon,
    Imag,
    Smal,
    Br,
    Bra,
    Div2,
    Tit,
    List,
    LIstItem,
    Div3,
    Div4,
    Part3,
    Lnk,
     Copy,
     IconsBag,
     IconCon,
     Tet
} from './Footer.element'
import logo from '../../assets/images/Asset 1.png'

function Footer() {
    return (
        <Cont>
            <Part1>
                <Large>Like Our Service? Subscribe Us</Large>
                <Small>As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</Small>
                <Form>
                    <Div>
                        <Input placeholder='Enter your email'></Input>
                        <Button>Subscribe</Button>
                    </Div>

                </Form>
            </Part1>
            <Part2>
                <Div1>
                    <ImgCon>
                       <Lnk href='#'> <Imag src={logo} /></Lnk>
                    </ImgCon>
                    <Smal>
                        Proin ac quam et lectus vestibulum blandit.<Bra/> Nunc <Br/>maximus nibh at placerat <Bra/>tincidunt. Nam sem  <Br/> lacus, ornare<Bra/> non ante sed, ultricies fringilla <Br/>massa.
                    </Smal>
                </Div1>
                <Div2>
                    <Tit>COMPANY</Tit>
                    <List>
                        <LIstItem><Lnk href='#'>About Us</Lnk> </LIstItem>
                        <LIstItem><Lnk href='#'>Contact us</Lnk></LIstItem>
                        <LIstItem><Lnk href='#'>Careers</Lnk></LIstItem>
                        <LIstItem><Lnk href='#'>Supports</Lnk></LIstItem>
                    </List>
                </Div2>
                <Div3>
                <List>
                        <LIstItem><Lnk href='#'>FAQ </Lnk></LIstItem>
                        <LIstItem><Lnk href='#'>Terms</Lnk></LIstItem>
                        <LIstItem><Lnk href='#'>Privacy</Lnk></LIstItem>
                        <LIstItem><Lnk href='#'>Blog</Lnk></LIstItem>
                    </List>
                </Div3>
                <Div4>
                <Tit>Contact</Tit>
                    <List>
                        <LIstItem>Phone: +234 906 953 2794</LIstItem>
                        <LIstItem>Email: anggle@gmail.com</LIstItem>
                        <LIstItem>Address: Uyo, Akwa Ibom, Nigeria</LIstItem>
                    </List>
                </Div4>

            </Part2>
            <Part3>
              <IconsBag>
              <IconCon> < FiFacebook/> </IconCon>
              <IconCon>< FiTwitter/></IconCon>
              <IconCon>  <FiInstagram/></IconCon>
                <IconCon> <FiYoutube/></IconCon>  
                </IconsBag>
               
                <Copy>
                <AiOutlineCopyright/>
                <Tet> 2021 - All Rights Reserved</Tet>
                </Copy>
            </Part3>
        </Cont>
    )
}

export default Footer
