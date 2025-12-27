import { NavLink as RRNavLink } from "react-router-dom"
import { styled } from "styled-components"


export const Container = styled.header`
background-color: green;
width: 16.6rem;
max-width: 16.6rem;
height: 100vh;


display: flex;

`

export const MenuContainer = styled.aside`
background-color: ${props=>props.theme.colors["bgGrayDark"]};

width: 100%;

display: flex;
flex-direction: column;
align-items: center;

padding-top: 2rem;
padding-left: 1.5rem;
padding-right: 1.5rem;

`

export const ContainerTitle = styled.div`
width: 100%;

display: flex;
justify-content: center;

margin-bottom: 3rem;

h1{
    font-family: ${props=> props.theme.fonts["title"]};
    font-size: ${props=> props.theme.fontSizes["lg"]};
    font-weight: ${props=> props.theme.fontWeights["bold"]};
}

h1 span{
    color: ${props=> props.theme.colors["green"]};
}

`

export const Separator = styled.span`

border-left: 3px solid ${props=> props.theme.colors["borderGray"]};
height: 2.5rem;
margin: 0 1.5rem;
display: inline-block;

`

export const Menu = styled.nav`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`



export const NavLink = styled(RRNavLink)`

display: flex;
align-items: center;
justify-content: flex-start;
gap: .5rem;

position: relative;

text-decoration: none;

font-size: ${props=>props.theme.fontSizes["md"]};
color: ${props=>props.theme.colors["white"]};

padding-left: 1rem; 

transition: color .2s ease;


&:hover,
&:focus-visible {
  color: ${({ theme }) => theme.colors.green};
}

&.active {
    color: ${({ theme }) => theme.colors.green};

    &::before{
        content: "";
        position: absolute;
        left: 5px;
        top: 50%;

        transform: translateY(-50%);

        background-color: ${props=>props.theme.colors["green"]};        
        width: .2rem;
        height: 2.5rem;


    }
  }

`

export const ContainerAccount = styled.div`
display: flex;
justify-content: flex-start;

margin-top: 4rem;

padding-left: 1rem; 


color: ${props=>props.theme.colors["bgMidGrayDark"]};
font-weight: ${props=>props.theme.fontWeights["bold"]};

`