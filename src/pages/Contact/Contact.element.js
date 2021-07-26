import styled from "styled-components";

export const Cont =styled.div`
padding: 80px 100px;
display: grid;
grid-template-columns:  1fr  1fr  ;



@media screen and (max-width:1300px){

padding: 30px 20px;
}
@media screen and (max-width:900px){
    display: flex;
flex-direction: column;
padding: 0;
margin: 0;
padding: 30px 20px;
}

@media screen and (max-width:1300px){

padding: 0;
}
@media screen and (max-width:900px ){
    padding: 30px;
}

`
export const Write =styled.div`

padding: 60px 0;

@media screen and (max-width:900px ){
    padding: 30px 0;
}

`
export const Textlg =styled.p`
color: #F35564;
font-size: 55px;
text-align: left;
line-height: 3rem;
font-weight: 900;
margin-bottom: 15px;


@media screen and (max-width:900px){
text-align: center;
margin-bottom: 20px;
}
`
export const Textm =styled.p`
color: #798293;

@media screen and (max-width:900px){
text-align: center;
padding: 0 50px;
}
@media screen and (max-width:700px){
    text-align: center;
padding: 0 7px;
}


`
export const FormCon =styled.div`


@media screen and (max-width:900px){
margin: 0;
padding: 0;
}



`
export const InputCon =styled.div`

`
export const Input =styled.input`
padding: 10px;
border: none;
outline: none;
border: 2px solid #E7E7E7;
border-radius: 15px;
margin: 10px 0;
width: 100%;

@media screen and (max-width:900px){

}



`
export const Textarea =styled.textarea`
padding: 10px;
border: none;
outline: none;
border: 2px solid #E7E7E7;
border-radius: 15px;
margin: 10px 0;
width: 100%;

@media screen and (max-width:900px){

}
`
export const Form =styled.form`
display: flex;
flex-direction:column;



`
export const FormButCon =styled.div`





@media screen and (max-width:900px){

}
`
export const FormBut =styled.button`
color: white;
border: none;
outline: none;
border-radius: 20px;
padding: 10px 30px;
background-color: #232262;
margin-left: 450px;

@media screen and (max-width:1200px){
margin-left:643px;
}
@media screen and (max-width:900px){
margin-left:317px;
}
@media screen and (max-width:700px){
margin-left:0;
}

`
export const Bra =styled.br`
@media screen and (max-width:900px){
display: none;
}
`
export const Br =styled.br`
@media screen and (max-width:1200px){
display: none;
}
`