import styled from "styled-components";


export type ColorVariants = "green" | "purple" | "gray";
export type SizeVariants = "small" | "medium" | "large" | "full";
export type TextColorVariants = "textDark" | "textLight";

interface ButtonContainerProps {
    backgroundVariant: ColorVariants;
    size: SizeVariants;
    color: TextColorVariants;
}

const bgVariants = {
    green: '#00c46f',
    purple: '#6A5ACD',
    gray: '#f3f4f6',
}

const textColorVariants = {
    textDark: '#333333',
    textLight: '#ffffff',
}

const sizeVariants = {
    small: {
        width: '5rem',
        height: '3.8rem',
        padding: '0 1rem',
        fontSize: '0.9rem',
    },
    medium: {
        width: '7.5rem',
        height: '3.8rem',
        padding: '0 1rem',
        fontSize: '1rem',
    },
    large: {
        width: '10rem',
        height: '3.8rem',
        padding: '0 1rem',
        fontSize: '1.5rem',
    },
    full: {
        width: '100%',
        height: '4.8rem',
        padding: '0 1rem',
        fontSize: '1.5rem',
    },
}

export const ButtonContainer = styled.button<ButtonContainerProps>`

background: ${({backgroundVariant}) => bgVariants[backgroundVariant]};

width: ${({size}) => sizeVariants[size].width};
height: ${({size}) => sizeVariants[size].height};

display: flex;
align-items: center;
justify-content: center;

border: none;
border-radius: 8px;
font-size: ${({size})=> sizeVariants[size].fontSize};
font-weight: ${props=> props.theme.fontWeights.bold};
color: ${({color}) => textColorVariants[color]};

margin-bottom: 1rem;

cursor: pointer;

p{
    margin: 0;
    color: inherit;
}

`

