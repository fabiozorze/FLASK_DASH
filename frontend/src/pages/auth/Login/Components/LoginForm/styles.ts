import styled from "styled-components";
import { media } from "@/styles/media";

export const ContainerForm = styled.div`

background:  rgba(46, 0, 79, .6);

width: min(90vw, 37.6rem);
height: min(90vh, 42rem);

display: flex;
flex-direction: column;
justify-content: center;

gap: 3rem;

box-shadow: 4px 4px 8px 1px rgba(106, 90, 205, 0.2);

border-radius: 8px;

padding: 0 3.5rem ;

z-index: 2;

${media.xxl}{
    width: 40rem;
   height: 50rem;

   gap: 5rem;
}

>div:first-child{
    display: flex;
    flex-direction: column;
     
    gap: .5rem;
}
>div:first-child>h1{
    font-size: ${props=> props.theme.fontSizes.lg};
    font-family: ${props=> props.theme.fonts["title"]};
    letter-spacing: ${props=> props.theme.letterSpacing.wide};

    ${media.xxl}{
        font-size: ${props=> props.theme.fontSizes.xxl};
    }
}
>div:first-child>p{
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
    color: ${props=> props.theme.colors["white"]};
    font-weight: ${props=> props.theme.fontWeights.bold};

    ${media.xxl}{
        font-size: ${props=> props.theme.fontSizes.md};
    }
}


input:focus{
    border-bottom: 2px solid ${props=> props.theme.colors["green"]};
}


form > div:nth-child(2)>input{
    margin-bottom: .3rem;
}


form > div:nth-child(2){
    margin: 3rem 0;
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
    
    gap: .5rem;

    position: relative;


    i{
    position: absolute;

    left: 10px;
}

`

export const IconEmail = styled.i`
    top: 50%;
`

export const IconPassword = styled.i`
    top: 20%;
`

export const Input = styled.input`

    padding: 10px 55px;
    font-size: 1em;

    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #ccc;

    transition: border 0.3s ease;

    color: ${props=> props.theme.colors["white"]};
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
export const ContainerInputPassword = styled.div`

width: 100%;
height: 6rem;
display: flex;
flex-direction: column;
align-items: flex-end;

position: relative;

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

    color: ${props=> props.theme.colors["white"]};
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

padding: 1rem 0;

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

color: ${props=> props.theme.colors["white"]};
width: ${props=> props.theme.fontWeights["bold"]};

a{
    color: ${props=> props.theme.colors["green"]};
}
`