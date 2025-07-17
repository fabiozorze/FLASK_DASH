import styled from "styled-components";

export const ContainerAuth = styled.div`

background-color: ${props=>props.theme.colors["purpleDark"]};

width: 100%;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

form div{
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}

form div input{
    background-color: ${props=>props.theme.colors["bgGray"]};
    width: 4rem;
    height: 4rem;

    border-radius: 8px;

    text-align: center;
    font-size: ${props=>props.theme.fontSizes["md"]};

}
form div input::placeholder{
    text-align: center;
}

label{
    font-size: ${props=>props.theme.fontSizes["sm"]};
    color: ${props=>props.theme.colors["white"]};
}
button{
    background-color: ${props=>props.theme.colors["green"]};

    width: 7rem;
    height: 2.5rem;

    margin-top: 2rem;

    color: ${props=>props.theme.colors["white"]};
    font-size: ${props=>props.theme.fontSizes["md"]};
    font-weight: ${props=>props.theme.fontWeights["bold"]};

    box-shadow: none;
    border: none;
    border-radius: 8px;

    cursor: pointer;
}
`

export const AuthImage = styled.div`
background-color: ${props=>props.theme.colors["green"]};
width: 9.25rem;
height: 9.25rem;

border-radius: 50%;

display: flex;
align-items: center;
justify-content: center;

`
