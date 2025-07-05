import styled from "styled-components";

export const ContainerForm = styled.div`

background:  rgba(46, 0, 79, 0.9);

width: min(90vw, 37.6rem);
height: min(90vh, 42rem);

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 3rem;

box-shadow: 4px 4px 8px 1px rgba(106, 90, 205, 0.2);

border-radius: 8px;

form{
    background-color: gray;
    width: 90%;
    height: 12rem;
    display: flex;
    flex-direction: column;
}

div{
    display: flex;
    flex-direction: column;

    gap: .5rem;
}

input{
    padding: 10px 35px;
    font-size: 1em;

    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #ccc;

    transition: border 0.3s ease;

    margin-bottom: 3rem;
}

a{
    text-decoration: none;
}

`

export const ButtonForm = styled.button`

`