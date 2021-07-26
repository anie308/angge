import styled from "styled-components";


export const Cont = styled.div`
padding: 30px;
display: flex;
align-items: center;
justify-content: space-around;

@media screen and (max-width:900px){
flex-direction: column;
 padding: 0;
}

`

export const Write = styled.div`
margin-left: 20px;


@media screen and (max-width:900px){
    width: auto;
    padding:  20px;
}

`
export const Textlg = styled.h1`
color: #F35564;
font-size: 65px;
line-height: 60px;
margin-bottom: 20px;

@media screen and (max-width:1200px){
    
    font-size: 35px;
    line-height: 40px;
}
@media screen and (max-width:900px){
    text-align: center;
    font-size: 40px;
    line-height: 40px;
}

`
export const Br = styled.br`


@media screen and (max-width:900px){
    display: none;
}


`
export const Textsm = styled.p`
color: #798293;
/* width: 70%; */

@media screen and (max-width:1200px){
    font-size: 15px;
}

@media screen and (max-width:900px){
    text-align: center;
   width: auto;
}


`

export const FormCon = styled.div`


@media screen and (max-width:900px){
    text-align: center;
}      
`
export const Form = styled.form`
padding: 20px 0;


@media screen and (max-width:1200px){
   margin-left: 40px;
}
@media screen and (max-width:900px){
 margin: 0;
}
`
export const InputCon = styled.div`



@media screen and (max-width:1200px){

}

`
export const Input = styled.input`
width: 70%;
border-radius: 30px;
outline: none;
border: none;
border: 2px solid #E7E7E7;
margin: 10px 0;
padding: 10px 15px ;

@media screen and (max-width:1200px){
    width: 70%;
}


@media screen and (max-width:900px){
    width: 90%;
}

`

export const Textarea = styled.textarea`
width: 70%;
height: 150%;
border-radius: 20px;
outline: none;
border: none;
border: 2px solid #E7E7E7;
margin: 10px 0;
padding: 10px 15px ;


@media screen and (max-width:1200px){
    width: 70%;
}
@media screen and (max-width:900px){
    width: 90%;
}

`

export const FormButCon = styled.div`
padding-right: 80px;


@media screen and (max-width:900px){
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}
`

export const FormBut = styled.button`
outline: none;
border: none;
color: white;
background-color: #232262;
padding: 10px 40px;
border-radius: 40px;
float: right;

@media screen and (max-width:900px){
    display: flex;
    justify-content: center;
    align-items: center;
    float :none;
}



`