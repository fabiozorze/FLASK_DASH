import styled from "styled-components";

export const HeaderNavigation = styled.div`
width: 100%;
height: 4.25rem;

padding-left: 2rem;
padding-right: 2rem;

display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 2px solid ${props=>props.theme.colors["purpleDark"]} ;

`

export const NavMenu = styled.nav`
display: flex;
align-items: center;
gap: 1rem;

`

export const Title = styled.p`
font-size: ${props=>props.theme.fontSizes["lg"]};
color: ${props=>props.theme.colors["purpleDark"]};
font-weight: ${props=>props.theme.fontWeights["semibold"]};

`

export const SupportButton = styled.button`
background-color: ${props=>props.theme.colors["purple"]};

height: 36px;

display: flex;
justify-content: center;
align-items: center;
gap: .8rem;

border-radius: 8px;

padding: 0 .5rem;
`

export const MenuButton = styled.button`
background-color: ${props=>props.theme.colors["purple"]};

display: flex;
justify-content: center;
align-items: center;
gap: .8rem;

border-radius: 8px;

padding: .5rem;
`