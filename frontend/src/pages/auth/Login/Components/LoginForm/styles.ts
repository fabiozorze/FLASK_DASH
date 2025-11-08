import styled from "styled-components";
import { media } from "@/styles/media";

export const ContainerForm = styled.div`

background:  ${props=> props.theme.colors["bgGray"]};

width: 100%;
height: min(90vh, 42rem);


display: flex;
flex-direction: column;
justify-content: center;

gap: 3rem;

border-radius: 0 8px 8px 0;

padding: 0 3.5rem ;

z-index: 2;

/* ${media.xxl}{
    width: 40rem;
   height: 50rem;

   gap: 5rem;
} */

>div:first-child{
    display: flex;
    flex-direction: column;
    align-items: center;
     
    gap: .5rem;
}
>div:first-child>h1{
    color: ${props=> props.theme.colors["bgGrayDark"]};
    font-size: ${props=> props.theme.fontSizes.lg};
    font-family: ${props=> props.theme.fonts["title"]};
    letter-spacing: ${props=> props.theme.letterSpacing.wide};

    ${media.xxl}{
        font-size: ${props=> props.theme.fontSizes.xxl};
    }
}
>div:first-child>p{
    color: ${props=> props.theme.colors["bgGrayDark"]};
    font-size: ${props=> props.theme.fontSizes.sm};
    
    ${media.xxl}{
        font-size: ${props=> props.theme.fontSizes.md};
    }
}
form{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
}

form label{
    font-size: ${props=> props.theme.fontSizes.sm};
    color: ${props=> props.theme.colors["bgGrayDark"]};
    font-weight: ${props=> props.theme.fontWeights.bold};

    ${media.xxl}{
        font-size: ${props=> props.theme.fontSizes.md};
    }
}


input:focus{
    border-bottom: 2px solid ${props=> props.theme.colors["green"]};
}


a{
    text-decoration: none;
    font-size: ${props=> props.theme.fontSizes.sm};

    cursor: pointer;
}

form > a{
    text-align: center;
    font-size: ${props=> props.theme.fontSizes.sm};
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
    top: 35%;
`

export const IconPassword = styled.i`
    top: 28%;
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
    font-size: 1em;

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
    font-size: 1em;

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

`

export const ContainerForgotPassword = styled.div`

width: 100%;

padding: 1rem 0;

display: flex;
align-items: center;
justify-content: space-between;

a{
    color: ${props=> props.theme.colors["purpleDark"]};
}

`

export const ButtonShowPassword = styled.button`
background-color: transparent;
position: absolute;
right: 10px;

width: 50px;
height: 40px;

display: flex;
align-items: center;
justify-content: center;

border: none;

cursor: pointer;


`

export const ContainerActions = styled.div`

display: flex;
flex-direction: column;
flex:1;
align-items: center;

padding-top: 2.5rem;

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

`

export const CreateAccountLink = styled.p`

display: flex;
align-items: center;
gap: .3rem;

color: ${props=> props.theme.colors["bgGrayDark"]};
width: ${props=> props.theme.fontWeights["bold"]};

a{
    color: ${props=> props.theme.colors["purpleDark"]};
    font-weight: ${props=> props.theme.fontWeights["bold"]};
}
`