import styled from "styled-components";

export const CardContainer = styled.div`

background-color: ${props => props.theme.colors["bgWhite"]};
box-shadow: 3px 2px 5px 0px rgba(221,218,218,0.75);

width: 20rem;
height: 30rem;

display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;

border-radius: 8px;

display: flex;
flex-direction: column;

padding: 1rem;

`

export const ContainerCardTitle = styled.div`
width: 100%;
display: flex;
justify-content: center;

h2{
    color: ${props=>props.theme.colors["textDark"]};
}

`

export const ContainerDetails = styled.div`
width: 100%;

display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1rem;

p{
    color: ${props=>props.theme.colors["textDark"]};
}


`

export const ButtonDtail = styled.button`

background-color: transparent;

border: none;

font-family: ${props=>props.theme.fonts["title"]};
font-weight: ${props=>props.theme.fontWeights["bold"]};
color: ${props=>props.theme.colors["textDark"]};

letter-spacing: 1px;

cursor: pointer;

`

export const ButtonCreateStrategy = styled.button`

background-color: ${props=>props.theme.colors["green"]};

width: 12.5rem;
height: 1.12rem;

display: flex;
align-items: center;
justify-content: center;

padding: 1rem 0;

border: none;
border-radius: 8px;

font-family: ${props=>props.theme.fonts["title"]};
font-weight: ${props=>props.theme.fontWeights["bold"]};
color: ${props=>props.theme.colors["white"]};

letter-spacing: 2px;

cursor: pointer;

`

