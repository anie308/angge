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
    NavLin,
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
                    <NavLogo >
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
                            <NavLin href='#home'>HOME</NavLin>
                        </NavItem>

                        <NavItem>
                            <NavLin href='#about' >ABOUT</NavLin>
                        </NavItem>

                        <NavItem>
                            <NavLin href='#services' >SERVICE</NavLin>
                        </NavItem>

                        <NavItem>
                            <NavLin >CLIENTS</NavLin>
                        </NavItem>

                        <NavItem>
                            <NavLin href='#contact' >CONTACT</NavLin>
                        </NavItem>

                    
                       

                    </NavMenu>
                    <NavBtnContainer>
                        
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink >
                                    <Button primary >LETS-TALK</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink >
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
