import styled from 'styled-components';


export const InfoSec = styled.div`
color: black;
/* padding:160px 0; */
background-color: #f1f1f1;

`;

export const InfoRow = styled.div`
display: flex;
align-items: center;
justify-content: space-around;



@media screen and (max-width:768px){
    flex-direction: column;
    padding-top: 70px;
}
`;

export const ImageWrapper = styled.div`


`

export const ImageCon = styled.img`
height: 670px;
width: 630px;

@media screen and (max-width:1200px){
    width: 500px;
    height: 550px;
}
@media screen and (max-width:900px){
    width: 380px;
    height: 430px;
}
@media screen and (max-width:768px){
    width: 280px;
    height: 330px;
    margin-right: 40px;
}



`


export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0px;

@media screen and (max-width:768px) {
    padding-bottom: 65px;

}

`;

export const LeadText = styled.h1`
font-size: 3.5rem;
color: #232262;
font-weight: 700;



@media screen and (max-width:900px){
    font-size: 2.5rem; 
    
}
@media screen and (max-width:768px){
    font-size: 2.5rem; 
    text-align: center;
    
}


`

export const Break = styled.br`

@media screen and (max-width:900px){
    display: none;
}
`

export const Follow = styled.p`
margin-top: 15px;
font-size: 1.2rem;
color: #232262;

@media screen and (max-width:968px){
    font-size: .9rem; 

    
}
@media screen and (max-width:768px){
    font-size: 1rem; 
    text-align: center;

    
}

`