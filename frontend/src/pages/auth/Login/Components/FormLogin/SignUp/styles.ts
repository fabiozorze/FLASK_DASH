import styled from "styled-components";
import SignUpBG from "../../../../../../assets/img/sign_up_background.png"

export const Container = styled.div`
    background: url(${SignUpBG}) no-repeat center center/cover;

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: flex-start;

    form{
        background:  rgba(46, 0, 79, .2);

        width: 60rem;
        max-height: 100vh;


        display: flex;
        flex-direction: column;

        padding:18rem 15rem 0 15rem;

        border-radius: 8px;
    }

    a{
        color: ${props=>props.theme.colors["green"]};
        text-decoration: none;
    }

`


export const ContainerInputs = styled.div`

margin-bottom: 3rem;

label{
    color: ${props=>props.theme.colors["green"]};
}

input:focus{
    border-bottom: 2px solid ${props=> props.theme.colors["green"]};
}

    input{
    background-color: transparent;

    width: 100%;
    height: 2rem;

    padding: 1.5rem;
    
    margin: .8rem 0;

    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #ccc;

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
    }
`

export const ContainerTitleSignUp = styled.div`

width: 100%;

font-size: ${props=>props.theme.fontSizes["lg"]};

margin-bottom: 5rem;


`

export const ContainerActions = styled.div`

width: 100%;
display: flex;
justify-content: space-between;
align-items: flex-end;


`


export const ContainerPolices = styled.div`

width: 100%;

display: flex;
flex-direction: column;
gap: 1rem;

margin-bottom: 5rem;

`


export const ContainerCheckBox = styled.div`
display: flex;
gap: .8rem;

label{
   display: flex;
   align-items:center;
   gap: .5rem
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
  color: ${prosp=>prosp.theme.colors["green"]};
  font-size: 12px;
  display: none;

  ${HiddenCheckbox}:checked + ${StyledCheckbox} & {
    display: block;
  }
`;

export const ButtonFormSignUp = styled.button`

background: ${props => props.theme.colors["green"]};

width: 8rem;
height: 3rem;

border: none;
border-radius: 8px;

font-size: ${props => props.theme.fontSizes.md};
font-weight: ${props => props.theme.fontWeights.bold};
color: ${props => props.theme.colors["white"]};


cursor: pointer;

`