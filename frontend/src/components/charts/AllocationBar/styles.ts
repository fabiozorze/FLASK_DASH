
import styled from "styled-components";

export const Wrap = styled.div`
display:flex; 
flex-direction:column; 
gap:.5rem;

`

export const Legend = styled.div`
display:flex; 
justify-content: center;
gap:1rem; 
flex-wrap:wrap; 

font-weight: ${props => props.theme.fontWeights["bold"]};

`

export const LegendItem = styled.span`

display:flex; 
align-items:center;
gap:.4rem; 

p{
    color: ${props=>props.theme.colors["textDark"]};
}

`

export const Dot = styled.span`
width:.6rem; 
height:.6rem; 

display:inline-block;

border-radius:50%; 

`