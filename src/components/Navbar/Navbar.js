import React, { useState, useEffect,  } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from '../../globalStyles'
import {
    Nav,
    NavBarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    Image,
    NavBtnContainer,
    NavListContainer,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements';
import logo from '../../assets/images/Asset 1.png'



function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const showButton = () => {
        if(window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }


    useEffect(()=> {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to='/'>
                        <Image src={logo} alt="" />
                    </NavLogo>
                    <MobileIcon
                        onClick={handleClick}
                    >
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavListContainer onClick={handleClick} click={click}>
                    <NavMenu >
                        

                        
                       <NavItem>
                            <NavLink to='/'>HOME</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to='/about'>ABOUT</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to='/service'>SERVICE</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to='/clients'>CLIENTS</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to='/contact'>CONTACT</NavLink>
                        </NavItem>

                    
                       

                    </NavMenu>
                    <NavBtnContainer>
                        
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/lets-talk'>
                                    <Button primary >LETS-TALK</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/lets-talk'>
                                    <Button  fontBig primary>LETS-TALK</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavBtnContainer>
                    </NavListContainer>
                    
                </NavBarContainer>

            </Nav>
        </>
    )
}

export default Navbar
