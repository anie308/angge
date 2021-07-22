import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', san-serif;
}
`;
export  const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right:50px;
    padding-left:50px;
    






@media screen and (max-width: 991px) {
    padding:0 20px;
    

}
`
export const Button = styled.button`
    border-radius: 23px;
    background: ${({primary}) => (primary ? '#232262' : '#fff')};
    white-space:no-wrap;
    padding:8px 25px;
    color:#fff;
    /* font-size: ; */
    outline: none;
    border: none;
    cursor: pointer;


    &:hover{
        transition: all 0.3s ease-out;
        
    }


    @media  screen and (max-width:960px){
        width:100%;
    } 
`

export default GlobalStyle;