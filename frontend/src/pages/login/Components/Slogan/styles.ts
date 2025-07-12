import styled from "styled-components";

export const ContainerSlogan = styled.div`

width: min(90vw, 37.6rem);

display: flex;
flex-direction: column;
text-align: center;

div{
    width: 100%;
}

h1{
    font-family: ${props=> props.theme.fonts["title"]};
    font-size: ${props=> props.theme.fontSizes["xxl"]};
    font-weight: ${props=> props.theme.fontWeights["bold"]};
}

h1 span{
    color: ${props=> props.theme.colors["green"]};
}

`

export const Typewriter = styled.p`

  margin: 0;
  min-height: 1.2em;


    font-family: ${props=> props.theme.fonts["slogan"]};
    font-size: ${props=> props.theme.fontSizes["lg"]};
    font-weight: ${props=> props.theme.fontWeights["light"]};
`