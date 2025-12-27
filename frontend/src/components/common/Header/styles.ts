import styled from "styled-components";

export const HeaderNavigation = styled.nav`
background-color: red;
width: 100%;

display: flex;
justify-content: space-between;
align-items: center;

`

export const Title = styled.p`
font-size: ${props=>props.theme.fontSizes["lg"]};
color: ${props=>props.theme.colors["purple"]};

`