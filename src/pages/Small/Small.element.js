import styled from "styled-components";

export const ElementCon = styled.div`
padding-top: 70px;

`



export const TextCon = styled.div`
/* padding-top: 70px; */
color: #232262;
text-align: center;


@media screen and (max-width:500px){
    padding: 0 20px;
}

`
export const TextLg = styled.h1`


`
export const TextSm = styled.p`


`
export const DivCon = styled.div`
display: flex;
align-items: center;
justify-content:space-around ;
padding: 40px 150px;

@media screen and (max-width:900px){
    /* flex-direction: column; */
    padding: 40px 0;
}
@media screen and (max-width:700px){
    flex-direction: column;
    justify-content: center;
    padding: 40px 0;
}


`
export const DivItem = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
height:250px;
width:250px;
border-radius: 50px;
background-color: #FAFAFA;
box-shadow: 5px  3px  3px  #F0F0F0;



@media screen and (max-width:700px){
    height:350px;
width:350px;
    margin: 30px 0;
}
@media screen and (max-width:500px){
    height:250px;
width:250px;
    margin: 30px 0;
}

`

export const DivChild1 = styled.div`
display:flex;
align-items:center;
justify-content: center;
height: 130px;
width: 130px;
background: linear-gradient(45deg, #AF94FD, #6651F3);
border-radius: 30px;
box-shadow: 5px  3px  3px  #F0F0F0;
font-size: 38px;
color:#ffffff;
margin-top: 20px;

`
export const DivChild2 = styled.div`
display:flex;
align-items:center;
justify-content: center;
height: 130px;
width: 130px;
background:  linear-gradient(45deg, #FF95A5, #FF62A3);
border-radius: 30px;
box-shadow: 5px  3px  3px  #F0F0F0;
font-size: 38px;
color:#ffffff;
margin-top: 20px;

`
export const DivChild3 = styled.div`
display:flex;
align-items:center;
justify-content: center;
height: 130px;
width: 130px;
background :linear-gradient(45deg, #FBC9A4, #FF884A);
border-radius: 30px;
box-shadow: 5px  3px  3px  #F0F0F0;
font-size: 38px;
color:#ffffff;
margin-top: 20px;

`

export const Text = styled.p`
margin-top: 10px;
font-size: 14px;
color: #4B647E;

`