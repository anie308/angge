import styled from "styled-components"
import {Container} from '../../globalStyles'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
background:#fff ;
height:80px;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
top: 0;
z-index: 999;

@media screen and (max-width:960px){
   background: #f1f1f1;
}

`;

export const NavBarContainer = styled(Container)`
display: flex;
height:80px;
justify-content: space-between;
align-items: center;



${Container}

`;

export const NavLogo = styled(Link)`
cursor: pointer;
justify-self: flex-start;
text-decoration: none;
display: flex;
align-items: center;
padding-left:20px;




`;

export const Image = styled.img`
    height: 30px;

@media screen and (max-width:960px){
    height:35px;
}
`





export const MobileIcon = styled.div`
display: none;



@media screen and (max-width:960px){
color: #232262;
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%, 60%);
font-size: 1.8rem;
cursor: pointer;
}
`;


export const NavListContainer = styled.div`

display: flex;
align-items: center;
list-style: none;
text-align: center;


 @media screen and (max-width:960px) {
     display: flex;
     flex-direction: column;
     width: 100%;
     height: 90vh;
     position: absolute;
     top: 80px;
     left: ${({click}) => (click ? 0 : '-100%')};
     transition: all 0.5s ease;
     background:#f1f1f1;
     }

`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: 200px;



@media screen and (max-width:1300px){
    margin-right:100px;
}


@media screen and (max-width:960px) {
    display: table;
    width:100%;
    flex-direction: column;
    margin:0;
    font-size:2rem;  
    }
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;








@media screen and (max-width:960px){
    margin:0;

    &:hover{
        border: none;
    }
}
`;



export const NavLink = styled(Link)`
    color: #232262;
    font-size: .9rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    cursor: pointer;

  


    @media screen and (max-width: 960px){
        color: #232262;
        text-align: center;
        justify-content:center;
        padding: 0;
        font-size: 1.2rem;
        width: 100%;
        display: flex;
        flex-direction:column;

        &:hover{
            transition: all 0.3s ease;

        }

    }
`;

export const NavBtnContainer = styled.ul`
    list-style: none;
    width: 100%;
    
`


export const NavItemBtn = styled.li`

@media screen and (max-width:960px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
}

`

export const NavBtnLink = styled(Link)`
display: flex;
justify-content:center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;


`;

export const Flexer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`;