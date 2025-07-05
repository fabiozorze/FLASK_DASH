import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body{
    background: ${props=>props.theme.colors["purpleDark"]};
    color: ${props => props.theme.colors["white"]} ;
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: ${props=>props.theme.fonts.main};
    font-weight: ${props=>props.theme.fontWeights.regular};
    font-size: ${props=>props.theme.fontSizes.md};
}

`;