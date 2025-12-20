import { responsive } from "@/styles/media";
import styled, { type DefaultTheme } from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;

display: flex;
justify-content: flex-end;
align-items: stretch;

overflow: hidden;

`

export const Logo = styled.h1`

font-size: ${props => props.theme.fontSizes["xxl"]};
font-weight: ${props => props.theme.fontWeights["bold"]};

color: ${props => props.theme.colors["green"]};

    span{
        color: ${props => props.theme.colors["white"]};
    }
`


export const ContainerTitleSignUp = styled.div`

display: flex;
flex-direction: column;

font-size: ${props => props.theme.fontSizes["base"]};

margin-top: 2rem;
margin-bottom: 3rem;

${responsive.maxLaptopL`
    flex-direction:row;
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes["sm"]};
  `}


`

export const ContainerForm = styled.div`

  background:  ${props => props.theme.colors["bgGrayDark"]};

  display: flex;
  flex-direction: column;

  max-width: 45rem;
  height: 100vh;

  overflow: auto;

  padding: 7rem 10rem;

  ${responsive.maxLaptopL`
    width: 40rem;
    padding: 7rem;
  `}

`

export const FormSignUp = styled.form`

display: flex;
flex-direction: column;

border-radius: 8px;

margin-bottom: 3rem;

${responsive.maxLaptopL`
    margin-bottom: 1rem;
  `}
`

export const ContainerInputs = styled.div`

margin-bottom: 1rem;

::placeholder{
  font-size: ${props => props.theme.fontSizes["xs"]};
}

label{
    color: ${props => props.theme.colors["green"]};
    font-size: ${props => props.theme.fontSizes["sm"]};
}

input:focus{
    border-bottom: 2px solid ${props => props.theme.colors["green"]};
}

    input{
    background-color: transparent;

    width: 100%;

    padding: 1.5rem;
    
    margin: .3rem 0;

    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #ccc;

    color: ${props => props.theme.colors["white"]};
    caret-color: ${props => props.theme.colors["green"]};// Change input cursor color
    
    /* override Chrome’s yellow/white autofill background */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
    -webkit-text-fill-color: ${props => props.theme.colors["white"]} !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  ${responsive.maxLaptopL`
    padding: .5rem;
  `}
  
    }
`


export const ContainerPolices = styled.div`

width: 100%;

margin-bottom: 3rem;

p{
  font-size: ${props=> props.theme.fontSizes["sm"]};
}

a{
    color: ${props => props.theme.colors["green"]};
}

`

export const ContainerActions = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`


export const ButtonFormSignUp = styled.button`

background: ${props => props.theme.colors["green"]};

width: 100%;


padding: 1rem 2.5rem;

border: none;
border-radius: 8px;

font-size: ${props => props.theme.fontSizes.md};
font-weight: ${props => props.theme.fontWeights.bold};
color: ${props => props.theme.colors["white"]};


cursor: pointer;
transform: translateY(-2px);


    &:disabled{ 
        opacity: 0.6;
        cursor: not-allowed;
    }

    /* Hover state - only when NOT disabled */
    &:not(:disabled):hover{
        background: ${props => props.theme.colors["green"]};
        filter: brightness(1.2);
        
    }

`

export const Separator = styled.div`

height: 1px;
width: 100%;
background-color: ${props=> props.theme.colors["borderGray"]};

margin-top: 1rem;
margin-bottom: 3rem;
flex-shrink: 0;

`

export const ButtonReturnPage = styled.button`

background: ${props => props.theme.colors["bgMidGrayDark"]};
display: flex;
align-items: flex-start;
gap: 1rem;

padding: 1rem 1.5rem;

border: none;
border-radius: 8px;

cursor: pointer;

opacity: 0.6;
transform: translateY(-2px);

&:hover{
  opacity: 1;
}
`

export const ContainerTextReturn = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: .3rem;

font-size: ${props => props.theme.fontSizes.md};
font-weight: ${props => props.theme.fontWeights.bold};
color: ${props => props.theme.colors["white"]};

span{
  color: ${props => props.theme.colors["green"]};
}

`

export const IconReturnPage = styled.i`
display: flex;
align-items: center;
justify-content: center;

font-size: 22px;
color: ${props => props.theme.colors["green"]};
`

export const IconArrowRight = styled.i`
align-self: center;

margin-left: auto;

font-size: 18px;
color: ${props => props.theme.colors["bgGrayDark"]};

`