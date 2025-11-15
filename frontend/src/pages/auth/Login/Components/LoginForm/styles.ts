import styled from "styled-components";
import { responsive } from "@/styles/media";
import type { DefaultTheme } from "styled-components";

export const ContainerForm = styled.div`

background:  ${props=> props.theme.colors["bgGray"]};

width: 100%;
min-height: 30rem;


display: flex;
flex-direction: column;
justify-content: center;

gap: 3rem;

border-radius: 0 8px 8px 0;

padding: 5rem 3.5rem ;

z-index: 2;

    // For screens 1440px and SMALLER (not larger!)
    ${responsive.laptopL`
    padding: 2rem 1.2rem ;
  `}

      // For screens 1440px and SMALLER (not larger!)
      /* ${responsive.maxLaptopL`
    padding: 1rem 1.2rem ;
  `} */

>div:first-child{
    display: flex;
    flex-direction: column;
    align-items: center;
     
    gap: .5rem;
}
>div:first-child>h1{
    color: ${props=> props.theme.colors["bgGrayDark"]};
    font-size: ${props=> props.theme.fontSizes.xl};
    font-family: ${props=> props.theme.fonts["title"]};
    letter-spacing: ${props=> props.theme.letterSpacing.wide};

    // For screens 1440px and SMALLER (not larger!)
  ${responsive.laptopL`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes["lg"]};
  `}



}
>div:first-child>p{
    color: ${props=> props.theme.colors["bgGrayDark"]};
    font-size: ${props=> props.theme.fontSizes.base};

    // For screens 1440px and SMALLER (not larger!)
  ${responsive.laptopL`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes["sm"]};

    text-align: center;
  `}
    
}
form{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
}

form label{
    font-size: ${props=> props.theme.fontSizes.base};
    color: ${props=> props.theme.colors["bgGrayDark"]};
    font-weight: ${props=> props.theme.fontWeights.bold};

        // For screens 1440px and SMALLER (not larger!)
  ${responsive.laptopL`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes["sm"]};
  `}

}


input:focus{
    border-bottom: 2px solid ${props=> props.theme.colors["green"]};
}

`

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 1rem;
    

    position: relative;

    i{
    position: absolute;

    left: 10px;
    }

    span{
        color: ${props=> props.theme.colors["badgeRedText"]};
    }
`

export const IconEmail = styled.i`

    position: absolute;

    left: 10px;
    top: 35%;

    font-size:22px; //size of the icon

    // For screens 1440px and SMALLER (not larger!)
  ${responsive.laptopL`
    top: 30%;	
    font-size:18px //size of the icon
  `}
`

export const IconPassword = styled.i`

    position: absolute;

    left: 10px;
    top: 28%;

    font-size:22px; //size of the icon

    // For screens 1440px and SMALLER (not larger!)
  ${responsive.laptopL`
    top: 23%;	
    font-size:18px; //size of the icon
  `}
`

export const IconEye = styled.i`
    font-size:30px; //size of the icon

    // For screens 1440px and SMALLER (not larger!)
  ${responsive.laptopL`
    font-size:22px; //size of the icon
  `}
`

export const ContainerInputEmail = styled.div`
	
width: 100%;

`
export const ContainerInputPassword = styled.div`


width: 100%;
height: 6rem;

display: flex;
flex-direction: column;
align-items: flex-end;

position: relative;


`	

export const InputEmail = styled.input`

    background-color: transparent;

    width: 100%;

    padding: 10px 55px;
    font-size: ${props=> props.theme.fontSizes.md};

    transition: border 0.3s ease;

    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #ccc;

    margin-bottom: .5rem;

    color: ${props=> props.theme.colors["bgGrayDark"]};
    caret-color: ${props=> props.theme.colors["green"]};// Change input cursor color
    
    /* override Chrome’s yellow/white autofill background */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
    -webkit-text-fill-color: ${props=>props.theme.colors["bgGrayDark"]} !important;
    transition: background-color 5000s ease-in-out 0s;
  }

    // For screens 1440px and SMALLER (not larger!)
    ${responsive.laptopL`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes["xs"]};
  `}

`

export const ContainerErrorEmail = styled.div`

width: 100%;
min-height: 1.5rem;

display: flex;
align-items: center;


`


export const InputPassword = styled.input`

    width: 100%;
    padding: 10px 55px;
    font-size: ${props=> props.theme.fontSizes.md};

    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #ccc;

    transition: border 0.3s ease;

    color: ${props=> props.theme.colors["bgGrayDark"]};
    caret-color: ${props=> props.theme.colors["green"]};// Change input cursor color
    
    /* override Chrome’s yellow/white autofill background */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
    -webkit-text-fill-color: ${props=>props.theme.colors["white"]} !important;
    transition: background-color 5000s ease-in-out 0s;
  }

      // For screens 1440px and SMALLER (not larger!)
      ${responsive.laptopL`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes["xs"]};
  `}

`

export const ContainerForgotPassword = styled.div`

width: 100%;

padding: 1rem 0;

display: flex;
align-items: center;
justify-content: space-between;

a{
    color: ${props=> props.theme.colors["purpleDark"]};

    font-size: ${props=> props.theme.fontSizes.sm};
    font-weight: ${props=> props.theme.fontWeights.bold};

    // For screens 1440px and SMALLER (not larger!)
    ${responsive.laptopL`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes["xs"]};
  `}
}

`

export const ButtonShowPassword = styled.button`
background-color: transparent;

position: absolute;
right: 10px;

width: 50px;
height: 50px;

display: flex;
align-items: center;
justify-content: center;

border: none;

cursor: pointer;

    // For screens 1440px and SMALLER (not larger!)
    ${responsive.laptopL`
    right: 5px;
  `}


`

export const ContainerActions = styled.div`

display: flex;
flex-direction: column;
flex:1;
align-items: center;

padding-top: 2.5rem;

    // For screens 1440px and SMALLER (not larger!)
    ${responsive.laptopL`
    padding-top: 1.5rem;
  `}
`

export const ButtonForm = styled.button`

background: ${props=> props.theme.colors["green"]};

width: 100%;

height: 3.8rem;

border: none;
border-radius: 8px;

font-size: ${props=> props.theme.fontSizes.md};
font-weight: ${props=> props.theme.fontWeights.bold};
color: ${props=> props.theme.colors["white"]};

margin-bottom: 1rem;

cursor: pointer;

    // For screens 1440px and SMALLER (not larger!)
    ${responsive.laptopL`
    height: 3rem;
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes["sm"]};
  `}



`

export const CreateAccountLink = styled.p`

display: flex;
align-items: center;
gap: .3rem;

color: ${props=> props.theme.colors["bgGrayDark"]};
width: ${props=> props.theme.fontWeights["bold"]};

    // For screens 1440px and SMALLER (not larger!)
    ${responsive.laptopL`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes["xs"]};
  `}

a{
    text-decoration: none;
    color: ${props=> props.theme.colors["purpleDark"]};
    font-weight: ${props=> props.theme.fontWeights["bold"]};
    font-size: ${props=> props.theme.fontSizes.sm};

    // For screens 1440px and SMALLER (not larger!)
    ${responsive.laptopL`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes["xs"]};
  `}
}
`