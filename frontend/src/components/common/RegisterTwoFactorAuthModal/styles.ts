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
width: min(90vw, 42rem);
max-width: 42rem;

padding: 2.5rem 2rem;
border-radius: 12px;
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

display: flex;
flex-direction: column;

p{
    color: ${props=> props.theme.colors["textDark"]};
}

p span{
    color: ${props=> props.theme.colors["purpleDark"]};
    font-weight: ${props=> props.theme.fontWeights.bold};
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

export const ContainerAuth = styled.div`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;

margin-top: 2rem;


`

export const ContainerQRCode = styled.div`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;

form{
    width: 100%;
    display: flex;
    flex-direction: column;

    
}

form label{
    font-size: ${props=>props.theme.fontSizes["md"]};
    color: ${props=>props.theme.colors["textDark"]};
}

form input{
    background-color: ${props=>props.theme.colors["bgGray"]};
    width: 100%;
    height: 3.5rem;
    border-radius: 8px;
    padding: 0 1rem;

    margin: 0.5rem 0;
}


form p{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: ${props=>props.theme.fontSizes["sm"]};
    color: ${props=>props.theme.colors["textDark"]};
}

`

export const QRCode = styled.div`

img{
    width: 12rem;
    height: 12rem;
    object-fit: cover;
}

`

export const ContainerManualQRCode = styled.div`
background-color: ${props=>props.theme.colors["purpleLight"]};

width: 100%;
display: flex;
flex-direction: column;
gap: 2rem;

text-align: center;

padding: 2rem 3rem;

border-radius: 8px;

margin-top: 2rem;


div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    justify-content: center;
    gap: 0.8rem;

    padding: 0 3rem;
}

div p {
    font-size: ${props=> props.theme.fontSizes["lg"]};
    color: ${props=> props.theme.colors["purpleDark"]};
}


`

export const ButtonCopySecretKey = styled.button`

background: none;


border: none;


font-size: ${props=> props.theme.fontSizes.sm};
font-weight: ${props=> props.theme.fontWeights.bold};
color: ${props=> props.theme.colors["green"]};


cursor: pointer;


`

export const Separator = styled.div`

height: 1px;
width: 100%;
background-color: ${props=> props.theme.colors["borderGray"]};

margin: 2rem 0;


`

export const ContainerButtonsForm = styled.div`

width: 100%;

display: flex;
justify-content: flex-end;
gap: 1rem;



`


