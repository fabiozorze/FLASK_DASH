import styled from "styled-components";

export const ContainerSlogan = styled.div`

display: flex;
flex-direction: column;
text-align: center;

h1{
    font-family: ${props=> props.theme.fonts["title"]};
    font-size: ${props=> props.theme.fontSizes["xxl"]};
    font-weight: ${props=> props.theme.fontWeights["bold"]};
}

h1 span{
    color: ${props=> props.theme.colors["green"]};
}

p{
    font-family: ${props=> props.theme.fonts["slogan"]};
    font-size: ${props=> props.theme.fontSizes["lg"]};
    font-weight: ${props=> props.theme.fontWeights["light"]};
}

`