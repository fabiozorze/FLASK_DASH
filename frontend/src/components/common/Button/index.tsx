import React from "react";
import { ButtonContainer, type ColorVariants, type SizeVariants, type TextColorVariants } from "./styles";


type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends Omit<NativeButtonProps, "children"> {
    bgVariant?: ColorVariants;
    size?: SizeVariants;
    color?: TextColorVariants;
    text: string;
    type?: "button" | "submit" | "reset";
}


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ 
        bgVariant = "gray",
        size = "medium",
        color = "textDark",
        text,
        type = "button",
        ...rest
    }, ref) => {
        return (
            <ButtonContainer
                ref={ref}
                type={type}
                backgroundVariant={bgVariant}
                size={size}
                color={color}
                {...rest}
            >
                <p>{text}</p>
            </ButtonContainer>
        );
    }
);

Button.displayName = "Button";


