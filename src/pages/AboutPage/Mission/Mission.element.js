import styled from "styled-components";

export const MissionCon = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

margin-top: 30px;
background-color: #FFE8C2;
padding: 6rem 10rem;



@media  screen and (max-width:900px){
    flex-direction: column;
    padding: 6rem 10px;
    align-items: center;

}

@media  screen and (max-width:1200px){
    padding: 6rem 40px;
}
`
export const MissionImgCon = styled.div`
background: url('../../../assets/images/Ellipse 4.png') center center/cover no-repeat;


`
export const MissionImg = styled.img`
height: 340px;
z-index: 44;
position: absolute;
margin-top: 50px;
margin-left: -450px;

@media  screen and (max-width:1200px){
    margin-left: -350px;
    margin-top: 40px;
    width: 350px;
    height: 300px;
}


@media  screen and (max-width:900px){
    margin-top: 60px;
    width: 300px;
    height: 230px;
}

@media  screen and (max-width:768px){
    margin-top: 40px;
    margin-left: -270px;
    width: 270px;
    height: 200px;
}

`


export const CoverImg = styled.img`
height: 450px;
width: 450px;
position: relative; 

@media  screen and (max-width:1200px){
    width: 380px;
    height: 380px;
}

@media  screen and (max-width:900px){
    width: 350px;
    height: 350px;
}
@media  screen and (max-width:768px){
    width: 270px;
    height: 270px;
}

`
export const MissionStatCon = styled.div`


`
export const MissionStat = styled.div`
padding: 0 40px;
margin-left: 80px;
color: #232262;

@media  screen and (max-width:1200px){
 margin-left: 60px;
}

@media  screen and (max-width:900px){

text-align: center;
margin: 0;
margin-top: 20px;
padding: 0;

}
`

export const Break = styled.br`

@media screen and (max-width:900px){
    display: none;
}
`


export const Lead = styled.h1`
text-align: left;


@media  screen and (max-width:900px){
text-align: center;

}

`
export const SubLead = styled.p`
font-size: 15px;
margin: 10px 0;

`
export const Text = styled.p`
margin: 10px 0;
font-size: 13px;

`
export const But = styled.button`
padding: 8px 18px;
background-color:#232262 ;
color: white;
outline: none;
border: none;
cursor: pointer;
border-radius: 20px;

@media screen and (max-width:900px){
    padding: 9px 24px;
    font-size: 17px;
}
`
