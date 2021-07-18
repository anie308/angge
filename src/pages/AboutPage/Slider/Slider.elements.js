import styled from "styled-components";

export const Item = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin:0;


.rec.rec-arrow {
    border-radius: 0;
    font-size: 15px;
}

`

export const SliderCon = styled.div`
padding: 0 250px;

@media screen and (max-width:900px){
    padding: 0 100px;
}
@media screen and (max-width:768px){
    padding:  0 30px;
}

`