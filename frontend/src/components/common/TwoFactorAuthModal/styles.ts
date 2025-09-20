import * as Dialog from "@radix-ui/react-dialog"
import styled from "styled-components"

export const Overlay = styled(Dialog.Overlay)`

position: fixed;
width: 100vw;
height: 100vh;
inset: 0;
background-color: rgba(0, 0, 0, 0.75);


`

export const Title = styled(Dialog.Title)`
font-size: ${props=>props.theme.fontSizes["lg"]};
color: ${props=>props.theme.colors["textDark"]};

margin-bottom: .8rem;


`

export const Content = styled(Dialog.Content)`
background-color: ${props=>props.theme.colors["bgWhite"]};
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 1001;

/* Set a fixed width instead of min-width to control the modal size */
/* Set a fixed width instead of min-width to control the modal size */
width: min(90vw, 42rem);
max-width: 42rem;

padding: 2.5rem 2rem;
border-radius: 12px;
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

display: flex;
flex-direction: column;


form{
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 1.5rem;
}

form div{
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap; /* Allow wrapping on very small screens */

    padding: 5rem 0;

}

form div input{
    background-color: ${props=>props.theme.colors["bgGray"]};
    width: 4.5rem;
    height: 4.5rem;

    border-radius: 8px;

    text-align: center;
    font-size: ${props=>props.theme.fontSizes["md"]};
    color: black;
    border: 2px solid ${props=>props.theme.colors["green"]};

}
form div input::placeholder{
    text-align: center;
}

form div input:focus{
    outline: none;
    border-color: ${props=>props.theme.colors["green"]};
    box-shadow: 0 0 0 2px rgba(0, 255, 0, 0.2);
}

label{
    font-size: ${props=>props.theme.fontSizes["md"]};
    color: ${props=>props.theme.colors["textDark"]};
}

`

export const ContainerIconModal = styled.div`
background-color: ${props=>props.theme.colors["greenLight"]};
width: 3rem;
height: 3rem;

display: flex;
align-items: center;
justify-content: center;

margin-bottom: 2rem;	

border-radius: 50%;
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

&:focus{
    outline: 2px solid ${props=> props.theme.colors["green"]};
}

`

export const CloseButton = styled(Dialog.Close)`

background-color: transparent;
border: none;

position: absolute;

top: 1rem;
right: 1rem;
cursor: pointer;

color: ${props=> props.theme.colors["textDark"]};

line-height: 0; //It avoids the spece between the icon and the button

&:focus{
    outline: 2px solid ${props=> props.theme.colors["green"]};
}

`

export const ContainerLearnMore = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

h4{
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${props=> props.theme.colors["textDark"]};
}

p{
    font-size: ${props=> props.theme.fontSizes["sm"]};
    color: ${props=> props.theme.colors["textDark"]};
}

p a{
    color: ${props=> props.theme.colors["purpleDark"]};
    text-decoration: underline;
}

`
