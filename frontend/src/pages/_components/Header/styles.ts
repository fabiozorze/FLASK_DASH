import { NavLink as RRNavLink } from "react-router-dom"
import { styled } from "styled-components"


export const Container = styled.header`

border-bottom: 1px solid ${props => props.theme.colors["borderGray"]};

padding: 2rem 4rem;

div{
    display: flex;
    align-items: center;
}

div h1{
    font-family: ${props=> props.theme.fonts["title"]};
    font-size: ${props=> props.theme.fontSizes["xxl"]};
    font-weight: ${props=> props.theme.fontWeights["bold"]};
}

div h1 span{
    color: ${props=> props.theme.colors["green"]};
}

nav{
    display: flex;
    gap: 3rem;
}


`

export const Separator = styled.span`

border-left: 3px solid ${props=> props.theme.colors["borderGray"]};
height: 2.5rem;
margin: 0 1.5rem;
display: inline-block;

`

export const NavLink = styled(RRNavLink)`

display: flex;
align-items: center;
justify-content: center;
gap: .5rem;

text-decoration: none;

font-size: ${props=>props.theme.fontSizes["lg"]};
color: ${props=>props.theme.colors["white"]};

transition: color .2s ease;

&:hover,
&:focus-visible {
  color: ${({ theme }) => theme.colors.green};
}

&.active {
    color: ${({ theme }) => theme.colors.green};
  }

`
