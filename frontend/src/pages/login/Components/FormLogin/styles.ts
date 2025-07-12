import styled from "styled-components";

export const ContainerForm = styled.div`

background:  rgba(46, 0, 79, .7);

width: min(90vw, 37.6rem);
height: min(90vh, 42rem);

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 3rem;

box-shadow: 4px 4px 8px 1px rgba(106, 90, 205, 0.2);

border-radius: 8px;

padding: 0 3.5rem ;

>div:first-child{
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center;
    gap: 1rem;
}
>div:first-child>h1{
    font-size: ${props=> props.theme.fontSizes.lg};
}
>div:first-child>p{
    font-size: ${props=> props.theme.fontSizes.sm};
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
}

form div{
    display: flex;
    flex-direction: column;
    gap: .5rem;

    position: relative;
}

form div i{
    position: absolute;
    top: 32%;
    left: 10px;

}

input:focus{
    border-bottom: 2px solid ${props=> props.theme.colors["green"]};
}

input{
    padding: 10px 55px;
    font-size: 1em;

    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #ccc;

    transition: border 0.3s ease;

    margin-bottom: 3rem;

    caret-color: ${props=> props.theme.colors["green"]}; // Change input cursor color
}

form > div:nth-child(2)>input{
    margin-bottom: .3rem;
}

form > div:nth-child(2){
    margin-bottom: 3rem;
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

export const ButtonForm = styled.button`

background: ${props=> props.theme.colors["purple"]};

height: 3.8rem;

border: none;

font-size: ${props=> props.theme.fontSizes.md};
font-weight: ${props=> props.theme.fontWeights.bold};
color: ${props=> props.theme.colors["white"]};

margin-bottom: 1rem;

cursor: pointer;

`