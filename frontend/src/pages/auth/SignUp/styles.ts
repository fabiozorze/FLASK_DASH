import styled from "styled-components";

export const Container = styled.div`
width: 100vw;

display: flex;
justify-content: flex-end;
align-items: stretch;

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

font-size: ${props => props.theme.fontSizes["base"]};

margin-top: 2rem;
margin-bottom: 3rem;


`

export const ContainerForm = styled.div`

  background:  ${props => props.theme.colors["bgGrayDark"]};

  display: flex;
  flex-direction: column;

  max-width: 45rem;
  height: 100dvh;

  padding: 7rem 10rem;

`

export const FormSignUp = styled.form`

display: flex;
flex-direction: column;

border-radius: 8px;

margin-bottom: 3rem;
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
    }
`


export const ContainerPolices = styled.div`

width: 100%;

display: flex;
flex-direction: column;
gap: 1rem;

margin-bottom: 3rem;

a{
    color: ${props => props.theme.colors["green"]};
}

`


export const ContainerCheckBox = styled.div`
display: flex;
gap: .8rem;

label{
   display: flex;
   align-items:center;
   gap: .5rem
}

span{
    font-size: ${props => props.theme.fontSizes["xs"]};
}

`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid #ccc;
  border-radius: 3px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${HiddenCheckbox}:checked + & {
    background: #007bff;
    border-color: #007bff;
  }
`;

export const Checkmark = styled.span`
  color: ${prosp => prosp.theme.colors["green"]};
  font-size: 12px;
  display: none;

  ${HiddenCheckbox}:checked + ${StyledCheckbox} & {
    display: block;
  }
`;


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

export const ContainerReturnPage = styled.div`

background: ${props => props.theme.colors["bgMidGrayDark"]};
display: flex;
justify-content: center;
align-items: center;
gap: .5rem;

padding: 1rem 1.5rem;

border-radius: 8px;

a{
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