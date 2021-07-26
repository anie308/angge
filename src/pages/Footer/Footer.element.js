import styled from "styled-components";
export const Cont = styled.div`
background-color: #FAFAFA;
display: block;

`
export const  Part1 = styled.div`
padding-top: 100px;
text-align: center;

 `

export const Large = styled.h1`
color: #232262;
    
    `
export const Small = styled.p`
font-size: 15px;
padding: 10px 400px;
color: #232262;
@media screen and (max-width:1200px){
    padding: 10px 100px;
}
@media screen and (max-width:900px){
    /* padding: 10px 50px; */
    padding: 0;
}
`
export const Form = styled.form`
margin-top: 20px;

`
export const Div = styled.form`
background-color: #232262;
margin: 0 400px;
padding:5px ;
border-radius: 30px;
display: flex;
align-items: center;

@media screen and (max-width:1200px){
    margin: 0 300px;
}
@media screen and (max-width:900px){
   
    margin: 0 150px ; 
}
@media screen and (max-width:700px){
    background-color: #fff;
    flex-direction: column;
    margin: 0 ;
    border-radius: 0;
    background-color: #FAFAFA;
}
`
export const Input = styled.input`
background-color: #232262;
outline: none;
border: none;
color: #FFFFFF;
width: 95%;
padding-left: 10px;

@media screen and (max-width:700px){
   
border-radius: 30px;
padding: 15px 0;
padding-left: 15px;
margin-bottom: 20px;
}

`
export const Button = styled.button`
border-radius:30px ;
padding:  15px 35px;
border: none;
outline: none;
color:#232262;

`
export const   Part2 = styled.div`
    padding: 0 30px;
    margin-top: 60px;
    display: flex;
    padding-bottom: 40px;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width:1000px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 60px;
    }
    @media screen and (max-width:700px){
        display: flex;   
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;

    }
`

export const Div1 = styled.div`

@media screen and (max-width:700px){
    margin-bottom: 20px;
}
`
export const ImgCon =styled.div`

`
export const Imag =styled.img`
height: 30px;
`
export const Smal =styled.p`
text-align: left;
font-size: 13px;
color:#232262;
`
export const Br =styled.br`
display: block;
@media screen and (max-width:1200px){
display: none;
}

`
export const Bra =styled.br`
display: none;
@media screen and (max-width:1200px){
display: block;
}

`
export const  Div2 = styled.div`

@media screen and (max-width:1200px){
    margin-bottom: 20px;
}
`
export const Tit = styled.h4`
color:#232262  ;
`
export const List = styled.ul`
`
export const LIstItem = styled.li`
list-style: none;
text-align: left;
font-size: 15px;
color: #232262;
`
export const Div3 = styled.div`

@media screen and (max-width:1200px){
    margin-bottom: 20px;
}
`
export const Div4 = styled.div`

`

export const Part3 = styled.div`
margin: 0 40px;
border-top: 1px solid #DCC7FF ;
padding: 20px 0;
`

export const Lnk = styled.a`
text-decoration: none;
color:#232262 ;
`